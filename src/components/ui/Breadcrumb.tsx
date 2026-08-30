import Link from 'next/link'
import { getTranslations } from 'next-intl/server'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
  locale: string
}

export default async function Breadcrumb({ items, locale }: BreadcrumbProps) {
  const tc = await getTranslations({ locale, namespace: 'common' })
  return (
    <nav aria-label={tc('breadcrumbNav')} className="mb-4">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        {items.map((item, i) => {
          const isLast = i === items.length - 1
          return (
            <li key={i} className="flex items-center gap-x-2">
              {i > 0 && (
                <span className="text-white/40 text-xs select-none" aria-hidden>·</span>
              )}
              {isLast || !item.href ? (
                <span className={`text-xs tracking-wide ${isLast ? 'text-white/90 font-medium' : 'text-white/55'}`}>
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="text-xs tracking-wide text-white/55 hover:text-white/90 transition-colors"
                >
                  {item.label}
                </Link>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
