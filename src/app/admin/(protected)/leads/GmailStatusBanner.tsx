import Link from 'next/link'
import { getGmailConnectionStatus } from '@/lib/gmail'

export default async function GmailStatusBanner() {
  const { state, connectedAt } = await getGmailConnectionStatus()

  if (state === 'connected') return null

  // Translucent tints against the dark card surface (same recipe as
  // admin-theme.css's .pill.* variants) rather than the old light pastel
  // Tailwind backgrounds (bg-blue-50 etc.), which assumed a light page —
  // dark text on a light-50 tint reads fine on a light background but
  // becomes illegible once the page itself is dark.
  const copy: Record<Exclude<typeof state, 'connected'>, { text: string; cta: string; color: string; bg: string }> = {
    not_connected: {
      text: 'Gmail isn\'t connected yet — replies sent from Gmail won\'t be auto-detected until you connect it.',
      cta: 'Connect Gmail',
      color: '#7FA3BF',
      bg: 'rgba(127, 163, 191, 0.14)',
    },
    expiring_soon: {
      text: `Gmail connection needs refreshing soon (connected ${connectedAt ? new Date(connectedAt.replace(' ', 'T') + 'Z').toLocaleDateString() : 'a while ago'}) — reconnect to avoid a gap in auto-detected replies.`,
      cta: 'Reconnect Gmail',
      color: 'var(--gold)',
      bg: 'var(--gold-bg)',
    },
    disconnected: {
      text: 'Gmail connection has expired — auto-detected replies are paused until you reconnect.',
      cta: 'Reconnect Gmail',
      color: 'var(--rust)',
      bg: 'var(--rust-bg)',
    },
  }

  const { text, cta, color, bg } = copy[state]

  return (
    <div
      className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border rounded-xl p-4 mb-6 text-sm"
      style={{ background: bg, borderColor: color, color }}
    >
      <p>{text}</p>
      <Link
        href="/api/admin/gmail/connect"
        className="shrink-0 inline-flex items-center justify-center px-4 py-2 border border-current rounded-lg text-sm font-semibold transition-colors"
        style={{ background: 'var(--white)' }}
      >
        {cta}
      </Link>
    </div>
  )
}
