import Link from 'next/link'
import { getDb, type Invoice } from '@/lib/db'
import { INVOICE_STATUS_PILL_CLASS } from '@/lib/invoices'
import AdminTable, { type AdminTableColumn } from '@/components/admin/AdminTable'

export const dynamic = 'force-dynamic'

function isOverdue(inv: Invoice): boolean {
  return (inv.status === 'unpaid' || inv.status === 'partial') && !!inv.due_date && inv.due_date < new Date().toISOString().slice(0, 10)
}

// A linked (follow-up) invoice renders as an indented sub-row directly
// beneath the original invoice it traces back to, rather than wherever its
// own created_at happens to sort it into the flat list — even a chain 5+
// invoices deep collapses to one single sub-row indentation level under its
// one root, oldest-issued first. Done here in memory (not a DB query) since
// the page already loads every invoice in one shot; see getInvoiceFamily in
// src/lib/invoices.ts for the equivalent DB-side walk used by the detail
// page (which only has one invoice's id to start from, not the whole list).
type InvoiceRow = { invoice: Invoice; isChild: boolean }

function buildNestedRows(invoices: Invoice[]): InvoiceRow[] {
  const byId = new Map(invoices.map((inv) => [inv.id, inv]))

  function findRootId(inv: Invoice): number {
    let current = inv
    const seen = new Set([current.id])
    while (current.parent_invoice_id != null) {
      const parent = byId.get(current.parent_invoice_id)
      if (!parent || seen.has(parent.id)) break
      current = parent
      seen.add(current.id)
    }
    return current.id
  }

  const groups = new Map<number, Invoice[]>()
  for (const inv of invoices) {
    const rootId = findRootId(inv)
    if (!groups.has(rootId)) groups.set(rootId, [])
    groups.get(rootId)!.push(inv)
  }

  // Order groups by their most recent activity (descending) so the overall
  // list keeps today's "newest first" feel even though members within a
  // group are then shown oldest-first.
  const orderedGroups = [...groups.values()].sort((a, b) => {
    const aMax = Math.max(...a.map((i) => new Date(i.created_at).getTime()))
    const bMax = Math.max(...b.map((i) => new Date(i.created_at).getTime()))
    return bMax - aMax
  })

  const rows: InvoiceRow[] = []
  for (const group of orderedGroups) {
    const root = group.find((i) => i.parent_invoice_id == null) ?? group[0]
    const children = group
      .filter((i) => i.id !== root.id)
      .sort((a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime())
    rows.push({ invoice: root, isChild: false })
    for (const child of children) rows.push({ invoice: child, isChild: true })
  }
  return rows
}

const columns: AdminTableColumn<InvoiceRow>[] = [
  {
    header: 'Invoice No.',
    className: 'mono',
    render: ({ invoice: inv, isChild }) => (
      <Link href={`/admin/invoices/${inv.id}`} className={`text-brand font-medium hover:underline${isChild ? ' invoice-subrow-link' : ''}`}>
        {isChild && <span aria-hidden="true" className="invoice-subrow-arrow">↳</span>}
        {inv.invoice_number}
      </Link>
    ),
  },
  { header: 'Client', className: 'text-gray-700', render: ({ invoice: inv }) => inv.client_name },
  {
    header: 'Amount',
    className: 'mono',
    render: ({ invoice: inv }) => (
      <>
        {inv.currency} {inv.amount.toLocaleString()}
        {inv.deposit_percent != null && <span className="text-xs ms-1.5" style={{ color: 'var(--grey)' }}>(deposit, {inv.deposit_percent}%)</span>}
      </>
    ),
  },
  { header: 'Due Date', className: 'dates-cell', render: ({ invoice: inv }) => inv.due_date ?? '—' },
  { header: 'Status', render: ({ invoice: inv }) => <span className={`pill ${INVOICE_STATUS_PILL_CLASS[inv.status]}`}><i />{inv.status}</span> },
]

export default async function InvoicesListPage() {
  const db = await getDb()
  const { results } = await db.prepare('SELECT * FROM invoices ORDER BY created_at DESC').all<Invoice>()

  // Summed in USD only — invoices in other currencies aren't converted, so
  // mixing them into one total would misrepresent the figure.
  const statsRow = await db.prepare(`
    SELECT
      SUM(CASE WHEN currency = 'USD' AND created_at >= datetime('now', '-30 days') THEN amount ELSE 0 END) as totalInvoiced30d,
      SUM(CASE WHEN currency = 'USD' AND status = 'paid' THEN amount ELSE 0 END) as paid,
      SUM(CASE WHEN currency = 'USD' AND status IN ('unpaid', 'partial') THEN amount ELSE 0 END) as outstanding
    FROM invoices
  `).first<{ totalInvoiced30d: number; paid: number; outstanding: number }>()

  const overdueCount = results.filter(isOverdue).length
  const rows = buildNestedRows(results)

  return (
    <div>
      <div className="page-head">
        <div>
          <h1>Invoices</h1>
        </div>
        <Link href="/admin/invoices/new" className="btn-primary">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M12 5v14M5 12h14" /></svg>
          New Invoice
        </Link>
      </div>

      <div className="stats-row">
        <div className="stat-card">
          <div className="stat-label">Total Invoiced (30d)</div>
          <div className="stat-num">${(statsRow?.totalInvoiced30d ?? 0).toLocaleString()}</div>
          <div className="stat-sub">USD only</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Paid</div>
          <div className="stat-num">${(statsRow?.paid ?? 0).toLocaleString()}</div>
          <div className="stat-sub">USD only</div>
        </div>
        <div className="stat-card gold">
          <div className="stat-label">Outstanding</div>
          <div className="stat-num">${(statsRow?.outstanding ?? 0).toLocaleString()}</div>
          <div className="stat-sub">USD only</div>
        </div>
        <div className="stat-card rust">
          <div className="stat-label">Overdue</div>
          <div className="stat-num">{overdueCount}</div>
        </div>
      </div>

      <AdminTable
        columns={columns}
        rows={rows}
        rowKey={({ invoice }) => invoice.id}
        emptyMessage="No invoices yet."
        rowClassName={({ invoice, isChild }) => (isChild ? 'invoice-subrow' : isOverdue(invoice) ? 'warn' : undefined)}
      />
    </div>
  )
}
