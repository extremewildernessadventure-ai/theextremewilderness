// Shared Prime/Good/Rainy season data, reused by the /safaris season bar
// and the /plan wizard's Step 1 month hint — do not duplicate this array.
export type SeasonType = 'prime' | 'good' | 'rain'

export const MONTHS: { m: string; type: SeasonType }[] = [
  { m: 'Jan', type: 'good' },  { m: 'Feb', type: 'good' },  { m: 'Mar', type: 'rain' },
  { m: 'Apr', type: 'rain' },  { m: 'May', type: 'rain' },  { m: 'Jun', type: 'prime' },
  { m: 'Jul', type: 'prime' }, { m: 'Aug', type: 'prime' }, { m: 'Sep', type: 'prime' },
  { m: 'Oct', type: 'prime' }, { m: 'Nov', type: 'rain' },  { m: 'Dec', type: 'good' },
]
