import type { Metadata } from 'next'
import Link from 'next/link'
import { services } from '@/data/services'
import { locations } from '@/data/locations'
import { postcodes } from '@/data/postcodes'
import { stations } from '@/data/stations'
import { blogPosts } from '@/data/blog-posts'

export const metadata: Metadata = {
  title: 'Sitemap | London Locksmith Pro — All Pages',
  description:
    'Complete HTML sitemap for London Locksmith Pro. Browse all locksmith services, London areas, postcodes, stations, and blog posts.',
  alternates: { canonical: 'https://londonlocksmith.co/html-sitemap' },
  robots: { index: true, follow: true },
}

const EMERGENCY_SLUGS = new Set([
  'emergency-locksmith',
  '24-hour-locksmith',
  'house-lockout',
  'burglary-repair',
  'door-opening',
])

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-12">
      <h2 className="text-xl font-bold text-white mb-4 pb-2 border-b border-gray-700 flex items-center gap-2">
        <span className="w-1 h-5 bg-orange-500 rounded-full inline-block" />
        {title}
      </h2>
      {children}
    </section>
  )
}

function LinkGrid({ links }: { links: { href: string; label: string }[] }) {
  return (
    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-1.5">
      {links.map(({ href, label }) => (
        <li key={href}>
          <Link
            href={href}
            className="block text-xs px-2.5 py-1.5 rounded bg-[#111827] border border-gray-800 text-slate-400 hover:text-orange-400 hover:border-orange-500/30 transition-all truncate"
          >
            {label}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default function HTMLSitemapPage() {
  const emergencyServices = services.filter((s) => EMERGENCY_SLUGS.has(s.slug))
  const standardServices = services.filter((s) => !EMERGENCY_SLUGS.has(s.slug))

  const coreLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/faq', label: 'FAQ' },
    { href: '/blog', label: 'Blog' },
    { href: '/areas-we-cover', label: 'Areas We Cover' },
    { href: '/locations', label: 'All Locations' },
    { href: '/services', label: 'All Services' },
    { href: '/residential-locksmith-london', label: 'Residential Locksmith London' },
    { href: '/affordable-locksmith-london', label: 'Affordable Locksmith London' },
    { href: '/change-locks-london', label: 'Change Locks London' },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <nav aria-label="Breadcrumb" className="mb-8 text-sm text-slate-500">
        <Link href="/" className="hover:text-orange-400 transition-colors">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-300">Sitemap</span>
      </nav>

      <h1 className="text-4xl font-bold text-white mb-3">Sitemap</h1>
      <p className="text-slate-400 mb-12 text-base max-w-2xl">
        Complete directory of all pages on <strong className="text-white">London Locksmith Pro</strong>.
        Use this page to find any service or location quickly.
      </p>

      {/* Core pages */}
      <Section title="Main Pages">
        <LinkGrid links={coreLinks} />
      </Section>

      {/* Services */}
      <Section title="Locksmith Services">
        <LinkGrid
          links={services.map((s) => ({ href: `/services/${s.slug}`, label: s.name }))}
        />
      </Section>

      {/* Locations */}
      <Section title="Areas We Cover">
        <LinkGrid
          links={locations.map((l) => ({ href: `/locations/${l.slug}`, label: `Locksmith ${l.name}` }))}
        />
      </Section>

      {/* Emergency services × locations */}
      <Section title="Emergency Locksmith Services by Area">
        <div className="space-y-6">
          {emergencyServices.map((service) => (
            <div key={service.slug}>
              <h3 className="text-sm font-semibold text-orange-400 uppercase tracking-wide mb-2">
                {service.name}
              </h3>
              <LinkGrid
                links={locations.map((l) => ({
                  href: `/${service.slug}-${l.slug}`,
                  label: `${service.name} ${l.name}`,
                }))}
              />
            </div>
          ))}
        </div>
      </Section>

      {/* Standard services × locations */}
      <Section title="All Locksmith Services by Area">
        <div className="space-y-6">
          {standardServices.map((service) => (
            <div key={service.slug}>
              <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wide mb-2">
                {service.name}
              </h3>
              <LinkGrid
                links={locations.map((l) => ({
                  href: `/${service.slug}-${l.slug}`,
                  label: `${service.name} ${l.name}`,
                }))}
              />
            </div>
          ))}
        </div>
      </Section>

      {/* Postcodes */}
      <Section title="Locksmith by Postcode">
        <LinkGrid
          links={postcodes.map((p) => ({
            href: `/locksmith-${p.slug}`,
            label: `Locksmith ${p.code} — ${p.area}`,
          }))}
        />
      </Section>

      {/* Stations */}
      <Section title="Locksmith Near London Stations">
        <LinkGrid
          links={stations.map((s) => ({
            href: `/locksmith-near-${s.slug}`,
            label: `Locksmith Near ${s.name}`,
          }))}
        />
      </Section>

      {/* Blog */}
      <Section title="Blog">
        <ul className="space-y-2">
          {blogPosts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="text-sm text-slate-300 hover:text-orange-400 transition-colors"
              >
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </Section>
    </div>
  )
}
