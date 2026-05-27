import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/admin/'],
      },
    ],
    sitemap: 'https://londonlocksmithpro.co.uk/sitemap.xml',
    host: 'https://londonlocksmithpro.co.uk',
  }
}
