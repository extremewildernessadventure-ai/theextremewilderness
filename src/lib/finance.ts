export type ExpenseCategory = 'fuel' | 'vehicle_maintenance' | 'wages' | 'permit' | 'insurance' | 'other'
export const EXPENSE_CATEGORIES: ExpenseCategory[] = ['fuel', 'vehicle_maintenance', 'wages', 'permit', 'insurance', 'other']

export interface Expense {
  id: number
  category: ExpenseCategory
  vehicle_id: number | null
  vehicle_notes_other: string | null
  staff_member_id: number | null
  staff_member_other: string | null
  departure_id: number | null
  departure_notes_other: string | null
  amount: number
  currency: string
  exchange_rate_to_usd: number
  amount_usd: number
  description: string | null
  paid_at: string | null
  payment_method: string | null
  reference: string | null
  created_at: string
}

export type RefundStatus = 'requested' | 'approved' | 'processed' | 'denied'
export const REFUND_STATUSES: RefundStatus[] = ['requested', 'approved', 'processed', 'denied']

export interface Refund {
  id: number
  invoice_id: number | null
  invoice_ref_other: string | null
  booking_id: number | null
  booking_ref_other: string | null
  amount: number
  currency: string
  reason: string | null
  status: RefundStatus
  processed_at: string | null
  notes: string | null
  created_at: string
}
