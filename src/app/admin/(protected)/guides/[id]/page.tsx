import { notFound } from 'next/navigation'
import { getDb } from '@/lib/db'
import type { Guide } from '@/lib/ops'
import type { GuideCertification, GuideAvailability } from '@/lib/hr'
import DetailTwoColumn from '@/components/admin/DetailTwoColumn'
import DeleteButton from '@/components/admin/DeleteButton'
import GuideEditForm from './GuideEditForm'
import GuideCertificationsPanel from './GuideCertificationsPanel'
import GuideAvailabilityPanel from './GuideAvailabilityPanel'

export const dynamic = 'force-dynamic'

type Props = { params: Promise<{ id: string }> }

export default async function GuideDetailPage({ params }: Props) {
  const { id } = await params
  const db = await getDb()
  const guide = await db.prepare('SELECT * FROM guides WHERE id = ?').bind(id).first<Guide>()
  if (!guide) notFound()

  const [{ results: certifications }, { results: availability }] = await Promise.all([
    db.prepare('SELECT * FROM guide_certifications WHERE guide_id = ? ORDER BY expires_at ASC').bind(id).all<GuideCertification>(),
    db.prepare('SELECT * FROM guide_availability WHERE guide_id = ? ORDER BY start_date ASC').bind(id).all<GuideAvailability>(),
  ])

  return (
    <DetailTwoColumn
      backHref="/admin/guides"
      backLabel="Back to Guides"
      title={guide.name}
      main={
        <>
          <GuideCertificationsPanel guideId={guide.id} certifications={certifications} />
          <GuideAvailabilityPanel guideId={guide.id} availability={availability} />
          <div className="pt-2">
            <DeleteButton
              endpoint={`/api/admin/guides/${guide.id}`}
              confirmMessage={`Delete guide ${guide.name}? This cannot be undone.`}
              redirectTo="/admin/guides"
              label="Delete Guide"
            />
          </div>
        </>
      }
      sidebar={<GuideEditForm guide={guide} />}
    />
  )
}
