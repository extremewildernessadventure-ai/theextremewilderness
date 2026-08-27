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
    <>
      <div className="topbar">
        <svg className="topo-strip" viewBox="0 0 1400 140" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,110 Q150,60 300,100 T600,90 T900,110 T1200,85 T1400,100" fill="none" stroke="#1C3A2A" strokeWidth="2" />
          <path d="M0,80 Q150,30 300,70 T600,60 T900,80 T1200,55 T1400,70" fill="none" stroke="#1C3A2A" strokeWidth="2" />
          <path d="M0,50 Q150,10 300,40 T600,30 T900,50 T1200,25 T1400,40" fill="none" stroke="#1C3A2A" strokeWidth="2" />
        </svg>
        <div className="topbar-inner">
          <Link href="/admin" className="brand">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M12 2 3 20h18L12 2Z" />
              <path d="M8 14l2.5-3 2 2 1.5-2 2 3" />
              <path d="M12 2v6" />
            </svg>
            <span className="brand-text">EWA Admin</span>
          </Link>
          <div className="nav-links">
            <AdminDepartmentTabs groups={ADMIN_NAV} />
            <LogoutButton />
          </div>
        </div>
      </div>
      <AdminSubNavPills groups={ADMIN_NAV} />
      <div className="main">
        {children}
      </div>
    </>
  )
}
