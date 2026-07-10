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

    const onKeyDown = (e: KeyboardEvent) => {
      const ctrl = e.ctrlKey || e.metaKey
      if (
        (ctrl && e.key === 'u') ||      // view source
        (ctrl && e.key === 's') ||      // save page
        (ctrl && e.key === 'p')         // print
      ) {
        e.preventDefault()
      }
    }

    const onDragStart = (e: DragEvent) => {
      if ((e.target as HTMLElement).tagName === 'IMG') e.preventDefault()
    }

    document.addEventListener('contextmenu', onContextMenu)
    document.addEventListener('keydown', onKeyDown)
    document.addEventListener('dragstart', onDragStart)

    return () => {
      clearTimeout(timer)
      document.removeEventListener('contextmenu', onContextMenu)
      document.removeEventListener('keydown', onKeyDown)
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
        © Extreme Wilderness Adventure — All rights reserved
      </div>
    </div>
  )
}
