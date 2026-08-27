import Link from 'next/link'
import { getDb } from '@/lib/db'
import type { Review } from '@/lib/reviews'
import AdminTable, { type AdminTableColumn } from '@/components/admin/AdminTable'
import ReviewStatusSelect from './ReviewStatusSelect'
import DeleteButton from '@/components/admin/DeleteButton'

export const dynamic = 'force-dynamic'

const columns: AdminTableColumn<Review>[] = [
  { header: 'Rating', className: 'text-amber-500', render: (r) => '★'.repeat(r.rating) + '☆'.repeat(5 - r.rating) },
  { header: 'Quote', className: 'text-gray-700 max-w-[360px] truncate', render: (r) => r.quote_text },
  { header: 'Source', className: 'text-gray-500', render: (r) => r.source ?? '—' },
  { header: 'Park', className: 'text-gray-500', render: (r) => r.park_tag ?? '—' },
  { header: 'Status', render: (r) => <ReviewStatusSelect reviewId={r.id} currentStatus={r.status} compact /> },
  {
    header: '',
    render: (r) => (
      <DeleteButton
        endpoint={`/api/admin/reviews/${r.id}`}
        confirmMessage="Delete this review? This cannot be undone."
        redirectTo="/admin/reviews"
        label="Delete"
      />
    ),
  },
]

export default async function ReviewsListPage() {
  const db = await getDb()
  const { results } = await db.prepare('SELECT * FROM reviews ORDER BY created_at DESC').all<Review>()

  return (
    <div>
      <div className="page-head">
        <div>
          <h1>Reviews</h1>
          <p>Only paste verbatim quotes from a verified external review (TripAdvisor, Google) — never invented or paraphrased.</p>
        </div>
        <Link href="/admin/reviews/new" className="btn-primary" style={{ whiteSpace: 'nowrap' }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M12 5v14M5 12h14" /></svg>
          New Review
        </Link>
      </div>

      <AdminTable columns={columns} rows={results} rowKey={(r) => r.id} emptyMessage="No reviews yet." />
    </div>
  )
}
