import Link from 'next/link'
import { Phone, Train, Clock, CheckCircle2, ChevronRight, MapPin, Shield } from 'lucide-react'
import { Breadcrumbs } from '@/components/seo/Breadcrumbs'
import { FAQSection } from '@/components/sections/FAQSection'
import { CTASection } from '@/components/sections/CTASection'
import { SchemaMarkup } from '@/components/seo/SchemaMarkup'
import { generateStationSchema, generateFAQSchema } from '@/lib/seo/schema'
import { BUSINESS } from '@/lib/constants'
import { services } from '@/data/services'
import { generalFaqs } from '@/data/faqs'
import type { Station, FAQ } from '@/types'

interface StationPageProps {
  station: Station
  slug: string
}

export function StationPage({ station, slug }: StationPageProps) {
  const stationFaqs: FAQ[] = [
    {
      question: `Is there a locksmith near ${station.name} station?`,
      answer: `Yes. London Locksmith Pro has locksmiths covering the ${station.name} area and surrounding ${station.area} streets. If you&apos;re locked out near ${station.name} station, call ${BUSINESS.phone} and we&apos;ll have someone with you in approximately ${station.responseTime}.`,
    },
    {
      question: `How long will a locksmith take to arrive near ${station.name}?`,
      answer: `Our typical response time near ${station.name} station in ${station.area} is ${station.responseTime}. We dispatch the nearest available locksmith immediately, so during quiet periods we may arrive even faster.`,
    },
    {
      question: `What locksmith services are available near ${station.name}?`,
      answer: `All locksmith services are available near ${station.name}: emergency house lockouts, lock repairs, UPVC door repair, burglary repairs, car locksmith, key cutting, and security upgrades. Available 24/7.`,
    },
    ...generalFaqs.slice(0, 3),
  ]

  const emergencyServices = services.filter((s) => s.emergencyService).slice(0, 6)
  const schemas = [
    generateStationSchema(station),
    generateFAQSchema(stationFaqs.slice(0, 5)),
  ]

  const breadcrumbs = [
    { name: 'Locations', href: '/locations' },
    { name: station.area, href: `/locations/${station.locationSlug}` },
    { name: `Near ${station.name}`, href: `/${slug}` },
  ]

  return (
    <>
      <SchemaMarkup schemas={schemas} />

      {/* Hero */}
      <section className="relative py-20 px-4 bg-hero-gradient overflow-hidden">
        <div className="absolute inset-0 bg-glow-orange opacity-30" />
        <div className="relative max-w-7xl mx-auto">
          <Breadcrumbs items={breadcrumbs} className="mb-8" />
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-5">
                <Train className="w-5 h-5 text-orange-400" />
                <span className="text-orange-400 font-semibold text-sm">
                  Near {station.name} Station
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Locksmith Near {station.name} Station
              </h1>
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                {station.description} Local locksmith covering all streets near{' '}
                {station.name} station. {station.responseTime} average response time.
                Available 24/7.
              </p>

              <div className="grid grid-cols-3 gap-3 mb-8">
                <div className="bg-white/5 border border-white/10 rounded-xl p-3 text-center">
                  <Clock className="w-5 h-5 text-orange-400 mx-auto mb-1" />
                  <div className="text-white font-bold text-sm">{station.responseTime}</div>
                  <div className="text-slate-500 text-xs">Response</div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-3 text-center">
                  <Train className="w-5 h-5 text-blue-400 mx-auto mb-1" />
                  <div className="text-white font-bold text-sm">{station.lines.length}</div>
                  <div className="text-slate-500 text-xs">Lines</div>
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

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h2 className="text-white font-bold text-lg mb-4">
                {station.name} Station — Coverage Details
              </h2>
              <div className="space-y-3 text-sm mb-5">
                {[
                  { label: 'Station', value: station.name },
                  { label: 'Area', value: station.area },
                  { label: 'Borough', value: station.borough },
                  { label: 'Postcode', value: station.postcode },
                  { label: 'Response Time', value: station.responseTime },
                ].map(({ label, value }) => (
                  <div key={label} className="flex justify-between border-b border-white/5 pb-2">
                    <span className="text-slate-400">{label}</span>
                    <span className="text-white font-medium">{value}</span>
                  </div>
                ))}
              </div>
              <div>
                <p className="text-slate-500 text-xs mb-2">Train Lines:</p>
                <div className="flex flex-wrap gap-2">
                  {station.lines.map((line) => (
                    <span key={line} className="text-xs px-2.5 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30">
                      {line}
                    </span>
                  ))}
                </div>
              </div>
              {station.nearbyStreets.length > 0 && (
                <div className="mt-4">
                  <p className="text-slate-500 text-xs mb-2">Nearby Streets:</p>
                  <div className="flex flex-wrap gap-1">
                    {station.nearbyStreets.slice(0, 4).map((street) => (
                      <span key={street} className="text-xs px-2 py-0.5 rounded bg-gray-800 text-slate-400">
                        {street}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4">
        <section className="py-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            Locksmith Services Near {station.name}
          </h2>
          <p className="text-slate-300 mb-8 max-w-2xl">
            Whether you&apos;ve been locked out near {station.name} station or need a locksmith
            anywhere in the {station.area} area, our {station.responseTime} response service
            covers every street and postcode in {station.postcode}.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {emergencyServices.map((service) => (
              <Link
                key={service.slug}
                href={`/${service.slug}-${station.locationSlug}`}
                className="group flex items-center justify-between p-4 bg-[#111827] border border-gray-800 rounded-xl hover:border-orange-500/40 transition-all"
              >
                <div>
                  <div className="text-white font-semibold text-sm group-hover:text-orange-400 transition-colors">
                    {service.name} near {station.name}
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5">From £{service.priceFrom} · {station.responseTime}</div>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-orange-400 transition-colors" />
              </Link>
            ))}
          </div>

          <div className="bg-[#111827] border border-gray-800 rounded-2xl p-6">
            <h3 className="text-white font-bold text-lg mb-4">
              Locksmith Coverage Near {station.name}
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                `Covers all streets within 1 mile of ${station.name} station`,
                `${station.responseTime} average response time`,
                `Fully covers ${station.postcode} postcode`,
                'Available 24/7 including nights and weekends',
                'No call-out fee',
                'Non-destructive entry in most cases',
              ].map((point) => (
                <div key={point} className="flex items-center gap-2 text-slate-300 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />
                  {point}
                </div>
              ))}
            </div>
          </div>

          {station.landmarks.length > 0 && (
            <div className="mt-6 flex items-start gap-3 bg-[#111827] border border-gray-800 rounded-xl p-4">
              <MapPin className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
              <p className="text-slate-300 text-sm">
                <span className="text-white font-semibold">Nearby landmarks: </span>
                {station.landmarks.join(' · ')}
              </p>
            </div>
          )}
        </section>
      </div>

      <FAQSection
        faqs={stationFaqs}
        title={`Locksmith Near ${station.name} — FAQs`}
      />

      <CTASection
        title={`Emergency Locksmith Near ${station.name} — Call Now`}
        subtitle={`${station.responseTime} response. Available 24/7. No call-out fee.`}
      />
    </>
  )
}
