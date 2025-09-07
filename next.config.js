/** @type {import('next').NextConfig} */
const nextConfig = {
    // App Router is stable in Next.js 14
    experimental: {
        // Ensure App Router is properly configured
    },
    // Optimize for production builds
    swcMinify: true,
    // Ensure proper image optimization
    images: {
        unoptimized: false,
    },
    // Development optimizations
    ...(process.env.NODE_ENV === 'development' && {
        // Faster builds in development
        webpack: (config, { dev }) => {
            if (dev) {
                config.watchOptions = {
                    poll: 1000,
                    aggregateTimeout: 300,
                };
            }
            return config;
        },
    }),
};

module.exports = nextConfig;

