import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import { getLocale } from 'next-intl/server'
import { SITE_URL } from '@/lib/site'

const geist = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'The Extreme Wilderness | Tanzania Safari & Kilimanjaro',
    template: '%s | The Extreme Wilderness',
  },
  description:
    "Tanzania's premier locally-owned safari operator. Custom safaris to Serengeti, Ngorongoro, Zanzibar & beyond. Kilimanjaro trekking from Arusha. 5+ years, 98% satisfaction.",
  keywords: [
    'Tanzania safari',
    'Serengeti safari',
    'Kilimanjaro trekking',
    'East Africa safari',
    'Tanzania tour operator',
    'Ngorongoro Crater safari',
    'Zanzibar holiday',
  ],
  authors: [{ name: 'The Extreme Wilderness' }],
  openGraph: {
    title: 'The Extreme Wilderness — Where the Wild Calls You Home',
    description:
      'Custom Tanzania safaris, Kilimanjaro treks & Zanzibar beach holidays. Born and based in Arusha, Tanzania.',
    type: 'website',
    url: SITE_URL,
    siteName: 'The Extreme Wilderness',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Extreme Wilderness | Tanzania Safari',
    description: 'Custom Tanzania safaris born in the wilderness.',
  },
  robots: { index: true, follow: true },
  verification: {
    other: {
      'msvalidate.01': '8D55710550A379BDC592BC0FEDD6808B',
    },
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico' },
    ],
    apple: { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    other: [
      { rel: 'manifest', url: '/site.webmanifest' },
    ],
  },
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const locale = await getLocale()
  return (
    <html lang={locale} className={`${geist.variable} h-full w-full`}>
      <body className="min-h-screen w-full flex flex-col antialiased overflow-x-hidden">
        {children}
        <Script
          id="ga4-config"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-3NQPMQE36Q');
            `,
          }}
        />
        {/* The dataLayer/gtag shim above queues events immediately at no
            network cost; the actual gtag.js payload (~170 KiB) is deferred
            to idle time since nothing needs it before then — events queued
            in the meantime are flushed once it loads. */}
        <Script
          id="ga4-loader"
          strategy="lazyOnload"
          src="https://www.googletagmanager.com/gtag/js?id=G-3NQPMQE36Q"
        />
        <Script
          id="tawk-to"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
              (function(){
                var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                s1.async=true;
                s1.src='https://embed.tawk.to/6a468818097a531d4555034c/1jsho799l';
                s1.charset='UTF-8';
                s1.setAttribute('crossorigin','*');
                s0.parentNode.insertBefore(s1,s0);
              })();
            `,
          }}
        />
        <Script
          id="tawk-reposition"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(){
                // Confirmed via live inspection: Tawk's minimized launcher is a
                // same-origin (about:blank) iframe with a dynamically-generated
                // id, containing .tawk-min-container. The iframe ITSELF is the
                // fixed/positioned element (bottom: 20px !important, right:
                // 20px !important, tightly sized ~67x64px); .tawk-min-container
                // is only position:relative inside it and must NOT be touched —
                // shifting it moves the button outside the iframe's own small
                // clipped bounds and makes it disappear entirely.
                function ensurePulseRing(frame) {
                  var ring = document.getElementById('tawk-pulse-ring');
                  if (!ring) {
                    ring = document.createElement('div');
                    ring.id = 'tawk-pulse-ring';
                    // Reuses Tailwind's built-in animate-ping utility, matching
                    // WhatsAppButton's own pulse-ring recipe exactly.
                    ring.className = 'fixed rounded-full bg-green-500 opacity-30 animate-ping pointer-events-none';
                    document.body.appendChild(ring);
                  }
                  var frameStyle = window.getComputedStyle(frame);
                  var rect = frame.getBoundingClientRect();
                  if (rect.width === 0 || rect.height === 0) return; // avoid collapsing the ring during a transient Tawk re-render
                  ring.style.bottom = frameStyle.bottom;
                  ring.style.right = frameStyle.right;
                  ring.style.width = rect.width + 'px';
                  ring.style.height = rect.height + 'px';
                  ring.style.zIndex = '1000002'; // just below the widget iframe's z-index (1000003)
                }
                function reposition() {
                  // Matches WhatsAppButton's own breakpoint exactly: bottom-20
                  // (80px) below lg, bottom-6 (24px) at lg and above — so the
                  // two bubbles stay level at every screen size, not just mobile.
                  var targetBottom = window.innerWidth >= 1024 ? '24px' : '80px';
                  var iframes = document.querySelectorAll('iframe');
                  for (var i = 0; i < iframes.length; i++) {
                    var frame = iframes[i];
                    var doc;
                    try { doc = frame.contentDocument; } catch (e) { continue; }
                    if (!doc) continue;
                    // Tawk's iframes are same-origin (about:blank) with no
                    // title attribute, which fails the Lighthouse/axe
                    // frame-title check. Only Tawk creates same-origin
                    // frames on this site, so any frame we can reach here
                    // is safe to title directly (we can't edit the embed).
                    if (!frame.title) frame.title = 'Chat with us';
                    if (!doc.querySelector('.tawk-min-container')) continue;
                    if (window.getComputedStyle(frame).position === 'fixed') {
                      frame.style.setProperty('bottom', targetBottom, 'important');
                      ensurePulseRing(frame);
                    }
                  }
                }
                var observer = new MutationObserver(reposition);
                observer.observe(document.body, { childList: true, subtree: true });
                window.addEventListener('resize', reposition);
                var tries = 0;
                var interval = setInterval(function () {
                  reposition();
                  if (++tries > 60) clearInterval(interval);
                }, 1000);
              })();
            `,
          }}
        />
      </body>
    </html>
  )
}
