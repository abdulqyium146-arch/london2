'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { SingleSchema } from '@/components/seo/SchemaMarkup'
import { generateFAQSchema } from '@/lib/seo/schema'
import type { FAQ } from '@/types'
import { cn } from '@/lib/utils'

interface FAQSectionProps {
  faqs: FAQ[]
  title?: string
  subtitle?: string
  includeSchema?: boolean
}

export function FAQSection({
  faqs,
  title = 'Frequently Asked Questions',
  subtitle,
  includeSchema = true,
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-16 px-4" aria-label="Frequently asked questions">
      {includeSchema && <SingleSchema schema={generateFAQSchema(faqs)} id="faq-schema" />}

      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-orange-400 text-sm font-semibold uppercase tracking-widest mb-3">
            FAQs
          </p>
          <h2 className="text-3xl font-bold text-white mb-4">{title}</h2>
          {subtitle && <p className="text-slate-400">{subtitle}</p>}
        </div>

        <div className="space-y-3" itemScope itemType="https://schema.org/FAQPage">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-800 rounded-2xl overflow-hidden"
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              <button
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-[#111827] hover:bg-[#1a2332] transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
              >
                <span
                  className="font-semibold text-white text-sm md:text-base"
                  itemProp="name"
                >
                  {faq.question}
                </span>
                <div
                  className={cn(
                    'w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-200',
                    openIndex === index
                      ? 'bg-orange-500/20 text-orange-400'
                      : 'bg-gray-800 text-slate-400'
                  )}
                >
                  {openIndex === index ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </div>
              </button>

              {openIndex === index && (
                <div
                  className="px-6 pb-5 bg-[#111827] border-t border-gray-800/50"
                  itemScope
                  itemProp="acceptedAnswer"
                  itemType="https://schema.org/Answer"
                >
                  <p
                    className="text-slate-300 text-sm md:text-base leading-relaxed pt-4"
                    itemProp="text"
                  >
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
