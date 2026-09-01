import { NextRequest, NextResponse } from 'next/server'
import { hasValidAdminSession } from '@/lib/adminAuth'
import { getDb, type InvoicePayment } from '@/lib/db'
import { recalculateInvoiceTotals } from '@/lib/invoices'

export const dynamic = 'force-dynamic'

type Params = { params: Promise<{ id: string; paymentId: string }> }

// Deletes one manually-recorded payment row. Pesapal-verified rows are
// deliberately excluded — they're server-to-server confirmed truth (see the
// sibling POST route's comment), so removing a mistaken one goes through a
// negative 'other' correction entry instead, same as the POST route already
// requires for corrections generally. That keeps the payment history an
// honest audit trail rather than something that can quietly disappear.
export async function DELETE(req: NextRequest, { params }: Params) {
  if (!(await hasValidAdminSession())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const { id, paymentId } = await params

  const db = await getDb()
  const payment = await db.prepare(
    'SELECT id, invoice_id, method FROM invoice_payments WHERE id = ? AND invoice_id = ?'
  ).bind(paymentId, id).first<Pick<InvoicePayment, 'id' | 'invoice_id' | 'method'>>()

  if (!payment) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 })
  }
  if (payment.method === 'pesapal') {
    return NextResponse.json(
      { error: "Pesapal-verified payments can't be deleted — record a negative correction entry instead." },
      { status: 400 }
    )
  }

  await db.prepare('DELETE FROM invoice_payments WHERE id = ?').bind(paymentId).run()
  await recalculateInvoiceTotals(db, Number(id))
  return NextResponse.json({ success: true })
}
