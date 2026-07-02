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
  preload: true,
})

export const metadata: Metadata = {
  ...generateBaseMetadata(),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const schemas = [generateOrganizationSchema(), generateWebsiteSchema()]

  return (
    <html lang="en-GB" className={inter.variable}>
      <head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16" />
        <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0A1628" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="format-detection" content="telephone=no" />

        {/* DNS prefetch + preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://maps.googleapis.com" />

        {/* Geo tags for local SEO */}
        <meta name="geo.region" content="GB-ENG" />
        <meta name="geo.placename" content="London, United Kingdom" />
        <meta name="geo.position" content="51.5074;-0.1278" />
        <meta name="ICBM" content="51.5074, -0.1278" />

        {/* Indexing */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="bingbot" content="index, follow" />

        {/* Per-page canonical and hreflang are set via each page's metadata */}
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
