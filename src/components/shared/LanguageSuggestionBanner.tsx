'use client'

import { useState, useEffect } from 'react'
import { X } from 'lucide-react'
import { useLocale, useTranslations } from 'next-intl'
import { usePathname, useRouter } from '@/i18n/navigation'
import { LANGUAGES, detectPreferredLocale } from '@/lib/languages'

const COOKIE_NAME = 'lang-banner-seen'
const SHOW_DELAY_MS = 1200

function getCookie(name: string): string | undefined {
  return document.cookie
    .split('; ')
    .find((row) => row.startsWith(`${name}=`))
    ?.split('=')[1]
}

function setCookie(name: string, value: string, days: number) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString()
  document.cookie = `${name}=${value}; expires=${expires}; path=/; SameSite=Lax`
}

export default function LanguageSuggestionBanner() {
  const locale = useLocale()
  const t = useTranslations('common')
  const pathname = usePathname()
  const router = useRouter()

  const [suggested, setSuggested] = useState<keyof typeof LANGUAGES | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (getCookie(COOKIE_NAME)) return
    const detected = detectPreferredLocale(navigator.languages ?? [navigator.language])
    if (!detected || detected === locale) return

    setSuggested(detected)
    const timer = setTimeout(() => setVisible(true), SHOW_DELAY_MS)
    return () => clearTimeout(timer)
  }, [locale])

  if (!suggested) return null

  const dismiss = () => {
    setVisible(false)
    setCookie(COOKIE_NAME, '1', 365)
  }

  const switchLocale = () => {
    setCookie(COOKIE_NAME, '1', 365)
    router.replace(pathname, { locale: suggested })
  }

  const lang = LANGUAGES[suggested]

  return (
    <div
      className={`fixed z-50 bottom-20 left-4 right-4 lg:left-auto lg:right-6 lg:bottom-6 lg:w-96 transition-all duration-500 ease-out ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
      role="dialog"
      aria-label={t('langBannerMessage', { language: lang.native })}
    >
      <div className="relative bg-brand rounded-2xl overflow-hidden shadow-xl ring-1 ring-white/10">
        <button
          type="button"
          onClick={dismiss}
          aria-label={t('langBannerDismiss')}
          className="absolute top-3 right-3 text-white/50 hover:text-white transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="p-5 pr-9 flex items-start gap-3">
          <span className="text-2xl leading-none flex-shrink-0 mt-0.5" aria-hidden="true">{lang.flag}</span>
          <div className="flex-1 min-w-0">
            <p className="text-gold-label text-[10px] font-bold uppercase tracking-widest mb-1.5">
              {t('langBannerEyebrow')}
            </p>
            <p className="text-white/80 text-sm leading-snug">
              {t('langBannerMessage', { language: lang.native })}
            </p>
            <button
              type="button"
              onClick={switchLocale}
              className="mt-3 inline-flex items-center gap-2 px-4 py-2.5 bg-gold hover:bg-gold-dark text-brand font-bold rounded-xl transition-colors text-sm shadow-lg shadow-gold/20"
            >
              {t('langBannerSwitch', { language: lang.native })}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
