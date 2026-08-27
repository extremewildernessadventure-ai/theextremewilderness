import Link from 'next/link'
import { getDb } from '@/lib/db'
import type { Vehicle } from '@/lib/ops'
import AdminTable, { type AdminTableColumn } from '@/components/admin/AdminTable'
import VehicleStatusSelect from './VehicleStatusSelect'

export const dynamic = 'force-dynamic'

const columns: AdminTableColumn<Vehicle>[] = [
  {
    header: 'Plate Number',
    render: (v) => (
      <Link href={`/admin/vehicles/${v.id}`} className="text-brand font-medium hover:underline">
        {v.plate_number}
      </Link>
    ),
  },
  { header: 'Capacity', className: 'text-gray-700', render: (v) => `${v.capacity} seats` },
  { header: 'Status', render: (v) => <VehicleStatusSelect vehicleId={v.id} currentStatus={v.maintenance_status} compact /> },
]

export default async function VehiclesListPage() {
  const db = await getDb()
  const { results } = await db.prepare('SELECT * FROM vehicles ORDER BY plate_number ASC').all<Vehicle>()

  return (
    <div>
      <div className="page-head">
        <div>
          <h1>Vehicles</h1>
        </div>
        <Link href="/admin/vehicles/new" className="btn-primary">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M12 5v14M5 12h14" /></svg>
          New Vehicle
        </Link>
      </div>

      <AdminTable columns={columns} rows={results} rowKey={(v) => v.id} emptyMessage="No vehicles yet." />
    </div>
  )
}
