import type { Metadata, Viewport } from 'next'
import { Geist } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import { SITE_URL } from '@/lib/site'

const geist = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin', 'cyrillic'],
})

export const viewport: Viewport = {
  themeColor: '#1C3A2A',
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'EWA Safari Outfitters | Tanzania Safari & Kilimanjaro',
    template: '%s | EWA Safari Outfitters',
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
  authors: [{ name: 'EWA Safari Outfitters' }],
  openGraph: {
    title: 'EWA Safari Outfitters — Where the Wild Calls You Home',
    description:
      'Custom Tanzania safaris, Kilimanjaro treks & Zanzibar beach holidays. Born and based in Arusha, Tanzania.',
    type: 'website',
    url: SITE_URL,
    siteName: 'EWA Safari Outfitters',
    locale: 'en_US',
    images: [
      {
        url: '/images/gallery/safari-119.jpg',
        width: 1200,
        height: 630,
        alt: 'Lions at golden sunset on the Tanzania Serengeti plains',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EWA Safari Outfitters | Tanzania Safari',
    description: 'Custom Tanzania safaris born in the wilderness.',
    images: ['/images/gallery/safari-119.jpg'],
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Static default — this layout sits above app/[locale] and can't read the
  // locale segment without a Dynamic API, which would force the whole site
  // to render per-request. app/[locale]/layout.tsx corrects this attribute
  // synchronously on the client for non-English locales (see LangCorrection
  // below); hreflang tags (the signal that matters for SEO) are already
  // set correctly per-page regardless of this attribute.
  return (
    <html lang="en" className={`${geist.variable} h-full w-full`}>
      <body className="min-h-screen w-full flex flex-col antialiased overflow-x-hidden">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-T6WSVLT9"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {children}
        <Script
          id="gtm-head"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-T6WSVLT9');
            `,
          }}
        />
        <Script
          id="ga4-config"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-3NQPMQE36Q');
              gtag('config', 'AW-10883571750');
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
          strategy="lazyOnload"
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
                    // This script lives in the root layout, which can't read
                    // the locale segment — window.__tawkChatTitle is set by
                    // a small per-locale script in [locale]/layout.tsx.
                    if (!frame.title) frame.title = window.__tawkChatTitle || 'Chat with us';
                    if (window.getComputedStyle(frame).position !== 'fixed') continue;
                    if (doc.querySelector('.tawk-min-container')) {
                      // On the very first tick this iframe can already be
                      // position:fixed before Tawk has populated
                      // .tawk-min-container inside it, so an earlier pass
                      // may have mistaken it for a small proactive bubble
                      // (below) and hidden it — undo that once we can
                      // positively identify it as the real launcher.
                      frame.style.removeProperty('display');
                      frame.style.setProperty('bottom', targetBottom, 'important');
                      ensurePulseRing(frame);
                      continue;
                    }
                    // Tawk also renders proactive greeting bubbles/stickers
                    // (e.g. the "Need a hand?" teaser, the "We Are Here!"
                    // sticker) as their own small fixed iframes, positioned
                    // assuming the launcher sits at Tawk's default offset.
                    // Once we move the launcher, those teasers overlap/clip
                    // against it and the bottom nav instead of repositioning
                    // to match — hide them rather than guess a new offset.
                    // Height-gated so a genuinely opened chat window (much
                    // taller) is never touched.
                    var rect = frame.getBoundingClientRect();
                    if (rect.height > 0 && rect.height < 150) {
                      frame.style.setProperty('display', 'none', 'important');
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
