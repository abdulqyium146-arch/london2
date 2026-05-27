import type { Metadata } from 'next'
import { SEO, BUSINESS } from '@/lib/constants'
import type { Service, Location, PostcodeArea, Station } from '@/types'

export function generateBaseMetadata(): Metadata {
  return {
    metadataBase: new URL(SEO.siteUrl),
    title: {
      default: SEO.defaultTitle,
      template: SEO.titleTemplate,
    },
    description: SEO.defaultDescription,
    keywords: [
      'locksmith london',
      'emergency locksmith london',
      '24 hour locksmith london',
      'locksmith near me london',
      'locked out london',
    ],
    authors: [{ name: BUSINESS.name, url: SEO.siteUrl }],
    creator: BUSINESS.name,
    publisher: BUSINESS.name,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      type: 'website',
      locale: SEO.locale,
      url: SEO.siteUrl,
      siteName: SEO.siteName,
      title: SEO.defaultTitle,
      description: SEO.defaultDescription,
      images: [
        {
          url: SEO.defaultOgImage,
          width: 1200,
          height: 630,
          alt: `${BUSINESS.name} - Emergency Locksmith London`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      site: SEO.twitterHandle,
      creator: SEO.twitterHandle,
      title: SEO.defaultTitle,
      description: SEO.defaultDescription,
      images: [SEO.defaultOgImage],
    },
    alternates: {
      canonical: SEO.siteUrl,
    },
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || 'e3216d8a594638b2',
    },
    other: {
      'geo.region': 'GB-ENG',
      'geo.placename': 'London',
      'geo.position': `${BUSINESS.geo.lat};${BUSINESS.geo.lng}`,
      'ICBM': `${BUSINESS.geo.lat}, ${BUSINESS.geo.lng}`,
    },
  }
}

export function generateServiceMetadata(service: Service, location?: Location): Metadata {
  const title = location
    ? `${service.name} ${location.name} | 24/7 | ${location.responseTime} Response`
    : service.metaTitle
  const description = location
    ? `${service.name} in ${location.name} available 24/7. ${location.responseTime} response. No call-out fee. Fully insured. Call ${BUSINESS.phone}.`
    : service.metaDescription
  const canonicalPath = location
    ? `/${service.slug}-${location.slug}`
    : `/services/${service.slug}`

  return {
    title,
    description,
    keywords: [
      ...service.keywords,
      ...(location
        ? [
            `${service.name.toLowerCase()} ${location.name.toLowerCase()}`,
            `locksmith ${location.name.toLowerCase()}`,
            `locksmith ${location.postcode.toLowerCase()}`,
          ]
        : []),
    ],
    openGraph: {
      title,
      description,
      url: `${SEO.siteUrl}${canonicalPath}`,
      type: 'website',
      siteName: SEO.siteName,
      locale: SEO.locale,
      images: [
        {
          url: `/images/og-${service.slug}.jpg`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    alternates: {
      canonical: `${SEO.siteUrl}${canonicalPath}`,
    },
  }
}

export function generateLocationMetadata(location: Location, service?: Service): Metadata {
  const title = service
    ? `${service.name} ${location.name} | 24/7 | ${location.responseTime} Response`
    : location.metaTitle
  const description = service
    ? `${service.name} in ${location.name}, ${location.borough}. ${location.responseTime} response. No call-out fee. Call ${BUSINESS.phone}.`
    : location.metaDescription
  const canonicalPath = service
    ? `/${service.slug}-${location.slug}`
    : `/locations/${location.slug}`

  return {
    title,
    description,
    keywords: [
      ...location.keywords,
      ...(service ? service.keywords : []),
      `locksmith ${location.postcode.toLowerCase()}`,
      `locksmith ${location.borough.toLowerCase()}`,
    ],
    openGraph: {
      title,
      description,
      url: `${SEO.siteUrl}${canonicalPath}`,
      type: 'website',
      siteName: SEO.siteName,
      locale: SEO.locale,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    alternates: {
      canonical: `${SEO.siteUrl}${canonicalPath}`,
    },
    other: {
      'geo.region': 'GB-ENG',
      'geo.placename': `${location.name}, London`,
      'geo.position': `${location.lat};${location.lng}`,
      'ICBM': `${location.lat}, ${location.lng}`,
    },
  }
}

export function generatePostcodeMetadata(postcode: PostcodeArea): Metadata {
  return {
    title: postcode.metaTitle,
    description: postcode.metaDescription,
    keywords: [
      `locksmith ${postcode.code.toLowerCase()}`,
      `emergency locksmith ${postcode.code.toLowerCase()}`,
      `locksmith ${postcode.area.toLowerCase()}`,
      `24 hour locksmith ${postcode.code.toLowerCase()}`,
    ],
    openGraph: {
      title: postcode.metaTitle,
      description: postcode.metaDescription,
      url: `${SEO.siteUrl}/locksmith-${postcode.slug}`,
      type: 'website',
      siteName: SEO.siteName,
    },
    alternates: {
      canonical: `${SEO.siteUrl}/locksmith-${postcode.slug}`,
    },
  }
}

export function generateStationMetadata(station: Station): Metadata {
  return {
    title: station.metaTitle,
    description: station.metaDescription,
    keywords: [
      `locksmith near ${station.name.toLowerCase()} station`,
      `locksmith ${station.area.toLowerCase()}`,
      `emergency locksmith ${station.area.toLowerCase()}`,
      `locksmith near ${station.name.toLowerCase()}`,
    ],
    openGraph: {
      title: station.metaTitle,
      description: station.metaDescription,
      url: `${SEO.siteUrl}/locksmith-near-${station.slug}`,
      type: 'website',
      siteName: SEO.siteName,
    },
    alternates: {
      canonical: `${SEO.siteUrl}/locksmith-near-${station.slug}`,
    },
  }
}

export function generateBlogMetadata(post: {
  metaTitle: string
  metaDescription: string
  slug: string
  tags: string[]
  publishDate: string
}): Metadata {
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: post.tags,
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: `${SEO.siteUrl}/blog/${post.slug}`,
      type: 'article',
      publishedTime: post.publishDate,
      siteName: SEO.siteName,
      locale: SEO.locale,
    },
    alternates: {
      canonical: `${SEO.siteUrl}/blog/${post.slug}`,
    },
  }
}
