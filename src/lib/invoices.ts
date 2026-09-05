import type { D1Database, Invoice, InvoicePayment } from './db'
import { getTransactionStatus, isConfirmedPaid } from './pesapal'

export function round2(n: number): number {
  return Math.round(n * 100) / 100
}

// Shared between PaymentPanel (payment history) and PaymentOptionsPanel /
// the PDF view (paid-receipt note), so the wording can't drift between them.
export const PAYMENT_METHOD_LABELS: Record<InvoicePayment['method'], string> = {
  pesapal: 'Pesapal',
  bank_transfer: 'Bank Transfer',
  other: 'Other',
  correction: 'Correction',
}

// Shared between the invoices list page and the client detail page's
// invoice list, so "partial" always reads the same shade of green/gold/
// khaki everywhere it appears. unpaid = needs attention; partial = payment
// in progress; paid = closed out successfully; cancelled = void.
export const INVOICE_STATUS_PILL_CLASS: Record<Invoice['status'], string> = {
  unpaid: 'few',
  partial: 'open',
  paid: 'full',
  cancelled: 'cancelled',
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

// A deposit invoice's `amount` IS the deposit -- these two derive the
// larger implied total and what's left, from `deposit_percent` alone.
// Never stored (an invoice's `amount` is itself already a derived value
// recalculated whenever line items change, so deriving from it at read
// time is what keeps this from ever going stale). null whenever the
// invoice isn't a deposit invoice at all.
export function computeImpliedTotal(invoice: Pick<Invoice, 'amount' | 'deposit_percent'>): number | null {
  if (invoice.deposit_percent == null) return null
  return round2(invoice.amount / (invoice.deposit_percent / 100))
}

export function computeRemainingBalance(invoice: Pick<Invoice, 'amount' | 'deposit_percent'>): number | null {
  const impliedTotal = computeImpliedTotal(invoice)
  if (impliedTotal == null) return null
  return round2(impliedTotal - invoice.amount)
}

// The only validation `deposit_percent` needs now that it no longer has a
// companion balance-due-date field (that concept moved to the follow-up
// invoice's own ordinary due_date) -- undefined/null always valid (not a
// deposit invoice), otherwise a whole number in 1-99.
export function validateDepositPercent(depositPercent: unknown): string | null {
  if (depositPercent === undefined || depositPercent === null) return null
  if (typeof depositPercent !== 'number' || !Number.isInteger(depositPercent) || depositPercent < 1 || depositPercent > 99) {
    return 'depositPercent must be a whole number between 1 and 99.'
  }
  return null
}

// Builds the "what's owed" sentence for the invoice-send email. Every
// invoice now has exactly one amount and one due date again (no more
// two-leg split within one invoice) -- the only thing that varies is
// whether it's a deposit, in which case the client is told what larger
// total it's a percentage of, rather than left to wonder.
export function buildPaymentSummary(invoice: Pick<Invoice, 'currency' | 'amount' | 'amount_paid' | 'deposit_percent'>): string {
  const balanceDue = round2(Math.max(0, invoice.amount - invoice.amount_paid))
  const impliedTotal = computeImpliedTotal(invoice)

  if (impliedTotal == null) {
    return `(${invoice.currency} ${balanceDue.toLocaleString()} ${invoice.amount_paid > 0 ? 'balance due' : 'due'}). Payment instructions are on the invoice.`
  }

  if (invoice.amount_paid >= invoice.amount) {
    return 'This deposit has been received in full — thank you!'
  }

  return `This is a deposit of ${invoice.currency} ${invoice.amount.toLocaleString()} `
    + `(${invoice.deposit_percent}% of the ${invoice.currency} ${impliedTotal.toLocaleString()} total). `
    + 'Payment instructions are on the invoice.'
}

// Every invoice this one is linked to in either direction: the one it
// followed on from (its parent_invoice_id, if any) and any that followed
// on from it (their parent_invoice_id pointing back at this one). The
// first self-referencing relationship in this schema -- see the
// parent_invoice_id comment on the Invoice type for why. Ordered oldest
// first so a deposit always appears before the balance invoice it led to.
export async function getRelatedInvoices(db: D1Database, invoice: Pick<Invoice, 'id' | 'parent_invoice_id'>): Promise<Invoice[]> {
  const { results } = await db.prepare(
    'SELECT * FROM invoices WHERE (id = ? OR parent_invoice_id = ?) AND id != ? ORDER BY created_at ASC'
  ).bind(invoice.parent_invoice_id, invoice.id, invoice.id).all<Invoice>()
  return results
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

// Tracking after a successful send, mirroring markVoucherSent's
// convention in src/lib/bookings.ts (same shape, called the same way —
// after the email has already gone out, not wrapped in a try/catch there
// either).
export async function markInvoiceSent(db: D1Database, invoiceId: number, r2Key: string): Promise<void> {
  await db.prepare('UPDATE invoices SET sent_at = CURRENT_TIMESTAMP, sent_r2_key = ? WHERE id = ?')
    .bind(r2Key, invoiceId)
    .run()
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
