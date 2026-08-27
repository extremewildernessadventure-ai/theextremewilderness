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
      render: (s) => (
        <span className={`inline-flex px-2.5 py-1 rounded-full text-xs font-semibold ${s.status === 'subscribed' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'}`}>
          {s.status}
        </span>
      ),
    },
    { header: 'Subscribed', className: 'text-gray-500', render: (s) => new Date(s.created_at).toLocaleDateString() },
    { header: '', render: (s) => <DeleteSubscriberButton subscriberId={s.id} /> },
  ]

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-brand">Newsletter</h1>
          <p className="text-sm text-gray-500 mt-1">{subscribedCount} subscribed / {results.length} total</p>
        </div>
        <div className="flex items-center gap-3">
          {/* Plain <a>, not <Link> — this is a file download, not a page transition. */}
          <a
            href="/api/admin/newsletter/export"
            className="px-4 py-2.5 border border-gray-200 text-gray-700 hover:bg-gray-50 text-sm font-semibold rounded-lg transition-colors"
          >
            Export CSV
          </a>
          <Link
            href="/admin/newsletter/blast"
            className="px-4 py-2.5 bg-brand hover:bg-brand-secondary text-white text-sm font-semibold rounded-lg transition-colors"
          >
            Send Blast
          </Link>
        </div>
      </div>

      <div className="mb-4">
        <SearchBar basePath="/admin/newsletter" initialQuery={q ?? ''} placeholder="Search email…" />
      </div>

      <AdminTable columns={columns} rows={results} rowKey={(s) => s.id} emptyMessage="No subscribers yet." />
    </div>
  )
}
