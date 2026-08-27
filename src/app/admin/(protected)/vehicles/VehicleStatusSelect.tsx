'use client'

import { VEHICLE_MAINTENANCE_STATUSES, type VehicleMaintenanceStatus } from '@/lib/ops'
import InlineStatusSelect, { type PillClass } from '@/components/admin/InlineStatusSelect'

// ok = healthy; due_soon = needs attention soon; in_service = out of
// commission for repair, an urgent operational gap.
const PILL_CLASS: Record<VehicleMaintenanceStatus, PillClass> = {
  ok: 'open',
  due_soon: 'few',
  in_service: 'cancelled',
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
      pillClass={PILL_CLASS}
      currentStatus={currentStatus}
      compact={compact}
    />
  )
}
