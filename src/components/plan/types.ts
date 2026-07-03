import type { ComfortStyle, Pace } from '@/lib/matchPackages'

export interface WizardState {
  step: 1 | 2 | 3 | 4
  pax: number
  month: string
  year: number
  days: number
  interests: string[]
  style: ComfortStyle
  pace: Pace
}

export type SetField = <K extends keyof WizardState>(field: K, value: WizardState[K]) => void
