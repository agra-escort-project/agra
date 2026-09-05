import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import FaqSection from '@/components/FaqSection';
import CategoriesSection from '@/components/CategoriesSection';
import PremiumServices from '@/components/PremiumServices';
import PremiumReviews from '@/components/PremiumReviews';
import PopularSearches from '@/components/PopularSearches';
import { CategorySeoContent, LocationSeoContent } from '@/components/SeoContent';
import LocationComprehensiveGuide from '@/components/LocationComprehensiveGuide';
import TrustBar from '@/components/TrustBar';
import ModelCard from '@/components/ModelCard';
import Script from 'next/script';
import { locations } from '@/data/locations';
import { categories } from '@/data/categories';
import { models } from '@/data/models';
import { siteConfig } from '@/config/site';

type Props = {
  params: Promise<{ slug: string }>;
};

// Generate static parameters for ALL locations AND categories
export function generateStaticParams() {
  const locParams = locations.map((loc) => ({ slug: loc.slug }));
  const catParams = categories.filter(c => c.id !== 'escorts').map((cat) => ({ slug: cat.id }));
  return [...locParams, ...catParams];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  
  // Try Location
  const locationData = locations.find(loc => loc.slug === slug);
  if (locationData) {
    return {
      title: `Best Escorts in ${locationData.name} | Russian & Call Girls Near Me`,
      description: `Looking for paid girls, Russian models, or housewife escorts near you in ${locationData.name}? We offer genuine VIP companionship with zero advance payment.`,
      keywords: [
        `best escorts ${locationData.name}`,
        `Russian escorts ${locationData.name}`,
        `housewife in ${locationData.name}`,
        `paid girl in ${locationData.name}`,
        `call girls near me in ${locationData.name}`,
        `VIP escorts ${locationData.name}`,
        locationData.targetDemographic
      ],
      alternates: {
        canonical: `https://agraescort.com/${slug}`,
      },
    };
  }

  // Try Category
  const categoryData = categories.find(c => c.id === slug);
  if (categoryData) {
    return {
      title: `Best ${categoryData.name} Escorts Agra | Top Escorts`,
      description: categoryData.description,
      keywords: [
        `best ${categoryData.name.toLowerCase()} agra`,
        `agra ${categoryData.name.toLowerCase()} escorts`,
        `vip ${categoryData.name.toLowerCase()} escorts`
      ],
      alternates: {
        canonical: `https://agraescort.com/${slug}`,
      },
    };
  }

  return {};
}

export default async function DynamicSlugPage({ params }: Props) {
  const { slug } = await params;
  
  const locationData = locations.find(loc => loc.slug === slug);
  const categoryData = categories.find(c => c.id === slug);

  if (!locationData && !categoryData) {
    notFound();
  }

  // ==============================
  // RENDER CATEGORY PAGE
  // ==============================
  if (categoryData) {
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": categoryData.faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };

    return (
      <main className="min-h-screen bg-[var(--bg-color)]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        
        <section style={{ position: 'relative', overflow: 'hidden', background: 'var(--bg-color)' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundImage: 'linear-gradient(45deg, rgba(233, 30, 99, 0.03) 0%, rgba(255, 255, 255, 0) 100%)', zIndex: 0 }}></div>
          <div className="container pt-[86px] pb-12 md:pt-[140px] md:pb-[60px] px-3 md:px-4" style={{ position: "relative", zIndex: 1 }}>
            <div style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
              <nav style={{ display: 'flex', justifyContent: 'center', fontSize: '12px', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }} className="hover:text-[var(--accent-primary)] transition-colors">Home</Link>
                <span style={{ margin: '0 8px' }}>/</span>
                <span style={{ color: 'var(--accent-primary)' }}>{categoryData.name}</span>
              </nav>
              <h1 className="text-[28px] lg:text-[40px] font-bold text-[var(--text-primary)] mb-4 leading-[1.15] tracking-tight" style={{ color: 'var(--text-primary)', lineHeight: 1.1 }}>
                Premium <span className="text-[var(--accent-primary)]">{categoryData.name}</span> in Agra
              </h1>
              <p className="text-[16px] lg:text-[18px]" style={{ color: 'var(--text-secondary)', maxWidth: '750px', margin: '0 auto 2.5rem', lineHeight: 1.6, fontWeight: 400 }}>
                {categoryData.description} Explore our exclusive, verified portfolio and book your dream companion with zero advance payment.
              </p>
            </div>
          </div>
        </section>

        <TrustBar />

        <section className="py-20 bg-white border-b border-[var(--border-color)]">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="">
              <h2 className="text-[22px] md:text-[32px] font-semibold text-[var(--text-primary)] mb-3 md:mb-4 leading-[1.2]">
                Why Book {categoryData.name} Escorts in Agra?
              </h2>
              <div className="space-y-4 text-[16px] md:text-[18px] font-normal text-[var(--text-secondary)] leading-[1.6]">
                <p>
                  When you are seeking the ultimate romantic or passionate experience in the city of the Taj Mahal, booking <strong>{categoryData.name.toLowerCase()} escorts in Agra</strong> guarantees a personalized, unforgettable encounter. Our handpicked selection represents the absolute pinnacle of beauty, intelligence, and discretion.
                </p>
                <p>
                  Unlike standard agencies, we understand that every client has unique desires. Whether you are a business traveler staying at a 5-star hotel in Fatehabad Road, or a local resident seeking a discrete companion for the weekend, our {categoryData.name.toLowerCase()} provide a flawless Girlfriend Experience (GFE) tailored precisely to your needs.
                </p>
                <ul className="space-y-3 mt-4">
                  <li className="flex items-start gap-3"><span className="text-[var(--accent-primary)] font-bold">✓</span> <span><strong>100% Authentic Profiles:</strong> Every photo you see in our {categoryData.name.toLowerCase()} gallery is strictly verified.</span></li>
                  <li className="flex items-start gap-3"><span className="text-[var(--accent-primary)] font-bold">✓</span> <span><strong>Zero Advance Scams:</strong> You pay cash directly upon arrival. Complete peace of mind.</span></li>
                  <li className="flex items-start gap-3"><span className="text-[var(--accent-primary)] font-bold">✓</span> <span><strong>Elite Discretion:</strong> Our models arrive in unmarked transport and respect your absolute privacy.</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-[var(--surface-color)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-[22px] md:text-[32px] font-semibold text-[var(--text-primary)] mb-3 md:mb-4 leading-[1.2]">
                Available {categoryData.name}
              </h2>
              <p className="text-[var(--text-secondary)]">Browse our verified profiles and click 'Book Now' to contact us securely via WhatsApp.</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {models.slice(0, 4).map(model => (
                <div key={model.id}><ModelCard model={model} imageHeight="380px" showButtons={true} /></div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Link href="/gallery" className="inline-block bg-[var(--accent-primary)] text-white px-8 py-4 rounded-[12px] font-bold text-[16px] md:text-[18px] hover:bg-rose-700 transition-colors shadow-lg hover:shadow-xl">
                View All Escort Profiles
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white border-b border-[var(--border-color)]">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
              <div className="[&_strong]:font-normal"><CategorySeoContent slug={categoryData.id} name={categoryData.name} /></div>
              
              <div className="">
              <h3 className="text-[20px] md:text-[24px] font-bold text-[var(--text-primary)] mb-4">
                Impeccable Hygiene & Grooming
              </h3>
              <p className="text-gray-700 text-[15px] leading-relaxed mb-4">
                Your health, safety, and ultimate comfort are our highest priorities. Every single companion strictly adheres to world-class personal hygiene and grooming standards before every meeting:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-[15px] text-gray-700"><span className="text-pink-500 font-bold">✓</span> <strong>Flawless Grooming:</strong> Full-body waxing, pedicures, and smooth skin guarantees.</li>
                <li className="flex items-start gap-2 text-[15px] text-gray-700"><span className="text-pink-500 font-bold">✓</span> <strong>Pre-Date Freshness:</strong> Mandatory aromatic baths and premium perfumes before arriving.</li>
                <li className="flex items-start gap-2 text-[15px] text-gray-700"><span className="text-pink-500 font-bold">✓</span> <strong>Strict Health Checks:</strong> Routine health and wellness checks for absolute safety.</li>
              </ul>
            </div>
            </div>

            <div className="bg-white rounded-[24px] border border-gray-200 shadow-sm overflow-hidden mb-12">
              <div className="bg-[var(--accent-primary)] px-6 py-4">
                <h3 className="text-white text-[18px] md:text-[20px] font-bold m-0">Standard {categoryData.name} Pricing Guide</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-50 text-gray-600 text-[14px] uppercase tracking-wider">
                      <th className="px-6 py-4 border-b border-gray-200 font-semibold">Service Duration</th>
                      <th className="px-6 py-4 border-b border-gray-200 font-semibold">Location</th>
                      <th className="px-6 py-4 border-b border-gray-200 font-semibold">Estimated Price</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700 text-[15px]">
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 border-b border-gray-100 font-medium">1 Hour (Short Meet)</td>
                      <td className="px-6 py-4 border-b border-gray-100">Incall / Outcall</td>
                      <td className="px-6 py-4 border-b border-gray-100 font-bold text-[var(--accent-primary)]">From ₹2,500</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 border-b border-gray-100 font-medium">2 Hours (Dinner Date)</td>
                      <td className="px-6 py-4 border-b border-gray-100">Incall / Outcall</td>
                      <td className="px-6 py-4 border-b border-gray-100 font-bold text-[var(--accent-primary)]">From ₹4,500</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 font-medium">Full Night (Overnight)</td>
                      <td className="px-6 py-4">Outcall Only</td>
                      <td className="px-6 py-4 font-bold text-[var(--accent-primary)]">From ₹8,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="bg-gray-50 px-6 py-3 text-[13px] text-gray-500 italic">
                * Note: Prices may vary based on specific VIP profiles, transport distance, or custom roleplay requests.
              </div>
            </div>
          </div>
        </section>

        <PremiumReviews />

        <FaqSection 
          title={`${categoryData.name} Escorts FAQs`}
          subtitle={`Learn more about booking our exclusive ${categoryData.name} in Agra.`}
          faqs={categoryData.faqs}
        />
        <PopularSearches locationName="Agra" />
      </main>
    );
  }

  // ==============================
  // RENDER LOCATION PAGE
  // ==============================
  if (locationData) {
    const localFaqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": locationData.localFaq.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };

    return (
      <>
        <Script id="location-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localFaqSchema) }} />
        <main>
          {/* Hero Section */}
          <section style={{ position: 'relative', overflow: 'hidden', background: 'var(--bg-color)' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundImage: 'linear-gradient(45deg, rgba(233, 30, 99, 0.03) 0%, rgba(255, 255, 255, 0) 100%)', zIndex: 0 }}></div>
            <div className="container pt-[86px] pb-12 md:pt-[140px] md:pb-[60px] px-3 md:px-4" style={{ position: "relative", zIndex: 1 }}>
              <div style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
                <span className="mb-2 md:mb-3 inline-block px-4 py-1.5 bg-[#ffe4e6] text-[#e11d48] rounded-full text-[12px] md:text-[14px] font-semibold">
                  {locationData.category}
                </span>
                <h1 className="text-[28px] lg:text-[40px] font-bold text-[var(--text-primary)] mb-4 leading-[1.15] tracking-tight" style={{ color: 'var(--text-primary)', lineHeight: 1.1 }}>
                  Premium Escorts in <span className="text-[var(--accent-primary)]">{locationData.name}</span>
                </h1>
                <p className="text-[16px] lg:text-[18px]" style={{ color: 'var(--text-secondary)', maxWidth: '750px', margin: '0 auto 2.5rem', lineHeight: 1.6 }}>
                  Experience ultimate companionship in {locationData.name}. We provide 100% verified, breathtaking models directly to your hotel or private residence with zero advance payment.
                </p>
              </div>
            </div>
          </section>

          <TrustBar />

          {/* Model Showcase for this Location */}
          <section className="py-9 md:py-20 bg-white">
            <div className="container mx-auto px-3 md:px-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">
                
                {/* Visual Highlight 1 */}
                <div style={{ borderRadius: '24px', overflow: 'hidden', position: 'relative', boxShadow: '0 10px 30px rgba(0,0,0,0.08)' }}>
                  <Image src="/gallary/kriti/hot-girl-pic-agra-kriti-1.jpg" alt={`Call girls in ${locationData.name}`} width={600} height={800} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '2rem', background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)' }}>
                    <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
                      <span style={{ background: 'var(--accent-primary)', color: 'white', padding: '2px 8px', borderRadius: '4px', fontSize: '0.7rem', fontWeight: 'bold' }}>VIP</span>
                      <span style={{ background: 'white', color: 'black', padding: '2px 8px', borderRadius: '4px', fontSize: '0.7rem', fontWeight: 'bold' }}>VERIFIED</span>
                    </div>
                    <h3 style={{ color: 'white', margin: '0 0 0.5rem 0', fontSize: '1.5rem' }}>Elite Companions</h3>
                    <p style={{ color: 'rgba(255,255,255,0.8)', margin: 0, fontSize: '0.95rem' }}>Discreet outcalls available 24/7 across {locationData.name}.</p>
                  </div>
                </div>

                {/* Visual Highlight 2 */}
                <div style={{ borderRadius: '24px', overflow: 'hidden', position: 'relative', boxShadow: '0 10px 30px rgba(0,0,0,0.08)' }}>
                  <Image src="/gallary/neha/hot-girl-pic-agra-neha-1.jpg" alt={`Russian escorts in ${locationData.name}`} width={600} height={800} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '2rem', background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)' }}>
                    <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
                      <span style={{ background: '#3b82f6', color: 'white', padding: '2px 8px', borderRadius: '4px', fontSize: '0.7rem', fontWeight: 'bold' }}>RUSSIAN</span>
                      <span style={{ background: 'white', color: 'black', padding: '2px 8px', borderRadius: '4px', fontSize: '0.7rem', fontWeight: 'bold' }}>EXCLUSIVE</span>
                    </div>
                    <h3 style={{ color: 'white', margin: '0 0 0.5rem 0', fontSize: '1.5rem' }}>International Models</h3>
                    <p style={{ color: 'rgba(255,255,255,0.8)', margin: 0, fontSize: '0.95rem' }}>Stunning international beauties ready to visit your hotel in {locationData.name}.</p>
                  </div>
                </div>

                {/* Booking Info Box */}
                <div style={{ background: 'var(--surface-color)', borderRadius: '24px', padding: '3rem 2rem', border: '1px solid var(--border-color)', display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center' }}>
                  <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'var(--accent-primary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                  </div>
                  <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>100% Safe Booking</h3>
                  <p style={{ color: '#666', marginBottom: '2rem', lineHeight: 1.6 }}>
                    We enforce a strict Zero Advance Payment policy. Your booking in {locationData.name} is secure, confidential, and completely hassle-free.
                  </p>
                  <div style={{ background: '#f8fafc', borderRadius: '16px', padding: '1.5rem', textAlign: 'left', border: '1px solid #e2e8f0' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                      <span style={{ color: '#64748b', fontSize: '0.9rem', fontWeight: 600 }}>ETA to {locationData.name}</span>
                      <span style={{ color: '#0f172a', fontSize: '0.9rem', fontWeight: 700 }}>~15 Mins</span>
                    </div>
                    <div style={{ width: '100%', background: '#e2e8f0', height: '6px', borderRadius: '3px', overflow: 'hidden', marginBottom: '1rem' }}>
                      <div style={{ width: '80%', background: 'var(--accent-primary)', height: '100%' }}></div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981' }}></span>
                      <span style={{ fontSize: '0.85rem', color: '#10b981', fontWeight: 600 }}>Active Dispatch Available</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* Featured Local Models */}
          <section id="profiles" style={{ background: '#fafafa', padding: '5rem 0 3rem', borderTop: '1px solid var(--border-color)' }}>
            <div className="container mx-auto px-3 md:px-4">
              <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <span className="text-[12px] md:text-[14px] font-semibold text-[var(--accent-primary)] block mb-2 md:mb-3">Available now</span>
                <h2 className="section-title mb-3 md:mb-4" style={{ color: 'var(--text-primary)', letterSpacing: '-0.5px' }}>Looking for Premium Escorts Near You in {locationData.name}?</h2>
                <div className="[&_strong]:font-normal"><LocationSeoContent slug={locationData.slug} name={locationData.name} description={locationData.uniqueDescription} /></div>
              </div>
            </div>
          </section>
          <section style={{ background: '#fafafa', padding: '0 0 3rem' }}>
            <div className="container mx-auto px-3 md:px-4">

              
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

          {/* Popular Searches */}
          <PopularSearches locationName={locationData.name} />

          {/* Premium Services Grid */}
          <PremiumServices summaryMode={true} />

          {/* Localized FAQ Section */}
          <PremiumReviews />

          <FaqSection 
            title={`Frequently Asked Questions: ${locationData.name}`} 
            subtitle={`Everything you need to know about booking an escort in ${locationData.name}.`}
            faqs={locationData.localFaq} 
          />
          {/* Premium Bottom CTA */}
          <section style={{ background: 'linear-gradient(135deg, #111 0%, #2a0815 100%)', padding: '6rem 0', textAlign: 'center', color: '#fff', borderTop: '4px solid var(--accent-primary)' }}>
            <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255,255,255,0.1)', padding: '0.4rem 1.2rem', borderRadius: '50px', marginBottom: '2rem', fontSize: '12px', color: '#ffb6c1' }}>
                <span style={{ width: '8px', height: '8px', background: '#10B981', borderRadius: '50%', display: 'inline-block', boxShadow: '0 0 10px #10B981' }}></span>
                Models Available Now
              </div>
              <h2 className="text-[22px] md:text-[32px]" style={{ marginBottom: '1.5rem', fontWeight: 700, letterSpacing: '-1px' }}>
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
                <Link href="/gallery" className="btn" style={{ background: 'rgba(255,255,255,0.1)', color: '#fff', padding: '1.2rem 3rem', fontSize: '1.1rem', borderRadius: '50px', fontWeight: 600, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.2)' }}>
                  View Gallery
                </Link>
              </div>
            </div>
          </section>

          {/* Comprehensive Guide (Bottom) */}
          <LocationComprehensiveGuide slug={locationData.slug} name={locationData.name} description={locationData.uniqueDescription} />

          {/* Popular Searches */}
          <PopularSearches locationName={locationData.name} />
        </main>
      </>
    );
  }

  // Fallback
  return null;
}
