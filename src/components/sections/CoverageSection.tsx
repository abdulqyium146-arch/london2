import Link from 'next/link'
import { MapPin, ChevronRight, Clock } from 'lucide-react'
import { locations } from '@/data/locations'

interface CoverageSectionProps {
  title?: string
  subtitle?: string
  highlightSlug?: string
}

export function CoverageSection({
  title = 'Locksmith Coverage Across London',
  subtitle = 'We cover all 32 London boroughs with local locksmiths in every area. Fast response from your nearest technician.',
  highlightSlug,
}: CoverageSectionProps) {
  const grouped = locations.reduce(
    (acc, loc) => {
      const region = loc.area
      if (!acc[region]) acc[region] = []
      acc[region].push(loc)
      return acc
    },
    {} as Record<string, typeof locations>
  )

  const regionColors: Record<string, string> = {
    'East London': 'text-blue-400',
    'North London': 'text-green-400',
    'South London': 'text-purple-400',
    'West London': 'text-amber-400',
  }

  return (
    <section className="py-16 px-4" aria-label="London coverage areas">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-orange-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Coverage Map
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {Object.entries(grouped).map(([region, regionLocations]) => (
            <div
              key={region}
              className="bg-[#111827] border border-gray-800 rounded-2xl p-5"
            >
              <div className={`flex items-center gap-2 mb-4 ${regionColors[region] || 'text-orange-400'}`}>
                <MapPin className="w-4 h-4" />
                <h3 className="font-bold text-sm uppercase tracking-wide">{region}</h3>
              </div>
              <ul className="space-y-2">
                {regionLocations.map((loc) => (
                  <li key={loc.slug}>
                    <Link
                      href={`/locations/${loc.slug}`}
                      className={`flex items-center justify-between text-sm group ${
                        highlightSlug === loc.slug
                          ? 'text-orange-400 font-semibold'
                          : 'text-slate-400 hover:text-orange-400'
                      } transition-colors`}
                    >
                      <div className="flex items-center gap-2">
                        {highlightSlug === loc.slug && (
                          <div className="w-1.5 h-1.5 rounded-full bg-orange-400 flex-shrink-0" />
                        )}
                        <span>{loc.name}</span>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-slate-600 group-hover:text-slate-500">
                        <Clock className="w-3 h-3" />
                        <span>{loc.responseTime}</span>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Postcode coverage */}
        <div className="bg-[#111827] border border-gray-800 rounded-2xl p-6">
          <h3 className="text-white font-bold text-lg mb-4">Postcode Coverage</h3>
          <div className="flex flex-wrap gap-2">
            {['E4', 'E6', 'E7', 'E10', 'E11', 'E12', 'E13', 'E15', 'E17', 'N9', 'N15', 'N17', 'N18', 'IG1', 'IG11', 'RM8', 'RM9', 'RM10', 'UB1', 'UB2', 'UB6', 'CR4', 'SW16', 'TW13', 'TW14', 'EN3'].map((code) => (
              <Link
                key={code}
                href={`/locksmith-${code.toLowerCase()}`}
                className="px-3 py-1.5 rounded-lg bg-[#1a2332] border border-gray-700 text-sm text-slate-300 hover:text-orange-400 hover:border-orange-500/40 transition-all"
              >
                {code}
              </Link>
            ))}
          </div>
        </div>

        <div className="text-center mt-8">
          <Link
            href="/areas-we-cover"
            className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 font-semibold transition-colors"
          >
            View All Areas We Cover
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
