'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { X, ImageOff } from 'lucide-react'
import { Link } from '@/i18n/navigation'
import BookNowButton from '@/components/booking/BookNowButton'
import type { Accommodation } from '@/data/accommodations'

type Tier = 'trail' | 'reserve' | 'sovereign'
const TIERS: Tier[] = ['trail', 'reserve', 'sovereign']

interface Props {
  accommodations: Accommodation[]
}

export default function AccommodationsExplorer({ accommodations }: Props) {
  const t = useTranslations('accommodationsHub')
  const ts = useTranslations('safari')

  const [activeTier, setActiveTier] = useState<Tier>('trail')
  const [expandedSlug, setExpandedSlug] = useState<string | null>(null)
  const [activeImage, setActiveImage] = useState<Record<string, number>>({})

  const tierLabel = (tier: Tier) =>
    tier === 'trail' ? ts('tierTrail') : tier === 'reserve' ? ts('tierReserve') : ts('tierSovereign')
  const tierIntro = (tier: Tier) =>
    tier === 'trail' ? t('tierTrailIntro') : tier === 'reserve' ? t('tierReserveIntro') : t('tierSovereignIntro')

  const expandCard = useCallback((slug: string, tier: Tier) => {
    setActiveTier(tier)
    setExpandedSlug(slug)
    // Wait for the tier grid to render before scrolling to the card.
    requestAnimationFrame(() => {
      document.getElementById(slug)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  }, [])

  useEffect(() => {
    const hash = window.location.hash.replace('#', '')
    if (!hash) return
    const lodge = accommodations.find((a) => a.slug === hash)
    if (lodge) expandCard(lodge.slug, lodge.tier)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const byTier = TIERS.reduce<Record<Tier, Accommodation[]>>((acc, tier) => {
    acc[tier] = accommodations.filter((a) => a.tier === tier)
    return acc
  }, { trail: [], reserve: [], sovereign: [] })

  return (
    <div>
      <nav className="flex justify-center gap-3 flex-wrap mb-12">
        {TIERS.map((tier) => (
          <button
            key={tier}
            type="button"
            onClick={() => setActiveTier(tier)}
            className={`px-7 py-3.5 rounded-xl text-sm font-semibold uppercase tracking-wide transition-colors ${
              activeTier === tier
                ? 'bg-brand text-white'
                : 'bg-white text-text-muted border border-gray-200 hover:border-gold/50 hover:text-brand'
            }`}
          >
            {tierLabel(tier)}
          </button>
        ))}
      </nav>

      {TIERS.map((tier) => {
        const lodges = byTier[tier]
        const hasExpanded = lodges.some((l) => l.slug === expandedSlug)
        return (
          <div key={tier} className={tier !== activeTier ? 'hidden' : ''}>
            <div className="text-center max-w-2xl mx-auto mb-10">
              <h3 className="text-2xl font-bold text-brand mb-2">{tierLabel(tier)}</h3>
              <p className="text-text-muted">{tierIntro(tier)}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {lodges.map((lodge) => {
                const isExpanded = lodge.slug === expandedSlug
                const dimmed = hasExpanded && !isExpanded

                if (isExpanded) {
                  const activeIdx = activeImage[lodge.slug] ?? 0
                  const mainImage = lodge.images[activeIdx]
                  return (
                    <article
                      id={lodge.slug}
                      key={lodge.slug}
                      className="sm:col-span-2 lg:col-span-3 bg-white border border-gray-100 rounded-2xl shadow-xl overflow-hidden scroll-mt-24"
                    >
                      <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr]">
                        <div>
                          <div className="relative aspect-[16/10] bg-brand/10">
                            {mainImage ? (
                              <Image src={mainImage} alt={`${lodge.name}, ${lodge.location}`} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 60vw" />
                            ) : (
                              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-text-muted">
                                <ImageOff className="w-8 h-8" />
                                <span className="text-xs font-medium">{t('photosComingSoon')}</span>
                              </div>
                            )}
                          </div>
                          {lodge.images.length > 1 && (
                            <div className="grid gap-1.5 p-1.5" style={{ gridTemplateColumns: `repeat(${lodge.images.length}, minmax(0, 1fr))` }}>
                              {lodge.images.map((img, i) => (
                                <button
                                  key={img}
                                  type="button"
                                  onClick={() => setActiveImage((prev) => ({ ...prev, [lodge.slug]: i }))}
                                  className={`relative aspect-square overflow-hidden ${i === activeIdx ? 'ring-2 ring-gold' : 'opacity-75 hover:opacity-100'} transition-opacity`}
                                >
                                  <Image src={img} alt="" fill className="object-cover" sizes="120px" />
                                </button>
                              ))}
                            </div>
                          )}
                        </div>

                        <div className="p-7 flex flex-col">
                          <button
                            type="button"
                            onClick={() => setExpandedSlug(null)}
                            className="self-end flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-text-muted hover:text-brand transition-colors mb-3"
                          >
                            {t('closeCard')} <X className="w-3.5 h-3.5" />
                          </button>
                          <p className="text-gold-label text-xs font-semibold uppercase tracking-wide mb-2">{lodge.location}</p>
                          <h3 className="text-2xl font-bold text-brand mb-3">{lodge.name}</h3>
                          <p className="text-text-muted text-sm leading-relaxed mb-5">{lodge.description}</p>
                          <div className="flex flex-wrap gap-2 mb-6">
                            {lodge.amenities.map((a) => (
                              <span key={a} className="text-xs font-medium px-3 py-1.5 rounded-full border border-gray-200 text-brand">
                                {a}
                              </span>
                            ))}
                          </div>
                          <div className="border-t border-gray-100 pt-5 mt-auto">
                            <p className="text-gold-label text-xs font-semibold uppercase tracking-wide mb-3">{t('featuredInLabel')}</p>
                            <div className="space-y-1.5 mb-5">
                              {lodge.featuredIn.map((f) => (
                                <Link key={f.href} href={f.href} className="block text-sm text-brand hover:text-gold transition-colors">
                                  {f.label} →
                                </Link>
                              ))}
                            </div>
                            <BookNowButton
                              label={t('enquireButton')}
                              packageName={lodge.name}
                              tier={tierLabel(lodge.tier)}
                              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gold hover:bg-gold-dark text-brand font-bold rounded-xl transition-colors text-sm"
                            />
                          </div>
                        </div>
                      </div>
                    </article>
                  )
                }

                return (
                  <article
                    id={lodge.slug}
                    key={lodge.slug}
                    onClick={() => expandCard(lodge.slug, lodge.tier)}
                    className={`bg-white border border-gray-100 rounded-2xl overflow-hidden cursor-pointer transition-all hover:shadow-lg scroll-mt-24 ${
                      dimmed ? 'opacity-40 saturate-50 pointer-events-none' : ''
                    }`}
                  >
                    <div className="relative aspect-[4/3] bg-brand/10">
                      {lodge.images[0] ? (
                        <Image src={lodge.images[0]} alt={`${lodge.name}, ${lodge.location}`} fill className="object-cover" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center text-text-muted/60">
                          <ImageOff className="w-8 h-8" />
                        </div>
                      )}
                      <span className="absolute top-3 left-3 bg-brand/85 text-gold-light text-[10px] font-semibold uppercase tracking-wide px-3 py-1.5 rounded-full">
                        {tierLabel(lodge.tier)}
                      </span>
                    </div>
                    <div className="p-5">
                      <p className="text-gold-label text-[11px] font-semibold uppercase tracking-wide mb-1.5">{lodge.location}</p>
                      <h3 className="text-lg font-bold text-brand mb-2 leading-snug">{lodge.name}</h3>
                      <p className="text-text-muted text-sm leading-relaxed mb-3 line-clamp-2">{lodge.description}</p>
                      <p className="text-xs text-text-muted mb-3">{lodge.amenities.slice(0, 3).join(' · ')}</p>
                      <p className="text-xs font-semibold uppercase tracking-wide text-brand">
                        {lodge.images.length > 0 ? t('viewGallery') + ' · ' + t('photosCount', { count: lodge.images.length }) : t('photosComingSoon')}
                      </p>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        )
      })}
    </div>
  )
}
