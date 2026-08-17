// Locales that render right-to-left. Not all are necessarily in
// routing.locales yet — this is the source of truth for direction
// regardless of which locales currently have shipped content.
const RTL_LOCALES = new Set(['ar', 'he'])

export function isRtlLocale(locale: string): boolean {
  return RTL_LOCALES.has(locale)
}
