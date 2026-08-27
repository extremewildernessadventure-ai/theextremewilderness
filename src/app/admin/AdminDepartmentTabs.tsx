'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { findActiveGroup, type AdminNavGroup } from '@/lib/adminNav'

export default function AdminDepartmentTabs({ groups }: { groups: AdminNavGroup[] }) {
  const pathname = usePathname()
  const activeGroup = findActiveGroup(groups, pathname)

  return (
    <>
      {groups.map((group) => {
        const isActive = group === activeGroup
        return (
          <Link
            key={group.label}
            href={group.links[0]?.href ?? '#'}
            className={`nav-link${isActive ? ' active' : ''}`}
          >
            {group.label}
          </Link>
        )
      })}
    </>
  )
}
