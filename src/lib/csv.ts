// Small shared CSV helper — built for the Newsletter export, but generic
// enough for any other admin list page (Leads, Invoices) to reuse later
// rather than each hand-rolling its own escaping.
export function toCsv<T>(rows: T[], columns: { key: keyof T; header: string }[]): string {
  function escapeCell(value: unknown): string {
    const str = value === null || value === undefined ? '' : String(value)
    if (/[",\n]/.test(str)) {
      return `"${str.replace(/"/g, '""')}"`
    }
    return str
  }

  const header = columns.map((c) => escapeCell(c.header)).join(',')
  const lines = rows.map((row) => columns.map((c) => escapeCell(row[c.key])).join(','))
  return [header, ...lines].join('\n')
}
