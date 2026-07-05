'use client'

import { useState } from 'react'
import type { SafariPackage } from '@/data/packages'
import type { Currency } from '@/lib/fxRates'
import AiAdvisor from './AiAdvisor'
import PlanWizard from './PlanWizard'
import type { WizardState } from './types'

export default function PlanPageClient({
  packages,
  tags,
  fxRates,
}: {
  packages: SafariPackage[]
  tags: Record<string, string[]>
  fxRates: Record<Currency, number>
}) {
  const [handoff, setHandoff] = useState<Partial<WizardState> | undefined>(undefined)

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-28 sm:pt-32">
      <AiAdvisor packages={packages} tags={tags} fxRates={fxRates} onHandoff={setHandoff} />
      <div id="guided-planner" className="scroll-mt-28">
        <PlanWizard packages={packages} tags={tags} fxRates={fxRates} initialOverrides={handoff} />
      </div>
    </div>
  )
}
