export interface Service {
  slug: string
  name: string
  shortName: string
  description: string
  longDescription: string
  icon: string
  heroTitle: string
  heroSubtitle: string
  features: string[]
  process: ProcessStep[]
  faqs: FAQ[]
  priceRange: string
  priceFrom: number
  responseTime: string
  metaTitle: string
  metaDescription: string
  keywords: string[]
  relatedServices: string[]
  emergencyService: boolean
  availability: string
  schema: ServiceSchema
}

export interface ProcessStep {
  step: number
  title: string
  description: string
  duration?: string
}

export interface FAQ {
  question: string
  answer: string
}

export interface Location {
  slug: string
  name: string
  borough: string
  boroughSlug: string
  postcode: string
  postcodes: string[]
  area: string
  region: string
  landmarks: string[]
  stations: string[]
  stationSlugs: string[]
  population: number
  lat: number
  lng: number
  nearbyAreas: string[]
  nearbyAreaSlugs: string[]
  description: string
  longDescription: string
  responseTime: string
  driveTime: string
  metaTitle: string
  metaDescription: string
  keywords: string[]
  localFacts: string[]
  competitionLevel: 'low' | 'medium' | 'high'
}

export interface Borough {
  slug: string
  name: string
  locations: string[]
  locationSlugs: string[]
  postcodes: string[]
  area: string
  description: string
  responseTime: string
  coverage: boolean
}

export interface PostcodeArea {
  code: string
  slug: string
  area: string
  district: string
  borough: string
  boroughSlug: string
  locationSlug: string
  coverage: boolean
  description: string
  landmarks: string[]
  responseTime: string
  metaTitle: string
  metaDescription: string
}

export interface Station {
  slug: string
  name: string
  lines: string[]
  area: string
  borough: string
  boroughSlug: string
  postcode: string
  locationSlug: string
  nearbyStreets: string[]
  responseTime: string
  description: string
  metaTitle: string
  metaDescription: string
  landmarks: string[]
}

export interface ServiceSchema {
  serviceType: string
  provider: string
  areaServed: string
}

export interface Review {
  id: string
  author: string
  location: string
  rating: number
  text: string
  service: string
  date: string
  verified: boolean
}

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string
  category: string
  tags: string[]
  publishDate: string
  readTime: string
  metaTitle: string
  metaDescription: string
  faqs: FAQ[]
  relatedPosts: string[]
}

export interface SchemaOrganization {
  '@context': string
  '@type': string | string[]
  name: string
  url: string
  logo: string
  telephone: string
  email: string
  address: SchemaAddress
  geo: SchemaGeo
  openingHoursSpecification: SchemaOpeningHours[]
  aggregateRating: SchemaRating
  areaServed: SchemaAreaServed[]
  priceRange: string
  currenciesAccepted: string
  paymentAccepted: string
  sameAs: string[]
}

export interface SchemaAddress {
  '@type': string
  streetAddress: string
  addressLocality: string
  addressRegion: string
  postalCode: string
  addressCountry: string
}

export interface SchemaGeo {
  '@type': string
  latitude: number
  longitude: number
}

export interface SchemaOpeningHours {
  '@type': string
  dayOfWeek: string | string[]
  opens: string
  closes: string
}

export interface SchemaRating {
  '@type': string
  ratingValue: string
  reviewCount: string
  bestRating: string
}

export interface SchemaAreaServed {
  '@type': string
  name: string
}

export interface BreadcrumbItem {
  name: string
  href: string
}
