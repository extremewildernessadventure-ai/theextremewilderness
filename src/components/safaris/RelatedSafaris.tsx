import Image from 'next/image'
import { Link } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'
import type { SafariPackage } from '@/data/packages'

export default function RelatedSafaris({ current, all }: { current: SafariPackage; all: SafariPackage[] }) {
  const t = useTranslations('safari')
  const tc = useTranslations('common')

  const related = all
    .filter(
      (p) =>
        p.slug !== current.slug &&
        (p.type === current.type || p.destinations.some((d) => current.destinations.includes(d)))
    )
    .slice(0, 3)

  if (related.length === 0) return null

  return (
    <div className="bg-light-green py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl font-semibold text-brand mb-5">{t('otherSafaris')}</h2>
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2">
          {related.map((p) => (
            <Link
              key={p.slug}
              href={`/safaris/${p.slug}`}
              className="snap-start flex-shrink-0 w-64 bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <div className="relative h-36 w-full">
                <Image src={p.heroImage} alt={p.name} fill className="object-cover" sizes="256px" />
              </div>
              <div className="p-4">
                <p className="font-semibold text-brand text-sm leading-tight">{p.name}</p>
                <p className="text-text-muted text-xs mt-1">
                  {p.duration} {tc('nights')}
                </p>
                <p className="text-gold font-bold text-sm mt-2">
                  ${p.priceFrom.toLocaleString()}{' '}
                  <span className="text-text-muted font-normal text-xs">{tc('perPerson')}</span>
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
