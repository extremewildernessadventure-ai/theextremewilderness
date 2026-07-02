'use client'

import { useTranslations } from 'next-intl'

function ratingLabel(r: number, t: (key: string) => string) {
  if (r >= 5) return t('peak')
  if (r === 4) return t('great')
  if (r === 3) return t('good')
  if (r === 2) return t('low')
  return t('avoid')
}

function safariBarColor(r: number) {
  if (r >= 5) return 'bg-brand'
  if (r === 4) return 'bg-brand/60'
  if (r === 3) return 'bg-brand/30'
  return 'bg-gray-100 border border-gray-200'
}

function kiliBarColor(r: number) {
  if (r >= 5) return 'bg-gold'
  if (r === 4) return 'bg-gold/60'
  if (r === 3) return 'bg-gold/30'
  if (r === 2) return 'bg-gray-200'
  return 'bg-gray-100 border border-gray-200'
}

export default function TravelByMonth() {
  const t = useTranslations('home')

  const months = [
    { name: t('jan'), rating: 4, bestFor: [t('janBf0'), t('janBf1')] },
    { name: t('feb'), rating: 5, bestFor: [t('febBf0'), t('febBf1')] },
    { name: t('mar'), rating: 3, bestFor: [t('marBf0'), t('marBf1')] },
    { name: t('apr'), rating: 2, bestFor: [t('aprBf0'), t('aprBf1')] },
    { name: t('may'), rating: 2, bestFor: [t('mayBf0'), t('mayBf1')] },
    { name: t('jun'), rating: 4, bestFor: [t('junBf0'), t('junBf1')] },
    { name: t('jul'), rating: 5, bestFor: [t('julBf0'), t('julBf1')] },
    { name: t('aug'), rating: 5, bestFor: [t('augBf0'), t('augBf1')] },
    { name: t('sep'), rating: 5, bestFor: [t('sepBf0'), t('sepBf1')] },
    { name: t('oct'), rating: 4, bestFor: [t('octBf0'), t('octBf1')] },
    { name: t('nov'), rating: 3, bestFor: [t('novBf0'), t('novBf1')] },
    { name: t('dec'), rating: 4, bestFor: [t('decBf0'), t('decBf1')] },
  ]

  const kiliData = [
    { name: t('jan'), rating: 5 },
    { name: t('feb'), rating: 5 },
    { name: t('mar'), rating: 3 },
    { name: t('apr'), rating: 1 },
    { name: t('may'), rating: 1 },
    { name: t('jun'), rating: 3 },
    { name: t('jul'), rating: 5 },
    { name: t('aug'), rating: 5 },
    { name: t('sep'), rating: 5 },
    { name: t('oct'), rating: 4 },
    { name: t('nov'), rating: 2 },
    { name: t('dec'), rating: 4 },
  ]

  return (
    <section className="py-20 bg-light-green">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <span className="inline-block text-gold-label font-semibold text-xs uppercase tracking-widest mb-3">
            {t('planTiming')}
          </span>
          <h2 className="text-3xl lg:text-4xl font-semibold text-brand mb-4">
            {t('whenToSafari')}
          </h2>
          <p className="text-text-muted max-w-xl mx-auto text-sm">
            {t('timingDesc')}
          </p>
        </div>

        {/* Month grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 mb-12">
          {months.map((month) => (
            <div
              key={month.name}
              className={`bg-white rounded-xl p-4 border transition-all duration-200 hover:border-gold hover:shadow-md cursor-default ${
                month.rating >= 5 ? 'border-gold/40' : 'border-gray-100'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-brand text-sm">{month.name}</span>
                <span
                  className={`text-xs font-semibold px-1.5 py-0.5 rounded-full ${
                    month.rating >= 5
                      ? 'bg-amber-100 text-amber-800'
                      : month.rating === 4
                      ? 'bg-brand/10 text-brand'
                      : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  {ratingLabel(month.rating, t)}
                </span>
              </div>

              {/* Rating dots */}
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: 5 }).map((_, j) => (
                  <div
                    key={j}
                    className={`w-2.5 h-2.5 rounded-full ${j < month.rating ? 'bg-gold' : 'bg-gray-200'}`}
                  />
                ))}
              </div>

              {/* Best-for tags */}
              <div className="flex flex-col gap-0.5">
                {month.bestFor.map((tag) => (
                  <span key={tag} className="text-xs text-text-muted leading-tight">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Trackers — side by side on larger screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          {/* Great Migration tracker */}
          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
            <div className="mb-4">
              <span className="text-gold-label font-semibold text-xs uppercase tracking-widest">
                {t('migrationTracker')}
              </span>
              <p className="text-xs text-text-muted mt-0.5">{t('migrationTrackerSub')}</p>
            </div>

            <div className="flex gap-1">
              {months.map((month) => (
                <div key={month.name} className="flex-1 flex flex-col items-center gap-1.5">
                  <div
                    className={`w-full rounded h-8 transition-colors ${safariBarColor(month.rating)}`}
                    title={`${month.name}: ${ratingLabel(month.rating, t)} season`}
                  />
                  <span className="text-xs text-text-muted">{month.name}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3 mt-4 text-xs text-text-muted">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded bg-brand" />
                <span>{t('peakMigration')}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded bg-brand/60" />
                <span>{t('greatConditions')}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded bg-brand/30" />
                <span>{t('goodValue')}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded bg-gray-100 border border-gray-200" />
                <span>{t('lowSeason')}</span>
              </div>
            </div>

            {/* Key insight callout */}
            <div className="mt-4 px-3 py-2.5 bg-light-green rounded-lg border border-brand/10">
              <p className="text-xs text-brand leading-snug">
                {t('migrationBestWindows')}
              </p>
            </div>
          </div>

          {/* Kilimanjaro trekking tracker */}
          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
            <div className="mb-4">
              <span className="text-gold-label font-semibold text-xs uppercase tracking-widest">
                {t('kiliTracker')}
              </span>
              <p className="text-xs text-text-muted mt-0.5">{t('kiliTrackerSub')}</p>
            </div>

            <div className="flex gap-1">
              {kiliData.map((month) => (
                <div key={month.name} className="flex-1 flex flex-col items-center gap-1.5">
                  <div
                    className={`w-full rounded h-8 transition-colors ${kiliBarColor(month.rating)}`}
                    title={`${month.name}: ${ratingLabel(month.rating, t)}`}
                  />
                  <span className="text-xs text-text-muted">{month.name}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3 mt-4 text-xs text-text-muted">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded bg-gold" />
                <span>{t('highSuccessRate')}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded bg-gold/60" />
                <span>{t('goodConditions')}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded bg-gold/30" />
                <span>{t('variable')}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded bg-gray-100 border border-gray-200" />
                <span>{t('rainyAvoid')}</span>
              </div>
            </div>

            {/* Key insight callout */}
            <div className="mt-4 px-3 py-2.5 bg-light-green rounded-lg border border-brand/10">
              <p className="text-xs text-brand leading-snug">
                {t('kiliBestWindows')}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
