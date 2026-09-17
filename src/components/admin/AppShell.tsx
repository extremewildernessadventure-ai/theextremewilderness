'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import Sidebar from './Sidebar'
import Topbar from './Topbar'

// Thin client wrapper around the whole protected-admin shell, existing
// solely to hold the mobile sidebar drawer's open/closed state — Sidebar
// (rendering the nav) and Topbar (rendering the hamburger that toggles
// it) are siblings, so this state can't live in either one alone. The
// actual page content ({children}) is still whatever Server Component
// src/app/admin/(protected)/layout.tsx renders — this wrapper doesn't
// change how any page fetches its own data.
export default function AppShell({
  children,
  notificationCount,
}: {
  children: React.ReactNode
  notificationCount: number
}) {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  // Close the mobile drawer on navigation — otherwise tapping a sidebar
  // link on a phone leaves the drawer open over the new page. Adjusted
  // during render (React's documented pattern for "reset state when a
  // prop changes") rather than in an effect, which would call setState
  // synchronously after every render and trigger an extra cascading one.
  const [prevPathname, setPrevPathname] = useState(pathname)
  if (pathname !== prevPathname) {
    setPrevPathname(pathname)
    setIsOpen(false)
  }

  return (
    <div className="app-shell">
      <Sidebar isOpen={isOpen} onClose={() => setIsOpen(false)} />
      <div className="app-content">
        <Topbar onMenuClick={() => setIsOpen((o) => !o)} notificationCount={notificationCount} />
        <div className="main">{children}</div>
      </div>
    </div>
  )
}
