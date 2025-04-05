export type IconProps = {
    icon_id: string;
    tags: string[];
    vector_sizes?: any[];
    is_premium: boolean;
    raster_sizes: RasterSize[];
};

export type RasterSize = {
    size_height: number;
    formats: Format[];
    size_width: number;
    size: number;
};

export type Format = {
    preview_url: string;
    format: string;
    download_url: string;
};

export type SearchResponse = {
    icons: IconProps[];
    total_count: number;
};