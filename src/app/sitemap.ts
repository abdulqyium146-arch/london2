import type { MetadataRoute } from 'next'
import { services } from '@/data/services'
import { locations } from '@/data/locations'
import { postcodes } from '@/data/postcodes'
import { stations } from '@/data/stations'
import { blogPosts } from '@/data/blog-posts'

const BASE_URL = 'https://londonlocksmith.co'

// Fixed date — represents last meaningful content update. Update this on major content changes.
const PAGES_UPDATED = new Date('2026-07-01')

// All services with emergencyService: true in the data — gets higher priority in service×location combos.
const EMERGENCY_SLUGS = new Set([
  'emergency-locksmith',
  '24-hour-locksmith',
  'residential-locksmith',
  'house-lockout',
  'burglary-repair',
  'car-locksmith',
  'door-opening',
  'snapped-key-extraction',
])

const HIGH_TRAFFIC_SLUGS = new Set([
  'walthamstow', 'barking', 'ilford', 'tottenham', 'southall',
  'east-ham', 'edmonton', 'forest-gate', 'central-london',
  'north-london', 'east-london', 'west-london', 'south-london',
  'balham', 'earls-court', 'islington', 'old-street', 'stockwell', 'highbury',
])

// Sitemap index — Next.js generates /sitemap.xml as an index listing all sitemaps below.
// Sitemap 0: Core / money pages
// Sitemap 1: Service hub pages + Location hub pages
// Sitemap 2: Emergency service × location combos (8 × 33 = 264 URLs)
// Sitemap 3: Standard service × location combos, first batch (4 × 33 = 132 URLs)
// Sitemap 4: Standard service × location combos, second batch (4 × 33 = 132 URLs)
// Sitemap 5: Postcode pages + Station pages + Blog posts
export function generateSitemaps() {
  return [0, 1, 2, 3, 4, 5].map((id) => ({ id }))
}

export default function sitemap({ id }: { id: number }): MetadataRoute.Sitemap {
  switch (id) {
    case 0:
      return [
        { url: BASE_URL, lastModified: PAGES_UPDATED, changeFrequency: 'weekly', priority: 1.0 },
        { url: `${BASE_URL}/residential-locksmith-london`, lastModified: PAGES_UPDATED, changeFrequency: 'weekly', priority: 1.0 },
        { url: `${BASE_URL}/affordable-locksmith-london`, lastModified: PAGES_UPDATED, changeFrequency: 'weekly', priority: 0.95 },
        { url: `${BASE_URL}/change-locks-london`, lastModified: PAGES_UPDATED, changeFrequency: 'weekly', priority: 0.95 },
        { url: `${BASE_URL}/services`, lastModified: PAGES_UPDATED, changeFrequency: 'monthly', priority: 0.8 },
        { url: `${BASE_URL}/locations`, lastModified: PAGES_UPDATED, changeFrequency: 'monthly', priority: 0.8 },
        { url: `${BASE_URL}/areas-we-cover`, lastModified: PAGES_UPDATED, changeFrequency: 'monthly', priority: 0.85 },
        { url: `${BASE_URL}/contact`, lastModified: PAGES_UPDATED, changeFrequency: 'monthly', priority: 0.85 },
        { url: `${BASE_URL}/pricing`, lastModified: PAGES_UPDATED, changeFrequency: 'monthly', priority: 0.85 },
        { url: `${BASE_URL}/faq`, lastModified: PAGES_UPDATED, changeFrequency: 'monthly', priority: 0.85 },
        { url: `${BASE_URL}/blog`, lastModified: PAGES_UPDATED, changeFrequency: 'weekly', priority: 0.8 },
        { url: `${BASE_URL}/about`, lastModified: PAGES_UPDATED, changeFrequency: 'monthly', priority: 0.7 },
        { url: `${BASE_URL}/html-sitemap`, lastModified: PAGES_UPDATED, changeFrequency: 'yearly', priority: 0.1 },
      ]

    case 1: {
      const entries: MetadataRoute.Sitemap = []
      for (const service of services) {
        entries.push({
          url: `${BASE_URL}/services/${service.slug}`,
          lastModified: PAGES_UPDATED,
          changeFrequency: 'monthly',
          priority: EMERGENCY_SLUGS.has(service.slug) ? 0.9 : 0.85,
        })
      }
      for (const location of locations) {
        entries.push({
          url: `${BASE_URL}/locations/${location.slug}`,
          lastModified: PAGES_UPDATED,
          changeFrequency: 'monthly',
          priority: HIGH_TRAFFIC_SLUGS.has(location.slug) ? 0.9 : 0.85,
        })
      }
      return entries
    }

    case 2: {
      const emergencyServices = services.filter((s) => EMERGENCY_SLUGS.has(s.slug))
      return emergencyServices.flatMap((service) =>
        locations.map((location) => ({
          url: `${BASE_URL}/${service.slug}-${location.slug}`,
          lastModified: PAGES_UPDATED,
          changeFrequency: 'monthly' as const,
          priority: HIGH_TRAFFIC_SLUGS.has(location.slug) ? 0.85 : 0.8,
        }))
      )
    }

    case 3: {
      const standardServices = services.filter((s) => !EMERGENCY_SLUGS.has(s.slug))
      const batch = standardServices.slice(0, Math.ceil(standardServices.length / 2))
      return batch.flatMap((service) =>
        locations.map((location) => ({
          url: `${BASE_URL}/${service.slug}-${location.slug}`,
          lastModified: PAGES_UPDATED,
          changeFrequency: 'monthly' as const,
          priority: HIGH_TRAFFIC_SLUGS.has(location.slug) ? 0.75 : 0.7,
        }))
      )
    }

    case 4: {
      const standardServices = services.filter((s) => !EMERGENCY_SLUGS.has(s.slug))
      const batch = standardServices.slice(Math.ceil(standardServices.length / 2))
      return batch.flatMap((service) =>
        locations.map((location) => ({
          url: `${BASE_URL}/${service.slug}-${location.slug}`,
          lastModified: PAGES_UPDATED,
          changeFrequency: 'monthly' as const,
          priority: HIGH_TRAFFIC_SLUGS.has(location.slug) ? 0.75 : 0.7,
        }))
      )
    }

    case 5: {
      const entries: MetadataRoute.Sitemap = []
      for (const postcode of postcodes) {
        entries.push({
          url: `${BASE_URL}/locksmith-${postcode.slug}`,
          lastModified: PAGES_UPDATED,
          changeFrequency: 'monthly',
          priority: 0.65,
        })
      }
      for (const station of stations) {
        entries.push({
          url: `${BASE_URL}/locksmith-near-${station.slug}`,
          lastModified: PAGES_UPDATED,
          changeFrequency: 'monthly',
          priority: 0.75,
        })
      }
      for (const post of blogPosts) {
        entries.push({
          url: `${BASE_URL}/blog/${post.slug}`,
          lastModified: new Date(post.publishDate),
          changeFrequency: 'monthly',
          priority: 0.7,
        })
      }
      return entries
    }

    default:
      return []
  }
}
