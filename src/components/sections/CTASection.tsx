import Link from 'next/link'
import { Phone, MessageCircle, Clock, CheckCircle2 } from 'lucide-react'
import { BUSINESS } from '@/lib/constants'

interface CTASectionProps {
  title?: string
  subtitle?: string
  variant?: 'default' | 'emergency' | 'minimal'
}

export function CTASection({
  title = "Locked Out? Emergency? We're 30 Minutes Away",
  subtitle = "Call now for immediate response. No call-out fee. Fully insured. Available 24/7 across all London boroughs.",
  variant = 'default',
}: CTASectionProps) {
  if (variant === 'minimal') {
    return (
      <section className="py-10 px-4">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 bg-gradient-to-r from-orange-600/20 to-red-600/20 border border-orange-500/30 rounded-3xl p-8">
          <div>
            <h3 className="text-xl font-bold text-white">{title}</h3>
            <p className="text-slate-400 text-sm mt-1">{subtitle}</p>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <Link
              href={BUSINESS.phoneHref}
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold shadow-orange-glow hover:scale-105 transition-all duration-200"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </Link>
          </div>
        </div>
      </section>
    )
  }

  if (variant === 'emergency') {
    return (
      <section className="py-16 px-4 bg-gradient-to-br from-red-900/30 to-orange-900/20 border-y border-red-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
            <span className="text-red-400 font-semibold text-sm uppercase tracking-wide">Emergency Service Active</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{title}</h2>
          <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">{subtitle}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={BUSINESS.phoneHref}
              className="flex items-center gap-3 px-10 py-5 rounded-2xl bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold text-xl shadow-orange-glow-lg hover:scale-105 transition-all duration-300 w-full sm:w-auto justify-center"
            >
              <Phone className="w-6 h-6" />
              {BUSINESS.phone}
            </Link>
            <Link
              href={BUSINESS.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-5 rounded-2xl bg-green-600 hover:bg-green-500 text-white font-bold text-xl transition-all duration-200 w-full sm:w-auto justify-center"
            >
              <MessageCircle className="w-6 h-6" />
              WhatsApp Us
            </Link>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-600/10 to-red-900/10" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-400 text-sm font-semibold mb-6">
          <Clock className="w-4 h-4" />
          <span>Available Right Now — 30-Minute Response</span>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{title}</h2>
        <p className="text-lg text-slate-300 mb-4 max-w-2xl mx-auto">{subtitle}</p>

        {/* Trust Points */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
          {[
            'No Call-Out Fee',
            'Fully Insured',
            'DBS Checked',
            'Non-Destructive Entry',
            'All 32 Boroughs',
          ].map((point) => (
            <div key={point} className="flex items-center gap-2 text-sm text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-green-400" />
              <span>{point}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={BUSINESS.phoneHref}
            className="flex items-center gap-3 px-10 py-5 rounded-2xl bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold text-xl shadow-orange-glow-lg hover:scale-105 transition-all duration-300 w-full sm:w-auto justify-center"
            aria-label={`Call emergency locksmith at ${BUSINESS.phone}`}
          >
            <Phone className="w-6 h-6" />
            <div className="text-left">
              <div className="text-xs font-normal opacity-80">Emergency Line — 24/7</div>
              <div>{BUSINESS.phone}</div>
            </div>
          </Link>
          <Link
            href={BUSINESS.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-5 rounded-2xl bg-green-600 hover:bg-green-500 text-white font-bold text-xl transition-all duration-200 w-full sm:w-auto justify-center"
            aria-label="Contact via WhatsApp"
          >
            <MessageCircle className="w-6 h-6" />
            WhatsApp Us
          </Link>
        </div>

        <p className="text-slate-500 text-sm mt-6">
          We typically respond to messages within 2 minutes during emergencies
        </p>
      </div>
    </section>
  )
}
