import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
  locales: ['en', 'fr', 'es', 'de', 'ru', 'zh', 'zh-TW', 'it', 'nl', 'pt', 'ja', 'ko'],
  defaultLocale: 'en',
  localePrefix: 'as-needed',
  localeDetection: false,
})
