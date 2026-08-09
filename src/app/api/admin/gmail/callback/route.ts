import { NextRequest, NextResponse } from 'next/server'
import { hasValidAdminSession } from '@/lib/adminAuth'
import { exchangeCodeForTokens, saveTokens } from '@/lib/gmail'
import { GMAIL_STATE_COOKIE } from '../connect/route'

export const dynamic = 'force-dynamic'

export async function GET(req: NextRequest) {
  if (!(await hasValidAdminSession())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { searchParams } = req.nextUrl
  const code = searchParams.get('code')
  const state = searchParams.get('state')
  const expectedState = req.cookies.get(GMAIL_STATE_COOKIE)?.value

  const redirectTo = (status: 'connected' | 'error') =>
    NextResponse.redirect(new URL(`/admin/leads?gmail=${status}`, req.nextUrl.origin))

  if (!code || !state || !expectedState || state !== expectedState) {
    console.error('Gmail OAuth callback: missing or mismatched state')
    const res = redirectTo('error')
    res.cookies.delete(GMAIL_STATE_COOKIE)
    return res
  }

  const redirectUri = new URL('/api/admin/gmail/callback', req.nextUrl.origin).toString()
  const tokens = await exchangeCodeForTokens(code, redirectUri)

  const res = redirectTo(tokens ? 'connected' : 'error')
  res.cookies.delete(GMAIL_STATE_COOKIE)
  if (!tokens) return res

  await saveTokens({
    accessToken: tokens.access_token,
    refreshToken: tokens.refresh_token,
    expiresIn: tokens.expires_in,
  })
  return res
}
