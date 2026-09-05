import Head from 'next/head';
import Image from "next/image";
import Link from 'next/link';
import Script from 'next/script';
import FaqSection from '@/components/FaqSection';
import PremiumReviews from '@/components/PremiumReviews';
import PremiumServices from '@/components/PremiumServices';
import CategoriesSection from '@/components/CategoriesSection';
import ComparisonAccordion from '@/components/ComparisonAccordion';
import ModelMarquee from "@/components/ModelMarquee";
import ModelCard from "@/components/ModelCard";
import HeroCarousel from "@/components/HeroCarousel";
import { getFeaturedModels } from "@/data/models";
import { siteConfig } from "@/config/site";

export default function Home() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do I book an Agra escort?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Booking an Agra escort is simple. Just contact us via phone or email provided on our contact page, specify your preferences and location in Agra, and we will arrange the perfect companion for you."
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
        <ModelMarquee />
        {/* Hero Section */}
        <section className="pt-4 pb-4 lg:pt-16 lg:pb-14">
          <div className="container mx-auto">
            <div className="flex flex-wrap lg:flex-nowrap items-center justify-between gap-8 lg:gap-16">
              
              {/* Left Content */}
              <div className="flex-1 basis-[450px] max-w-[600px] order-2 lg:order-1 w-full">
                <h1 className="text-[24px] lg:text-[36px] font-bold text-[var(--text-primary)] leading-[1.15] mb-4 lg:mb-6 tracking-[-0.02em]">
                  Premium Escorts &amp; VIP Call Girls in Agra
                </h1>
                <p className="text-[16px] lg:text-[18px] font-normal text-[var(--text-secondary)] leading-relaxed mb-6 lg:mb-10">
                  Experience the ultimate companionship with the best VIP escorts, Russian models, and independent call girls in Agra. Whether you are looking for a passionate housewife or a discreet paid girl near you, we guarantee zero fake profiles and zero advance payment.
                </p>
                <div className="flex flex-col lg:flex-row gap-3 lg:gap-4">
                  <Link href="/contact" className="inline-flex items-center justify-center gap-2 h-12 lg:h-14 px-6 text-[14px] lg:text-[16px] font-semibold rounded-[50px] bg-[var(--accent-primary)] text-white hover:opacity-90 transition-opacity w-full lg:w-auto">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                    Book Now
                  </Link>
                  <Link href="/gallery" className="inline-flex items-center justify-center gap-2 h-12 lg:h-14 px-6 text-[14px] lg:text-[16px] font-semibold rounded-[50px] border border-[var(--border-color)] bg-transparent text-[var(--text-primary)] hover:bg-black/5 transition-colors w-full lg:w-auto">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                    View Verified Models
                  </Link>
                </div>
              </div>

              {/* Right Image */}
              <div className="flex-1 basis-[450px] w-full relative order-1 lg:order-2">
                <HeroCarousel />
              </div>
              
            </div>
          </div>
        </section>

        <section className="trust-banner py-[60px] lg:py-[100px]" style={{ background: 'white' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '1.2rem' }}>

              <div className="p-3 md:p-4" style={{ position: 'relative', background: 'var(--surface-color)', borderRadius: '20px', border: '1px solid var(--border-color)', display: 'flex', gap: '1.2rem', alignItems: 'flex-start', boxShadow: '0 4px 20px rgba(0,0,0,0.04)', textAlign: 'left' }}>
                {/* Floating chip */}
                <div style={{ width: '56px', height: '56px', flexShrink: 0, borderRadius: '16px', background: '#ecfdf5', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #d1fae5' }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className="text-[16px] md:text-[18px] font-semibold text-[var(--text-primary)] leading-snug mt-0 m-0">
                      100% Verified Profiles
                    </h3>
                    <span className="text-[10px] md:text-[12px] font-semibold px-[8px] py-[3px] rounded-full"
                  style={{ background: '#f1f5f9', color: '#475569', whiteSpace: 'nowrap' }}>
                  ACTIVE
                </span>
                  </div>
                  <p className="text-[14px] md:text-[16px] font-normal text-[var(--text-secondary)] leading-relaxed m-0">
                    Real photos, authentic identities. Exactly who arrives at your door without exception.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="p-3 md:p-4" style={{ position: 'relative', background: 'var(--surface-color)', borderRadius: '20px', border: '1px solid var(--border-color)', display: 'flex', gap: '1.2rem', alignItems: 'flex-start', boxShadow: '0 4px 20px rgba(0,0,0,0.04)', textAlign: 'left' }}>
                {/* Floating chip */}
                <div style={{ width: '56px', height: '56px', flexShrink: 0, borderRadius: '16px', background: '#fff1f2', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #ffe4e6' }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#e11d48" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><path d="M15 9.5a3 3 0 1 0-4.5 2.5c2.5 1 4.5 1.5 4.5 3.5a3 3 0 1 1-4.5 2.5"></path></svg>
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className="text-[16px] md:text-[18px] font-semibold text-[var(--text-primary)] leading-snug mt-0 m-0">
                      Zero Advance Payment
                    </h3>
                    <span className="text-[10px] md:text-[12px] font-semibold px-[8px] py-[3px] rounded-full"
                  style={{ background: '#ecfdf5', color: '#10b981', whiteSpace: 'nowrap' }}>
                  SAFE
                </span>
                  </div>
                  <p className="text-[14px] md:text-[16px] font-normal text-[var(--text-secondary)] leading-relaxed m-0">
                    Strictly cash on arrival. No pre-payments, upfront charges, or hidden deposit fees.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="p-3 md:p-4" style={{ position: 'relative', background: 'var(--surface-color)', borderRadius: '20px', border: '1px solid var(--border-color)', display: 'flex', gap: '1.2rem', alignItems: 'flex-start', boxShadow: '0 4px 20px rgba(0,0,0,0.04)', textAlign: 'left' }}>
                {/* Floating chip */}
                <div style={{ width: '56px', height: '56px', flexShrink: 0, borderRadius: '16px', background: '#eef2ff', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #e0e7ff' }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#4f46e5" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className="text-[16px] md:text-[18px] font-semibold text-[var(--text-primary)] leading-snug mt-0 m-0">
                      100% Confidential
                    </h3>
                    <span className="text-[10px] md:text-[12px] font-semibold px-[8px] py-[3px] rounded-full"
                  style={{ background: '#eef2ff', color: '#4f46e5', whiteSpace: 'nowrap' }}>
                  SECURE
                </span>
                  </div>
                  <p className="text-[14px] md:text-[16px] font-normal text-[var(--text-secondary)] leading-relaxed m-0">
                    Complete anonymity guaranteed. Models arrive discreetly in unmarked transportation.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Featured Escorts Gallery */}
        <section id="featured-escorts" className="py-[60px] lg:py-[100px]" style={{ background: 'white' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <span className="text-[12px] md:text-[14px] font-semibold mb-2 md:mb-3" style={{ color: 'var(--accent-primary)', letterSpacing: '2px', textTransform: 'uppercase', display: 'block' }}>Premium Selection</span>
              <h2 className="text-[22px] md:text-[32px] font-semibold mb-3 md:mb-4" style={{ color: 'var(--text-primary)', lineHeight: 1.2 }}>
                Meet Our Elite Escorts
              </h2>
              <p className="text-[16px] md:text-[18px] font-normal" style={{ color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto' }}>
                Browse a selection of our most requested companions. All profiles are 100% verified and available for immediate booking.
              </p>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))', gap: '2rem', marginBottom: '4rem' }}>
              {getFeaturedModels().map((model) => (
                <div key={model.id}><ModelCard model={model} imageHeight="350px" showButtons={true} /></div>
              ))}
            </div>

            <div style={{ textAlign: 'center' }}>
              <Link href="/gallery" className="inline-flex items-center justify-center gap-2 h-12 lg:h-14 px-6 text-[14px] lg:text-[16px] font-semibold rounded-[50px] border-2 border-[var(--accent-primary)] bg-transparent text-[var(--accent-primary)] hover:bg-[var(--accent-primary)] hover:text-white transition-colors w-full lg:w-auto no-underline">
                View Full Gallery
              </Link>
            </div>
          </div>
        </section>

        {/* Escort Categories */}
        <CategoriesSection />

        {/* How It Works Section */}
        <section id="how-it-works" className="py-[60px] lg:py-[100px]">
          <div className="container">
            <div className="text-center mb-16">
              <span className="text-[12px] md:text-[14px] font-semibold text-[var(--accent-primary)] block mb-2 md:mb-3">Booking Process</span>
              <h2 className="text-[22px] md:text-[32px] font-semibold mb-3 md:mb-4 text-[var(--text-primary)] tracking-tight">How To Book Elite Female Companions in Agra</h2>
              <p className="text-[16px] md:text-[18px] font-normal text-[#666] max-w-[800px] mx-auto leading-relaxed">
                Our booking process is designed to be 100% transparent, safe, and completely discreet. Follow these simple steps to meet Agra&apos;s finest high-profile models.
              </p>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '2rem' }}>
              
              <article style={{ background: 'var(--surface-color)', padding: '2.5rem 2rem', borderRadius: '16px', border: '1px solid var(--border-color)', position: 'relative', textAlign: 'center' }}>
                <div style={{ position: 'absolute', top: '-20px', left: '50%', transform: 'translateX(-50%)', background: 'var(--accent-primary)', color: 'white', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '1.2rem' }}>1</div>
                <h3 className="text-[16px] md:text-[18px] font-semibold mb-3 mt-4 text-[var(--text-primary)]">Choose Your Companion</h3>
                <p className="text-[14px] md:text-[16px] font-normal leading-relaxed text-[var(--text-secondary)] m-0">
                  Browse our gallery of 100% verified, genuine profiles. Choose the elite model that perfectly matches your preferences.
                </p>
              </article>

              <article style={{ background: 'var(--surface-color)', padding: '2.5rem 2rem', borderRadius: '16px', border: '1px solid var(--border-color)', position: 'relative', textAlign: 'center' }}>
                <div style={{ position: 'absolute', top: '-20px', left: '50%', transform: 'translateX(-50%)', background: 'var(--accent-primary)', color: 'white', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '1.2rem' }}>2</div>
                <h3 className="text-[16px] md:text-[18px] font-semibold mb-3 mt-4 text-[var(--text-primary)]">Contact on WhatsApp</h3>
                <p className="text-[14px] md:text-[16px] font-normal leading-relaxed text-[var(--text-secondary)] m-0">
                  Send us a message with your selected model, location in Agra, and timing. Our agents will confirm availability instantly.
                </p>
              </article>

              <article style={{ background: 'var(--surface-color)', padding: '2.5rem 2rem', borderRadius: '16px', border: '1px solid var(--border-color)', position: 'relative', textAlign: 'center' }}>
                <div style={{ position: 'absolute', top: '-20px', left: '50%', transform: 'translateX(-50%)', background: 'var(--accent-primary)', color: 'white', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '1.2rem' }}>3</div>
                <h3 className="text-[16px] md:text-[18px] font-semibold mb-3 mt-4 text-[var(--text-primary)]">Pay Cash on Arrival</h3>
                <p className="text-[14px] md:text-[16px] font-normal leading-relaxed text-[var(--text-secondary)] m-0">
                  The model arrives discreetly at your hotel or residence. You only hand over the payment once she is safely inside.
                </p>
              </article>

            </div>
          </div>
        </section>

        {/* Premium Services Grid */}
        <PremiumServices summaryMode={true} />

        {/* Locations Overview - Premium Redesign */}
        <section id="locations" className="py-[60px] lg:py-[100px]" style={{ background: 'var(--surface-color)', borderTop: '1px solid var(--border-color)' }}>
          <div className="container">
            <div className="text-center mb-16">
              <span className="text-[12px] md:text-[14px] font-semibold text-[var(--accent-primary)] block mb-2 md:mb-3">Available Across The City</span>
              <h2 className="text-[22px] md:text-[32px] font-semibold mb-3 md:mb-4 text-[var(--text-primary)] tracking-tight">Top Locations for Agra Escorts</h2>
              <p className="text-[16px] md:text-[18px] font-normal text-[#666] max-w-[800px] mx-auto leading-relaxed">
                From the luxurious surroundings of Tajganj to the bustling heart of Sanjay Place, our premium escort services are available throughout Agra. We guarantee ultra-fast, completely discreet arrivals directly to your hotel or private residence.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
              {[
                { 
                  name: 'Tajganj', slug: 'tajganj', 
                  eta: '15 Min ETA', active: '4 Active', 
                  desc: 'Oberoi Amarvilas, ITC Mughal, Taj Hotel & VIP East Gate suites.', 
                  tags: ['IN-CALL / OUT-CALL', '5-STAR DISCREET'], 
                  btnText: 'Book Tajganj Escorts'
                },
                { 
                  name: 'Fatehabad Road', slug: 'fatehabad-road', 
                  eta: '12 Min ETA', active: '6 Active', 
                  desc: 'Courtyard Marriott, Radisson Blu, DoubleTree Hilton corridor.', 
                  tags: ['FASTEST HUB', 'LUXURY BELTS'], 
                  btnText: 'Fatehabad Road VIPs'
                },
                { 
                  name: 'Sanjay Place', slug: 'sanjay-place', 
                  eta: '20 Min ETA', active: '3 Active', 
                  desc: 'Financial hub, Clarks Shiraz vicinity, boutique hotels & apartments.', 
                  tags: ['CORPORATE HUB', 'DISCREET IN-CALL'], 
                  btnText: 'Sanjay Place Models'
                },
                { 
                  name: 'Sikandra', slug: 'sikandra', 
                  eta: '20 Min ETA', active: '2 Active', 
                  desc: 'NH-19 luxury transit resorts, Highway guest villas & monument area.', 
                  tags: ['RESORTS ACCESS', 'DIRECT OUTCALL'], 
                  btnText: 'Sikandra Call Girls'
                },
                { 
                  name: 'Kamla Nagar', slug: 'kamla-nagar', 
                  eta: '18 Min ETA', active: '4 Active', 
                  desc: 'Upscale residential suites, Central Market, Bypass express access.', 
                  tags: ['QUIET DISCREET', 'HIGH PROFILE'], 
                  btnText: 'Kamla Nagar Escorts'
                },
                { 
                  name: 'Dayal Bagh', slug: 'dayal-bagh', 
                  eta: '20 Min ETA', active: '3 Active', 
                  desc: 'Serene university enclave, luxury garden guest houses & farm stays.', 
                  tags: ['PRIVATE VILLAS', 'VIP VERIFIED'], 
                  btnText: 'Book Dayal Bagh'
                },
                { 
                  name: 'Vijay Nagar', slug: 'vijay-nagar', 
                  eta: '15 Min ETA', active: '5 Active', 
                  desc: 'Prime central residential sector, easy link to Cantt & Fatehabad Rd.', 
                  tags: ['CENTRALLY LOCATED', 'FAST DISPATCH'], 
                  btnText: 'Vijay Nagar Companions'
                },
                { 
                  name: 'Khandari', slug: 'khandari', 
                  eta: '18 Min ETA', active: '3 Active', 
                  desc: 'Highway interconnect hub, VIP residential blocks & hotel complexes.', 
                  tags: ['TRANSIT SUITES', '24/7 OUTCALL'], 
                  btnText: 'Khandari VIP Models'
                }
              ].map((loc, index) => (
                                <Link key={loc.slug} href={`/best-escorts-${loc.slug}-agra`} className={`bg-white rounded-[24px] border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] p-5 md:p-6 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all flex flex-col no-underline group ${index >= 4 ? 'hidden md:flex' : 'flex'}`}>
                  
                  <div className="flex justify-between items-center mb-4">
                    <span className="bg-emerald-50 text-emerald-600 px-2.5 py-1 rounded-md text-[10px] md:text-[12px] font-semibold flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                      {loc.eta}
                    </span>
                    <span className="bg-rose-50 text-rose-500 px-2.5 py-1 rounded-md text-[10px] md:text-[12px] font-semibold">
                      {loc.active}
                    </span>
                  </div>

                  <div className="mb-3">
                    <h3 className="text-[16px] md:text-[20px] font-semibold text-gray-900 m-0">{loc.name}</h3>
                  </div>

                  <p className="text-[14px] md:text-[16px] font-normal text-gray-500 leading-relaxed m-0 mb-5 md:min-h-[48px]">
                    {loc.desc}
                  </p>


                  <div className="mt-auto w-full bg-gray-50/80 group-hover:bg-[var(--accent-primary)] group-hover:text-white transition-colors text-gray-700 text-[14px] md:text-[16px] font-semibold py-3 rounded-[12px] flex items-center justify-center gap-1">
                    {loc.btnText} <span aria-hidden="true">&rarr;</span>
                  </div>

                </Link>
              ))}
            </div>
            
            <div className="flex justify-center mt-4">
              <Link href="/locations" className="inline-flex items-center justify-center gap-2 h-12 lg:h-14 px-6 text-[14px] lg:text-[16px] font-semibold rounded-[50px] border-2 border-[var(--accent-primary)] bg-transparent text-[var(--accent-primary)] hover:bg-[var(--accent-primary)] hover:text-white transition-colors w-full lg:w-auto no-underline">
                View All 25+ Agra Locations & Hotel Hubs <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
        </section>
        
        {/* Comprehensive SEO Content Section - Editorial Redesign */}
        <section id="seo-content" className="py-[60px] lg:py-[100px]" style={{ background: '#fff' }}>
          <div className="container">
            
            <div className="text-center mb-16">
              <span className="text-[12px] md:text-[14px] font-semibold text-[var(--accent-primary)] block mb-2 md:mb-3">Premium Companionship</span>
              <h2 className="text-[22px] md:text-[32px] font-semibold mb-3 md:mb-4 text-[var(--text-primary)] tracking-tight">The #1 Best Escorts Provider in Agra</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mb-24">
              <div className="relative">
                <p className="text-[16px] md:text-[18px] leading-[1.8] text-[#444] font-medium m-0">
                  <span className="float-left text-[60px] md:text-[72px] leading-[0.8] pt-2 pr-4 text-[var(--accent-primary)] font-extrabold">W</span>hen it comes to finding premium companionship, our agency stands undisputed as the most reliable and highly-rated provider of the <strong>best escorts in Agra</strong>. We understand that discerning gentlemen require more than just a beautiful face; they demand sophistication, absolute discretion, and a memorable connection.
                </p>
              </div>
              <div className="md:border-l border-[var(--border-color)] md:pl-12 flex items-center pt-8 md:pt-0 border-t md:border-t-0 mt-2 md:mt-0">
                <p className="text-[16px] md:text-[18px] leading-[1.8] text-[#666] m-0">
                  Whether you are traveling for a corporate event, unwinding at a luxury resort, or simply seeking an intimate evening, our top elite escorts in Agra are tailored to exceed your highest expectations. Your satisfaction and privacy are our highest priorities. We curate our selection rigorously to ensure unmatched quality.
                </p>
              </div>
            </div>

            <div className="mb-24">
              <div className="text-center mb-16">
                <span className="text-[12px] md:text-[14px] font-semibold text-[var(--accent-primary)] block mb-2 md:mb-3">Why Choose Us</span>
                <h2 className="text-[22px] md:text-[32px] font-semibold mb-3 md:mb-4 text-[var(--text-primary)] tracking-tight">Why Choose Our Independent Escorts?</h2>
                <p className="text-[16px] md:text-[18px] font-normal text-[#666] max-w-[800px] mx-auto leading-relaxed">
                  Unlike unverified portals, we exclusively represent a curated selection of high-profile, <strong>independent escorts in Agra</strong>. What you see in our gallery is exactly who will arrive at your door.
                </p>
              </div>
              
              <div className="grid grid-cols-[repeat(auto-fill,minmax(min(100%,320px),1fr))] gap-3 md:gap-4">
                {[
                  { icon: '💎', title: 'Zero Advance Payment', text: 'We operate strictly on a cash-on-arrival model. No deposits, no scams, just pure trust.' },
                  { icon: '📸', title: '100% Genuine Photos', text: 'Our VIP escorts in Agra are verified in person. We guarantee absolutely no bait-and-switch.' },
                  { icon: '🤫', title: 'Unmatched Discretion', text: 'From booking to departure, your privacy is protected. Models arrive in casual attire.' },
                  { icon: '🕒', title: '24/7 Availability', text: 'Desire knows no time limits. Our dispatch team is ready to assist you day and night.' },
                  { icon: '✨', title: 'Impeccable Hygiene', text: 'Every model adheres to strict grooming and hygiene standards for a perfectly fresh and safe experience.' },
                  { icon: '🛡️', title: 'Independent Choice', text: 'All our models are 18+ independent women working safely on their own terms without any agency pressure.' }
                ].map((feature, i) => (
                  <div key={i} className="p-4 md:p-5 relative bg-[var(--surface-color)] rounded-[20px] border border-[var(--border-color)] flex gap-[1.2rem] items-start shadow-[0_4px_20px_rgba(0,0,0,0.04)] text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
                    <div className="w-[56px] h-[56px] shrink-0 rounded-[16px] bg-[#fdf2f8] flex items-center justify-center border border-[#fce7f3] text-[24px]">
                      {feature.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-[16px] md:text-[18px] font-semibold text-[var(--text-primary)] leading-snug mb-1 mt-0 pr-2">
                        {feature.title}
                      </h4>
                      <p className="text-[14px] md:text-[16px] font-normal text-[var(--text-secondary)] leading-relaxed m-0">
                        {feature.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Comparison Table */}
            <div className="mb-12 md:mb-24 w-full">
              <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <span className="text-[12px] md:text-[14px] font-semibold text-[var(--accent-primary)] block mb-2 md:mb-3">The Truth About The Industry</span>
                <h3 className="text-[22px] md:text-[32px] mb-3 md:mb-4" style={{ color: 'var(--text-primary)', letterSpacing: '-1px' }}>
                  {siteConfig.name} vs. The Rest
                </h3>
                <p style={{ color: '#666', fontSize: '1.1rem' }}>See why 95% of VIP clients refuse to book anywhere else.</p>
              </div>

              <div className="desktop-comparison hidden md:block" style={{ background: '#fff', borderRadius: '16px', border: '1px solid var(--border-color)', boxShadow: '0 10px 30px rgba(0,0,0,0.02)', overflow: 'hidden' }}>
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

              {/* Mobile accordion — hidden on desktop */}
              <div className="md:hidden">
                <ComparisonAccordion />
              </div>
            </div>
            
            {/* Split Image / Text blocks for VIP and Hotels */}
            <div className="seo-blocks-wrapper grid grid-cols-1 gap-8 md:gap-16">
              
              <div className="bg-transparent md:bg-[var(--surface-color)] py-4 px-0 md:p-12 lg:p-16 rounded-none md:rounded-[32px] flex flex-col-reverse md:grid md:grid-cols-2 gap-8 md:gap-16 items-center">
                <div>
                  <span className="text-[12px] md:text-[14px] font-semibold text-[var(--accent-primary)] block mb-2 md:mb-3">Luxury & Exclusivity</span>
                  <h2 className="text-[22px] md:text-[32px] font-semibold mb-3 md:mb-4 text-[var(--text-primary)] tracking-tight">Best VIP Escorts & Premium Independent Models</h2>
                  <p className="text-[16px] md:text-[18px] font-normal text-[#666] leading-relaxed mb-6">
                    For clients who demand the absolute pinnacle of luxury, we offer an exclusive tier of <strong>Best VIP escorts in Agra</strong>, including stunning Russian and international models. These high-end female companions are not only breathtakingly gorgeous but also highly educated and articulate, making them the perfect plus-one for high-society dinner dates, business trips, or long weekend getaways.
                  </p>
                  <Link href="/contact" className="inline-flex items-center gap-2 text-[var(--accent-primary)] font-semibold text-[16px] md:text-[18px] hover:underline">
                    Explore VIP Services &rarr;
                  </Link>
                </div>
                <div className="relative w-full h-[300px] md:h-[400px] rounded-[24px] overflow-hidden border border-[var(--border-color)] shadow-[0_20px_40px_rgba(0,0,0,0.05)]">
                  <img src="/gallary/divya/best-callgirl-in-agra-divya-1.jpg" alt="VIP Escort in Agra" className="w-full h-full object-cover" />
                </div>
              </div>

              <div className="bg-transparent md:bg-[var(--surface-color)] py-4 px-0 md:p-12 lg:p-16 rounded-none md:rounded-[32px] flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-16 items-center">
                <div className="hidden md:block relative w-full h-[400px] rounded-[24px] overflow-hidden border border-[var(--border-color)] shadow-[0_20px_40px_rgba(0,0,0,0.05)]">
                  <img src="/gallary/kiara/nude-girl-pic-agra-kiara-1.jpg" alt="Hotel Outcall Agra" className="w-full h-full object-cover" />
                </div>
                <div>
                  <span className="text-[12px] md:text-[14px] font-semibold text-[var(--accent-primary)] block mb-2 md:mb-3">Anywhere in the city</span>
                  <h2 className="text-[22px] md:text-[32px] font-semibold mb-3 md:mb-4 text-[var(--text-primary)] tracking-tight">Fast & Discreet Hotel Outcalls</h2>
                  <p className="text-[16px] md:text-[18px] font-normal text-[#666] leading-relaxed mb-6">
                    We specialize in fast, reliable outcalls to all major 3-star, 4-star, and 5-star hotels across the city. Whether you are staying near the iconic Taj Mahal, the bustling streets of Sanjay Place, or the quiet luxury of Fatehabad Road, our models typically reach your room within 30 to 45 minutes. Simply contact our dispatch team and wait for your stunning <strong>Agra escort</strong> to arrive.
                  </p>
                  <Link href="/locations" className="inline-flex items-center gap-2 text-[var(--accent-primary)] font-semibold text-[16px] md:text-[18px] hover:underline">
                    View Service Areas &rarr;
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Client Reviews */}
        <PremiumReviews />

        {/* FAQ Section */}
        <FaqSection 
          title="Agra Escorts FAQs"
          subtitle="Get all the answers you need before booking your perfect Agra escort."
          faqs={[
            {
              question: "What is the starting price for Agra escorts?",
              answer: "Our highly competitive <strong>Agra escort price</strong> starts from just ₹2,500 for a standard one-hour session. We also offer VIP and premium Russian models for clients seeking the ultimate luxury experience."
            },
            {
              question: "Do you provide independent escorts in Agra?",
              answer: "Yes, we exclusively collaborate with verified, high-profile <strong>independent escorts in Agra</strong>. This ensures you get a personalized, unhurried, and highly intimate experience."
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
              answer: "Our logistics are incredibly fast. Depending on traffic, our models typically reach central locations like <a href='/best-escorts-tajganj-agra'>Tajganj</a> or <a href='/best-escorts-sanjay-place-agra'>Sanjay Place</a> within 30 to 45 minutes of confirming your booking."
            },
            {
              question: "Is my privacy guaranteed?",
              answer: "Your privacy is our utmost priority. Our booking process is 100% confidential. We do not store your data, and our models are trained to enter and exit your location with absolute discretion."
            }
          ]}
        />

        {/* Massive Conversion CTA Section */}
        <section className="conversion-cta py-[60px] lg:py-[100px] px-4" style={{ background: 'linear-gradient(135deg, var(--bg-color) 0%, #fff0f5 100%)', borderTop: '2px solid var(--accent-primary)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, opacity: 0.05, backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23e91e63\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <h2 className="text-[22px] md:text-[36px] font-semibold text-[var(--text-primary)] mb-4 md:mb-6">Ready for an Unforgettable Night?</h2>
            <p className="text-[16px] md:text-[18px] text-[var(--text-secondary)] max-w-[800px] mx-auto mb-8 md:mb-12 leading-[1.8]">
              Don&apos;t fall for fake agencies or bait-and-switch tactics. Book with Agra&apos;s most trusted, premium escort service. <strong>You pay absolutely nothing until she arrives safely at your door.</strong>
            </p>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 h-12 lg:h-14 px-6 text-[14px] lg:text-[16px] font-semibold rounded-[50px] bg-[var(--accent-primary)] text-white hover:opacity-90 transition-opacity w-full lg:w-auto">
              Book Now via WhatsApp
            </Link>
          </div>
        </section>


      </main>
    </>
  );
}
