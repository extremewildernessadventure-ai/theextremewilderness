import Link from 'next/link'

export default function DetailTwoColumn({
  backHref,
  backLabel,
  title,
  subtitle,
  main,
  sidebar,
}: {
  backHref: string
  backLabel: string
  title: string
  subtitle?: string
  main: React.ReactNode
  sidebar: React.ReactNode
}) {
  return (
    <div className="max-w-5xl">
      <Link href={backHref} className="text-sm text-gray-500 hover:text-brand mb-4 inline-block">
        ← {backLabel}
      </Link>
      <h1 className="text-2xl font-bold text-brand mb-1">{title}</h1>
      {subtitle && <p className="text-gray-500 text-sm mb-6">{subtitle}</p>}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        <div className="space-y-6">{main}</div>
        {sidebar}
      </div>
    </div>
  )
}
