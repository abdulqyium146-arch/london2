import { ImageResponse } from 'next/og'
import { getService } from '@/data/services'
import { getLocation } from '@/data/locations'
import { getPostcode } from '@/data/postcodes'
import { getStation } from '@/data/stations'
import { isPostcodeSlug, isStationSlug, extractPostcodeFromSlug, extractStationFromSlug } from '@/lib/utils'
import { services } from '@/data/services'

export const runtime = 'edge'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

interface Props {
  params: Promise<{ slug: string }>
}

export default async function Image({ params }: Props) {
  const { slug } = await params

  let headline = 'London Locksmith'
  let subline = '24/7 · 30-Min Response · No Call-Out Fee'
  let badge = 'PROFESSIONAL SERVICE · LONDON'
  let badgeColor = 'rgba(249,115,22,0.15)'
  let badgeBorder = 'rgba(249,115,22,0.4)'
  let badgeTextColor = '#fdba74'

  if (isPostcodeSlug(slug)) {
    const code = extractPostcodeFromSlug(slug)
    const postcode = code ? getPostcode(code) : null
    headline = `Locksmith ${code ?? slug.replace('locksmith-', '').toUpperCase()}`
    subline = postcode ? `${postcode.area}, ${postcode.borough} · 24/7 Emergency Service` : '24/7 Emergency Locksmith Service'
    badge = 'POSTCODE COVERAGE'
    badgeColor = 'rgba(139,92,246,0.15)'
    badgeBorder = 'rgba(139,92,246,0.4)'
    badgeTextColor = '#c4b5fd'
  } else if (isStationSlug(slug)) {
    const stSlug = extractStationFromSlug(slug)
    const station = stSlug ? (getStation(`${stSlug}-station`) ?? getStation(stSlug ?? '')) : null
    headline = station ? `Locksmith near ${station.name}` : 'Locksmith Near Station'
    subline = station ? `${station.area} · Fast Response · Available 24/7` : '24/7 Emergency Locksmith'
    badge = 'NEAR TUBE / RAIL STATION'
    badgeColor = 'rgba(16,185,129,0.15)'
    badgeBorder = 'rgba(16,185,129,0.4)'
    badgeTextColor = '#6ee7b7'
  } else {
    for (const service of services) {
      if (slug.startsWith(`${service.slug}-`)) {
        const locationSlug = slug.slice(service.slug.length + 1)
        const location = getLocation(locationSlug)
        if (location) {
          headline = `${service.name} ${location.name}`
          subline = `${location.borough} · ${location.responseTime} Response · No Call-Out Fee`
          badge = service.emergencyService ? 'EMERGENCY SERVICE · 24/7' : 'PROFESSIONAL SERVICE · LONDON'
          badgeColor = service.emergencyService ? 'rgba(220,38,38,0.2)' : 'rgba(249,115,22,0.15)'
          badgeBorder = service.emergencyService ? 'rgba(220,38,38,0.5)' : 'rgba(249,115,22,0.4)'
          badgeTextColor = service.emergencyService ? '#fca5a5' : '#fdba74'
          break
        }
      }
    }
  }

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
        <div style={{ position: 'absolute', top: -80, right: -80, width: 360, height: 360, background: 'radial-gradient(circle, rgba(249,115,22,0.18) 0%, transparent 70%)', borderRadius: '50%' }} />

        <div style={{ display: 'flex', alignItems: 'center', gap: 8, background: badgeColor, border: `1px solid ${badgeBorder}`, borderRadius: 24, padding: '6px 18px', width: 'fit-content', marginBottom: 32 }}>
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: badgeTextColor }} />
          <span style={{ color: badgeTextColor, fontSize: 16, fontWeight: 700, letterSpacing: 2 }}>{badge}</span>
        </div>

        <div style={{ fontSize: headline.length > 40 ? 54 : 66, fontWeight: 900, color: '#ffffff', lineHeight: 1.08, marginBottom: 20, maxWidth: 900 }}>
          {headline}
        </div>
        <div style={{ fontSize: 26, color: '#94a3b8', marginBottom: 'auto' }}>{subline}</div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 40, paddingTop: 32, borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <div style={{ background: 'linear-gradient(135deg, #f97316, #dc2626)', borderRadius: 12, padding: '12px 28px' }}>
            <span style={{ fontSize: 26, fontWeight: 900, color: '#ffffff' }}>📞 +44 7984 547185</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 4 }}>
            <div style={{ color: '#fbbf24', fontSize: 22 }}>★★★★★</div>
            <span style={{ color: '#64748b', fontSize: 16 }}>4.9 · 847 Reviews · londonlocksmith.co</span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
