'use client'

import { useReducer, useEffect } from 'react'
import type { SafariPackage } from '@/data/packages'
import type { MatchInput } from '@/lib/matchPackages'
import type { Currency } from '@/lib/fxRates'
import { trackEvent } from '@/lib/analytics'
import ProgressIndicator from './ProgressIndicator'
import StepBasics from './StepBasics'
import StepInterests from './StepInterests'
import StepStyle from './StepStyle'
import StepResults from './StepResults'
import type { WizardState, SetField } from './types'

type Action =
  | { type: 'SET_FIELD'; field: keyof WizardState; value: WizardState[keyof WizardState] }
  | { type: 'NEXT_STEP' }
  | { type: 'PREV_STEP' }

// Computed once at module load (not during render) to pick a sensible default
// year: if the default month (Jul) has already passed this year, default to
// next year rather than a date in the past.
const now = new Date()
const DEFAULT_YEAR = now.getMonth() > 6 ? now.getFullYear() + 1 : now.getFullYear()

const initialState: WizardState = {
  step: 1,
  pax: 2,
  month: 'Jul',
  year: DEFAULT_YEAR,
  days: 7,
  interests: [],
  style: 'luxury',
  pace: 'classic',
}

function reducer(state: WizardState, action: Action): WizardState {
  switch (action.type) {
    case 'SET_FIELD':
      return { ...state, [action.field]: action.value }
    case 'NEXT_STEP':
      return { ...state, step: (Math.min(4, state.step + 1) as WizardState['step']) }
    case 'PREV_STEP':
      return { ...state, step: (Math.max(1, state.step - 1) as WizardState['step']) }
    default:
      return state
  }
}

export default function PlanWizard({
  packages,
  tags,
  fxRates,
}: {
  packages: SafariPackage[]
  tags: Record<string, string[]>
  fxRates: Record<Currency, number>
}) {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    trackEvent('plan_step_view', { step: state.step })
  }, [state.step])

  const setField: SetField = (field, value) => dispatch({ type: 'SET_FIELD', field, value })

  const next = (extra?: Record<string, unknown>) => {
    trackEvent('plan_step_complete', { step: state.step, ...extra })
    dispatch({ type: 'NEXT_STEP' })
  }
  const back = () => dispatch({ type: 'PREV_STEP' })

  const matchInput: MatchInput = {
    days: state.days,
    month: state.month,
    interests: state.interests,
    pax: state.pax,
    style: state.style,
    pace: state.pace,
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-28 sm:pt-32 pb-16">
      <ProgressIndicator step={state.step} />

      {state.step === 1 && (
        <StepBasics
          state={state}
          setField={setField}
          onNext={() => next({ pax: state.pax, month: state.month, year: state.year, days: state.days })}
        />
      )}
      {state.step === 2 && (
        <StepInterests
          state={state}
          setField={setField}
          onNext={() => next({ interests: state.interests })}
          onBack={back}
        />
      )}
      {state.step === 3 && (
        <StepStyle
          state={state}
          setField={setField}
          packages={packages}
          onNext={() => next({ style: state.style, pace: state.pace })}
          onBack={back}
        />
      )}
      {state.step === 4 && (
        <StepResults
          state={state}
          matchInput={matchInput}
          packages={packages}
          tags={tags}
          fxRates={fxRates}
          onBack={back}
        />
      )}
    </div>
  )
}
