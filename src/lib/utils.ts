import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export function titleCase(str: string): string {
  return str
    .toLowerCase()
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

export function formatPhone(phone: string): string {
  return phone.replace(/(\d{3})(\d{4})(\d{4})/, '$1 $2 $3')
}

export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength).replace(/\s+\S*$/, '') + '...'
}

export function absoluteUrl(path: string): string {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || 'https://londonlocksmith.co'
  return `${baseUrl}${path}`
}

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export function calculateReadTime(content: string): string {
  const wordsPerMinute = 200
  const wordCount = content.split(/\s+/).length
  const minutes = Math.ceil(wordCount / wordsPerMinute)
  return `${minutes} min read`
}

export function generateServiceLocationSlug(
  serviceSlug: string,
  locationSlug: string
): string {
  return `${serviceSlug}-${locationSlug}`
}

export function parseServiceLocationSlug(slug: string, serviceSlug: string): string | null {
  if (slug.startsWith(`${serviceSlug}-`)) {
    return slug.slice(serviceSlug.length + 1)
  }
  return null
}

export function isPostcodeSlug(slug: string): boolean {
  return /^locksmith-[a-z]{1,2}\d{1,2}[a-z]?$/i.test(slug)
}

export function isStationSlug(slug: string): boolean {
  return slug.startsWith('locksmith-near-') && slug.endsWith('-station')
}

export function extractPostcodeFromSlug(slug: string): string | null {
  const match = slug.match(/^locksmith-([a-z]{1,2}\d{1,2}[a-z]?)$/i)
  return match ? match[1].toUpperCase() : null
}

export function extractStationFromSlug(slug: string): string | null {
  if (!isStationSlug(slug)) return null
  return slug
    .replace('locksmith-near-', '')
    .replace('-station', '')
}

export function generateCanonicalUrl(path: string): string {
  const baseUrl = 'https://londonlocksmith.co'
  const cleanPath = path.startsWith('/') ? path : `/${path}`
  return `${baseUrl}${cleanPath}`
}

export function getRelativeTime(dateString: string): string {
  const date = new Date(dateString)
  const now = new Date()
  const diffMs = now.getTime() - date.getTime()
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24))

  if (diffDays === 0) return 'Today'
  if (diffDays === 1) return '1 day ago'
  if (diffDays < 7) return `${diffDays} days ago`
  if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`
  if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`
  return `${Math.floor(diffDays / 365)} years ago`
}

export function generateStars(rating: number): string {
  return '★'.repeat(Math.floor(rating)) + '☆'.repeat(5 - Math.floor(rating))
}

export function chunkArray<T>(array: T[], size: number): T[][] {
  const chunks: T[][] = []
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size))
  }
  return chunks
}
