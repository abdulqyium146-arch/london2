import { ImageResponse } from 'next/og'
import { locations } from '@/data/locations'

export const runtime = 'edge'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

interface Props {
  params: Promise<{ location: string }>
}

export default async function Image({ params }: Props) {
  const { location: slug } = await params
  const location = locations.find((l) => l.slug === slug)
  const name = location?.name ?? 'London'
  const borough = location?.borough ?? 'Greater London'
  const postcode = location?.postcode ?? ''
  const responseTime = location?.responseTime ?? '30 minutes'

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
        <div style={{ position: 'absolute', top: -80, left: -80, width: 360, height: 360, background: 'radial-gradient(circle, rgba(59,130,246,0.2) 0%, transparent 70%)', borderRadius: '50%' }} />
        <div style={{ position: 'absolute', bottom: -60, right: -60, width: 300, height: 300, background: 'radial-gradient(circle, rgba(249,115,22,0.18) 0%, transparent 70%)', borderRadius: '50%' }} />

        {/* Location badge */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, background: 'rgba(59,130,246,0.15)', border: '1px solid rgba(59,130,246,0.4)', borderRadius: 24, padding: '6px 18px', width: 'fit-content', marginBottom: 28 }}>
          <span style={{ color: '#93c5fd', fontSize: 16, fontWeight: 700, letterSpacing: 2 }}>
            📍 {borough.toUpperCase()} {postcode ? `· ${postcode}` : ''}
          </span>
        </div>

        {/* Headline */}
        <div style={{ fontSize: 34, color: '#94a3b8', marginBottom: 12 }}>Local Locksmith</div>
        <div style={{ fontSize: 74, fontWeight: 900, color: '#ffffff', lineHeight: 1.0, marginBottom: 20 }}>
          {name}
        </div>
        <div style={{ fontSize: 26, color: '#94a3b8', marginBottom: 'auto' }}>
          {responseTime} response · Available 24/7 · No Call-Out Fee
        </div>

        {/* Bottom bar */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 40, paddingTop: 32, borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <div style={{ background: 'linear-gradient(135deg, #f97316, #dc2626)', borderRadius: 12, padding: '12px 28px' }}>
            <span style={{ fontSize: 26, fontWeight: 900, color: '#ffffff' }}>📞 +44 7984 547185</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 4 }}>
            <div style={{ display: 'flex', color: '#fbbf24', fontSize: 22 }}>★★★★★</div>
            <span style={{ color: '#64748b', fontSize: 16 }}>4.9 · 847 Reviews · londonlocksmith.co</span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
