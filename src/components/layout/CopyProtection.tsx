'use client'

import { useEffect, useState } from 'react'

export default function CopyProtection() {
  const [tip, setTip] = useState<{ x: number; y: number } | null>(null)

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>

    const onContextMenu = (e: MouseEvent) => {
      e.preventDefault()
      setTip({ x: e.clientX, y: e.clientY })
      clearTimeout(timer)
      timer = setTimeout(() => setTip(null), 2200)
    }

    const isFormField = (t: EventTarget | null) => {
      if (!t) return false
      const el = t as HTMLElement
      return el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.tagName === 'SELECT' || el.isContentEditable
    }

    const onKeyDown = (e: KeyboardEvent) => {
      const ctrl = e.ctrlKey || e.metaKey
      if (
        (ctrl && e.key === 'u') ||      // view source
        (ctrl && e.key === 's') ||      // save page
        (ctrl && e.key === 'p')         // print
      ) {
        e.preventDefault()
      }
      // Block copy/cut outside form fields
      if (ctrl && (e.key === 'c' || e.key === 'x') && !isFormField(e.target)) {
        e.preventDefault()
      }
    }

    const onCopy = (e: ClipboardEvent) => {
      if (!isFormField(e.target)) e.preventDefault()
    }

    const onDragStart = (e: DragEvent) => {
      if ((e.target as HTMLElement).tagName === 'IMG') e.preventDefault()
    }

    document.addEventListener('contextmenu', onContextMenu)
    document.addEventListener('keydown', onKeyDown)
    document.addEventListener('copy', onCopy)
    document.addEventListener('dragstart', onDragStart)

    return () => {
      clearTimeout(timer)
      document.removeEventListener('contextmenu', onContextMenu)
      document.removeEventListener('keydown', onKeyDown)
      document.removeEventListener('copy', onCopy)
      document.removeEventListener('dragstart', onDragStart)
    }
  }, [])

  if (!tip) return null

  return (
    <div
      className="fixed z-[9999] pointer-events-none select-none"
      style={{ left: tip.x + 12, top: tip.y + 8 }}
    >
      <div className="bg-brand text-white text-xs font-semibold px-3 py-2 rounded-lg shadow-lg whitespace-nowrap opacity-90">
        © EWA Safari Outfitters — All rights reserved
      </div>
    </div>
  )
}
