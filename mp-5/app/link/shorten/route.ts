import getCollection, { LINKS_COLLECTION } from "@/db";

export async function POST(request: Request) {
    const { url, alias } = await request.json();

    // Validate alias
    if (!alias || !alias.trim()) {
        return new Response(
            JSON.stringify({ error: "Alias cannot be empty." }),
            { status: 400, headers: { "Content-Type": "application/json" } }
        );
    }

    // Validate URL syntax
    let parsed: URL;
    try {
        parsed = new URL(url);
        if (!(parsed.protocol === "http:" || parsed.protocol === "https:")) {
            throw new Error();
        }
    } catch {
        return new Response(
            JSON.stringify({ error: "Invalid URL." }),
            { status: 400, headers: { "Content-Type": "application/json" } }
        );
    }

    // Attempt HTTP request to check if URL is active
    try {
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 5000); // 5s timeout

        const res = await fetch(url, {
            method: "HEAD",
            signal: controller.signal,
        });
        clearTimeout(timeout);

        // Accept all 200s, 300s, and 400s
        if (res.status < 200 || res.status >= 500) {
            return new Response(
                JSON.stringify({ error: `URL responded with status ${res.status}` }),
                { status: 400, headers: { "Content-Type": "application/json" } }
            );
        }
    } catch {
        return new Response(
            JSON.stringify({ error: "URL could not be reached." }),
            { status: 400, headers: { "Content-Type": "application/json" } }
        );
    }

    // Check for alias collision
    const collection = await getCollection(LINKS_COLLECTION);
    const shortId = alias.trim();
    const existing = await collection.findOne({ shortId });
    if (existing) {
        return new Response(
            JSON.stringify({ error: "Alias already taken." }),
            { status: 400, headers: { "Content-Type": "application/json" } }
        );
    }

    // Insert new link
    await collection.insertOne({
        shortId,
        originalUrl: url,
        createdAt: new Date(),
    });

    // Build short URL
    const host = request.headers.get("host");
    const protocol = process.env.NODE_ENV === "development" ? "http" : "https";
    const shortUrl = `${protocol}://${host}/${shortId}`;

    return new Response(
        JSON.stringify({ shortUrl }),
        { status: 200, headers: { "Content-Type": "application/json" } }
    );
}
