import type { NextConfig } from 'next'
import path from 'path'

const nextConfig: NextConfig = {
  outputFileTracingRoot: path.join(__dirname),
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000,
  },
  compress: true,
  poweredByHeader: false,
  headers: async () => [
    {
      // Apply to all routes
      source: '/(.*)',
      headers: [
        { key: 'X-Content-Type-Options', value: 'nosniff' },
        { key: 'X-Frame-Options', value: 'DENY' },
        { key: 'X-XSS-Protection', value: '1; mode=block' },
        { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        { key: 'X-Robots-Tag', value: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
        // HSTS — tells browsers to only use HTTPS for 1 year
        { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains; preload' },
        // Permissions-Policy — disable unused browser features (trust signal for Google)
        {
          key: 'Permissions-Policy',
          value: 'camera=(), microphone=(), geolocation=(self), payment=(self), usb=(), interest-cohort=()',
        },
      ],
    },
    // Static assets — immutable 1-year cache
    {
      source: '/(.*)\\.(jpg|jpeg|png|gif|webp|avif|ico|svg|woff|woff2|ttf|otf)',
      headers: [
        { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
      ],
    },
    // Sitemap XMLs — 24h cache, revalidated on CDN
    {
      source: '/sitemap(.*).xml',
      headers: [
        { key: 'Cache-Control', value: 'public, max-age=86400, s-maxage=86400, stale-while-revalidate=3600' },
        { key: 'Content-Type', value: 'application/xml; charset=utf-8' },
      ],
    },
    // robots.txt — 1h cache
    {
      source: '/robots.txt',
      headers: [
        { key: 'Cache-Control', value: 'public, max-age=3600, s-maxage=3600' },
      ],
    },
    // OG images — generated on edge, cache for 1 day
    {
      source: '/(.*)/opengraph-image',
      headers: [
        { key: 'Cache-Control', value: 'public, max-age=86400, s-maxage=86400, stale-while-revalidate=3600' },
      ],
    },
  ],
  redirects: async () => [
    { source: '/home', destination: '/', permanent: true },
    { source: '/services/locksmith', destination: '/services', permanent: true },
    { source: '/locksmith-london', destination: '/', permanent: true },
    { source: '/emergency', destination: '/services/emergency-locksmith', permanent: true },
    { source: '/24-hour', destination: '/services/24-hour-locksmith', permanent: true },
    { source: '/sitemap', destination: '/html-sitemap', permanent: true },
    { source: '/site-map', destination: '/html-sitemap', permanent: true },
  ],
}

export default nextConfig
