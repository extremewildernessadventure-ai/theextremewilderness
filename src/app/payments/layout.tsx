import { Geist } from 'next/font/google'
import '../globals.css'

// Independent root layout for the Pesapal payment-return page (see
// payments/return/page.tsx) — a standalone, non-localized confirmation
// screen, kept separate from app/[locale]/layout.tsx on purpose (see the
// next/root-params comment in src/i18n/request.ts).
const geist = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

export default function PaymentsLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr" className={`${geist.variable} h-full w-full`}>
      <body className="min-h-screen w-full antialiased">
        {children}
      </body>
    </html>
  )
}
