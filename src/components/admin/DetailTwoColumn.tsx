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
    <div className="max-w-5xl">
      <Link href={backHref} className="text-sm text-gray-500 hover:text-brand mb-4 inline-block">
        ← {backLabel}
      </Link>
      <div className="flex items-center gap-3 mb-1">
        <h1 className="text-2xl font-bold text-brand">{title}</h1>
        {titleBadge}
      </div>
      {subtitle && <p className="text-gray-500 text-sm mb-6">{subtitle}</p>}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        <div className="space-y-6">{main}</div>
        <div className="space-y-6">{sidebar}</div>
      </div>
    </div>
  )
}
