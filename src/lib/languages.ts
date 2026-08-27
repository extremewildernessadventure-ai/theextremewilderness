// flagCode is a flag-icons (https://github.com/lipis/flag-icons) ISO 3166-1
// country code, rendered via <FlagIcon> — not an emoji. OS emoji flags are
// unreliable across platforms (most visibly, Windows never ligatures 🇹🇼 into
// a flag glyph, and Apple/some Android builds omit it entirely under certain
// region settings), so every flag here renders from the same bundled SVG set
// for pixel-identical, dependency-free display everywhere.
export const LANGUAGES: Record<string, { code: string; native: string; flagCode: string }> = {
  en: { code: 'EN', native: 'English', flagCode: 'gb' },
  fr: { code: 'FR', native: 'Français', flagCode: 'fr' },
  es: { code: 'ES', native: 'Español', flagCode: 'es' },
  de: { code: 'DE', native: 'Deutsch', flagCode: 'de' },
  ru: { code: 'RU', native: 'Русский', flagCode: 'ru' },
  zh: { code: 'ZH', native: '简体中文', flagCode: 'cn' },
  'zh-TW': { code: 'TW', native: '繁體中文', flagCode: 'tw' },
  it: { code: 'IT', native: 'Italiano', flagCode: 'it' },
  nl: { code: 'NL', native: 'Nederlands', flagCode: 'nl' },
  pt: { code: 'PT', native: 'Português', flagCode: 'pt' },
  ja: { code: 'JA', native: '日本語', flagCode: 'jp' },
  ko: { code: 'KO', native: '한국어', flagCode: 'kr' },
  ar: { code: 'AR', native: 'العربية', flagCode: 'sa' },
  he: { code: 'HE', native: 'עברית', flagCode: 'il' },
  hi: { code: 'HI', native: 'हिन्दी', flagCode: 'in' },
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
