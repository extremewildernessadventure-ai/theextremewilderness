import { getRequestConfig } from 'next-intl/server'
import { routing } from './routing'
import { fetchLocaleData } from '@/lib/localeData'

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale
  if (!locale || !routing.locales.includes(locale as 'en' | 'fr' | 'es' | 'de' | 'ru' | 'zh' | 'zh-TW')) {
    locale = routing.defaultLocale
  }
  return {
    locale,
    messages: await fetchLocaleData(`messages/${locale}.json`),
  }
})
