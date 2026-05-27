'use client'

import Link from 'next/link'
import { Phone, MessageCircle } from 'lucide-react'
import { BUSINESS } from '@/lib/constants'

export function MobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <div className="bg-[#0A1628]/95 backdrop-blur-xl border-t border-gray-800 px-4 py-3 pb-safe">
        <div className="grid grid-cols-2 gap-3 max-w-sm mx-auto">
          <Link
            href={BUSINESS.phoneHref}
            className="flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold text-base shadow-orange-glow"
            aria-label={`Call ${BUSINESS.phone}`}
          >
            <Phone className="w-5 h-5" />
            <span>Call Now</span>
          </Link>
          <Link
            href={BUSINESS.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-green-600 text-white font-bold text-base"
            aria-label="WhatsApp us"
          >
            <MessageCircle className="w-5 h-5" />
            <span>WhatsApp</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
