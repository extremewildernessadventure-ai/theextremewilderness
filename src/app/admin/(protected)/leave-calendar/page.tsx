import Link from 'next/link'
import { getDb } from '@/lib/db'
import type { GuideAvailability, GuideAvailabilityType } from '@/lib/hr'

export const dynamic = 'force-dynamic'

type AvailabilityRow = GuideAvailability & { guide_name: string }

const TYPE_LABELS: Record<GuideAvailabilityType, string> = { leave: 'Leave', unavailable: 'Unavailable', booked: 'Booked' }
const TYPE_PILL_CLASS: Record<GuideAvailabilityType, string> = { leave: 'few', unavailable: 'cancelled', booked: 'open' }

function entryStatus(row: AvailabilityRow): { label: string; pillClass: string } {
  const today = new Date().toISOString().slice(0, 10)
  if (row.end_date < today) return { label: 'Past', pillClass: 'departed' }
  if (row.start_date <= today) return { label: 'Ongoing', pillClass: 'open' }
  return { label: 'Upcoming', pillClass: 'few' }
}

function monthLabel(dateStr: string): string {
  return new Date(`${dateStr}T00:00:00Z`).toLocaleDateString('en-US', { month: 'long', year: 'numeric', timeZone: 'UTC' })
}

export default async function LeaveCalendarPage() {
  const db = await getDb()
  const { results } = await db.prepare(`
    SELECT guide_availability.*, guides.name AS guide_name
    FROM guide_availability
    JOIN guides ON guides.id = guide_availability.guide_id
    ORDER BY guide_availability.start_date ASC
  `).all<AvailabilityRow>()

  const groups = new Map<string, AvailabilityRow[]>()
  for (const row of results) {
    const key = monthLabel(row.start_date)
    if (!groups.has(key)) groups.set(key, [])
    groups.get(key)!.push(row)
  }

  return (
    <div>
      <div className="page-head">
        <div>
          <h1>Leave Calendar</h1>
          <p>Guide leave and availability, grouped by month — add or edit an entry from the guide&apos;s own detail page.</p>
        </div>
      </div>

      {results.length === 0 ? (
        <div className="empty-state">No leave or availability entries recorded yet.</div>
      ) : (
        <div className="space-y-6">
          {[...groups.entries()].map(([month, rows]) => (
            <div key={month} className="table-card">
              <table>
                <thead>
                  <tr>
                    <th colSpan={5} style={{ background: 'var(--white)', fontFamily: 'var(--font-bitter)', fontSize: 14, textTransform: 'none', letterSpacing: 0, color: 'var(--ink)' }}>
                      {month}
                    </th>
                  </tr>
                  <tr>
                    <th>Staff Member</th>
                    <th>Leave Type</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row) => {
                    const status = entryStatus(row)
                    return (
                      <tr key={row.id}>
                        <td>
                          <Link href={`/admin/guides/${row.guide_id}`} className="text-brand font-medium hover:underline">
                            {row.guide_name}
                          </Link>
                        </td>
                        <td><span className={`pill ${TYPE_PILL_CLASS[row.type]}`}><i />{TYPE_LABELS[row.type]}</span></td>
                        <td className="dates-cell">{row.start_date}</td>
                        <td className="dates-cell">{row.end_date}</td>
                        <td><span className={`pill ${status.pillClass}`}><i />{status.label}</span></td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
