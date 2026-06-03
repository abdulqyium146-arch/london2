import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Clock } from 'lucide-react'
import { Breadcrumbs } from '@/components/seo/Breadcrumbs'
import { CTASection } from '@/components/sections/CTASection'
import { SchemaMarkup } from '@/components/seo/SchemaMarkup'
import { generateItemListSchema, generateWebPageSchema, generateBreadcrumbSchema } from '@/lib/seo/schema'
import { blogPosts } from '@/data/blog-posts'
import { formatDate } from '@/lib/utils'
import { SEO } from '@/lib/constants'

const PAGE_URL = `${SEO.siteUrl}/blog`

export const metadata: Metadata = {
  title: 'Locksmith Blog London | Security Guides & Tips | London Locksmith Pro',
  description:
    'Locksmith guides, security tips, and expert advice for London homeowners. Lock costs, burglary prevention, smart locks, and more.',
  keywords: ['locksmith blog london', 'home security tips london', 'locksmith advice london'],
  alternates: { canonical: PAGE_URL },
}

const categories = [...new Set(blogPosts.map((p) => p.category))]

export default function BlogPage() {
  const schemas = [
    generateWebPageSchema(
      'Locksmith Blog London — Security Guides & Tips',
      'Locksmith guides, security tips, and expert advice for London homeowners. Lock costs, burglary prevention, smart locks, and more.',
      PAGE_URL,
      'Blog'
    ),
    generateItemListSchema(
      'London Locksmith Blog Posts',
      PAGE_URL,
      blogPosts.map((post) => ({
        name: post.title,
        url: `${SEO.siteUrl}/blog/${post.slug}`,
        description: post.excerpt,
      }))
    ),
    generateBreadcrumbSchema([
      { name: 'Home', href: '/' },
      { name: 'Blog', href: '/blog' },
    ]),
  ]

  return (
    <>
      <SchemaMarkup schemas={schemas} />
      <section className="relative py-20 px-4 bg-hero-gradient overflow-hidden">
        <div className="absolute inset-0 bg-glow-orange opacity-30" />
        <div className="relative max-w-7xl mx-auto">
          <Breadcrumbs items={[{ name: 'Blog', href: '/blog' }]} className="mb-8" />
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-orange-400 text-sm font-semibold uppercase tracking-widest mb-4">
              Expert Guides
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Locksmith Security Guides & Advice
            </h1>
            <p className="text-lg text-slate-300">
              Expert locksmith advice for London homeowners and businesses. Pricing guides, security
              tips, lock comparisons, and more.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 mb-10">
          <span className="px-4 py-2 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-400 text-sm font-semibold">
            All
          </span>
          {categories.map((cat) => (
            <span
              key={cat}
              className="px-4 py-2 rounded-full bg-gray-800 border border-gray-700 text-slate-400 text-sm cursor-pointer hover:text-orange-400 hover:border-orange-500/40 transition-all"
            >
              {cat}
            </span>
          ))}
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group bg-[#111827] border border-gray-800 rounded-2xl overflow-hidden hover:border-orange-500/30 transition-all duration-300"
            >
              <div className="aspect-[16/9] bg-gradient-to-br from-brand-navy-mid to-[#0A1628] flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent" />
                <div className="text-4xl font-black text-white/5 text-center px-4">
                  {post.title.slice(0, 3).toUpperCase()}
                </div>
              </div>
              <div className="p-6">
                <span className="text-xs text-orange-400 font-semibold uppercase tracking-wide">
                  {post.category}
                </span>
                <h2 className="text-white font-bold mt-2 mb-3 group-hover:text-orange-400 transition-colors leading-snug">
                  {post.title}
                </h2>
                <p className="text-slate-400 text-sm line-clamp-2 leading-relaxed">{post.excerpt}</p>
                <div className="flex items-center justify-between mt-5 pt-4 border-t border-gray-800">
                  <div className="flex items-center gap-3 text-xs text-slate-500">
                    <span>{formatDate(post.publishDate)}</span>
                    <span>·</span>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-orange-400 transition-colors" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <CTASection variant="minimal" />
    </>
  )
}
