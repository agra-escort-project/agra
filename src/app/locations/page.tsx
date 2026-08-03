import type { Metadata } from 'next';
import Link from 'next/link';
import { locations } from '@/data/locations';
import PopularSearches from '@/components/PopularSearches';

export const metadata: Metadata = {
  title: 'All Locations | Agra Call Girls & Premium Escorts',
  description: 'View all areas served by our premium escort agency in Agra. We provide VIP companions, independent escorts, and elite models across all top Agra neighborhoods.',
  alternates: {
    canonical: 'https://agracallgirly.com/locations',
  },
};

export default function LocationsHubPage() {
  // Group locations by category
  const groupedLocations = locations.reduce((acc, loc) => {
    if (!acc[loc.category]) {
      acc[loc.category] = [];
    }
    acc[loc.category].push(loc);
    return acc;
  }, {} as Record<string, typeof locations>);

  return (
    <>
      <main>
        <section className="hero">
          <div className="container">
            <h1 className="hero-title">Areas We Serve in Agra</h1>
            <p className="hero-subtitle">
              We provide 100% discreet, premium companionship across all major neighborhoods, corporate districts, and luxury hotels in Agra.
            </p>
          </div>
        </section>

        <section style={{ padding: '2rem 0 5rem' }}>
          <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
            {Object.entries(groupedLocations).map(([category, locs]) => (
              <div key={category} style={{ marginBottom: '4rem' }}>
                <h2 style={{ 
                  fontSize: '1.8rem', 
                  color: 'var(--accent-primary)', 
                  borderBottom: '2px solid var(--border-color)',
                  paddingBottom: '0.5rem',
                  marginBottom: '2rem'
                }}>
                  {category}
                </h2>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
                  gap: '1.5rem'
                }}>
                  {locs.map(loc => (
                    <Link 
                      key={loc.id} 
                      href={`/${loc.slug}`}
                      style={{
                        display: 'block',
                        padding: '1.5rem',
                        background: 'var(--surface-color)',
                        borderRadius: '12px',
                        border: '1px solid var(--border-color)',
                        textDecoration: 'none',
                        color: 'var(--text-primary)',
                        transition: 'all 0.3s ease',
                        boxShadow: 'var(--shadow-sm)'
                      }}
                      className="location-card"
                    >
                      <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{loc.name}</h3>
                      <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', margin: 0 }}>
                        {loc.targetDemographic}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Popular Searches */}
        <PopularSearches locationName="Agra" />
      </main>
    </>
  );
}
