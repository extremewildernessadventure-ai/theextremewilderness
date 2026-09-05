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

// Shared between the invoices list page and PaymentPanel's per-installment
// status badges, so a "partial" status always reads the same shade of
// green/gold/khaki everywhere it appears. unpaid = needs attention;
// partial = payment in progress; paid = closed out successfully;
// cancelled = void (list-page-only; an installment leg is never cancelled
// on its own, see InstallmentLeg's status type below).
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

export interface InstallmentLeg {
  amount: number
  dueDate: string | null
  paid: number
  // 'cancelled' is a whole-invoice concept (see deriveStatus), not something
  // one leg of a split can independently be -- excluded here deliberately.
  status: Exclude<Invoice['status'], 'cancelled'>
}

export interface InstallmentBreakdown {
  deposit: InstallmentLeg
  balance: InstallmentLeg
}

// null return means "no split" -- the caller falls back to today's flat
// single-total rendering. Deposit/balance dollar amounts are always derived
// from the invoice's current `amount` here, never stored: an invoice's
// amount is itself already a derived value recalculated whenever line
// items change (recalculateInvoiceTotals above), so computing the split at
// read time is what keeps a later item edit from leaving a stale deposit
// figure behind. Payments aren't allocated to a specific installment in the
// schema (invoice_payments has no installment reference) -- they're applied
// deposit-first here instead, which matches how a real payer's money is
// actually meant to be used and needs no new schema at all.
export function computeInstallments(
  invoice: Pick<Invoice, 'amount' | 'amount_paid' | 'deposit_percent' | 'due_date' | 'balance_due_date'>
): InstallmentBreakdown | null {
  if (invoice.deposit_percent == null) return null

  const depositAmount = round2(invoice.amount * invoice.deposit_percent / 100)
  const balanceAmount = round2(invoice.amount - depositAmount)
  const depositPaid = round2(Math.min(invoice.amount_paid, depositAmount))
  const balancePaid = round2(Math.max(0, invoice.amount_paid - depositAmount))

  const legStatus = (amount: number, paid: number): InstallmentLeg['status'] => {
    if (paid <= 0) return 'unpaid'
    if (paid >= amount) return 'paid'
    return 'partial'
  }

  return {
    deposit: { amount: depositAmount, dueDate: invoice.due_date, paid: depositPaid, status: legStatus(depositAmount, depositPaid) },
    balance: { amount: balanceAmount, dueDate: invoice.balance_due_date, paid: balancePaid, status: legStatus(balanceAmount, balancePaid) },
  }
}

// Shared by both POST /api/admin/invoices and PATCH /api/admin/invoices/[id]
// so a deposit split can never be created half-configured by either path.
// depositPercent undefined/null means "no split" and is always valid; a
// stray balanceDueDate with no depositPercent is rejected rather than
// silently ignored, since the two fields are only ever meant to appear
// together. Callers must pass the *effective* post-write value of each
// field (not just what's in a partial PATCH body) -- see the PATCH route
// for how it merges the existing row with the incoming body first.
export function validateDepositSplit(depositPercent: unknown, balanceDueDate: unknown, dueDate: unknown): string | null {
  if (depositPercent === undefined || depositPercent === null) {
    if (balanceDueDate) return 'balanceDueDate was provided without depositPercent -- remove one or set both.'
    return null
  }
  if (typeof depositPercent !== 'number' || !Number.isInteger(depositPercent) || depositPercent < 1 || depositPercent > 99) {
    return 'depositPercent must be a whole number between 1 and 99.'
  }
  if (!dueDate) {
    return 'A deposit due date (dueDate) is required when depositPercent is set.'
  }
  if (!balanceDueDate) {
    return 'balanceDueDate is required when depositPercent is set.'
  }
  return null
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
