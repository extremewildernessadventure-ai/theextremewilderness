import crypto from 'node:crypto'
import type { NextRequest } from 'next/server'

function timingSafeEqualStr(a: string, b: string): boolean {
  const bufA = Buffer.from(a)
  const bufB = Buffer.from(b)
  if (bufA.length !== bufB.length) return false
  return crypto.timingSafeEqual(bufA, bufB)
}

// Scheduled jobs (GitHub Actions) have no cookie/browser session, so they
// authenticate with a static bearer secret instead of hasValidAdminSession().
export function verifyCronSecret(req: NextRequest): boolean {
  const secret = process.env.CRON_SECRET
  if (!secret) return false
  const header = req.headers.get('authorization') ?? ''
  const [scheme, token] = header.split(' ')
  if (scheme !== 'Bearer' || !token) return false
  return timingSafeEqualStr(token, secret)
}
