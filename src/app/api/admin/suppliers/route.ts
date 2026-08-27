import { NextRequest, NextResponse } from 'next/server'
import { hasValidAdminSession } from '@/lib/adminAuth'
import { getDb } from '@/lib/db'
import { SUPPLIER_TYPES, type Supplier } from '@/lib/ops'

export const dynamic = 'force-dynamic'

export async function GET() {
  if (!(await hasValidAdminSession())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const db = await getDb()
  const { results } = await db.prepare('SELECT * FROM suppliers ORDER BY name ASC').all()
  return NextResponse.json({ suppliers: results })
}

export async function POST(req: NextRequest) {
  if (!(await hasValidAdminSession())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const body = await req.json() as { name?: string; type?: string; contactInfo?: string; notes?: string }
  if (!body.name?.trim()) {
    return NextResponse.json({ error: 'name is required' }, { status: 400 })
  }
  if (!body.type || !SUPPLIER_TYPES.includes(body.type as Supplier['type'])) {
    return NextResponse.json({ error: 'Invalid type' }, { status: 400 })
  }

  const db = await getDb()
  const result = await db.prepare(
    'INSERT INTO suppliers (name, type, contact_info, notes) VALUES (?, ?, ?, ?)'
  ).bind(body.name.trim(), body.type, body.contactInfo ?? null, body.notes ?? null).run()

  return NextResponse.json({ success: true, id: result.meta?.last_row_id })
}
