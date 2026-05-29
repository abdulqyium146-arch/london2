import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, CheckCircle2, Shield, Clock, Star, ChevronRight, ArrowRight } from 'lucide-react'
import { Breadcrumbs } from '@/components/seo/Breadcrumbs'
import { FAQSection } from '@/components/sections/FAQSection'
import { CTASection } from '@/components/sections/CTASection'
import { SchemaMarkup } from '@/components/seo/SchemaMarkup'
import {
  generateServiceSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
  generateWebPageSchema,
} from '@/lib/seo/schema'
import { BUSINESS, SEO } from '@/lib/constants'
import { services } from '@/data/services'
import { locations } from '@/data/locations'
import type { FAQ } from '@/types'

export const metadata: Metadata = {
  title: 'Affordable Locksmith London | No Call-Out Fee | From £49 | 24/7',
  description:
    'Affordable locksmith in London with transparent, fixed prices. Emergency call-outs from £49, no call-out fee, no hidden charges. Available 24/7. Call 020 3900 4444.',
  keywords: [
    'affordable locksmith',
    'affordable locksmith london',
    'cheap locksmith london',
    'cheap locksmith',
    'cheapest locksmith london',
    'best value locksmith london',
    'locksmith no call out fee',
    'locksmith service with no call-out fee in london',
  ],
  alternates: { canonical: `${SEO.siteUrl}/affordable-locksmith-london` },
}

const affordableFaqs: FAQ[] = [
  {
    question: 'How much does an affordable locksmith cost in London?',
    answer:
      'A reputable, affordable locksmith in London charges from £49 for a daytime emergency call-out, with no call-out fee. The total cost depends on the work needed — a simple lockout can cost £49–£90, while lock replacement typically costs £80–£130 including parts. Always get a fixed price before the locksmith arrives.',
  },
  {
    question: 'What is the cheapest way to get a locksmith in London?',
    answer:
      'The most cost-effective approach is to call a locksmith who charges no call-out fee and provides a fixed quote before arriving. Avoid locksmiths who advertise very low prices (£15-£25) as these often lead to much higher charges on arrival. London Locksmith Pro offers transparent pricing from £49 with no call-out fee.',
  },
  {
    question: 'Is a cheap locksmith as good as an expensive one?',
    answer:
      'Price is not a reliable indicator of quality. Some of the most expensive locksmiths use misleading pricing to extract higher fees. A genuinely affordable locksmith like London Locksmith Pro offers competitive, transparent pricing alongside full DBS checks, £5M insurance, and MLA membership.',
  },
  {
    question: 'Do you charge a call-out fee?',
    answer:
      'No. London Locksmith Pro never charges a call-out fee. The only charge is for the work completed, and we provide a fixed quote before starting. No hidden fees, no surprises.',
  },
  {
    question: 'Are your prices fixed?',
    answer:
      'Yes. We provide a fixed total price when you call — before we arrive. The price includes labour, standard parts, and VAT where applicable. You always know the full cost before we start.',
  },
]

const breadcrumbs = [
  { name: 'Home', href: '/' },
  { name: 'Affordable Locksmith London', href: '/affordable-locksmith-london' },
]

const schemas = [
  generateWebPageSchema(
    'Affordable Locksmith London | No Call-Out Fee | From £49 | 24/7',
    'Affordable locksmith in London with transparent, fixed prices. Emergency call-outs from £49, no call-out fee.',
    `${SEO.siteUrl}/affordable-locksmith-london`
  ),
  generateFAQSchema(affordableFaqs),
  generateBreadcrumbSchema([{ name: 'Home', href: '/' }, ...breadcrumbs]),
]

const pricingRows = [
  { service: 'Emergency Lockout (Daytime)', price: 'From £49', href: '/services/emergency-locksmith' },
  { service: 'Emergency Lockout (Evening/Night)', price: 'From £80', href: '/services/24-hour-locksmith' },
  { service: 'Lock Replacement', price: 'From £80', href: '/services/lock-replacement' },
  { service: 'UPVC Door Repair', price: 'From £80', href: '/services/upvc-door-repair' },
  { service: 'Anti-Snap Lock Upgrade', price: 'From £100', href: '/services/security-upgrades' },
  { service: 'Burglary Repair', price: 'From £150', href: '/services/burglary-repair' },
  { service: 'Key Cutting', price: 'From £5', href: '/services/key-cutting' },
  { service: 'Car Lockout', price: 'From £80', href: '/services/car-locksmith' },
  { service: 'Security Survey', price: 'FREE', href: '/services/security-upgrades' },
]

export default function AffordableLocksmithPage() {
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
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 border border-green-500/30 text-green-400 text-sm font-semibold mb-5">
                <Shield className="w-4 h-4" />
                No Call-Out Fee — Fixed Prices Always
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Affordable Locksmith London
              </h1>
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                Genuinely affordable locksmith services across London — transparent fixed prices from{' '}
                <strong className="text-white">£49</strong>, zero call-out fee, and no hidden charges.
                Available 24/7 across all London boroughs.
              </p>

              <div className="grid grid-cols-3 gap-3 mb-8">
                <div className="bg-white/5 border border-white/10 rounded-xl p-3 text-center">
                  <Clock className="w-5 h-5 text-orange-400 mx-auto mb-1" />
                  <div className="text-white font-bold text-sm">30 min</div>
                  <div className="text-slate-500 text-xs">Response</div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-3 text-center">
                  <Star className="w-5 h-5 text-amber-400 mx-auto mb-1" />
                  <div className="text-white font-bold text-sm">From £49</div>
                  <div className="text-slate-500 text-xs">Call-Outs</div>
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

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h2 className="text-white font-bold text-lg mb-4">Why Choose Us?</h2>
              <ul className="space-y-3">
                {[
                  'Fixed quote given over the phone before we arrive',
                  'No call-out fee — ever',
                  'Prices from £49 for daytime emergencies',
                  'No hidden charges — all-inclusive pricing',
                  'DBS checked, fully insured (£5M), MLA members',
                  '24/7 — including bank holidays and Christmas',
                  'Non-destructive entry in 95%+ of lockouts',
                  'Avoid bait-and-switch tactics from other firms',
                ].map((point) => (
                  <li key={point} className="flex items-center gap-3 text-slate-300 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-12">

            {/* What makes us affordable */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-5">
                What Makes a Locksmith Truly Affordable?
              </h2>
              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p>
                  An affordable locksmith is not the same as the cheapest advertised price. Some London
                  locksmiths advertise prices as low as £15–£25 to attract calls, then quote £250+ when
                  they arrive at your door. This practice — called bait-and-switch — is widespread and
                  leaves customers with no choice but to pay.
                </p>
                <p>
                  A genuinely affordable locksmith gives you a{' '}
                  <strong className="text-white">fixed, all-inclusive price over the phone</strong> before
                  they arrive. London Locksmith Pro always does this. Our prices start from £49 for a
                  daytime emergency call-out, with zero call-out fee. What we quote is what you pay.
                </p>
                <p>
                  We are also members of the Master Locksmiths Association, DBS checked, and carry £5M
                  public liability insurance — qualifications that some of the cheapest providers lack.
                  Affordable and professional are not mutually exclusive.
                </p>
              </div>
            </div>

            {/* Pricing table */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-5">
                Affordable Locksmith Prices — London 2025
              </h2>
              <div className="bg-[#111827] border border-gray-800 rounded-2xl overflow-hidden">
                <div className="grid grid-cols-2 gap-4 px-6 py-3 bg-gray-800/50 text-xs font-semibold text-slate-400 uppercase tracking-wide">
                  <span>Service</span>
                  <span>Starting Price</span>
                </div>
                {pricingRows.map((row, i) => (
                  <div
                    key={row.service}
                    className={`grid grid-cols-2 gap-4 px-6 py-4 text-sm ${i < pricingRows.length - 1 ? 'border-b border-gray-800' : ''}`}
                  >
                    <Link href={row.href} className="text-white font-medium hover:text-orange-400 transition-colors">
                      {row.service}
                    </Link>
                    <span className={`font-bold ${row.price === 'FREE' ? 'text-green-400' : 'text-orange-400'}`}>
                      {row.price}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-slate-500 text-xs mt-3">
                All prices include labour, standard parts, and VAT where applicable. Fixed quote given before we arrive.
                See our full{' '}
                <Link href="/pricing" className="text-orange-400 hover:text-orange-300">
                  locksmith price guide →
                </Link>
              </p>
            </div>

            {/* How to avoid scams */}
            <div className="bg-amber-900/20 border border-amber-800/30 rounded-2xl p-6">
              <h3 className="text-white font-bold text-lg mb-4">How to Spot an Unaffordable Locksmith</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  'Advertises £15–£25 prices online',
                  'Refuses to give a total price over the phone',
                  'Adds "extra charges" on arrival',
                  'Cannot show professional credentials',
                  'Drills the lock when non-destructive entry is possible',
                  'Uses Google Ads without a fixed business address',
                ].map((point) => (
                  <div key={point} className="flex items-center gap-2 text-slate-300 text-sm">
                    <span className="text-red-400 font-bold flex-shrink-0">✗</span>
                    {point}
                  </div>
                ))}
              </div>
            </div>

            {/* All services */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-5">Affordable Locksmith Services</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {services.map((svc) => (
                  <Link
                    key={svc.slug}
                    href={`/services/${svc.slug}`}
                    className="group flex items-center justify-between p-3 bg-[#111827] border border-gray-800 rounded-xl hover:border-orange-500/40 transition-all text-sm"
                  >
                    <span className="text-slate-300 group-hover:text-orange-400 transition-colors">
                      {svc.name}
                    </span>
                    <span className="text-orange-400 text-xs font-semibold">From £{svc.priceFrom}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Areas */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-5">Affordable Locksmith — All London Areas</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {locations.map((loc) => (
                  <Link
                    key={loc.slug}
                    href={`/locations/${loc.slug}`}
                    className="group flex items-center justify-between p-2.5 bg-[#111827] border border-gray-800 rounded-xl hover:border-orange-500/40 transition-all text-xs"
                  >
                    <span className="text-slate-400 group-hover:text-orange-400 transition-colors">
                      Locksmith {loc.name}
                    </span>
                    <ChevronRight className="w-3 h-3 text-slate-600 group-hover:text-orange-400 flex-shrink-0" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            <div className="bg-gradient-to-br from-orange-600/20 to-red-600/20 border border-orange-500/30 rounded-2xl p-6">
              <h3 className="text-white font-bold text-lg mb-3">Get a Fixed Price Now</h3>
              <p className="text-slate-300 text-sm mb-4">
                Call for your free, no-obligation fixed quote. 30-minute response. No call-out fee.
              </p>
              <Link
                href={BUSINESS.phoneHref}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold"
              >
                <Phone className="w-4 h-4" />
                {BUSINESS.phone}
              </Link>
              <div className="text-xs text-center text-green-400 mt-2">✓ No call-out fee — fixed price guaranteed</div>
            </div>

            <div className="bg-[#111827] border border-gray-800 rounded-2xl p-5">
              <h3 className="text-white font-bold mb-3 text-sm">Popular Services</h3>
              <div className="space-y-2">
                {services.filter((s) => s.emergencyService).map((svc) => (
                  <Link
                    key={svc.slug}
                    href={`/services/${svc.slug}`}
                    className="flex items-center justify-between text-sm text-slate-400 hover:text-orange-400 transition-colors group"
                  >
                    <span>{svc.name}</span>
                    <span className="text-orange-400 text-xs">From £{svc.priceFrom}</span>
                  </Link>
                ))}
              </div>
              <Link href="/pricing" className="flex items-center gap-1 text-xs text-orange-400 hover:text-orange-300 mt-3 transition-colors">
                Full price guide <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            <div className="bg-[#111827] border border-gray-800 rounded-2xl p-5">
              <h3 className="text-white font-bold mb-3 text-sm">Related Pages</h3>
              <div className="space-y-2">
                {[
                  { label: 'Locksmith Price Guide 2025', href: '/pricing' },
                  { label: '24/7 Residential Locksmith', href: '/residential-locksmith-london' },
                  { label: 'Change Locks London', href: '/change-locks-london' },
                  { label: 'Emergency Locksmith', href: '/services/emergency-locksmith' },
                  { label: '24 Hour Locksmith', href: '/services/24-hour-locksmith' },
                ].map(({ label, href }) => (
                  <Link
                    key={href}
                    href={href}
                    className="flex items-center justify-between text-sm text-slate-400 hover:text-orange-400 transition-colors group"
                  >
                    <span>{label}</span>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-orange-400" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <FAQSection
        faqs={affordableFaqs}
        title="Affordable Locksmith London — FAQs"
        includeSchema={false}
      />

      <CTASection
        title="Affordable Locksmith London — Call Now"
        subtitle="Fixed prices from £49. No call-out fee. No hidden charges. Available 24/7."
      />
    </>
  )
}
