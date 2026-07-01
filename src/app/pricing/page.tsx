import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, CheckCircle2, AlertTriangle, Clock, ChevronRight } from 'lucide-react'
import { Breadcrumbs } from '@/components/seo/Breadcrumbs'
import { CTASection } from '@/components/sections/CTASection'
import { FAQSection } from '@/components/sections/FAQSection'
import { SchemaMarkup } from '@/components/seo/SchemaMarkup'
import { generateWebPageSchema, generateBreadcrumbSchema } from '@/lib/seo/schema'
import { BUSINESS, SEO } from '@/lib/constants'
import { services } from '@/data/services'
import { locations } from '@/data/locations'
import { pricingFaqs } from '@/data/faqs'

export const metadata: Metadata = {
  title: 'Locksmith Prices London 2025 | Transparent Pricing | No Hidden Fees',
  description:
    'Clear, transparent locksmith prices in London. Emergency call-outs from £49, lock changes from £80. No call-out fee. Fixed quotes before we start. Call +44 7984 547185.',
  keywords: ['locksmith prices london', 'locksmith cost london', 'how much locksmith london 2025'],
  alternates: { canonical: `${SEO.siteUrl}/pricing` },
}

const pricingTable = [
  { service: 'Emergency Lockout (Daytime)', range: '£49 – £90', time: 'Mon-Fri, 8am-6pm', href: '/services/emergency-locksmith' },
  { service: 'Emergency Lockout (Evening/Night)', range: '£80 – £130', time: 'After 6pm, weekends', href: '/services/24-hour-locksmith' },
  { service: 'Emergency Lockout (Bank Holiday)', range: '£90 – £150', time: 'All bank holidays', href: '/services/24-hour-locksmith' },
  { service: 'UPVC Door Repair', range: '£80 – £280', time: 'Parts-dependent', href: '/services/upvc-door-repair' },
  { service: 'Lock Replacement (Standard)', range: '£80 – £130', time: 'Per lock', href: '/services/lock-replacement' },
  { service: 'Anti-Snap Lock Upgrade', range: '£100 – £160', time: 'Per lock incl. parts', href: '/services/security-upgrades' },
  { service: 'Burglary Repair (Emergency)', range: '£150 – £500+', time: 'Extent-dependent', href: '/services/burglary-repair' },
  { service: 'Car Lockout', range: '£80 – £150', time: 'Make/model-dependent', href: '/services/car-locksmith' },
  { service: 'Smart Lock Installation', range: '£200 – £500', time: 'Supply + fit', href: '/services/smart-lock-installation' },
  { service: 'Key Cutting (Standard)', range: '£5 – £20', time: 'Per key', href: '/services/key-cutting' },
  { service: 'Snapped Key Extraction', range: '£60 – £120', time: 'Per lock', href: '/services/snapped-key-extraction' },
  { service: 'Security Survey', range: 'FREE', time: 'With any service', href: '/services/security-upgrades' },
]

export default function PricingPage() {
  const allLocations = locations

  const schemas = [
    generateWebPageSchema(
      'Locksmith Prices London 2025 | Transparent Pricing | No Hidden Fees',
      'Clear, transparent locksmith prices in London. Emergency call-outs from £49, lock changes from £80. No call-out fee.',
      `${SEO.siteUrl}/pricing`
    ),
    generateBreadcrumbSchema([
      { name: 'Home', href: '/' },
      { name: 'Pricing', href: '/pricing' },
    ]),
  ]

  return (
    <>
      <SchemaMarkup schemas={schemas} />
      {/* Hero */}
      <section className="relative py-20 px-4 bg-hero-gradient overflow-hidden">
        <div className="absolute inset-0 bg-glow-orange opacity-30" />
        <div className="relative max-w-7xl mx-auto">
          <Breadcrumbs items={[{ name: 'Pricing', href: '/pricing' }]} className="mb-8" />
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-orange-400 text-sm font-semibold uppercase tracking-widest mb-4">
              Transparent Pricing
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Locksmith Prices in London — No Hidden Fees
            </h1>
            <p className="text-lg text-slate-300 mb-8">
              We believe in complete price transparency. All prices below are guides — you&apos;ll
              receive a fixed quote before we start any work. No surprises. No call-out fee.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {['No Call-Out Fee', 'Fixed Quote Before Work', 'All-Inclusive Pricing', 'No Hidden Charges'].map((point) => (
                <div key={point} className="flex items-center gap-2 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  {point}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 py-16">
        {/* Warning about rogue locksmiths */}
        <div className="bg-amber-900/20 border border-amber-800/30 rounded-2xl p-5 mb-10 flex gap-4">
          <AlertTriangle className="w-6 h-6 text-amber-400 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="text-white font-semibold mb-1">Avoid Locksmith Scams</h3>
            <p className="text-slate-300 text-sm">
              Some locksmiths advertise very low prices (£15-£25) then charge far more when they arrive.
              Always get a fixed total price (including parts and labour) before the locksmith arrives.
              London Locksmith Pro always provides a fixed quote — guaranteed.
            </p>
          </div>
        </div>

        {/* Pricing Table */}
        <h2 className="text-3xl font-bold text-white mb-6">London Locksmith Price Guide 2025</h2>
        <div className="bg-[#111827] border border-gray-800 rounded-2xl overflow-hidden mb-12">
          <div className="grid grid-cols-3 gap-4 px-6 py-3 bg-gray-800/50 text-xs font-semibold text-slate-400 uppercase tracking-wide">
            <span>Service</span>
            <span>Price Range</span>
            <span>Notes</span>
          </div>
          {pricingTable.map((row, index) => (
            <div
              key={row.service}
              className={`grid grid-cols-3 gap-4 px-6 py-4 text-sm ${
                index < pricingTable.length - 1 ? 'border-b border-gray-800' : ''
              }`}
            >
              <Link href={row.href} className="text-white font-medium hover:text-orange-400 transition-colors">
                {row.service}
              </Link>
              <span className={`font-bold ${row.range === 'FREE' ? 'text-green-400' : 'text-orange-400'}`}>
                {row.range}
              </span>
              <span className="text-slate-400 text-xs">{row.time}</span>
            </div>
          ))}
        </div>

        {/* Pricing Principles */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-[#111827] border border-gray-800 rounded-2xl p-6">
            <h3 className="text-white font-bold text-lg mb-4">What&apos;s Always Included</h3>
            <ul className="space-y-3">
              {[
                'All labour (no separate charge)',
                'VAT where applicable',
                'Standard parts for most jobs',
                'New keys where applicable',
                'After-work advice and recommendations',
                'Written receipt',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-slate-300 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-[#111827] border border-gray-800 rounded-2xl p-6">
            <h3 className="text-white font-bold text-lg mb-4">Factors That Affect Price</h3>
            <ul className="space-y-3">
              {[
                'Time of day (day/evening/night)',
                'Day of week (weekday/weekend)',
                'Bank holiday surcharge',
                'Lock complexity and type',
                'Premium lock brands (if requested)',
                'Extent of damage (burglary repairs)',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-slate-300 text-sm">
                  <Clock className="w-4 h-4 text-orange-400 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Get a Quote */}
        <div className="text-center bg-gradient-to-br from-orange-600/20 to-red-600/20 border border-orange-500/30 rounded-3xl p-10">
          <h2 className="text-3xl font-bold text-white mb-4">
            Get Your Fixed Price Quote
          </h2>
          <p className="text-slate-300 mb-6 max-w-xl mx-auto">
            Call us now and we&apos;ll give you a clear, fixed price before we arrive. No hidden
            charges, no call-out fee, no surprises.
          </p>
          <Link
            href={BUSINESS.phoneHref}
            className="inline-flex items-center gap-3 px-10 py-4 rounded-2xl bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold text-xl shadow-orange-glow hover:scale-105 transition-all"
          >
            <Phone className="w-5 h-5" />
            {BUSINESS.phone}
          </Link>
          <p className="text-slate-500 text-sm mt-4">Available 24/7 — quote in under 2 minutes</p>
        </div>
      </div>

      {/* Service links */}
      <div className="max-w-5xl mx-auto px-4 pb-12">
        <h2 className="text-2xl font-bold text-white mb-5">Browse by Service</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {services.map((svc) => (
            <Link
              key={svc.slug}
              href={`/services/${svc.slug}`}
              className="group flex items-center justify-between p-3 bg-[#111827] border border-gray-800 rounded-xl hover:border-orange-500/40 transition-all text-sm"
            >
              <span className="text-slate-300 group-hover:text-orange-400 transition-colors text-xs">
                {svc.name}
              </span>
              <ChevronRight className="w-3 h-3 text-slate-600 group-hover:text-orange-400 flex-shrink-0" />
            </Link>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-white mt-10 mb-5">Pricing by Area</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {allLocations.map((loc) => (
            <Link
              key={loc.slug}
              href={`/locations/${loc.slug}`}
              className="group flex items-center justify-between p-3 bg-[#111827] border border-gray-800 rounded-xl hover:border-orange-500/40 transition-all text-sm"
            >
              <span className="text-slate-300 group-hover:text-orange-400 transition-colors text-xs">
                Locksmith {loc.name}
              </span>
              <ChevronRight className="w-3 h-3 text-slate-600 group-hover:text-orange-400 flex-shrink-0" />
            </Link>
          ))}
        </div>
      </div>

      <FAQSection faqs={pricingFaqs} title="Pricing FAQs" includeSchema={false} />
      <CTASection variant="minimal" />
    </>
  )
}
