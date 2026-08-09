import crypto from 'node:crypto'
import { NextRequest, NextResponse } from 'next/server'
import { hasValidAdminSession } from '@/lib/adminAuth'
import { buildAuthUrl } from '@/lib/gmail'

export const dynamic = 'force-dynamic'

export const GMAIL_STATE_COOKIE = 'ewa_gmail_oauth_state'

export async function GET(req: NextRequest) {
  if (!(await hasValidAdminSession())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const redirectUri = new URL('/api/admin/gmail/callback', req.nextUrl.origin).toString()
  const state = crypto.randomBytes(16).toString('hex')

  const res = NextResponse.redirect(buildAuthUrl(redirectUri, state))
  res.cookies.set(GMAIL_STATE_COOKIE, state, {
    httpOnly: true,
    secure: true,
    sameSite: 'lax', // 'lax' (not 'strict') so the cookie survives the top-level redirect back from accounts.google.com
    maxAge: 600,
    path: '/',
  })
  return res
}
