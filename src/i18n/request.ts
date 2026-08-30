import * as rootParams from 'next/root-params'
import { getRequestConfig } from 'next-intl/server'
import { hasLocale } from 'next-intl'
import { routing } from './routing'
import { fetchLocaleData } from '@/lib/localeData'

// Reads the [locale] route segment via next/root-params instead of the
// legacy `requestLocale` (backed by the Dynamic API `headers()` as a
// fallback) — this is what actually makes every page eligible for static
// rendering. See https://next-intl.dev/blog/nextjs-root-params. Only works
// because src/app/[locale]/layout.tsx is now a true root layout (no
// layout.tsx above it) — next/root-params only treats a segment as a root
// param when its own layout is the literal root Next.js discovers by
// walking down from app/.
export default getRequestConfig(async () => {
  const paramValue = await rootParams.locale()
  const locale = hasLocale(routing.locales, paramValue) ? paramValue : routing.defaultLocale
  return {
    locale,
    messages: await fetchLocaleData(`messages/${locale}.json`),
  }
})
