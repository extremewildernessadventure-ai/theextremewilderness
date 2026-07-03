import type { SafariPackage } from '@/data/packages'

export type ComfortTier = 'comfort' | 'luxury' | 'ultra'

function perDayRate(pkg: SafariPackage): number {
  return pkg.priceFrom / pkg.duration
}

export interface ComfortTierBands {
  comfort: { min: number; max: number }
  luxury: { min: number; max: number }
  ultra: { min: number; max: number }
}

// Computes Comfort/Luxury/Ultra per-day-rate bands as terciles of the live
// package price spread, so the ranges shown in Step 3 and used for scoring
// never drift out of sync with real prices in src/data/packages.ts.
export function getComfortTierBands(packages: SafariPackage[]): ComfortTierBands {
  const rates = packages.map(perDayRate).sort((a, b) => a - b)
  const at = (p: number) => rates[Math.min(rates.length - 1, Math.floor((rates.length - 1) * p))]

  return {
    comfort: { min: rates[0], max: at(1 / 3) },
    luxury: { min: at(1 / 3), max: at(2 / 3) },
    ultra: { min: at(2 / 3), max: rates[rates.length - 1] },
  }
}

export function comfortTierForPackage(pkg: SafariPackage, packages: SafariPackage[]): ComfortTier {
  const bands = getComfortTierBands(packages)
  const rate = perDayRate(pkg)
  if (rate <= bands.comfort.max) return 'comfort'
  if (rate <= bands.luxury.max) return 'luxury'
  return 'ultra'
}
