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
  const radius = 42
  const circumference = 2 * Math.PI * radius
  const offset = circumference * (1 - clamped / 100)

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
      <svg width={100} height={100} viewBox="0 0 100 100" style={{ flexShrink: 0 }}>
        <circle cx={50} cy={50} r={radius} fill="none" stroke="var(--sand-2)" strokeWidth={9} />
        <circle
          cx={50}
          cy={50}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={9}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          transform="rotate(-90 50 50)"
        />
        <text x={50} y={54} textAnchor="middle" fontSize={18} fontWeight={700} fill="var(--ink)" fontFamily="var(--font-jetbrains-mono), monospace">
          {Math.round(clamped)}%
        </text>
      </svg>
      <div>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', color: 'var(--grey)', marginBottom: 6 }}>
          {label}
        </div>
        <div style={{ fontFamily: 'var(--font-jetbrains-mono), monospace', fontWeight: 700, fontSize: 22, color: 'var(--ink)' }}>
          {headline}
        </div>
        <div style={{ fontSize: 11.5, color: 'var(--grey)', marginTop: 2 }}>{secondary}</div>
      </div>
    </div>
  )
}
