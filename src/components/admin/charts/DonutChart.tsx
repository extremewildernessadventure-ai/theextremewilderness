'use client'

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts'

interface Slice {
  label: string
  value: number
  color: string
}

// Center total + a color-coded legend with %s, per the reference's "Order
// Status" widget. Direct-labeled legend (not just a color key) so
// identity is never color-alone — required by the dataviz skill for any
// chart using 2+ series, and doubly relevant here since the chart-color
// palette's "critical" slot has a contrast WARN vs the dark surface that
// specifically requires this kind of visible-label mitigation.
export default function DonutChart({
  data,
  centerLabel,
  centerValue,
}: {
  data: Slice[]
  centerLabel: string
  centerValue: string | number
}) {
  const total = data.reduce((sum, d) => sum + d.value, 0)

  return (
    <div style={{ position: 'relative' }}>
      <ResponsiveContainer width="100%" height={220}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="label"
            cx="50%"
            cy="50%"
            innerRadius={62}
            outerRadius={88}
            paddingAngle={total > 0 ? 3 : 0}
            stroke="none"
            isAnimationActive={false}
          >
            {data.map((slice) => (
              <Cell key={slice.label} fill={slice.color} />
            ))}
          </Pie>
          <Tooltip
            formatter={(value, name) => {
              const n = Number(value) || 0
              return [`${n} (${total > 0 ? Math.round((n / total) * 100) : 0}%)`, name]
            }}
            contentStyle={{ background: 'var(--white)', border: '1px solid var(--line)', borderRadius: 8, color: 'var(--ink)', fontSize: 12.5 }}
          />
          <Legend
            verticalAlign="bottom"
            iconType="circle"
            iconSize={8}
            formatter={(value: string) => <span style={{ color: 'var(--grey)', fontSize: 12.5 }}>{value}</span>}
          />
        </PieChart>
      </ResponsiveContainer>
      <div
        style={{
          position: 'absolute', top: '42%', left: '50%', transform: 'translate(-50%, -50%)',
          textAlign: 'center', pointerEvents: 'none',
        }}
      >
        <div style={{ fontFamily: 'var(--font-jetbrains-mono), monospace', fontWeight: 700, fontSize: 26, color: 'var(--ink)' }}>
          {centerValue}
        </div>
        <div style={{ fontSize: 11.5, color: 'var(--grey)' }}>{centerLabel}</div>
      </div>
    </div>
  )
}
