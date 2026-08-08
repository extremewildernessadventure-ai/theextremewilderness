'use client'

import { Printer } from 'lucide-react'

export default function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="flex items-center gap-2 px-5 py-2.5 bg-brand text-white font-semibold rounded-xl hover:bg-brand/90 transition-colors text-sm print:hidden"
    >
      <Printer className="w-4 h-4" />
      Print / Save as PDF
    </button>
  )
}
