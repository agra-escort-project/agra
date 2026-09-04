import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import ModelCard from '@/components/ModelCard';
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
    .filter((cat) => cat.id !== 'escorts')
    .map((cat) => ({
      slug: cat.id,
    }));
}

// Dynamically generate SEO metadata based on the specific category
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  
  if (slug === 'escorts') {
    return {}; // Metadata handled by homepage
  }
  
  const categoryData = categories.find(c => c.id === slug);
  if (!categoryData) {
    return {};
  }

  return {
    title: `Best ${categoryData.name} Escorts Agra | Top Escorts`,
    description: categoryData.description,
    keywords: [
      `best ${categoryData.name.toLowerCase()} agra`,
      `agra ${categoryData.name.toLowerCase()} escorts`,
      `vip ${categoryData.name.toLowerCase()} escorts`
    ],
    alternates: {
      canonical: `https://agraescort.com/category/${slug}`,
    },
  };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  
  // Protect against keyword cannibalization with the homepage
  if (slug === 'escorts') {
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
    <main className="min-h-screen bg-[var(--bg-color)] pt-20">
      {/* Inject FAQ Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      {/* Hero Section */}
      <section className="py-16 bg-[var(--surface-color)] border-b border-[var(--border-color)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[var(--text-primary)] mb-4 leading-tight">
            Premium <span className="text-[var(--accent-primary)]">{categoryData.name}</span> in Agra
          </h1>
          <p className="text-lg md:text-xl text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed">
            {categoryData.description}
          </p>
        </div>
      </section>

      {/* Models Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[22px] md:text-[32px] text-[var(--text-primary)] mb-4">
              Available Profiles
            </h2>
            <div className="w-16 h-1 bg-[var(--accent-primary)] mx-auto rounded"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {models.map(model => (
              <div key={model.id}><ModelCard model={model} imageHeight="350px" showButtons={true} /></div>
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
