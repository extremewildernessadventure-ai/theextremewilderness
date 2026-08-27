import { NextRequest, NextResponse } from 'next/server'
import { hasValidAdminSession } from '@/lib/adminAuth'
import { getDb } from '@/lib/db'

export const dynamic = 'force-dynamic'

export async function GET() {
  if (!(await hasValidAdminSession())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const db = await getDb()
  const { results } = await db.prepare('SELECT * FROM clients ORDER BY name ASC').all()
  return NextResponse.json({ clients: results })
}

export async function POST(req: NextRequest) {
  if (!(await hasValidAdminSession())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const body = await req.json() as { name?: string; email?: string; phone?: string; notes?: string }
  if (!body.name?.trim()) {
    return NextResponse.json({ error: 'name is required' }, { status: 400 })
  }

  const db = await getDb()
  const result = await db.prepare(
    'INSERT INTO clients (name, email, phone, notes) VALUES (?, ?, ?, ?)'
  ).bind(body.name.trim(), body.email ?? null, body.phone ?? null, body.notes ?? null).run()

  return NextResponse.json({ success: true, id: result.meta?.last_row_id })
}
