declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

export function trackEvent(name: string, params?: Record<string, unknown>) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return
  window.gtag('event', name, params)
}

// Google Ads "Fill Form" conversion — fires when a lead form is successfully
// submitted, or a WhatsApp send is clicked, anywhere on the site (one
// unified conversion action, not split per channel/form). The previous
// label (AabeCK3756sYEKbA2MUo) was a stale/legacy tag no longer used by
// the current campaign — this code had been firing correctly since
// 2026-07-11, just into the wrong conversion action, which is why Ads
// showed real traffic but zero recorded conversions. Current label:
// "Enquiry Form Submit 2026".
const FORM_FILL_CONVERSION_ID = 'AW-10883571750/Xb4yCL_moO0cEKbA2MUo'

export function trackFormFillConversion() {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return
  try {
    window.gtag('event', 'conversion', {
      send_to: FORM_FILL_CONVERSION_ID,
      value: 1.0,
      currency: 'USD',
    })
  } catch {
    // Tracking must never break the user's actual submission/navigation.
  }
}
