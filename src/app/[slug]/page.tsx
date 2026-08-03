import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import FaqSection from '@/components/FaqSection';
import CategoriesSection from '@/components/CategoriesSection';
import PremiumServices from '@/components/PremiumServices';
import Script from 'next/script';
import { locations } from '@/data/locations';
import { models } from '@/data/models';
import { siteConfig } from '@/config/site';

type Props = {
  params: Promise<{ slug: string }>;
};

// Generate static parameters for ALL locations in our rich data set
export function generateStaticParams() {
  return locations.map((loc) => ({
    slug: loc.slug,
  }));
}

// Dynamically generate SEO metadata based on the specific location's data
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  
  const locationData = locations.find(loc => loc.slug === slug);
  if (!locationData) {
    return {};
  }

  return {
    title: `Best Call Girls in ${locationData.name}, Agra | VIP Escorts`,
    description: locationData.uniqueDescription.substring(0, 160), // SEO optimized length
    keywords: [
      `best call girls ${locationData.name}`,
      `Agra call girls ${locationData.name}`,
      `escorts in ${locationData.name} Agra`,
      `VIP call girls ${locationData.name}`,
      locationData.targetDemographic
    ],
    alternates: {
      canonical: `https://agracallgirly.com/${slug}`,
    },
  };
}

export default async function LocationPage({ params }: Props) {
  const { slug } = await params;

  const locationData = locations.find(loc => loc.slug === slug);
  if (!locationData) {
    notFound();
  }

  // Generate specific FAQ Schema for this location
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": locationData.localFaq.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer.replace(/<[^>]*>?/gm, '') // Strip HTML tags for schema
      }
    }))
  };

  // Generate LocalBusiness Schema
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "AdultEntertainment",
    "name": `Agra Call Girls - ${locationData.name}`,
    "image": "https://agracallgirly.com/og-image.jpg",
    "url": `https://agracallgirly.com/${slug}`,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": locationData.name,
      "addressRegion": "Agra, UP",
      "addressCountry": "IN"
    },
    "description": locationData.uniqueDescription
  };

  return (
    <>
      <Script
        id={`faq-schema-${locationData.id}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id={`local-schema-${locationData.id}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      <main>
        {/* Premium Dark Hero */}
        <section className="hero" style={{ position: 'relative', padding: '6rem 0', background: 'linear-gradient(135deg, #0f0c1b 0%, #2a0815 100%)', overflow: 'hidden' }}>
          {/* Subtle background glow */}
          <div style={{ position: 'absolute', top: '-20%', right: '-10%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(233,30,99,0.15) 0%, rgba(0,0,0,0) 70%)', borderRadius: '50%', zIndex: 1 }}></div>
          
          <div className="container" style={{ position: 'relative', zIndex: 2 }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'center' }}>
              
              {/* Left Side: Copy & CTA */}
              <div style={{ textAlign: 'left' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', padding: '0.4rem 1.2rem', background: 'rgba(233, 30, 99, 0.2)', color: '#ffb6c1', borderRadius: '50px', fontWeight: 600, fontSize: '0.85rem', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '2px', border: '1px solid rgba(233, 30, 99, 0.3)' }}>
                  <span style={{ width: '8px', height: '8px', background: '#10B981', borderRadius: '50%', display: 'inline-block', marginRight: '8px', boxShadow: '0 0 10px #10B981' }}></span>
                  Top Rated in {locationData.name}
                </div>
                
                <h1 className="hero-title" style={{ fontSize: '4rem', marginBottom: '1.5rem', letterSpacing: '-1px', color: '#fff', lineHeight: 1.1, textAlign: 'left' }}>
                  VIP Call Girls in <br/><span style={{ color: 'var(--accent-primary)', textShadow: '0 0 20px rgba(233,30,99,0.3)' }}>{locationData.name}</span>
                </h1>
                
                <p className="hero-subtitle" style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, marginBottom: '2.5rem', textAlign: 'left', maxWidth: '600px' }}>
                  {locationData.uniqueDescription.split('.')[0]}. Experience elite companionship directly at your hotel or residence with absolute zero advance payment.
                </p>
                
                {/* Trust Badges */}
                <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem', fontWeight: 600, marginBottom: '2.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>
                    Verified
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                    30-Min Arrival
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ffb6c1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>
                    No Advance
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'flex-start' }}>
                  <a href={`mailto:booking@${siteConfig.domain}`} className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '1rem 2.5rem', fontSize: '1.1rem', boxShadow: '0 10px 30px rgba(233,30,99,0.4)' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                    Book Now
                  </a>
                  <a href="#profiles" className="btn btn-secondary" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem', background: 'rgba(255,255,255,0.1)', color: '#fff', border: '1px solid rgba(255,255,255,0.2)', backdropFilter: 'blur(10px)' }}>
                    View Profiles
                  </a>
                </div>
              </div>

              {/* Right Side: Seductive Visual */}
              <div style={{ position: 'relative', height: '500px', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 30px 60px rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.1)' }}>
                <Image 
                  src={models[0].images[0]} 
                  alt={`Top VIP Escort in ${locationData.name}`}
                  fill
                  style={{ objectFit: 'cover', filter: 'contrast(1.1) brightness(0.9)' }}
                />
                <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', padding: '2rem', background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0) 100%)', color: '#fff' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                    <div>
                      <div style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--accent-primary)', fontWeight: 700, marginBottom: '0.5rem' }}>Featured Model</div>
                      <div style={{ fontSize: '1.5rem', fontWeight: 700 }}>{models[0].name}</div>
                    </div>
                    <div style={{ background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(10px)', padding: '0.5rem 1rem', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 600 }}>
                      Available Now
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Featured Local Models */}
        <section id="profiles" style={{ background: '#fafafa', padding: '5rem 0 3rem', borderTop: '1px solid var(--border-color)' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <span style={{ color: 'var(--accent-primary)', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.85rem', display: 'block', marginBottom: '1rem' }}>Available Now</span>
              <h2 className="section-title" style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--text-primary)', letterSpacing: '-0.5px' }}>Top VIP Escorts in {locationData.name}</h2>
              <p style={{ fontSize: '1.1rem', color: '#666', maxWidth: '900px', margin: '0 auto', lineHeight: 1.7 }}>Browse our elite selection of hot college girls, authentic housewives, Russian escorts, and premium paid companions ready for outcall delivery.</p>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '3rem', marginBottom: '4rem' }}>
              {models.slice(0, 3).map((model) => (
                <div key={model.id} style={{ background: '#fff', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.04)', transition: 'transform 0.3s ease', border: '1px solid var(--border-color)' }}>
                  <Link href={`/gallery/${model.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <div style={{ position: 'relative', width: '100%', height: '350px' }}>
                      <Image 
                        src={model.images[0]} 
                        alt={`${model.name} - Premium Call Girl in ${locationData.name}`}
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                      <div style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(4px)', color: '#fff', padding: '0.4rem 1rem', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 600, border: '1px solid rgba(255,255,255,0.2)' }}>
                        📸 {model.images.length} Photos
                      </div>
                    </div>
                    <div style={{ padding: '2rem' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                        <h3 style={{ fontSize: '1.5rem', margin: 0, color: 'var(--text-primary)' }}>{model.name}</h3>
                        <span style={{ background: 'rgba(233, 30, 99, 0.1)', color: 'var(--accent-primary)', padding: '0.4rem 1rem', borderRadius: '50px', fontSize: '0.9rem', fontWeight: 600 }}>{model.age} Yrs</span>
                      </div>
                      
                      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '1.5rem', paddingTop: '1rem', borderTop: '1px solid var(--border-color)' }}>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                          <span style={{ fontSize: '0.8rem', color: '#888', textTransform: 'uppercase', letterSpacing: '1px' }}>Figure</span>
                          <span style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-primary)' }}>{model.measurements}</span>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                          <span style={{ fontSize: '0.8rem', color: '#888', textTransform: 'uppercase', letterSpacing: '1px' }}>Height</span>
                          <span style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-primary)' }}>{model.height}</span>
                        </div>
                      </div>
                      
                      <div className="btn" style={{ width: '100%', textAlign: 'center', background: 'var(--surface-color)', color: 'var(--text-primary)', border: '1px solid var(--border-color)' }}>
                        View Profile
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>

            <div style={{ textAlign: 'center' }}>
              <Link href="/gallery" className="btn btn-secondary" style={{ padding: '1rem 3rem', fontSize: '1.1rem' }}>
                View All Available Models &rarr;
              </Link>
            </div>
          </div>
        </section>

        {/* Detailed SEO & Trust Content */}
        <section className="features" style={{ background: '#fff', padding: '2rem 0 5rem' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <span style={{ color: 'var(--accent-primary)', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.85rem', display: 'block', marginBottom: '1rem' }}>Why Choose Us</span>
              <h2 className="section-title" style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--text-primary)', letterSpacing: '-0.5px' }}>Elite Independent Call Girls in {locationData.name}</h2>
              <p style={{ fontSize: '1.1rem', color: '#666', maxWidth: '900px', margin: '0 auto', lineHeight: 1.7 }}>
                {locationData.uniqueDescription} Whether you are seeking a discreet paid companion, a sexy gym girl, or a high-profile VIP escort, our agency provides the most premium selection of strictly verified call girls in {locationData.name}.
              </p>
            </div>
            
            {/* Conversion Drivers Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
              <div style={{ background: 'var(--surface-color)', padding: '1.5rem', borderRadius: '20px', border: '1px solid var(--border-color)' }}>
                <div style={{ width: '50px', height: '50px', background: '#fce7f3', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', color: 'var(--accent-primary)' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                </div>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>Absolute Discretion</h3>
                <p style={{ color: '#666', lineHeight: 1.6 }}>Our outcall models arrive at your hotel or residence in {locationData.name} dressed casually, blending in perfectly to ensure your total privacy and security.</p>
              </div>

              <div style={{ background: 'var(--surface-color)', padding: '1.5rem', borderRadius: '20px', border: '1px solid var(--border-color)' }}>
                <div style={{ width: '50px', height: '50px', background: '#dcfce7', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', color: '#16a34a' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>
                </div>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>Cash on Arrival</h3>
                <p style={{ color: '#666', lineHeight: 1.6 }}>We never ask for UPI transfers or deposits. You only pay directly in cash to the model when she arrives at your location in {locationData.name}.</p>
              </div>

              <div style={{ background: 'var(--surface-color)', padding: '1.5rem', borderRadius: '20px', border: '1px solid var(--border-color)' }}>
                <div style={{ width: '50px', height: '50px', background: '#e0f2fe', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', color: '#0284c7' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                </div>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>100% Genuine Profiles</h3>
                <p style={{ color: '#666', lineHeight: 1.6 }}>What you see is exactly who arrives. Every VIP model on our roster is strictly verified to guarantee an authentic, premium experience.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Premium Services Grid */}
        <PremiumServices />

        {/* Localized FAQ Section */}
        <FaqSection 
          title={`Frequently Asked Questions: ${locationData.name}`} 
          subtitle={`Everything you need to know about booking an escort in ${locationData.name}.`}
          faqs={locationData.localFaq} 
        />
        {/* Premium Bottom CTA */}
        <section style={{ background: 'linear-gradient(135deg, #111 0%, #2a0815 100%)', padding: '6rem 0', textAlign: 'center', color: '#fff', borderTop: '4px solid var(--accent-primary)' }}>
          <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255,255,255,0.1)', padding: '0.5rem 1.5rem', borderRadius: '50px', marginBottom: '2rem', fontSize: '0.9rem', letterSpacing: '2px', textTransform: 'uppercase', color: '#ffb6c1' }}>
              <span style={{ width: '8px', height: '8px', background: '#10B981', borderRadius: '50%', display: 'inline-block', boxShadow: '0 0 10px #10B981' }}></span>
              Models Available Now
            </div>
            <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem', fontWeight: 700, letterSpacing: '-1px' }}>
              Your VIP Experience in {locationData.name} Awaits
            </h2>
            <p style={{ fontSize: '1.25rem', opacity: 0.8, marginBottom: '3rem', lineHeight: 1.6 }}>
              Looking for something specific? <strong>Contact us today—we often have exclusive, unlisted new arrivals in {locationData.name} that we only share privately!</strong> Drop us a message and let us surprise you.
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href={`mailto:booking@${siteConfig.domain}`} className="btn" style={{ background: 'var(--accent-primary)', color: '#fff', padding: '1.2rem 3rem', fontSize: '1.1rem', borderRadius: '50px', fontWeight: 600, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', boxShadow: '0 10px 30px rgba(233, 30, 99, 0.3)', transition: 'transform 0.3s ease' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                Book Now
              </a>
              <a href="/gallery" className="btn" style={{ background: 'rgba(255,255,255,0.1)', color: '#fff', padding: '1.2rem 3rem', fontSize: '1.1rem', borderRadius: '50px', fontWeight: 600, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.2)' }}>
                View Gallery
              </a>
            </div>
          </div>
        </section>

        {/* Localized SEO Keyword Cloud */}
        <section style={{ background: 'var(--surface-color)', padding: '4rem 0', borderTop: '1px solid var(--border-color)' }}>
          <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
              Popular Searches in {locationData.name}
            </h3>
            <div style={{ 
              display: 'grid', 
              gridTemplateRows: 'repeat(4, auto)', 
              gridAutoFlow: 'column',
              gap: '0.8rem', 
              overflowX: 'auto',
              padding: '0.5rem 1rem',
              scrollbarWidth: 'none', // Hide scrollbar for cleaner look
              WebkitOverflowScrolling: 'touch'
            }}>
              {[
                "Paid girl", "Hot girl", "Hot college girl", "Hot housewife", 
                "Gym girl", "Sexy girl", "Paid companion", "VIP escort", 
                "Independent call girl", "Premium model", "Russian escort", "Russian call girl"
              ].map((keyword, i) => (
                <Link href="/gallery" key={i} style={{ 
                  padding: '0.6rem 1.2rem', 
                  background: '#fff', 
                  border: '1px solid var(--border-color)', 
                  borderRadius: '50px', 
                  fontSize: '0.9rem', 
                  color: '#666',
                  boxShadow: 'var(--shadow-sm)',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  whiteSpace: 'nowrap',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {keyword} in {locationData.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
