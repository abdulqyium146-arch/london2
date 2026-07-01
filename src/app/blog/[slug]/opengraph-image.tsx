import { ImageResponse } from 'next/og'
import { getBlogPost } from '@/data/blog-posts'

export const runtime = 'edge'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

interface Props {
  params: Promise<{ slug: string }>
}

export default async function Image({ params }: Props) {
  const { slug } = await params
  const post = getBlogPost(slug)
  const title = post?.title ?? 'London Locksmith Blog'
  const category = post?.category ?? 'Security Guide'
  const readTime = post?.readTime ?? '5 min read'

  const truncatedTitle = title.length > 72 ? title.slice(0, 72) + '…' : title

  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0A1628 0%, #0F2040 60%, #0A1628 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          padding: '60px 80px',
          fontFamily: 'system-ui, sans-serif',
          position: 'relative',
        }}
      >
        <div style={{ position: 'absolute', top: -60, right: -60, width: 320, height: 320, background: 'radial-gradient(circle, rgba(249,115,22,0.15) 0%, transparent 70%)', borderRadius: '50%' }} />
        <div style={{ position: 'absolute', bottom: -60, left: -60, width: 280, height: 280, background: 'radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)', borderRadius: '50%' }} />

        {/* Blog / category badge */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28 }}>
          <div style={{ background: 'rgba(249,115,22,0.15)', border: '1px solid rgba(249,115,22,0.4)', borderRadius: 20, padding: '5px 16px' }}>
            <span style={{ color: '#fdba74', fontSize: 15, fontWeight: 700, letterSpacing: 1.5 }}>LONDON LOCKSMITH BLOG</span>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.08)', borderRadius: 20, padding: '5px 14px' }}>
            <span style={{ color: '#94a3b8', fontSize: 15 }}>{category}</span>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.06)', borderRadius: 20, padding: '5px 14px' }}>
            <span style={{ color: '#64748b', fontSize: 15 }}>⏱ {readTime}</span>
          </div>
        </div>

        {/* Article title */}
        <div style={{ fontSize: truncatedTitle.length > 55 ? 46 : 56, fontWeight: 900, color: '#ffffff', lineHeight: 1.15, marginBottom: 'auto', maxWidth: 960 }}>
          {truncatedTitle}
        </div>

        {/* Bottom bar */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 32, borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'linear-gradient(135deg, #f97316, #dc2626)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontSize: 22 }}>🔐</span>
            </div>
            <div>
              <div style={{ color: '#ffffff', fontWeight: 700, fontSize: 18 }}>London Locksmith Pro</div>
              <div style={{ color: '#64748b', fontSize: 14 }}>londonlocksmith.co</div>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ color: '#fbbf24', fontSize: 20 }}>★★★★★</div>
            <span style={{ color: '#64748b', fontSize: 16 }}>4.9 · 847 Google Reviews</span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
