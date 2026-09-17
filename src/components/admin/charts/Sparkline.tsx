'use client'

import { AreaChart, Area, ResponsiveContainer, YAxis } from 'recharts'

// A single-series trend line — no axis, no legend, no tooltip (per the
// dataviz skill: a bare stat tile's sparkline is the one chart form that
// skips the hover layer entirely, since the real number is already shown
// large right next to it on the StatCard). Thin 2px line, a soft fill
// under it so the shape still reads at a glance even at ~30px tall.
export default function Sparkline({ data, color }: { data: { date: string; value: number }[]; color: string }) {
  if (data.length === 0) return null
  const gradientId = `sparkline-${color.replace('#', '')}`
  return (
    <ResponsiveContainer width="100%" height={28}>
      <AreaChart data={data} margin={{ top: 2, right: 0, bottom: 2, left: 0 }}>
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={color} stopOpacity={0.35} />
            <stop offset="100%" stopColor={color} stopOpacity={0} />
          </linearGradient>
        </defs>
        <YAxis hide domain={['dataMin', 'dataMax']} />
        <Area
          type="monotone"
          dataKey="value"
          stroke={color}
          strokeWidth={2}
          fill={`url(#${gradientId})`}
          isAnimationActive={false}
        />
      </AreaChart>
    </ResponsiveContainer>
  )
}
