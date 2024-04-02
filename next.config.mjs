/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [

            {
                protocol: 'https',
                hostname: 'placehold.co',
            },
            {
                protocol: 'https',
                hostname: '100k-faces.glitch.me',
            },
            {
                protocol: 'https',
                hostname: 'upload.wikimedia.org',
            },
            {
                protocol: 'https',
                hostname: 'i.imgur.com',
            },
            {
                protocol: 'https',
                hostname: 'fakestoreapi.com',
            },
            {
                protocol: 'https',
                hostname: 'avatars.githubusercontent.com',
            }
        ]
    }
};

export default nextConfig;
