import { BUSINESS, SEO } from '@/lib/constants'
import type { Service, Location, PostcodeArea, Station, FAQ } from '@/types'

const BASE_URL = SEO.siteUrl

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'Locksmith'],
    '@id': `${BASE_URL}/#organization`,
    name: BUSINESS.name,
    legalName: BUSINESS.legalName,
    description: BUSINESS.description,
    url: BASE_URL,
    logo: {
      '@type': 'ImageObject',
      url: `${BASE_URL}/images/logo.png`,
      width: 400,
      height: 100,
    },
    image: `${BASE_URL}/images/og-default.jpg`,
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS.address.street,
      addressLocality: BUSINESS.address.area,
      addressRegion: BUSINESS.address.city,
      postalCode: BUSINESS.address.postcode,
      addressCountry: BUSINESS.address.countryCode,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: BUSINESS.geo.lat,
      longitude: BUSINESS.geo.lng,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '00:00',
        closes: '23:59',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: BUSINESS.rating.value,
      reviewCount: BUSINESS.rating.count,
      bestRating: '5',
      worstRating: '1',
    },
    priceRange: BUSINESS.pricing.priceRange,
    currenciesAccepted: 'GBP',
    paymentAccepted: 'Cash, Credit Card, Debit Card, Bank Transfer',
    areaServed: [
      { '@type': 'City', name: 'London' },
      { '@type': 'AdministrativeArea', name: 'Greater London' },
    ],
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: BUSINESS.geo.lat,
        longitude: BUSINESS.geo.lng,
      },
      geoRadius: '30000',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Locksmith Services',
      itemListElement: [
        'Emergency Locksmith',
        '24 Hour Locksmith',
        'House Lockout',
        'Burglary Repair',
        'UPVC Door Repair',
        'Car Locksmith',
        'Commercial Locksmith',
        'Smart Lock Installation',
        'Lock Repair',
        'Lock Replacement',
        'Key Cutting',
        'Safe Locksmith',
        'Security Upgrades',
      ].map((name) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name,
          provider: { '@type': 'LocalBusiness', name: BUSINESS.name },
        },
      })),
    },
    sameAs: Object.values(BUSINESS.social),
  }
}

export function generateWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${BASE_URL}/#website`,
    url: BASE_URL,
    name: BUSINESS.name,
    description: BUSINESS.tagline,
    publisher: {
      '@id': `${BASE_URL}/#organization`,
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${BASE_URL}/?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }
}

export function generateServiceSchema(service: Service, location?: Location) {
  const serviceUrl = location
    ? `${BASE_URL}/${service.slug}-${location.slug}`
    : `${BASE_URL}/services/${service.slug}`

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${serviceUrl}#service`,
    name: location ? `${service.name} in ${location.name}` : service.name,
    description: service.longDescription,
    serviceType: service.schema.serviceType,
    provider: {
      '@id': `${BASE_URL}/#organization`,
    },
    areaServed: location
      ? {
          '@type': 'City',
          name: location.name,
          containedInPlace: { '@type': 'City', name: 'London' },
        }
      : { '@type': 'City', name: 'London' },
    url: serviceUrl,
    offers: {
      '@type': 'Offer',
      priceCurrency: 'GBP',
      priceSpecification: {
        '@type': 'PriceSpecification',
        price: service.priceFrom,
        priceCurrency: 'GBP',
        description: `${service.name} from £${service.priceFrom}`,
      },
      availability: 'https://schema.org/InStock',
      seller: { '@id': `${BASE_URL}/#organization` },
    },
    availableChannel: {
      '@type': 'ServiceChannel',
      servicePhone: {
        '@type': 'ContactPoint',
        telephone: BUSINESS.phone,
        contactType: 'customer service',
        availableLanguage: 'English',
        hoursAvailable: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          opens: '00:00',
          closes: '23:59',
        },
      },
    },
  }
}

export function generateLocalBusinessSchema(location: Location) {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'Locksmith'],
    name: `${BUSINESS.name} - ${location.name}`,
    description: `Emergency locksmith services in ${location.name}, ${location.borough}. ${location.responseTime} response, available 24/7.`,
    url: `${BASE_URL}/locations/${location.slug}`,
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    areaServed: {
      '@type': 'City',
      name: location.name,
      containedInPlace: {
        '@type': 'AdministrativeArea',
        name: location.borough,
      },
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: location.lat,
      longitude: location.lng,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '00:00',
        closes: '23:59',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: BUSINESS.rating.value,
      reviewCount: BUSINESS.rating.count,
      bestRating: '5',
    },
  }
}

export function generateFAQSchema(faqs: FAQ[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

export function generateBreadcrumbSchema(items: { name: string; href: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${BASE_URL}${item.href}`,
    })),
  }
}

export function generateReviewSchema(reviews: {
  author: string
  rating: number
  text: string
  date: string
}[]) {
  return reviews.map((review) => ({
    '@context': 'https://schema.org',
    '@type': 'Review',
    author: {
      '@type': 'Person',
      name: review.author,
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: review.rating,
      bestRating: 5,
    },
    reviewBody: review.text,
    datePublished: review.date,
    itemReviewed: {
      '@id': `${BASE_URL}/#organization`,
    },
  }))
}

export function generateHowToSchema(
  name: string,
  description: string,
  steps: { title: string; description: string; duration?: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name,
    description,
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.title,
      text: step.description,
      ...(step.duration && { timeRequired: `PT${step.duration}M` }),
    })),
  }
}

export function generatePostcodeSchema(postcode: PostcodeArea) {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'Locksmith'],
    name: `${BUSINESS.name} - ${postcode.code}`,
    description: postcode.description,
    url: `${BASE_URL}/locksmith-${postcode.slug}`,
    telephone: BUSINESS.phone,
    areaServed: {
      '@type': 'PostalAddress',
      postalCode: postcode.code,
      addressCountry: 'GB',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '00:00',
        closes: '23:59',
      },
    ],
  }
}

export function generateStationSchema(station: Station) {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'Locksmith'],
    name: `${BUSINESS.name} near ${station.name}`,
    description: station.description,
    url: `${BASE_URL}/locksmith-near-${station.slug}`,
    telephone: BUSINESS.phone,
    areaServed: {
      '@type': 'City',
      name: station.area,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '00:00',
        closes: '23:59',
      },
    ],
  }
}
