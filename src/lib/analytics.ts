declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

export function trackEvent(name: string, params?: Record<string, unknown>) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return
  window.gtag('event', name, params)
}

// Google Ads "Fill Form" conversion — fires when a lead form is successfully submitted.
const FORM_FILL_CONVERSION_ID = 'AW-10883571750/AabeCK3756sYEKbA2MUo'

export function trackFormFillConversion() {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return
  window.gtag('event', 'conversion', {
    send_to: FORM_FILL_CONVERSION_ID,
    value: 1.0,
    currency: 'USD',
  })
}
