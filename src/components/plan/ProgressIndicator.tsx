'use client'

import { useTranslations } from 'next-intl'

export default function ProgressIndicator({ step }: { step: 1 | 2 | 3 | 4 }) {
  const t = useTranslations('planBuilder.progress')
  const labels = [t('step1'), t('step2'), t('step3'), t('step4')]

  return (
    <div className="flex items-center gap-2 mb-10" role="list" aria-label={t('ariaLabel')}>
      {labels.map((label, i) => {
        const n = i + 1
        const active = n === step
        const done = n < step
        return (
          <div key={label} className="flex-1 flex flex-col gap-2" role="listitem" aria-current={active ? 'step' : undefined}>
            <div
              className={`h-1.5 rounded-full transition-colors ${
                done || active ? 'bg-gold' : 'bg-gray-200'
              }`}
            />
            <span className={`text-[11px] font-semibold uppercase tracking-wide ${active ? 'text-brand' : 'text-text-muted'}`}>
              {n}. {label}
            </span>
          </div>
        )
      })}
    </div>
  )
}
