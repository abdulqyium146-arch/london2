import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import {
  Phone, MapPin, Clock, CheckCircle2, ChevronRight, Train, Star, Shield,
} from 'lucide-react'
import { locations, getLocation } from '@/data/locations'
import { services } from '@/data/services'
import { generalFaqs } from '@/data/faqs'
import { reviews } from '@/data/reviews'
import { postcodes } from '@/data/postcodes'
import { stations } from '@/data/stations'
import { Breadcrumbs } from '@/components/seo/Breadcrumbs'
import { FAQSection } from '@/components/sections/FAQSection'
import { CTASection } from '@/components/sections/CTASection'
import { ReviewsSlider } from '@/components/sections/ReviewsSlider'
import { SchemaMarkup } from '@/components/seo/SchemaMarkup'
import { generateLocalBusinessSchema, generateFAQSchema, generateBreadcrumbSchema } from '@/lib/seo/schema'
import { generateLocationMetadata } from '@/lib/seo/metadata'
import { BUSINESS } from '@/lib/constants'
import type { FAQ } from '@/types'

interface Props {
  params: Promise<{ location: string }>
}

export async function generateStaticParams() {
  return locations.map((location) => ({ location: location.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { location: locationSlug } = await params
  const location = getLocation(locationSlug)
  if (!location) return {}
  return generateLocationMetadata(location)
}

export default async function LocationPage({ params }: Props) {
  const { location: locationSlug } = await params
  const location = getLocation(locationSlug)
  if (!location) notFound()

  const locationPostcodes = postcodes.filter((p) => location.postcodes.includes(p.code))
  const locationStations = stations.filter((s) => location.stationSlugs?.includes(s.slug))
  const nearbyLocations = location.nearbyAreaSlugs
    .map((s) => locations.find((l) => l.slug === s))
    .filter(Boolean) as typeof locations

  const locationReviews = reviews
    .filter((r) => r.location.toLowerCase() === location.name.toLowerCase())
    .concat(reviews.slice(0, 3))
    .slice(0, 6)

  const locationFaqs: FAQ[] = [
    {
      question: `How quickly can you reach me in ${location.name}?`,
      answer: `Our locksmiths in ${location.name} typically arrive within ${location.responseTime}. We have locksmiths stationed across ${location.borough} for rapid response to emergency lockouts, burglary repairs, and all locksmith needs in ${location.name} and surrounding areas.`,
    },
    {
      question: `Do you cover all of ${location.name} (${location.postcodes.join(', ')})?`,
      answer: `Yes. We provide full coverage of ${location.name} including all ${location.postcodes.join(', ')} postcodes. Whether you're near ${location.stations[0] || 'the local station'} or in the residential streets further out, we can reach you quickly.`,
    },
    {
      question: `What locksmith services are available in ${location.name}?`,
      answer: `We offer the complete range of locksmith services in ${location.name}: emergency lockouts, lock repair and replacement, UPVC door repair, burglary repair, car locksmith, smart lock installation, key cutting, and security upgrades. All services available 24/7.`,
    },
    ...generalFaqs.slice(0, 4),
  ]

  const breadcrumbs = [
    { name: 'Locations', href: '/locations' },
    { name: location.name, href: `/locations/${location.slug}` },
  ]

  const schemas = [
    generateLocalBusinessSchema(location),
    generateFAQSchema(locationFaqs.slice(0, 5)),
    generateBreadcrumbSchema([{ name: 'Home', href: '/' }, ...breadcrumbs]),
  ]

  const emergencyServices = services.filter((s) => s.emergencyService)
  const standardServices = services.filter((s) => !s.emergencyService)

  return (
    <>
      <SchemaMarkup schemas={schemas} />

      {/* Hero */}
      <section className="relative py-20 px-4 bg-hero-gradient overflow-hidden">
        <div className="absolute inset-0 bg-glow-orange opacity-30" />
        <div className="relative max-w-7xl mx-auto">
          <Breadcrumbs items={breadcrumbs} className="mb-8" />
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-4 h-4 text-orange-400" />
                <span className="text-orange-400 font-semibold text-sm">
                  {location.borough}, {location.area}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Locksmith {location.name} — 24/7 Emergency Service
              </h1>
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                Local locksmith serving {location.name} and surrounding areas. {location.responseTime}{' '}
                response time, available around the clock. No call-out fee, fully insured.
              </p>

              <div className="grid grid-cols-3 gap-3 mb-8">
                <div className="bg-white/5 border border-white/10 rounded-xl p-3 text-center">
                  <Clock className="w-5 h-5 text-orange-400 mx-auto mb-1" />
                  <div className="text-white font-bold text-sm">{location.responseTime}</div>
                  <div className="text-slate-500 text-xs">Response</div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-3 text-center">
                  <Star className="w-5 h-5 text-amber-400 mx-auto mb-1" />
                  <div className="text-white font-bold text-sm">4.9★</div>
                  <div className="text-slate-500 text-xs">Rating</div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-3 text-center">
                  <Shield className="w-5 h-5 text-green-400 mx-auto mb-1" />
                  <div className="text-white font-bold text-sm">£0</div>
                  <div className="text-slate-500 text-xs">Call-Out</div>
                </div>
              </div>

              <Link
                href={BUSINESS.phoneHref}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold text-lg shadow-orange-glow hover:scale-105 transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                Call Now: {BUSINESS.phone}
              </Link>
            </div>

            <div className="space-y-4">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <h2 className="text-white font-bold text-lg mb-4">
                  Locksmith Coverage in {location.name}
                </h2>
                <div className="space-y-3 text-sm">
                  {[
                    { label: 'Borough', value: location.borough },
                    { label: 'Postcodes', value: location.postcodes.join(', ') },
                    { label: 'Response Time', value: location.responseTime },
                    { label: 'Service Hours', value: '24/7 — 365 days' },
                  ].map(({ label, value }) => (
                    <div key={label} className="flex justify-between">
                      <span className="text-slate-400">{label}</span>
                      <span className="text-white font-medium">{value}</span>
                    </div>
                  ))}
                </div>

                {locationStations.length > 0 && (
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <div className="flex items-center gap-2 text-slate-400 text-xs mb-2">
                      <Train className="w-3.5 h-3.5" />
                      Nearby Stations
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {locationStations.map((station) => (
                        <Link
                          key={station.slug}
                          href={`/locksmith-near-${station.slug}`}
                          className="text-xs px-2.5 py-1 rounded-full bg-gray-800 text-slate-300 hover:text-orange-400 hover:bg-orange-500/10 transition-all"
                        >
                          {station.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4">
        <section className="py-16 grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-12">
            {/* Long description */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Your Local Locksmith in {location.name}
              </h2>
              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p>{location.longDescription}</p>
                <p>
                  Our {location.name} locksmith team provides the complete range of residential and
                  commercial locksmith services. From emergency lockouts near {location.landmarks[0]} to
                  security upgrades in the residential streets around {location.stations[0] || location.name}, we&apos;re your
                  trusted local security partner.
                </p>
              </div>
            </div>

            {/* Emergency Services */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-5">
                Emergency Locksmith Services in {location.name}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {emergencyServices.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/${service.slug}-${location.slug}`}
                    className="group flex items-center justify-between p-4 bg-[#111827] border border-gray-800 rounded-xl hover:border-orange-500/40 transition-all"
                  >
                    <div>
                      <div className="text-white font-semibold text-sm group-hover:text-orange-400 transition-colors">
                        {service.name} in {location.name}
                      </div>
                      <div className="text-xs text-slate-500 mt-0.5">
                        {service.responseTime} · From £{service.priceFrom}
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-orange-400 flex-shrink-0" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Standard Services */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-5">
                All Locksmith Services in {location.name}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {standardServices.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/${service.slug}-${location.slug}`}
                    className="group flex items-center justify-between p-3 bg-[#111827] border border-gray-800 rounded-xl hover:border-orange-500/40 transition-all"
                  >
                    <div className="text-slate-300 text-sm group-hover:text-orange-400 transition-colors">
                      {service.name} in {location.name}
                    </div>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-orange-400 flex-shrink-0" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Local Facts */}
            {location.localFacts.length > 0 && (
              <div className="bg-[#111827] border border-gray-800 rounded-2xl p-6">
                <h3 className="text-white font-bold text-lg mb-4">About {location.name}</h3>
                <ul className="space-y-2">
                  {location.localFacts.map((fact) => (
                    <li key={fact} className="flex items-start gap-3 text-slate-300 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                      {fact}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            {/* Contact CTA */}
            <div className="bg-gradient-to-br from-orange-600/20 to-red-600/20 border border-orange-500/30 rounded-2xl p-6">
              <h3 className="text-white font-bold text-lg mb-3">
                Emergency Locksmith {location.name}
              </h3>
              <p className="text-slate-300 text-sm mb-4">
                Available now. {location.responseTime} response time.
              </p>
              <Link
                href={BUSINESS.phoneHref}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold mb-3"
              >
                <Phone className="w-4 h-4" />
                {BUSINESS.phone}
              </Link>
              <div className="text-xs text-center text-green-400">✓ Available right now</div>
            </div>

            {/* Postcode Coverage — linked */}
            {locationPostcodes.length > 0 && (
              <div className="bg-[#111827] border border-gray-800 rounded-2xl p-5">
                <h3 className="text-white font-bold mb-3">Postcode Coverage</h3>
                <div className="space-y-2">
                  {locationPostcodes.map((postcode) => (
                    <Link
                      key={postcode.code}
                      href={`/locksmith-${postcode.slug}`}
                      className="flex items-center justify-between text-sm hover:text-orange-400 transition-colors group"
                    >
                      <span className="text-orange-400 font-mono font-bold">{postcode.code}</span>
                      <span className="text-slate-400 group-hover:text-orange-400">{postcode.area}</span>
                      <ChevronRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-orange-400" />
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Nearby Areas — real links */}
            {nearbyLocations.length > 0 && (
              <div className="bg-[#111827] border border-gray-800 rounded-2xl p-5">
                <h3 className="text-white font-bold mb-3">Nearby Areas We Cover</h3>
                <div className="space-y-2">
                  {nearbyLocations.map((nearby) => (
                    <Link
                      key={nearby.slug}
                      href={`/locations/${nearby.slug}`}
                      className="flex items-center gap-2 text-sm text-slate-400 hover:text-orange-400 transition-colors group"
                    >
                      <MapPin className="w-3.5 h-3.5 text-slate-600 group-hover:text-orange-400" />
                      Locksmith {nearby.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Station links */}
            {locationStations.length > 0 && (
              <div className="bg-[#111827] border border-gray-800 rounded-2xl p-5">
                <h3 className="text-white font-bold mb-3 flex items-center gap-2 text-sm">
                  <Train className="w-4 h-4 text-slate-400" />
                  Locksmith Near Stations
                </h3>
                <div className="space-y-2">
                  {locationStations.map((station) => (
                    <Link
                      key={station.slug}
                      href={`/locksmith-near-${station.slug}`}
                      className="flex items-center justify-between text-sm text-slate-400 hover:text-orange-400 transition-colors group"
                    >
                      <span>{station.name}</span>
                      <ChevronRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-orange-400" />
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </div>

      <ReviewsSlider
        title={`What ${location.name} Customers Say`}
        locationName={location.name}
      />

      <FAQSection
        faqs={locationFaqs}
        title={`${location.name} Locksmith FAQs`}
        subtitle={`Common questions about our locksmith service in ${location.name}.`}
      />

      <CTASection
        title={`Emergency Locksmith ${location.name} — ${location.responseTime} Response`}
        subtitle={`Available 24/7 across ${location.name} and all ${location.borough} areas. No call-out fee.`}
      />
    </>
  )
}
