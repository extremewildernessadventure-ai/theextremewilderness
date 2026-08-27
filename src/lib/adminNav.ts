export type AdminNavLink = { label: string; href: string }
export type AdminNavGroup = { label: string; links: AdminNavLink[] }

// Shared by the department-tabs row and the sub-nav pills row so both agree
// on which department is "active" from the current pathname alone — no
// client-side click state to keep in sync between the two rows.
export function findActiveGroup(groups: AdminNavGroup[], pathname: string): AdminNavGroup | undefined {
  return groups.find((g) => g.links.some((l) => pathname.startsWith(l.href)))
}

// Groups match the departments in the admin-parity build plan. Only
// currently-shipped modules are listed — add a module's link here as its
// phase lands, never before (a link to a route that doesn't exist yet is a
// dead link). Groups with no shipped modules yet are omitted entirely.
export const ADMIN_NAV: AdminNavGroup[] = [
  {
    label: 'Sales',
    links: [
      { label: 'Leads', href: '/admin/leads' },
      { label: 'Quotes', href: '/admin/quotes' },
      { label: 'Invoices', href: '/admin/invoices' },
    ],
  },
  {
    label: 'Operations',
    links: [
      { label: 'Departures', href: '/admin/departures' },
      { label: 'Bookings', href: '/admin/bookings' },
      { label: 'Guides', href: '/admin/guides' },
      { label: 'Vehicles', href: '/admin/vehicles' },
      { label: 'Lodges', href: '/admin/lodges' },
      { label: 'Suppliers', href: '/admin/suppliers' },
    ],
  },
  {
    label: 'Finance',
    links: [
      { label: 'Expenses', href: '/admin/expenses' },
      { label: 'Refunds', href: '/admin/refunds' },
      { label: 'Profitability', href: '/admin/reports/profitability' },
    ],
  },
  {
    label: 'Compliance & Safety',
    links: [
      { label: 'Permits', href: '/admin/permits' },
      { label: 'Incidents', href: '/admin/incidents' },
    ],
  },
  {
    label: 'HR & Payroll',
    links: [
      { label: 'Staff', href: '/admin/staff' },
      { label: 'Payroll', href: '/admin/payroll' },
    ],
  },
  {
    label: 'Clients & Reviews',
    links: [
      { label: 'Clients', href: '/admin/clients' },
      { label: 'Documents', href: '/admin/documents' },
      { label: 'Reviews', href: '/admin/reviews' },
    ],
  },
  {
    label: 'Marketing',
    links: [
      { label: 'Newsletter', href: '/admin/newsletter' },
      { label: 'Lead Sources', href: '/admin/reports/sources' },
    ],
  },
]
