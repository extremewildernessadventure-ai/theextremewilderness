import type { D1Database, Invoice } from './db'
import { getTransactionStatus, isConfirmedPaid } from './pesapal'

export function round2(n: number): number {
  return Math.round(n * 100) / 100
}

// 'cancelled' is the one status that isn't purely a function of amount vs
// amount_paid — it's sticky, and only falls through to normal derivation if
// a real payment has actually landed against a cancelled invoice (someone
// paid an invoice that was cancelled after the fact). Item edits alone never
// un-cancel an invoice.
export function deriveStatus(currentStatus: Invoice['status'] | undefined, amount: number, amountPaid: number): Invoice['status'] {
  if (currentStatus === 'cancelled' && amountPaid <= 0) return 'cancelled'
  if (amountPaid <= 0) return 'unpaid'
  if (amountPaid >= amount) return 'paid'
  return 'partial'
}

export async function recalculateInvoiceTotals(db: D1Database, invoiceId: number): Promise<void> {
  const items = await db.prepare(
    'SELECT COALESCE(SUM(quantity * unit_price), 0) AS total FROM invoice_items WHERE invoice_id = ?'
  ).bind(invoiceId).first<{ total: number }>()
  const paid = await db.prepare(
    'SELECT COALESCE(SUM(amount), 0) AS total FROM invoice_payments WHERE invoice_id = ?'
  ).bind(invoiceId).first<{ total: number }>()
  const current = await db.prepare('SELECT status FROM invoices WHERE id = ?').bind(invoiceId).first<{ status: Invoice['status'] }>()

  const amount = round2(items?.total ?? 0)
  const amountPaid = round2(paid?.total ?? 0)
  const status = deriveStatus(current?.status, amount, amountPaid)

  await db.prepare(
    'UPDATE invoices SET amount = ?, amount_paid = ?, status = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?'
  ).bind(amount, amountPaid, status, invoiceId).run()
}

export interface InvoiceItemInput {
  description: string
  quantity: number
  unitPrice: number
}

export function validateItems(items: unknown): items is InvoiceItemInput[] {
  if (!Array.isArray(items) || items.length === 0) return false
  return items.every((item) =>
    item && typeof item.description === 'string' && item.description.trim() !== ''
    && typeof item.quantity === 'number' && item.quantity > 0
    && typeof item.unitPrice === 'number' && item.unitPrice >= 0
  )
}

// Replaces the whole item set for an invoice (delete-and-reinsert, not
// per-item CRUD) — matches this codebase's existing "load everything, save
// the whole thing" admin-form pattern. The only place invoice_items are
// ever written, so item math only needs to be gotten right here.
export async function replaceInvoiceItems(db: D1Database, invoiceId: number, items: InvoiceItemInput[]): Promise<void> {
  const statements = [
    db.prepare('DELETE FROM invoice_items WHERE invoice_id = ?').bind(invoiceId),
    ...items.map((item, i) =>
      db.prepare(
        'INSERT INTO invoice_items (invoice_id, description, quantity, unit_price, sort_order) VALUES (?, ?, ?, ?, ?)'
      ).bind(invoiceId, item.description, item.quantity, item.unitPrice, i)
    ),
  ]
  await db.batch(statements)
  await recalculateInvoiceTotals(db, invoiceId)
}

// Shared by both the public IPN callback and the admin's manual "check
// status now" action, so the two paths can never drift out of sync with
// each other. Never trusts a caller-supplied status — always re-verifies
// server-to-server against Pesapal before recording anything.
export async function recordPesapalPaymentIfConfirmed(db: D1Database, orderTrackingId: string): Promise<void> {
  const status = await getTransactionStatus(orderTrackingId)

  const order = await db.prepare(
    'SELECT invoice_id, currency FROM invoice_pesapal_orders WHERE order_tracking_id = ?'
  ).bind(orderTrackingId).first<{ invoice_id: number; currency: string }>()

  if (order) {
    await db.prepare(
      'UPDATE invoice_pesapal_orders SET status = ?, updated_at = CURRENT_TIMESTAMP WHERE order_tracking_id = ?'
    ).bind(status.paymentStatus, orderTrackingId).run()
  }

  if (!order || !isConfirmedPaid(status.paymentStatus)) return

  try {
    await db.prepare(
      `INSERT INTO invoice_payments (invoice_id, amount, currency, method, reference, pesapal_order_tracking_id, recorded_by)
       VALUES (?, ?, ?, 'pesapal', ?, ?, 'pesapal-sync')`
    ).bind(
      order.invoice_id,
      status.amount,
      status.currency || order.currency,
      status.confirmationCode ?? orderTrackingId,
      orderTrackingId,
    ).run()
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err)
    // Duplicate delivery of an already-recorded order (e.g. a retried IPN,
    // or an admin manual sync after the IPN already landed) — safe no-op,
    // the unique index on pesapal_order_tracking_id is what's enforcing this.
    if (!message.includes('UNIQUE constraint failed')) throw err
    return
  }

  await recalculateInvoiceTotals(db, order.invoice_id)
}
