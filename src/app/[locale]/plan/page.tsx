import type { Metadata } from 'next'
import { getPackages } from '@/data/packages.i18n'
import { packageTags } from '@/data/packageTags'
import { getFxRates } from '@/lib/fxRates'
import { setRequestLocale } from 'next-intl/server'
import { SITE_URL, buildAlternates } from '@/lib/site'
import PlanPageClient from '@/components/plan/PlanPageClient'

const TITLE = 'AI Safari Planner | Craft Your Safari'
const DESCRIPTION =
  'Ask our AI Safari Advisor anything about Tanzania, Kenya or Rwanda, then fine-tune with our 90-second guided planner — see real matched itineraries with transparent pricing, no invented tours.'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  return {
    // Root layout's title template already appends " | The Extreme Wilderness" —
    // repeating it here previously produced a doubled "... | The Extreme
    // Wilderness | The Extreme Wilderness" browser-tab/SERP title.
    alternates: buildAlternates(locale, '/plan'),
    title: TITLE,
    description: DESCRIPTION,
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
      title: TITLE,
      description: DESCRIPTION,
      type: 'website',
      url: `${SITE_URL}/plan`,
    },
    twitter: {
      card: 'summary_large_image',
      title: TITLE,
      description: DESCRIPTION,
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
