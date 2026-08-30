'use client'

import { Printer } from 'lucide-react'

// Server Components (every /pdf page) can't pass onClick directly to a
// <button> — Next.js rejects event handlers crossing the server/client
// boundary. This tiny client component is the shared fix: the page passes
// down the already-translated label as a plain string prop.
export default function PrintPdfButton({ label }: { label: string }) {
  return (
    <button
      onClick={() => window.print()}
      className="flex items-center gap-2 px-5 py-2.5 bg-brand text-white font-semibold rounded-xl hover:bg-brand/90 transition-colors text-sm"
    >
      <Printer className="w-4 h-4" />
      {label}
    </button>
  )
}
