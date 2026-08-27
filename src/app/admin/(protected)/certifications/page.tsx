import Link from 'next/link'
import { getDb } from '@/lib/db'
import type { GuideCertification } from '@/lib/hr'
import AdminTable, { type AdminTableColumn } from '@/components/admin/AdminTable'

export const dynamic = 'force-dynamic'

type CertRow = GuideCertification & { guide_name: string }

function certStatus(expiresAt: string | null): { label: string; pillClass: string; expiringSoon: boolean; expired: boolean } {
  if (!expiresAt) return { label: 'No Expiry', pillClass: 'open', expiringSoon: false, expired: false }
  const daysLeft = (new Date(expiresAt).getTime() - Date.now()) / (1000 * 60 * 60 * 24)
  if (daysLeft < 0) return { label: 'Expired', pillClass: 'cancelled', expiringSoon: false, expired: true }
  if (daysLeft < 60) return { label: 'Expiring Soon', pillClass: 'few', expiringSoon: true, expired: false }
  return { label: 'Valid', pillClass: 'open', expiringSoon: false, expired: false }
}

const columns: AdminTableColumn<CertRow>[] = [
  {
    header: 'Staff Member',
    render: (c) => (
      <Link href={`/admin/guides/${c.guide_id}`} className="text-brand font-medium hover:underline">
        {c.guide_name}
      </Link>
    ),
  },
  {
    header: 'Certification',
    className: 'text-gray-700',
    render: (c) => c.issuing_body ? `${c.type} — ${c.issuing_body}` : c.type,
  },
  { header: 'Issued', className: 'dates-cell', render: (c) => c.issued_at ?? '—' },
  { header: 'Expiry', className: 'dates-cell', render: (c) => c.expires_at ?? '—' },
  {
    header: 'Status',
    render: (c) => {
      const status = certStatus(c.expires_at)
      return <span className={`pill ${status.pillClass}`}><i />{status.label}</span>
    },
  },
]

export default async function CertificationsListPage() {
  const db = await getDb()
  const { results } = await db.prepare(`
    SELECT guide_certifications.*, guides.name AS guide_name
    FROM guide_certifications
    JOIN guides ON guides.id = guide_certifications.guide_id
    ORDER BY guide_certifications.expires_at IS NULL, guide_certifications.expires_at ASC
  `).all<CertRow>()

  const total = results.length
  const expiringSoon = results.filter((c) => certStatus(c.expires_at).expiringSoon).length
  const expired = results.filter((c) => certStatus(c.expires_at).expired).length

  return (
    <div>
      <div className="page-head">
        <div>
          <h1>Certifications</h1>
          <p>Tracked across every guide — add or edit a certification from the guide&apos;s own detail page.</p>
        </div>
      </div>

      <div className="stats-row">
        <div className="stat-card">
          <div className="stat-label">Total Tracked</div>
          <div className="stat-num">{total}</div>
        </div>
        <div className="stat-card gold">
          <div className="stat-label">Expiring Soon</div>
          <div className="stat-num">{expiringSoon}</div>
        </div>
        <div className="stat-card rust">
          <div className="stat-label">Expired</div>
          <div className="stat-num">{expired}</div>
        </div>
      </div>

      <AdminTable
        columns={columns}
        rows={results}
        rowKey={(c) => c.id}
        emptyMessage="No certifications tracked yet."
        rowClassName={(c) => (certStatus(c.expires_at).expiringSoon ? 'warn' : undefined)}
      />
    </div>
  )
}
