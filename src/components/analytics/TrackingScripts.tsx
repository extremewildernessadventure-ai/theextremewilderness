'use client'

import Script from 'next/script'
import { usePathname } from 'next/navigation'

// Google Tag Manager, GA4, and the Tawk.to chat widget — deliberately kept
// out of the internal /admin area (no visitor analytics or chat widget
// belongs on a password-gated staff tool). Gated here rather than by
// restructuring the root layout, since /admin already shares the single
// root layout (html/body) with the public site.
export default function TrackingScripts() {
  const pathname = usePathname()
  if (pathname?.startsWith('/admin')) {
    return null
  }

  return (
    <>
      {/* Google Tag Manager (noscript) */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-T6WSVLT9"
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        />
      </noscript>
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
                  // Tawk also renders proactive/auto popups — small teaser
                  // stickers ("Need a hand?") as well as full greeting
                  // bubbles with quick-reply buttons (a Trigger configured
                  // in the Tawk dashboard) — as their own fixed iframes,
                  // positioned assuming the launcher sits at Tawk's default
                  // offset. Once we move the launcher, these overlap/clip
                  // against it and the bottom nav instead of repositioning
                  // to match. More importantly, the site should only ever
                  // show its own chat UI when the visitor deliberately
                  // opens it — matching how WhatsAppButton behaves, an icon
                  // that never pops open unprompted — so hide any
                  // non-launcher Tawk iframe unless Tawk itself confirms
                  // the visitor has actually maximized a conversation.
                  // isChatMaximized() is the authoritative signal (covers
                  // both the small teaser and the larger greeting bubble,
                  // regardless of size); it defaults safely to "not open"
                  // for the brief window before Tawk_API is fully populated,
                  // since nothing can have been genuinely opened yet then.
                  var chatIsOpen = window.Tawk_API && typeof window.Tawk_API.isChatMaximized === 'function'
                    && window.Tawk_API.isChatMaximized();
                  if (!chatIsOpen) {
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
    </>
  )
}
