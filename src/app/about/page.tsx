import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, Shield, Award, Users, CheckCircle2, Star, Clock } from 'lucide-react'
import { Breadcrumbs } from '@/components/seo/Breadcrumbs'
import { CTASection } from '@/components/sections/CTASection'
import { ReviewsSlider } from '@/components/sections/ReviewsSlider'
import { BUSINESS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'About London Locksmith Pro | 15+ Years | Trusted London Locksmiths',
  description:
    'About London Locksmith Pro. 15+ years serving London, 50,000+ jobs completed, 4.9★ rated. DBS checked, fully insured, Master Locksmiths Association members.',
  keywords: ['about london locksmith pro', 'trusted locksmith london', 'experienced locksmith london'],
  alternates: { canonical: 'https://londonlocksmithpro.co.uk/about' },
}

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-20 px-4 bg-hero-gradient overflow-hidden">
        <div className="absolute inset-0 bg-glow-orange opacity-30" />
        <div className="relative max-w-7xl mx-auto">
          <Breadcrumbs items={[{ name: 'About', href: '/about' }]} className="mb-8" />
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-orange-400 text-sm font-semibold uppercase tracking-widest mb-4">
                Established 2009
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                London&apos;s Most Trusted Locksmith Since 2009
              </h1>
              <p className="text-lg text-slate-300 leading-relaxed mb-8">
                For over 15 years, London Locksmith Pro has been the trusted choice for thousands
                of London residents and businesses. Built on honesty, speed, and craftsmanship.
              </p>
              <Link
                href={BUSINESS.phoneHref}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold text-lg shadow-orange-glow hover:scale-105 transition-all"
              >
                <Phone className="w-5 h-5" />
                {BUSINESS.phone}
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '15+', label: 'Years of Experience', icon: Clock, color: 'text-orange-400' },
                { value: '50,000+', label: 'Jobs Completed', icon: CheckCircle2, color: 'text-green-400' },
                { value: '4.9★', label: 'Google Rating', icon: Star, color: 'text-amber-400' },
                { value: '32', label: 'Boroughs Covered', icon: Shield, color: 'text-blue-400' },
              ].map(({ value, label, icon: Icon, color }) => (
                <div
                  key={label}
                  className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center"
                >
                  <Icon className={`w-6 h-6 ${color} mx-auto mb-2`} />
                  <div className={`text-2xl font-bold ${color} mb-1`}>{value}</div>
                  <div className="text-slate-400 text-xs">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Story */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>
                London Locksmith Pro was founded in East London in 2009 by a team of qualified
                locksmiths frustrated by the poor standards and lack of transparency they saw in the
                industry. Too many customers were being misled by vague quotes, unexpected charges,
                and poor workmanship.
              </p>
              <p>
                We set out to be different: completely transparent pricing, professional
                qualifications, and a genuine commitment to solving problems without causing further
                damage. From our East London base, we&apos;ve grown to cover all 32 London boroughs
                with a network of trusted, local locksmiths.
              </p>
              <p>
                Over 15 years and 50,000 jobs later, those founding principles remain unchanged.
                Every locksmith in our team is DBS checked, fully insured, and trained to the highest
                standards. Every customer gets a fixed quote before we start — no surprises, no hidden
                charges.
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Our Values</h2>
            <div className="space-y-4">
              {[
                {
                  title: 'Transparency',
                  description: 'Fixed prices before we arrive. No surprises. No hidden charges. You know the total cost before we start.',
                  icon: CheckCircle2,
                  color: 'text-green-400',
                },
                {
                  title: 'Speed',
                  description: '30-minute average response across London. We know that when you need a locksmith, you need one fast.',
                  icon: Clock,
                  color: 'text-orange-400',
                },
                {
                  title: 'Quality',
                  description: 'Non-destructive techniques in 95%+ of cases. Premium locks. Guaranteed work. We do it right first time.',
                  icon: Award,
                  color: 'text-amber-400',
                },
                {
                  title: 'Trust',
                  description: 'Every locksmith is DBS checked, fully insured, and professionally qualified. Your security is in safe hands.',
                  icon: Shield,
                  color: 'text-blue-400',
                },
              ].map(({ title, description, icon: Icon, color }) => (
                <div key={title} className="flex gap-4 p-4 bg-[#111827] border border-gray-800 rounded-xl">
                  <Icon className={`w-6 h-6 ${color} flex-shrink-0 mt-0.5`} />
                  <div>
                    <h3 className="text-white font-semibold mb-1">{title}</h3>
                    <p className="text-slate-400 text-sm">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="bg-[#111827] border border-gray-800 rounded-3xl p-8 mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Award className="w-6 h-6 text-amber-400" />
            <h2 className="text-2xl font-bold text-white">Certifications & Accreditations</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: 'DBS Checked', description: 'All locksmiths hold enhanced DBS checks' },
              { title: 'Fully Insured', description: '£5 million public liability insurance' },
              { title: 'Master Locksmiths Association', description: 'Full MLA membership' },
              { title: 'CHAS Accredited', description: 'Contractor Health & Safety Scheme' },
              { title: 'Trading Standards Approved', description: 'Buy With Confidence scheme' },
              { title: 'Which? Trusted Trader', description: 'Verified by Which? UK' },
            ].map(({ title, description }) => (
              <div key={title} className="flex items-start gap-3 p-4 bg-gray-800/30 rounded-xl">
                <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="w-3 h-3 text-green-400" />
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{title}</div>
                  <div className="text-slate-400 text-xs mt-0.5">{description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <Users className="w-5 h-5 text-orange-400" />
            <h2 className="text-2xl font-bold text-white">Our London-Wide Team</h2>
          </div>
          <p className="text-slate-400 max-w-2xl mx-auto">
            We have locksmiths stationed across East, North, South, and West London. Local
            knowledge means faster response and better service for you.
          </p>
        </div>
      </div>

      <ReviewsSlider title="What Londoners Say About Us" />
      <CTASection />
    </>
  )
}
