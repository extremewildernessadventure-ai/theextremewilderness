'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function GeneratePayslipsButton({ periodId }: { periodId: number }) {
  const router = useRouter()
  const [generating, setGenerating] = useState(false)
  const [result, setResult] = useState<{ created: number; skipped: number } | null>(null)

  async function handleGenerate() {
    setGenerating(true)
    setResult(null)
    const res = await fetch(`/api/admin/payroll/${periodId}/generate`, { method: 'POST' })
    setGenerating(false)
    if (res.ok) {
      const data = await res.json() as { created: number; skipped: number }
      setResult(data)
      router.refresh()
    }
  }

  return (
    <div className="flex items-center gap-3">
      <button type="button" onClick={handleGenerate} disabled={generating} className="btn-primary" style={{ opacity: generating ? 0.5 : 1 }}>
        {generating ? 'Generating…' : 'Generate Payslips'}
      </button>
      {result && (
        <span className="text-sm text-gray-500">
          {result.created} created{result.skipped > 0 ? `, ${result.skipped} already existed` : ''}
        </span>
      )}
    </div>
  )
}
