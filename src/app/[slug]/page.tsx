import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { services, getService } from '@/data/services'
import { locations, getLocation } from '@/data/locations'
import { postcodes, getPostcode } from '@/data/postcodes'
import { stations, getStation } from '@/data/stations'
import {
  extractPostcodeFromSlug,
  extractStationFromSlug,
  isPostcodeSlug,
  isStationSlug,
} from '@/lib/utils'
import { ServiceLocationPage } from './ServiceLocationPage'
import { PostcodePage } from './PostcodePage'
import { StationPage } from './StationPage'

interface Props {
  params: Promise<{ slug: string }>
}

function detectSlugType(slug: string): {
  type: 'service-location' | 'postcode' | 'station' | null
  serviceSlug?: string
  locationSlug?: string
  postcodeCode?: string
  stationSlug?: string
} {
  // Check station pattern: locksmith-near-X-station
  if (isStationSlug(slug)) {
    const stationSlug = extractStationFromSlug(slug)
    if (stationSlug) {
      const station = getStation(`${stationSlug}-station`)
      if (station) return { type: 'station', stationSlug: `${stationSlug}-station` }
    }
    return { type: 'station', stationSlug: slug }
  }

  // Check postcode pattern: locksmith-e17
  if (isPostcodeSlug(slug)) {
    const code = extractPostcodeFromSlug(slug)
    if (code) {
      const postcode = getPostcode(code)
      if (postcode) return { type: 'postcode', postcodeCode: code }
    }
    return { type: 'postcode', postcodeCode: slug.replace('locksmith-', '').toUpperCase() }
  }

  // Check service-location pattern: service-slug-location-slug
  for (const service of services) {
    if (slug.startsWith(`${service.slug}-`)) {
      const potentialLocationSlug = slug.slice(service.slug.length + 1)
      const location = getLocation(potentialLocationSlug)
      if (location) {
        return { type: 'service-location', serviceSlug: service.slug, locationSlug: potentialLocationSlug }
      }
    }
  }

  return { type: null }
}

export async function generateStaticParams() {
  const params: { slug: string }[] = []

  // Service + Location combinations
  for (const service of services) {
    for (const location of locations) {
      params.push({ slug: `${service.slug}-${location.slug}` })
    }
  }

  // Postcode pages
  for (const postcode of postcodes) {
    params.push({ slug: `locksmith-${postcode.slug}` })
  }

  // Station pages
  for (const station of stations) {
    params.push({ slug: `locksmith-near-${station.slug}` })
  }

  return params
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const detected = detectSlugType(slug)

  if (detected.type === 'service-location' && detected.serviceSlug && detected.locationSlug) {
    const service = getService(detected.serviceSlug)
    const location = getLocation(detected.locationSlug)
    if (service && location) {
      return {
        title: `${service.name} ${location.name} | 24/7 | ${location.responseTime} Response`,
        description: `${service.name} in ${location.name}, ${location.borough}. ${location.responseTime} response, available 24/7. No call-out fee. Fully insured. Call +44 7984 547185.`,
        keywords: [
          `${service.name.toLowerCase()} ${location.name.toLowerCase()}`,
          `locksmith ${location.name.toLowerCase()}`,
          `${service.shortName.toLowerCase()} ${location.postcode.toLowerCase()}`,
          ...service.keywords.slice(0, 3),
        ],
        alternates: { canonical: `https://londonlocksmith.co/${slug}` },
        openGraph: {
          title: `${service.name} ${location.name} | 24/7 | ${location.responseTime} Response`,
          description: `${service.name} in ${location.name}. ${location.responseTime} response. No call-out fee.`,
          url: `https://londonlocksmith.co/${slug}`,
          type: 'website',
        },
      }
    }
  }

  if (detected.type === 'postcode' && detected.postcodeCode) {
    const postcode = getPostcode(detected.postcodeCode)
    if (postcode) {
      return {
        title: postcode.metaTitle,
        description: postcode.metaDescription,
        alternates: { canonical: `https://londonlocksmith.co/${slug}` },
      }
    }
  }

  if (detected.type === 'station' && detected.stationSlug) {
    const station = getStation(detected.stationSlug)
    if (station) {
      return {
        title: station.metaTitle,
        description: station.metaDescription,
        alternates: { canonical: `https://londonlocksmith.co/${slug}` },
      }
    }
  }

  return {}
}

export default async function DynamicSlugPage({ params }: Props) {
  const { slug } = await params
  const detected = detectSlugType(slug)

  if (detected.type === 'service-location' && detected.serviceSlug && detected.locationSlug) {
    const service = getService(detected.serviceSlug)
    const location = getLocation(detected.locationSlug)
    if (!service || !location) notFound()
    return <ServiceLocationPage service={service} location={location} slug={slug} />
  }

  if (detected.type === 'postcode' && detected.postcodeCode) {
    const postcode = getPostcode(detected.postcodeCode)
    if (!postcode) notFound()
    return <PostcodePage postcode={postcode} slug={slug} />
  }

  if (detected.type === 'station') {
    const stationSlugFull = detected.stationSlug || `${extractStationFromSlug(slug)}-station`
    const station = getStation(stationSlugFull)
    if (!station) {
      // Try without -station suffix
      const stationSlugAlt = extractStationFromSlug(slug)
      if (!stationSlugAlt) notFound()
      const altStation = stations.find((s) => s.slug.startsWith(stationSlugAlt))
      if (!altStation) notFound()
      return <StationPage station={altStation} slug={slug} />
    }
    return <StationPage station={station} slug={slug} />
  }

  notFound()
}
