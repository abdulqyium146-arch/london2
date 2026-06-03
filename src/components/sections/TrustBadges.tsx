import { Clock, Shield, Star, Phone, BadgeCheck, MapPin, Wrench, Award } from 'lucide-react'
import { BUSINESS } from '@/lib/constants'

const badges = [
  {
    icon: Clock,
    value: '30 Min',
    label: 'Response Time',
    sublabel: 'Average across London',
    color: 'from-orange-500/20 to-orange-600/10',
    iconColor: 'text-orange-400',
    borderColor: 'border-orange-500/20',
  },
  {
    icon: Phone,
    value: '24/7',
    label: 'Always Available',
    sublabel: 'Including bank holidays',
    color: 'from-blue-500/20 to-blue-600/10',
    iconColor: 'text-blue-400',
    borderColor: 'border-blue-500/20',
  },
  {
    icon: Star,
    value: '4.9★',
    label: 'Google Rating',
    sublabel: `Based on ${BUSINESS.rating.count} reviews`,
    color: 'from-amber-500/20 to-amber-600/10',
    iconColor: 'text-amber-400',
    borderColor: 'border-amber-500/20',
  },
  {
    icon: BadgeCheck,
    value: '£0',
    label: 'Call-Out Fee',
    sublabel: 'Transparent pricing only',
    color: 'from-green-500/20 to-green-600/10',
    iconColor: 'text-green-400',
    borderColor: 'border-green-500/20',
  },
  {
    icon: Shield,
    value: '£5M',
    label: 'Insurance Cover',
    sublabel: 'Public liability insured',
    color: 'from-purple-500/20 to-purple-600/10',
    iconColor: 'text-purple-400',
    borderColor: 'border-purple-500/20',
  },
  {
    icon: MapPin,
    value: '32',
    label: 'Boroughs Covered',
    sublabel: 'Complete London coverage',
    color: 'from-red-500/20 to-red-600/10',
    iconColor: 'text-red-400',
    borderColor: 'border-red-500/20',
  },
  {
    icon: Wrench,
    value: '50k+',
    label: 'Jobs Completed',
    sublabel: '15+ years experience',
    color: 'from-cyan-500/20 to-cyan-600/10',
    iconColor: 'text-cyan-400',
    borderColor: 'border-cyan-500/20',
  },
  {
    icon: Award,
    value: '99.8%',
    label: 'Success Rate',
    sublabel: 'Non-destructive entry',
    color: 'from-teal-500/20 to-teal-600/10',
    iconColor: 'text-teal-400',
    borderColor: 'border-teal-500/20',
  },
]

export function TrustBadges() {
  return (
    <section className="py-16 px-4 bg-[#060E1A]/80" aria-label="Trust signals and statistics">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-orange-400 text-sm font-semibold uppercase tracking-widest mb-2">
            Why London Trusts Us
          </p>
          <h2 className="text-3xl font-bold text-white">
            London&apos;s Most Trusted Locksmith Service
          </h2>
          <p className="text-slate-400 mt-3 max-w-2xl mx-auto">
            Over 15 years serving London residents and businesses. Our record speaks for itself.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {badges.map(({ icon: Icon, value, label, sublabel, color, iconColor, borderColor }) => (
            <div
              key={label}
              className={`relative rounded-2xl p-5 bg-gradient-to-br ${color} border ${borderColor} hover:scale-105 transition-transform duration-300`}
            >
              <div className="flex items-start justify-between mb-3">
                <Icon className={`w-6 h-6 ${iconColor}`} />
                <span className="text-xs text-slate-500 font-medium">✓</span>
              </div>
              <div className={`text-2xl md:text-3xl font-bold ${iconColor} mb-1`}>{value}</div>
              <div className="text-white font-semibold text-sm">{label}</div>
              <div className="text-slate-400 text-xs mt-1">{sublabel}</div>
            </div>
          ))}
        </div>

        {/* Certification Strip */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 pt-8 border-t border-gray-800">
          {BUSINESS.certifications.map((cert) => (
            <div
              key={cert}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-slate-300"
            >
              <span className="text-green-400">✓</span>
              <span>{cert}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
