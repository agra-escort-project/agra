"use client";

export default function FloatingContact() {
  return (
    <div className="floating-contact">
      <div className="floating-contact-inner">
        <span className="contact-text">Quick Booking / Doubts?</span>
        <a href="tel:+919999999999" className="contact-btn phone" title="Call Us">
          📞
        </a>
        <a href="https://wa.me/919999999999?text=Hello%20team,%20I%20am%20looking%20to%20book%20a%20high-end%20model%20in%20Agra.%20Could%20you%20please%20share%20the%20available%20profiles%20and%20rates?" className="contact-btn whatsapp" title="WhatsApp Us">
          💬
        </a>
      </div>
    </div>
  );
}
