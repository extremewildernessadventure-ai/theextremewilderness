import { NextRequest, NextResponse } from 'next/server'
import { getDb } from '@/lib/db'

export const dynamic = 'force-dynamic'

// Public — reached from an unsubscribe link embedded in blast emails
// (src/app/api/admin/newsletter/blast/route.ts), not gated behind admin
// auth. The token is the only credential; a bare id would let anyone
// unsubscribe anyone by guessing sequential ids.
export async function GET(req: NextRequest) {
  const token = req.nextUrl.searchParams.get('token')
  if (!token) {
    return NextResponse.json({ error: 'Missing token' }, { status: 400 })
  }

  const db = await getDb()
  const result = await db.prepare(
    "UPDATE newsletter_subscribers SET status = 'unsubscribed', unsubscribed_at = CURRENT_TIMESTAMP WHERE unsubscribe_token = ?"
  ).bind(token).run()

  if (!result.success) {
    return NextResponse.json({ error: 'Invalid token' }, { status: 404 })
  }

  return new Response(
    '<!DOCTYPE html><html><body style="font-family:sans-serif;text-align:center;padding:4rem 1rem;">' +
    '<h1>You\'ve been unsubscribed</h1><p>You will no longer receive emails from us.</p></body></html>',
    { headers: { 'Content-Type': 'text/html' } }
  )
}
