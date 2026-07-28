import FaqAccordion from './FaqAccordion';

export default function FaqSection({ 
  faqs, 
  title = "Frequently Asked Questions", 
  subtitle = "Find answers to the most common questions about our premium escort services in Agra." 
}: { 
  faqs: any[], 
  title?: string, 
  subtitle?: string 
}) {
  return (
    <section id="faq" className="faq-section" style={{ padding: '5rem 0' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 className="section-title" style={{ marginBottom: '1rem' }}>{title}</h2>
          {subtitle && (
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto' }}>
              {subtitle || "We&apos;ve compiled a list of the most common questions our clients ask. If you don&apos;t find your answer here, feel free to contact us directly."}
            </p>
          )}
        </div>
        
        <div className="faq-grid">
          {/* Left Column: CTA Box */}
          <div className="faq-cta-column">
            <div className="faq-cta-box">
              <h3 style={{ color: 'white', fontSize: '1.8rem', marginBottom: '1rem' }}>Have a question?</h3>
              <p style={{ color: 'rgba(255,255,255,0.9)', marginBottom: '2rem', lineHeight: 1.6 }}>
                Can&apos;t find the answer you&apos;re looking for? Our booking experts are here to help you 24/7.
              </p>
              <div style={{ width: '100%', height: '1px', background: 'rgba(255,255,255,0.2)', marginBottom: '2rem' }} />
              <a href="https://wa.me/919999999999?text=Hello%20team,%20I%20have%20a%20few%20questions%20regarding%20your%20booking%20process.%20Can%20you%20assist%20me?" className="btn btn-primary" style={{ width: '100%', background: 'white', color: 'var(--accent-primary)', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', fontWeight: 'bold' }}>
                💬 Contact Us
              </a>
            </div>
          </div>

          {/* Right Column: Accordion */}
          <div className="faq-accordion-wrapper">
            <FaqAccordion faqs={faqs} />
          </div>
        </div>
      </div>
    </section>
  );
}
