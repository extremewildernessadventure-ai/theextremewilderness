export type VehicleMaintenanceStatus = 'ok' | 'due_soon' | 'in_service'
export const VEHICLE_MAINTENANCE_STATUSES: VehicleMaintenanceStatus[] = ['ok', 'due_soon', 'in_service']

export type SupplierType = 'lodge' | 'vehicle_vendor' | 'activity_operator' | 'other'
export const SUPPLIER_TYPES: SupplierType[] = ['lodge', 'vehicle_vendor', 'activity_operator', 'other']

export type SupplierPaymentStatus = 'owed' | 'paid'
export const SUPPLIER_PAYMENT_STATUSES: SupplierPaymentStatus[] = ['owed', 'paid']

export interface Guide {
  id: number
  name: string
  phone: string | null
  email: string | null
  languages: string | null
  specialty: string | null
  active: number
  notes: string | null
  created_at: string
  updated_at: string | null
}

export interface Vehicle {
  id: number
  plate_number: string
  capacity: number
  maintenance_status: VehicleMaintenanceStatus
  notes: string | null
  created_at: string
  updated_at: string | null
}

export interface OpsLodge {
  id: number
  name: string
  location: string | null
  contact_info: string | null
  rate_notes: string | null
  created_at: string
  updated_at: string | null
}

export interface Supplier {
  id: number
  name: string
  type: SupplierType
  contact_info: string | null
  active: number
  notes: string | null
  created_at: string
  updated_at: string | null
}

export interface SupplierContract {
  id: number
  supplier_id: number
  negotiated_rate: number | null
  currency: string
  valid_from: string | null
  valid_to: string | null
  notes: string | null
  created_at: string
}

export interface SupplierPayment {
  id: number
  supplier_id: number
  departure_id: number | null
  amount: number
  currency: string
  status: SupplierPaymentStatus
  due_date: string | null
  paid_at: string | null
  notes: string | null
  created_at: string
}
