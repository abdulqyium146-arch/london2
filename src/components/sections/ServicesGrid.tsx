import Link from 'next/link'
import {
  AlertTriangle,
  Clock,
  Home,
  ShieldAlert,
  DoorOpen,
  Car,
  Building2,
  Smartphone,
  Wrench,
  Lock,
  Key,
  Archive,
  ShieldCheck,
  Scissors,
  ChevronRight,
} from 'lucide-react'
import { services } from '@/data/services'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  AlertTriangle,
  Clock,
  Home,
  ShieldAlert,
  DoorOpen,
  Car,
  Building2,
  Smartphone,
  Wrench,
  Lock,
  Key,
  Archive,
  ShieldCheck,
  Scissors,
}

interface ServicesGridProps {
  title?: string
  subtitle?: string
  locationSlug?: string
  locationName?: string
  limit?: number
}

export function ServicesGrid({
  title = 'Our Locksmith Services',
  subtitle = 'Professional locksmith services across London. Available 24/7 with a 30-minute response.',
  locationSlug,
  locationName,
  limit,
}: ServicesGridProps) {
  const displayServices = limit ? services.slice(0, limit) : services

  return (
    <section className="py-16 px-4" aria-label="Locksmith services">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-orange-400 text-sm font-semibold uppercase tracking-widest mb-3">
            {locationName ? `Services in ${locationName}` : 'All Services'}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {displayServices.map((service) => {
            const Icon = iconMap[service.icon] || Lock
            const href = locationSlug
              ? `/${service.slug}-${locationSlug}`
              : `/services/${service.slug}`

            return (
              <Link
                key={service.slug}
                href={href}
                className="group bg-[#111827] border border-gray-800 rounded-2xl p-6 hover:border-orange-500/40 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500/20 transition-colors">
                    <Icon className="w-6 h-6 text-orange-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-bold text-white group-hover:text-orange-400 transition-colors">
                        {locationName ? `${service.name} ${locationName}` : service.name}
                      </h3>
                      {service.emergencyService && (
                        <span className="flex-shrink-0 text-[10px] px-2 py-0.5 rounded-full bg-red-500/20 text-red-400 border border-red-500/30 font-semibold">
                          24/7
                        </span>
                      )}
                    </div>
                    <p className="text-slate-400 text-sm mt-1 leading-relaxed line-clamp-2">
                      {service.description}
                    </p>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center gap-3 text-xs text-slate-500">
                        <span className="text-green-400 font-medium">From £{service.priceFrom}</span>
                        <span>·</span>
                        <span>{service.responseTime}</span>
                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-orange-400 transition-colors flex-shrink-0" />
                    </div>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        {limit && services.length > limit && (
          <div className="text-center mt-8">
            <Link
              href={locationSlug ? `/locations/${locationSlug}` : '/services'}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-orange-500/40 text-orange-400 font-semibold hover:bg-orange-500/10 transition-all duration-200"
            >
              View All Services
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
