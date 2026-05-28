import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Phone, CheckCircle2, Clock, Shield, Star, MapPin, ChevronRight,
  AlertTriangle, ArrowRight, Home, Lock, Key, Wrench,
} from 'lucide-react'
import { services } from '@/data/services'
import { locations } from '@/data/locations'
import { postcodes } from '@/data/postcodes'
import { Breadcrumbs } from '@/components/seo/Breadcrumbs'
import { FAQSection } from '@/components/sections/FAQSection'
import { CTASection } from '@/components/sections/CTASection'
import { ReviewsSlider } from '@/components/sections/ReviewsSlider'
import { SchemaMarkup } from '@/components/seo/SchemaMarkup'
import {
  generateServiceSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
  generateLocalBusinessSchema,
  generateHowToSchema,
  generateWebPageSchema,
  generateItemListSchema,
} from '@/lib/seo/schema'
import { BUSINESS, SEO } from '@/lib/constants'
import type { FAQ } from '@/types'

const PAGE_URL = `${SEO.siteUrl}/residential-locksmith-london`

export const metadata: Metadata = {
  title: '24/7 Residential Locksmith London | Home Lock Experts | 30-Min Response',
  description:
    'Trusted 24/7 residential locksmith in London. Emergency home lockouts, lock repairs, replacements & security upgrades across all 32 boroughs. 30-min response, no call-out fee. Call 020 3900 4444.',
  keywords: [
    '24/7 residential locksmith london',
    'residential locksmith london',
    '24 7 residential locksmith london',
    'home locksmith london',
    'house locksmith london',
    'domestic locksmith london',
    '24 hour residential locksmith london',
    'residential lock repair london',
    'residential locksmith near me london',
    'local residential locksmith london',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: '24/7 Residential Locksmith London | 30-Min Response | No Call-Out Fee',
    description:
      'Expert residential locksmith in London. 24/7 emergency home lockouts, lock repairs & security upgrades. 30-minute response across all boroughs.',
    url: PAGE_URL,
    type: 'website',
    siteName: SEO.siteName,
    locale: 'en_GB',
  },
}

const residentialService = services.find((s) => s.slug === 'residential-locksmith')!

const residentialFaqs: FAQ[] = residentialService?.faqs ?? []

const RESIDENTIAL_SERVICES = [
  {
    name: 'House Lockout',
    slug: 'house-lockout',
    desc: 'Locked out of your home? We get you back in within 30 minutes, non-destructively.',
    icon: Home,
    price: '£49',
  },
  {
    name: 'Lock Repair',
    slug: 'lock-repair',
    desc: 'Stiff, damaged, or broken home lock? Repaired on-site by our residential specialists.',
    icon: Wrench,
    price: '£59',
  },
  {
    name: 'Lock Replacement',
    slug: 'lock-replacement',
    desc: 'Full residential lock replacement with insurance-approved, British Standard locks.',
    icon: Lock,
    price: '£79',
  },
  {
    name: 'Burglary Repair',
    slug: 'burglary-repair',
    desc: 'Emergency door and lock repair after a break-in. Insurance documentation provided.',
    icon: Shield,
    price: '£89',
  },
  {
    name: 'Key Cutting',
    slug: 'key-cutting',
    desc: 'Spare home keys cut on-site for all residential lock types.',
    icon: Key,
    price: '£15',
  },
  {
    name: 'Smart Lock Installation',
    slug: 'smart-lock-installation',
    desc: 'Upgrade your home to keyless smart lock entry — Yale, Nest, Ultion and more.',
    icon: Lock,
    price: '£129',
  },
  {
    name: 'Security Upgrades',
    slug: 'security-upgrades',
    desc: 'Anti-snap, anti-drill, anti-pick locks fitted. Improve your home security today.',
    icon: Shield,
    price: '£99',
  },
  {
    name: 'UPVC Door Repair',
    slug: 'upvc-door-repair',
    desc: 'Residential UPVC and composite door lock and mechanism repair and replacement.',
    icon: Home,
    price: '£79',
  },
]

const WHY_CHOOSE = [
  'Available 24/7 — nights, weekends & bank holidays',
  '30-minute average response anywhere in London',
  'No call-out fee on residential jobs',
  'Fixed quote before we arrive — no hidden charges',
  'Non-destructive entry in 95%+ of home lockouts',
  'Insurance-approved locks & written documentation',
  'DBS-checked, fully-insured residential locksmiths',
  '12-month guarantee on all lock installations',
  'All residential lock brands and door types covered',
  'Works with all major home insurers',
]

const LOCK_TYPES = [
  'Yale rim locks',
  'BS3621 5-lever mortice deadlocks',
  'UPVC multipoint systems',
  'Composite door locks',
  'Smart locks (Yale, Nest, Ultion)',
  'Banham high-security locks',
  'Mul-T-Lock cylinders',
  'ERA & Chubb locks',
  'Nightlatches',
  'Deadbolts',
  'Rim deadlocks',
  'Door chain locks',
]

export default function ResidentialLocksmithLondonPage() {
  const featuredLocations = locations.slice(0, 22)
  const featuredPostcodes = postcodes.slice(0, 12)

  const breadcrumbs = [
    { name: 'Services', href: '/services' },
    { name: '24/7 Residential Locksmith London', href: '/residential-locksmith-london' },
  ]

  const schemas = [
    ...(residentialService
      ? [
          generateServiceSchema(residentialService),
          generateHowToSchema(
            'How Our Residential Locksmith Service Works',
            '4-step process to get a 24/7 residential locksmith to your London home.',
            residentialService.process.map((s) => ({
              title: s.title,
              description: s.description,
              duration: s.duration,
            }))
          ),
        ]
      : []),
    generateFAQSchema(residentialFaqs),
    generateBreadcrumbSchema([{ name: 'Home', href: '/' }, ...breadcrumbs]),
    generateWebPageSchema(
      '24/7 Residential Locksmith London',
      'Trusted 24/7 residential locksmith in London. Emergency home lockouts, lock repairs, replacements & security upgrades. 30-min response, no call-out fee.',
      PAGE_URL,
      'WebPage'
    ),
    generateItemListSchema(
      'Residential Locksmith Services London',
      PAGE_URL,
      RESIDENTIAL_SERVICES.map((s) => ({
        name: s.name,
        url: `${SEO.siteUrl}/services/${s.slug}`,
        description: s.desc,
      }))
    ),
  ]

  return (
    <>
      <SchemaMarkup schemas={schemas} />

      {/* ── HERO ── */}
      <section className="relative py-20 px-4 bg-hero-gradient overflow-hidden">
        <div className="absolute inset-0 bg-glow-orange opacity-30" />
        <div className="relative max-w-7xl mx-auto">
          <Breadcrumbs items={breadcrumbs} className="mb-8" />
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Emergency badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 border border-green-500/30 text-green-400 text-sm font-semibold mb-6">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Available Right Now — 24/7
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
                24/7 Residential Locksmith London
              </h1>
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                London&apos;s trusted <strong className="text-white">residential locksmith service</strong> — available 24 hours a day,
                7 days a week. Emergency home lockouts, lock repairs, replacements, and full security
                upgrades across all 32 London boroughs. <strong className="text-white">30-minute response. No call-out fee.</strong>
              </p>

              {/* Quick trust stats */}
              <div className="grid grid-cols-3 gap-3 mb-8">
                <div className="bg-white/5 border border-white/10 rounded-xl p-3 text-center">
                  <Clock className="w-5 h-5 text-orange-400 mx-auto mb-1" />
                  <div className="text-white font-bold text-sm">30 Mins</div>
                  <div className="text-slate-500 text-xs">Response</div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-3 text-center">
                  <Star className="w-5 h-5 text-amber-400 mx-auto mb-1" />
                  <div className="text-white font-bold text-sm">4.9★</div>
                  <div className="text-slate-500 text-xs">847 Reviews</div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-3 text-center">
                  <Shield className="w-5 h-5 text-green-400 mx-auto mb-1" />
                  <div className="text-white font-bold text-sm">£0</div>
                  <div className="text-slate-500 text-xs">Call-Out Fee</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href={BUSINESS.phoneHref}
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold text-lg shadow-orange-glow hover:scale-105 transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  Call Now: {BUSINESS.phone}
                </Link>
                <Link
                  href={BUSINESS.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-green-600/20 border border-green-500/40 text-green-400 font-semibold hover:bg-green-600/30 transition-all"
                >
                  WhatsApp Us
                </Link>
              </div>
            </div>

            {/* Hero right — What's included */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
              <h2 className="text-white font-bold text-lg mb-5 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-400" />
                What Our Residential Service Covers
              </h2>
              <ul className="space-y-3">
                {[
                  'Emergency 24/7 home lockouts',
                  'Residential lock repair & replacement',
                  'Burglary damage repair & boarding',
                  'UPVC & composite door lock repair',
                  'Anti-snap cylinder upgrades',
                  'Smart & keyless lock installation',
                  'Home security audit & upgrades',
                  'Key cutting for all home lock types',
                  'Insurance-approved documentation',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-300 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── RESIDENTIAL SERVICES GRID ── */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <p className="text-orange-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Complete Residential Coverage
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            All Residential Locksmith Services in London
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Our residential locksmiths handle every home lock and security need. Each service is
            available 24/7 with a 30-minute response and a fixed upfront price.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {RESIDENTIAL_SERVICES.map(({ name, slug, desc, icon: Icon, price }) => (
            <Link
              key={slug}
              href={`/services/${slug}`}
              className="group bg-[#111827] border border-gray-800 rounded-2xl p-5 hover:border-orange-500/40 hover:shadow-card-hover transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-4 group-hover:bg-orange-500/20 transition-colors">
                <Icon className="w-5 h-5 text-orange-400" />
              </div>
              <h3 className="text-white font-bold mb-2 group-hover:text-orange-400 transition-colors">
                {name}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-3">{desc}</p>
              <div className="flex items-center justify-between">
                <span className="text-green-400 text-sm font-semibold">From {price}</span>
                <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-orange-400 transition-colors" />
              </div>
            </Link>
          ))}
        </div>

        {/* ── MAIN CONTENT + SIDEBAR ── */}
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-12">

            {/* Why Residential Locksmith Section */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                What Is a Residential Locksmith?
              </h2>
              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p>
                  A <strong className="text-white">residential locksmith</strong> specialises exclusively in home security —
                  the locks, doors, and access systems that protect your family and property. Unlike
                  a general locksmith who might work across automotive and commercial sectors, a
                  dedicated residential locksmith has deep expertise in all domestic lock types,
                  British Standard requirements, and the specific security vulnerabilities of London
                  homes.
                </p>
                <p>
                  At <strong className="text-white">London Locksmith Pro</strong>, our residential team covers every aspect
                  of home lock security across all 32 London boroughs. Whether you live in a Victorian
                  terrace in Walthamstow, a new-build flat in Canary Wharf, or a period conversion in
                  Islington, our locksmiths understand the door and lock systems specific to your
                  property type.
                </p>
                <p>
                  Our <strong className="text-white">24/7 residential locksmith service</strong> in London means a qualified
                  technician can be at your door within 30 minutes — whether you call at midday or
                  at 3am on a Sunday. We operate 365 days a year including Christmas Day, New Year,
                  and all bank holidays.
                </p>
              </div>
            </div>

            {/* 24/7 Emergency Section */}
            <div className="bg-red-900/10 border border-red-800/20 rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-red-500/20 border border-red-500/30 flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-6 h-6 text-red-400" />
                </div>
                <div>
                  <h2 className="text-white font-bold text-xl mb-3">
                    24/7 Emergency Residential Locksmith London
                  </h2>
                  <p className="text-slate-300 text-sm leading-relaxed mb-4">
                    Locked out of your home at any hour? Our <strong className="text-white">emergency residential
                    locksmith</strong> service operates around the clock. Call now and a local locksmith
                    will be with you in approximately 30 minutes. We use non-destructive entry
                    techniques in 95%+ of cases — no damage to your door, frame, or lock.
                  </p>
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {['House lockouts', 'Flat lockouts', 'Broken keys', 'Failed locks', 'Burglary damage', 'Jammed doors'].map((item) => (
                      <div key={item} className="flex items-center gap-2 text-slate-300 text-sm">
                        <CheckCircle2 className="w-3.5 h-3.5 text-red-400 flex-shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                  <Link
                    href={BUSINESS.phoneHref}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold"
                  >
                    <Phone className="w-4 h-4" />
                    Call 24/7: {BUSINESS.phone}
                  </Link>
                </div>
              </div>
            </div>

            {/* How It Works */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                How Our 24/7 Residential Locksmith Service Works
              </h2>
              <div className="space-y-4">
                {[
                  { step: '01', title: 'Call Our 24/7 Residential Line', desc: 'Phone 020 3900 4444 any time. Our team answers within 3 rings, around the clock. Tell us your address and the issue — we\'ll take it from there.', time: '< 1 min', color: 'from-orange-500/20 to-orange-600/10', border: 'border-orange-500/20', textColor: 'text-orange-400' },
                  { step: '02', title: 'Receive a Fixed Quote', desc: 'We give you a transparent, fixed price before sending anyone out. No surprises, no hidden charges. You agree the price before the locksmith arrives.', time: '2 mins', color: 'from-blue-500/20 to-blue-600/10', border: 'border-blue-500/20', textColor: 'text-blue-400' },
                  { step: '03', title: 'Locksmith Arrives in 30 Minutes', desc: 'Your nearest residential locksmith is dispatched immediately. Average arrival time is 30 minutes across London, often faster in well-covered areas.', time: '~30 mins', color: 'from-green-500/20 to-green-600/10', border: 'border-green-500/20', textColor: 'text-green-400' },
                  { step: '04', title: 'Home Secured', desc: 'Non-destructive entry, repair or lock upgrade completed on-site. Full documentation provided if required for insurance. 12-month guarantee on all parts.', time: '20–60 mins', color: 'from-purple-500/20 to-purple-600/10', border: 'border-purple-500/20', textColor: 'text-purple-400' },
                ].map(({ step, title, desc, time, color, border, textColor }) => (
                  <div key={step} className={`flex items-start gap-4 rounded-2xl p-5 bg-gradient-to-br ${color} border ${border}`}>
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                      <span className={`font-black text-lg ${textColor}`}>{step}</span>
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="text-white font-bold">{title}</h3>
                        <span className={`text-xs px-2 py-0.5 rounded-full bg-white/5 ${textColor}`}>{time}</span>
                      </div>
                      <p className="text-slate-300 text-sm leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Lock types */}
            <div className="bg-[#111827] border border-gray-800 rounded-2xl p-6">
              <h2 className="text-white font-bold text-xl mb-5">
                Home Lock Types We Work With
              </h2>
              <p className="text-slate-400 text-sm mb-5">
                Our residential locksmiths are qualified to work with every lock type found in London homes:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {LOCK_TYPES.map((lock) => (
                  <div key={lock} className="flex items-center gap-2 text-slate-300 text-sm">
                    <Lock className="w-3.5 h-3.5 text-orange-400 flex-shrink-0" />
                    {lock}
                  </div>
                ))}
              </div>
            </div>

            {/* Why Choose Us */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Why Choose Our Residential Locksmith Service?
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {WHY_CHOOSE.map((point) => (
                  <div key={point} className="flex items-start gap-3 bg-[#111827] border border-gray-800 rounded-xl p-4">
                    <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300 text-sm">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Coverage — all London locations */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-3">
                Residential Locksmith Coverage Across London
              </h2>
              <p className="text-slate-400 mb-6">
                Our 24/7 residential locksmith service covers all 32 London boroughs. Click your
                area for local pricing and response times.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {featuredLocations.map((loc) => (
                  <Link
                    key={loc.slug}
                    href={`/residential-locksmith-${loc.slug}`}
                    className="group flex items-center justify-between p-3 bg-[#111827] border border-gray-800 rounded-xl hover:border-orange-500/40 transition-all text-sm"
                  >
                    <span className="text-slate-300 group-hover:text-orange-400 transition-colors">
                      Residential Locksmith {loc.name}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-orange-400 flex-shrink-0" />
                  </Link>
                ))}
              </div>
              <Link
                href="/locations"
                className="inline-flex items-center gap-2 mt-4 text-orange-400 hover:text-orange-300 font-semibold text-sm transition-colors"
              >
                View all coverage areas <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Postcode coverage */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4">
                24/7 Residential Locksmith by London Postcode
              </h3>
              <div className="flex flex-wrap gap-2">
                {featuredPostcodes.map((pc) => (
                  <Link
                    key={pc.slug}
                    href={`/locksmith-${pc.slug}`}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-800 border border-gray-700 hover:border-orange-500/40 hover:text-orange-400 transition-all text-sm"
                  >
                    <span className="text-orange-400 font-mono font-bold text-xs">{pc.code}</span>
                    <span className="text-slate-400">{pc.area}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Pricing */}
            <div className="bg-[#111827] border border-gray-800 rounded-2xl p-6">
              <h2 className="text-white font-bold text-xl mb-2">
                Residential Locksmith Prices in London
              </h2>
              <p className="text-slate-400 text-sm mb-6">
                Fixed, transparent pricing — quoted before we arrive. No call-out fee, no hidden charges.
              </p>
              <div className="space-y-3">
                {[
                  { service: 'Emergency Home Lockout', price: 'From £49', note: '24/7' },
                  { service: 'Lock Repair', price: 'From £59', note: 'Same day' },
                  { service: 'Lock Replacement (cylinder)', price: 'From £79', note: 'Inc. parts' },
                  { service: 'BS3621 Deadlock Fitting', price: 'From £99', note: 'Insurance grade' },
                  { service: 'Anti-Snap Cylinder Upgrade', price: 'From £89', note: 'Recommended' },
                  { service: 'Smart Lock Installation', price: 'From £129', note: 'Supply & fit' },
                  { service: 'Burglary Repair', price: 'From £89', note: 'Emergency' },
                  { service: 'UPVC Door Lock Repair', price: 'From £79', note: 'All brands' },
                ].map(({ service: svc, price, note }) => (
                  <div key={svc} className="flex items-center justify-between py-2 border-b border-gray-800 last:border-0">
                    <span className="text-slate-300 text-sm">{svc}</span>
                    <div className="flex items-center gap-3">
                      <span className="text-xs px-2 py-0.5 rounded bg-gray-800 text-slate-500">{note}</span>
                      <span className="text-green-400 font-bold text-sm">{price}</span>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-slate-500 text-xs mt-4">
                All prices subject to on-site assessment. Final price confirmed before work begins.
              </p>
            </div>

          </div>

          {/* ── SIDEBAR ── */}
          <div className="space-y-5">
            {/* Sticky CTA */}
            <div className="sticky top-28 space-y-5">
              <div className="bg-gradient-to-br from-orange-600/20 to-red-600/20 border border-orange-500/30 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-green-400 text-xs font-semibold">Available Right Now</span>
                </div>
                <h3 className="text-white font-bold text-lg mb-2">
                  24/7 Residential Locksmith London
                </h3>
                <div className="space-y-2 text-sm text-slate-300 mb-4">
                  <div className="flex justify-between">
                    <span>Response Time</span>
                    <span className="text-orange-400 font-medium">30 minutes</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Price From</span>
                    <span className="text-green-400 font-medium">£49</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Call-Out Fee</span>
                    <span className="text-green-400 font-medium">£0</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Availability</span>
                    <span className="text-green-400 font-medium">24/7 — 365 days</span>
                  </div>
                </div>
                <Link
                  href={BUSINESS.phoneHref}
                  className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold mb-2"
                >
                  <Phone className="w-4 h-4" />
                  {BUSINESS.phone}
                </Link>
                <Link
                  href={BUSINESS.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-green-600/20 border border-green-500/30 text-green-400 font-semibold text-sm"
                >
                  WhatsApp Us
                </Link>
              </div>

              {/* Related services */}
              <div className="bg-[#111827] border border-gray-800 rounded-2xl p-5">
                <h3 className="text-white font-bold mb-3 text-sm">Residential Services</h3>
                <div className="space-y-2">
                  {RESIDENTIAL_SERVICES.map((svc) => (
                    <Link
                      key={svc.slug}
                      href={`/services/${svc.slug}`}
                      className="flex items-center justify-between text-sm text-slate-400 hover:text-orange-400 transition-colors group"
                    >
                      <span>{svc.name}</span>
                      <ChevronRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-orange-400" />
                    </Link>
                  ))}
                </div>
              </div>

              {/* Trust signals */}
              <div className="bg-[#111827] border border-gray-800 rounded-2xl p-5">
                <h3 className="text-white font-bold mb-4 text-sm">Why Customers Trust Us</h3>
                <div className="space-y-3">
                  {[
                    { icon: Star, text: '4.9★ from 847 Google reviews', color: 'text-amber-400' },
                    { icon: Shield, text: '£5M public liability insurance', color: 'text-blue-400' },
                    { icon: CheckCircle2, text: 'DBS checked technicians', color: 'text-green-400' },
                    { icon: Clock, text: '15+ years in London', color: 'text-orange-400' },
                  ].map(({ icon: Icon, text, color }) => (
                    <div key={text} className="flex items-center gap-3 text-sm text-slate-300">
                      <Icon className={`w-4 h-4 ${color} flex-shrink-0`} />
                      {text}
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation */}
              <div className="bg-[#111827] border border-gray-800 rounded-2xl p-5">
                <h3 className="text-white font-bold mb-3 text-sm">Quick Links</h3>
                <div className="space-y-2">
                  {[
                    { label: 'Emergency Locksmith London', href: '/services/emergency-locksmith' },
                    { label: 'House Lockout London', href: '/services/house-lockout' },
                    { label: 'All Locksmith Services', href: '/services' },
                    { label: 'London Coverage Areas', href: '/locations' },
                    { label: 'Locksmith Pricing', href: '/pricing' },
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
      </div>

      {/* Reviews */}
      <ReviewsSlider title="What London Homeowners Say About Our Residential Locksmith Service" />

      {/* FAQ */}
      <FAQSection
        faqs={residentialFaqs}
        title="24/7 Residential Locksmith London — FAQs"
        subtitle="Common questions about our residential locksmith service in London."
        includeSchema={false}
      />

      {/* Final CTA */}
      <CTASection
        title="Need a 24/7 Residential Locksmith in London? Call Now"
        subtitle="30-minute response across all London boroughs. No call-out fee. Fixed price before we arrive."
      />
    </>
  )
}
