import type { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, ChevronRight, Phone } from 'lucide-react'
import { Breadcrumbs } from '@/components/seo/Breadcrumbs'
import { CTASection } from '@/components/sections/CTASection'
import { BUSINESS } from '@/lib/constants'
import { locations } from '@/data/locations'
import { postcodes } from '@/data/postcodes'
import { stations } from '@/data/stations'
import { services } from '@/data/services'

export const metadata: Metadata = {
  title: 'Areas We Cover | London Locksmith | All Boroughs | 24/7',
  description:
    'London Locksmith Pro covers all 32 London boroughs. View all service areas, postcodes, and station coverage. Emergency locksmith anywhere in London.',
  keywords: ['locksmith london areas', 'locksmith coverage london', 'areas locksmith london'],
  alternates: { canonical: 'https://londonlocksmithpro.co.uk/areas-we-cover' },
}

export default function AreasCoveredPage() {
  const emergencyServices = services.filter((s) => s.emergencyService).slice(0, 5)

  return (
    <>
      <section className="relative py-20 px-4 bg-hero-gradient overflow-hidden">
        <div className="absolute inset-0 bg-glow-orange opacity-30" />
        <div className="relative max-w-7xl mx-auto">
          <Breadcrumbs items={[{ name: 'Areas We Cover', href: '/areas-we-cover' }]} className="mb-8" />
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Areas We Cover Across London
            </h1>
            <p className="text-lg text-slate-300 mb-8">
              Complete locksmith coverage across all 32 London boroughs. Local locksmiths in every
              area for the fastest possible response — 24/7.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16 space-y-16">
        {/* Location Pages */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-orange-400" />
            London Areas with Dedicated Locksmith Pages
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {locations.map((location) => (
              <Link
                key={location.slug}
                href={`/locations/${location.slug}`}
                className="group flex items-center justify-between p-3 bg-[#111827] border border-gray-800 rounded-xl hover:border-orange-500/40 transition-all text-sm"
              >
                <span className="text-slate-300 group-hover:text-orange-400 transition-colors">
                  {location.name}
                </span>
                <ChevronRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-orange-400 flex-shrink-0" />
              </Link>
            ))}
          </div>
        </div>

        {/* Postcode Coverage */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-6">Postcode Coverage</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {postcodes.map((postcode) => (
              <Link
                key={postcode.code}
                href={`/locksmith-${postcode.slug}`}
                className="group p-3 bg-[#111827] border border-gray-800 rounded-xl hover:border-orange-500/40 transition-all text-center"
              >
                <div className="text-orange-400 font-mono font-bold group-hover:text-orange-300">
                  {postcode.code}
                </div>
                <div className="text-slate-500 text-xs mt-0.5">{postcode.area}</div>
              </Link>
            ))}
          </div>
        </div>

        {/* Station Coverage */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-6">Station-Based Coverage</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {stations.map((station) => (
              <Link
                key={station.slug}
                href={`/locksmith-near-${station.slug}`}
                className="group flex items-center justify-between p-3 bg-[#111827] border border-gray-800 rounded-xl hover:border-orange-500/40 transition-all"
              >
                <div>
                  <div className="text-slate-300 text-sm group-hover:text-orange-400 transition-colors">
                    Near {station.name}
                  </div>
                  <div className="text-slate-500 text-xs">{station.lines.join(' · ')}</div>
                </div>
                <ChevronRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-orange-400" />
              </Link>
            ))}
          </div>
        </div>

        {/* Popular Service-Location Combinations */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-6">Popular Service Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {emergencyServices.flatMap((service) =>
              locations.slice(0, 4).map((loc) => (
                <Link
                  key={`${service.slug}-${loc.slug}`}
                  href={`/${service.slug}-${loc.slug}`}
                  className="group flex items-center justify-between p-3 bg-[#111827] border border-gray-800 rounded-xl hover:border-orange-500/40 transition-all text-sm"
                >
                  <span className="text-slate-300 group-hover:text-orange-400 transition-colors">
                    {service.name} {loc.name}
                  </span>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-orange-400 flex-shrink-0" />
                </Link>
              ))
            )}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-br from-orange-600/20 to-red-600/20 border border-orange-500/30 rounded-3xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">
            Can&apos;t Find Your Area? We Cover All of London
          </h2>
          <p className="text-slate-300 mb-6">
            If your area isn&apos;t listed, call us. We cover every corner of Greater London.
          </p>
          <Link
            href={BUSINESS.phoneHref}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold text-lg"
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
