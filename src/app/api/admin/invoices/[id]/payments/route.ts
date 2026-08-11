import { NextRequest, NextResponse } from 'next/server'
import { hasValidAdminSession } from '@/lib/adminAuth'
import { getDb, type Invoice } from '@/lib/db'
import { recalculateInvoiceTotals } from '@/lib/invoices'

export const dynamic = 'force-dynamic'

type Params = { params: Promise<{ id: string }> }

// For manually logging a bank-transfer (or other non-Pesapal) payment.
// Deliberately does NOT accept method 'pesapal' or 'correction' — a
// Pesapal-verified row may only be inserted by the IPN handler or the
// manual "check status" sync route (both re-verify server-to-server first),
// so this form can't be used to fake a Pesapal confirmation. Corrections
// (reversing a mistaken entry) can go through here with a negative amount
// and method 'other' until a dedicated correction UI is worth building.
export async function POST(req: NextRequest, { params }: Params) {
  if (!(await hasValidAdminSession())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const { id } = await params
  const body = await req.json() as {
    amount?: number; method?: 'bank_transfer' | 'other'
    reference?: string; confirmedAt?: string; notes?: string; recordedBy?: string
  }

  if (typeof body.amount !== 'number' || body.amount === 0) {
    return NextResponse.json({ error: 'A non-zero amount is required' }, { status: 400 })
  }
  const method = body.method === 'other' ? 'other' : 'bank_transfer'

  const db = await getDb()
  const invoice = await db.prepare('SELECT id, currency FROM invoices WHERE id = ?').bind(id).first<Invoice>()
  if (!invoice) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 })
  }

  await db.prepare(
    `INSERT INTO invoice_payments (invoice_id, amount, currency, method, reference, confirmed_at, recorded_by, notes)
     VALUES (?, ?, ?, ?, ?, COALESCE(?, CURRENT_TIMESTAMP), ?, ?)`
  ).bind(
    id,
    body.amount,
    invoice.currency,
    method,
    body.reference ?? null,
    body.confirmedAt ?? null,
    body.recordedBy ?? null,
    body.notes ?? null,
  ).run()

  await recalculateInvoiceTotals(db, Number(id))
  return NextResponse.json({ success: true })
}
