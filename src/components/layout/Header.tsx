'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Phone, Menu, X, ChevronDown, MessageCircle, Shield } from 'lucide-react'
import { BUSINESS, NAVIGATION } from '@/lib/constants'
import { cn } from '@/lib/utils'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <header
      className={cn(
        'fixed top-8 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-[#0A1628]/95 backdrop-blur-xl border-b border-gray-800/80 shadow-navy-deep'
          : 'bg-[#0A1628]/80 backdrop-blur-md'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center shadow-orange-glow group-hover:shadow-orange-glow-lg transition-all duration-300">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-base leading-tight">London Locksmith</span>
              <span className="text-orange-400 text-xs font-semibold leading-tight tracking-wide">PRO</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {NAVIGATION.main.map((item) => (
              <div key={item.href} className="relative group">
                {'children' in item ? (
                  <button
                    className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-slate-300 hover:text-orange-400 rounded-lg hover:bg-white/5 transition-all duration-200"
                    onClick={() => setOpenSubmenu(openSubmenu === item.href ? null : item.href)}
                  >
                    {item.label}
                    <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180" />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-orange-400 rounded-lg hover:bg-white/5 transition-all duration-200"
                  >
                    {item.label}
                  </Link>
                )}

                {'children' in item && (
                  <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="bg-[#111827] border border-gray-800 rounded-xl shadow-2xl p-2 min-w-[220px]">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-3 py-2 text-sm text-slate-300 hover:text-orange-400 hover:bg-white/5 rounded-lg transition-all duration-150"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href={BUSINESS.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-green-600 hover:bg-green-500 text-white text-sm font-semibold transition-all duration-200"
              aria-label="Contact via WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="hidden lg:inline">WhatsApp</span>
            </Link>
            <Link
              href={BUSINESS.phoneHref}
              className="flex items-center gap-2 px-5 py-2 rounded-xl bg-gradient-to-r from-orange-500 to-red-600 text-white text-sm font-bold shadow-orange-glow hover:shadow-orange-glow-lg transition-all duration-300 hover:scale-105 phone-ring"
              aria-label={`Call ${BUSINESS.phone}`}
            >
              <Phone className="w-4 h-4" />
              <span>{BUSINESS.phone}</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-all"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-[calc(2rem+4rem)] bg-[#0A1628]/98 backdrop-blur-xl z-40 overflow-y-auto">
          <div className="max-w-7xl mx-auto px-4 py-6 space-y-2">
            {/* Emergency Call */}
            <Link
              href={BUSINESS.phoneHref}
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-3 w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold text-lg shadow-orange-glow mb-4"
            >
              <Phone className="w-5 h-5" />
              Call Now: {BUSINESS.phone}
            </Link>

            {/* WhatsApp */}
            <Link
              href={BUSINESS.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-3 w-full py-3 px-6 rounded-2xl bg-green-600 text-white font-semibold mb-6"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us
            </Link>

            <div className="h-px bg-gray-800 my-4" />

            {/* Navigation Links */}
            {NAVIGATION.main.map((item) => (
              <div key={item.href}>
                {'children' in item ? (
                  <div>
                    <button
                      onClick={() => setOpenSubmenu(openSubmenu === item.href ? null : item.href)}
                      className="flex items-center justify-between w-full px-4 py-3 text-left text-slate-200 font-semibold rounded-xl hover:bg-white/5"
                    >
                      {item.label}
                      <ChevronDown className={cn('w-4 h-4 transition-transform', openSubmenu === item.href && 'rotate-180')} />
                    </button>
                    {openSubmenu === item.href && (
                      <div className="pl-4 mt-1 space-y-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setMobileOpen(false)}
                            className="block px-4 py-2 text-sm text-slate-400 hover:text-orange-400 rounded-lg"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-4 py-3 text-slate-200 font-semibold rounded-xl hover:bg-white/5 hover:text-orange-400"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
