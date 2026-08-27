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
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-brand">Vehicles</h1>
        <Link
          href="/admin/vehicles/new"
          className="px-4 py-2.5 bg-brand hover:bg-brand-secondary text-white text-sm font-semibold rounded-lg transition-colors"
        >
          + New Vehicle
        </Link>
      </div>

      <AdminTable columns={columns} rows={results} rowKey={(v) => v.id} emptyMessage="No vehicles yet." />
    </div>
  )
}
