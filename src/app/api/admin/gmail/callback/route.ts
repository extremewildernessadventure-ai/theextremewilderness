import { NextRequest, NextResponse } from 'next/server'
import { exchangeCodeForTokens, saveTokens } from '@/lib/gmail'
import { GMAIL_STATE_COOKIE } from '../connect/route'

export const dynamic = 'force-dynamic'

// No hasValidAdminSession() check here: this is a top-level redirect back
// from accounts.google.com, and the admin session cookie is SameSite=Strict
// (set by the pre-existing admin login), so it's dropped on exactly this
// kind of cross-site redirect — checking it here would 401 every real user.
// The matching `state` cookie (SameSite=Lax, set by /connect) is sufficient
// proof this callback belongs to a flow an authenticated admin started,
// since only /connect (which does require admin auth) could have set it.
export async function GET(req: NextRequest) {
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
