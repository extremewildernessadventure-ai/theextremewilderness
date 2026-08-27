'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { AdminNavGroup } from '@/lib/adminNav'

export default function AdminMobileNav({ groups }: { groups: AdminNavGroup[] }) {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="text-sm text-gray-600 hover:text-brand transition-colors"
      >
        Menu
      </button>
      {open && (
        <div className="absolute top-full end-0 mt-2 min-w-[12rem] bg-white border border-gray-200 rounded-lg shadow-lg py-1 z-10">
          {groups.map((group) => (
            <div key={group.label} className="py-1">
              <p className="px-4 pt-1 pb-0.5 text-xs uppercase tracking-wide text-gray-400">{group.label}</p>
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
          ))}
        </div>
      )}
    </div>
  )
}
