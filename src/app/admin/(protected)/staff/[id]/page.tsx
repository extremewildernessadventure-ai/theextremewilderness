import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getDb } from '@/lib/db'
import type { StaffMember } from '@/lib/hr'
import type { Guide } from '@/lib/ops'
import DeleteButton from '@/components/admin/DeleteButton'
import StaffEditForm from './StaffEditForm'

export const dynamic = 'force-dynamic'

type Props = { params: Promise<{ id: string }> }

export default async function StaffDetailPage({ params }: Props) {
  const { id } = await params
  const db = await getDb()
  const staffMember = await db.prepare('SELECT * FROM staff_members WHERE id = ?').bind(id).first<StaffMember>()
  if (!staffMember) notFound()

  const { results: guides } = await db.prepare('SELECT * FROM guides ORDER BY name ASC').all<Guide>()

  return (
    <div className="max-w-xl">
      <Link href="/admin/staff" className="text-sm text-gray-500 hover:text-brand mb-4 inline-block">← Back to Staff</Link>
      <h1 className="text-2xl font-bold text-brand mb-6">{staffMember.name}</h1>

      <div className="space-y-6">
        <StaffEditForm staffMember={staffMember} guides={guides} />
        <DeleteButton
          endpoint={`/api/admin/staff/${staffMember.id}`}
          confirmMessage={`Delete staff member ${staffMember.name}? This cannot be undone.`}
          redirectTo="/admin/staff"
          label="Delete Staff Member"
        />
      </div>
    </div>
  )
}
