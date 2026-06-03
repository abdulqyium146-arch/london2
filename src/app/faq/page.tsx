import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight, Wrench, MapPin } from 'lucide-react'
import { Breadcrumbs } from '@/components/seo/Breadcrumbs'
import { FAQSection } from '@/components/sections/FAQSection'
import { CTASection } from '@/components/sections/CTASection'
import { SchemaMarkup } from '@/components/seo/SchemaMarkup'
import { generateFAQSchema, generateWebPageSchema, generateBreadcrumbSchema } from '@/lib/seo/schema'
import { SEO } from '@/lib/constants'
import { services } from '@/data/services'
import { locations } from '@/data/locations'
import { generalFaqs, emergencyFaqs, pricingFaqs } from '@/data/faqs'

export const metadata: Metadata = {
  title: 'Locksmith FAQ London | Common Questions Answered | 24/7',
  description:
    'Answers to common locksmith questions in London. Pricing, response times, what to expect, and more. London Locksmith Pro — 24/7 emergency service.',
  keywords: ['locksmith faq', 'locksmith questions london', 'locksmith prices london faq'],
  alternates: { canonical: `${SEO.siteUrl}/faq` },
}

const allFaqs = [...emergencyFaqs, ...generalFaqs, ...pricingFaqs]

export default function FAQPage() {
  return (
    <>
      <SchemaMarkup schemas={[
        generateFAQSchema(allFaqs),
        generateWebPageSchema(
          'Locksmith FAQ London | Common Questions Answered | 24/7',
          'Answers to common locksmith questions in London.',
          `${SEO.siteUrl}/faq`
        ),
        generateBreadcrumbSchema([
          { name: 'Home', href: '/' },
          { name: 'FAQ', href: '/faq' },
        ]),
      ]} />

      <section className="relative py-20 px-4 bg-hero-gradient overflow-hidden">
        <div className="absolute inset-0 bg-glow-orange opacity-30" />
        <div className="relative max-w-7xl mx-auto">
          <Breadcrumbs items={[{ name: 'FAQ', href: '/faq' }]} className="mb-8" />
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-orange-400 text-sm font-semibold uppercase tracking-widest mb-4">
              Frequently Asked Questions
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Locksmith FAQ London
            </h1>
            <p className="text-lg text-slate-300">
              Everything you need to know about our locksmith services. Pricing, response times,
              what to expect, and how to stay safe.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4">
        {/* Quick links to services */}
        <div className="py-8 pb-4">
          <div className="flex items-center gap-2 mb-4">
            <Wrench className="w-4 h-4 text-orange-400" />
            <h2 className="text-lg font-bold text-white">Jump to a Service</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {services.map((svc) => (
              <Link
                key={svc.slug}
                href={`/services/${svc.slug}`}
                className="text-xs px-3 py-1.5 rounded-full bg-gray-800 border border-gray-700 text-slate-400 hover:text-orange-400 hover:border-orange-500/40 transition-all"
              >
                {svc.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="py-4">
          <h2 className="text-2xl font-bold text-white mb-4">Emergency Questions</h2>
        </div>
        <FAQSection faqs={emergencyFaqs} includeSchema={false} title="" />

        <div className="py-4">
          <h2 className="text-2xl font-bold text-white mb-4">General Questions</h2>
        </div>
        <FAQSection faqs={generalFaqs} includeSchema={false} title="" />

        <div className="py-4">
          <h2 className="text-2xl font-bold text-white mb-4">Pricing Questions</h2>
        </div>
        <FAQSection faqs={pricingFaqs} includeSchema={false} title="" />

        {/* Location links */}
        <div className="py-8">
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="w-4 h-4 text-orange-400" />
            <h2 className="text-lg font-bold text-white">Find a Locksmith in Your Area</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {locations.map((loc) => (
              <Link
                key={loc.slug}
                href={`/locations/${loc.slug}`}
                className="group flex items-center justify-between p-2.5 bg-[#111827] border border-gray-800 rounded-lg hover:border-orange-500/40 transition-all"
              >
                <span className="text-slate-400 group-hover:text-orange-400 transition-colors text-xs">
                  Locksmith {loc.name}
                </span>
                <ChevronRight className="w-3 h-3 text-slate-600 group-hover:text-orange-400 flex-shrink-0" />
              </Link>
            ))}
          </div>
        </div>
      </div>

      <CTASection variant="minimal" title="Still Have Questions? Call Us Now" subtitle="Our team is available 24/7 to answer any questions about our locksmith services." />
    </>
  )
}
