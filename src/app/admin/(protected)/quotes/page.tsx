import Link from 'next/link'
import { getDb } from '@/lib/db'
import { QUOTE_STATUSES, type Quote } from '@/lib/quotes'
import { packages } from '@/data/packages'
import AdminTable, { type AdminTableColumn } from '@/components/admin/AdminTable'
import SearchBar from '@/components/admin/SearchBar'
import QuoteStatusSelect from './QuoteStatusSelect'

export const dynamic = 'force-dynamic'

type QuoteRow = Quote & { lead_name: string | null; lead_email: string | null; client_name: string | null; client_email: string | null }

function packageName(slug: string | null): string {
  if (!slug) return '—'
  return packages.find((p) => p.slug === slug)?.name ?? slug
}

type Props = { searchParams: Promise<{ status?: string; q?: string }> }

export default async function QuotesListPage({ searchParams }: Props) {
  const { status, q } = await searchParams
  const db = await getDb()

  const conditions: string[] = []
  const args: unknown[] = []
  if (status && (QUOTE_STATUSES as string[]).includes(status)) {
    conditions.push('quotes.status = ?')
    args.push(status)
  }
  if (q?.trim()) {
    conditions.push('(leads.name LIKE ? OR leads.email LIKE ? OR clients.name LIKE ? OR clients.email LIKE ?)')
    args.push(`%${q.trim()}%`, `%${q.trim()}%`, `%${q.trim()}%`, `%${q.trim()}%`)
  }
  const where = conditions.length ? `WHERE ${conditions.join(' AND ')}` : ''

  const { results } = await db.prepare(`
    SELECT quotes.*, leads.name AS lead_name, leads.email AS lead_email, clients.name AS client_name, clients.email AS client_email
    FROM quotes
    LEFT JOIN leads ON leads.id = quotes.lead_id
    LEFT JOIN clients ON clients.id = quotes.client_id
    ${where}
    ORDER BY quotes.created_at DESC
  `).bind(...args).all<QuoteRow>()

  const statsRow = await db.prepare(`
    SELECT
      SUM(CASE WHEN status = 'sent' AND created_at >= datetime('now', '-30 days') THEN 1 ELSE 0 END) as sent30d,
      SUM(CASE WHEN status = 'sent' THEN 1 ELSE 0 END) as awaitingResponse,
      SUM(CASE WHEN status = 'accepted' THEN 1 ELSE 0 END) as accepted,
      SUM(CASE WHEN status = 'expired' THEN 1 ELSE 0 END) as expired
    FROM quotes
  `).first<{ sent30d: number; awaitingResponse: number; accepted: number; expired: number }>()

  const columns: AdminTableColumn<QuoteRow>[] = [
    {
      header: 'Client',
      render: (row) => (
        <Link href={`/admin/quotes/${row.id}`} className="text-brand font-medium hover:underline">
          {row.lead_name || row.lead_email || row.client_name || row.client_email}
        </Link>
      ),
    },
    { header: 'Package', className: 'text-gray-700', render: (row) => packageName(row.package_slug) },
    { header: 'Amount', className: 'mono', render: (row) => `${row.currency} ${row.price.toLocaleString()}` },
    { header: 'Sent Date', className: 'dates-cell', render: (row) => new Date(row.created_at).toLocaleDateString() },
    { header: 'Status', render: (row) => <QuoteStatusSelect quoteId={row.id} currentStatus={row.status} compact /> },
  ]

  return (
    <div>
      <div className="page-head">
        <div>
          <h1>Quotes</h1>
        </div>
      </div>

      <div className="stats-row">
        <div className="stat-card">
          <div className="stat-label">Quotes Sent (30d)</div>
          <div className="stat-num">{statsRow?.sent30d ?? 0}</div>
        </div>
        <div className="stat-card gold">
          <div className="stat-label">Awaiting Response</div>
          <div className="stat-num">{statsRow?.awaitingResponse ?? 0}</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Accepted</div>
          <div className="stat-num">{statsRow?.accepted ?? 0}</div>
        </div>
        <div className="stat-card rust">
          <div className="stat-label">Expired</div>
          <div className="stat-num">{statsRow?.expired ?? 0}</div>
        </div>
      </div>

      <div className="filter-bar">
        <SearchBar basePath="/admin/quotes" initialQuery={q ?? ''} placeholder="Search client name or email…" />
        <form method="get" className="flex items-center gap-2">
          {q && <input type="hidden" name="q" value={q} />}
          <div className="select-field">
            <select name="status" defaultValue={status ?? ''}>
              <option value="">All statuses</option>
              {QUOTE_STATUSES.map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
          <button type="submit" className="btn-outline">Filter</button>
        </form>
      </div>

      <AdminTable
        columns={columns}
        rows={results}
        rowKey={(row) => row.id}
        emptyMessage={`No quotes ${status || q ? 'match this filter' : 'yet'}.`}
      />
    </div>
  )
}
