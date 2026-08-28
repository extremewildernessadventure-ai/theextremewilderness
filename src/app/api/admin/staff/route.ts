import { NextRequest, NextResponse } from 'next/server'
import { hasValidAdminSession } from '@/lib/adminAuth'
import { getDb } from '@/lib/db'
import { PAY_TYPES, type StaffMember } from '@/lib/hr'

export const dynamic = 'force-dynamic'

export async function GET() {
  if (!(await hasValidAdminSession())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const db = await getDb()
  const { results } = await db.prepare('SELECT * FROM staff_members ORDER BY name ASC').all()
  return NextResponse.json({ staff: results })
}

export async function POST(req: NextRequest) {
  if (!(await hasValidAdminSession())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const body = await req.json() as {
    name?: string; roleTitle?: string; guideId?: number | null; guideNameOther?: string | null
    payType?: string; baseRate?: number; currency?: string
  }
  if (!body.name?.trim()) {
    return NextResponse.json({ error: 'name is required' }, { status: 400 })
  }
  if (!body.payType || !PAY_TYPES.includes(body.payType as StaffMember['pay_type'])) {
    return NextResponse.json({ error: 'Invalid payType' }, { status: 400 })
  }
  if (typeof body.baseRate !== 'number' || body.baseRate < 0) {
    return NextResponse.json({ error: 'baseRate must be a non-negative number' }, { status: 400 })
  }

  const db = await getDb()
  const result = await db.prepare(
    `INSERT INTO staff_members (name, role_title, guide_id, guide_name_other, pay_type, base_rate, currency)
     VALUES (?, ?, ?, ?, ?, ?, ?)`
  ).bind(
    body.name.trim(), body.roleTitle ?? null, body.guideId ?? null,
    body.guideId ? null : (body.guideNameOther || null),
    body.payType, body.baseRate, body.currency ?? 'USD',
  ).run()

  return NextResponse.json({ success: true, id: result.meta?.last_row_id })
}
