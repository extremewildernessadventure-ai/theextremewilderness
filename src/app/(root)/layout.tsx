import { Geist } from 'next/font/google'
import '../globals.css'

// Independent root layout for the couple of bare files that sit directly
// under app/ with no locale/section of their own — the "/" redirect and the
// app-wide 404 fallback (see app/(root)/page.tsx and not-found.tsx). A route
// group (not a URL segment) so it doesn't affect either route's path.
// Kept separate from app/[locale]/layout.tsx, app/admin/layout.tsx, and
// app/payments/layout.tsx deliberately — see the comment on next/root-params
// in src/i18n/request.ts for why there's no single shared root layout
// anymore.
const geist = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

export default function RootGroupLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr" className={`${geist.variable} h-full w-full`}>
      <body className="min-h-screen w-full flex flex-col antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
