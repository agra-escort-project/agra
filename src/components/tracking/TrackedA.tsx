'use client'
// src/components/tracking/TrackedA.tsx
// ─────────────────────────────────────────────────────────────────────────────
// Drop-in tracked replacement for <a> tags in Server Components.
// Attaches onClick tracking without forcing the parent page to become a client
// component. Passes all standard <a> props through untouched.
// ─────────────────────────────────────────────────────────────────────────────

import React from 'react'
import { trackCtaClick } from '@/lib/analytics/tracker'
import type { CtaClickPayload } from '@/lib/analytics/events'

interface TrackedAProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /** Tracking payload. Merged with auto-injected page_path in tracker.ts. */
  trackingData: CtaClickPayload
}

export default function TrackedA({ trackingData, onClick, children, ...rest }: TrackedAProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    trackCtaClick(trackingData)
    // Preserve any existing onClick handler the caller may have passed.
    onClick?.(e)
  }

  return (
    <a onClick={handleClick} {...rest}>
      {children}
    </a>
  )
}
