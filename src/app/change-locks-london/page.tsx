import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, CheckCircle2, Shield, Clock, Star, ChevronRight, Key } from 'lucide-react'
import { Breadcrumbs } from '@/components/seo/Breadcrumbs'
import { FAQSection } from '@/components/sections/FAQSection'
import { CTASection } from '@/components/sections/CTASection'
import { SchemaMarkup } from '@/components/seo/SchemaMarkup'
import {
  generateFAQSchema,
  generateBreadcrumbSchema,
  generateWebPageSchema,
} from '@/lib/seo/schema'
import { BUSINESS, SEO } from '@/lib/constants'
import { locations } from '@/data/locations'
import type { FAQ } from '@/types'

export const metadata: Metadata = {
  title: 'Change Locks London | Same-Day Lock Change | From £80 | 24/7',
  description:
    'Professional lock changing service across London. Same-day lock change from £80, available 24/7. After break-in, lost keys, or moving home. No call-out fee. Call +44 7984 547185.',
  keywords: [
    'change locks london',
    'lock change london',
    'change my locks london',
    'replace locks london',
    'new locks fitted london',
    'lock change after break in london',
    'lock change moving house london',
    'emergency lock change london',
    'lock replacement london',
    'anti snap lock change london',
  ],
  alternates: { canonical: `${SEO.siteUrl}/change-locks-london` },
}

const faqs: FAQ[] = [
  {
    question: 'How much does it cost to change locks in London?',
    answer:
      'Changing locks in London typically costs £80–£180 depending on the lock type, number of cylinders, and time of day. A standard Yale-style cylinder change starts from £80 including parts and labour. British Standard 5-lever mortice locks start from £100. Anti-snap euro cylinders (recommended for uPVC doors) start from £95. We provide a fixed all-inclusive quote before arriving.',
  },
  {
    question: 'How quickly can you change my locks in London?',
    answer:
      'We provide same-day lock change service across London, typically arriving within 30 minutes of your call. Our locksmiths carry a comprehensive stock of replacement cylinders, mortice locks, and anti-snap cylinders for all major door types — so in most cases we can complete the lock change in a single visit.',
  },
  {
    question: 'Should I change my locks after moving into a new home?',
    answer:
      'Yes — this is one of the most important security steps when moving home. You have no way of knowing how many previous occupants, estate agents, contractors, or neighbours hold copies of the existing keys. Changing all exterior locks when you move in ensures only you and those you choose hold valid keys.',
  },
  {
    question: 'Should I change my locks after a break-in?',
    answer:
      'Absolutely. After a burglary, your existing locks may be damaged, compromised, or targeted again. We recommend replacing damaged locks immediately and upgrading to British Standard anti-snap locks. We offer priority response for burglary repairs and post-break-in security upgrades.',
  },
  {
    question: 'What type of locks should I fit when changing locks in London?',
    answer:
      'For uPVC doors we recommend anti-snap, anti-pick, anti-bump euro cylinders with British Standard (BS EN 1303) certification. For wooden doors with mortice locks, we recommend 5-lever deadlocks to BS 3621. These are typically required by home insurance policies and provide significantly better security than standard cylinders.',
  },
  {
    question: 'Can you change locks without a key?',
    answer:
      'Yes. If you have lost your keys or are locked out, we can gain non-destructive entry and change the locks in a single visit. We use specialist picking and bypass techniques to avoid drilling wherever possible, then replace the cylinder or mortice lock as required.',
  },
]

const breadcrumbs = [
  { name: 'Home', href: '/' },
  { name: 'Change Locks London', href: '/change-locks-london' },
]

const schemas = [
  generateWebPageSchema(
    'Change Locks London | Same-Day Lock Change | From £80 | 24/7',
    'Professional lock changing service across London. Same-day lock change from £80, available 24/7.',
    `${SEO.siteUrl}/change-locks-london`
  ),
  generateFAQSchema(faqs),
  generateBreadcrumbSchema([{ name: 'Home', href: '/' }, ...breadcrumbs]),
]

const reasons = [
  { heading: 'Moving into a new home', body: 'Ensure only you hold valid keys. Previous occupants, estate agents, and contractors may all have copies.' },
  { heading: 'After a burglary or attempted break-in', body: 'Replace compromised locks immediately and upgrade to anti-snap cylinders.' },
  { heading: 'Lost or stolen keys', body: 'If your keys are lost or stolen, changing the locks is the only way to guarantee security.' },
  { heading: 'After a relationship breakdown', body: 'Quickly change who has access to your home.' },
  { heading: 'Worn or faulty locks', body: 'Old, sticky, or difficult locks are a security risk. A fresh cylinder restores smooth operation.' },
  { heading: 'Upgrading to British Standard security', body: 'Older locks may not meet your insurance policy requirements — anti-snap upgrades often do.' },
]

export default function ChangeLockLondonPage() {
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
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300 text-sm font-semibold mb-5">
                <Key className="w-4 h-4" />
                Same-Day Lock Change — London
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Change Locks London
              </h1>
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                Professional lock changing service across all London boroughs. Available 24/7 with{' '}
                <strong className="text-white">30-minute response</strong>. We carry anti-snap cylinders,
                British Standard mortice locks, and all popular brands — typically completed in one visit.
                <strong className="text-white"> No call-out fee.</strong>
              </p>

              <div className="grid grid-cols-3 gap-3 mb-8">
                <div className="bg-white/5 border border-white/10 rounded-xl p-3 text-center">
                  <Clock className="w-5 h-5 text-orange-400 mx-auto mb-1" />
                  <div className="text-white font-bold text-sm">30 min</div>
                  <div className="text-slate-500 text-xs">Response</div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-3 text-center">
                  <Star className="w-5 h-5 text-amber-400 mx-auto mb-1" />
                  <div className="text-white font-bold text-sm">From £80</div>
                  <div className="text-slate-500 text-xs">Lock Change</div>
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
              <h2 className="text-white font-bold text-lg mb-4">Why Change Your Locks?</h2>
              <ul className="space-y-3">
                {reasons.map(({ heading }) => (
                  <li key={heading} className="flex items-center gap-3 text-slate-300 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />
                    {heading}
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

            {/* When to change locks */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-5">When Should You Change Your Locks?</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {reasons.map(({ heading, body }) => (
                  <div key={heading} className="bg-[#111827] border border-gray-800 rounded-xl p-4">
                    <h3 className="text-white font-semibold text-sm mb-1">{heading}</h3>
                    <p className="text-slate-400 text-xs leading-relaxed">{body}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Lock types */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-5">Lock Types We Change in London</h2>
              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p>
                  We stock and fit all standard UK door lock types. Our locksmiths carry replacement cylinders
                  and locks in their vans, enabling same-day completion in most cases.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-4 mt-5">
                {[
                  {
                    name: 'Anti-Snap Euro Cylinders',
                    desc: 'For uPVC and composite doors. Resists the most common break-in technique (snapping). From £95 fitted.',
                    badge: 'Recommended',
                  },
                  {
                    name: '5-Lever Mortice Deadlock',
                    desc: 'British Standard BS 3621 for wooden doors. Required by most home insurance policies. From £100 fitted.',
                    badge: 'BS 3621',
                  },
                  {
                    name: 'Yale-Type Night Latch',
                    desc: 'Spring-loaded latch for front doors. Quick to replace. From £80 fitted.',
                    badge: null,
                  },
                  {
                    name: 'Multipoint Lock',
                    desc: 'Full UPVC mechanism replacement for doors that lock at multiple points. From £130 fitted.',
                    badge: 'uPVC',
                  },
                  {
                    name: 'Smart Locks',
                    desc: 'Keypad or app-controlled smart lock installation. From £220 fitted. See our smart lock service.',
                    badge: 'Smart',
                  },
                  {
                    name: 'Rim Cylinder',
                    desc: 'Replacement rim cylinders for older night latches. From £80 fitted.',
                    badge: null,
                  },
                ].map(({ name, desc, badge }) => (
                  <div key={name} className="bg-[#111827] border border-gray-800 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-white font-semibold text-sm">{name}</span>
                      {badge && (
                        <span className="text-xs px-1.5 py-0.5 rounded bg-orange-500/20 text-orange-400 border border-orange-500/30">
                          {badge}
                        </span>
                      )}
                    </div>
                    <p className="text-slate-400 text-xs leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Pricing */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-5">Lock Change Prices — London</h2>
              <div className="bg-[#111827] border border-gray-800 rounded-2xl overflow-hidden">
                <div className="grid grid-cols-2 gap-4 px-6 py-3 bg-gray-800/50 text-xs font-semibold text-slate-400 uppercase tracking-wide">
                  <span>Lock Type</span>
                  <span>Price (inc. parts)</span>
                </div>
                {[
                  { type: 'Euro cylinder (standard)', price: 'From £80' },
                  { type: 'Anti-snap euro cylinder', price: 'From £95' },
                  { type: '5-lever mortice (BS 3621)', price: 'From £100' },
                  { type: 'Yale night latch', price: 'From £80' },
                  { type: 'uPVC multipoint lock', price: 'From £130' },
                  { type: 'Smart lock installation', price: 'From £220' },
                  { type: 'Additional cylinder (same visit)', price: 'From £60' },
                ].map(({ type, price }, i, arr) => (
                  <div
                    key={type}
                    className={`grid grid-cols-2 gap-4 px-6 py-4 text-sm ${i < arr.length - 1 ? 'border-b border-gray-800' : ''}`}
                  >
                    <span className="text-white font-medium">{type}</span>
                    <span className="text-orange-400 font-bold">{price}</span>
                  </div>
                ))}
              </div>
              <p className="text-slate-500 text-xs mt-3">
                All prices include labour and standard parts. Fixed quote confirmed before arrival. No call-out fee.
                View our full{' '}
                <Link href="/pricing" className="text-orange-400 hover:text-orange-300">
                  locksmith pricing page →
                </Link>
              </p>
            </div>

            {/* Related services */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-5">Related Locksmith Services</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  { label: 'Lock Replacement', href: '/services/lock-replacement' },
                  { label: 'Lock Repair', href: '/services/lock-repair' },
                  { label: 'Security Upgrades', href: '/services/security-upgrades' },
                  { label: 'Smart Lock Installation', href: '/services/smart-lock-installation' },
                  { label: 'Burglary Repair', href: '/services/burglary-repair' },
                  { label: 'UPVC Door Repair', href: '/services/upvc-door-repair' },
                  { label: 'Emergency Locksmith', href: '/services/emergency-locksmith' },
                  { label: 'House Lockout', href: '/services/house-lockout' },
                ].map(({ label, href }) => (
                  <Link
                    key={href}
                    href={href}
                    className="group flex items-center justify-between p-3 bg-[#111827] border border-gray-800 rounded-xl hover:border-orange-500/40 transition-all text-sm"
                  >
                    <span className="text-slate-300 group-hover:text-orange-400 transition-colors">{label}</span>
                    <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-orange-400 flex-shrink-0" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Locations */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-5">Change Locks — London Areas We Cover</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {locations.map((loc) => (
                  <Link
                    key={loc.slug}
                    href={`/lock-replacement-${loc.slug}`}
                    className="group flex items-center justify-between p-2.5 bg-[#111827] border border-gray-800 rounded-xl hover:border-orange-500/40 transition-all text-xs"
                  >
                    <span className="text-slate-400 group-hover:text-orange-400 transition-colors">
                      Change Locks {loc.name}
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
              <h3 className="text-white font-bold text-lg mb-3">Change Locks Today</h3>
              <p className="text-slate-300 text-sm mb-4">
                Call now for a same-day lock change anywhere in London. Fixed price, no call-out fee.
              </p>
              <Link
                href={BUSINESS.phoneHref}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold"
              >
                <Phone className="w-4 h-4" />
                {BUSINESS.phone}
              </Link>
              <div className="text-xs text-center text-green-400 mt-2">✓ Available now — 30-min response</div>
            </div>

            <div className="bg-[#111827] border border-gray-800 rounded-2xl p-5">
              <h3 className="text-white font-bold mb-3 text-sm">Quick Links</h3>
              <div className="space-y-2">
                {[
                  { label: 'Lock Replacement Service', href: '/services/lock-replacement' },
                  { label: 'Security Upgrades', href: '/services/security-upgrades' },
                  { label: 'Burglary Repair', href: '/services/burglary-repair' },
                  { label: 'Pricing Guide', href: '/pricing' },
                  { label: 'Affordable Locksmith London', href: '/affordable-locksmith-london' },
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
        faqs={faqs}
        title="Change Locks London — FAQs"
        subtitle="Common questions about our lock changing service in London."
        includeSchema={false}
      />

      <CTASection
        title="Change Locks London — Same-Day Service"
        subtitle="Available 24/7 across all London boroughs. Fixed price, no call-out fee, 30-minute response."
      />
    </>
  )
}
