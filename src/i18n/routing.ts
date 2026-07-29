import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
  locales: ['en', 'fr', 'es', 'de', 'ru', 'zh', 'zh-TW'],
  defaultLocale: 'en',
  localePrefix: 'as-needed',
  localeDetection: false,
})
