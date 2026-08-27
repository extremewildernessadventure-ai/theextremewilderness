import Link from 'next/link'
import { getDb } from '@/lib/db'
import type { NewsletterSubscriber } from '@/lib/newsletter'
import AdminTable, { type AdminTableColumn } from '@/components/admin/AdminTable'
import SearchBar from '@/components/admin/SearchBar'
import DeleteSubscriberButton from './DeleteSubscriberButton'

export const dynamic = 'force-dynamic'

type Props = { searchParams: Promise<{ q?: string }> }

export default async function NewsletterListPage({ searchParams }: Props) {
  const { q } = await searchParams
  const db = await getDb()

  const { results } = q?.trim()
    ? await db.prepare('SELECT * FROM newsletter_subscribers WHERE email LIKE ? ORDER BY created_at DESC').bind(`%${q.trim()}%`).all<NewsletterSubscriber>()
    : await db.prepare('SELECT * FROM newsletter_subscribers ORDER BY created_at DESC').all<NewsletterSubscriber>()

  const subscribedCount = results.filter((s) => s.status === 'subscribed').length

  const columns: AdminTableColumn<NewsletterSubscriber>[] = [
    { header: 'Email', className: 'text-gray-700 font-medium', render: (s) => s.email },
    { header: 'Source', className: 'text-gray-500', render: (s) => s.source ?? '—' },
    {
      header: 'Status',
      render: (s) => <span className={`pill ${s.status === 'subscribed' ? 'open' : 'full'}`}><i />{s.status}</span>,
    },
    { header: 'Subscribed', className: 'text-gray-500', render: (s) => new Date(s.created_at).toLocaleDateString() },
    { header: '', render: (s) => <DeleteSubscriberButton subscriberId={s.id} /> },
  ]

  return (
    <div>
      <div className="page-head">
        <div>
          <h1>Newsletter</h1>
          <p>{subscribedCount} subscribed / {results.length} total</p>
        </div>
        <div className="flex items-center gap-3">
          {/* Plain <a>, not <Link> — this is a file download, not a page transition. */}
          <a href="/api/admin/newsletter/export" className="btn-outline">
            Export CSV
          </a>
          <Link href="/admin/newsletter/blast" className="btn-primary">
            Send Blast
          </Link>
        </div>
      </div>

      <div className="filter-bar">
        <SearchBar basePath="/admin/newsletter" initialQuery={q ?? ''} placeholder="Search email…" />
      </div>

      <AdminTable columns={columns} rows={results} rowKey={(s) => s.id} emptyMessage="No subscribers yet." />
    </div>
  )
}
