'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { findActiveGroup, type AdminNavGroup } from '@/lib/adminNav'

export default function AdminSubNavPills({ groups }: { groups: AdminNavGroup[] }) {
  const pathname = usePathname()
  const activeGroup = findActiveGroup(groups, pathname)
  if (!activeGroup) return null

  return (
    <div className="subtabs-wrap">
      <div className="subtabs">
        {activeGroup.links.map((link) => {
          const isActive = pathname.startsWith(link.href)
          return (
            <Link key={link.href} href={link.href} className={`subtab${isActive ? ' active' : ''}`}>
              {link.label}
            </Link>
          )
        })}
      </div>
    </div>
  )
}
