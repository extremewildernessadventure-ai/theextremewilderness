'use client'

import { Printer } from 'lucide-react'

export default function PrintButton() {
  return (
    <button onClick={() => window.print()} className="btn-primary print:hidden">
      <Printer style={{ width: 15, height: 15 }} />
      Print / Save as PDF
    </button>
  )
}
