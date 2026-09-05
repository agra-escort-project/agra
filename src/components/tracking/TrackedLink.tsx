'use client'
// src/components/tracking/TrackedLink.tsx
// ─────────────────────────────────────────────────────────────────────────────
// Drop-in tracked replacement for Next.js <Link> in Server Components.
// Used for internal navigation CTAs (homepage hero, rates page, etc.)
// ─────────────────────────────────────────────────────────────────────────────

import React from 'react'
import Link from 'next/link'
import type { ComponentProps } from 'react'
import { trackCtaClick } from '@/lib/analytics/tracker'
import type { CtaClickPayload } from '@/lib/analytics/events'

interface TrackedLinkProps extends ComponentProps<typeof Link> {
  trackingData: CtaClickPayload
}

export default function TrackedLink({ trackingData, onClick, children, ...rest }: TrackedLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    trackCtaClick(trackingData)
    onClick?.(e)
  }

  return (
    <Link onClick={handleClick} {...rest}>
      {children}
    </Link>
  )
}
