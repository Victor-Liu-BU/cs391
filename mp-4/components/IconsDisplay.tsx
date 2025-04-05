"use client";
import { IconProps } from "@/types";
import { useState } from "react";
import IconPreview from "./IconPreview";
import SearchBar from "./SearchBar";

export default function IconsDisplay({
                                         inputIcons
                                     }: {
    inputIcons: IconProps[]
}) {
    const [icons, setIcons] = useState(inputIcons);

    const handleSearch = (results: IconProps[]) => {
        setIcons(results);
    };

    return (
        <div className="w-full max-w-6xl mx-auto">
            <SearchBar onSearch={handleSearch} />

            {icons.length === 0 ? (
                <div className="text-center py-10">
                    <p className="text-gray-500">No icons found. Try a different search term.</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {icons.map((icon) => (
                        <IconPreview key={icon.icon_id} icon={icon} />
                    ))}
                </div>
            )}
        </div>
    );
}