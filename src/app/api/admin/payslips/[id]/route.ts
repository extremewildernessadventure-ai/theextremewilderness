import { NextRequest, NextResponse } from 'next/server'
import { hasValidAdminSession } from '@/lib/adminAuth'
import { getDb } from '@/lib/db'
import { PAYSLIP_STATUSES, type Payslip } from '@/lib/hr'

export const dynamic = 'force-dynamic'

type Params = { params: Promise<{ id: string }> }

export async function GET(_req: NextRequest, { params }: Params) {
  if (!(await hasValidAdminSession())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const { id } = await params
  const db = await getDb()
  const payslip = await db.prepare('SELECT * FROM payslips WHERE id = ?').bind(id).first()
  if (!payslip) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 })
  }
  return NextResponse.json({ payslip })
}

export async function PATCH(req: NextRequest, { params }: Params) {
  if (!(await hasValidAdminSession())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const { id } = await params
  const body = await req.json() as {
    bonuses?: number; deductions?: number; status?: string; paymentReference?: string; notes?: string
  }

  if (body.status !== undefined && !PAYSLIP_STATUSES.includes(body.status as Payslip['status'])) {
    return NextResponse.json({ error: 'Invalid status' }, { status: 400 })
  }

  const db = await getDb()

  // net_amount is derived — recompute whenever bonuses/deductions change,
  // same pattern as expenses.amount_usd / invoices.amount.
  let netAmount: number | undefined
  if (body.bonuses !== undefined || body.deductions !== undefined) {
    const current = await db.prepare(
      'SELECT base_amount, trip_pay_total, bonuses, deductions FROM payslips WHERE id = ?'
    ).bind(id).first<{ base_amount: number; trip_pay_total: number; bonuses: number; deductions: number }>()
    if (!current) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 })
    }
    const bonuses = body.bonuses ?? current.bonuses
    const deductions = body.deductions ?? current.deductions
    netAmount = current.base_amount + current.trip_pay_total + bonuses - deductions
  }

  const columnMap: Record<string, unknown> = {
    bonuses: body.bonuses,
    deductions: body.deductions,
    net_amount: netAmount,
    status: body.status,
    paid_at: body.status === 'paid' ? new Date().toISOString() : undefined,
    payment_reference: body.paymentReference,
    notes: body.notes,
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

  await db.prepare(`UPDATE payslips SET ${fields.join(', ')} WHERE id = ?`).bind(...values, id).run()
  return NextResponse.json({ success: true })
}
