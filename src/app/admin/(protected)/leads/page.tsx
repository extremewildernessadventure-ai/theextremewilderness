import { getDb } from '@/lib/db'
import type { Lead, LeadType } from '@/lib/leads'
import TypeBadge from './TypeBadge'
import LeadStatusSelect from './LeadStatusSelect'
import SearchBar from './SearchBar'
import GmailStatusBanner from './GmailStatusBanner'
import AdminTable, { type AdminTableColumn } from '@/components/admin/AdminTable'
import Pager from '@/components/admin/Pager'
import Link from 'next/link'

export const dynamic = 'force-dynamic'

const PAGE_SIZE = 25
const TYPES: LeadType[] = ['contact', 'enquiry', 'newsletter', 'pdf-lead', 'plan-brief', 'exit-intent-claim', 'trade-partners']

function formatRelativeTime(iso: string): string {
  // D1 stores CURRENT_TIMESTAMP as "YYYY-MM-DD HH:MM:SS" (UTC, no offset) —
  // append 'Z' so Date parses it as UTC instead of local time.
  const date = new Date(iso.includes('T') ? iso : `${iso.replace(' ', 'T')}Z`)
  const seconds = Math.floor((Date.now() - date.getTime()) / 1000)
  if (seconds < 60) return 'just now'
  const minutes = Math.floor(seconds / 60)
  if (minutes < 60) return `${minutes}m ago`
  const hours = Math.floor(minutes / 60)
  if (hours < 24) return `${hours}h ago`
  const days = Math.floor(hours / 24)
  if (days < 7) return `${days}d ago`
  return date.toLocaleDateString()
}

type Props = { searchParams: Promise<{ type?: string; q?: string; page?: string }> }

export default async function LeadsListPage({ searchParams }: Props) {
  const { type, q, page: pageParam } = await searchParams
  const page = Math.max(1, Number(pageParam) || 1)
  const offset = (page - 1) * PAGE_SIZE

  const db = await getDb()

  const conditions: string[] = []
  const args: unknown[] = []
  if (type && TYPES.includes(type as LeadType)) {
    conditions.push('type = ?')
    args.push(type)
  }
  if (q?.trim()) {
    conditions.push('(name LIKE ? OR email LIKE ? OR subject LIKE ?)')
    args.push(`%${q.trim()}%`, `%${q.trim()}%`, `%${q.trim()}%`)
  }
  const where = conditions.length ? `WHERE ${conditions.join(' AND ')}` : ''

  const { results } = await db.prepare(
    `SELECT * FROM leads ${where} ORDER BY created_at DESC LIMIT ? OFFSET ?`
  ).bind(...args, PAGE_SIZE, offset).all<Lead>()
  const totalRow = await db.prepare(`SELECT COUNT(*) as count FROM leads ${where}`).bind(...args).first<{ count: number }>()
  const total = totalRow?.count ?? 0
  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE))

  const statsRow = await db.prepare(`
    SELECT
      COUNT(*) as total,
      SUM(CASE WHEN created_at >= datetime('now', '-7 days') THEN 1 ELSE 0 END) as thisWeek,
      SUM(CASE WHEN status IN ('new', 'contacted') AND NOT EXISTS (SELECT 1 FROM quotes WHERE quotes.lead_id = leads.id) THEN 1 ELSE 0 END) as awaitingQuote,
      SUM(CASE WHEN status = 'converted' AND updated_at >= date('now', 'start of month') THEN 1 ELSE 0 END) as wonThisMonth
    FROM leads
  `).first<{ total: number; thisWeek: number; awaitingQuote: number; wonThisMonth: number }>()

  function pageHref(nextPage: number) {
    const params = new URLSearchParams()
    if (type) params.set('type', type)
    if (q) params.set('q', q)
    params.set('page', String(nextPage))
    return `?${params.toString()}`
  }

  const columns: AdminTableColumn<Lead>[] = [
    {
      header: 'Lead',
      render: (lead) => (
        <Link href={`/admin/leads/${lead.id}`} className="text-brand font-medium hover:underline">
          {lead.name || lead.email}
        </Link>
      ),
    },
    { header: 'Contact', className: 'text-gray-700', render: (lead) => lead.email },
    { header: 'Source', render: (lead) => <TypeBadge type={lead.type} /> },
    { header: 'Status', render: (lead) => <LeadStatusSelect leadId={lead.id} currentStatus={lead.status} compact /> },
    {
      header: 'Last Activity',
      className: 'dates-cell',
      render: (lead) => <span title={lead.created_at}>{formatRelativeTime(lead.created_at)}</span>,
    },
  ]

  return (
    <div>
      <div className="page-head">
        <div>
          <h1>Leads</h1>
          <p>{total} total · {statsRow?.awaitingQuote ?? 0} awaiting quote</p>
        </div>
      </div>

      <GmailStatusBanner />

      {/* "Awaiting Quote" is the number that actually matters: leads still
          being worked with no quote sent yet. */}
      <div className="stats-row">
        <div className="stat-card">
          <div className="stat-label">Total Leads</div>
          <div className="stat-num">{statsRow?.total ?? 0}</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">New This Week</div>
          <div className="stat-num">{statsRow?.thisWeek ?? 0}</div>
        </div>
        <div className="stat-card gold">
          <div className="stat-label">Awaiting Quote</div>
          <div className="stat-num">{statsRow?.awaitingQuote ?? 0}</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Won This Month</div>
          <div className="stat-num">{statsRow?.wonThisMonth ?? 0}</div>
        </div>
      </div>

      <div className="filter-bar">
        <SearchBar initialQuery={q ?? ''} />
        <form method="get" className="flex items-center gap-2">
          {q && <input type="hidden" name="q" value={q} />}
          <div className="select-field">
            <select name="type" defaultValue={type ?? ''}>
              <option value="">All types</option>
              {TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>
          <button type="submit" className="btn-outline">Filter</button>
        </form>
      </div>

      <AdminTable
        columns={columns}
        rows={results}
        rowKey={(lead) => lead.id}
        emptyMessage={`No leads ${type || q ? 'match this filter' : 'yet'}.`}
        rowClassName={(lead) => (lead.status === 'new' ? 'warn' : undefined)}
      />

      <Pager page={page} totalPages={totalPages} makeHref={pageHref} />
    </div>
  )
}
