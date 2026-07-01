'use client'

import Link from 'next/link'
import { useEffect } from 'react'
import { Phone, RefreshCw, Home } from 'lucide-react'
import { BUSINESS } from '@/lib/constants'

interface Props {
  error: Error & { digest?: string }
  reset: () => void
}

export default function Error({ error, reset }: Props) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="text-6xl font-black text-orange-500/20 mb-4">500</div>
        <h1 className="text-2xl font-bold text-white mb-3">Something went wrong</h1>
        <p className="text-slate-400 mb-8">
          An unexpected error occurred. If you need a locksmith urgently, call us directly.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
          <button
            onClick={reset}
            className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#111827] border border-gray-700 text-slate-300 hover:text-white hover:border-gray-600 transition-all text-sm"
          >
            <RefreshCw className="w-4 h-4" />
            Try again
          </button>
          <Link
            href="/"
            className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#111827] border border-gray-700 text-slate-300 hover:text-white hover:border-gray-600 transition-all text-sm"
          >
            <Home className="w-4 h-4" />
            Go home
          </Link>
        </div>

        <Link
          href={BUSINESS.phoneHref}
          className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold"
        >
          <Phone className="w-5 h-5" />
          Emergency? Call {BUSINESS.phone}
        </Link>
      </div>
    </div>
  )
}
