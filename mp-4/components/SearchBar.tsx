"use client";
import { useState } from "react";
import { IconProps } from "@/types";

export default function SearchBar({
                                      onSearch
                                  }: {
    onSearch: (results: IconProps[]) => void
}) {
    const [query, setQuery] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSearch = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!query.trim()) return;

        setIsLoading(true);
        try {
            const response = await fetch(`/api/icons/search?query=${encodeURIComponent(query)}`);
            if (!response.ok) throw new Error("Search failed");

            const data = await response.json();
            onSearch(data.icons);
        } catch (error) {
            console.error("Search error:", error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form onSubmit={handleSearch} className="w-full max-w-md mx-auto mb-8">
            <div className="flex items-center border-2 border-sky-500 rounded-full overflow-hidden text-black">
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search for icons (e.g., cat, car, food)"
                    className="w-full px-4 py-2 focus:outline-none"
                />
                <button
                    type="submit"
                    disabled={isLoading}
                    className="bg-sky-500 hover:bg-sky-600 text-black px-6 py-2 transition-colors"
                >
                    {isLoading ? "Searching..." : "Search"}
                </button>
            </div>
        </form>
    );
}