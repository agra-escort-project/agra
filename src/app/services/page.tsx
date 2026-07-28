import type { Metadata } from 'next';
import Link from 'next/link';
import PremiumServices from '@/components/PremiumServices';

export const metadata: Metadata = {
  title: 'Premium Escort Services in Agra | VIP Companionship',
  description: 'Explore our range of premium escort services in Agra. From discreet outcalls to luxury incalls and romantic dinner dates, our independent models offer unforgettable experiences.',
  keywords: ['Agra escort services', 'Incall escorts Agra', 'Outcall call girls Agra', 'VIP companionship Agra', 'Agra independent models'],
  alternates: {
    canonical: 'https://agracallgirly.com/services',
  },
};

export default function ServicesPage() {
  return (
    <>
      <main>
        <section className="hero">
          <div className="container">
            <h1 className="hero-title">Exclusive Agra Escort Services</h1>
            <p className="hero-subtitle">
              Explore our range of premium escort services in Agra. From discreet hotel outcalls to luxurious overnight stays, we cater to all your elite desires.
            </p>
          </div>
        </section>

        <section style={{ padding: '4rem 0' }}>
          <div className="container" style={{ margin: '0 auto' }}>
            <h2 className="section-title">Premium Call Girl Services in Agra</h2>
            <div style={{ display: 'grid', gap: '3rem' }}>
              
              {/* Outcall Service */}
              <article style={{ background: '#fff', padding: '3rem', borderRadius: '20px', boxShadow: '0 10px 40px rgba(0,0,0,0.04)', border: '1px solid var(--border-color)', transition: 'all 0.3s ease' }}>
                <h3 style={{ color: 'var(--accent-primary)', fontSize: '1.8rem', marginBottom: '1rem' }}>Outcall Agra Call Girls</h3>
                <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', lineHeight: 1.7 }}>
                  Our most requested service. Enjoy the ultimate privacy and comfort by having one of our gorgeous models visit you directly. Whether you are staying at a luxury hotel near the Taj Mahal or relaxing at your private residence, our outcall escorts in Agra arrive quickly, discreetly, and ready to entertain.
                </p>
                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem', marginBottom: '2rem' }}>
                  <li>✓ Delivery to all major hotels and resorts in Agra</li>
                  <li>✓ Unmarked arrival for 100% discretion</li>
                  <li>✓ Fast arrival times (typically 30-45 mins)</li>
                </ul>
                <Link href="/locations" className="btn btn-secondary">View Service Areas</Link>
              </article>

              {/* Incall Service */}
              <article style={{ background: '#fff', padding: '3rem', borderRadius: '20px', boxShadow: '0 10px 40px rgba(0,0,0,0.04)', border: '1px solid var(--border-color)', transition: 'all 0.3s ease' }}>
                <h3 style={{ color: 'var(--accent-primary)', fontSize: '1.8rem', marginBottom: '1rem' }}>Incall Escorts in Agra</h3>
                <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', lineHeight: 1.7 }}>
                  If you prefer to escape your current environment, we offer highly secure, premium incall locations in central Agra. These safe spaces are designed for your comfort and absolute privacy, allowing you to fully relax and enjoy the company of our elite incall call girls without any interruptions.
                </p>
                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem', marginBottom: '2rem' }}>
                  <li>✓ Safe and secure premium apartments</li>
                  <li>✓ Completely private environments</li>
                  <li>✓ Clean, comfortable, and luxurious settings</li>
                </ul>
                <Link href="/rates" className="btn btn-secondary">View Rates</Link>
              </article>

              {/* Dinner Dates */}
              <article style={{ background: '#fff', padding: '3rem', borderRadius: '20px', boxShadow: '0 10px 40px rgba(0,0,0,0.04)', border: '1px solid var(--border-color)', transition: 'all 0.3s ease' }}>
                <h3 style={{ color: 'var(--accent-primary)', fontSize: '1.8rem', marginBottom: '1rem' }}>Dinner Dates & VIP Companionship</h3>
                <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', lineHeight: 1.7 }}>
                  Need a stunning companion for a corporate event, a private party, or a romantic dinner date? Our VIP Agra escorts are highly educated, articulate, and know how to carry themselves in high-society settings. Impress your colleagues or simply enjoy a beautiful conversation before heading back for private time.
                </p>
              </article>

              {/* Weekend Travel */}
              <article style={{ background: '#fff', padding: '3rem', borderRadius: '20px', boxShadow: '0 10px 40px rgba(0,0,0,0.04)', border: '1px solid var(--border-color)', transition: 'all 0.3s ease' }}>
                <h3 style={{ color: 'var(--accent-primary)', fontSize: '1.8rem', marginBottom: '1rem' }}>Overnight VIP Escorts in Agra</h3>
                <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', lineHeight: 1.7 }}>
                  For clients seeking deeper connections, we offer full-night and weekend travel bookings. Take one of our independent escorts in Agra on a weekend getaway or enjoy a long, uninterrupted night of passion. Our extended services offer the best value and the most intimate experiences.
                </p>
                <Link href="/#contact" className="btn btn-primary">Book an Extended Session</Link>
              </article>

            </div>

          </div>
        </section>
        
        {/* Premium Services Grid */}
        <PremiumServices />
      </main>
    </>
  );
}
