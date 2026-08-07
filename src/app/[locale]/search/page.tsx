import type { Metadata } from 'next'
import Image from 'next/image'
import { Search as SearchIcon } from 'lucide-react'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import Breadcrumb from '@/components/ui/Breadcrumb'
import { buildAlternates, buildBreadcrumbSchema } from '@/lib/site'
import { searchSite, type SearchResult, type SearchResultType } from '@/lib/search'

type Props = {
  params: Promise<{ locale: string }>
  searchParams: Promise<{ q?: string }>
}

export async function generateMetadata({ params, searchParams }: Props): Promise<Metadata> {
  const { locale } = await params
  const { q } = await searchParams
  const t = await getTranslations({ locale, namespace: 'search' })
  const query = (q ?? '').trim()
  return {
    title: query ? t('pageTitleWithQuery', { query }) : t('pageTitle'),
    description: t('pageDescription'),
    alternates: buildAlternates(locale, '/search'),
    robots: { index: false, follow: true },
  }
}

const TYPE_LABEL_KEY: Record<SearchResultType, string> = {
  safari: 'typeSafari',
  destination: 'typeDestination',
  experience: 'typeExperience',
  blog: 'typeBlog',
  faq: 'typeFaq',
  accommodation: 'typeAccommodation',
}

const TYPE_ORDER: SearchResultType[] = ['safari', 'destination', 'experience', 'accommodation', 'blog', 'faq']

export default async function SearchPage({ params, searchParams }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  const { q } = await searchParams
  const query = (q ?? '').trim()
  const t = await getTranslations('search')

  const results = query ? await searchSite(query, locale) : []
  const grouped = TYPE_ORDER.map((type) => ({
    type,
    items: results.filter((r) => r.type === type),
  })).filter((g) => g.items.length > 0)

  const breadcrumbItems = [
    { label: 'EWA Safari Outfitters', href: `/${locale}` },
    { label: t('breadcrumbLabel') },
  ]
  const breadcrumbSchema = buildBreadcrumbSchema(locale, breadcrumbItems, '/search')

  return (
    <main className="pt-32 pb-20 lg:pb-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={breadcrumbItems} />

        <form action="/search" method="get" className="relative mt-6 mb-10 max-w-xl">
          <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            name="q"
            defaultValue={query}
            placeholder={t('placeholder')}
            className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-gray-200 text-brand text-sm focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/10"
          />
        </form>

        {query && (
          <h1 className="text-2xl lg:text-3xl font-bold text-brand mb-8">
            {results.length > 0 ? t('pageHeading', { query }) : t('pageEmptyHeading', { query })}
          </h1>
        )}

        {query && results.length === 0 && (
          <p className="text-text-muted leading-relaxed max-w-xl">{t('pageEmptyBody')}</p>
        )}

        {grouped.map(({ type, items }) => (
          <section key={type} className="mb-12">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-gold-label mb-4">
              {t(TYPE_LABEL_KEY[type])}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {items.map((r: SearchResult) => (
                <Link
                  key={`${r.type}-${r.href}`}
                  href={r.href}
                  className="flex gap-4 p-4 rounded-2xl border border-gray-100 hover:border-brand/30 hover:shadow-md transition-all"
                >
                  {r.image && (
                    <div className="relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 bg-gray-100">
                      <Image src={r.image} alt="" fill className="object-cover" sizes="80px" />
                    </div>
                  )}
                  <div className="min-w-0">
                    <p className="text-brand font-semibold text-sm mb-1 line-clamp-1">{r.title}</p>
                    <p className="text-text-muted text-xs leading-relaxed line-clamp-2">{r.snippet}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  )
}
