export type PermitType = 'tanapa' | 'ncaa' | 'other'
export const PERMIT_TYPES: PermitType[] = ['tanapa', 'ncaa', 'other']

export type PermitStatus = 'pending' | 'paid' | 'confirmed' | 'expired'
export const PERMIT_STATUSES: PermitStatus[] = ['pending', 'paid', 'confirmed', 'expired']

export interface Permit {
  id: number
  departure_id: number | null
  type: PermitType
  park: string | null
  permit_number: string | null
  amount_paid: number | null
  currency: string
  paid_at: string | null
  confirmation_ref: string | null
  valid_from: string | null
  valid_to: string | null
  status: PermitStatus
  notes: string | null
  created_at: string
}

export type IncidentType = 'medical' | 'vehicle' | 'weather' | 'security' | 'other'
export const INCIDENT_TYPES: IncidentType[] = ['medical', 'vehicle', 'weather', 'security', 'other']

export type IncidentSeverity = 'minor' | 'moderate' | 'serious' | 'critical'
export const INCIDENT_SEVERITIES: IncidentSeverity[] = ['minor', 'moderate', 'serious', 'critical']

export interface IncidentReport {
  id: number
  booking_id: number | null
  departure_id: number | null
  guide_id: number | null
  client_name: string | null
  client_email: string | null
  type: IncidentType
  severity: IncidentSeverity
  description: string
  action_taken: string | null
  amref_evacuation: number
  reported_by: string | null
  occurred_at: string | null
  created_at: string
}
