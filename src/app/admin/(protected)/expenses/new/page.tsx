import { getDb } from '@/lib/db'
import type { Vehicle } from '@/lib/ops'
import type { Departure } from '@/lib/departures'
import NewExpenseForm from './NewExpenseForm'

export const dynamic = 'force-dynamic'

export default async function NewExpensePage() {
  const db = await getDb()
  const [{ results: vehicles }, { results: departures }] = await Promise.all([
    db.prepare('SELECT * FROM vehicles ORDER BY plate_number ASC').all<Vehicle>(),
    db.prepare("SELECT * FROM departures WHERE status != 'cancelled' ORDER BY start_date DESC").all<Departure>(),
  ])

  return <NewExpenseForm vehicles={vehicles} departures={departures} />
}
