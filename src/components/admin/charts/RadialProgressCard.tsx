// Hand-rolled SVG ring rather than recharts' RadialBarChart — this is a
// single value against a track, not data-driven series, so a plain SVG
// circle with a stroke-dasharray offset is simpler and gives full control
// over the center label placement (recharts' RadialBarChart is built for
// comparing several bars, more machinery than one number needs here).
export default function RadialProgressCard({
  label,
  percent,
  headline,
  secondary,
  color,
}: {
  label: string
  percent: number
  headline: string
  secondary: string
  color: string
}) {
  const clamped = Math.max(0, Math.min(100, percent))
  const radius = 33
  const circumference = 2 * Math.PI * radius
  const offset = circumference * (1 - clamped / 100)

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
      <svg width={80} height={80} viewBox="0 0 80 80" style={{ flexShrink: 0 }}>
        <circle cx={40} cy={40} r={radius} fill="none" stroke="var(--sand-2)" strokeWidth={7} />
        <circle
          cx={40}
          cy={40}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={7}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          transform="rotate(-90 40 40)"
        />
        <text x={40} y={44} textAnchor="middle" fontSize={15} fontWeight={700} fill="var(--ink)" fontFamily="var(--font-jetbrains-mono), monospace">
          {Math.round(clamped)}%
        </text>
      </svg>
      <div>
        <div style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', color: 'var(--grey)', marginBottom: 4 }}>
          {label}
        </div>
        <div style={{ fontFamily: 'var(--font-jetbrains-mono), monospace', fontWeight: 700, fontSize: 19, color: 'var(--ink)' }}>
          {headline}
        </div>
        <div style={{ fontSize: 11, color: 'var(--grey)', marginTop: 2 }}>{secondary}</div>
      </div>
    </div>
  )
}
