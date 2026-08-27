import Link from 'next/link'
import { getDb } from '@/lib/db'
import { QUOTE_STATUSES, type Quote } from '@/lib/quotes'
import { packages } from '@/data/packages'
import AdminTable, { type AdminTableColumn } from '@/components/admin/AdminTable'
import SearchBar from '@/components/admin/SearchBar'
import QuoteStatusSelect from './QuoteStatusSelect'

export const dynamic = 'force-dynamic'

type QuoteRow = Quote & { lead_name: string | null; lead_email: string }

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
    conditions.push('(leads.name LIKE ? OR leads.email LIKE ?)')
    args.push(`%${q.trim()}%`, `%${q.trim()}%`)
  }
  const where = conditions.length ? `WHERE ${conditions.join(' AND ')}` : ''

  const { results } = await db.prepare(`
    SELECT quotes.*, leads.name AS lead_name, leads.email AS lead_email
    FROM quotes JOIN leads ON leads.id = quotes.lead_id
    ${where}
    ORDER BY quotes.created_at DESC
  `).bind(...args).all<QuoteRow>()

  const columns: AdminTableColumn<QuoteRow>[] = [
    {
      header: 'Client',
      render: (row) => (
        <Link href={`/admin/quotes/${row.id}`} className="text-brand font-medium hover:underline">
          {row.lead_name || row.lead_email}
        </Link>
      ),
    },
    { header: 'Package', className: 'text-gray-700', render: (row) => packageName(row.package_slug) },
    { header: 'Price', className: 'text-gray-700', render: (row) => `${row.currency} ${row.price.toLocaleString()}` },
    { header: 'Status', render: (row) => <QuoteStatusSelect quoteId={row.id} currentStatus={row.status} compact /> },
    { header: 'Created', className: 'text-gray-500', render: (row) => new Date(row.created_at).toLocaleDateString() },
  ]

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-brand">Quotes</h1>
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-4">
        <form method="get" className="flex items-center gap-2">
          {q && <input type="hidden" name="q" value={q} />}
          <select
            name="status"
            defaultValue={status ?? ''}
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/10"
          >
            <option value="">All statuses</option>
            {QUOTE_STATUSES.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
          <button type="submit" className="px-4 py-2 bg-brand hover:bg-brand-secondary text-white text-sm font-semibold rounded-lg transition-colors">
            Filter
          </button>
        </form>
        <SearchBar basePath="/admin/quotes" initialQuery={q ?? ''} placeholder="Search client name or email…" />
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
