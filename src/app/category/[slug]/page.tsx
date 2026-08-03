import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound, redirect } from 'next/navigation';
import { categories } from '@/data/categories';
import { models } from '@/data/models';
import PopularSearches from '@/components/PopularSearches';
import FaqSection from '@/components/FaqSection';

type Props = {
  params: Promise<{ slug: string }>;
};

// Generate static parameters for ALL categories
export function generateStaticParams() {
  return categories
    .filter((cat) => cat.id !== 'callgirls')
    .map((cat) => ({
      slug: cat.id,
    }));
}

// Dynamically generate SEO metadata based on the specific category
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  
  if (slug === 'callgirls') {
    return {}; // Metadata handled by homepage
  }
  
  const categoryData = categories.find(c => c.id === slug);
  if (!categoryData) {
    return {};
  }

  return {
    title: `Best ${categoryData.name} Escorts Agra | Top Call Girls`,
    description: categoryData.description,
    keywords: [
      `best ${categoryData.name.toLowerCase()} agra`,
      `agra ${categoryData.name.toLowerCase()} escorts`,
      `vip ${categoryData.name.toLowerCase()} call girls`
    ],
    alternates: {
      canonical: `https://agracallgirly.com/category/${slug}`,
    },
  };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  
  // Protect against keyword cannibalization with the homepage
  if (slug === 'callgirls') {
    redirect('/');
  }

  const categoryData = categories.find(c => c.id === slug);
  if (!categoryData) {
    notFound();
  }

  // Generate specific FAQ Schema for this category
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
    <main style={{ minHeight: '100vh', background: 'var(--bg-color)', paddingTop: '80px' }}>
      {/* Inject FAQ Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      {/* Hero Section */}
      <section style={{ padding: '4rem 0', background: 'var(--surface-color)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h1 style={{ 
            fontSize: '3rem', 
            fontWeight: 800, 
            color: 'var(--text-primary)',
            marginBottom: '1rem',
            lineHeight: 1.2
          }}>
            Premium <span style={{ color: 'var(--accent-primary)' }}>{categoryData.name}</span> in Agra
          </h1>
          <p style={{ 
            fontSize: '1.2rem', 
            color: 'var(--text-secondary)',
            maxWidth: '800px',
            margin: '0 auto',
            lineHeight: 1.6
          }}>
            {categoryData.description}
          </p>
        </div>
      </section>

      {/* Models Grid */}
      <section style={{ padding: '5rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem', color: 'var(--text-primary)', marginBottom: '1rem' }}>
              Available Profiles
            </h2>
            <div style={{ width: '60px', height: '4px', background: 'var(--accent-primary)', margin: '0 auto', borderRadius: '2px' }}></div>
          </div>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
            gap: '2rem' 
          }}>
            {models.map(model => (
              <div 
                key={model.id}
                style={{
                  background: 'var(--surface-color)',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  border: '1px solid var(--border-color)',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <Link href={`/gallery/${model.slug}`} style={{ position: 'relative', width: '100%', aspectRatio: '3/4', display: 'block' }}>
                  <Image
                    src={model.images[0]}
                    alt={`${model.name} - ${categoryData.name} in Agra`}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    background: 'rgba(255,255,255,0.9)',
                    padding: '0.4rem 0.8rem',
                    borderRadius: '20px',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    color: 'var(--accent-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}>
                    <span style={{ width: '8px', height: '8px', background: '#4CAF50', borderRadius: '50%', display: 'inline-block' }}></span>
                    Available
                  </div>
                </Link>
                <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--text-primary)', margin: 0 }}>
                      {model.name}
                    </h3>
                    <span style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
                      {model.age} yrs
                    </span>
                  </div>
                  <p style={{ color: 'var(--text-secondary)', margin: '0 0 1.2rem 0', fontSize: '0.95rem' }}>
                    {model.measurements} • {model.height}
                  </p>
                  
                  <div style={{ display: 'flex', gap: '0.5rem', marginTop: 'auto' }}>
                    <Link 
                      href={`/gallery/${model.slug}`}
                      className="btn btn-secondary"
                      style={{
                        flex: 1,
                        padding: '0.6rem 0',
                        fontSize: '0.9rem'
                      }}
                    >
                      View Profile
                    </Link>
                    <a 
                      href={`https://wa.me/919876543210?text=Hello%20AgraCallGirly,%20I%20would%20like%20to%20book%20${model.name}%20from%20your%20website.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                      style={{
                        flex: 1,
                        padding: '0.6rem 0',
                        fontSize: '0.9rem'
                      }}
                    >
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FaqSection 
        title={`${categoryData.name} Escorts FAQs`}
        subtitle={`Learn more about booking our exclusive ${categoryData.name} in Agra.`}
        faqs={categoryData.faqs}
      />

      {/* Cross-linking Popular Searches */}
      <PopularSearches locationName="Agra" />
    </main>
  );
}
