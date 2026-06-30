'use client'

import { useLocale } from 'next-intl'
import { usePathname, useRouter } from '@/i18n/navigation'
import { routing } from '@/i18n/routing'

const LABELS: Record<string, string> = {
  en: 'EN',
  fr: 'FR',
  es: 'ES',
  de: 'DE',
}

export default function LanguageSwitcher() {
  const locale = useLocale()
  const pathname = usePathname()
  const router = useRouter()

  function switchLocale(next: string) {
    router.replace(pathname, { locale: next })
  }

  return (
    <div className="flex items-center gap-1" role="navigation" aria-label="Language switcher">
      {routing.locales.map((l, i) => (
        <span key={l} className="flex items-center">
          <button
            onClick={() => switchLocale(l)}
            aria-label={`Switch to ${l.toUpperCase()}`}
            aria-pressed={locale === l}
            className={`px-2 py-1 rounded text-xs font-semibold transition-all ${
              locale === l
                ? 'bg-brand text-white'
                : 'text-brand/60 hover:text-brand hover:bg-brand/10'
            }`}
          >
            {LABELS[l]}
          </button>
          {i < routing.locales.length - 1 && (
            <span className="text-brand/20 text-xs select-none">|</span>
          )}
        </span>
      ))}
    </div>
  )
}
