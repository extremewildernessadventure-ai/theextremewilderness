'use client'

import { useMemo, useState } from 'react'
import { useLocale, useTranslations } from 'next-intl'
import { Loader2, Send, Sparkles, ArrowRight } from 'lucide-react'
import type { SafariPackage } from '@/data/packages'
import type { Currency } from '@/lib/fxRates'
import type { WizardState } from './types'
import { trackEvent } from '@/lib/analytics'
import ResultCard from './ResultCard'

type Phase = 'idle' | 'streaming' | 'done' | 'error' | 'rateLimited'

type StreamEvent =
  | { type: 'token'; value: string }
  | { type: 'result'; packageSlugs: string[]; reasoning?: Record<string, string> }
  | { type: 'done' }
  | { type: 'error'; message: string }

const EXAMPLE_KEYS = ['examplePrompt1', 'examplePrompt2', 'examplePrompt3'] as const

export default function AiAdvisor({
  packages,
  tags,
  fxRates,
  onHandoff,
}: {
  packages: SafariPackage[]
  tags: Record<string, string[]>
  fxRates: Record<Currency, number>
  onHandoff: (overrides: Partial<WizardState>) => void
}) {
  const t = useTranslations('planBuilder.aiAdvisor')
  const locale = useLocale()

  const [question, setQuestion] = useState('')
  const [phase, setPhase] = useState<Phase>('idle')
  const [narrative, setNarrative] = useState('')
  const [matchedSlugs, setMatchedSlugs] = useState<string[]>([])
  const [reasoning, setReasoning] = useState<Record<string, string>>({})
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const matchedPackages = useMemo(
    () => matchedSlugs.map((slug) => packages.find((p) => p.slug === slug)).filter((p): p is SafariPackage => !!p),
    [matchedSlugs, packages]
  )

  const askAi = async (q: string) => {
    const trimmed = q.trim()
    if (!trimmed || phase === 'streaming') return

    setNarrative('')
    setMatchedSlugs([])
    setReasoning({})
    setErrorMessage(null)
    setPhase('streaming')
    trackEvent('ai_advisor_ask')

    try {
      const res = await fetch('/api/travel-advice', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: trimmed, locale }),
      })

      if (!res.ok || !res.body) {
        setPhase(res.status === 429 ? 'rateLimited' : 'error')
        return
      }

      const reader = res.body.getReader()
      const decoder = new TextDecoder()
      let buffer = ''
      let resultCount = 0

      while (true) {
        const { done, value } = await reader.read()
        if (done) break
        buffer += decoder.decode(value, { stream: true })
        const lines = buffer.split('\n')
        buffer = lines.pop() ?? ''

        for (const line of lines) {
          if (!line.trim()) continue
          const event = JSON.parse(line) as StreamEvent
          if (event.type === 'token') {
            setNarrative((prev) => prev + event.value)
          } else if (event.type === 'result') {
            resultCount = event.packageSlugs.length
            setMatchedSlugs(event.packageSlugs)
            setReasoning(event.reasoning ?? {})
          } else if (event.type === 'error') {
            setErrorMessage(event.message)
          }
        }
      }

      setPhase((prev) => (prev === 'streaming' ? 'done' : prev))
      trackEvent('ai_advisor_result', { matchCount: resultCount })
    } catch {
      setPhase('error')
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    askAi(question)
  }

  const handleWizardHandoff = () => {
    const interests = Array.from(new Set(matchedPackages.flatMap((p) => tags[p.slug] ?? [])))
    trackEvent('ai_advisor_wizard_handoff', { matchCount: matchedPackages.length })
    onHandoff(interests.length ? { interests } : {})
    document.getElementById('guided-planner')?.scrollIntoView({ behavior: 'smooth' })
  }

  const isStreaming = phase === 'streaming'
  const hasAnswer = narrative.length > 0 || phase === 'done'

  return (
    <div className="mb-10 bg-white rounded-2xl border border-gray-100 p-6 sm:p-8">
      <div className="flex items-center gap-2 mb-2">
        <Sparkles className="w-5 h-5 text-gold" />
        <h2 className="text-xl sm:text-2xl font-semibold text-brand">{t('title')}</h2>
      </div>
      <p className="text-text-muted text-sm mb-5">{t('subtitle')}</p>

      <form onSubmit={handleSubmit} className="mb-4">
        <textarea
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder={t('placeholder')}
          rows={2}
          maxLength={500}
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-brand focus:outline-none focus:border-brand bg-white resize-none"
        />
        <div className="flex flex-wrap gap-2 mt-3">
          {EXAMPLE_KEYS.map((key) => (
            <button
              key={key}
              type="button"
              onClick={() => setQuestion(t(key))}
              className="text-xs px-3 py-1.5 rounded-full border border-gray-200 text-text-muted hover:border-brand hover:text-brand transition-colors"
            >
              {t(key)}
            </button>
          ))}
        </div>
        <button
          type="submit"
          disabled={isStreaming || !question.trim()}
          className="mt-4 w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 bg-gold hover:bg-gold-dark disabled:opacity-50 text-brand font-bold rounded-xl transition-colors"
        >
          {isStreaming ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" /> {t('thinkingLabel')}
            </>
          ) : (
            <>
              <Send className="w-4 h-4" /> {t('submitButton')}
            </>
          )}
        </button>
      </form>

      {phase === 'rateLimited' && (
        <div className="bg-gold/10 border border-gold/40 rounded-xl p-4 mb-4">
          <p className="text-sm text-brand">{t('rateLimitMessage')}</p>
        </div>
      )}

      {phase === 'error' && (
        <div className="bg-gold/10 border border-gold/40 rounded-xl p-4 mb-4">
          <p className="text-sm text-brand font-semibold mb-1">{t('errorTitle')}</p>
          <p className="text-sm text-text-muted mb-3">{errorMessage ?? t('errorMessage')}</p>
          <button
            type="button"
            onClick={() => askAi(question)}
            className="text-sm font-semibold text-brand hover:text-gold transition-colors"
          >
            {t('retryButton')}
          </button>
        </div>
      )}

      {hasAnswer && (
        <div aria-live="polite" className="bg-light-green rounded-2xl p-5 mb-2">
          <p className="text-sm text-brand leading-relaxed whitespace-pre-line">
            {narrative}
            {isStreaming && <span className="inline-block w-1.5 h-4 ml-0.5 -mb-0.5 bg-brand animate-pulse" />}
          </p>
        </div>
      )}

      {phase === 'done' && matchedPackages.length === 0 && (
        <div className="bg-gold/10 border border-gold/40 rounded-xl p-4 mt-4">
          <p className="text-sm text-brand font-semibold mb-1">{t('noMatchTitle')}</p>
          <p className="text-sm text-text-muted">{t('noMatchMessage')}</p>
        </div>
      )}

      {matchedPackages.length > 0 && (
        <div className="mt-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-text-muted mb-3">
            {t('resultsHeading')}
          </p>
          {matchedPackages.map((pkg, i) => (
            <ResultCard
              key={pkg.slug}
              result={{ package: pkg, score: 0, matchedTags: [], paxWarning: false }}
              isTopMatch={i === 0}
              currency="USD"
              rates={fxRates}
              reasonOverride={reasoning[pkg.slug]}
            />
          ))}
        </div>
      )}

      {phase === 'done' && (
        <button
          type="button"
          onClick={handleWizardHandoff}
          className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-gold transition-colors"
        >
          {t('wizardCta')} <ArrowRight className="w-3.5 h-3.5" />
        </button>
      )}
    </div>
  )
}
