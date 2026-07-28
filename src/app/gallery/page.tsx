import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { getAllModels } from '@/data/models';

export const metadata = {
  title: 'Agra Call Girls Photo Gallery | 100% Genuine Escorts',
  description: 'Browse the exclusive photo gallery of top-rated VIP call girls in Agra. 100% genuine, unfiltered photos of independent escorts available for outcalls.',
};

export default function GalleryPage() {
  const models = getAllModels();

  return (
    <>
      <main style={{ minHeight: '100vh', background: 'var(--bg-color)' }}>
        {/* Gallery Hero */}
        <section className="page-header" style={{ background: 'linear-gradient(135deg, var(--bg-color) 0%, #1a1a1a 100%)', borderBottom: '1px solid var(--border-color)' }}>
          <div className="container" style={{ textAlign: 'center' }}>
            <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>
              VIP Escort <span style={{ color: 'var(--accent-primary)' }}>Gallery</span>
            </h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '800px', margin: '0 auto' }}>
              We believe in 100% transparency. Browse our exclusive gallery of stunning independent call girls in Agra. What you see is exactly who will arrive at your door.
            </p>
          </div>
        </section>

        {/* Gallery Grid */}
        <section style={{ padding: '6rem 0' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '3rem' }}>
              {models.map((model) => (
                <div key={model.id} style={{ background: 'var(--surface-color)', borderRadius: '24px', overflow: 'hidden', boxShadow: 'var(--shadow-md)', transition: 'transform 0.3s ease', cursor: 'pointer' }}>
                  <Link href={`/gallery/${model.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <div style={{ position: 'relative', width: '100%', height: '400px' }}>
                      <Image 
                        src={model.images[0]} 
                        alt={`${model.name} - Premium Call Girl in Agra`}
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                      <div style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(4px)', color: '#fff', padding: '0.4rem 1rem', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 600, border: '1px solid rgba(255,255,255,0.2)' }}>
                        📸 {model.images.length} Photos
                      </div>
                    </div>
                    <div style={{ padding: '2rem' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                        <h2 style={{ fontSize: '1.8rem', margin: 0, color: 'var(--text-primary)' }}>{model.name}</h2>
                        <span style={{ background: 'rgba(233, 30, 99, 0.1)', color: 'var(--accent-primary)', padding: '0.4rem 1rem', borderRadius: '50px', fontSize: '0.9rem', fontWeight: 600 }}>{model.age} Yrs</span>
                      </div>
                      <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                        {model.shortBio}
                      </p>
                      
                      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                          <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '1px' }}>Measurements</span>
                          <span style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-primary)' }}>{model.measurements}</span>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                          <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '1px' }}>Height</span>
                          <span style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-primary)' }}>{model.height}</span>
                        </div>
                      </div>

                      <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1.5rem', textAlign: 'center' }}>
                        <span style={{ color: 'var(--accent-primary)', fontWeight: 600, fontSize: '1.1rem' }}>View Full Profile &rarr;</span>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
