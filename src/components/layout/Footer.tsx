import Link from 'next/link'
import Image from 'next/image'
import {
  Phone,
  Mail,
  MapPin,
  Shield,
  Clock,
  Star,
  MessageCircle,
  ChevronRight,
} from 'lucide-react'
import { BUSINESS } from '@/lib/constants'
import { services } from '@/data/services'
import { locations } from '@/data/locations'
import { postcodes } from '@/data/postcodes'
import { stations } from '@/data/stations'

const POPULAR_SEARCHES: { label: string; href: string }[] = [
  { label: '24/7 Residential Locksmith London', href: '/residential-locksmith-london' },
  { label: 'Emergency Locksmith Walthamstow', href: '/emergency-locksmith-walthamstow' },
  { label: 'Emergency Locksmith Barking', href: '/emergency-locksmith-barking' },
  { label: 'Emergency Locksmith Stratford', href: '/emergency-locksmith-stratford' },
  { label: 'Emergency Locksmith Ilford', href: '/emergency-locksmith-ilford' },
  { label: 'Emergency Locksmith Tottenham', href: '/emergency-locksmith-tottenham' },
  { label: 'House Lockout London', href: '/services/house-lockout' },
  { label: 'House Lockout Walthamstow', href: '/house-lockout-walthamstow' },
  { label: 'House Lockout Barking', href: '/house-lockout-barking' },
  { label: 'UPVC Door Repair London', href: '/services/upvc-door-repair' },
  { label: 'UPVC Door Repair Walthamstow', href: '/upvc-door-repair-walthamstow' },
  { label: 'Burglary Repair London', href: '/services/burglary-repair' },
  { label: 'Burglary Repair Barking', href: '/burglary-repair-barking' },
  { label: 'Lock Replacement London', href: '/services/lock-replacement' },
  { label: 'Smart Lock Installation London', href: '/services/smart-lock-installation' },
  { label: 'Car Locksmith London', href: '/services/car-locksmith' },
  { label: 'Locksmith Near Stratford Station', href: '/locksmith-near-stratford-station' },
  { label: 'Locksmith Near Walthamstow Central', href: '/locksmith-near-walthamstow-central-station' },
  { label: 'Locksmith Near Barking Station', href: '/locksmith-near-barking-station' },
  { label: 'Locksmith E17', href: '/locksmith-e17' },
  { label: 'Locksmith E10', href: '/locksmith-e10' },
  { label: 'Locksmith RM8', href: '/locksmith-rm8' },
  { label: 'Locksmith IG1', href: '/locksmith-ig1' },
  { label: 'Locksmith N17', href: '/locksmith-n17' },
  { label: 'Locksmith E15', href: '/locksmith-e15' },
]

export function Footer() {
  const currentYear = new Date().getFullYear()
  const allServices = services
  const featuredLocations = locations.slice(0, 12)
  const featuredPostcodes = postcodes.slice(0, 12)
  const allLocations = locations
  const allStations = stations
  // Top 5 emergency services × top 6 locations = 30 combo links
  const topEmergencyServices = services.filter((s) => s.emergencyService).slice(0, 5)
  const topLocations = locations.slice(0, 6)

  return (
    <footer className="bg-[#060E1A] border-t border-gray-900 mt-auto pb-24 md:pb-0">
      {/* Top CTA Strip */}
      <div className="bg-gradient-to-r from-orange-600 to-red-600 py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-white font-bold text-xl">Emergency? We&apos;re 30 Minutes Away</p>
            <p className="text-orange-100 text-sm">Available 24/7 — No call-out fee — All London boroughs</p>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href={BUSINESS.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-green-500 hover:bg-green-400 text-white font-semibold transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </Link>
            <Link
              href={BUSINESS.phoneHref}
              className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-white text-orange-600 font-bold hover:bg-orange-50 transition-all shadow-lg"
            >
              <Phone className="w-4 h-4" />
              {BUSINESS.phone}
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer — 5 columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6" aria-label="London Locksmith Pro — Home">
              <Image
                src="/logo.webp"
                alt="London Locksmith Pro"
                width={160}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              London&apos;s most trusted emergency locksmith. Available 24/7 across all 32 boroughs
              with a 30-minute response guarantee.
            </p>

            <div className="space-y-2 mb-6">
              {[
                { icon: Star, text: '4.9★ Rated (847 Google Reviews)' },
                { icon: Shield, text: 'Fully Insured & DBS Checked' },
                { icon: Clock, text: 'Open 24/7 — 365 Days a Year' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-xs text-slate-400">
                  <Icon className="w-3.5 h-3.5 text-orange-400 flex-shrink-0" />
                  <span>{text}</span>
                </div>
              ))}
            </div>

            <div className="space-y-2">
              <Link href={BUSINESS.phoneHref} className="flex items-center gap-2 text-orange-400 hover:text-orange-300 font-semibold transition-colors">
                <Phone className="w-4 h-4" />
                {BUSINESS.phone}
              </Link>
              <Link href={BUSINESS.emailHref} className="flex items-center gap-2 text-slate-400 hover:text-orange-400 text-sm transition-colors">
                <Mail className="w-4 h-4" />
                {BUSINESS.email}
              </Link>
              <div className="flex items-start gap-2 text-slate-400 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>{BUSINESS.address.full}</span>
              </div>
            </div>
          </div>

          {/* Services Column — all 15 services */}
          <div>
            <h3 className="text-white font-bold text-base mb-5 flex items-center gap-2">
              <span className="w-1 h-4 bg-orange-500 rounded-full" />
              Our Services
            </h3>
            <ul className="space-y-2">
              {allServices.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="flex items-center gap-2 text-sm text-slate-400 hover:text-orange-400 transition-colors group"
                  >
                    <ChevronRight className="w-3 h-3 text-slate-600 group-hover:text-orange-400 transition-colors" />
                    {service.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services" className="flex items-center gap-2 text-sm text-orange-400 hover:text-orange-300 font-medium transition-colors mt-2">
                  View All Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Locations Column */}
          <div>
            <h3 className="text-white font-bold text-base mb-5 flex items-center gap-2">
              <span className="w-1 h-4 bg-orange-500 rounded-full" />
              Areas We Cover
            </h3>
            <ul className="space-y-2">
              {featuredLocations.map((location) => (
                <li key={location.slug}>
                  <Link
                    href={`/locations/${location.slug}`}
                    className="flex items-center gap-2 text-sm text-slate-400 hover:text-orange-400 transition-colors group"
                  >
                    <ChevronRight className="w-3 h-3 text-slate-600 group-hover:text-orange-400 transition-colors" />
                    {location.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/areas-we-cover" className="flex items-center gap-2 text-sm text-orange-400 hover:text-orange-300 font-medium transition-colors mt-2">
                  All Locations →
                </Link>
              </li>
            </ul>
          </div>

          {/* Postcodes Column */}
          <div>
            <h3 className="text-white font-bold text-base mb-5 flex items-center gap-2">
              <span className="w-1 h-4 bg-orange-500 rounded-full" />
              By Postcode
            </h3>
            <ul className="space-y-2">
              {featuredPostcodes.map((postcode) => (
                <li key={postcode.slug}>
                  <Link
                    href={`/locksmith-${postcode.slug}`}
                    className="flex items-center gap-2 text-sm hover:text-orange-400 transition-colors group"
                  >
                    <span className="text-orange-400 font-mono font-bold text-xs w-9 flex-shrink-0">
                      {postcode.code}
                    </span>
                    <span className="text-slate-400 group-hover:text-orange-400 transition-colors">
                      {postcode.area}
                    </span>
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/areas-we-cover" className="flex items-center gap-2 text-sm text-orange-400 hover:text-orange-300 font-medium transition-colors mt-2">
                  All Postcodes →
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links + Popular Searches */}
          <div>
            <h3 className="text-white font-bold text-base mb-5 flex items-center gap-2">
              <span className="w-1 h-4 bg-orange-500 rounded-full" />
              Quick Links
            </h3>
            <ul className="space-y-2 mb-8">
              {[
                { label: 'About Us', href: '/about' },
                { label: 'Pricing', href: '/pricing' },
                { label: 'FAQ', href: '/faq' },
                { label: 'Blog', href: '/blog' },
                { label: 'Contact', href: '/contact' },
                { label: 'Areas We Cover', href: '/areas-we-cover' },
                { label: 'Sitemap', href: '/sitemap.xml' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="flex items-center gap-2 text-sm text-slate-400 hover:text-orange-400 transition-colors group">
                    <ChevronRight className="w-3 h-3 text-slate-600 group-hover:text-orange-400 transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="text-white font-bold text-sm mb-3">Popular Searches</h3>
            <div className="flex flex-wrap gap-1.5">
              {POPULAR_SEARCHES.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-xs px-2.5 py-1 rounded-full bg-gray-800 text-slate-400 border border-gray-700 hover:text-orange-400 hover:border-orange-500/40 transition-all"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Service × Location matrix */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-slate-500 text-xs mb-4 uppercase tracking-wider font-semibold">
            Emergency Locksmith Services by Area
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-1.5">
            {topEmergencyServices.flatMap((svc) =>
              topLocations.map((loc) => (
                <Link
                  key={`${svc.slug}-${loc.slug}`}
                  href={`/${svc.slug}-${loc.slug}`}
                  className="text-xs px-2 py-1 rounded bg-gray-900 text-slate-500 hover:text-orange-400 hover:bg-gray-800 transition-all border border-gray-800 truncate"
                >
                  {svc.shortName || svc.name} {loc.name}
                </Link>
              ))
            )}
          </div>
        </div>

        {/* All areas strip */}
        <div className="mt-6 pt-6 border-t border-gray-800">
          <p className="text-slate-500 text-xs mb-3 uppercase tracking-wider font-semibold">
            Locksmith — All London Areas
          </p>
          <div className="flex flex-wrap gap-2">
            {allLocations.map((loc) => (
              <Link
                key={loc.slug}
                href={`/locations/${loc.slug}`}
                className="text-xs px-2 py-0.5 rounded bg-gray-900 text-slate-500 hover:text-orange-400 hover:bg-gray-800 transition-all border border-gray-800"
              >
                {loc.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Stations strip */}
        <div className="mt-4 pt-4 border-t border-gray-800">
          <p className="text-slate-500 text-xs mb-3 uppercase tracking-wider font-semibold">
            Locksmith Near Stations
          </p>
          <div className="flex flex-wrap gap-2">
            {allStations.map((st) => (
              <Link
                key={st.slug}
                href={`/locksmith-near-${st.slug}`}
                className="text-xs px-2 py-0.5 rounded bg-gray-900 text-slate-500 hover:text-orange-400 hover:bg-gray-800 transition-all border border-gray-800"
              >
                {st.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Emergency Postcodes Strip */}
        <div className="mt-4 pt-4 border-t border-gray-800">
          <p className="text-slate-500 text-xs mb-3 uppercase tracking-wider font-semibold">
            Emergency Locksmith — All London Postcodes
          </p>
          <div className="flex flex-wrap gap-2">
            {postcodes.map((pc) => (
              <Link
                key={pc.slug}
                href={`/locksmith-${pc.slug}`}
                className="text-xs px-2 py-0.5 rounded bg-gray-900 text-slate-500 hover:text-orange-400 hover:bg-gray-800 transition-all border border-gray-800"
              >
                {pc.code}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-900 py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {currentYear} {BUSINESS.legalName}. All rights reserved. Registered in England and Wales.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-slate-300 transition-colors">
              Terms of Service
            </Link>
            <Link href="/sitemap.xml" className="hover:text-slate-300 transition-colors">
              Sitemap
            </Link>
          </div>
          <p className="text-slate-600 text-[10px]">
            Master Locksmiths Association · Trading Standards Approved · DBS Checked · Fully Insured
          </p>
        </div>
      </div>
    </footer>
  )
}
