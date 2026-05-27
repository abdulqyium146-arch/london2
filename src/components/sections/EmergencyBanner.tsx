'use client'

import { Phone, Clock } from 'lucide-react'
import Link from 'next/link'
import { BUSINESS } from '@/lib/constants'

export function EmergencyBanner() {
  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-red-700 via-orange-600 to-red-700">
      <div className="max-w-7xl mx-auto px-4 py-1.5 flex items-center justify-center gap-3 text-white text-xs sm:text-sm font-medium">
        <div className="flex items-center gap-1.5 animate-pulse">
          <Clock className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">24/7 Emergency Service</span>
          <span className="sm:hidden">24/7</span>
        </div>
        <span className="text-white/50">|</span>
        <span className="hidden md:inline">⚡ 30-Minute Response Across London</span>
        <span className="text-white/50 hidden md:inline">|</span>
        <Link
          href={BUSINESS.phoneHref}
          className="flex items-center gap-1.5 font-bold hover:text-yellow-200 transition-colors"
          aria-label="Call emergency locksmith"
        >
          <Phone className="w-3.5 h-3.5" />
          <span>{BUSINESS.phone}</span>
        </Link>
        <span className="text-white/50">|</span>
        <span className="hidden sm:inline text-white/80">No Call-Out Fee</span>
      </div>
    </div>
  )
}
