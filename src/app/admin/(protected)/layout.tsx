import { redirect } from 'next/navigation'
import { hasValidAdminSession } from '@/lib/adminAuth'
import { getDb } from '@/lib/db'
import AppShell from '@/components/admin/AppShell'

export default async function ProtectedAdminLayout({ children }: { children: React.ReactNode }) {
  const authed = await hasValidAdminSession()
  if (!authed) {
    redirect('/admin/login')
  }

  // Runs on every admin page (the topbar's notification badge is part of
  // the shared shell, not just the dashboard) — the same three
  // "needs attention" queries the dashboard page itself runs, reused
  // rather than re-invented, summed into one real count. Three cheap
  // COUNT(*) queries via Promise.all is an acceptable cost here: every
  // other admin page already does its own per-page D1 reads in a Server
  // Component, this is no heavier than one of those.
  const db = await getDb()
  const [leadsFollowUp, pendingPermits, pendingDocuments] = await Promise.all([
    db.prepare("SELECT COUNT(*) as count FROM leads WHERE status = 'new' AND created_at <= datetime('now', '-2 days')").first<{ count: number }>(),
    db.prepare("SELECT COUNT(*) as count FROM permits WHERE status = 'pending'").first<{ count: number }>(),
    db.prepare("SELECT COUNT(*) as count FROM documents WHERE status = 'pending'").first<{ count: number }>(),
  ])
  const notificationCount = (leadsFollowUp?.count ?? 0) + (pendingPermits?.count ?? 0) + (pendingDocuments?.count ?? 0)

  return <AppShell notificationCount={notificationCount}>{children}</AppShell>
}
