import Link from 'next/link'
import { getDb } from '@/lib/db'
import type { Lead, LeadType } from '@/lib/leads'
import TypeBadge from './TypeBadge'
import LeadStatusSelect from './LeadStatusSelect'
import SearchBar from './SearchBar'
import GmailStatusBanner from './GmailStatusBanner'

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
      SUM(CASE WHEN status = 'new' THEN 1 ELSE 0 END) as newCount,
      SUM(CASE WHEN created_at >= datetime('now', '-7 days') THEN 1 ELSE 0 END) as thisWeek,
      SUM(CASE WHEN status = 'new' AND created_at <= datetime('now', '-2 days') THEN 1 ELSE 0 END) as needsFollowUp
    FROM leads
  `).first<{ total: number; newCount: number; thisWeek: number; needsFollowUp: number }>()

  const stats = [
    { label: 'Total leads', value: statsRow?.total ?? 0, accent: 'text-brand' },
    { label: 'New', value: statsRow?.newCount ?? 0, accent: 'text-amber-600' },
    { label: 'This week', value: statsRow?.thisWeek ?? 0, accent: 'text-blue-600' },
    { label: 'Needs follow-up', value: statsRow?.needsFollowUp ?? 0, accent: 'text-red-600' },
  ]

  function pageHref(nextPage: number) {
    const params = new URLSearchParams()
    if (type) params.set('type', type)
    if (q) params.set('q', q)
    params.set('page', String(nextPage))
    return `?${params.toString()}`
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-brand">Leads</h1>
      </div>

      <GmailStatusBanner />

      {/* Stat strip — "Needs follow-up" is the number that actually matters:
          new leads sitting unactioned for 48h+, i.e. at risk of being dropped. */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {stats.map((s) => (
          <div key={s.label} className="bg-white border border-gray-200 rounded-xl p-5">
            <p className={`text-2xl font-bold ${s.accent}`}>{s.value}</p>
            <p className="text-xs text-gray-500 uppercase tracking-wide mt-1">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-4">
        <form method="get" className="flex items-center gap-2">
          {q && <input type="hidden" name="q" value={q} />}
          <select
            name="type"
            defaultValue={type ?? ''}
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/10"
          >
            <option value="">All types</option>
            {TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
          <button type="submit" className="px-4 py-2 bg-brand hover:bg-brand-secondary text-white text-sm font-semibold rounded-lg transition-colors">
            Filter
          </button>
        </form>
        <SearchBar initialQuery={q ?? ''} />
      </div>

      {results.length === 0 ? (
        <div className="bg-white border border-gray-200 rounded-xl p-10 text-center text-gray-500 text-sm">
          No leads {type || q ? 'match this filter' : 'yet'}.
        </div>
      ) : (
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-start px-5 py-3 font-semibold text-xs uppercase tracking-wide text-gray-500">Name</th>
                <th className="text-start px-5 py-3 font-semibold text-xs uppercase tracking-wide text-gray-500">Type</th>
                <th className="text-start px-5 py-3 font-semibold text-xs uppercase tracking-wide text-gray-500">Subject</th>
                <th className="text-start px-5 py-3 font-semibold text-xs uppercase tracking-wide text-gray-500">Status</th>
                <th className="text-start px-5 py-3 font-semibold text-xs uppercase tracking-wide text-gray-500">Received</th>
              </tr>
            </thead>
            <tbody>
              {results.map((lead) => (
                <tr key={lead.id} className="border-b border-gray-100 last:border-0 hover:bg-gray-50">
                  <td className={`px-5 py-3 ${lead.status === 'new' ? 'border-s-2 border-s-gold' : ''}`}>
                    <Link href={`/admin/leads/${lead.id}`} className="text-brand font-medium hover:underline">
                      {lead.name || lead.email}
                    </Link>
                  </td>
                  <td className="px-5 py-3"><TypeBadge type={lead.type} /></td>
                  <td className="px-5 py-3 text-gray-700 max-w-[220px] truncate">{lead.subject ?? '—'}</td>
                  <td className="px-5 py-3">
                    <LeadStatusSelect leadId={lead.id} currentStatus={lead.status} compact />
                  </td>
                  <td className="px-5 py-3 text-gray-500 whitespace-nowrap" title={lead.created_at}>
                    {formatRelativeTime(lead.created_at)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-4 mt-6 text-sm">
          {page > 1 && <Link href={pageHref(page - 1)} className="text-brand hover:underline">← Prev</Link>}
          <span className="text-gray-500">Page {page} of {totalPages}</span>
          {page < totalPages && <Link href={pageHref(page + 1)} className="text-brand hover:underline">Next →</Link>}
        </div>
      )}
    </div>
  )
}
