// Live USD -> EUR/GBP rates from frankfurter.app (free, no API key, ECB-backed).
// Fetched with a 24h cache so it's never called live on every render (spec §9).
// Falls back to a static approximate rate if the request fails, so the price
// toggle never blocks or breaks rendering.

export type Currency = 'USD' | 'EUR' | 'GBP'

const FALLBACK_RATES: Record<Currency, number> = { USD: 1, EUR: 0.92, GBP: 0.79 }

export async function getFxRates(): Promise<Record<Currency, number>> {
  try {
    const res = await fetch('https://api.frankfurter.app/latest?from=USD&to=EUR,GBP', {
      next: { revalidate: 86400 },
    })
    if (!res.ok) return FALLBACK_RATES
    const data = (await res.json()) as { rates?: { EUR?: number; GBP?: number } }
    if (!data.rates?.EUR || !data.rates?.GBP) return FALLBACK_RATES
    return { USD: 1, EUR: data.rates.EUR, GBP: data.rates.GBP }
  } catch {
    return FALLBACK_RATES
  }
}

export function convertPrice(usd: number, currency: Currency, rates: Record<Currency, number>): number {
  return Math.round(usd * rates[currency])
}
