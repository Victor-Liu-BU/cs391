import { NextResponse } from 'next/server';
import { searchIcons } from '@/lib/iconFinderAPI';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('query') || '';

    try {
        const icons = await searchIcons(query);
        return NextResponse.json({ icons });
    } catch (error) {
        console.error('API route error:', error);
        return NextResponse.json({ error: 'Failed to fetch icons' }, { status: 500 });
    }
}