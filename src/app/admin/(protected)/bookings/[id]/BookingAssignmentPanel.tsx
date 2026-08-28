'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import type { Guide, Vehicle } from '@/lib/ops'
import SelectWithCustom, { CUSTOM_OPTION_VALUE } from '@/components/admin/SelectWithCustom'

const labelCls = 'field-label'

export default function BookingAssignmentPanel({
  bookingId, guides, vehicles, currentGuideId, currentGuideNameOther, currentVehicleId, currentVehicleNotesOther,
}: {
  bookingId: number
  guides: Guide[]
  vehicles: Vehicle[]
  currentGuideId: number | null
  currentGuideNameOther: string | null
  currentVehicleId: number | null
  currentVehicleNotesOther: string | null
}) {
  const router = useRouter()
  const [guideId, setGuideId] = useState(currentGuideId ? String(currentGuideId) : currentGuideNameOther ? CUSTOM_OPTION_VALUE : '')
  const [guideNameOther, setGuideNameOther] = useState(currentGuideNameOther ?? '')
  const [vehicleId, setVehicleId] = useState(currentVehicleId ? String(currentVehicleId) : currentVehicleNotesOther ? CUSTOM_OPTION_VALUE : '')
  const [vehicleNotesOther, setVehicleNotesOther] = useState(currentVehicleNotesOther ?? '')
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)

  async function handleSave() {
    setSaving(true)
    setSaved(false)
    const isCustomGuide = guideId === CUSTOM_OPTION_VALUE
    const isCustomVehicle = vehicleId === CUSTOM_OPTION_VALUE
    await fetch(`/api/admin/bookings/${bookingId}/assign`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        guideId: isCustomGuide || !guideId ? null : Number(guideId),
        guideNameOther: isCustomGuide ? guideNameOther.trim() : null,
        vehicleId: isCustomVehicle || !vehicleId ? null : Number(vehicleId),
        vehicleNotesOther: isCustomVehicle ? vehicleNotesOther.trim() : null,
      }),
    })
    setSaving(false)
    setSaved(true)
    router.refresh()
  }

  return (
    <div className="panel space-y-4">
      <h2 className="mb-1">Assignment</h2>
      <div>
        <label className={labelCls}>Guide</label>
        <SelectWithCustom
          options={guides}
          getOptionValue={(g) => String(g.id)}
          getOptionLabel={(g) => g.name}
          value={guideId}
          onChange={(v) => { setGuideId(v); setSaved(false) }}
          customValue={guideNameOther}
          onCustomChange={(v) => { setGuideNameOther(v); setSaved(false) }}
          placeholder="— Unassigned —"
          customPlaceholder="Enter guide name…"
        />
      </div>
      <div>
        <label className={labelCls}>Vehicle</label>
        <SelectWithCustom
          options={vehicles}
          getOptionValue={(v) => String(v.id)}
          getOptionLabel={(v) => v.plate_number}
          value={vehicleId}
          onChange={(v) => { setVehicleId(v); setSaved(false) }}
          customValue={vehicleNotesOther}
          onCustomChange={(v) => { setVehicleNotesOther(v); setSaved(false) }}
          placeholder="— Unassigned —"
          customPlaceholder="Enter vehicle details…"
        />
      </div>
      <div className="flex items-center gap-3">
        <button type="button" onClick={handleSave} disabled={saving} className="btn-primary" style={{ opacity: saving ? 0.5 : 1 }}>
          {saving ? 'Saving…' : 'Save Assignment'}
        </button>
        {saved && <span className="text-green-600 text-sm">Saved</span>}
      </div>
    </div>
  )
}
