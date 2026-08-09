import { Send, Compass, Download, Mail, Handshake, Inbox, Tag, type LucideIcon } from 'lucide-react'
import type { LeadType } from '@/lib/leads'

// Ordered roughly by sales intent, highest first — lets staff scan for the
// leads most likely to convert (enquiry/plan-brief) instead of reading text.
const TYPE_META: Record<LeadType, { label: string; icon: LucideIcon; className: string }> = {
  'enquiry': { label: 'Enquiry', icon: Send, className: 'bg-gold/15 text-gold-label' },
  'plan-brief': { label: 'Plan Brief', icon: Compass, className: 'bg-gold/15 text-gold-label' },
  'pdf-lead': { label: 'PDF Lead', icon: Download, className: 'bg-blue-100 text-blue-700' },
  'contact': { label: 'Contact', icon: Mail, className: 'bg-brand/10 text-brand' },
  'trade-partners': { label: 'Trade Partner', icon: Handshake, className: 'bg-purple-100 text-purple-700' },
  'exit-intent-claim': { label: 'Discount Claim', icon: Tag, className: 'bg-amber-100 text-amber-700' },
  'newsletter': { label: 'Newsletter', icon: Inbox, className: 'bg-gray-100 text-gray-500' },
}

export default function TypeBadge({ type }: { type: LeadType }) {
  const meta = TYPE_META[type]
  const Icon = meta.icon
  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${meta.className}`}>
      <Icon className="w-3 h-3" />
      {meta.label}
    </span>
  )
}
