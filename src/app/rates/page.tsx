import type { Metadata } from 'next';
import Link from 'next/link';
import FaqSection from '@/components/FaqSection';

export const metadata: Metadata = {
  title: 'Agra Call Girls Rates | Starting from ₹2,500',
  description: 'View the transparent pricing for the best Agra call girls and VIP escorts. Rates starting from ₹2,500. No advance payment required. 100% genuine and safe.',
  keywords: ['Agra call girl price', 'Agra escort rates', 'cheap escorts Agra', 'VIP escort price Agra', 'Agra call girl contact number with price'],
  alternates: {
    canonical: 'https://agracallgirly.com/rates',
  },
};

export default function RatesPage() {
  return (
    <>
      <main>
        <section className="hero">
          <div className="container">
            <h1 className="hero-title">Transparent Escort Rates in Agra</h1>
            <p className="hero-subtitle">
              Premium companionship starting from just ₹2,500. We believe in absolute transparency with zero hidden fees.
            </p>
          </div>
        </section>

        <section style={{ padding: '3rem 0', background: 'var(--surface-color)' }}>
          <div className="container" style={{ margin: '0 auto' }}>
            
            <div style={{ 
              background: 'linear-gradient(135deg, var(--accent-primary) 0%, #ff80ab 100%)',
              color: 'white',
              padding: '2rem',
              borderRadius: '12px',
              textAlign: 'center',
              marginBottom: '2rem',
              boxShadow: 'var(--shadow-md)'
            }}>
              <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'white' }}>NO ADVANCE PAYMENT REQUIRED</h2>
              <p style={{ fontSize: '1.2rem', margin: 0, color: 'white' }}>
                We operate on 100% trust. You only pay cash directly to the model when she arrives at your location.
              </p>
            </div>

            <h2 className="section-title">Agra Call Girl Rates & Packages</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
              
              {/* Standard Tier */}
              <div style={{ background: 'var(--bg-color)', padding: '2rem', borderRadius: '12px', border: '1px solid var(--border-color)', textAlign: 'center' }}>
                <h3 style={{ fontSize: '1.5rem', color: 'var(--accent-primary)', marginBottom: '1rem' }}>Standard Companions</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>Perfect for quick, passionate encounters.</p>
                <div style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '2rem' }}>₹2,500 <span style={{ fontSize: '1rem', color: 'var(--text-secondary)', fontWeight: 400 }}>/ hour</span></div>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', textAlign: 'left' }}>
                  <li style={{ padding: '0.5rem 0', borderBottom: '1px solid var(--border-color)' }}>✓ 1 Hour: ₹2,500</li>
                  <li style={{ padding: '0.5rem 0', borderBottom: '1px solid var(--border-color)' }}>✓ 2 Hours: ₹4,500</li>
                  <li style={{ padding: '0.5rem 0' }}>✓ Full Night: ₹8,000</li>
                </ul>
                <Link href="/#contact" className="btn btn-secondary" style={{ width: '100%' }}>Book Now</Link>
              </div>

              {/* VIP Tier */}
              <div style={{ background: 'var(--bg-color)', padding: '2rem', borderRadius: '12px', border: '2px solid var(--accent-primary)', textAlign: 'center', transform: 'scale(1.05)', position: 'relative' }}>
                <div style={{ position: 'absolute', top: '-15px', left: '50%', transform: 'translateX(-50%)', background: 'var(--accent-primary)', color: 'white', padding: '0.2rem 1rem', borderRadius: '20px', fontSize: '0.9rem', fontWeight: 600 }}>MOST POPULAR</div>
                <h3 style={{ fontSize: '1.5rem', color: 'var(--accent-primary)', marginBottom: '1rem' }}>VIP Models</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>Stunning, highly-rated escorts.</p>
                <div style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '2rem' }}>₹5,000 <span style={{ fontSize: '1rem', color: 'var(--text-secondary)', fontWeight: 400 }}>/ hour</span></div>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', textAlign: 'left' }}>
                  <li style={{ padding: '0.5rem 0', borderBottom: '1px solid var(--border-color)' }}>✓ 1 Hour: ₹5,000</li>
                  <li style={{ padding: '0.5rem 0', borderBottom: '1px solid var(--border-color)' }}>✓ 2 Hours: ₹9,000</li>
                  <li style={{ padding: '0.5rem 0' }}>✓ Full Night: ₹15,000</li>
                </ul>
                <Link href="/#contact" className="btn btn-primary" style={{ width: '100%' }}>Book VIP</Link>
              </div>

              {/* Premium Tier */}
              <div style={{ background: 'var(--bg-color)', padding: '2rem', borderRadius: '12px', border: '1px solid var(--border-color)', textAlign: 'center' }}>
                <h3 style={{ fontSize: '1.5rem', color: 'var(--accent-primary)', marginBottom: '1rem' }}>Premium & Russian</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>The absolute pinnacle of luxury.</p>
                <div style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '2rem' }}>₹10,000 <span style={{ fontSize: '1rem', color: 'var(--text-secondary)', fontWeight: 400 }}>/ hour</span></div>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', textAlign: 'left' }}>
                  <li style={{ padding: '0.5rem 0', borderBottom: '1px solid var(--border-color)' }}>✓ 1 Hour: ₹10,000</li>
                  <li style={{ padding: '0.5rem 0', borderBottom: '1px solid var(--border-color)' }}>✓ 2 Hours: ₹18,000</li>
                  <li style={{ padding: '0.5rem 0' }}>✓ Full Night: ₹25,000</li>
                </ul>
                <Link href="/#contact" className="btn btn-secondary" style={{ width: '100%' }}>Book Premium</Link>
              </div>

            </div>

          </div>
        </section>

        <FaqSection 
          title="Agra Escort Rates FAQs"
          subtitle="Find answers to all your doubts about Agra call girl rates, payments, and hidden charges."
          faqs={[
            {
              question: "What is the average Agra call girl price for a full night?",
              answer: "Our full night <strong>Agra escort rates</strong> start at ₹8,000 for standard companions, ₹15,000 for VIP models, and ₹25,000 for our elite Russian escorts. A full night booking offers the best value for an unforgettable extended experience."
            },
            {
              question: "Are there any hidden travel charges for outcall services?",
              answer: "For outcalls within central Agra and major areas like <a href='/best-callgirls-tajganj-agra'>Tajganj</a> or <a href='/best-callgirls-sanjay-place-agra'>Sanjay Place</a>, travel is completely free. A small cab fare may be added only for extremely remote suburbs."
            },
            {
              question: "Do you offer cheap escorts in Agra?",
              answer: "While we position ourselves as a premium agency, we believe luxury should be accessible. Our standard companionship tier starts at a highly affordable ₹2,500 per hour, making us a top choice for clients seeking high quality at the best <strong>Agra call girl price</strong>."
            },
            {
              question: "Is cash on delivery available for VIP escorts?",
              answer: "Yes! We operate exclusively on a <strong>cash-on-arrival</strong> basis for all our tiers, including our most exclusive VIP models. You only hand over the payment once the companion is safely inside your room."
            },
            {
              question: "What is the exact price difference between standard and Russian escorts?",
              answer: "Our standard, beautiful Indian companions start at ₹2,500 per hour. Our highly sought-after, premium Russian and international escorts start at ₹10,000 per hour, reflecting their absolute exclusivity and elite status in Agra."
            },
            {
              question: "Can I negotiate the Agra escort rates?",
              answer: "Our rates are highly competitive and fixed. We do not negotiate on prices to ensure fair, respectful compensation for our premium models and to maintain our exceptionally high service standards."
            },
            {
              question: "How do I confirm my booking without an advance payment?",
              answer: "Simply contact our dispatch team via our <strong>Agra call girl contact number</strong> on WhatsApp. Once you share your live location and room number, we will dispatch the model immediately. No deposit needed!"
            }
          ]}
        />
      </main>
    </>
  );
}
