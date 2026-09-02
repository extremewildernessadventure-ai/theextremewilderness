// Shared WhatsApp deep-link helper — deliberately minimal. The business's
// WhatsApp number is duplicated as a raw literal in several other places
// sitewide already (WhatsAppButton.tsx, contact/page.tsx, layout.tsx's
// JSON-LD, etc.) — out of scope to refactor those here, this just stops a
// 7th/8th hardcoded copy from being added by the forms that use it.
export const WHATSAPP_NUMBER = '255747999070'

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}
