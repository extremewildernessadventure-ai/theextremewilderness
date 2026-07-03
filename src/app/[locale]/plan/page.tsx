import type { Metadata } from 'next'
import { getPackages } from '@/data/packages.i18n'
import { packageTags } from '@/data/packageTags'
import { getFxRates } from '@/lib/fxRates'
import { getLocale } from 'next-intl/server'
import PlanWizard from '@/components/plan/PlanWizard'

export const metadata: Metadata = {
  title: 'Craft Your Safari | The Extreme Wilderness',
  description:
    'Tell us your dates, interests and style — see 1-3 real matched Tanzania, Kenya and Rwanda itineraries with transparent pricing in under 90 seconds.',
}

export default async function PlanPage() {
  const locale = await getLocale()
  const packages = getPackages(locale)
  const fxRates = await getFxRates()

  return (
    <PlanWizard packages={packages} tags={packageTags} fxRates={fxRates} />
  )
}
