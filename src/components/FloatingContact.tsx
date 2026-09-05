'use client';
import { getWhatsAppLink } from "@/utils/whatsapp";
import { trackCtaClick } from '@/lib/analytics/tracker';

export default function FloatingContact() {
  return (
    <div className="floating-contact">
      <div className="floating-contact-inner">
        <span className="contact-text">Quick Booking / Doubts?</span>
        <a
          href="tel:+919105293429"
          className="contact-btn phone"
          title="Call Us"
          onClick={() => trackCtaClick({ cta_action: 'phone_call', cta_source: 'global_floating_contact_call' })}
        >
          📞
        </a>
        <a
          href={getWhatsAppLink({ source: 'floating_contact' })}
          className="contact-btn whatsapp"
          title="WhatsApp Us"
          onClick={() => trackCtaClick({ cta_action: 'whatsapp_chat', cta_source: 'global_floating_contact_wa' })}
        >
          💬
        </a>
      </div>
    </div>
  );
}
