import { NextRequest, NextResponse } from 'next/server'
import { hasValidAdminSession } from '@/lib/adminAuth'
import { getDb } from '@/lib/db'
import { PAY_TYPES, type StaffMember } from '@/lib/hr'

export const dynamic = 'force-dynamic'

type Params = { params: Promise<{ id: string }> }

export async function GET(_req: NextRequest, { params }: Params) {
  if (!(await hasValidAdminSession())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const { id } = await params
  const db = await getDb()
  const staffMember = await db.prepare('SELECT * FROM staff_members WHERE id = ?').bind(id).first()
  if (!staffMember) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 })
  }
  return NextResponse.json({ staffMember })
}

export async function PATCH(req: NextRequest, { params }: Params) {
  if (!(await hasValidAdminSession())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const { id } = await params
  const body = await req.json() as {
    name?: string; roleTitle?: string; guideId?: number | null
    payType?: string; baseRate?: number; currency?: string; active?: boolean
  }

  if (body.payType !== undefined && !PAY_TYPES.includes(body.payType as StaffMember['pay_type'])) {
    return NextResponse.json({ error: 'Invalid payType' }, { status: 400 })
  }

  const columnMap: Record<string, unknown> = {
    name: body.name,
    role_title: body.roleTitle,
    guide_id: body.guideId,
    pay_type: body.payType,
    base_rate: body.baseRate,
    currency: body.currency,
    active: body.active !== undefined ? (body.active ? 1 : 0) : undefined,
  }
  const fields: string[] = []
  const values: unknown[] = []
  for (const [col, val] of Object.entries(columnMap)) {
    if (val !== undefined) {
      fields.push(`${col} = ?`)
      values.push(val)
    }
  }
  if (fields.length === 0) {
    return NextResponse.json({ error: 'No fields to update' }, { status: 400 })
  }
  fields.push('updated_at = CURRENT_TIMESTAMP')

  const db = await getDb()
  await db.prepare(`UPDATE staff_members SET ${fields.join(', ')} WHERE id = ?`).bind(...values, id).run()
  return NextResponse.json({ success: true })
}

export async function DELETE(_req: NextRequest, { params }: Params) {
  if (!(await hasValidAdminSession())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const { id } = await params
  const db = await getDb()

  const payslipCount = await db.prepare('SELECT COUNT(*) as count FROM payslips WHERE staff_member_id = ?').bind(id).first<{ count: number }>()
  if ((payslipCount?.count ?? 0) > 0) {
    return NextResponse.json(
      { error: 'Cannot delete this staff member — they have existing payslips. Deactivate them instead.' },
      { status: 409 }
    )
  }

  await db.prepare('DELETE FROM staff_members WHERE id = ?').bind(id).run()
  return NextResponse.json({ success: true })
}
