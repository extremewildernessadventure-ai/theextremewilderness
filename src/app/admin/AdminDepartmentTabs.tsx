'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { findActiveGroup, type AdminNavGroup } from '@/lib/adminNav'

export default function AdminDepartmentTabs({ groups }: { groups: AdminNavGroup[] }) {
  const pathname = usePathname()
  const activeGroup = findActiveGroup(groups, pathname)

  return (
    <nav className="flex items-center gap-5 overflow-x-auto">
      {groups.map((group) => {
        const isActive = group === activeGroup
        return (
          <Link
            key={group.label}
            href={group.links[0]?.href ?? '#'}
            className={`text-sm whitespace-nowrap pb-1 border-b-2 transition-colors ${
              isActive ? 'text-brand border-brand font-semibold' : 'text-gray-600 hover:text-brand border-transparent'
            }`}
          >
            {group.label}
          </Link>
        )
      })}
    </nav>
  )
}
