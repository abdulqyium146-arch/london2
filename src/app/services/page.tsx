import type { Metadata } from 'next'
import Link from 'next/link'
import {
  AlertTriangle, Clock, Home, ShieldAlert, DoorOpen, Car,
  Building2, Smartphone, Wrench, Lock, Key, Archive, ShieldCheck, Scissors,
  ChevronRight, Phone, CheckCircle2,
} from 'lucide-react'
import { services } from '@/data/services'
import { Breadcrumbs } from '@/components/seo/Breadcrumbs'
import { CTASection } from '@/components/sections/CTASection'
import { SchemaMarkup } from '@/components/seo/SchemaMarkup'
import { generateItemListSchema, generateWebPageSchema, generateBreadcrumbSchema } from '@/lib/seo/schema'
import { BUSINESS, SEO } from '@/lib/constants'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  AlertTriangle, Clock, Home, ShieldAlert, DoorOpen, Car,
  Building2, Smartphone, Wrench, Lock, Key, Archive, ShieldCheck, Scissors,
}

const PAGE_URL = `${SEO.siteUrl}/services`

export const metadata: Metadata = {
  title: 'Locksmith Services London | All Services | 24/7 Emergency',
  description:
    'Complete range of locksmith services in London. Emergency lockouts, UPVC repairs, burglary repair, smart locks, commercial security. Available 24/7. Call +44 7984 547185.',
  keywords: ['locksmith services london', 'london locksmith services', 'all locksmith services'],
  alternates: { canonical: PAGE_URL },
}

export default function ServicesPage() {
  const emergencyServices = services.filter((s) => s.emergencyService)
  const otherServices = services.filter((s) => !s.emergencyService)

  const schemas = [
    generateWebPageSchema(
      'Locksmith Services London — All Services',
      'Complete range of locksmith services in London. Emergency lockouts, UPVC repairs, burglary repair, smart locks, commercial security. Available 24/7.',
      PAGE_URL,
      'CollectionPage'
    ),
    generateItemListSchema(
      'Locksmith Services in London',
      PAGE_URL,
      services.map((s) => ({
        name: s.name,
        url: `${SEO.siteUrl}/services/${s.slug}`,
        description: s.description,
      }))
    ),
    generateBreadcrumbSchema([
      { name: 'Home', href: '/' },
      { name: 'Services', href: '/services' },
    ]),
  ]

  return (
    <>
      <SchemaMarkup schemas={schemas} />
      {/* Hero */}
      <section className="relative py-20 px-4 bg-hero-gradient overflow-hidden">
        <div className="absolute inset-0 bg-glow-orange opacity-30" />
        <div className="relative max-w-7xl mx-auto">
          <Breadcrumbs items={[{ name: 'Services', href: '/services' }]} className="mb-8" />
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-orange-400 text-sm font-semibold uppercase tracking-widest mb-4">
              Professional Locksmith Services
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Complete Locksmith Services Across London
            </h1>
            <p className="text-lg text-slate-300 mb-8">
              From emergency lockouts at 3am to planned security upgrades, our team of professional
              locksmiths covers every residential, commercial, and automotive lock need across all
              32 London boroughs.
            </p>
            <Link
              href={BUSINESS.phoneHref}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold text-lg shadow-orange-glow hover:scale-105 transition-all duration-300"
            >
              <Phone className="w-5 h-5" />
              Call for Immediate Help: {BUSINESS.phone}
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Emergency Services */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-8 rounded-xl bg-red-500/20 border border-red-500/30 flex items-center justify-center">
              <AlertTriangle className="w-4 h-4 text-red-400" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Emergency Services — Available 24/7</h2>
              <p className="text-slate-400 text-sm">30-minute response, day or night</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {emergencyServices.map((service) => {
              const Icon = iconMap[service.icon] || Lock
              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group bg-[#111827] border border-red-900/30 rounded-2xl p-6 hover:border-orange-500/40 hover:shadow-card-hover transition-all duration-300"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500/20 transition-colors">
                      <Icon className="w-6 h-6 text-red-400 group-hover:text-orange-400 transition-colors" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-bold text-white group-hover:text-orange-400 transition-colors">
                          {service.name}
                        </h3>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-red-500/20 text-red-400 border border-red-500/30 font-semibold flex-shrink-0">
                          24/7
                        </span>
                      </div>
                      <p className="text-slate-400 text-sm leading-relaxed">{service.description}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-800">
                    <div className="text-xs text-slate-500">
                      <span className="text-green-400 font-medium">From £{service.priceFrom}</span>
                      <span className="mx-1">·</span>
                      <span>{service.responseTime} response</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-orange-400 transition-colors" />
                  </div>
                </Link>
              )
            })}
          </div>
        </div>

        {/* Standard Services */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-8 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center">
              <Wrench className="w-4 h-4 text-blue-400" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Standard & Planned Services</h2>
              <p className="text-slate-400 text-sm">Same-day to booked appointments</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {otherServices.map((service) => {
              const Icon = iconMap[service.icon] || Lock
              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group bg-[#111827] border border-gray-800 rounded-2xl p-6 hover:border-blue-500/40 hover:shadow-card-hover transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/20 transition-colors">
                      <Icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-white group-hover:text-blue-400 transition-colors mb-1">
                        {service.name}
                      </h3>
                      <p className="text-slate-400 text-sm leading-relaxed">{service.description}</p>
                      <div className="flex items-center justify-between mt-3">
                        <span className="text-xs text-green-400 font-medium">From £{service.priceFrom}</span>
                        <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-blue-400 transition-colors" />
                      </div>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>

        {/* Why choose our services */}
        <div className="mt-16 bg-[#111827] border border-gray-800 rounded-3xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Every Service Backed by Our Quality Guarantee
              </h2>
              <p className="text-slate-300 leading-relaxed mb-6">
                Whether it&apos;s an emergency at 3am or a planned security upgrade, every London
                Locksmith Pro job comes with the same commitment: transparent pricing, professional
                execution, and a guarantee on all work.
              </p>
              <ul className="space-y-3">
                {[
                  'Fixed price provided before work begins',
                  'No call-out fee on any service',
                  '12-month guarantee on all installations',
                  'Insurance-approved locks and documentation',
                  'DBS-checked, fully insured technicians',
                ].map((point) => (
                  <li key={point} className="flex items-center gap-3 text-slate-300 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-center">
              <Link
                href={BUSINESS.phoneHref}
                className="inline-flex flex-col items-center gap-2 px-10 py-8 rounded-3xl bg-gradient-to-br from-orange-500/20 to-red-600/20 border border-orange-500/30 text-white hover:border-orange-500/60 transition-all duration-300"
              >
                <Phone className="w-10 h-10 text-orange-400" />
                <span className="text-sm text-slate-400">Call for immediate help</span>
                <span className="text-2xl font-bold">{BUSINESS.phone}</span>
                <span className="text-sm text-green-400">✓ Available Now</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <CTASection variant="emergency" />
    </>
  )
}
