'use client'

import { useEffect, useRef, useState } from 'react'
import { Menu, Search, Bell } from 'lucide-react'
import LogoutButton from '@/app/admin/LogoutButton'

// The reference dashboard's topbar also has a flag icon and a cart icon —
// dropped here rather than kept as decoration: neither maps to anything
// in this business (no multi-locale admin UI, no e-commerce cart), and
// this file otherwise only adds controls that do something real (search
// is the one exception, explicitly left non-functional for now — see
// below — but at least matches a real future feature, unlike a cart icon
// never would). The notification badge count is real data, computed by
// the server layout from the same three "needs attention" queries the
// dashboard page already runs (leads needing follow-up + pending permits
// + pending documents), not a placeholder number.
export default function Topbar({
  onMenuClick,
  notificationCount,
}: {
  onMenuClick: () => void
  notificationCount: number
}) {
  const [userMenuOpen, setUserMenuOpen] = useState(false)
  const wrapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!userMenuOpen) return
    function handleClick(e: MouseEvent) {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setUserMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [userMenuOpen])

  return (
    <header className="app-topbar">
      <button type="button" className="topbar-menu-btn" onClick={onMenuClick} aria-label="Toggle menu">
        <Menu />
      </button>
      {/* Decorative for now — a real cross-entity search (leads/clients/
          invoices/bookings by name/email/number) is a legitimately sized
          feature of its own (a new API route querying multiple tables),
          not something to half-wire here just to fill the reference
          layout's search slot. */}
      <div className="topbar-search">
        <Search />
        <input type="text" placeholder="Search..." disabled />
      </div>
      <div className="topbar-actions">
        <button type="button" className="topbar-icon-btn" aria-label="Notifications">
          <Bell />
          {notificationCount > 0 && (
            <span className="topbar-badge">{notificationCount > 99 ? '99+' : notificationCount}</span>
          )}
        </button>
        <div className="topbar-avatar-wrap" ref={wrapRef}>
          <button
            type="button"
            className="topbar-avatar"
            onClick={() => setUserMenuOpen((o) => !o)}
            aria-label="Account menu"
          >
            EWA
          </button>
          {userMenuOpen && (
            <div className="user-dropdown">
              <LogoutButton />
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
