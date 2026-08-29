import Link from 'next/link'

export type AdminTableColumn<T> = {
  header: string
  render: (row: T) => React.ReactNode
  className?: string | ((row: T) => string)
}

// Convention: list-page empty states may carry an optional CTA (emptyAction)
// pointing at the thing the user needs to create first — e.g. the
// departures list points at "+ Create Departure" so the (otherwise
// undiscoverable-when-empty) booking-creation flow has a way in. Gated
// create-forms reached with a missing prerequisite (e.g. quotes/new
// without ?leadId) should instead show a bordered warning panel and
// disable submit, matching quotes/new/page.tsx's existing pattern — don't
// redirect or silently block.
export type EmptyStateCta = { label: string; href: string }

export default function AdminTable<T>({
  columns,
  rows,
  rowKey,
  emptyMessage,
  emptyAction,
  rowClassName,
}: {
  columns: AdminTableColumn<T>[]
  rows: T[]
  rowKey: (row: T) => string | number
  emptyMessage: string
  emptyAction?: EmptyStateCta
  // e.g. 'warn' for rows needing attention (expiring soon, nearly full) —
  // matches the .ewa-admin design system's tr.warn convention (gold left
  // border), reused across Departures/Permits/Certifications-style lists.
  rowClassName?: (row: T) => string | undefined
}) {
  if (rows.length === 0) {
    return (
      <div className="empty-state">
        <p>{emptyMessage}</p>
        {emptyAction && <Link href={emptyAction.href} className="btn-primary">{emptyAction.label}</Link>}
      </div>
    )
  }

  return (
    <div className="table-card">
      <table>
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col.header}>{col.header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={rowKey(row)} className={rowClassName?.(row)}>
              {columns.map((col) => {
                const cellClassName = typeof col.className === 'function' ? col.className(row) : col.className
                return (
                  <td key={col.header} className={cellClassName}>
                    {col.render(row)}
                  </td>
                )
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
