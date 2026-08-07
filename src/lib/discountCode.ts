import { createHash } from 'crypto'

const SALT = process.env.DISCOUNT_CODE_SALT ?? 'ewa-exit-intent'

export function computeDiscountCode(email: string): string {
  const normalized = email.trim().toLowerCase()
  const hash = createHash('sha256').update(`${SALT}:${normalized}`).digest('hex')
  return `EWA-WILD5-${hash.slice(0, 4).toUpperCase()}`
}
