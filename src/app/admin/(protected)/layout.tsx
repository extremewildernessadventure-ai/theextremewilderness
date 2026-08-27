import { redirect } from 'next/navigation'
import Link from 'next/link'
import { hasValidAdminSession } from '@/lib/adminAuth'
import { ADMIN_NAV } from '@/lib/adminNav'
import LogoutButton from '../LogoutButton'
import AdminDepartmentTabs from '../AdminDepartmentTabs'
import AdminSubNavPills from '../AdminSubNavPills'

export default async function ProtectedAdminLayout({ children }: { children: React.ReactNode }) {
  const authed = await hasValidAdminSession()
  if (!authed) {
    redirect('/admin/login')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-6">
          <Link href="/admin" className="font-bold text-brand shrink-0">
            EWA Admin
          </Link>
          <div className="flex items-center gap-6 min-w-0">
            <AdminDepartmentTabs groups={ADMIN_NAV} />
            <LogoutButton />
          </div>
        </div>
        <AdminSubNavPills groups={ADMIN_NAV} />
      </header>
      <main className="max-w-6xl mx-auto px-6 py-10">
        {children}
      </main>
    </div>
  )
}
