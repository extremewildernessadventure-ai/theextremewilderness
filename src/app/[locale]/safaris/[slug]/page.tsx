import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { Link } from '@/i18n/navigation'
import { getTranslations } from 'next-intl/server'
import { Clock, Users, Check, X, ChevronDown } from 'lucide-react'
import Badge from '@/components/shared/Badge'
import BookNowButton from '@/components/booking/BookNowButton'
import { packages } from '@/data/packages'
import { routing } from '@/i18n/routing'

interface Props {
  params: Promise<{ locale: string; slug: string }>
}

export async function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    packages.map((p) => ({ locale, slug: p.slug }))
  )
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const pkg = packages.find((p) => p.slug === slug)
  if (!pkg) return {}
  return {
    title: `${pkg.name} | Tanzania Safari`,
    description: `${pkg.name} — ${pkg.duration} nights starting from $${pkg.priceFrom.toLocaleString()}/person. ${pkg.highlights[0]}.`,
  }
}

export default async function SafariPackagePage({ params }: Props) {
  const { slug } = await params
  const pkg = packages.find((p) => p.slug === slug)
  if (!pkg) notFound()

  const t = await getTranslations('safari')
  const tc = await getTranslations('common')

  return (
    <>
      {/* Hero */}
      <section className="relative h-[55vh] min-h-80 bg-brand flex items-end">
        <Image src={pkg.heroImage} alt={pkg.name} fill className="object-cover" priority sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand/80 via-brand/20 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 w-full">
          <div className="flex items-start justify-between flex-wrap gap-4">
            <div>
              {pkg.badge && (
                <div className="mb-2">
                  <Badge label={pkg.badge === 'bestseller' ? tc('bestseller') : pkg.badge === 'new' ? tc('new') : tc('popular')} />
                </div>
              )}
              <h1 className="text-3xl lg:text-4xl font-semibold text-white">{pkg.name}</h1>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl px-5 py-3 text-center border border-white/20">
              <div className="text-white/70 text-xs uppercase tracking-wide">{tc('from')}</div>
              <div className="text-white font-bold text-2xl">${pkg.priceFrom.toLocaleString()}</div>
              <div className="text-white/60 text-xs">{tc('perPerson')}</div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-10">
            {/* Quick info */}
            <div className="flex flex-wrap gap-5 text-sm">
              <div className="flex items-center gap-2 text-text-muted">
                <Clock className="w-4 h-4 text-gold" />
                <span><strong className="text-brand">{pkg.duration} {tc('nights')}</strong> {t('duration')}</span>
              </div>
              <div className="flex items-center gap-2 text-text-muted">
                <Users className="w-4 h-4 text-gold" />
                <span>{t('groupsOf')} <strong className="text-brand">{pkg.groupSize.min}–{pkg.groupSize.max}</strong></span>
              </div>
            </div>

            {/* Highlights */}
            <div>
              <h2 className="text-xl font-semibold text-brand mb-4">{t('packageHighlights')}</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {pkg.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2 text-sm text-text-muted">
                    <Check className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            {/* Itinerary */}
            {pkg.itinerary.length > 0 && (
              <div>
                <h2 className="text-xl font-semibold text-brand mb-5">{t('dayByDayItinerary')}</h2>
                <div className="space-y-3">
                  {pkg.itinerary.map((day) => (
                    <details key={day.day} className="group border border-gray-100 rounded-xl overflow-hidden">
                      <summary className="flex items-center justify-between p-4 cursor-pointer bg-white hover:bg-light-green transition-colors list-none">
                        <div className="flex items-center gap-3">
                          <span className="w-8 h-8 rounded-full bg-brand text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                            {day.day}
                          </span>
                          <span className="font-medium text-brand text-sm">{day.title}</span>
                        </div>
                        <ChevronDown className="w-4 h-4 text-text-muted group-open:rotate-180 transition-transform" />
                      </summary>
                      <div className="px-4 pb-4 pt-2 bg-white border-t border-gray-100">
                        <p className="text-sm text-text-muted leading-relaxed mb-3">{day.description}</p>
                        <div className="flex flex-wrap gap-4 text-xs text-text-muted">
                          <span>{day.accommodation}</span>
                          <span>{day.meals}</span>
                        </div>
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            )}

            {/* Included / Excluded */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-brand mb-3 flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-500" /> {t('included')}
                </h3>
                <ul className="space-y-1.5">
                  {pkg.included.map((item) => (
                    <li key={item} className="text-sm text-text-muted flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-green-500 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-brand mb-3 flex items-center gap-2">
                  <X className="w-4 h-4 text-red-400" /> {t('notIncluded')}
                </h3>
                <ul className="space-y-1.5">
                  {pkg.excluded.map((item) => (
                    <li key={item} className="text-sm text-text-muted flex items-start gap-2">
                      <X className="w-3.5 h-3.5 text-red-400 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div>
            <div className="sticky top-24 space-y-4">
              <div className="bg-light-green rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold text-brand">${pkg.priceFrom.toLocaleString()}</div>
                <div className="text-text-muted text-xs mt-1">{tc('perPerson')} · {pkg.duration} {tc('nights')}</div>
              </div>
              <div className="bg-brand rounded-2xl p-6 text-center space-y-4">
                <div>
                  <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-1">{t('freeNoCommitment')}</p>
                  <h3 className="text-white font-bold text-lg">{t('bookThisPackage')}</h3>
                  <p className="text-white/60 text-xs mt-1">{t('responseNote')}</p>
                </div>
                <BookNowButton
                  label={t('sendEnquiry')}
                  packageName={pkg.name}
                  packageType={pkg.type}
                  priceFrom={`$${pkg.priceFrom.toLocaleString()}`}
                  duration={`${pkg.duration} ${tc('nights')}`}
                  className="w-full flex items-center justify-center gap-2 py-3.5 bg-gold hover:bg-gold-dark text-brand font-bold rounded-xl transition-colors text-sm"
                />
                <p className="text-white/40 text-xs">{t('noPayment')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
