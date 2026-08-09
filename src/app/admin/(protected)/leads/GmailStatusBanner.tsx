import Link from 'next/link'
import { getGmailConnectionStatus } from '@/lib/gmail'

export default async function GmailStatusBanner() {
  const { state, connectedAt } = await getGmailConnectionStatus()

  if (state === 'connected') return null

  const copy: Record<Exclude<typeof state, 'connected'>, { text: string; cta: string; tone: string }> = {
    not_connected: {
      text: 'Gmail isn\'t connected yet — replies sent from Gmail won\'t be auto-detected until you connect it.',
      cta: 'Connect Gmail',
      tone: 'bg-blue-50 border-blue-200 text-blue-800',
    },
    expiring_soon: {
      text: `Gmail connection needs refreshing soon (connected ${connectedAt ? new Date(connectedAt.replace(' ', 'T') + 'Z').toLocaleDateString() : 'a while ago'}) — reconnect to avoid a gap in auto-detected replies.`,
      cta: 'Reconnect Gmail',
      tone: 'bg-amber-50 border-amber-200 text-amber-800',
    },
    disconnected: {
      text: 'Gmail connection has expired — auto-detected replies are paused until you reconnect.',
      cta: 'Reconnect Gmail',
      tone: 'bg-red-50 border-red-200 text-red-800',
    },
  }

  const { text, cta, tone } = copy[state]

  return (
    <div className={`flex flex-col sm:flex-row sm:items-center justify-between gap-3 border rounded-xl p-4 mb-6 text-sm ${tone}`}>
      <p>{text}</p>
      <Link
        href="/api/admin/gmail/connect"
        className="shrink-0 inline-flex items-center justify-center px-4 py-2 bg-white border border-current rounded-lg text-sm font-semibold hover:bg-white/60 transition-colors"
      >
        {cta}
      </Link>
    </div>
  )
}
