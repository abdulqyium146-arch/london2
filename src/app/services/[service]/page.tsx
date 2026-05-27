import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import {
  Phone, CheckCircle2, ArrowRight, MapPin, Clock, Star, ChevronRight,
  AlertTriangle, Shield, Wrench,
} from 'lucide-react'
import { services, getService, getRelatedServices } from '@/data/services'
import { locations } from '@/data/locations'
import { reviews } from '@/data/reviews'
import { Breadcrumbs } from '@/components/seo/Breadcrumbs'
import { FAQSection } from '@/components/sections/FAQSection'
import { CTASection } from '@/components/sections/CTASection'
import { ReviewsSlider } from '@/components/sections/ReviewsSlider'
import { SchemaMarkup } from '@/components/seo/SchemaMarkup'
import { generateServiceSchema, generateFAQSchema } from '@/lib/seo/schema'
import { generateServiceMetadata } from '@/lib/seo/metadata'
import { BUSINESS } from '@/lib/constants'

interface Props {
  params: Promise<{ service: string }>
}

export async function generateStaticParams() {
  return services.map((service) => ({ service: service.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { service: serviceSlug } = await params
  const service = getService(serviceSlug)
  if (!service) return {}
  return generateServiceMetadata(service)
}

export default async function ServicePage({ params }: Props) {
  const { service: serviceSlug } = await params
  const service = getService(serviceSlug)
  if (!service) notFound()

  const relatedServices = getRelatedServices(service)
  const serviceReviews = reviews.filter((r) => r.service === serviceSlug).slice(0, 3)
  const featuredLocations = locations.slice(0, 8)

  const schemas = [
    generateServiceSchema(service),
    generateFAQSchema(service.faqs),
  ]

  const breadcrumbs = [
    { name: 'Services', href: '/services' },
    { name: service.name, href: `/services/${service.slug}` },
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
              {service.emergencyService && (
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/20 border border-red-500/30 text-red-400 text-sm font-semibold mb-6">
                  <AlertTriangle className="w-4 h-4" />
                  Emergency Service — Available 24/7
                </div>
              )}
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {service.heroTitle}
              </h1>
              <p className="text-lg text-slate-300 leading-relaxed mb-8">
                {service.heroSubtitle}
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm text-slate-300">
                  <Clock className="w-4 h-4 text-orange-400" />
                  {service.responseTime} response
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm text-slate-300">
                  <Star className="w-4 h-4 text-amber-400" />
                  From {service.priceRange}
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm text-slate-300">
                  <Shield className="w-4 h-4 text-green-400" />
                  {service.availability}
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

            <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
              <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-400" />
                What&apos;s Included
              </h3>
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
        {/* Long Description */}
        <section className="py-16 grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-white mb-6">
              {service.name} in London — What You Need to Know
            </h2>
            <div className="text-slate-300 leading-relaxed space-y-4">
              <p>{service.longDescription}</p>
            </div>

            {/* Process */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <Wrench className="w-6 h-6 text-orange-400" />
                Our {service.name} Process
              </h3>
              <div className="space-y-4">
                {service.process.map((step) => (
                  <div
                    key={step.step}
                    className="flex items-start gap-4 bg-[#111827] border border-gray-800 rounded-2xl p-5"
                  >
                    <div className="w-10 h-10 rounded-xl bg-orange-500/20 border border-orange-500/30 flex items-center justify-center flex-shrink-0">
                      <span className="text-orange-400 font-bold text-sm">{step.step}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="text-white font-semibold">{step.title}</h4>
                        {step.duration && (
                          <span className="text-xs text-slate-500 bg-gray-800 px-2 py-1 rounded-full">
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
          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            {/* Quick Contact */}
            <div className="bg-gradient-to-br from-orange-600/20 to-red-600/20 border border-orange-500/30 rounded-2xl p-6">
              <h3 className="text-white font-bold text-lg mb-3">Need Help Now?</h3>
              <p className="text-slate-300 text-sm mb-4">
                Our {service.name.toLowerCase()} team is available{' '}
                {service.availability} across London.
              </p>
              <Link
                href={BUSINESS.phoneHref}
                className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold"
              >
                <Phone className="w-4 h-4" />
                {BUSINESS.phone}
              </Link>
            </div>

            {/* Pricing */}
            <div className="bg-[#111827] border border-gray-800 rounded-2xl p-6">
              <h3 className="text-white font-bold mb-3">Pricing</h3>
              <div className="text-3xl font-bold text-orange-400 mb-1">{service.priceRange}</div>
              <p className="text-slate-400 text-xs mb-4">
                Fixed quote provided before we start. No hidden charges, no call-out fee.
              </p>
              <div className="space-y-2 text-sm text-slate-300">
                <div className="flex justify-between">
                  <span>Response Time</span>
                  <span className="text-orange-400 font-medium">{service.responseTime}</span>
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
            </div>

            {/* Areas */}
            <div className="bg-[#111827] border border-gray-800 rounded-2xl p-6">
              <h3 className="text-white font-bold mb-3 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-orange-400" />
                Areas Covered
              </h3>
              <div className="flex flex-wrap gap-2">
                {featuredLocations.map((loc) => (
                  <Link
                    key={loc.slug}
                    href={`/${service.slug}-${loc.slug}`}
                    className="text-xs px-2.5 py-1 rounded-full bg-gray-800 text-slate-400 hover:text-orange-400 hover:bg-orange-500/10 transition-all border border-gray-700"
                  >
                    {loc.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* FAQ */}
      <FAQSection faqs={service.faqs} title={`${service.name} FAQs`} includeSchema={false} />

      {/* Reviews */}
      {serviceReviews.length > 0 && (
        <ReviewsSlider
          title={`${service.name} Reviews`}
          serviceSlug={serviceSlug}
        />
      )}

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-6">Related Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {relatedServices.map((related) => (
                <Link
                  key={related.slug}
                  href={`/services/${related.slug}`}
                  className="group bg-[#111827] border border-gray-800 rounded-2xl p-5 hover:border-orange-500/40 transition-all"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-white font-semibold group-hover:text-orange-400 transition-colors">
                        {related.name}
                      </h3>
                      <p className="text-slate-400 text-xs mt-1">From £{related.priceFrom}</p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-orange-400 transition-colors" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection />
    </>
  )
}
