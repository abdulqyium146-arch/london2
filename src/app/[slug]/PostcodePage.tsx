import Link from 'next/link'
import { Phone, MapPin, Clock, CheckCircle2, ChevronRight, Shield, Star } from 'lucide-react'
import { Breadcrumbs } from '@/components/seo/Breadcrumbs'
import { FAQSection } from '@/components/sections/FAQSection'
import { CTASection } from '@/components/sections/CTASection'
import { SchemaMarkup } from '@/components/seo/SchemaMarkup'
import { generatePostcodeSchema, generateFAQSchema } from '@/lib/seo/schema'
import { BUSINESS } from '@/lib/constants'
import { services } from '@/data/services'
import { generalFaqs } from '@/data/faqs'
import type { PostcodeArea, FAQ } from '@/types'

interface PostcodePageProps {
  postcode: PostcodeArea
  slug: string
}

export function PostcodePage({ postcode, slug }: PostcodePageProps) {
  const postcodeFaqs: FAQ[] = [
    {
      question: `Is there a locksmith available in ${postcode.code} right now?`,
      answer: `Yes. London Locksmith Pro operates 24/7 across ${postcode.code} (${postcode.area}) and all surrounding London postcodes. We have locksmiths stationed across ${postcode.borough} for rapid response. Call ${BUSINESS.phone} now for immediate assistance.`,
    },
    {
      question: `How quickly can a locksmith reach ${postcode.code}?`,
      answer: `Our locksmiths serving ${postcode.code} (${postcode.area}) typically arrive within ${postcode.responseTime}. We dispatch the nearest available locksmith immediately upon your call.`,
    },
    {
      question: `What locksmith services are available in ${postcode.code}?`,
      answer: `We provide all locksmith services in ${postcode.code}: emergency lockouts, lock repair and replacement, UPVC door repair, burglary repair, car locksmith, smart lock installation, key cutting, and security upgrades. All services available 24/7.`,
    },
    ...generalFaqs.slice(0, 3),
  ]

  const emergencyServices = services.filter((s) => s.emergencyService).slice(0, 6)
  const schemas = [
    generatePostcodeSchema(postcode),
    generateFAQSchema(postcodeFaqs.slice(0, 5)),
  ]

  const breadcrumbs = [
    { name: 'Locations', href: '/locations' },
    { name: postcode.area, href: `/locations/${postcode.locationSlug}` },
    { name: postcode.code, href: `/${slug}` },
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
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-400 text-sm font-bold mb-5 font-mono">
                {postcode.code} · {postcode.area}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Locksmith {postcode.code} | {postcode.area} | 24/7 Emergency
              </h1>
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                Local locksmith serving {postcode.code} ({postcode.area},{' '}
                {postcode.borough}). {postcode.responseTime} response time, available
                24/7. No call-out fee, fully insured.
              </p>

              <div className="grid grid-cols-3 gap-3 mb-8">
                <div className="bg-white/5 border border-white/10 rounded-xl p-3 text-center">
                  <Clock className="w-5 h-5 text-orange-400 mx-auto mb-1" />
                  <div className="text-white font-bold text-sm">{postcode.responseTime}</div>
                  <div className="text-slate-500 text-xs">Response</div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-3 text-center">
                  <Star className="w-5 h-5 text-amber-400 mx-auto mb-1" />
                  <div className="text-white font-bold text-sm">4.9★</div>
                  <div className="text-slate-500 text-xs">Rated</div>
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
                {postcode.code} Coverage Details
              </h2>
              <div className="space-y-3 text-sm">
                {[
                  { label: 'Postcode', value: postcode.code },
                  { label: 'Area', value: postcode.area },
                  { label: 'Borough', value: postcode.borough },
                  { label: 'Response Time', value: postcode.responseTime },
                  { label: 'Hours', value: '24/7 — 365 days' },
                  { label: 'Call-Out Fee', value: '£0 — None' },
                ].map(({ label, value }) => (
                  <div key={label} className="flex justify-between border-b border-white/5 pb-2">
                    <span className="text-slate-400">{label}</span>
                    <span className="text-white font-medium">{value}</span>
                  </div>
                ))}
              </div>
              {postcode.landmarks.length > 0 && (
                <div className="mt-4">
                  <p className="text-slate-500 text-xs mb-2">Landmarks in {postcode.code}:</p>
                  <div className="flex flex-wrap gap-1">
                    {postcode.landmarks.map((landmark) => (
                      <span key={landmark} className="text-xs px-2 py-0.5 rounded bg-gray-800 text-slate-400">
                        {landmark}
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
            Locksmith Services in {postcode.code} ({postcode.area})
          </h2>
          <p className="text-slate-300 mb-8 max-w-2xl">
            {postcode.description} Our locksmiths cover every street and property in the{' '}
            {postcode.code} postcode area, providing fast, professional locksmith services
            around the clock.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {emergencyServices.map((service) => (
              <Link
                key={service.slug}
                href={`/${service.slug}-${postcode.locationSlug}`}
                className="group flex items-center justify-between p-4 bg-[#111827] border border-gray-800 rounded-xl hover:border-orange-500/40 transition-all"
              >
                <div>
                  <div className="text-white font-semibold text-sm group-hover:text-orange-400 transition-colors">
                    {service.name} — {postcode.code}
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5">From £{service.priceFrom} · 24/7</div>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-orange-400 transition-colors" />
              </Link>
            ))}
          </div>

          {/* Local context */}
          <div className="bg-[#111827] border border-gray-800 rounded-2xl p-6 mb-8">
            <h3 className="text-white font-bold text-lg mb-4">
              Why Choose Us for {postcode.code}?
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                `Local locksmiths based in ${postcode.district}`,
                `${postcode.responseTime} guaranteed response to ${postcode.code}`,
                `Familiar with ${postcode.borough} property types`,
                'No call-out fee',
                'Fully insured and DBS checked',
                '24/7 emergency availability',
              ].map((point) => (
                <div key={point} className="flex items-center gap-2 text-slate-300 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />
                  {point}
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <p className="text-slate-400 mb-4">
              Also serving nearby postcodes:
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {['E10', 'E11', 'E15', 'E6', 'E7', 'N9', 'N15', 'N17', 'IG1', 'IG11'].map((code) => (
                code !== postcode.code && (
                  <Link
                    key={code}
                    href={`/locksmith-${code.toLowerCase()}`}
                    className="px-3 py-1.5 rounded-lg bg-gray-800 border border-gray-700 text-sm text-slate-400 hover:text-orange-400 hover:border-orange-500/40 transition-all"
                  >
                    {code}
                  </Link>
                )
              ))}
            </div>
          </div>
        </section>
      </div>

      <FAQSection
        faqs={postcodeFaqs}
        title={`Locksmith ${postcode.code} FAQs`}
        subtitle={`Common questions about locksmith services in ${postcode.code} ${postcode.area}.`}
      />

      <CTASection
        title={`Emergency Locksmith ${postcode.code} — Available Now`}
        subtitle={`${postcode.responseTime} response to any address in ${postcode.code} ${postcode.area}. Call now.`}
      />
    </>
  )
}
