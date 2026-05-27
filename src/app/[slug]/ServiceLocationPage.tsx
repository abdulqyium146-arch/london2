import Link from 'next/link'
import {
  Phone, MapPin, Clock, CheckCircle2, ChevronRight,
  AlertTriangle, Shield, Star, Train,
} from 'lucide-react'
import { Breadcrumbs } from '@/components/seo/Breadcrumbs'
import { FAQSection } from '@/components/sections/FAQSection'
import { CTASection } from '@/components/sections/CTASection'
import { ReviewsSlider } from '@/components/sections/ReviewsSlider'
import { SchemaMarkup } from '@/components/seo/SchemaMarkup'
import { generateServiceSchema, generateLocalBusinessSchema, generateFAQSchema } from '@/lib/seo/schema'
import { BUSINESS } from '@/lib/constants'
import { services } from '@/data/services'
import { locations } from '@/data/locations'
import type { Service, Location, FAQ } from '@/types'

interface ServiceLocationPageProps {
  service: Service
  location: Location
  slug: string
}

export function ServiceLocationPage({ service, location, slug }: ServiceLocationPageProps) {
  const combinedFaqs: FAQ[] = [
    {
      question: `How quickly can you provide ${service.name} in ${location.name}?`,
      answer: `Our locksmiths in ${location.name} typically arrive within ${location.responseTime} for ${service.name} requests. We have locksmiths stationed across ${location.borough} to ensure fast response to any ${service.name.toLowerCase()} emergency in ${location.name} and surrounding ${location.postcodes.join(', ')} postcodes.`,
    },
    {
      question: `How much does ${service.name} cost in ${location.name}?`,
      answer: `${service.name} in ${location.name} costs ${service.priceRange}. We provide a transparent fixed quote before arriving — no hidden charges and no call-out fee. The exact price depends on your specific situation, which we&apos;ll discuss when you call.`,
    },
    {
      question: `Is your ${service.name} service available 24/7 in ${location.name}?`,
      answer: `Yes. Our ${service.name} service in ${location.name} is available ${service.availability}${service.emergencyService ? `, including bank holidays and Christmas` : ''}. Call ${BUSINESS.phone} any time for immediate assistance.`,
    },
    ...service.faqs.slice(0, 3),
  ]

  const relatedServiceLocations = services
    .filter((s) => service.relatedServices.includes(s.slug))
    .slice(0, 4)

  const nearbyLocationLinks = location.nearbyAreaSlugs
    .map((slug) => locations.find((l) => l.slug === slug))
    .filter(Boolean)
    .slice(0, 4) as Location[]

  const schemas = [
    generateServiceSchema(service, location),
    generateLocalBusinessSchema(location),
    generateFAQSchema(combinedFaqs.slice(0, 5)),
  ]

  const breadcrumbs = [
    { name: 'Services', href: '/services' },
    { name: service.name, href: `/services/${service.slug}` },
    { name: location.name, href: `/${slug}` },
  ]

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
              {service.emergencyService && (
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/20 border border-red-500/30 text-red-400 text-sm font-semibold mb-5">
                  <AlertTriangle className="w-4 h-4" />
                  Emergency Service — Available 24/7 in {location.name}
                </div>
              )}
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="w-4 h-4 text-orange-400" />
                <span className="text-orange-400 font-semibold text-sm">
                  {location.borough} · {location.postcodes.join(', ')}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {service.name} in {location.name}
              </h1>
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                Professional {service.name.toLowerCase()} in {location.name},{' '}
                {location.borough}. Available {service.availability}, {location.responseTime} response
                time. Fully insured, no call-out fee.
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-3 mb-8">
                <div className="bg-white/5 border border-white/10 rounded-xl p-3 text-center">
                  <Clock className="w-5 h-5 text-orange-400 mx-auto mb-1" />
                  <div className="text-white font-bold text-sm">{location.responseTime}</div>
                  <div className="text-slate-500 text-xs">Response</div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-3 text-center">
                  <Star className="w-5 h-5 text-amber-400 mx-auto mb-1" />
                  <div className="text-white font-bold text-sm">{service.priceRange}</div>
                  <div className="text-slate-500 text-xs">Price Range</div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-3 text-center">
                  <Shield className="w-5 h-5 text-green-400 mx-auto mb-1" />
                  <div className="text-white font-bold text-sm">£0</div>
                  <div className="text-slate-500 text-xs">Call-Out Fee</div>
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

            {/* Right: Service Features */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h2 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-400" />
                {service.name} in {location.name} — What&apos;s Included
              </h2>
              <ul className="space-y-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-slate-300 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4">
        <section className="py-16 grid lg:grid-cols-3 gap-10">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Service Description */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">
                {service.name} in {location.name} — Everything You Need to Know
              </h2>
              <div className="text-slate-300 leading-relaxed space-y-4">
                <p>{service.longDescription}</p>
                <p>
                  In {location.name}, {location.description.toLowerCase()} Our{' '}
                  {location.name} locksmiths are familiar with the local area, including properties
                  near {location.landmarks.slice(0, 2).join(' and ')}, and can reach any address
                  in the {location.postcodes.join(' and ')} postcodes within {location.responseTime}.
                </p>
                <p>
                  Whether you&apos;re locked out at {location.stations[0] || 'your local station'}{' '}
                  or need a {service.name.toLowerCase()} in the residential streets of{' '}
                  {location.borough}, our professional service is just one call away.
                </p>
              </div>
            </div>

            {/* Process */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-5">
                Our {service.name} Process in {location.name}
              </h3>
              <div className="space-y-4">
                {service.process.map((step) => (
                  <div
                    key={step.step}
                    className="flex items-start gap-4 bg-[#111827] border border-gray-800 rounded-2xl p-5"
                  >
                    <div className="w-10 h-10 rounded-xl bg-orange-500/20 border border-orange-500/30 flex items-center justify-center flex-shrink-0">
                      <span className="text-orange-400 font-bold">{step.step}</span>
                    </div>
                    <div>
                      <div className="flex items-center gap-3">
                        <h4 className="text-white font-semibold">{step.title}</h4>
                        {step.duration && (
                          <span className="text-xs text-slate-500 bg-gray-800 px-2 py-0.5 rounded-full">
                            {step.duration}
                          </span>
                        )}
                      </div>
                      <p className="text-slate-400 text-sm mt-1">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Local Area Context */}
            <div className="bg-[#111827] border border-gray-800 rounded-2xl p-6">
              <h3 className="text-white font-bold text-lg mb-4">
                Why Choose Us for {service.name} in {location.name}?
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  `Local locksmith covering all ${location.postcodes.join(', ')} postcodes`,
                  `${location.responseTime} average response time to ${location.name}`,
                  `Familiar with ${location.borough} properties and lock types`,
                  'No call-out fee for any location in ' + location.name,
                  `Nearest locksmith to ${location.stations[0] || location.name + ' station'}`,
                  '24/7 availability including bank holidays',
                ].map((point) => (
                  <div key={point} className="flex items-start gap-2 text-slate-300 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                    {point}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            {/* Emergency CTA */}
            <div className="bg-gradient-to-br from-orange-600/20 to-red-600/20 border border-orange-500/30 rounded-2xl p-6">
              <h3 className="text-white font-bold text-lg mb-3">
                {service.name} {location.name}
              </h3>
              <div className="space-y-2 text-sm text-slate-300 mb-4">
                <div className="flex justify-between">
                  <span>Response Time</span>
                  <span className="text-orange-400 font-medium">{location.responseTime}</span>
                </div>
                <div className="flex justify-between">
                  <span>Price From</span>
                  <span className="text-green-400 font-medium">£{service.priceFrom}</span>
                </div>
                <div className="flex justify-between">
                  <span>Availability</span>
                  <span className="text-green-400 font-medium">{service.availability}</span>
                </div>
                <div className="flex justify-between">
                  <span>Call-Out Fee</span>
                  <span className="text-green-400 font-medium">£0</span>
                </div>
              </div>
              <Link
                href={BUSINESS.phoneHref}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold"
              >
                <Phone className="w-4 h-4" />
                {BUSINESS.phone}
              </Link>
            </div>

            {/* Other Services in Location */}
            {relatedServiceLocations.length > 0 && (
              <div className="bg-[#111827] border border-gray-800 rounded-2xl p-5">
                <h3 className="text-white font-bold mb-3 text-sm">
                  More Services in {location.name}
                </h3>
                <div className="space-y-2">
                  {relatedServiceLocations.map((relService) => (
                    <Link
                      key={relService.slug}
                      href={`/${relService.slug}-${location.slug}`}
                      className="flex items-center justify-between text-sm text-slate-400 hover:text-orange-400 transition-colors"
                    >
                      <span>{relService.name}</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Nearby Areas */}
            {nearbyLocationLinks.length > 0 && (
              <div className="bg-[#111827] border border-gray-800 rounded-2xl p-5">
                <h3 className="text-white font-bold mb-3 text-sm">
                  {service.name} Nearby
                </h3>
                <div className="space-y-2">
                  {nearbyLocationLinks.map((nearbyLoc) => (
                    <Link
                      key={nearbyLoc.slug}
                      href={`/${service.slug}-${nearbyLoc.slug}`}
                      className="flex items-center gap-2 text-sm text-slate-400 hover:text-orange-400 transition-colors"
                    >
                      <MapPin className="w-3.5 h-3.5 text-slate-600" />
                      {service.name} {nearbyLoc.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Stations */}
            {location.stations.length > 0 && (
              <div className="bg-[#111827] border border-gray-800 rounded-2xl p-5">
                <h3 className="text-white font-bold mb-3 text-sm flex items-center gap-2">
                  <Train className="w-4 h-4 text-slate-400" />
                  {location.name} Stations
                </h3>
                <div className="space-y-1">
                  {location.stations.map((station) => (
                    <div key={station} className="text-sm text-slate-400">
                      {station}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </div>

      {/* Reviews */}
      <ReviewsSlider title={`${service.name} Reviews`} serviceSlug={service.slug} />

      {/* FAQ */}
      <FAQSection
        faqs={combinedFaqs}
        title={`${service.name} ${location.name} FAQs`}
        subtitle={`Common questions about ${service.name.toLowerCase()} in ${location.name}.`}
      />

      <CTASection
        title={`Need ${service.name} in ${location.name}? Call Now`}
        subtitle={`${location.responseTime} response time. Available ${service.availability}. No call-out fee. Fully insured.`}
      />
    </>
  )
}
