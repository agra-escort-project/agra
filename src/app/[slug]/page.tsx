import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import FaqSection from '@/components/FaqSection';
import Script from 'next/script';
import { locations } from '@/data/locations';

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
        <section className="hero">
          <div className="container">
            <h1 className="hero-title">Best Call Girls in {locationData.name}</h1>
            <p className="hero-subtitle">
              Exclusive VIP escorts and premium companionship services available right now in {locationData.name}, Agra.
            </p>
            <Link href="/#contact" className="btn btn-primary">
              Book in {locationData.name}
            </Link>
          </div>
        </section>

        <section className="features" style={{ background: 'var(--surface-color)' }}>
          <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 className="section-title" style={{ fontSize: '2rem' }}>Local Companions in {locationData.name}</h2>
            <article style={{ marginBottom: '2rem' }}>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-primary)' }}>
                {locationData.uniqueDescription}
              </p>
            </article>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Link href="/locations" className="btn btn-secondary">
                View All Agra Locations
              </Link>
            </div>
          </div>
        </section>

        {/* Localized FAQ Section */}

        <FaqSection 
          title={`${locationData.name} FAQs`} 
          faqs={locationData.localFaq} 
        />
      </main>
    </>
  );
}
