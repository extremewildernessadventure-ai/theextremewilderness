'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { AdminNavGroup } from '@/lib/adminNav'

export default function AdminNavDropdown({ group }: { group: AdminNavGroup }) {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const isActive = group.links.some((link) => pathname.startsWith(link.href))

  // Close on navigation — the layout persists across route changes, so a
  // controlled `open` state doesn't reset on its own the way an uncontrolled
  // <details> element's DOM state would look like it should but doesn't
  // (this component isn't remounted by App Router client navigation).
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!open) return
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [open])

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={`text-sm transition-colors pb-1 border-b-2 ${
          isActive ? 'text-brand border-brand' : 'text-gray-600 hover:text-brand border-transparent'
        }`}
      >
        {group.label}
      </button>
      {open && (
        <div className="absolute top-full start-0 mt-2 min-w-[10rem] bg-white border border-gray-200 rounded-lg shadow-lg py-1 z-10">
          {group.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block px-4 py-2 text-sm text-gray-600 hover:text-brand hover:bg-gray-50"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
