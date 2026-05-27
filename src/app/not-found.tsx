import Link from 'next/link'
import { Phone, Home, Search, ArrowLeft } from 'lucide-react'
import { BUSINESS } from '@/lib/constants'

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="text-center max-w-2xl mx-auto">
        <div className="text-8xl font-black text-orange-500/20 mb-4">404</div>
        <h1 className="text-3xl font-bold text-white mb-4">Page Not Found</h1>
        <p className="text-slate-400 mb-8 text-lg">
          The page you&apos;re looking for doesn&apos;t exist. But if you need an emergency
          locksmith, we&apos;re definitely here!
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <Link
            href={BUSINESS.phoneHref}
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold shadow-orange-glow hover:scale-105 transition-all"
          >
            <Phone className="w-4 h-4" />
            Emergency: {BUSINESS.phone}
          </Link>
          <Link
            href="/"
            className="flex items-center gap-2 px-6 py-3 rounded-xl border border-gray-700 text-slate-300 hover:text-white hover:border-gray-600 transition-all"
          >
            <Home className="w-4 h-4" />
            Go Home
          </Link>
        </div>

        <div className="flex flex-wrap justify-center gap-3 text-sm">
          <Link href="/services" className="text-orange-400 hover:text-orange-300 flex items-center gap-1">
            <Search className="w-3.5 h-3.5" /> All Services
          </Link>
          <Link href="/locations" className="text-orange-400 hover:text-orange-300 flex items-center gap-1">
            <Search className="w-3.5 h-3.5" /> All Locations
          </Link>
          <Link href="/faq" className="text-orange-400 hover:text-orange-300 flex items-center gap-1">
            <Search className="w-3.5 h-3.5" /> FAQ
          </Link>
          <Link href="/contact" className="text-orange-400 hover:text-orange-300 flex items-center gap-1">
            <Search className="w-3.5 h-3.5" /> Contact
          </Link>
        </div>
      </div>
    </div>
  )
}
