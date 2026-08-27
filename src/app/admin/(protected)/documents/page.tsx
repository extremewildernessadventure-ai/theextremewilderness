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
      <div className="page-head">
        <div>
          <h1>Documents</h1>
        </div>
        <Link href="/admin/documents/new" className="btn-primary">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M12 5v14M5 12h14" /></svg>
          Upload Document
        </Link>
      </div>

      <div className="filter-bar">
        <form method="get" className="flex items-center gap-2">
          <div className="select-field">
            <select name="status" defaultValue={status ?? ''}>
              <option value="">All statuses</option>
              {DOCUMENT_STATUSES.map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
          <button type="submit" className="btn-outline">Filter</button>
        </form>
      </div>

      <AdminTable
        columns={columns}
        rows={results}
        rowKey={(d) => d.id}
        emptyMessage={`No documents ${status ? 'match this filter' : 'uploaded yet'}.`}
      />
    </div>
  )
}
