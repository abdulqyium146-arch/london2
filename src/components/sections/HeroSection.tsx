'use client'

import Link from 'next/link'
import {
  Phone,
  Clock,
  Shield,
  Star,
  MessageCircle,
  MapPin,
  CheckCircle2,
  AlertTriangle,
} from 'lucide-react'
import { BUSINESS } from '@/lib/constants'

interface HeroSectionProps {
  title?: string
  subtitle?: string
  location?: string
  service?: string
  showSearch?: boolean
}

export function HeroSection({
  title = "London's Emergency Locksmith — 30-Minute Response",
  subtitle = "Locked out? Broken lock? Security emergency? Our expert locksmiths are standing by 24/7 across all London boroughs. No call-out fee. Fully insured.",
  location,
  service,
  showSearch = false,
}: HeroSectionProps) {
  return (
    <section
      className="relative min-h-[90vh] flex items-center overflow-hidden"
      aria-label="Emergency locksmith hero section"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="absolute inset-0 bg-glow-orange opacity-50" />

      {/* Animated grid */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            'linear-gradient(rgba(249,115,22,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,0.3) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Decorative orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Emergency Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/20 border border-red-500/30 text-red-400 text-sm font-semibold mb-6 animate-pulse">
              <AlertTriangle className="w-4 h-4" />
              <span>Emergency Service — We&apos;re Available Right Now</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              {title.split('—').map((part, i) => (
                i === 0 ? (
                  <span key={i}>
                    {part}
                    {i < title.split('—').length - 1 && (
                      <>
                        {' '}—{' '}
                        <span className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
                          {title.split('—')[1]}
                        </span>
                      </>
                    )}
                  </span>
                ) : null
              ))}
            </h1>

            {location && (
              <div className="flex items-center gap-2 mb-4 justify-center lg:justify-start">
                <MapPin className="w-4 h-4 text-orange-400" />
                <span className="text-orange-400 font-semibold">
                  Serving {location} & Surrounding Areas
                </span>
              </div>
            )}

            <p className="text-lg text-slate-300 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              {subtitle}
            </p>

            {/* Feature Points */}
            <div className="grid grid-cols-2 gap-3 mb-8 text-left">
              {[
                '30-min average response',
                '24/7 — 365 days a year',
                'No call-out fee',
                'Fully insured & DBS checked',
                'Non-destructive entry',
                'All 32 London boroughs',
              ].map((feature) => (
                <div key={feature} className="flex items-center gap-2 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <Link
                href={BUSINESS.phoneHref}
                className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold text-xl shadow-orange-glow-lg hover:shadow-orange-glow-lg hover:scale-105 transition-all duration-300 w-full sm:w-auto justify-center"
                aria-label="Call our emergency locksmith now"
              >
                <Phone className="w-6 h-6 flex-shrink-0" />
                <div className="text-left">
                  <div className="text-xs font-normal opacity-90 leading-none mb-0.5">Call Now — 24/7</div>
                  <div className="text-lg font-bold leading-none">{BUSINESS.phone}</div>
                </div>
              </Link>

              <Link
                href={BUSINESS.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-green-600 hover:bg-green-500 text-white font-semibold text-base transition-all duration-200 w-full sm:w-auto justify-center"
                aria-label="Contact via WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us
              </Link>
            </div>

            {/* Trust Line */}
            <p className="mt-6 text-sm text-slate-500 flex items-center gap-2 justify-center lg:justify-start">
              <Shield className="w-4 h-4 text-slate-600" />
              DBS Checked · Fully Insured · No Call-Out Fee · Trading Standards Approved
            </p>
          </div>

          {/* Right: Stats Card */}
          <div className="hidden lg:block">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 shadow-navy-deep">
              {/* Rating */}
              <div className="flex items-center gap-4 mb-8 pb-8 border-b border-white/10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center flex-shrink-0">
                  <Star className="w-8 h-8 text-white fill-white" />
                </div>
                <div>
                  <div className="text-4xl font-bold text-white">4.9★</div>
                  <div className="text-slate-400 text-sm">Based on 847 Google Reviews</div>
                  <div className="flex text-yellow-400 text-lg mt-1">★★★★★</div>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { value: '30 min', label: 'Avg. Response Time', icon: Clock, color: 'text-orange-400' },
                  { value: '24/7', label: 'Always Available', icon: Clock, color: 'text-blue-400' },
                  { value: '50,000+', label: 'Jobs Completed', icon: Shield, color: 'text-green-400' },
                  { value: '32', label: 'Boroughs Covered', icon: MapPin, color: 'text-purple-400' },
                ].map(({ value, label, icon: Icon, color }) => (
                  <div
                    key={label}
                    className="bg-white/5 rounded-2xl p-4 text-center border border-white/10"
                  >
                    <div className={`text-2xl font-bold ${color} mb-1`}>{value}</div>
                    <div className="text-xs text-slate-400">{label}</div>
                  </div>
                ))}
              </div>

              {/* Current Status */}
              <div className="flex items-center gap-3 bg-green-500/10 border border-green-500/20 rounded-2xl p-4">
                <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
                <div>
                  <div className="text-white font-semibold text-sm">Locksmiths Available Now</div>
                  <div className="text-green-400 text-xs">Serving your area — 30-min response</div>
                </div>
              </div>

              {/* Certifications */}
              <div className="mt-6 flex flex-wrap gap-2">
                {['DBS Checked', 'MLA Member', 'Insured', 'No Hidden Fees'].map((cert) => (
                  <span
                    key={cert}
                    className="text-xs px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-300"
                  >
                    ✓ {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#0A1628] to-transparent" />
    </section>
  )
}
