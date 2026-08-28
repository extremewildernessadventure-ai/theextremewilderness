import Link from 'next/link'

export default function DetailTwoColumn({
  backHref,
  backLabel,
  title,
  titleBadge,
  subtitle,
  main,
  sidebar,
}: {
  backHref: string
  backLabel: string
  title: React.ReactNode
  titleBadge?: React.ReactNode
  subtitle?: string
  main: React.ReactNode
  sidebar: React.ReactNode
}) {
  return (
    <div className="detail-page-shell">
      <Link href={backHref} className="detail-back">&larr; {backLabel}</Link>
      <div className="detail-title-row">
        <h1 style={{ fontSize: 26 }}>{title}</h1>
        {titleBadge}
      </div>
      {subtitle && <p className="detail-subtitle">{subtitle}</p>}

      <div className="detail-grid">
        <div className="detail-col">{main}</div>
        <div className="detail-col">{sidebar}</div>
      </div>
    </div>
  )
}
