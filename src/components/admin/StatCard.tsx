import type { LucideIcon } from 'lucide-react'
import { ArrowUp, ArrowDown } from 'lucide-react'
import Sparkline from './charts/Sparkline'

// Richer replacement for the dashboard's old local StatTile — additive
// only, the plain CSS-only .stat-card pattern used elsewhere (list pages'
// simple count tiles, the profitability report) is untouched; this is
// just for the dashboard's own new analytics row. No 'use client' here:
// only Sparkline (its one client child) needs the browser, this shell
// stays a plain Server Component.
export default function StatCard({
  icon: Icon,
  label,
  value,
  trendPercent,
  trendDirection,
  sparklineData,
  accentColor,
}: {
  icon: LucideIcon
  label: string
  value: string
  trendPercent?: number
  trendDirection?: 'up' | 'down'
  sparklineData?: { date: string; value: number }[]
  accentColor: string
}) {
  const TrendIcon = trendDirection === 'down' ? ArrowDown : ArrowUp
  // "Up" isn't always "good" (e.g. a growing unpaid-invoice total is bad
  // news going up) — callers pass trendDirection based on the raw
  // arithmetic sign, and this maps to color purely by that sign, not by
  // any per-metric "is this good" judgement, matching how the reference
  // dashboard's own badges work (green=up, red=down, full stop).
  const trendColor = trendDirection === 'down' ? 'var(--rust)' : 'var(--pine-fg)'

  return (
    <div className="stat-card" style={{ borderLeftColor: accentColor, gap: 10 }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
        <div
          style={{
            width: 32, height: 32, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center',
            background: `${accentColor}22`, color: accentColor,
          }}
        >
          <Icon size={16} />
        </div>
        {trendPercent != null && (
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 3, fontSize: 12, fontWeight: 700, color: trendColor }}>
            <TrendIcon size={13} />
            {Math.abs(trendPercent).toFixed(0)}%
          </span>
        )}
      </div>
      <div>
        <div className="stat-num">{value}</div>
        <div className="stat-label" style={{ marginTop: 2 }}>{label}</div>
      </div>
      {sparklineData && sparklineData.length > 1 && <Sparkline data={sparklineData} color={accentColor} />}
    </div>
  )
}
