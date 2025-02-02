/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.sanity.io',
                port: '',
                pathname: '/**',
                search: '',
            }
        ]
    },
    env: {
        STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
    },
    // eslint: {
    //     ignoreDuringBuilds: true,

    // }

};

export default nextConfig;
