import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, Mail, MapPin, Clock, MessageCircle, CheckCircle2 } from 'lucide-react'
import { Breadcrumbs } from '@/components/seo/Breadcrumbs'
import { BUSINESS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Contact London Locksmith Pro | 24/7 Emergency | 020 3900 4444',
  description:
    'Contact London Locksmith Pro for emergency locksmith services. Call 020 3900 4444, WhatsApp, or email. Available 24/7 across all London boroughs.',
  keywords: ['contact locksmith london', 'locksmith phone number london', 'emergency locksmith contact'],
  alternates: { canonical: 'https://londonlocksmithpro.co.uk/contact' },
}

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-20 px-4 bg-hero-gradient overflow-hidden">
        <div className="absolute inset-0 bg-glow-orange opacity-30" />
        <div className="relative max-w-7xl mx-auto">
          <Breadcrumbs items={[{ name: 'Contact', href: '/contact' }]} className="mb-8" />
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-orange-400 text-sm font-semibold uppercase tracking-widest mb-4">
              Get In Touch
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Contact London Locksmith Pro
            </h1>
            <p className="text-lg text-slate-300">
              For emergencies, call or WhatsApp us immediately — we respond within minutes.
              For non-urgent enquiries, email us and we&apos;ll respond within 24 hours.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Emergency Contact - Full Width First */}
        <div className="bg-gradient-to-br from-red-600/20 to-orange-600/20 border border-red-500/30 rounded-3xl p-8 md:p-12 text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
            <span className="text-red-400 font-semibold uppercase tracking-wide text-sm">Emergency Line — Open Now</span>
          </div>
          <h2 className="text-3xl font-bold text-white mb-3">Locked Out? Emergency?</h2>
          <p className="text-slate-300 mb-6">Don&apos;t fill in a form — call us right now. We answer in 3 rings, 24/7.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={BUSINESS.phoneHref}
              className="flex items-center gap-3 px-10 py-4 rounded-2xl bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold text-2xl shadow-orange-glow hover:scale-105 transition-all"
            >
              <Phone className="w-6 h-6" />
              {BUSINESS.phone}
            </Link>
            <Link
              href={BUSINESS.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-green-600 text-white font-bold text-xl hover:bg-green-500 transition-all"
            >
              <MessageCircle className="w-6 h-6" />
              WhatsApp
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Details */}
          <div className="space-y-5">
            <h2 className="text-2xl font-bold text-white">Contact Information</h2>

            {[
              {
                icon: Phone,
                title: 'Emergency Phone',
                value: BUSINESS.phone,
                href: BUSINESS.phoneHref,
                sublabel: 'Available 24/7 — answered in 3 rings',
                color: 'text-orange-400',
              },
              {
                icon: MessageCircle,
                title: 'WhatsApp',
                value: 'Message Us on WhatsApp',
                href: BUSINESS.whatsappHref,
                sublabel: 'Usually responded to within 2 minutes',
                color: 'text-green-400',
              },
              {
                icon: Mail,
                title: 'Email',
                value: BUSINESS.email,
                href: BUSINESS.emailHref,
                sublabel: 'Response within 24 hours (not for emergencies)',
                color: 'text-blue-400',
              },
              {
                icon: MapPin,
                title: 'Address',
                value: BUSINESS.address.full,
                href: `https://maps.google.com/?q=${encodeURIComponent(BUSINESS.address.full)}`,
                sublabel: 'Serving all of Greater London',
                color: 'text-purple-400',
              },
            ].map(({ icon: Icon, title, value, href, sublabel, color }) => (
              <Link
                key={title}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex items-start gap-4 p-5 bg-[#111827] border border-gray-800 rounded-2xl hover:border-orange-500/30 transition-all group"
              >
                <div className={`w-12 h-12 rounded-xl bg-gray-800 flex items-center justify-center flex-shrink-0 ${color}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-slate-400 text-xs font-medium mb-0.5">{title}</div>
                  <div className="text-white font-semibold group-hover:text-orange-400 transition-colors">
                    {value}
                  </div>
                  <div className="text-slate-500 text-xs mt-0.5">{sublabel}</div>
                </div>
              </Link>
            ))}
          </div>

          {/* Hours & Info */}
          <div className="space-y-5">
            <div className="bg-[#111827] border border-gray-800 rounded-2xl p-6">
              <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-orange-400" />
                Opening Hours
              </h3>
              <div className="space-y-2">
                {[
                  { day: 'Monday – Friday', hours: 'Open 24 Hours' },
                  { day: 'Saturday', hours: 'Open 24 Hours' },
                  { day: 'Sunday', hours: 'Open 24 Hours' },
                  { day: 'Bank Holidays', hours: 'Open 24 Hours' },
                  { day: 'Christmas Day', hours: 'Open 24 Hours' },
                ].map(({ day, hours }) => (
                  <div key={day} className="flex justify-between text-sm py-2 border-b border-gray-800 last:border-0">
                    <span className="text-slate-400">{day}</span>
                    <span className="text-green-400 font-medium">{hours}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#111827] border border-gray-800 rounded-2xl p-6">
              <h3 className="text-white font-bold text-lg mb-4">What to Expect</h3>
              <ul className="space-y-3">
                {[
                  'We answer your call within 3 rings',
                  'Fixed price quote given over the phone',
                  'Nearest locksmith dispatched immediately',
                  '30-minute average arrival time',
                  'Job completed, receipt provided',
                  'Follow-up available if needed',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-slate-300 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
