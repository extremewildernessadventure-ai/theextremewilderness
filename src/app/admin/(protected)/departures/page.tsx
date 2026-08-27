import Link from 'next/link'
import { getDb } from '@/lib/db'
import type { Departure } from '@/lib/departures'
import { packages } from '@/data/packages'
import AdminTable, { type AdminTableColumn } from '@/components/admin/AdminTable'
import DepartureStatusSelect from './DepartureStatusSelect'

export const dynamic = 'force-dynamic'

function packageName(slug: string): string {
  return packages.find((p) => p.slug === slug)?.name ?? slug
}

const columns: AdminTableColumn<Departure>[] = [
  {
    header: 'Package',
    render: (d) => (
      <Link href={`/admin/departures/${d.id}`} className="text-brand font-medium hover:underline">
        {packageName(d.package_slug)}
      </Link>
    ),
  },
  { header: 'Dates', className: 'text-gray-700 whitespace-nowrap', render: (d) => `${d.start_date} → ${d.end_date}` },
  { header: 'Seats', className: 'text-gray-700', render: (d) => `${d.seats_booked} / ${d.capacity}` },
  { header: 'Status', render: (d) => <DepartureStatusSelect departureId={d.id} currentStatus={d.status} compact /> },
]

export default async function DeparturesListPage() {
  const db = await getDb()
  const { results } = await db.prepare('SELECT * FROM departures ORDER BY start_date ASC').all<Departure>()

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-brand">Departures</h1>
        <Link
          href="/admin/departures/new"
          className="px-4 py-2.5 bg-brand hover:bg-brand-secondary text-white text-sm font-semibold rounded-lg transition-colors"
        >
          + New Departure
        </Link>
      </div>

      <AdminTable columns={columns} rows={results} rowKey={(d) => d.id} emptyMessage="No departures yet." />
    </div>
  )
}
