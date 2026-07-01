import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = "London's #1 Emergency Locksmith | 24/7 | No Call-Out Fee"
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0A1628 0%, #0F2040 50%, #0A1628 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'system-ui, sans-serif',
          position: 'relative',
        }}
      >
        {/* Orange glow top-left */}
        <div style={{ position: 'absolute', top: -100, left: -100, width: 400, height: 400, background: 'radial-gradient(circle, rgba(249,115,22,0.25) 0%, transparent 70%)', borderRadius: '50%' }} />
        {/* Orange glow bottom-right */}
        <div style={{ position: 'absolute', bottom: -100, right: -100, width: 400, height: 400, background: 'radial-gradient(circle, rgba(249,115,22,0.15) 0%, transparent 70%)', borderRadius: '50%' }} />

        {/* Trust badge */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, background: 'rgba(249,115,22,0.2)', border: '1px solid rgba(249,115,22,0.4)', borderRadius: 24, padding: '8px 20px', marginBottom: 24 }}>
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#22c55e' }} />
          <span style={{ color: '#fdba74', fontSize: 18, fontWeight: 700, letterSpacing: 2 }}>AVAILABLE NOW — 24/7</span>
        </div>

        {/* Main headline */}
        <div style={{ fontSize: 62, fontWeight: 900, color: '#ffffff', textAlign: 'center', lineHeight: 1.1, marginBottom: 16, maxWidth: 900 }}>
          London&apos;s #1 Emergency Locksmith
        </div>

        {/* Sub-headline */}
        <div style={{ fontSize: 28, color: '#94a3b8', textAlign: 'center', marginBottom: 40 }}>
          30-Min Response · No Call-Out Fee · All 32 Boroughs
        </div>

        {/* Phone CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, background: 'linear-gradient(135deg, #f97316, #dc2626)', borderRadius: 16, padding: '18px 40px' }}>
          <span style={{ fontSize: 36, fontWeight: 900, color: '#ffffff' }}>📞 +44 7984 547185</span>
        </div>

        {/* Rating bar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 24, marginTop: 40, color: '#64748b', fontSize: 20 }}>
          <span style={{ color: '#fbbf24' }}>★★★★★</span>
          <span>4.9 · 847 Google Reviews</span>
          <span>·</span>
          <span>londonlocksmith.co</span>
        </div>
      </div>
    ),
    { ...size }
  )
}
