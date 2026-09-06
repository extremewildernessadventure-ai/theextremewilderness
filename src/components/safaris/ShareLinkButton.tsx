'use client'

import { useState } from 'react'
import { Share2, Check } from 'lucide-react'

// Matches the prototype's breadcrumb-bar share button: copies the current
// page URL and shows a brief "Link copied!" confirmation. A small client
// component so the surrounding nav bar can otherwise stay a server component.
//
// The icon itself swaps to a checkmark and the button border/text turn green
// on click -- an icon-only button that looks identical before and after a
// click reads as broken even when the copy genuinely succeeded, so the
// button's own state needs to visibly change, not just a small tooltip.
export default function ShareLinkButton({ title, copiedLabel, tooltip, dark = false }: {
  title: string
  copiedLabel: string
  tooltip: string
  // Set when the button sits on a brand-green background (e.g. the detail
  // page's breadcrumb bar) instead of the site's usual light background.
  dark?: boolean
}) {
  const [copied, setCopied] = useState(false)

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href)
    } catch {
      // Clipboard API can be unavailable (older browsers, insecure context) --
      // silently no-op rather than throwing, same tolerance the prototype's
      // own best-effort navigator.clipboard call has.
    }
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  return (
    <button
      type="button"
      onClick={handleShare}
      title={tooltip}
      aria-label={title}
      className={`relative inline-flex items-center gap-1.5 px-3 py-2 rounded-md border text-xs font-semibold transition-colors ${
        copied
          ? dark
            ? 'border-emerald-400/50 bg-emerald-400/20 text-emerald-300'
            : 'border-emerald-600 bg-emerald-50 text-emerald-700'
          : dark
            ? 'border-white/20 bg-white/10 text-white hover:bg-white/20'
            : 'border-gray-200 bg-white text-text-muted hover:text-brand hover:bg-light-green'
      }`}
    >
      {copied ? <Check className="w-4 h-4" /> : <Share2 className="w-4 h-4" />}
      <span className="hidden sm:inline">{copied ? copiedLabel : title}</span>

      {copied && (
        <span className="absolute -bottom-9 start-1/2 -translate-x-1/2 text-[11px] bg-brand text-white px-2.5 py-1 rounded-md shadow-lg whitespace-nowrap z-20 sm:hidden">
          {copiedLabel}
        </span>
      )}
    </button>
  )
}
