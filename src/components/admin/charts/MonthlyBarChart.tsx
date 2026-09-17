'use client'

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from 'recharts'
import { CHART_GOOD, CHART_WARNING } from './chartColors'

interface MonthDatum {
  month: string
  revenue: number
  bookings: number
}

const AXIS_STYLE = { fontSize: 11, fill: 'var(--grey)' }

// Two single-axis small multiples sharing one set of month labels, NOT
// one dual-axis chart — the dataviz skill's #1 anti-pattern is exactly a
// two-y-scale bar/line chart (revenue in dollars and bookings as a raw
// count have wildly different scales and units; forcing them onto one
// axis would either flatten one series or mislead on relative size).
// Revenue and Bookings each get their own recessive-grid single-axis
// panel instead, reusing the same brand-consistent chart colors the
// Order Status donut uses (green = the healthy/primary metric, gold =
// the secondary one) so the whole dashboard reads as one palette.
function MiniBarPanel({ title, data, dataKey, color, formatValue }: {
  title: string
  data: MonthDatum[]
  dataKey: 'revenue' | 'bookings'
  color: string
  formatValue: (v: number) => string
}) {
  return (
    <div style={{ flex: 1, minWidth: 0 }}>
      <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', color: 'var(--grey)', marginBottom: 6 }}>
        {title}
      </div>
      <ResponsiveContainer width="100%" height={132}>
        <BarChart data={data} margin={{ top: 4, right: 4, bottom: 0, left: 0 }}>
          <CartesianGrid vertical={false} stroke="var(--line)" />
          <XAxis dataKey="month" tick={AXIS_STYLE} axisLine={{ stroke: 'var(--line)' }} tickLine={false} />
          <YAxis tick={AXIS_STYLE} axisLine={false} tickLine={false} width={40} tickFormatter={formatValue} />
          <Tooltip
            formatter={(value) => formatValue(Number(value) || 0)}
            contentStyle={{ background: 'var(--white)', border: '1px solid var(--line)', borderRadius: 8, color: 'var(--ink)', fontSize: 12.5 }}
            cursor={{ fill: 'var(--sand-2)' }}
          />
          <Bar dataKey={dataKey} fill={color} radius={[4, 4, 0, 0]} isAnimationActive={false} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default function MonthlyBarChart({ data }: { data: MonthDatum[] }) {
  return (
    <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
      <MiniBarPanel title="Revenue (USD)" data={data} dataKey="revenue" color={CHART_GOOD} formatValue={(v) => `$${Math.round(v / 1000)}k`} />
      <MiniBarPanel title="Bookings" data={data} dataKey="bookings" color={CHART_WARNING} formatValue={(v) => `${v}`} />
    </div>
  )
}
