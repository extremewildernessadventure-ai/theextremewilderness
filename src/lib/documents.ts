export type DocumentType = 'passport' | 'waiver' | 'visa' | 'other'
export const DOCUMENT_TYPES: DocumentType[] = ['passport', 'waiver', 'visa', 'other']

export type DocumentStatus = 'pending' | 'verified' | 'rejected'
export const DOCUMENT_STATUSES: DocumentStatus[] = ['pending', 'verified', 'rejected']

export const REJECTION_REASONS = [
  'Photo unclear or unreadable',
  'Document expired',
  'Wrong document type',
  'Incomplete — missing pages',
  'Other',
] as const

export interface ClientDocument {
  id: number
  client_id: number
  lead_id: number | null
  booking_id: number | null
  type: DocumentType
  r2_key: string
  filename: string
  content_type: string
  uploaded_at: string
  status: DocumentStatus
  rejection_reason: string | null
  reviewed_by: string | null
  reviewed_at: string | null
}
