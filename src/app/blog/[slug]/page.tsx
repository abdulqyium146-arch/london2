import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Clock, Calendar, Tag, Phone, ChevronRight, MapPin } from 'lucide-react'
import { blogPosts, getBlogPost } from '@/data/blog-posts'
import { services } from '@/data/services'
import { locations } from '@/data/locations'
import { Breadcrumbs } from '@/components/seo/Breadcrumbs'
import { FAQSection } from '@/components/sections/FAQSection'
import { CTASection } from '@/components/sections/CTASection'
import { SchemaMarkup } from '@/components/seo/SchemaMarkup'
import {
  generateFAQSchema,
  generateArticleSchema,
  generateWebPageSchema,
  generateBreadcrumbSchema,
} from '@/lib/seo/schema'
import { generateBlogMetadata } from '@/lib/seo/metadata'
import { formatDate } from '@/lib/utils'
import { BUSINESS, SEO } from '@/lib/constants'

function parseInlineMarkdown(text: string): string {
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_, label, href) => {
      const isExternal = href.startsWith('http')
      const attrs = isExternal ? ' target="_blank" rel="noopener noreferrer"' : ''
      return `<a href="${href}" class="text-orange-400 hover:text-orange-300 underline underline-offset-2 transition-colors"${attrs}>${label}</a>`
    })
}

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) return {}
  return generateBlogMetadata(post)
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) notFound()

  const relatedPosts = blogPosts
    .filter((p) => post.relatedPosts.includes(p.slug))
    .slice(0, 3)

  const emergencyServices = services.filter((s) => s.emergencyService)

  const breadcrumbs = [
    { name: 'Blog', href: '/blog' },
    { name: post.title, href: `/blog/${post.slug}` },
  ]

  const postUrl = `${SEO.siteUrl}/blog/${post.slug}`
  const schemas = [
    generateArticleSchema(post),
    generateWebPageSchema(post.title, post.excerpt, postUrl, 'BlogPosting'),
    generateBreadcrumbSchema([{ name: 'Home', href: '/' }, ...breadcrumbs]),
    ...(post.faqs.length > 0 ? [generateFAQSchema(post.faqs)] : []),
  ]

  return (
    <>
      <SchemaMarkup schemas={schemas} />

      {/* Hero */}
      <section className="relative py-16 px-4 bg-hero-gradient">
        <div className="absolute inset-0 bg-glow-orange opacity-20" />
        <div className="relative max-w-4xl mx-auto">
          <Breadcrumbs items={breadcrumbs} className="mb-8" />
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs text-orange-400 font-semibold uppercase tracking-wide px-3 py-1 rounded-full bg-orange-500/20 border border-orange-500/30">
              {post.category}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              <span>{formatDate(post.publishDate)}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-4 gap-10">
          {/* Article */}
          <article className="lg:col-span-3">
            {/* Excerpt */}
            <div className="bg-orange-500/10 border border-orange-500/20 rounded-2xl p-5 mb-8">
              <p className="text-orange-200 font-medium leading-relaxed">{post.excerpt}</p>
            </div>

            {/* Content */}
            <div className="text-slate-300 space-y-4 leading-relaxed">
              {post.content.split('\n\n').map((block, i) => {
                const trimmed = block.trim()
                if (!trimmed) return null
                if (trimmed.startsWith('# ')) {
                  return <h2 key={i} className="text-3xl font-bold text-white mt-8 mb-4" dangerouslySetInnerHTML={{ __html: parseInlineMarkdown(trimmed.slice(2)) }} />
                }
                if (trimmed.startsWith('## ')) {
                  return <h3 key={i} className="text-2xl font-bold text-white mt-6 mb-3" dangerouslySetInnerHTML={{ __html: parseInlineMarkdown(trimmed.slice(3)) }} />
                }
                if (trimmed.startsWith('### ')) {
                  return <h4 key={i} className="text-xl font-semibold text-white mt-4 mb-2" dangerouslySetInnerHTML={{ __html: parseInlineMarkdown(trimmed.slice(4)) }} />
                }
                if (trimmed.startsWith('---')) {
                  return <hr key={i} className="border-gray-800 my-6" />
                }
                if (trimmed.startsWith('1. ') || trimmed.startsWith('- ')) {
                  const items = trimmed.split('\n').filter(Boolean)
                  return (
                    <ul key={i} className="space-y-2">
                      {items.map((item, j) => (
                        <li key={j} className="flex items-start gap-2">
                          <span className="text-orange-400 mt-1.5 flex-shrink-0">•</span>
                          <span dangerouslySetInnerHTML={{ __html: parseInlineMarkdown(item.replace(/^[\d]+\.\s|^-\s/, '')) }} />
                        </li>
                      ))}
                    </ul>
                  )
                }
                return (
                  <p key={i} dangerouslySetInnerHTML={{ __html: parseInlineMarkdown(trimmed) }} />
                )
              })}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-10 pt-8 border-t border-gray-800">
              {post.tags.map((tag) => (
                <div key={tag} className="flex items-center gap-1 px-3 py-1 rounded-full bg-gray-800 text-xs text-slate-400">
                  <Tag className="w-3 h-3" />
                  {tag}
                </div>
              ))}
            </div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="sticky top-28 space-y-5">
              <div className="bg-gradient-to-br from-orange-600/20 to-red-600/20 border border-orange-500/30 rounded-2xl p-5">
                <h3 className="text-white font-bold mb-2">Need a Locksmith?</h3>
                <p className="text-slate-300 text-sm mb-4">Call us 24/7 for immediate help.</p>
                <Link
                  href={BUSINESS.phoneHref}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold text-sm"
                >
                  <Phone className="w-4 h-4" />
                  {BUSINESS.phone}
                </Link>
              </div>

              {/* Emergency service internal links — topical authority */}
              <div className="bg-[#111827] border border-gray-800 rounded-2xl p-5">
                <h3 className="text-white font-bold mb-3 text-sm">Emergency Services</h3>
                <div className="space-y-2">
                  {emergencyServices.map((svc) => (
                    <Link
                      key={svc.slug}
                      href={`/services/${svc.slug}`}
                      className="flex items-center justify-between text-sm text-slate-400 hover:text-orange-400 transition-colors group"
                    >
                      <span>{svc.name}</span>
                      <ChevronRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-orange-400" />
                    </Link>
                  ))}
                  <Link
                    href="/services"
                    className="flex items-center gap-1 text-xs text-orange-400 hover:text-orange-300 mt-2 transition-colors"
                  >
                    All services →
                  </Link>
                </div>
              </div>

              {/* All services */}
              <div className="bg-[#111827] border border-gray-800 rounded-2xl p-5">
                <h3 className="text-white font-bold mb-3 text-sm">All Services</h3>
                <div className="space-y-1.5">
                  {services.map((svc) => (
                    <Link
                      key={svc.slug}
                      href={`/services/${svc.slug}`}
                      className="flex items-center justify-between text-xs text-slate-400 hover:text-orange-400 transition-colors group"
                    >
                      <span>{svc.name}</span>
                      <ChevronRight className="w-3 h-3 text-slate-600 group-hover:text-orange-400 flex-shrink-0" />
                    </Link>
                  ))}
                </div>
              </div>

              {/* Locations */}
              <div className="bg-[#111827] border border-gray-800 rounded-2xl p-5">
                <h3 className="text-white font-bold mb-3 text-sm flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-orange-400" />
                  Areas We Cover
                </h3>
                <div className="space-y-1.5">
                  {locations.slice(0, 10).map((loc) => (
                    <Link
                      key={loc.slug}
                      href={`/locations/${loc.slug}`}
                      className="flex items-center justify-between text-xs text-slate-400 hover:text-orange-400 transition-colors group"
                    >
                      <span>Locksmith {loc.name}</span>
                      <ChevronRight className="w-3 h-3 text-slate-600 group-hover:text-orange-400 flex-shrink-0" />
                    </Link>
                  ))}
                  <Link href="/areas-we-cover" className="text-xs text-orange-400 hover:text-orange-300 mt-1 block transition-colors">
                    All areas →
                  </Link>
                </div>
              </div>

              {relatedPosts.length > 0 && (
                <div className="bg-[#111827] border border-gray-800 rounded-2xl p-5">
                  <h3 className="text-white font-bold mb-4 text-sm">Related Articles</h3>
                  <div className="space-y-3">
                    {relatedPosts.map((related) => (
                      <Link
                        key={related.slug}
                        href={`/blog/${related.slug}`}
                        className="block text-slate-400 text-sm hover:text-orange-400 transition-colors leading-snug"
                      >
                        {related.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              <Link
                href="/blog"
                className="flex items-center gap-2 text-slate-400 hover:text-orange-400 transition-colors text-sm"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Blog
              </Link>
            </div>
          </aside>
        </div>
      </div>

      {post.faqs.length > 0 && (
        <FAQSection faqs={post.faqs} title="Frequently Asked Questions" includeSchema={false} />
      )}

      <CTASection variant="minimal" />
    </>
  )
}
