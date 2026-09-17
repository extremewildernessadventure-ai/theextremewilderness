'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronRight } from 'lucide-react'
import { ADMIN_NAV, findActiveGroup } from '@/lib/adminNav'
import { ADMIN_NAV_ICONS, DASHBOARD_ICON } from '@/lib/adminNavIcons'

// Renders ADMIN_NAV's groups as collapsible sections rather than the old
// AdminDepartmentTabs/AdminSubNavPills horizontal rows — same underlying
// data and findActiveGroup() logic, just a vertical layout. Rendered
// inside AppShell.tsx, which owns the isOpen mobile-drawer state (the
// sidebar itself has no state of its own beyond which groups are
// expanded, since that's purely a rendering concern, not shared with the
// topbar's hamburger toggle).
export default function Sidebar({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const pathname = usePathname()
  const activeGroup = findActiveGroup(ADMIN_NAV, pathname)
  // Only the active group starts expanded (mirrors the old pills row only
  // ever showing the active department's links) — others open on click.
  // A Set (not a single active label) so a user can browse a second
  // group open alongside the active one instead of it collapsing away.
  const [expanded, setExpanded] = useState<Set<string>>(() => new Set(activeGroup ? [activeGroup.label] : []))

  function toggleGroup(label: string) {
    setExpanded((prev) => {
      const next = new Set(prev)
      if (next.has(label)) next.delete(label)
      else next.add(label)
      return next
    })
  }

  return (
    <>
      <div className={`sidebar-backdrop${isOpen ? ' open' : ''}`} onClick={onClose} aria-hidden="true" />
      <aside className={`sidebar${isOpen ? ' open' : ''}`}>
        <Link href="/admin" className="brand" onClick={onClose}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M12 2 3 20h18L12 2Z" />
            <path d="M8 14l2.5-3 2 2 1.5-2 2 3" />
            <path d="M12 2v6" />
          </svg>
          <span className="brand-text">EWA Admin</span>
        </Link>
        <nav className="sidebar-nav">
          <Link
            href="/admin"
            onClick={onClose}
            className={`sidebar-link${pathname === '/admin' ? ' active' : ''}`}
          >
            <DASHBOARD_ICON />
            Dashboard
          </Link>
          {ADMIN_NAV.map((group) => {
            const isActiveGroup = group === activeGroup
            const isExpanded = expanded.has(group.label)
            const GroupIcon = ADMIN_NAV_ICONS[group.label]
            return (
              <div className="sidebar-group" key={group.label}>
                <button
                  type="button"
                  className={`sidebar-group-head${isActiveGroup ? ' active-group' : ''}`}
                  aria-expanded={isExpanded}
                  onClick={() => toggleGroup(group.label)}
                >
                  {GroupIcon && <GroupIcon className="group-icon" />}
                  {group.label}
                  <ChevronRight className="chevron" />
                </button>
                {isExpanded && (
                  <div className="sidebar-sublinks">
                    {group.links.map((link) => {
                      const isActive = pathname.startsWith(link.href)
                      return (
                        <Link
                          key={link.href}
                          href={link.href}
                          onClick={onClose}
                          className={`sidebar-sublink${isActive ? ' active' : ''}`}
                        >
                          {link.label}
                        </Link>
                      )
                    })}
                  </div>
                )}
              </div>
            )
          })}
        </nav>
      </aside>
    </>
  )
}
