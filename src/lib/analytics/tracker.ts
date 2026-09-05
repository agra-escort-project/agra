// src/lib/analytics/tracker.ts
// ─────────────────────────────────────────────────────────────────────────────
// Provider-agnostic tracker. All components call trackCtaClick() — never
// window.gtag() directly. To swap GA4 for another provider, only change
// this file. Zero changes required in any component.
// ─────────────────────────────────────────────────────────────────────────────

import type { CtaClickPayload } from './events'

// Augment the global Window type so TypeScript knows about gtag.
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
    dataLayer?: unknown[]
  }
}

/**
 * Tracks a CTA click. Safe to call anywhere — no-ops on the server,
 * no-ops if GA hasn't loaded yet, never throws.
 *
 * @example
 * trackCtaClick({ cta_action: 'whatsapp_chat', cta_source: 'model_card_book_now', model_name: 'Kriti' })
 */
export function trackCtaClick(payload: CtaClickPayload): void {
  // Guard: SSR / server components call this — silently ignore.
  if (typeof window === 'undefined') return

  // Build a clean parameter object — omit undefined optional fields so GA4
  // doesn't record "(not set)" for every event without a model name.
  const params: Record<string, string> = {
    cta_action: payload.cta_action,
    cta_source: payload.cta_source,
    // Auto-inject the current page path so you can always filter by page.
    page_path: window.location.pathname,
  }

  if (payload.model_name)   params.model_name   = payload.model_name
  if (payload.location_name) params.location_name = payload.location_name

  // ── Google Analytics 4 ────────────────────────────────────────────────────
  // The event name "cta_click" is the stable key you'll filter on in GA4.
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'cta_click', params)
  }

  // ── Development logging ───────────────────────────────────────────────────
  // See every event in the browser console during local dev without GA.
  if (process.env.NODE_ENV === 'development') {
    console.log('[Analytics] cta_click', params)
  }

  // ── Future providers ─────────────────────────────────────────────────────
  // To add Mixpanel: mixpanel.track('cta_click', params)
  // To add Meta Pixel: window.fbq?.('track', 'Lead', params)
  // To add a custom webhook: fetch('/api/track', { method: 'POST', body: JSON.stringify(params) })
}
