import { redirect } from 'next/navigation'
import Link from 'next/link'
import { hasValidAdminSession } from '@/lib/adminAuth'
import LogoutButton from '../LogoutButton'

export default async function ProtectedAdminLayout({ children }: { children: React.ReactNode }) {
  const authed = await hasValidAdminSession()
  if (!authed) {
    redirect('/admin/login')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/admin/invoices" className="font-bold text-brand">
            EWA Admin
          </Link>
          <nav className="flex items-center gap-6">
            <Link href="/admin/invoices" className="text-sm text-gray-600 hover:text-brand transition-colors">
              Invoices
            </Link>
            <LogoutButton />
          </nav>
        </div>
      </header>
      <main className="max-w-6xl mx-auto px-6 py-10">
        {children}
      </main>
    </div>
  )
}
