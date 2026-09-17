import {
  LayoutDashboard,
  TrendingUp,
  Compass,
  Wallet,
  ShieldCheck,
  Users,
  UserCheck,
  Megaphone,
  type LucideIcon,
} from 'lucide-react'

// Kept as a separate, parallel map (rather than an `icon` field on
// AdminNavGroup itself) so src/lib/adminNav.ts stays framework-agnostic —
// it doesn't import React/lucide-react today, and plain data files like it
// are reused in places (tests, scripts) that shouldn't need to pull in a
// component library just to read a list of routes. Keyed by group label,
// same join key `Sidebar.tsx` already uses via `findActiveGroup`.
export const ADMIN_NAV_ICONS: Record<string, LucideIcon> = {
  Sales: TrendingUp,
  Operations: Compass,
  Finance: Wallet,
  'Compliance & Safety': ShieldCheck,
  'HR & Payroll': Users,
  'Clients & Reviews': UserCheck,
  Marketing: Megaphone,
}

// The one sidebar entry that isn't a group from adminNav.ts — a direct
// link back to the dashboard itself. Today the brand logo is the only way
// back to /admin; the reference layout this redesign follows always has
// an explicit first nav item for it.
export const DASHBOARD_ICON: LucideIcon = LayoutDashboard
