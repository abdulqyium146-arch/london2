import { ImageResponse } from 'next/og'
import { services } from '@/data/services'

export const runtime = 'edge'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

interface Props {
  params: Promise<{ service: string }>
}

export default async function Image({ params }: Props) {
  const { service: slug } = await params
  const service = services.find((s) => s.slug === slug)
  const name = service?.name ?? 'Locksmith Service'
  const isEmergency = service?.emergencyService ?? false
  const price = service?.priceFrom ? `From £${service.priceFrom}` : 'Call for Price'

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
        <div style={{ position: 'absolute', top: -80, right: -80, width: 360, height: 360, background: 'radial-gradient(circle, rgba(249,115,22,0.2) 0%, transparent 70%)', borderRadius: '50%' }} />

        {/* Badge */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, background: isEmergency ? 'rgba(220,38,38,0.2)' : 'rgba(249,115,22,0.15)', border: `1px solid ${isEmergency ? 'rgba(220,38,38,0.5)' : 'rgba(249,115,22,0.4)'}`, borderRadius: 24, padding: '6px 18px', width: 'fit-content', marginBottom: 32 }}>
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: isEmergency ? '#ef4444' : '#f97316' }} />
          <span style={{ color: isEmergency ? '#fca5a5' : '#fdba74', fontSize: 16, fontWeight: 700, letterSpacing: 2 }}>
            {isEmergency ? 'EMERGENCY SERVICE · 24/7' : 'PROFESSIONAL SERVICE · LONDON'}
          </span>
        </div>

        {/* Service name */}
        <div style={{ fontSize: 68, fontWeight: 900, color: '#ffffff', lineHeight: 1.05, marginBottom: 20, maxWidth: 800 }}>
          {name}
        </div>
        <div style={{ fontSize: 26, color: '#94a3b8', marginBottom: 'auto' }}>
          London · 30-Min Response · No Call-Out Fee · Fully Insured
        </div>

        {/* Bottom bar */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 40, paddingTop: 32, borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <div style={{ background: 'linear-gradient(135deg, #f97316, #dc2626)', borderRadius: 12, padding: '12px 24px' }}>
              <span style={{ fontSize: 24, fontWeight: 900, color: '#ffffff' }}>📞 +44 7984 547185</span>
            </div>
            <span style={{ fontSize: 20, color: '#64748b' }}>{price}</span>
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
