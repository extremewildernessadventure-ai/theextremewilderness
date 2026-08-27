const OG_LOCALE_MAP: Record<string, string> = {
  en: 'en_US', fr: 'fr_FR', es: 'es_ES', de: 'de_DE', ru: 'ru_RU', zh: 'zh_CN', 'zh-TW': 'zh_TW', it: 'it_IT', nl: 'nl_NL', pt: 'pt_PT', ja: 'ja_JP', ko: 'ko_KR', ar: 'ar_AR', he: 'he_IL', hi: 'hi_IN',
}

export function ogLocale(locale: string): string {
  return OG_LOCALE_MAP[locale] ?? 'en_US'
}
