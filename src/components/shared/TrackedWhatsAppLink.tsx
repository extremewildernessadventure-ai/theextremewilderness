'use client'

import type { ReactNode } from 'react'
import { trackFormFillConversion } from '@/lib/analytics'

// A plain WhatsApp click-to-chat <a> (no lead data captured, unlike the
// buildWhatsAppUrl() forms) still fires the same Ads conversion on click —
// small client-component wrapper so the server-component pages that render
// these links (experiences/[slug], contact) don't need to become client
// components themselves just to attach an onClick.
export default function TrackedWhatsAppLink({
  href,
  className,
  children,
}: {
  href: string
  className?: string
  children: ReactNode
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackFormFillConversion()}
      className={className}
    >
      {children}
    </a>
  )
}
