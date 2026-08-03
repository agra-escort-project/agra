import Head from 'next/head';
import FaqSection from '@/components/FaqSection';

export const metadata = {
  title: 'Contact Agra Call Girls | 24/7 Booking & Support',
  description: 'Get in touch with the top-rated Agra escort agency. 100% confidential, 24/7 availability for VIP hotel outcalls. Call or WhatsApp to book a premium companion.',
};

const contactFaqs = [
  {
    question: "How do I book an escort in Agra?",
    answer: "Booking is very simple! You can click the WhatsApp button or call us directly. Let us know your location (hotel name), preferred time, and any specific preferences, and we will arrange the perfect companion for you immediately."
  },
  {
    question: "Do I need to pay any advance amount?",
    answer: "Absolutely not. We operate on a strict Cash-on-Arrival policy. You only pay directly to the model once she arrives at your location. Beware of agencies asking for advance payments as they are often scams."
  },
  {
    question: "Is my privacy guaranteed?",
    answer: "100% Guaranteed. We do not store your personal details, and our models are trained to be highly discreet. They arrive in normal, elegant clothing like any regular guest."
  },
  {
    question: "Which areas in Agra do you serve?",
    answer: "We provide outcall services to all major 3, 4, and 5-star hotels across Agra, including Tajganj, Fatehabad Road, Sanjay Place, Sikandra, and Cantonment areas."
  }
];

export default function ContactPage() {
  return (
    <>
      <main style={{ minHeight: '100vh', background: 'var(--bg-color)' }}>
        {/* Contact Hero */}
        <section className="page-header" style={{ background: 'linear-gradient(135deg, var(--bg-color) 0%, #1a1a1a 100%)', borderBottom: '1px solid var(--border-color)', textAlign: 'center' }}>
          <div className="container">
            <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>
              Contact <span style={{ color: 'var(--accent-primary)' }}>Us</span>
            </h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto' }}>
              Our VIP customer support is available 24/7. Whether you want to book a model or have questions about our services, we are here to help with 100% confidentiality.
            </p>
          </div>
        </section>

        {/* Map & Contact Info Section */}
        <section style={{ padding: '6rem 0' }}>
          <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem', alignItems: 'start' }}>
            
            {/* Map (Left) */}
            <div style={{ borderRadius: '24px', overflow: 'hidden', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-md)', height: '100%', minHeight: '500px', width: '100%' }}>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113554.49397686616!2d77.92523281358045!3d27.176310243444062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39740d857c2f41d9%3A0x784aef38a9523b42!2sAgra%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0, minHeight: '500px' }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Agra Escorts Service Area Map"
              ></iframe>
            </div>

            {/* Contact Details (Right) */}
            <div style={{ background: 'var(--surface-color)', padding: '3rem', borderRadius: '24px', border: '1px solid var(--border-color)', boxShadow: '0 20px 40px rgba(233,30,99,0.05)' }}>
              <h2 style={{ fontSize: '2.4rem', marginBottom: '0.5rem', color: 'var(--text-primary)', fontWeight: 800 }}>VIP Contact</h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '2.5rem', fontSize: '1.1rem' }}>Reach out to us anytime. We ensure 100% discretion and lightning-fast responses.</p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                
                {/* Call Now Premium Block */}
                <a href="tel:+919876543210" style={{ display: 'flex', alignItems: 'center', padding: '1.5rem', background: '#fff', borderRadius: '16px', border: '1px solid rgba(233, 30, 99, 0.2)', boxShadow: '0 10px 30px rgba(233, 30, 99, 0.08)', textDecoration: 'none', transition: 'transform 0.3s ease', cursor: 'pointer' }} className="premium-contact-card">
                  <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--accent-primary), #ff4081)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', marginRight: '1.5rem', flexShrink: 0, boxShadow: '0 8px 20px rgba(233, 30, 99, 0.4)' }}>
                    <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: '28px', height: '28px' }}>
                      <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                    </svg>
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontSize: '0.85rem', color: 'var(--accent-primary)', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '0.3rem', fontWeight: 700 }}>24/7 Booking Line</h3>
                    <p style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-primary)', margin: 0 }}>+91 98765 43210</p>
                  </div>
                  <div style={{ color: 'var(--accent-primary)' }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ width: '24px', height: '24px' }}><path d="M9 5l7 7-7 7"/></svg>
                  </div>
                </a>

                {/* WhatsApp Premium Block */}
                <a href="https://wa.me/919876543210?text=Hello%20team,%20I%20am%20looking%20to%20book%20a%20high-end%20model%20in%20Agra.%20Could%20you%20please%20share%20the%20available%20profiles%20and%20rates?" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', padding: '1.5rem', background: '#fff', borderRadius: '16px', border: '1px solid rgba(37, 211, 102, 0.3)', boxShadow: '0 10px 30px rgba(37, 211, 102, 0.1)', textDecoration: 'none', transition: 'transform 0.3s ease', cursor: 'pointer' }} className="premium-contact-card">
                  <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '1.5rem', flexShrink: 0, boxShadow: '0 8px 20px rgba(37, 211, 102, 0.2)' }}>
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '40px', height: '40px' }}>
                      <path d="M20.52 3.449C18.24 1.17 15.24 0 12 0 5.383 0 0 5.383 0 12c0 2.115.553 4.184 1.6 6l-1.6 5.85 5.986-1.569c1.77.95 3.737 1.45 5.766 1.45h.005c6.617 0 12-5.383 12-12 0-3.208-1.248-6.223-3.52-8.497z" fill="#25D366"/>
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" fill="#FFF"/>
                    </svg>
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontSize: '0.85rem', color: '#128C7E', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '0.3rem', fontWeight: 700 }}>Book via WhatsApp</h3>
                    <p style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-primary)', margin: 0 }}>+91 98765 43210</p>
                  </div>
                  <div style={{ color: '#128C7E' }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ width: '24px', height: '24px' }}><path d="M9 5l7 7-7 7"/></svg>
                  </div>
                </a>

                {/* Email Premium Block */}
                <a href="mailto:booking@agracallgirls.com" style={{ display: 'flex', alignItems: 'center', padding: '1.5rem', background: '#fff', borderRadius: '16px', border: '1px solid rgba(0, 0, 0, 0.1)', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.04)', textDecoration: 'none', transition: 'transform 0.3s ease', cursor: 'pointer' }} className="premium-contact-card">
                  <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'linear-gradient(135deg, #666, #333)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', marginRight: '1.5rem', flexShrink: 0, boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)' }}>
                    <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: '28px', height: '28px' }}>
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontSize: '0.85rem', color: '#555', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '0.3rem', fontWeight: 700 }}>Book via Email</h3>
                    <p style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', margin: 0 }}>booking@agracallgirls.com</p>
                  </div>
                  <div style={{ color: '#555' }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ width: '24px', height: '24px' }}><path d="M9 5l7 7-7 7"/></svg>
                  </div>
                </a>

              </div>
            </div>

          </div>
        </section>

        {/* Trust Factors */}
        <section style={{ padding: '4rem 0', background: 'var(--surface-color)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', textAlign: 'center' }}>
              <div style={{ padding: '2rem', background: 'var(--bg-color)', borderRadius: '16px', border: '1px solid var(--border-color)' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>100% Confidential</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>We respect your privacy. No personal data is stored.</p>
              </div>
              <div style={{ padding: '2rem', background: 'var(--bg-color)', borderRadius: '16px', border: '1px solid var(--border-color)' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>💵</div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>No Advance Payment</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Strictly cash on arrival. Pay only when you meet.</p>
              </div>
              <div style={{ padding: '2rem', background: 'var(--bg-color)', borderRadius: '16px', border: '1px solid var(--border-color)' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>⭐</div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>Verified Profiles</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>What you see is exactly who you get. 100% genuine.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <div style={{ paddingTop: '2rem', paddingBottom: '4rem' }}>
          <FaqSection faqs={contactFaqs} title="Booking FAQs" subtitle="Everything you need to know about booking an escort safely and discreetly in Agra." />
        </div>
        
      </main>
    </>
  );
}
