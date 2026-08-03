import Head from 'next/head';
import Image from "next/image";
import Link from 'next/link';
import Script from 'next/script';
import FaqSection from '@/components/FaqSection';
import PremiumServices from '@/components/PremiumServices';
import CategoriesSection from '@/components/CategoriesSection';
import ComparisonAccordion from '@/components/ComparisonAccordion';
import PopularSearches from "@/components/PopularSearches";
import { getFeaturedModels } from "@/data/models";
import { siteConfig } from "@/config/site";

export default function Home() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do I book an Agra call girl?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Booking an Agra call girl is simple. Just contact us via phone or email provided on our contact page, specify your preferences and location in Agra, and we will arrange the perfect companion for you."
        }
      },
      {
        "@type": "Question",
        "name": "Are your escort services in Agra discreet?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, 100% discretion is our top priority. Our independent escorts in Agra are professional and ensure that your privacy is protected at all times."
        }
      },
      {
        "@type": "Question",
        "name": "Which areas in Agra do you serve?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We serve all major areas in Agra including Tajganj, Sadar Bazar, Sikandra, Fatehabad Road, and Dayal Bagh. We also offer incall and outcall services to premium hotels."
        }
      }
    ]
  };

  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <main>
        {/* Hero Section */}
        <section className="hero">
          <div className="container">
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255,255,255,0.1)', padding: '0.5rem 1rem', borderRadius: '50px', marginBottom: '1.5rem', border: '1px solid rgba(255,255,255,0.2)', fontSize: '0.9rem', fontWeight: 600, color: 'var(--accent-primary)' }}>
              ⭐ Trusted by 1000+ Elite Clients
            </div>
            <h1 className="hero-title">High Profile Call Girls in Agra</h1>
            <p className="hero-subtitle">
              Experience the ultimate companionship with the best VIP escorts and premium independent models in Agra. Available 24/7 for luxury services and unforgettable moments.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn btn-primary">
                Book Now
              </Link>
              <Link href="/gallery" className="btn btn-secondary">
                View Gallery
              </Link>
            </div>
          </div>
        </section>

        {/* High-Converting Trust Banner */}
        <section className="trust-banner" style={{ background: 'var(--surface-color)', padding: '3rem 0', borderBottom: '1px solid var(--border-color)' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))', gap: '2rem', textAlign: 'center' }}>
              <div className="trust-item">
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>✅</div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--accent-primary)' }}>100% Verified Profiles</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>What you see is exactly who arrives at your door. No fake photos.</p>
              </div>
              <div className="trust-item">
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>💵</div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--accent-primary)' }}>Zero Advance Payment</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>We operate strictly on a Cash-on-Arrival basis. Never get scammed again.</p>
              </div>
              <div className="trust-item">
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🕵️</div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--accent-primary)' }}>100% Confidential</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Complete privacy guaranteed. Our models arrive discreetly and unmarked.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Escorts Gallery */}
        <section id="featured-escorts" style={{ padding: '6rem 0', background: 'var(--bg-color)' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <span style={{ color: 'var(--accent-primary)', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.9rem', display: 'block', marginBottom: '1rem' }}>Premium Selection</span>
              <h2 style={{ fontSize: '2.8rem', color: 'var(--text-primary)', marginBottom: '1.5rem', lineHeight: 1.2 }}>
                Meet Our Elite Escorts
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
                Browse a selection of our most requested companions. All profiles are 100% verified and available for immediate booking.
              </p>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))', gap: '2rem', marginBottom: '4rem' }}>
              {getFeaturedModels().map((model) => (
                <div key={model.id} style={{ background: 'var(--surface-color)', borderRadius: '16px', overflow: 'hidden', boxShadow: 'var(--shadow-sm)', transition: 'transform 0.3s ease', cursor: 'pointer' }}>
                  <Link href={`/gallery/${model.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <div style={{ position: 'relative', width: '100%', height: '350px' }}>
                      <Image 
                        src={model.images[0]} 
                        alt={`${model.name} - Agra Escort`}
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div style={{ padding: '1.5rem' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                        <h3 style={{ fontSize: '1.4rem', margin: 0 }}>{model.name}</h3>
                        <span style={{ background: 'rgba(233, 30, 99, 0.1)', color: 'var(--accent-primary)', padding: '0.3rem 0.8rem', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 600 }}>{model.age} Yrs</span>
                      </div>
                      <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1rem' }}>
                        {model.shortBio}
                      </p>
                      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                        <span style={{ fontSize: '0.8rem', padding: '0.2rem 0.6rem', border: '1px solid var(--border-color)', borderRadius: '4px', color: 'var(--text-secondary)' }}>📍 {model.location}</span>
                        <span style={{ fontSize: '0.8rem', padding: '0.2rem 0.6rem', border: '1px solid var(--border-color)', borderRadius: '4px', color: 'var(--text-secondary)' }}>📏 {model.height}</span>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>

            <div style={{ textAlign: 'center' }}>
              <Link href="/gallery" className="btn btn-secondary" style={{ fontSize: '1.1rem', padding: '1rem 3rem' }}>
                View Full Gallery
              </Link>
            </div>
          </div>
        </section>

        {/* Escort Categories */}
        <CategoriesSection />

        {/* How It Works Section */}
        <section id="how-it-works" style={{ padding: '5rem 0' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <h2 className="section-title" style={{ marginBottom: '1rem' }}>How To Book Elite Female Companions in Agra</h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto' }}>
                Our booking process is designed to be 100% transparent, safe, and completely discreet. Follow these simple steps to meet Agra's finest high-profile models.
              </p>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '2rem' }}>
              
              <article style={{ background: 'var(--surface-color)', padding: '2.5rem 2rem', borderRadius: '16px', border: '1px solid var(--border-color)', position: 'relative', textAlign: 'center' }}>
                <div style={{ position: 'absolute', top: '-20px', left: '50%', transform: 'translateX(-50%)', background: 'var(--accent-primary)', color: 'white', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '1.2rem' }}>1</div>
                <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', marginTop: '1rem' }}>Choose Your Companion</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  Browse our gallery of 100% verified, genuine profiles. Choose the elite model that perfectly matches your preferences.
                </p>
              </article>

              <article style={{ background: 'var(--surface-color)', padding: '2.5rem 2rem', borderRadius: '16px', border: '1px solid var(--border-color)', position: 'relative', textAlign: 'center' }}>
                <div style={{ position: 'absolute', top: '-20px', left: '50%', transform: 'translateX(-50%)', background: 'var(--accent-primary)', color: 'white', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '1.2rem' }}>2</div>
                <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', marginTop: '1rem' }}>Contact on WhatsApp</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  Send us a message with your selected model, location in Agra, and timing. Our agents will confirm availability instantly.
                </p>
              </article>

              <article style={{ background: 'var(--surface-color)', padding: '2.5rem 2rem', borderRadius: '16px', border: '1px solid var(--border-color)', position: 'relative', textAlign: 'center' }}>
                <div style={{ position: 'absolute', top: '-20px', left: '50%', transform: 'translateX(-50%)', background: 'var(--accent-primary)', color: 'white', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '1.2rem' }}>3</div>
                <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', marginTop: '1rem' }}>Pay Cash on Arrival</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  The model arrives discreetly at your hotel or residence. You only hand over the payment once she is safely inside.
                </p>
              </article>

            </div>
          </div>
        </section>

        {/* Premium Services Grid */}
        <PremiumServices />

        {/* Locations Overview - Premium Redesign */}
        <section id="locations" style={{ padding: '8rem 0', background: 'var(--surface-color)', borderTop: '1px solid var(--border-color)' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
              <span style={{ color: 'var(--accent-primary)', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.85rem', display: 'block', marginBottom: '1rem' }}>Available Across The City</span>
              <h2 style={{ fontSize: '3rem', color: 'var(--text-primary)', margin: 0, letterSpacing: '-1px' }}>Top Locations for Agra Call Girls</h2>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: '1.5rem', marginBottom: '4rem' }}>
              {[
                { name: 'Tajganj', slug: 'tajganj' },
                { name: 'Fatehabad Road', slug: 'fatehabad-road' },
                { name: 'Sanjay Place', slug: 'sanjay-place' },
                { name: 'Sikandra', slug: 'sikandra' },
                { name: 'Kamla Nagar', slug: 'kamla-nagar' },
                { name: 'Dayal Bagh', slug: 'dayal-bagh' },
                { name: 'Vijay Nagar', slug: 'vijay-nagar' },
                { name: 'Khandari', slug: 'khandari' }
              ].map((loc, index) => (
                <Link key={loc.slug} href={`/best-callgirls-${loc.slug}-agra`} style={{ textDecoration: 'none', background: '#fff', padding: '2.5rem 2rem', borderRadius: '24px', border: '1px solid var(--border-color)', boxShadow: '0 10px 30px rgba(0,0,0,0.03)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', transition: 'all 0.3s ease' }} className={`nav-card ${index >= 3 ? 'hidden-mobile' : ''}`}>
                  <span style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--text-primary)' }}>{loc.name}</span>
                  <span style={{ color: 'var(--accent-primary)', fontSize: '1.5rem' }}>&rarr;</span>
                </Link>
              ))}
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Link href="/locations" className="btn btn-primary" style={{ padding: '1.2rem 3rem', fontSize: '1.1rem', borderRadius: '50px', boxShadow: '0 10px 30px rgba(233, 30, 99, 0.3)' }}>
                View All 25+ Locations
              </Link>
            </div>
          </div>
        </section>
        
        {/* Comprehensive SEO Content Section - Editorial Redesign */}
        <section id="seo-content" style={{ padding: '8rem 0', background: '#fff' }}>
          <div className="container">
            
            <div style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto 6rem auto' }}>
              <span style={{ color: 'var(--accent-primary)', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', fontSize: '0.85rem', display: 'block', marginBottom: '1.5rem' }}>Premium Companionship</span>
              <h2 className="section-title" style={{ marginBottom: '1.5rem' }}>
                The #1 Best Callgirls Provider in Agra
              </h2>
              <div style={{ height: '4px', width: '60px', background: 'var(--accent-primary)', margin: '0 auto' }}></div>
            </div>

            <div className="seo-intro-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '4rem', marginBottom: '8rem' }}>
              <div style={{ position: 'relative' }}>
                <p style={{ fontSize: '1.25rem', lineHeight: 1.9, color: '#444', fontWeight: 500, margin: 0 }}>
                  <span style={{ float: 'left', fontSize: '4.5rem', lineHeight: 0.8, paddingTop: '0.5rem', paddingRight: '0.8rem', color: 'var(--accent-primary)', fontWeight: 800 }}>W</span>hen it comes to finding premium companionship, our agency stands undisputed as the most reliable and highly-rated provider of the <strong>best call girls in Agra</strong>. We understand that discerning gentlemen require more than just a beautiful face; they demand sophistication, absolute discretion, and a memorable connection.
                </p>
              </div>
              <div className="seo-intro-text" style={{ borderLeft: '1px solid var(--border-color)', paddingLeft: '4rem', display: 'flex', alignItems: 'center' }}>
                <p style={{ fontSize: '1.15rem', lineHeight: 1.8, color: '#666', margin: 0 }}>
                  Whether you are traveling for a corporate event, unwinding at a luxury resort, or simply seeking an intimate evening, our top elite escorts in Agra are tailored to exceed your highest expectations. Your satisfaction and privacy are our highest priorities. We curate our selection rigorously to ensure unmatched quality.
                </p>
              </div>
            </div>

            <div style={{ marginBottom: '8rem', textAlign: 'center' }}>
              <h3 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--text-primary)', letterSpacing: '-1px' }}>
                Why Choose Our Independent Call Girls?
              </h3>
              <p style={{ fontSize: '1.15rem', lineHeight: 1.8, marginBottom: '4rem', color: '#666', maxWidth: '700px', margin: '0 auto 4rem auto' }}>
                Unlike unverified portals, we exclusively represent a curated selection of high-profile, <strong>independent call girls in Agra</strong>. What you see in our gallery is exactly who will arrive at your door.
              </p>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: '2.5rem', textAlign: 'left' }}>
                {[
                  { icon: '💎', title: 'Zero Advance Payment', text: 'We operate strictly on a cash-on-arrival model. No deposits, no scams, just pure trust.' },
                  { icon: '📸', title: '100% Genuine Photos', text: 'Our VIP escorts in Agra are verified in person. We guarantee absolutely no bait-and-switch.' },
                  { icon: '🤫', title: 'Unmatched Discretion', text: 'From booking to departure, your privacy is protected. Models arrive in casual attire.' },
                  { icon: '🕒', title: '24/7 Availability', text: 'Desire knows no time limits. Our dispatch team is ready to assist you day and night.' }
                ].map((feature, i) => (
                  <div key={i} className="nav-card" style={{ background: '#fff', padding: '3rem 2rem', borderRadius: '24px', border: '1px solid var(--border-color)', boxShadow: '0 10px 40px rgba(0,0,0,0.03)', transition: 'all 0.3s ease' }}>
                    <div style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>{feature.icon}</div>
                    <h4 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>{feature.title}</h4>
                    <p style={{ fontSize: '1rem', color: '#666', lineHeight: 1.7, margin: 0 }}>{feature.text}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Comparison Table */}
            <div style={{ marginBottom: '8rem', width: '100%' }}>
              <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <span style={{ color: 'var(--accent-primary)', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.85rem', display: 'block', marginBottom: '1rem' }}>The Truth About The Industry</span>
                <h3 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--text-primary)', letterSpacing: '-1px' }}>
                  {siteConfig.name} vs. The Rest
                </h3>
                <p style={{ color: '#666', fontSize: '1.1rem' }}>See why 95% of VIP clients refuse to book anywhere else.</p>
              </div>

              <div className="desktop-comparison" style={{ background: '#fff', borderRadius: '16px', border: '1px solid var(--border-color)', boxShadow: '0 10px 30px rgba(0,0,0,0.02)', overflow: 'hidden' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1.5fr 1.5fr', background: '#fafafa', borderBottom: '1px solid var(--border-color)', fontWeight: 700, alignItems: 'center' }}>
                  <div style={{ padding: '1.5rem', color: 'var(--text-primary)', borderRight: '1px solid var(--border-color)' }}>Feature</div>
                  <div style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#047857', borderRight: '1px solid var(--border-color)', background: '#f0fdf4' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>
                    {siteConfig.name}
                  </div>
                  <div style={{ padding: '1.5rem', color: '#b91c1c', background: '#fef2f2' }}>Others</div>
                </div>
                {[
                  { feature: "Profile Verification", us: "100% verified independent profiles. We guarantee that the elite model in the photos is the exact same person who will arrive at your door.", them: "Fake, downloaded images used as bait. A completely different person shows up, ruining your experience." },
                  { feature: "Booking & Payment", us: "Zero advance payment required. You only pay cash on arrival once the model is safely inside your room. Total peace of mind.", them: "Scammers demand upfront UPI deposits for \"registration\" or \"cab fare\" and block your number immediately after payment." },
                  { feature: "Privacy & Discretion", us: "Strict client confidentiality. Our models arrive in casual, elegant attire, blending in perfectly at 5-star hotels or residences.", them: "Unprofessional behavior and loud attire that draws unwanted attention from hotel staff and neighbors." },
                  { feature: "Availability & Support", us: "24/7 dedicated dispatch team. Instant WhatsApp replies and immediate booking confirmations at any hour of the day or night.", them: "Ignored messages, unreliable timings, and models who cancel at the last minute or show up hours late." }
                ].map((row, i) => (
                  <div key={i} style={{ display: 'grid', gridTemplateColumns: '1.2fr 1.5fr 1.5fr', borderBottom: i === 3 ? 'none' : '1px solid var(--border-color)', alignItems: 'stretch' }}>
                    <div style={{ padding: '1.5rem', fontWeight: 700, color: 'var(--text-primary)', borderRight: '1px solid var(--border-color)', display: 'flex', alignItems: 'center' }}>
                      {row.feature}
                    </div>
                    <div style={{ padding: '1.5rem', color: '#166534', display: 'flex', alignItems: 'flex-start', gap: '0.8rem', borderRight: '1px solid var(--border-color)' }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}><polyline points="20 6 9 17 4 12"></polyline></svg>
                      <span style={{ fontSize: '0.95rem', lineHeight: 1.6 }}>{row.us}</span>
                    </div>
                    <div style={{ padding: '1.5rem', color: '#991b1b', display: 'flex', alignItems: 'flex-start', gap: '0.8rem' }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                      <span style={{ fontSize: '0.95rem', lineHeight: 1.6 }}>{row.them}</span>
                    </div>
                  </div>
                ))}
              </div>

              <ComparisonAccordion />
            </div>
            
            {/* Split Image / Text blocks for VIP and Hotels */}
            <div className="seo-blocks-wrapper" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem' }}>
              
              <div className="seo-feature-box" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '4rem', alignItems: 'center', background: 'var(--surface-color)', padding: '4rem', borderRadius: '32px' }}>
                <div>
                  <div style={{ display: 'inline-block', padding: '0.3rem 1rem', background: 'rgba(233, 30, 99, 0.1)', color: 'var(--accent-primary)', borderRadius: '50px', fontWeight: 600, fontSize: '0.9rem', marginBottom: '1rem' }}>
                    Luxury & Exclusivity
                  </div>
                  <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1.5rem', fontSize: '2.5rem' }}>Best VIP Escorts & Premium Independent Models</h2>
                  <p style={{ fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '1.5rem', color: '#555' }}>
                    For clients who demand the absolute pinnacle of luxury, we offer an exclusive tier of <strong>Best VIP escorts in Agra</strong>, including stunning Russian and international models. These high-end female companions are not only breathtakingly gorgeous but also highly educated and articulate, making them the perfect plus-one for high-society dinner dates, business trips, or long weekend getaways.
                  </p>
                  <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-primary)', fontWeight: 700, fontSize: '1.1rem', textDecoration: 'none' }}>
                    Explore VIP Services &rarr;
                  </Link>
                </div>
                <div className="seo-image-box" style={{ position: 'relative', height: '400px', borderRadius: '24px', overflow: 'hidden', border: '1px solid var(--border-color)', boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
                  <img src="/gallary/divya/best-escort-in-agra-divya-1.jpg" alt="VIP Escort in Agra" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              </div>

              <div className="seo-feature-box" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '4rem', alignItems: 'center', background: 'var(--surface-color)', padding: '4rem', borderRadius: '32px' }}>
                <div className="hidden-mobile seo-image-box" style={{ position: 'relative', height: '400px', borderRadius: '24px', overflow: 'hidden', border: '1px solid var(--border-color)', boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
                  <img src="/gallary/kiara/nude-girl-pic-agra-kiara-1.jpg" alt="Hotel Outcall Agra" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div>
                  <span style={{ color: 'var(--accent-primary)', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.85rem', display: 'block', marginBottom: '1rem' }}>Anywhere in the city</span>
                  <h3 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--text-primary)', letterSpacing: '-1px' }}>
                    Fast & Discreet Hotel Outcalls
                  </h3>
                  <p style={{ fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '2.5rem', color: '#555' }}>
                    We specialize in fast, reliable outcalls to all major 3-star, 4-star, and 5-star hotels across the city. Whether you are staying near the iconic Taj Mahal, the bustling streets of Sanjay Place, or the quiet luxury of Fatehabad Road, our models typically reach your room within 30 to 45 minutes. Simply contact our dispatch team and wait for your stunning <strong>Agra escort</strong> to arrive.
                  </p>
                  <Link href="/locations" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-primary)', fontWeight: 700, fontSize: '1.1rem', textDecoration: 'none' }}>
                    View Service Areas &rarr;
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FaqSection 
          title="Agra Call Girls FAQs"
          subtitle="Get all the answers you need before booking your perfect Agra escort."
          faqs={[
            {
              question: "What is the starting price for Agra call girls?",
              answer: "Our highly competitive <strong>Agra call girl price</strong> starts from just ₹2,500 for a standard one-hour session. We also offer VIP and premium Russian models for clients seeking the ultimate luxury experience."
            },
            {
              question: "Do you provide independent call girls in Agra?",
              answer: "Yes, we exclusively collaborate with verified, high-profile <strong>independent call girls in Agra</strong>. This ensures you get a personalized, unhurried, and highly intimate experience."
            },
            {
              question: "Can I book your escort services in Agra to my hotel?",
              answer: "Absolutely. Our premium <strong>escort services in Agra</strong> include completely discreet outcalls to all major 3-star and 5-star hotels across the city, including areas near the Taj Mahal and Sanjay Place."
            },
            {
              question: "Do you require any advance payment before arrival?",
              answer: "No! Unlike scam agencies, we operate strictly on a <strong>cash-on-arrival</strong> policy. You only pay directly to the companion when she arrives safely at your location. No advance deposits are ever required."
            },
            {
              question: "Are the VIP escorts in Agra exactly as shown in photos?",
              answer: "100% yes. We pride ourselves on being the most trusted agency. Every single one of our <strong>VIP escorts in Agra</strong> is strictly verified to ensure that the girl in the photo is the exact girl who arrives at your door."
            },
            {
              question: "How fast can a companion reach my location?",
              answer: "Our logistics are incredibly fast. Depending on traffic, our models typically reach central locations like <a href='/best-callgirls-tajganj-agra'>Tajganj</a> or <a href='/best-callgirls-sanjay-place-agra'>Sanjay Place</a> within 30 to 45 minutes of confirming your booking."
            },
            {
              question: "Is my privacy guaranteed?",
              answer: "Your privacy is our utmost priority. Our booking process is 100% confidential. We do not store your data, and our models are trained to enter and exit your location with absolute discretion."
            }
          ]}
        />

        {/* Massive Conversion CTA Section */}
        <section className="conversion-cta" style={{ padding: '6rem 0', background: 'linear-gradient(135deg, var(--bg-color) 0%, #1a1a1a 100%)', borderTop: '2px solid var(--accent-primary)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, opacity: 0.05, backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23e91e63\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>Ready for an Unforgettable Night?</h2>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '800px', margin: '0 auto 3rem auto', lineHeight: 1.8 }}>
              Don&apos;t fall for fake agencies or bait-and-switch tactics. Book with Agra&apos;s most trusted, premium escort service. <strong>You pay absolutely nothing until she arrives safely at your door.</strong>
            </p>
            <Link href="/contact" className="btn btn-primary cta-pulse" style={{ padding: '1.2rem 3rem', fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '1px', boxShadow: '0 0 30px rgba(233, 30, 99, 0.4)' }}>
              Book Now via WhatsApp
            </Link>
          </div>
        </section>

        {/* Popular Searches */}
        <PopularSearches locationName="Agra" />
      </main>
    </>
  );
}
