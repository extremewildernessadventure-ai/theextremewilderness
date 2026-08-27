'use client'

import { VEHICLE_MAINTENANCE_STATUSES, type VehicleMaintenanceStatus } from '@/lib/ops'
import InlineStatusSelect from '@/components/admin/InlineStatusSelect'

const STATUS_STYLES: Record<VehicleMaintenanceStatus, string> = {
  ok: 'bg-green-100 text-green-700',
  due_soon: 'bg-amber-100 text-amber-700',
  in_service: 'bg-red-100 text-red-700',
}

export default function VehicleStatusSelect({ vehicleId, currentStatus, compact = false }: {
  vehicleId: number
  currentStatus: VehicleMaintenanceStatus
  compact?: boolean
}) {
  return (
    <InlineStatusSelect
      endpoint={`/api/admin/vehicles/${vehicleId}`}
      field="maintenanceStatus"
      statuses={VEHICLE_MAINTENANCE_STATUSES}
      statusStyles={STATUS_STYLES}
      currentStatus={currentStatus}
      compact={compact}
    />
  )
}
