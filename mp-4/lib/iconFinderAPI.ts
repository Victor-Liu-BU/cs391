"use server";

import { IconProps, SearchResponse } from "@/types";

const API_KEY = process.env.ICON_API_KEY;
const BASE_URL = "https://api.iconfinder.com/v4";

export async function searchIcons(query: string = ""): Promise<IconProps[]> {
    try {
        // Using the API key in the Authorization header
        const response = await fetch(
            `${BASE_URL}/icons/search?query=${encodeURIComponent(query)}&count=20`,
            {
                cache: "no-store",
                headers: {
                    "Authorization": `Bearer ${API_KEY}`
                }
            }
        );

        console.log("Response status:", response.status);

        if (!response.ok) {
            const errorText = await response.text();
            console.error("API Error Response:", errorText);
            throw new Error(`API error: ${response.status}`);
        }

        const data: SearchResponse = await response.json();

        // Filter out premium content
        const freeIcons = data.icons.filter(icon => !icon.is_premium);
        return freeIcons;
    } catch (error) {
        console.error("Error fetching icons:", error);
        return [];
    }
}

export async function getRandomIcons(): Promise<IconProps[]> {
    try {
        const response = await fetch(
            `${BASE_URL}/icons/search?count=12`,
            {
                cache: "no-store",
                headers: {
                    "Authorization": `Bearer ${API_KEY}`
                }
            }
        );

        if (!response.ok) {
            const errorText = await response.text();
            console.error("API Error Response:", errorText);
            throw new Error(`API error: ${response.status}`);
        }

        const data: SearchResponse = await response.json();

        const freeIcons = data.icons.filter(icon => !icon.is_premium);
        return freeIcons;
    } catch (error) {
        console.error("Error fetching random icons:", error);
        return [];
    }
}