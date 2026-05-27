import type { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, Clock, ChevronRight, Phone, CheckCircle2 } from 'lucide-react'
import { locations } from '@/data/locations'
import { Breadcrumbs } from '@/components/seo/Breadcrumbs'
import { CTASection } from '@/components/sections/CTASection'
import { BUSINESS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Locksmith London Locations | All Areas Covered | 24/7',
  description:
    'London Locksmith Pro covers all 32 London boroughs. Find your nearest locksmith in East, North, South, and West London. 24/7 emergency service.',
  keywords: ['locksmith london locations', 'london locksmith near me', 'locksmith all areas london'],
  alternates: { canonical: 'https://londonlocksmithpro.co.uk/locations' },
}

const grouped = locations.reduce(
  (acc, loc) => {
    if (!acc[loc.area]) acc[loc.area] = []
    acc[loc.area].push(loc)
    return acc
  },
  {} as Record<string, typeof locations>
)

const regionColors: Record<string, { bg: string; border: string; text: string }> = {
  'East London': { bg: 'bg-blue-500/10', border: 'border-blue-500/30', text: 'text-blue-400' },
  'North London': { bg: 'bg-green-500/10', border: 'border-green-500/30', text: 'text-green-400' },
  'South London': { bg: 'bg-purple-500/10', border: 'border-purple-500/30', text: 'text-purple-400' },
  'West London': { bg: 'bg-amber-500/10', border: 'border-amber-500/30', text: 'text-amber-400' },
}

export default function LocationsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-20 px-4 bg-hero-gradient overflow-hidden">
        <div className="absolute inset-0 bg-glow-orange opacity-30" />
        <div className="relative max-w-7xl mx-auto">
          <Breadcrumbs items={[{ name: 'Locations', href: '/locations' }]} className="mb-8" />
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-orange-400 text-sm font-semibold uppercase tracking-widest mb-4">
              London Coverage
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Locksmith Coverage Across All 32 London Boroughs
            </h1>
            <p className="text-lg text-slate-300 mb-8">
              Local locksmiths stationed across London for the fastest possible response. 30-minute
              average arrival time, 24/7 availability, no call-out fee.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
              {[
                'All 32 Boroughs',
                '30-Min Response',
                '24/7 Available',
                'No Call-Out Fee',
              ].map((point) => (
                <div key={point} className="flex items-center gap-2 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  {point}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Region Grids */}
        {Object.entries(grouped).map(([region, regionLocations]) => {
          const colors = regionColors[region] || { bg: 'bg-orange-500/10', border: 'border-orange-500/30', text: 'text-orange-400' }
          return (
            <div key={region} className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${colors.bg} border ${colors.border}`}>
                  <MapPin className={`w-4 h-4 ${colors.text}`} />
                  <span className={`font-bold text-sm ${colors.text}`}>{region}</span>
                </div>
                <span className="text-slate-500 text-sm">{regionLocations.length} areas</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {regionLocations.map((location) => (
                  <Link
                    key={location.slug}
                    href={`/locations/${location.slug}`}
                    className="group bg-[#111827] border border-gray-800 rounded-2xl p-5 hover:border-orange-500/40 transition-all duration-300"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1">
                        <h3 className="text-white font-bold group-hover:text-orange-400 transition-colors">
                          {location.name}
                        </h3>
                        <p className="text-slate-500 text-sm">{location.borough}</p>
                        <div className="flex items-center gap-3 mt-2 text-xs text-slate-400">
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {location.responseTime}
                          </span>
                          <span className="text-slate-600">·</span>
                          <span className="text-orange-400">{location.postcode}</span>
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-orange-400 transition-colors flex-shrink-0 mt-1" />
                    </div>
                    <div className="mt-3 pt-3 border-t border-gray-800">
                      <div className="flex flex-wrap gap-1">
                        {location.nearbyAreas.slice(0, 3).map((area) => (
                          <span key={area} className="text-[11px] px-2 py-0.5 rounded-full bg-gray-800 text-slate-500">
                            {area}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )
        })}

        {/* Contact Box */}
        <div className="mt-8 bg-gradient-to-br from-orange-600/20 to-red-600/20 border border-orange-500/30 rounded-3xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">
            Can&apos;t Find Your Area? We Probably Cover It
          </h2>
          <p className="text-slate-300 mb-6">
            We cover all of Greater London. If your area isn&apos;t listed, call us — we almost
            certainly have a locksmith near you.
          </p>
          <Link
            href={BUSINESS.phoneHref}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold text-lg shadow-orange-glow hover:scale-105 transition-all"
          >
            <Phone className="w-5 h-5" />
            {BUSINESS.phone}
          </Link>
        </div>
      </div>

      <CTASection variant="minimal" />
    </>
  )
}
