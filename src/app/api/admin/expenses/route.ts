import { NextRequest, NextResponse } from 'next/server'
import { hasValidAdminSession } from '@/lib/adminAuth'
import { getDb } from '@/lib/db'
import { EXPENSE_CATEGORIES, type Expense } from '@/lib/finance'

export const dynamic = 'force-dynamic'

export async function GET() {
  if (!(await hasValidAdminSession())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const db = await getDb()
  const { results } = await db.prepare('SELECT * FROM expenses ORDER BY paid_at DESC, created_at DESC').all()
  return NextResponse.json({ expenses: results })
}

export async function POST(req: NextRequest) {
  if (!(await hasValidAdminSession())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const body = await req.json() as {
    category?: string; vehicleId?: number; staffMemberId?: number; departureId?: number; amount?: number
    currency?: string; exchangeRateToUsd?: number; description?: string
    paidAt?: string; paymentMethod?: string; reference?: string
  }
  if (!body.category || !EXPENSE_CATEGORIES.includes(body.category as Expense['category'])) {
    return NextResponse.json({ error: 'Invalid category' }, { status: 400 })
  }
  if (typeof body.amount !== 'number' || body.amount <= 0) {
    return NextResponse.json({ error: 'amount must be a positive number' }, { status: 400 })
  }

  const currency = body.currency ?? 'USD'
  const exchangeRateToUsd = currency === 'USD' ? 1 : (body.exchangeRateToUsd ?? 1)
  const amountUsd = body.amount * exchangeRateToUsd

  const db = await getDb()
  const result = await db.prepare(
    `INSERT INTO expenses (category, vehicle_id, staff_member_id, departure_id, amount, currency, exchange_rate_to_usd, amount_usd, description, paid_at, payment_method, reference)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
  ).bind(
    body.category, body.vehicleId ?? null, body.staffMemberId ?? null, body.departureId ?? null, body.amount,
    currency, exchangeRateToUsd, amountUsd, body.description ?? null,
    body.paidAt ?? null, body.paymentMethod ?? null, body.reference ?? null,
  ).run()

  return NextResponse.json({ success: true, id: result.meta?.last_row_id })
}
