// src/lib/analytics/events.ts
// ─────────────────────────────────────────────────────────────────────────────
// Single source of truth for every analytics event in the application.
// All values are typed — TypeScript catches misspellings at build time.
// ─────────────────────────────────────────────────────────────────────────────

/**
 * What the user actually did when they clicked the CTA.
 * Describes the conversion action type.
 */
export type CtaAction =
  | 'whatsapp_chat'       // Opens a WhatsApp conversation
  | 'phone_call'          // Initiates a tel: call
  | 'send_email'          // Opens email client (mailto:)
  | 'navigate_to_contact' // Internal navigation to /contact page
  | 'navigate_to_gallery' // Internal navigation to /gallery page

/**
 * Exactly where on the site the button lives.
 * Format: {page_or_area}_{section}
 */
export type CtaSource =
  // ─── Global / persistent UI ──────────────────────────────────────────────
  | 'global_whatsapp_fab'           // Floating WhatsApp button (bottom-right, every page)
  | 'global_floating_contact_call'  // FloatingContact widget — Call button
  | 'global_floating_contact_wa'    // FloatingContact widget — WhatsApp button
  | 'header_call_button'            // Sticky header "Call Now" (mobile)
  | 'footer_email_link'             // Footer "Contact Us" mailto link
  | 'mobile_nav_whatsapp_center'    // Mobile bottom nav — center WhatsApp orb
  | 'mobile_nav_drawer_call'        // Mobile bottom nav — drawer "Call Now" button
  // ─── Homepage ────────────────────────────────────────────────────────────
  | 'homepage_hero_book_now'        // Homepage hero "Book Now" → /contact
  | 'homepage_bottom_cta'           // Homepage bottom conversion "Book Now via WhatsApp"
  // ─── Gallery page ────────────────────────────────────────────────────────
  | 'model_card_book_now'           // ModelCard "Book Now" WhatsApp button
  // ─── Model profile page (/gallery/[slug]) ────────────────────────────────
  | 'profile_booking_call'          // Model profile booking panel — Call
  | 'profile_booking_whatsapp'      // Model profile booking panel — WhatsApp
  | 'profile_booking_email'         // Model profile booking panel — Email
  // ─── Location pages (/best-escorts-*) ────────────────────────────────────
  | 'location_page_book_now'        // Location page bottom dark CTA — Book Now
  | 'location_page_call'            // Location page booking info card - Call Now
  | 'location_page_fresh_profiles'  // Location page booking info card - Get Fresh Profiles
  // ─── Contact page ────────────────────────────────────────────────────────
  | 'contact_page_call'             // Contact page — "24/7 Booking Line" call block
  | 'contact_page_whatsapp'         // Contact page — "Book via WhatsApp" block
  | 'contact_page_email'            // Contact page — "Book via Email" block
  // ─── Rates page ──────────────────────────────────────────────────────────
  | 'rates_page_standard_book_now'  // Rates page — Standard tier "Book Now"
  | 'rates_page_vip_book_vip'       // Rates page — VIP tier "Book VIP"
  | 'rates_page_premium_book'       // Rates page — Premium tier "Book Premium"
  // ─── Services section ────────────────────────────────────────────────────
  | 'services_card_book_now'        // PremiumServices card "Book Now" (summary mode)
  | 'services_card_book_model'      // PremiumServices card "Book Model" (full mode)
  // ─── FAQ sidebar ─────────────────────────────────────────────────────────
  | 'faq_sidebar_whatsapp'          // FaqSection sidebar "Contact Us via WhatsApp"

/**
 * The full payload sent with every `cta_click` event.
 */
export interface CtaClickPayload {
  /** What conversion action the user took */
  cta_action: CtaAction
  /** Exactly which UI element they clicked */
  cta_source: CtaSource
  /** The model's display name, if the CTA is model-specific */
  model_name?: string
  /** The location page name, if clicked on a location-specific page */
  location_name?: string
}
