import { NextConfig } from 'next';

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn4.iconfinder.com',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'cdn0.iconfinder.com',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'cdn1.iconfinder.com',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'cdn2.iconfinder.com',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'cdn3.iconfinder.com',
                pathname: '/**',
            },
        ],
    },
};

export default nextConfig;