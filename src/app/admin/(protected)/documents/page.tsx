import Link from 'next/link'
import { getDb } from '@/lib/db'
import { DOCUMENT_STATUSES, type ClientDocument, type DocumentType } from '@/lib/documents'
import AdminTable, { type AdminTableColumn } from '@/components/admin/AdminTable'
import DocumentReviewControls from './DocumentReviewControls'

export const dynamic = 'force-dynamic'

type DocumentRow = ClientDocument & { client_name: string }

const TYPE_LABELS: Record<DocumentType, string> = { passport: 'Passport', waiver: 'Waiver', visa: 'Visa', other: 'Other' }

type Props = { searchParams: Promise<{ status?: string }> }

export default async function DocumentsListPage({ searchParams }: Props) {
  const { status } = await searchParams
  const db = await getDb()

  const where = status && (DOCUMENT_STATUSES as string[]).includes(status) ? 'WHERE documents.status = ?' : ''
  const { results } = where
    ? await db.prepare(`
        SELECT documents.*, clients.name AS client_name FROM documents
        JOIN clients ON clients.id = documents.client_id
        ${where} ORDER BY documents.uploaded_at DESC
      `).bind(status).all<DocumentRow>()
    : await db.prepare(`
        SELECT documents.*, clients.name AS client_name FROM documents
        JOIN clients ON clients.id = documents.client_id
        ORDER BY documents.uploaded_at DESC
      `).all<DocumentRow>()

  const columns: AdminTableColumn<DocumentRow>[] = [
    {
      header: 'File',
      render: (d) => (
        <a href={`/api/admin/documents/${d.id}`} target="_blank" rel="noopener noreferrer" className="text-brand font-medium hover:underline">
          {d.filename}
        </a>
      ),
    },
    { header: 'Client', className: 'text-gray-700', render: (d) => d.client_name },
    { header: 'Type', className: 'text-gray-700', render: (d) => TYPE_LABELS[d.type] },
    { header: 'Uploaded', className: 'text-gray-500', render: (d) => new Date(d.uploaded_at).toLocaleDateString() },
    { header: 'Review', render: (d) => <DocumentReviewControls documentId={d.id} status={d.status} /> },
  ]

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-brand">Documents</h1>
        <Link
          href="/admin/documents/new"
          className="px-4 py-2.5 bg-brand hover:bg-brand-secondary text-white text-sm font-semibold rounded-lg transition-colors"
        >
          + Upload Document
        </Link>
      </div>

      <form method="get" className="flex items-center gap-2 mb-4">
        <select
          name="status"
          defaultValue={status ?? ''}
          className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/10"
        >
          <option value="">All statuses</option>
          {DOCUMENT_STATUSES.map((s) => <option key={s} value={s} className="capitalize">{s}</option>)}
        </select>
        <button type="submit" className="px-4 py-2 bg-brand hover:bg-brand-secondary text-white text-sm font-semibold rounded-lg transition-colors">
          Filter
        </button>
      </form>

      <AdminTable
        columns={columns}
        rows={results}
        rowKey={(d) => d.id}
        emptyMessage={`No documents ${status ? 'match this filter' : 'uploaded yet'}.`}
      />
    </div>
  )
}
