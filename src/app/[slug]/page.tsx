import { getWhatsAppLink } from "@/utils/whatsapp";
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import FaqSection from '@/components/FaqSection';
import CategoriesSection from '@/components/CategoriesSection';
import PremiumServices from '@/components/PremiumServices';
import PremiumReviews from '@/components/PremiumReviews';
import PopularSearches from '@/components/PopularSearches';
import TrackedA from '@/components/tracking/TrackedA';
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
      title: `🔥 ${locationData.name} Escorts | Fast Outcall & No Advance!`,
      description: `Looking for a call girl near ${locationData.name}? Stop getting scammed! We deliver 100% verified VIP escorts in 30 mins. Cash on arrival! Click here.`,
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
      title: `🔥 ${categoryData.name} Escorts Agra | 100% Real Photos!`,
      description: `Book genuine ${categoryData.name} escorts in Agra. ZERO advance payment! Click to view our 100% verified, exclusive photo gallery now.`,
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

    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://agraescort.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": categoryData.name,
          "item": `https://agraescort.com/${categoryData.id}`
        }
      ]
    };

    return (
      <main className="min-h-screen bg-[var(--bg-color)]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        
        <section className="bg-gradient-to-br from-[var(--bg-color)] to-[#fff0f5] border-b border-[var(--border-color)]">
          <div className="max-w-7xl mx-auto px-3 py-12 md:py-16 md:px-4 sm:px-6 lg:px-8 text-center">
            <nav style={{ display: 'flex', justifyContent: 'center', fontSize: '12px', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
              <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }} className="hover:text-[var(--accent-primary)] transition-colors">Home</Link>
              <span style={{ margin: '0 8px' }}>/</span>
              <span style={{ color: 'var(--accent-primary)' }}>{categoryData.name}</span>
            </nav>
            <h1 className="text-[28px] md:text-[36px] font-bold mb-4 text-[var(--text-primary)]">
              Premium <span className="text-[var(--accent-primary)]">{categoryData.name}</span> in Agra
            </h1>
            <p className="text-[16px] md:text-[18px] text-[var(--text-secondary)] max-w-3xl mx-auto">
              {categoryData.description} Explore our exclusive, verified portfolio and book your dream companion with zero advance payment.
            </p>
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
            <div className="mt-12 md:mt-16 flex justify-center">
              <Link href="/gallery" className="inline-flex items-center justify-center gap-2 h-12 lg:h-14 px-8 text-[14px] lg:text-[16px] font-semibold rounded-[50px] border border-[var(--border-color)] bg-transparent text-[var(--text-primary)] hover:bg-black/5 transition-colors w-full sm:w-auto">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
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

        <PremiumReviews locationName={categoryData.name} />

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

    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://agraescort.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Locations",
          "item": "https://agraescort.com/locations"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": locationData.name,
          "item": `https://agraescort.com/${locationData.slug}`
        }
      ]
    };

    return (
      <>
        <Script id="location-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localFaqSchema) }} />
        <Script id="location-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
        <main>
          {/* Hero Section */}
          <section className="bg-gradient-to-br from-[var(--bg-color)] to-[#fff0f5] border-b border-[var(--border-color)]">
            <div className="max-w-7xl mx-auto px-3 py-12 md:py-16 md:px-4 sm:px-6 lg:px-8 text-center">
              <h1 className="text-[28px] md:text-[36px] font-bold mb-4 text-[var(--text-primary)]">
                Premium Escorts in <span className="text-[var(--accent-primary)]">{locationData.name}</span>
              </h1>
              <p className="text-[16px] md:text-[18px] text-[var(--text-secondary)] max-w-3xl mx-auto">
                Experience ultimate companionship in {locationData.name}. We provide 100% verified, breathtaking models directly to your hotel or private residence with zero advance payment.
              </p>
            </div>
          </section>

          <TrustBar />

          {/* Model Showcase for this Location */}
          <section className="py-16 md:py-24 bg-[var(--surface-color)] border-b border-[var(--border-color)]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12 md:mb-16">
                <h2 className="text-[24px] md:text-[36px] font-bold text-[var(--text-primary)] mb-4 leading-[1.2]">
                  Available Models in {locationData.name}
                </h2>
                <p className="text-[16px] md:text-[18px] text-[var(--text-secondary)] max-w-2xl mx-auto">
                  Browse our verified profiles and click 'Book Now' to contact us securely via WhatsApp.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                {models.slice(0, 4).map(model => (
                  <div key={model.id}><ModelCard model={model} imageHeight="380px" showButtons={true} /></div>
                ))}
              </div>
              
              <div className="mt-12 md:mt-16 flex justify-center">
                <Link href="/gallery" className="inline-flex items-center justify-center gap-2 h-12 lg:h-14 px-8 text-[14px] lg:text-[16px] font-semibold rounded-[50px] border border-[var(--border-color)] bg-transparent text-[var(--text-primary)] hover:bg-black/5 transition-colors w-full sm:w-auto">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                  View All Escort Profiles
                </Link>
              </div>

              {/* Booking Info Box Full Width */}
              <div className="mt-20 md:mt-24 w-full">
                <div style={{ background: 'white', borderRadius: '24px', padding: '3rem 2rem', border: '1px solid var(--border-color)', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', boxShadow: '0 10px 40px rgba(0,0,0,0.06)' }}>
                  <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'var(--accent-primary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                  </div>
                  <h3 style={{ fontSize: '1.6rem', fontWeight: 'bold', marginBottom: '1rem', color: 'var(--text-primary)' }}>100% Safe Booking & Fresh Profiles</h3>
                  <p style={{ color: '#666', fontSize: '1.1rem', marginBottom: '2rem', lineHeight: 1.6, maxWidth: '800px', margin: '0 auto 2rem' }}>
                    We enforce a strict Zero Advance Payment policy. Your booking in {locationData.name} is secure, confidential, and completely hassle-free. 
                    <strong style={{ color: 'var(--text-primary)', display: 'block', marginTop: '0.75rem' }}>We generally also have new, fresh call girls available! Contact us on WhatsApp and we will send you our latest fresh profiles.</strong>
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-2xl mx-auto mb-8">
                    <TrackedA href={getWhatsAppLink({ locationName: locationData.name, source: 'location_page' })} target="_blank" rel="nofollow noopener noreferrer" className="inline-flex items-center justify-center gap-2 h-12 lg:h-14 px-8 text-[14px] lg:text-[16px] font-semibold rounded-[50px] bg-[#25D366] text-white hover:opacity-90 transition-opacity w-full sm:w-auto" trackingData={{ cta_action: 'whatsapp_chat', cta_source: 'location_page_fresh_profiles' }}>
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
                      Get Fresh Profiles
                    </TrackedA>
                    <TrackedA href="tel:+919105293429" className="inline-flex items-center justify-center gap-2 h-12 lg:h-14 px-8 text-[14px] lg:text-[16px] font-semibold rounded-[50px] bg-[var(--accent-primary)] text-white hover:opacity-90 transition-opacity w-full sm:w-auto" trackingData={{ cta_action: 'phone_call', cta_source: 'location_page_call' }}>
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/></svg>
                      Call Now
                    </TrackedA>
                  </div>

                  <div style={{ background: '#f8fafc', borderRadius: '16px', padding: '1.5rem', textAlign: 'left', border: '1px solid #e2e8f0', maxWidth: '400px', margin: '0 auto', width: '100%' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                      <span style={{ color: '#64748b', fontSize: '0.95rem', fontWeight: 600 }}>ETA to {locationData.name}</span>
                      <span style={{ color: '#0f172a', fontSize: '0.95rem', fontWeight: 700 }}>~15 Mins</span>
                    </div>
                    <div style={{ width: '100%', background: '#e2e8f0', height: '8px', borderRadius: '4px', overflow: 'hidden', marginBottom: '1rem' }}>
                      <div style={{ width: '80%', background: 'var(--accent-primary)', height: '100%' }}></div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10b981' }}></span>
                      <span style={{ fontSize: '0.9rem', color: '#10b981', fontWeight: 600 }}>Active Dispatch Available</span>
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
          <PremiumReviews locationName={locationData.name} />

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
                <TrackedA href={`mailto:booking@${siteConfig.domain}`} className="btn" style={{ background: 'var(--accent-primary)', color: '#fff', padding: '1.2rem 3rem', fontSize: '1.1rem', borderRadius: '50px', fontWeight: 600, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', boxShadow: '0 10px 30px rgba(233, 30, 99, 0.3)', transition: 'transform 0.3s ease' }} trackingData={{ cta_action: 'send_email', cta_source: 'location_page_book_now', location_name: locationData.name }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  Book Now
                </TrackedA>
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
