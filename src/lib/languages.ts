export const LANGUAGES: Record<string, { code: string; native: string; flag: string }> = {
  en: { code: 'EN', native: 'English', flag: '🇬🇧' },
  fr: { code: 'FR', native: 'Français', flag: '🇫🇷' },
  es: { code: 'ES', native: 'Español', flag: '🇪🇸' },
  de: { code: 'DE', native: 'Deutsch', flag: '🇩🇪' },
  ru: { code: 'RU', native: 'Русский', flag: '🇷🇺' },
  zh: { code: 'ZH', native: '简体中文', flag: '🇨🇳' },
  'zh-TW': { code: 'TW', native: '繁體中文', flag: '🇹🇼' },
  it: { code: 'IT', native: 'Italiano', flag: '🇮🇹' },
  nl: { code: 'NL', native: 'Nederlands', flag: '🇳🇱' },
  pt: { code: 'PT', native: 'Português', flag: '🇵🇹' },
  ja: { code: 'JA', native: '日本語', flag: '🇯🇵' },
  ko: { code: 'KO', native: '한국어', flag: '🇰🇷' },
}

// Maps a browser navigator.language tag (e.g. "fr-FR", "zh-Hant-TW", "pt-BR")
// to one of our supported locale keys, or null if none match. Checked in this
// order: exact match, then the base subtag (before the first "-"), with
// Chinese needing its own script-aware branch since "zh" alone is ambiguous
// between Simplified and Traditional.
export function matchBrowserLocale(tag: string): keyof typeof LANGUAGES | null {
  const lower = tag.toLowerCase()

  if (lower.startsWith('zh')) {
    // Traditional: zh-tw, zh-hk, zh-mo, zh-hant*
    if (/^zh-(tw|hk|mo)\b/.test(lower) || lower.includes('hant')) return 'zh-TW'
    return 'zh'
  }

  const base = lower.split('-')[0]
  if (base in LANGUAGES) return base as keyof typeof LANGUAGES
  return null
}

// Checks navigator.languages (in preference order) and returns the first
// supported match, if any.
export function detectPreferredLocale(browserLanguages: readonly string[]): keyof typeof LANGUAGES | null {
  for (const tag of browserLanguages) {
    const match = matchBrowserLocale(tag)
    if (match) return match
  }
  return null
}
