import { NextRequest, NextResponse } from 'next/server'
import { hasValidAdminSession } from '@/lib/adminAuth'
import { getDb } from '@/lib/db'
import { EXPENSE_CATEGORIES, type Expense } from '@/lib/finance'

export const dynamic = 'force-dynamic'

type Params = { params: Promise<{ id: string }> }

export async function GET(_req: NextRequest, { params }: Params) {
  if (!(await hasValidAdminSession())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const { id } = await params
  const db = await getDb()
  const expense = await db.prepare('SELECT * FROM expenses WHERE id = ?').bind(id).first()
  if (!expense) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 })
  }
  return NextResponse.json({ expense })
}

export async function PATCH(req: NextRequest, { params }: Params) {
  if (!(await hasValidAdminSession())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const { id } = await params
  const body = await req.json() as {
    category?: string; vehicleId?: number | null; departureId?: number | null; amount?: number
    currency?: string; exchangeRateToUsd?: number; description?: string
    paidAt?: string; paymentMethod?: string; reference?: string
  }

  if (body.category !== undefined && !EXPENSE_CATEGORIES.includes(body.category as Expense['category'])) {
    return NextResponse.json({ error: 'Invalid category' }, { status: 400 })
  }

  const db = await getDb()

  // amount_usd is derived — recompute whenever amount/currency/rate changes,
  // same pattern as invoices.amount being derived from line items.
  let amountUsd: number | undefined
  if (body.amount !== undefined || body.currency !== undefined || body.exchangeRateToUsd !== undefined) {
    const current = await db.prepare('SELECT amount, currency, exchange_rate_to_usd FROM expenses WHERE id = ?').bind(id).first<{
      amount: number; currency: string; exchange_rate_to_usd: number
    }>()
    if (!current) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 })
    }
    const amount = body.amount ?? current.amount
    const currency = body.currency ?? current.currency
    const rate = currency === 'USD' ? 1 : (body.exchangeRateToUsd ?? current.exchange_rate_to_usd)
    amountUsd = amount * rate
    body.exchangeRateToUsd = rate
  }

  const columnMap: Record<string, unknown> = {
    category: body.category,
    vehicle_id: body.vehicleId,
    departure_id: body.departureId,
    amount: body.amount,
    currency: body.currency,
    exchange_rate_to_usd: body.exchangeRateToUsd,
    amount_usd: amountUsd,
    description: body.description,
    paid_at: body.paidAt,
    payment_method: body.paymentMethod,
    reference: body.reference,
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

  await db.prepare(`UPDATE expenses SET ${fields.join(', ')} WHERE id = ?`).bind(...values, id).run()
  return NextResponse.json({ success: true })
}

export async function DELETE(_req: NextRequest, { params }: Params) {
  if (!(await hasValidAdminSession())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const { id } = await params
  const db = await getDb()
  await db.prepare('DELETE FROM expenses WHERE id = ?').bind(id).run()
  return NextResponse.json({ success: true })
}
