import { NextRequest, NextResponse } from 'next/server'
import { hasValidAdminSession } from '@/lib/adminAuth'
import { getDb } from '@/lib/db'

export const dynamic = 'force-dynamic'

export async function GET() {
  if (!(await hasValidAdminSession())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const db = await getDb()
  const { results } = await db.prepare('SELECT * FROM ops_lodges ORDER BY name ASC').all()
  return NextResponse.json({ lodges: results })
}

export async function POST(req: NextRequest) {
  if (!(await hasValidAdminSession())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const body = await req.json() as { name?: string; location?: string; contactInfo?: string; rateNotes?: string }
  if (!body.name?.trim()) {
    return NextResponse.json({ error: 'name is required' }, { status: 400 })
  }

  const db = await getDb()
  const result = await db.prepare(
    'INSERT INTO ops_lodges (name, location, contact_info, rate_notes) VALUES (?, ?, ?, ?)'
  ).bind(body.name.trim(), body.location ?? null, body.contactInfo ?? null, body.rateNotes ?? null).run()

  return NextResponse.json({ success: true, id: result.meta?.last_row_id })
}
