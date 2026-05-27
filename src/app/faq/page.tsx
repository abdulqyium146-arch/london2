import type { Metadata } from 'next'
import { Breadcrumbs } from '@/components/seo/Breadcrumbs'
import { FAQSection } from '@/components/sections/FAQSection'
import { CTASection } from '@/components/sections/CTASection'
import { SchemaMarkup } from '@/components/seo/SchemaMarkup'
import { generateFAQSchema } from '@/lib/seo/schema'
import { generalFaqs, emergencyFaqs, pricingFaqs } from '@/data/faqs'

export const metadata: Metadata = {
  title: 'Locksmith FAQ London | Common Questions Answered | 24/7',
  description:
    'Answers to common locksmith questions in London. Pricing, response times, what to expect, and more. London Locksmith Pro — 24/7 emergency service.',
  keywords: ['locksmith faq', 'locksmith questions london', 'locksmith prices london faq'],
  alternates: { canonical: 'https://londonlocksmithpro.co.uk/faq' },
}

const allFaqs = [...emergencyFaqs, ...generalFaqs, ...pricingFaqs]

export default function FAQPage() {
  return (
    <>
      <SchemaMarkup schemas={[generateFAQSchema(allFaqs)]} />

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
        <div className="py-8">
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
      </div>

      <CTASection variant="minimal" title="Still Have Questions? Call Us Now" subtitle="Our team is available 24/7 to answer any questions about our locksmith services." />
    </>
  )
}
