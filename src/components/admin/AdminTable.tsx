export type AdminTableColumn<T> = {
  header: string
  render: (row: T) => React.ReactNode
  className?: string | ((row: T) => string)
}

export default function AdminTable<T>({
  columns,
  rows,
  rowKey,
  emptyMessage,
  rowClassName,
}: {
  columns: AdminTableColumn<T>[]
  rows: T[]
  rowKey: (row: T) => string | number
  emptyMessage: string
  // e.g. 'warn' for rows needing attention (expiring soon, nearly full) —
  // matches the .ewa-admin design system's tr.warn convention (gold left
  // border), reused across Departures/Permits/Certifications-style lists.
  rowClassName?: (row: T) => string | undefined
}) {
  if (rows.length === 0) {
    return <div className="empty-state">{emptyMessage}</div>
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
