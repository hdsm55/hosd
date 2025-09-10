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
        formats: ['image/webp', 'image/avif'],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        minimumCacheTTL: 60,
        dangerouslyAllowSVG: true,
        contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
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

