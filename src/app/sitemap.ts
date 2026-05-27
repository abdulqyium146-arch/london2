import type { MetadataRoute } from 'next'
import { services } from '@/data/services'
import { locations } from '@/data/locations'
import { postcodes } from '@/data/postcodes'
import { stations } from '@/data/stations'
import { blogPosts } from '@/data/blog-posts'

const BASE_URL = 'https://londonlocksmithpro.co.uk'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const entries: MetadataRoute.Sitemap = []

  // Core pages
  const corePages = [
    { url: BASE_URL, priority: 1.0, changeFrequency: 'weekly' as const },
    { url: `${BASE_URL}/services`, priority: 0.9, changeFrequency: 'weekly' as const },
    { url: `${BASE_URL}/locations`, priority: 0.9, changeFrequency: 'weekly' as const },
    { url: `${BASE_URL}/about`, priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${BASE_URL}/contact`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${BASE_URL}/faq`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${BASE_URL}/pricing`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${BASE_URL}/areas-we-cover`, priority: 0.8, changeFrequency: 'weekly' as const },
    { url: `${BASE_URL}/blog`, priority: 0.8, changeFrequency: 'weekly' as const },
  ]

  entries.push(
    ...corePages.map((page) => ({
      url: page.url,
      lastModified: now,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    }))
  )

  // Service pages
  for (const service of services) {
    entries.push({
      url: `${BASE_URL}/services/${service.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.85,
    })
  }

  // Location pages
  for (const location of locations) {
    entries.push({
      url: `${BASE_URL}/locations/${location.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.85,
    })
  }

  // Service + Location programmatic pages
  for (const service of services) {
    for (const location of locations) {
      entries.push({
        url: `${BASE_URL}/${service.slug}-${location.slug}`,
        lastModified: now,
        changeFrequency: 'monthly' as const,
        priority: service.emergencyService ? 0.8 : 0.7,
      })
    }
  }

  // Postcode pages
  for (const postcode of postcodes) {
    entries.push({
      url: `${BASE_URL}/locksmith-${postcode.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.75,
    })
  }

  // Station pages
  for (const station of stations) {
    entries.push({
      url: `${BASE_URL}/locksmith-near-${station.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })
  }

  // Blog posts
  for (const post of blogPosts) {
    entries.push({
      url: `${BASE_URL}/blog/${post.slug}`,
      lastModified: new Date(post.publishDate),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })
  }

  return entries
}
