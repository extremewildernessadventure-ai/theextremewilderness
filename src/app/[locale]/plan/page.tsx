import type { Metadata } from 'next'
import { getPackages } from '@/data/packages.i18n'
import { packageTags } from '@/data/packageTags'
import { getFxRates } from '@/lib/fxRates'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { SITE_URL, buildAlternates } from '@/lib/site'
import PlanPageClient from '@/components/plan/PlanPageClient'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'planBuilder' })
  const title = t('metaTitle')
  const description = t('metaDescription')
  return {
    // Root layout's title template already appends "" —
    // repeating it here previously produced a doubled "... | The Extreme
    // Wilderness" browser-tab/SERP title.
    alternates: buildAlternates(locale, '/plan'),
    title,
    description,
    keywords: [
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
    ],
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
  const packages = getPackages(locale)
  const fxRates = await getFxRates()

  return (
    <PlanPageClient packages={packages} tags={packageTags} fxRates={fxRates} />
  )
}
