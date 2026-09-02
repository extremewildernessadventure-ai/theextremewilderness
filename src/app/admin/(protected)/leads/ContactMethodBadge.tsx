import { MessageCircle, Mail } from 'lucide-react'
import type { ContactMethod } from '@/lib/leads'

// Sibling to TypeBadge, not a change to it — this is a separate axis
// (which channel the VISITOR chose at submission) from TypeBadge's
// lead-category axis. Anything other than the literal 'whatsapp' (incl.
// leads saved before this column existed, if a caller ever passes null)
// renders as "Email" — that was the only channel that ever existed before.
export default function ContactMethodBadge({ method }: { method: ContactMethod | null }) {
  const isWhatsapp = method === 'whatsapp'
  const Icon = isWhatsapp ? MessageCircle : Mail
  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${isWhatsapp ? 'bg-green-100 text-green-700' : 'bg-brand/10 text-brand'}`}>
      <Icon className="w-3 h-3" />
      {isWhatsapp ? 'WhatsApp' : 'Email'}
    </span>
  )
}
