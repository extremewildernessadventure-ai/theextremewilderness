import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getDb } from '@/lib/db'
import type { Guide } from '@/lib/ops'
import DeleteButton from '@/components/admin/DeleteButton'
import GuideEditForm from './GuideEditForm'

export const dynamic = 'force-dynamic'

type Props = { params: Promise<{ id: string }> }

export default async function GuideDetailPage({ params }: Props) {
  const { id } = await params
  const db = await getDb()
  const guide = await db.prepare('SELECT * FROM guides WHERE id = ?').bind(id).first<Guide>()
  if (!guide) notFound()

  return (
    <div className="max-w-xl">
      <Link href="/admin/guides" className="text-sm text-gray-500 hover:text-brand mb-4 inline-block">← Back to Guides</Link>
      <h1 className="text-2xl font-bold text-brand mb-6">{guide.name}</h1>

      <div className="space-y-6">
        <GuideEditForm guide={guide} />
        <DeleteButton
          endpoint={`/api/admin/guides/${guide.id}`}
          confirmMessage={`Delete guide ${guide.name}? This cannot be undone.`}
          redirectTo="/admin/guides"
          label="Delete Guide"
        />
      </div>
    </div>
  )
}
