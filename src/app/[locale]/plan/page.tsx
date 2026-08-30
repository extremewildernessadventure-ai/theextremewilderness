import type { Metadata } from 'next'
import { getPackages } from '@/data/packages.i18n'
import { packageTags } from '@/data/packageTags'
import { getFxRates } from '@/lib/fxRates'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { SITE_URL, buildAlternates, buildPageTitle } from '@/lib/site'
import { CORE_KEYWORDS_BY_LOCALE } from '@/data/coreKeywords'
import PlanPageClient from '@/components/plan/PlanPageClient'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'planBuilder' })
  const title = t('metaTitle')
  const description = t('metaDescription')
  return {
    // buildPageTitle bypasses the root layout's title template (see
    // src/lib/site.ts) so this title can never get the brand suffix
    // appended twice.
    alternates: buildAlternates(locale, '/plan'),
    title: buildPageTitle(title),
    description,
    keywords: locale === 'en'
      ? [
          'AI safari planner',
          'AI travel advisor Tanzania',
          'AI safari advisor Kenya Rwanda',
          'plan Tanzania safari online',
          'Tanzania Kenya Rwanda trip planner',
          'custom safari builder',
          'safari itinerary generator',
          'build your own safari',
          'East Africa safari planning tool',
          'AI travel assistant Africa',
        ]
      : CORE_KEYWORDS_BY_LOCALE[locale as keyof typeof CORE_KEYWORDS_BY_LOCALE],
    openGraph: {
      title,
      description,
      type: 'website',
      url: `${SITE_URL}/plan`,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  }
}

export default async function PlanPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  const packages = await getPackages(locale)
  const fxRates = await getFxRates()

  return (
    <PlanPageClient packages={packages} tags={packageTags} fxRates={fxRates} />
  )
}
