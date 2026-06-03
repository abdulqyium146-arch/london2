import { NextResponse } from 'next/server'
import { services } from '@/data/services'
import { locations } from '@/data/locations'
import { postcodes } from '@/data/postcodes'
import { stations } from '@/data/stations'
import { blogPosts } from '@/data/blog-posts'

const BASE_URL = 'https://londonlocksmith.co'
const INDEXNOW_KEY = process.env.INDEXNOW_KEY || 'londonlocksmith-indexnow-key'
const INDEXNOW_ENDPOINT = 'https://api.indexnow.org/indexnow'

function buildAllUrls(): string[] {
  const urls: string[] = [
    BASE_URL,
    `${BASE_URL}/residential-locksmith-london`,
    `${BASE_URL}/affordable-locksmith-london`,
    `${BASE_URL}/change-locks-london`,
    `${BASE_URL}/services`,
    `${BASE_URL}/locations`,
    `${BASE_URL}/areas-we-cover`,
    `${BASE_URL}/contact`,
    `${BASE_URL}/pricing`,
    `${BASE_URL}/faq`,
    `${BASE_URL}/blog`,
    `${BASE_URL}/about`,
    `${BASE_URL}/html-sitemap`,
  ]

  for (const service of services) {
    urls.push(`${BASE_URL}/services/${service.slug}`)
  }
  for (const location of locations) {
    urls.push(`${BASE_URL}/locations/${location.slug}`)
  }
  for (const service of services) {
    for (const location of locations) {
      urls.push(`${BASE_URL}/${service.slug}-${location.slug}`)
    }
  }
  for (const postcode of postcodes) {
    urls.push(`${BASE_URL}/locksmith-${postcode.slug}`)
  }
  for (const station of stations) {
    urls.push(`${BASE_URL}/locksmith-near-${station.slug}`)
  }
  for (const post of blogPosts) {
    urls.push(`${BASE_URL}/blog/${post.slug}`)
  }

  return urls
}

// POST /api/indexnow  — call this after a deployment to notify Bing/IndexNow partners
// Accepts an optional JSON body: { urls: string[] } to submit a specific subset.
// If no body is provided, submits all site URLs.
export async function POST(request: Request) {
  const authHeader = request.headers.get('authorization')
  const expectedToken = process.env.INDEXNOW_ADMIN_TOKEN
  if (expectedToken && authHeader !== `Bearer ${expectedToken}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  let urlsToSubmit: string[]
  try {
    const body = await request.json().catch(() => ({}))
    urlsToSubmit = Array.isArray(body.urls) && body.urls.length > 0
      ? body.urls
      : buildAllUrls()
  } catch {
    urlsToSubmit = buildAllUrls()
  }

  // IndexNow accepts max 10,000 URLs per request; split into batches of 500
  const BATCH_SIZE = 500
  const results: { batch: number; status: number; ok: boolean }[] = []

  for (let i = 0; i < urlsToSubmit.length; i += BATCH_SIZE) {
    const batch = urlsToSubmit.slice(i, i + BATCH_SIZE)
    try {
      const res = await fetch(INDEXNOW_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
        body: JSON.stringify({
          host: 'londonlocksmith.co',
          key: INDEXNOW_KEY,
          keyLocation: `${BASE_URL}/${INDEXNOW_KEY}.txt`,
          urlList: batch,
        }),
      })
      results.push({ batch: Math.floor(i / BATCH_SIZE), status: res.status, ok: res.ok })
    } catch (err) {
      results.push({ batch: Math.floor(i / BATCH_SIZE), status: 0, ok: false })
    }
  }

  return NextResponse.json({
    submitted: urlsToSubmit.length,
    batches: results.length,
    results,
  })
}

// GET /api/indexnow — returns current URL count for debugging
export async function GET() {
  const urls = buildAllUrls()
  return NextResponse.json({ totalUrls: urls.length, key: INDEXNOW_KEY })
}
