'use client'

import { useState, useEffect, useRef } from 'react'
import { Globe, ChevronDown, Check } from 'lucide-react'
import { useLocale } from 'next-intl'
import { usePathname, useRouter } from '@/i18n/navigation'
import { routing } from '@/i18n/routing'

const LANGUAGES: Record<string, { code: string; native: string; flag: string }> = {
  en: { code: 'EN', native: 'English', flag: '🇬🇧' },
  fr: { code: 'FR', native: 'Français', flag: '🇫🇷' },
  es: { code: 'ES', native: 'Español', flag: '🇪🇸' },
  de: { code: 'DE', native: 'Deutsch', flag: '🇩🇪' },
}

export default function LanguageSwitcher() {
  const locale = useLocale()
  const pathname = usePathname()
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [])

  function switchLocale(next: string) {
    router.replace(pathname, { locale: next })
    setOpen(false)
  }

  return (
    <div ref={ref} className="relative" role="navigation" aria-label="Language switcher">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-all text-sm font-medium"
      >
        <Globe className="w-3.5 h-3.5" />
        <span className="font-semibold tracking-wide">
          {LANGUAGES[locale]?.code ?? locale.toUpperCase()}
        </span>
        <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <div
          role="listbox"
          className="absolute right-0 top-full mt-2 w-52 bg-brand rounded-2xl shadow-2xl border border-white/10 overflow-hidden z-50"
        >
          <div className="px-4 py-3 border-b border-white/10 flex items-center gap-2">
            <Globe className="w-3.5 h-3.5 text-gold" />
            <span className="text-gold text-[10px] font-bold uppercase tracking-[0.15em]">
              Language
            </span>
          </div>
          {routing.locales.map((l) => (
            <button
              key={l}
              role="option"
              aria-selected={locale === l}
              onClick={() => switchLocale(l)}
              className={`w-full flex items-center gap-3 px-4 py-3 text-left border-b border-white/5 last:border-0 transition-colors ${
                locale === l ? 'bg-white/10' : 'hover:bg-white/5'
              }`}
            >
              <span className="text-lg flex-shrink-0">{LANGUAGES[l].flag}</span>
              <span className={`text-sm flex-1 ${locale === l ? 'text-gold font-semibold' : 'text-white/80'}`}>
                {LANGUAGES[l].native}
              </span>
              {locale === l && <Check className="w-3.5 h-3.5 text-gold flex-shrink-0" />}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
