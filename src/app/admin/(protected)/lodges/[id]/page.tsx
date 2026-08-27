import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getDb } from '@/lib/db'
import type { OpsLodge } from '@/lib/ops'
import DeleteButton from '@/components/admin/DeleteButton'
import LodgeEditForm from './LodgeEditForm'

export const dynamic = 'force-dynamic'

type Props = { params: Promise<{ id: string }> }

export default async function LodgeDetailPage({ params }: Props) {
  const { id } = await params
  const db = await getDb()
  const lodge = await db.prepare('SELECT * FROM ops_lodges WHERE id = ?').bind(id).first<OpsLodge>()
  if (!lodge) notFound()

  return (
    <div className="max-w-xl">
      <Link href="/admin/lodges" className="detail-back">← Back to Lodges</Link>
      <h1 className="mb-6">{lodge.name}</h1>

      <div className="space-y-6">
        <LodgeEditForm lodge={lodge} />
        <DeleteButton
          endpoint={`/api/admin/lodges/${lodge.id}`}
          confirmMessage={`Delete lodge ${lodge.name}? This cannot be undone.`}
          redirectTo="/admin/lodges"
          label="Delete Lodge"
        />
      </div>
    </div>
  )
}
