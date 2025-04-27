import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
    const code = req.nextUrl.searchParams.get('code');
    if (!code) {
        return NextResponse.redirect(new URL('/', req.url));
    }

    // Exchange code for access token
    const tokenRes = await fetch('https://github.com/login/oauth/access_token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
            client_id: process.env.GITHUB_CLIENT_ID,
            client_secret: process.env.GITHUB_CLIENT_SECRET,
            code,
            redirect_uri: process.env.GITHUB_REDIRECT_URI,
        }),
    });
    const tokenData = await tokenRes.json();
    const accessToken = tokenData.access_token;
    if (!accessToken) {
        return NextResponse.redirect(new URL('/', req.url));
    }

    // Fetch user data from GitHub
    const userRes = await fetch('https://api.github.com/user', {
        headers: { Authorization: `Bearer ${accessToken}` },
    });
    const user = await userRes.json();

    // Optionally, fetch user email
    const emailRes = await fetch('https://api.github.com/user/emails', {
        headers: { Authorization: `Bearer ${accessToken}` },
    });
    const emails = await emailRes.json();
    const primaryEmail = Array.isArray(emails) ? emails.find((e) => e.primary)?.email : null;

    // Redirect to profile page with user info as query params
    const params = new URLSearchParams({
        login: user.login ?? '',
        name: user.name ?? '',
        avatar_url: user.avatar_url ?? '',
        email: primaryEmail ?? '',
    });
    return NextResponse.redirect(new URL(`/profile?${params.toString()}`, req.url));
}
