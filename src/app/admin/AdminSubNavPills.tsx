'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { findActiveGroup, type AdminNavGroup } from '@/lib/adminNav'

export default function AdminSubNavPills({ groups }: { groups: AdminNavGroup[] }) {
  const pathname = usePathname()
  const activeGroup = findActiveGroup(groups, pathname)
  if (!activeGroup) return null

  return (
    <div className="border-t border-gray-100 bg-gray-50/60">
      <div className="max-w-6xl mx-auto px-6 py-2.5 flex items-center gap-2 overflow-x-auto">
        {activeGroup.links.map((link) => {
          const isActive = pathname.startsWith(link.href)
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`whitespace-nowrap text-xs font-semibold px-3 py-1.5 rounded-full transition-colors ${
                isActive ? 'bg-brand text-white' : 'bg-white border border-gray-200 text-gray-600 hover:text-brand hover:border-brand/30'
              }`}
            >
              {link.label}
            </Link>
          )
        })}
      </div>
    </div>
  )
}
