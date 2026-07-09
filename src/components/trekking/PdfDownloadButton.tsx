'use client'

import { Download } from 'lucide-react'
import { useParams } from 'next/navigation'

interface Props {
  route?: string
  href?: string   // if provided, used directly (prepended with locale); overrides route-based URL
  label?: string
  className?: string
  compact?: boolean
}

export default function PdfDownloadButton({
  route,
  href,
  label = 'Download Route Guide',
  className,
  compact = false,
}: Props) {
  const params = useParams()
  const locale = (params?.locale as string) || 'en'

  const handleDownload = () => {
    const url = href
      ? `/${locale}${href}`
      : `/${locale}/trekking/${route}/pdf`
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  if (compact) {
    return (
      <button
        onClick={handleDownload}
        className={`flex items-center gap-2 text-xs font-semibold text-brand hover:text-gold transition-colors ${className ?? ''}`}
      >
        <Download className="w-3.5 h-3.5" />
        {label}
      </button>
    )
  }

  return (
    <button
      onClick={handleDownload}
      className={className ?? 'flex items-center gap-2 px-4 py-3 border-2 border-brand/20 hover:border-brand text-brand text-sm font-semibold rounded-xl transition-colors w-full justify-center'}
    >
      <Download className="w-4 h-4" />
      {label}
    </button>
  )
}
