import { cookies } from 'next/headers'
import crypto from 'node:crypto'

export const ADMIN_SESSION_COOKIE = 'ewa_admin_session'
const SESSION_DURATION_MS = 1000 * 60 * 60 * 12 // 12 hours
export const ADMIN_SESSION_MAX_AGE = SESSION_DURATION_MS / 1000

function getSecret(): string {
  const secret = process.env.ADMIN_PASSWORD
  if (!secret) throw new Error('ADMIN_PASSWORD is not set')
  return secret
}

function sign(value: string): string {
  return crypto.createHmac('sha256', getSecret()).update(value).digest('hex')
}

function timingSafeEqualStr(a: string, b: string): boolean {
  const bufA = Buffer.from(a)
  const bufB = Buffer.from(b)
  if (bufA.length !== bufB.length) return false
  return crypto.timingSafeEqual(bufA, bufB)
}

export function verifyPassword(password: string): boolean {
  return timingSafeEqualStr(password, getSecret())
}

export function createSessionToken(): string {
  const expiry = String(Date.now() + SESSION_DURATION_MS)
  return `${expiry}.${sign(expiry)}`
}

export function isValidSessionToken(token: string | undefined | null): boolean {
  if (!token) return false
  const [expiryStr, sig] = token.split('.')
  if (!expiryStr || !sig) return false
  const expiry = Number(expiryStr)
  if (!Number.isFinite(expiry) || Date.now() > expiry) return false
  return timingSafeEqualStr(sig, sign(expiryStr))
}

export async function hasValidAdminSession(): Promise<boolean> {
  const store = await cookies()
  return isValidSessionToken(store.get(ADMIN_SESSION_COOKIE)?.value)
}
