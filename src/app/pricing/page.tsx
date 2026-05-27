import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, CheckCircle2, AlertTriangle, Clock } from 'lucide-react'
import { Breadcrumbs } from '@/components/seo/Breadcrumbs'
import { CTASection } from '@/components/sections/CTASection'
import { FAQSection } from '@/components/sections/FAQSection'
import { BUSINESS } from '@/lib/constants'
import { services } from '@/data/services'
import { pricingFaqs } from '@/data/faqs'

export const metadata: Metadata = {
  title: 'Locksmith Prices London 2025 | Transparent Pricing | No Hidden Fees',
  description:
    'Clear, transparent locksmith prices in London. Emergency call-outs from £49, lock changes from £80. No call-out fee. Fixed quotes before we start. Call 020 3900 4444.',
  keywords: ['locksmith prices london', 'locksmith cost london', 'how much locksmith london 2025'],
  alternates: { canonical: 'https://londonlocksmithpro.co.uk/pricing' },
}

const pricingTable = [
  { service: 'Emergency Lockout (Daytime)', range: '£49 – £90', time: 'Mon-Fri, 8am-6pm' },
  { service: 'Emergency Lockout (Evening/Night)', range: '£80 – £130', time: 'After 6pm, weekends' },
  { service: 'Emergency Lockout (Bank Holiday)', range: '£90 – £150', time: 'All bank holidays' },
  { service: 'UPVC Door Repair', range: '£80 – £280', time: 'Parts-dependent' },
  { service: 'Lock Replacement (Standard)', range: '£80 – £130', time: 'Per lock' },
  { service: 'Anti-Snap Lock Upgrade', range: '£100 – £160', time: 'Per lock incl. parts' },
  { service: 'Burglary Repair (Emergency)', range: '£150 – £500+', time: 'Extent-dependent' },
  { service: 'Car Lockout', range: '£80 – £150', time: 'Make/model-dependent' },
  { service: 'Smart Lock Installation', range: '£200 – £500', time: 'Supply + fit' },
  { service: 'Key Cutting (Standard)', range: '£5 – £20', time: 'Per key' },
  { service: 'Snapped Key Extraction', range: '£60 – £120', time: 'Per lock' },
  { service: 'Security Survey', range: 'FREE', time: 'With any service' },
]

export default function PricingPage() {
  return (
    <>
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
              <span className="text-white font-medium">{row.service}</span>
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

      <FAQSection faqs={pricingFaqs} title="Pricing FAQs" />
      <CTASection variant="minimal" />
    </>
  )
}
