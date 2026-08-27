import { getDb } from '@/lib/db'
import type { Guide } from '@/lib/ops'
import NewStaffForm from './NewStaffForm'

export const dynamic = 'force-dynamic'

export default async function NewStaffPage() {
  const db = await getDb()
  const { results: guides } = await db.prepare('SELECT * FROM guides ORDER BY name ASC').all<Guide>()

  return <NewStaffForm guides={guides} />
}
