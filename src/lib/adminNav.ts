export type AdminNavLink = { label: string; href: string }
export type AdminNavGroup = { label: string; links: AdminNavLink[] }

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
]
