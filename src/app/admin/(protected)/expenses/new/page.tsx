import { getDb } from '@/lib/db'
import type { Vehicle } from '@/lib/ops'
import type { Departure } from '@/lib/departures'
import type { StaffMember } from '@/lib/hr'
import NewExpenseForm from './NewExpenseForm'

export const dynamic = 'force-dynamic'

export default async function NewExpensePage() {
  const db = await getDb()
  const [{ results: vehicles }, { results: departures }, { results: staff }] = await Promise.all([
    db.prepare('SELECT * FROM vehicles ORDER BY plate_number ASC').all<Vehicle>(),
    db.prepare("SELECT * FROM departures WHERE cancelled = 0 ORDER BY start_date DESC").all<Departure>(),
    db.prepare('SELECT * FROM staff_members WHERE active = 1 ORDER BY name ASC').all<StaffMember>(),
  ])

  return <NewExpenseForm vehicles={vehicles} departures={departures} staff={staff} />
}
