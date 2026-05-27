import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { MobileCTA } from '@/components/layout/MobileCTA'
import { EmergencyBanner } from '@/components/sections/EmergencyBanner'
import { SchemaMarkup } from '@/components/seo/SchemaMarkup'
import { generateBaseMetadata } from '@/lib/seo/metadata'
import {
  generateOrganizationSchema,
  generateWebsiteSchema,
} from '@/lib/seo/schema'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-geist-sans',
})

export const metadata: Metadata = generateBaseMetadata()

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const schemas = [generateOrganizationSchema(), generateWebsiteSchema()]

  return (
    <html lang="en-GB" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0A1628" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen bg-[#0A1628] text-slate-100 antialiased">
        <SchemaMarkup schemas={schemas} />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 bg-orange-500 text-white px-4 py-2 rounded"
        >
          Skip to main content
        </a>
        <EmergencyBanner />
        <Header />
        <main id="main-content" className="pt-[120px]">
          {children}
        </main>
        <Footer />
        <MobileCTA />
      </body>
    </html>
  )
}
