export interface GuideCertification {
  id: number
  guide_id: number
  type: string
  issuing_body: string | null
  cert_number: string | null
  issued_at: string | null
  expires_at: string | null
  created_at: string
}

export type GuideAvailabilityType = 'leave' | 'unavailable' | 'booked'
export const GUIDE_AVAILABILITY_TYPES: GuideAvailabilityType[] = ['leave', 'unavailable', 'booked']

export interface GuideAvailability {
  id: number
  guide_id: number
  start_date: string
  end_date: string
  type: GuideAvailabilityType
  notes: string | null
  created_at: string
}

export type PayType = 'salary' | 'daily_rate' | 'per_trip'
export const PAY_TYPES: PayType[] = ['salary', 'daily_rate', 'per_trip']

export interface StaffMember {
  id: number
  name: string
  role_title: string | null
  guide_id: number | null
  guide_name_other: string | null
  pay_type: PayType
  base_rate: number
  currency: string
  active: number
  created_at: string
  updated_at: string | null
}

export type PayrollPeriodStatus = 'open' | 'processed' | 'paid'
export const PAYROLL_PERIOD_STATUSES: PayrollPeriodStatus[] = ['open', 'processed', 'paid']

export interface PayrollPeriod {
  id: number
  period_start: string
  period_end: string
  status: PayrollPeriodStatus
  created_at: string
}

export type PayslipStatus = 'draft' | 'approved' | 'paid'
export const PAYSLIP_STATUSES: PayslipStatus[] = ['draft', 'approved', 'paid']

export interface Payslip {
  id: number
  period_id: number
  staff_member_id: number
  base_amount: number
  bonuses: number
  deductions: number
  trip_pay_total: number
  net_amount: number
  currency: string
  status: PayslipStatus
  paid_at: string | null
  payment_reference: string | null
  notes: string | null
  created_at: string
}
