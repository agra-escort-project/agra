import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us | Trusted Agra Call Girls & Escort Agency',
  description: 'Learn why we are the most trusted and premium escort agency in Agra. We guarantee 100% genuine profiles, no advance payments, and strict privacy for all our clients.',
  keywords: ['Trusted escort agency Agra', 'Genuine call girls Agra', 'Agra escort reviews', 'Safe escorts Agra'],
  alternates: {
    canonical: 'https://agracallgirly.com/about',
  },
};

export default function AboutPage() {
  return (
    <>
      <main>
        <section className="hero">
          <div className="container">
            <h1 className="hero-title">About the Best Escort Agency in Agra</h1>
            <p className="hero-subtitle">
              We are Agra’s most trusted and discreet premium companionship agency, dedicated to providing unforgettable experiences with top-tier models, built on a foundation of trust, discretion, and absolute luxury.
            </p>
          </div>
        </section>

        <section style={{ padding: '3rem 0', background: 'var(--surface-color)' }}>
          <div className="container" style={{ margin: '0 auto' }}>
            
            <article style={{ marginBottom: '4rem' }}>
              <h2 style={{ color: 'var(--accent-primary)', fontSize: '2rem', marginBottom: '1rem' }}>Our Mission as Agra&apos;s Top Escort Service</h2>
              <p style={{ fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
                The adult entertainment industry is unfortunately plagued by fake profiles, scams, and unreliable services. Our mission is to completely revolutionize your experience in Agra by providing a 100% transparent, premium, and reliable service. We aim to connect discerning gentlemen with the most beautiful, sophisticated, and genuine companions in the city.
              </p>
            </article>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
              
              <div style={{ background: 'var(--bg-color)', padding: '2rem', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', color: 'var(--accent-primary)' }}>100% Genuine Profiles</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  What you see is exactly who arrives at your door. We strictly verify every single model in our portfolio. No bait-and-switch tactics, no fake photos. Just breathtakingly beautiful women ready to entertain.
                </p>
              </div>

              <div style={{ background: 'var(--bg-color)', padding: '2rem', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', color: 'var(--accent-primary)' }}>Zero Advance Payment</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  We do not ask for a single rupee upfront. Our entire business model is built on mutual trust. You only pay directly to the companion when she arrives at your location, guaranteeing you are never scammed.
                </p>
              </div>

              <div style={{ background: 'var(--bg-color)', padding: '2rem', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', color: 'var(--accent-primary)' }}>Strict Privacy Policy</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  Your privacy is sacred to us. We do not store your personal data, we do not require your real name, and our models are trained to be 100% discreet upon arrival and departure from your location.
                </p>
              </div>

              <div style={{ background: 'var(--bg-color)', padding: '2rem', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', color: 'var(--accent-primary)' }}>24/7 Availability</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  Desire doesn&apos;t follow a schedule. Whether it&apos;s a late-night outcall to your hotel or a midday meeting, our booking agents and companions are available 24 hours a day, 7 days a week across all of Agra.
                </p>
              </div>

            </div>

            <div style={{ textAlign: 'center', padding: '3rem', background: 'var(--bg-color)', borderRadius: '12px', border: '2px solid var(--accent-primary)' }}>
              <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Ready to Experience the Best?</h2>
              <p style={{ fontSize: '1.1rem', marginBottom: '2rem', color: 'var(--text-secondary)' }}>
                Contact us now to book your VIP companion.
              </p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link href="/#contact" className="btn btn-primary">Book Now</Link>
                <Link href="/rates" className="btn btn-secondary">View Rates</Link>
              </div>
            </div>

          </div>
        </section>
      </main>
    </>
  );
}
