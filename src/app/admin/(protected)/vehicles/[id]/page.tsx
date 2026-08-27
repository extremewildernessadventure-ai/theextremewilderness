import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getDb } from '@/lib/db'
import type { Vehicle } from '@/lib/ops'
import DeleteButton from '@/components/admin/DeleteButton'
import VehicleEditForm from './VehicleEditForm'

export const dynamic = 'force-dynamic'

type Props = { params: Promise<{ id: string }> }

export default async function VehicleDetailPage({ params }: Props) {
  const { id } = await params
  const db = await getDb()
  const vehicle = await db.prepare('SELECT * FROM vehicles WHERE id = ?').bind(id).first<Vehicle>()
  if (!vehicle) notFound()

  return (
    <div className="max-w-xl">
      <Link href="/admin/vehicles" className="detail-back">← Back to Vehicles</Link>
      <h1 className="mb-6">{vehicle.plate_number}</h1>

      <div className="space-y-6">
        <VehicleEditForm vehicle={vehicle} />
        <DeleteButton
          endpoint={`/api/admin/vehicles/${vehicle.id}`}
          confirmMessage={`Delete vehicle ${vehicle.plate_number}? This cannot be undone.`}
          redirectTo="/admin/vehicles"
          label="Delete Vehicle"
        />
      </div>
    </div>
  )
}
