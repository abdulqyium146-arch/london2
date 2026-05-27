import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Phone,
  Clock,
  Shield,
  CheckCircle2,
  ArrowRight,
  Key,
  Home,
  AlertTriangle,
} from 'lucide-react'
import { HeroSection } from '@/components/sections/HeroSection'
import { TrustBadges } from '@/components/sections/TrustBadges'
import { ServicesGrid } from '@/components/sections/ServicesGrid'
import { ReviewsSlider } from '@/components/sections/ReviewsSlider'
import { FAQSection } from '@/components/sections/FAQSection'
import { CTASection } from '@/components/sections/CTASection'
import { CoverageSection } from '@/components/sections/CoverageSection'
import { SchemaMarkup } from '@/components/seo/SchemaMarkup'
import {
  generateServiceSchema,
  generateHomepageBreadcrumbSchema,
  generateOrganizationSchema,
  generateWebsiteSchema,
  generateFAQSchema,
} from '@/lib/seo/schema'
import { BUSINESS } from '@/lib/constants'
import { generalFaqs, emergencyFaqs } from '@/data/faqs'
import { services } from '@/data/services'
import { getRecentPosts } from '@/data/blog-posts'
import { formatDate } from '@/lib/utils'

export const metadata: Metadata = {
  title: "London's #1 Emergency Locksmith | 24/7 | 30-Min Response | No Call-Out Fee",
  description:
    "London's most trusted emergency locksmith. 24/7 service, 30-minute response across all 32 boroughs. No call-out fee. Locked out? Call 020 3900 4444 now.",
  keywords: [
    'emergency locksmith london',
    'locksmith london',
    '24 hour locksmith london',
    'locked out london',
    'locksmith near me london',
    'emergency locksmith near me',
    'london locksmith 24/7',
    'cheap locksmith london',
    'locksmith open now london',
  ],
  openGraph: {
    title: "London's #1 Emergency Locksmith | 24/7 | 30-Min Response",
    description:
      "Emergency locksmith available 24/7 across all London boroughs. 30-minute response, no call-out fee. Call 020 3900 4444.",
    url: 'https://londonlocksmith.co',
    type: 'website',
    siteName: 'London Locksmith',
    locale: 'en_GB',
  },
  alternates: {
    canonical: 'https://londonlocksmith.co',
  },
}

const homepageFaqs = [...emergencyFaqs, ...generalFaqs.slice(0, 5)]

const emergencyServiceSchemas = [
  generateOrganizationSchema(),
  generateWebsiteSchema(),
  generateHomepageBreadcrumbSchema(),
  generateFAQSchema(homepageFaqs),
  ...services
    .filter((s) => s.emergencyService)
    .slice(0, 3)
    .map((s) => generateServiceSchema(s)),
]
const recentPosts = getRecentPosts(3)

export default function HomePage() {
  return (
    <>
      <SchemaMarkup schemas={emergencyServiceSchemas} />

      {/* Hero */}
      <HeroSection />

      {/* Trust Badges */}
      <TrustBadges />

      {/* Emergency Process Section */}
      <section className="py-16 px-4" aria-label="How our locksmith service works">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-orange-400 text-sm font-semibold uppercase tracking-widest mb-3">
              How It Works
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Locked Out to Back In — In Under an Hour
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Our streamlined emergency response process gets you back inside fast, with minimum
              disruption and maximum peace of mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'Call Us',
                description:
                  'Call 020 3900 4444 — we answer within 3 rings, 24/7. Tell us your location and the issue.',
                icon: Phone,
                time: '< 1 min',
                color: 'from-orange-500/20 to-orange-600/10',
                border: 'border-orange-500/20',
                icon_color: 'text-orange-400',
              },
              {
                step: '02',
                title: 'Fixed Quote',
                description:
                  'We provide a transparent, fixed price before we arrive — no surprises, no hidden charges.',
                icon: CheckCircle2,
                time: '2 mins',
                color: 'from-blue-500/20 to-blue-600/10',
                border: 'border-blue-500/20',
                icon_color: 'text-blue-400',
              },
              {
                step: '03',
                title: 'We Arrive Fast',
                description:
                  'Nearest local locksmith dispatched immediately. Average 30-minute arrival across London.',
                icon: Clock,
                time: '< 30 mins',
                color: 'from-green-500/20 to-green-600/10',
                border: 'border-green-500/20',
                icon_color: 'text-green-400',
              },
              {
                step: '04',
                title: 'Problem Solved',
                description:
                  'Non-destructive entry in 95%+ of cases. Back inside, lock secured, issue resolved.',
                icon: Key,
                time: '15-45 mins',
                color: 'from-purple-500/20 to-purple-600/10',
                border: 'border-purple-500/20',
                icon_color: 'text-purple-400',
              },
            ].map(({ step, title, description, icon: Icon, time, color, border, icon_color }) => (
              <div
                key={step}
                className={`relative rounded-2xl p-6 bg-gradient-to-br ${color} border ${border}`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                    <Icon className={`w-6 h-6 ${icon_color}`} />
                  </div>
                  <span className="text-3xl font-black text-white/10">{step}</span>
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-3">{description}</p>
                <span
                  className={`text-xs font-semibold px-2.5 py-1 rounded-full bg-white/5 ${icon_color}`}
                >
                  {time}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <ServicesGrid
        title="Complete Locksmith Services London"
        subtitle="From emergency lockouts to commercial security — we handle every lock and security need across London."
      />

      {/* Emergency CTA */}
      <CTASection variant="emergency" />

      {/* Local Authority Section */}
      <section className="py-16 px-4 bg-[#060E1A]/50" aria-label="About London Locksmith Pro">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-orange-400 text-sm font-semibold uppercase tracking-widest mb-3">
                About Us
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                London&apos;s Most Trusted Locksmith Since 2009
              </h2>
              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p>
                  <strong className="text-white">London Locksmith Pro</strong> has been serving London
                  residents and businesses for over 15 years. Founded in East London, we&apos;ve grown
                  to cover all 32 boroughs with a team of highly trained, fully insured locksmiths.
                </p>
                <p>
                  We built our reputation on three principles: <strong className="text-white">speed</strong>{' '}
                  (30-minute average response), <strong className="text-white">transparency</strong>{' '}
                  (upfront pricing, no hidden charges), and{' '}
                  <strong className="text-white">quality</strong> (non-destructive techniques, premium
                  locks, lasting results).
                </p>
                <p>
                  Every member of our team is <strong className="text-white">DBS checked</strong>,
                  carries <strong className="text-white">£5 million public liability insurance</strong>,
                  and holds professional locksmith qualifications. We are proud members of the{' '}
                  <strong className="text-white">Master Locksmiths Association</strong> and approved by
                  Trading Standards.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-8">
                {[
                  { value: '15+', label: 'Years Experience' },
                  { value: '50,000+', label: 'Jobs Completed' },
                  { value: '847', label: 'Google Reviews' },
                  { value: '4.9★', label: 'Average Rating' },
                ].map(({ value, label }) => (
                  <div
                    key={label}
                    className="bg-[#111827] border border-gray-800 rounded-xl p-4 text-center"
                  >
                    <div className="text-2xl font-bold text-orange-400">{value}</div>
                    <div className="text-xs text-slate-400 mt-1">{label}</div>
                  </div>
                ))}
              </div>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 mt-8 text-orange-400 hover:text-orange-300 font-semibold transition-colors"
              >
                Read Our Full Story
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="space-y-4">
              {/* Why choose us */}
              <div className="bg-[#111827] border border-gray-800 rounded-2xl p-6">
                <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-orange-400" />
                  Why Choose London Locksmith Pro?
                </h3>
                <ul className="space-y-3">
                  {[
                    'No call-out fee — ever',
                    'Fixed price agreed before we arrive',
                    'Non-destructive entry in 95%+ of cases',
                    'All work fully guaranteed',
                    'Same-day service for most non-emergencies',
                    'We work with all major insurance companies',
                    'Local locksmiths — no distant call centres',
                    '24/7 — including Christmas and bank holidays',
                  ].map((point) => (
                    <li key={point} className="flex items-start gap-3 text-slate-300 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Emergency warning */}
              <div className="bg-red-900/20 border border-red-800/30 rounded-2xl p-5">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-white font-semibold text-sm mb-1">Locked Out Right Now?</h4>
                    <p className="text-slate-400 text-sm mb-3">
                      Don&apos;t wait. Call us now and we&apos;ll have someone with you in 30 minutes.
                    </p>
                    <Link
                      href={BUSINESS.phoneHref}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold text-sm"
                    >
                      <Phone className="w-4 h-4" />
                      {BUSINESS.phone}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <ReviewsSlider title="What Our London Customers Say" />

      {/* Coverage Map */}
      <CoverageSection />

      {/* FAQ */}
      <FAQSection
        faqs={homepageFaqs}
        title="Common Questions About London Locksmith Services"
        subtitle="Everything you need to know about our locksmith service in London."
      />

      {/* Blog Preview */}
      {recentPosts.length > 0 && (
        <section className="py-16 px-4 bg-[#060E1A]/50">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
              <div>
                <p className="text-orange-400 text-sm font-semibold uppercase tracking-widest mb-3">
                  Security Guides
                </p>
                <h2 className="text-3xl font-bold text-white">Locksmith Tips & Security Guides</h2>
              </div>
              <Link
                href="/blog"
                className="text-orange-400 hover:text-orange-300 font-semibold flex items-center gap-2 transition-colors"
              >
                All Articles <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {recentPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group bg-[#111827] border border-gray-800 rounded-2xl overflow-hidden hover:border-orange-500/30 transition-all duration-300"
                >
                  <div className="aspect-[16/9] bg-gradient-to-br from-brand-navy to-[#0A1628] flex items-center justify-center">
                    <Home className="w-12 h-12 text-slate-700" />
                  </div>
                  <div className="p-5">
                    <span className="text-xs text-orange-400 font-semibold uppercase tracking-wide">
                      {post.category}
                    </span>
                    <h3 className="text-white font-bold mt-2 mb-3 group-hover:text-orange-400 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-slate-400 text-sm line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center justify-between mt-4 text-xs text-slate-500">
                      <span>{formatDate(post.publishDate)}</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Final CTA */}
      <CTASection />
    </>
  )
}
