import { NextRequest, NextResponse } from 'next/server'
import { verifyCronSecret } from '@/lib/cronAuth'
import { getValidAccessToken } from '@/lib/gmail'
import { getDb } from '@/lib/db'
import type { Lead } from '@/lib/leads'

export const dynamic = 'force-dynamic'

const GMAIL_MESSAGES_ENDPOINT = 'https://gmail.googleapis.com/gmail/v1/users/me/messages'

async function hasSentReply(accessToken: string, email: string, createdAt: string): Promise<boolean> {
  const afterUnix = Math.floor(new Date(createdAt.replace(' ', 'T') + 'Z').getTime() / 1000)
  const q = `in:sent to:${email} after:${afterUnix}`
  const url = `${GMAIL_MESSAGES_ENDPOINT}?${new URLSearchParams({ q, maxResults: '1' })}`

  const res = await fetch(url, { headers: { Authorization: `Bearer ${accessToken}` } })
  if (!res.ok) {
    console.error(`Gmail search failed for ${email}:`, await res.text())
    return false
  }
  const data = await res.json() as { resultSizeEstimate?: number; messages?: unknown[] }
  return Boolean(data.messages?.length)
}

export async function POST(req: NextRequest) {
  if (!verifyCronSecret(req)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const accessToken = await getValidAccessToken()
  if (!accessToken) {
    return NextResponse.json({ error: 'Gmail not connected' }, { status: 503 })
  }

  const db = await getDb()
  const { results } = await db.prepare(
    `SELECT * FROM leads WHERE status = 'new' AND created_at >= datetime('now', '-30 days') ORDER BY created_at ASC`
  ).all<Lead>()

  let updated = 0
  for (const lead of results) {
    const replied = await hasSentReply(accessToken, lead.email, lead.created_at)
    if (!replied) continue

    const note = `Auto-detected: replied via Gmail on ${new Date().toLocaleDateString()}.`
    const newNotes = lead.notes?.trim() ? `${note}\n\n${lead.notes}` : note

    await db.prepare(
      `UPDATE leads SET status = 'contacted', notes = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?`
    ).bind(newNotes, lead.id).run()
    updated++
  }

  return NextResponse.json({ checked: results.length, updated })
}
