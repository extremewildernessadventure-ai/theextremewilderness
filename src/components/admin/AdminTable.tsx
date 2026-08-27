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
}: {
  columns: AdminTableColumn<T>[]
  rows: T[]
  rowKey: (row: T) => string | number
  emptyMessage: string
}) {
  if (rows.length === 0) {
    return (
      <div className="bg-white border border-gray-200 rounded-xl p-10 text-center text-gray-500 text-sm">
        {emptyMessage}
      </div>
    )
  }

  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden overflow-x-auto">
      <table className="w-full text-sm">
        <thead className="bg-gray-50 border-b border-gray-200">
          <tr>
            {columns.map((col) => (
              <th
                key={col.header}
                className="text-start px-5 py-3 font-semibold text-xs uppercase tracking-wide text-gray-500"
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={rowKey(row)} className="border-b border-gray-100 last:border-0 hover:bg-gray-50">
              {columns.map((col) => {
                const cellClassName = typeof col.className === 'function' ? col.className(row) : col.className
                return (
                  <td key={col.header} className={`px-5 py-3 ${cellClassName ?? ''}`}>
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
