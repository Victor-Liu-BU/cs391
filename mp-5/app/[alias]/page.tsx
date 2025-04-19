import { redirect } from "next/navigation";
import getCollection, { LINKS_COLLECTION } from "@/db";

export default async function AliasRedirectPage({ params }: { params: Promise<{ alias: string }> }) {
    const { alias } = await params; // Await the params Promise

    const collection = await getCollection(LINKS_COLLECTION);
    const doc = await collection.findOne({ shortId: alias });

    if (doc && doc.originalUrl) {
        redirect(doc.originalUrl);
    } else {
        redirect("/"); // Or show a 404 page
    }
}
