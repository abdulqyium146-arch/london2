import type { MetadataRoute } from 'next'
import { services } from '@/data/services'
import { locations } from '@/data/locations'
import { postcodes } from '@/data/postcodes'
import { stations } from '@/data/stations'
import { blogPosts } from '@/data/blog-posts'

const BASE_URL = 'https://londonlocksmith.co'

// Emergency service slugs get higher priority
const EMERGENCY_SLUGS = new Set([
  'emergency-locksmith',
  '24-hour-locksmith',
  'house-lockout',
  'burglary-repair',
  'door-opening',
])

// High-traffic locations get higher priority
const HIGH_TRAFFIC_LOCATION_SLUGS = new Set([
  'walthamstow',
  'barking',
  'ilford',
  'tottenham',
  'southall',
  'east-ham',
  'edmonton',
  'forest-gate',
])

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const entries: MetadataRoute.Sitemap = []

  // Core pages
  entries.push(
    { url: BASE_URL, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE_URL}/services`, lastModified: now, changeFrequency: 'weekly', priority: 0.95 },
    { url: `${BASE_URL}/locations`, lastModified: now, changeFrequency: 'weekly', priority: 0.95 },
    { url: `${BASE_URL}/areas-we-cover`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE_URL}/pricing`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE_URL}/faq`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE_URL}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE_URL}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
  )

  // Service pages — emergency services get 0.9, standard 0.85
  for (const service of services) {
    entries.push({
      url: `${BASE_URL}/services/${service.slug}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: EMERGENCY_SLUGS.has(service.slug) ? 0.9 : 0.85,
    })
  }

  // Location pages — high-traffic get 0.9, others 0.85
  for (const location of locations) {
    entries.push({
      url: `${BASE_URL}/locations/${location.slug}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: HIGH_TRAFFIC_LOCATION_SLUGS.has(location.slug) ? 0.9 : 0.85,
    })
  }

  // Programmatic service × location pages
  for (const service of services) {
    const isEmergency = EMERGENCY_SLUGS.has(service.slug)
    for (const location of locations) {
      const isHighTraffic = HIGH_TRAFFIC_LOCATION_SLUGS.has(location.slug)
      let priority = 0.7
      if (isEmergency && isHighTraffic) priority = 0.85
      else if (isEmergency) priority = 0.8
      else if (isHighTraffic) priority = 0.75

      entries.push({
        url: `${BASE_URL}/${service.slug}-${location.slug}`,
        lastModified: now,
        changeFrequency: 'monthly',
        priority,
      })
    }
  }

  // Postcode pages
  for (const postcode of postcodes) {
    entries.push({
      url: `${BASE_URL}/locksmith-${postcode.slug}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    })
  }

  // Station pages
  for (const station of stations) {
    entries.push({
      url: `${BASE_URL}/locksmith-near-${station.slug}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.75,
    })
  }

  // Blog posts
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
