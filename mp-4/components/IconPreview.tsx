import { IconProps } from "@/types";
import Image from "next/image";

export default function IconPreview({ icon }: { icon: IconProps }) {
    // Get the preview URL from the first raster size format
    const previewUrl = icon.raster_sizes[0]?.formats[0]?.preview_url || "";

    return (
        <div className="bg-white rounded-xl p-4 m-2 w-64 shadow-md hover:shadow-lg transition-shadow text-black">
            <div className="flex justify-center mb-3">
                {previewUrl && (
                    <Image
                        src={previewUrl}
                        alt={icon.tags.join(", ")}
                        width={64}
                        height={64}
                        className="object-contain"
                    />
                )}
            </div>
            <div className="text-center">
                <h4 className="font-medium text-lg mb-2">
                    {icon.tags[0] || "Untitled Icon"}
                </h4>
                <div className="flex flex-wrap justify-center gap-1">
                    {icon.tags.slice(0, 3).map((tag, index) => (
                        <span key={index} className="bg-sky-100 text-sky-800 text-xs px-2 py-1 rounded-full">
              {tag}
            </span>
                    ))}
                </div>
            </div>
        </div>
    );
}