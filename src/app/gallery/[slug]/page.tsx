import { getModelBySlug, getAllModels } from '@/data/models';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';

export async function generateStaticParams() {
  const models = getAllModels();
  return models.map((model) => ({
    slug: model.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const model = getModelBySlug(slug);
  
  if (!model) {
    return { title: 'Not Found' };
  }

  return {
    title: `Best Agra Escort ${model.name} | Top VIP Profile`,
    description: `View the official profile and unedited photos of ${model.name}, a premium independent escort in Agra. Book ${model.name} for outcalls today.`,
  };
}

export default async function ProfilePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const allModels = getAllModels();
  const currentIndex = allModels.findIndex(m => m.slug === slug);
  const model = allModels[currentIndex];

  if (!model) {
    notFound();
  }

  const prevModel = currentIndex > 0 ? allModels[currentIndex - 1] : null;
  const nextModel = currentIndex < allModels.length - 1 ? allModels[currentIndex + 1] : null;

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": `${model.name} - Agra Escort`,
    "description": model.shortBio,
    "image": model.images,
    "gender": "Female",
    "nationality": "Indian",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": model.location,
      "addressRegion": "Uttar Pradesh",
      "addressCountry": "IN"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": model.reviews.length
    },
    "review": model.reviews.map(r => ({
      "@type": "Review",
      "author": { "@type": "Person", "name": r.author },
      "reviewRating": { "@type": "Rating", "ratingValue": r.rating.toString() },
      "reviewBody": r.text,
      "datePublished": r.date
    }))
  };

  const imageGallerySchema = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    "name": `${model.name}'s Photo Gallery`,
    "description": `Exclusive, 100% verified photos of ${model.name} in Agra.`,
    "associatedMedia": model.images.map(imgUrl => ({
      "@type": "ImageObject",
      "contentUrl": imgUrl,
      "name": `Photo of ${model.name}, Agra Escort`,
      "description": `Verified photo of our independent model ${model.name}.`
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
        "item": "https://agracallgirly.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Gallery",
        "item": "https://agracallgirly.com/gallery"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": model.name,
        "item": `https://agracallgirly.com/gallery/${slug}`
      }
    ]
  };

  const formatName = (name: string) => {
    if (name.includes('(VIP)')) {
      const parts = name.split('(VIP)');
      return <>{parts[0].trim()} <span style={{ color: 'var(--accent-primary)' }}>(VIP)</span></>;
    }
    return name;
  };

  return (
    <>
      <Script id="person-schema" type="application/ld+json">
        {JSON.stringify(personSchema)}
      </Script>
      <Script id="image-gallery-schema" type="application/ld+json">
        {JSON.stringify(imageGallerySchema)}
      </Script>
      <Script id="breadcrumb-schema" type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </Script>

      <main style={{ minHeight: '100vh', background: 'var(--bg-color)' }}>
        
        {/* Breadcrumb Navigation */}
        <div className="container" style={{ paddingTop: '2rem', paddingBottom: '1rem' }}>
          <div style={{ display: 'flex', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem', alignItems: 'center' }}>
            <Link href="/" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Home</Link>
            <span>›</span>
            <Link href="/gallery" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Gallery</Link>
            <span>›</span>
            <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{model.name}</span>
          </div>
        </div>

        {/* Profile Layout section */}
        <section style={{ padding: '2rem 0 6rem 0' }}>
          <div className="container">
            
            {/* Title Header */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
              <h1 style={{ fontSize: '3.5rem', margin: 0, color: 'var(--text-primary)' }}>{model.name}</h1>
              <span style={{ background: '#4CAF50', color: 'white', padding: '0.4rem 1rem', borderRadius: '50px', fontSize: '1rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                Verified
              </span>
            </div>

            <div className="profile-grid">
              
              {/* LEFT COLUMN: Main Content */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
                
                {/* Primary Image */}
                <div style={{ position: 'relative', width: '100%', height: '700px', borderRadius: '24px', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
                  <Image src={model.images[0]} alt={`${model.name} primary photo - VIP Agra Escort`} fill sizes="100vw" style={{ objectFit: 'cover' }} priority />
                </div>

                {/* About Section */}
                <div>
                  <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>About {model.name}</h2>
                  <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: 1.8, margin: 0 }}>
                    {model.fullBio}
                  </p>
                </div>

                {/* Services Grid */}
                <div>
                  <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>Services Provided</h2>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                    {model.services.map((service, index) => (
                      <span key={index} style={{ background: 'rgba(233, 30, 99, 0.1)', color: 'var(--accent-primary)', padding: '0.8rem 1.5rem', borderRadius: '50px', fontSize: '1rem', fontWeight: 600, border: '1px solid rgba(233, 30, 99, 0.2)' }}>
                        ✓ {service}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Photo Gallery Grid */}
                {model.images.length > 1 && (
                  <div>
                    <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>Photo Gallery</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
                      {model.images.slice(1).map((imgUrl, index) => (
                        <div key={index} style={{ position: 'relative', width: '100%', height: '400px', borderRadius: '16px', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
                          <Image src={imgUrl} alt={`${model.name} photo ${index + 2}`} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" style={{ objectFit: 'cover' }} />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Reviews Section */}
                <div>
                  <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>Client Reviews</h2>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    {model.reviews.map((review, index) => (
                      <div key={index} style={{ background: 'var(--background-start)', padding: '2rem', borderRadius: '16px', border: '1px solid var(--border-color)' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', alignItems: 'center' }}>
                          <span style={{ fontWeight: 600, color: '#fff', fontSize: '1.1rem' }}>{review.author}</span>
                          <div style={{ display: 'flex', gap: '0.2rem' }}>
                            {[...Array(review.rating)].map((_, i) => (
                              <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="#FFD700" stroke="#FFD700" strokeWidth="1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                            ))}
                          </div>
                        </div>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', margin: 0, fontStyle: 'italic', lineHeight: 1.6 }}>&quot;{review.text}&quot;</p>
                        <span style={{ display: 'block', fontSize: '0.85rem', color: 'rgba(255,255,255,0.4)', marginTop: '1rem' }}>Posted on {review.date}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* RIGHT COLUMN: Sticky Sidebar for Conversions */}
              <div style={{ position: 'sticky', top: '2rem' }}>
                <div style={{ background: 'var(--surface-color)', padding: '2rem', borderRadius: '24px', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-lg)' }}>
                  
                  {/* Trust Signals */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem', padding: '1.5rem', background: 'rgba(255,255,255,0.02)', borderRadius: '12px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: 'var(--text-secondary)' }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4CAF50" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                      <span style={{ fontSize: '0.95rem' }}>100% Genuine Photos</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: 'var(--text-secondary)' }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4CAF50" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                      <span style={{ fontSize: '0.95rem' }}>No Advance Payment</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: 'var(--text-secondary)' }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4CAF50" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                      <span style={{ fontSize: '0.95rem' }}>Available 24/7</span>
                    </div>
                  </div>

                  <h3 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.8rem', color: 'var(--text-primary)' }}>Model Stats</h3>

                  {/* Stats List */}
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <li style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: 'var(--text-secondary)' }}>Age</span>
                      <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{model.age} Years</span>
                    </li>
                    <li style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: 'var(--text-secondary)' }}>Height</span>
                      <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{model.height}</span>
                    </li>
                    <li style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: 'var(--text-secondary)' }}>Figure</span>
                      <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{model.measurements}</span>
                    </li>
                    <li style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: 'var(--text-secondary)' }}>Location</span>
                      <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{model.location}</span>
                    </li>
                    <li style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: 'var(--text-secondary)' }}>Languages</span>
                      <span style={{ fontWeight: 600, color: 'var(--text-primary)', textAlign: 'right' }}>{model.languages.join(', ')}</span>
                    </li>
                  </ul>

                  {/* CTA */}
                  <div style={{ marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid var(--border-color)', textAlign: 'center' }}>
                    <h4 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>
                      Book <span style={{ color: 'var(--accent-primary)' }}>{formatName(model.name)}</span> Now via
                    </h4>
                    <div style={{ display: 'flex', gap: '0.8rem' }}>
                    {/* Call Now */}
                    <a href="tel:+919876543210" style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '1rem 0.5rem', background: 'linear-gradient(135deg, var(--accent-primary), #ff4081)', borderRadius: '16px', color: '#fff', textDecoration: 'none', boxShadow: '0 8px 20px rgba(233, 30, 99, 0.3)', transition: 'transform 0.3s ease' }} className="premium-contact-card">
                       <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: '26px', height: '26px', marginBottom: '0.5rem' }}>
                          <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                       </svg>
                       <span style={{ fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.5px' }}>Call</span>
                    </a>
                    
                    {/* WhatsApp */}
                    <a href={`https://wa.me/919876543210?text=Hello%20team,%20I%20am%20interested%20in%20booking%20${encodeURIComponent(model.name)}.%20Could%20you%20please%20share%20her%20current%20availability%20and%20rates?`} target="_blank" rel="noopener noreferrer" style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '1rem 0.5rem', background: '#fff', borderRadius: '16px', border: '1px solid rgba(37, 211, 102, 0.3)', boxShadow: '0 8px 20px rgba(37, 211, 102, 0.15)', color: '#128C7E', textDecoration: 'none', transition: 'transform 0.3s ease' }} className="premium-contact-card">
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '30px', height: '30px', marginBottom: '0.3rem' }}>
                          <path d="M20.52 3.449C18.24 1.17 15.24 0 12 0 5.383 0 0 5.383 0 12c0 2.115.553 4.184 1.6 6l-1.6 5.85 5.986-1.569c1.77.95 3.737 1.45 5.766 1.45h.005c6.617 0 12-5.383 12-12 0-3.208-1.248-6.223-3.52-8.497z" fill="#25D366"/>
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" fill="#FFF"/>
                      </svg>
                      <span style={{ fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.5px' }}>WhatsApp</span>
                    </a>

                    {/* Email */}
                    <a href="mailto:booking@agracallgirls.com" style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '1rem 0.5rem', background: '#fff', borderRadius: '16px', border: '1px solid rgba(0,0,0,0.1)', boxShadow: '0 8px 20px rgba(0,0,0,0.05)', color: '#555', textDecoration: 'none', transition: 'transform 0.3s ease' }} className="premium-contact-card">
                      <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: '26px', height: '26px', marginBottom: '0.5rem' }}>
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                      </svg>
                      <span style={{ fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.5px' }}>Email</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
        </section>

        {/* Next/Previous Model Navigation - Premium UI */}
        <section style={{ padding: '6rem 0', background: 'var(--surface-color)', borderTop: '1px solid var(--border-color)' }}>
          <div className="container">
            
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <span style={{ color: 'var(--accent-primary)', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.85rem' }}>Keep Exploring</span>
              <h3 style={{ fontSize: '2.5rem', color: 'var(--text-primary)', margin: '0.5rem 0 0 0' }}>View More Profiles</h3>
            </div>

            <div className="nav-desktop-only" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '3rem' }}>
              
              {prevModel && (
                <Link href={`/gallery/${prevModel.slug}`} className="nav-card" style={{ display: 'flex', textDecoration: 'none', background: '#fff', borderRadius: '32px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.04)', transition: 'all 0.4s ease', minHeight: '280px' }}>
                  <div style={{ position: 'relative', width: '40%', minHeight: '100%', flexShrink: 0 }}>
                    <Image src={prevModel.images[0]} alt={prevModel.name} fill sizes="(max-width: 768px) 100vw, 33vw" style={{ objectFit: 'cover' }} />
                  </div>
                  <div style={{ padding: '3rem 2.5rem', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start' }}>
                    <span style={{ fontSize: '0.85rem', color: '#777', textTransform: 'uppercase', letterSpacing: '3px', fontWeight: 700, marginBottom: '1.5rem' }}>&larr; Previous</span>
                    <h4 style={{ fontSize: '2.4rem', margin: 0, color: '#111', fontWeight: 800, marginBottom: '0.8rem', letterSpacing: '-1px' }}>
                      {formatName(prevModel.name)}
                    </h4>
                    <p style={{ color: '#666', fontSize: '1.1rem', margin: 0, marginBottom: '2.5rem', lineHeight: 1.5 }}>{prevModel.shortBio}</p>
                    <span style={{ color: 'var(--accent-primary)', fontSize: '1.05rem', fontWeight: 700 }}>View Profile &rarr;</span>
                  </div>
                </Link>
              )}

              {nextModel && (
                <Link href={`/gallery/${nextModel.slug}`} className="nav-card" style={{ display: 'flex', flexDirection: 'row-reverse', textDecoration: 'none', background: '#fff', borderRadius: '32px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.04)', transition: 'all 0.4s ease', minHeight: '280px' }}>
                  <div style={{ position: 'relative', width: '40%', minHeight: '100%', flexShrink: 0 }}>
                    <Image src={nextModel.images[0]} alt={nextModel.name} fill sizes="(max-width: 768px) 100vw, 33vw" style={{ objectFit: 'cover' }} />
                  </div>
                  <div style={{ padding: '3rem 2.5rem', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', textAlign: 'left' }}>
                    <span style={{ fontSize: '0.85rem', color: '#777', textTransform: 'uppercase', letterSpacing: '3px', fontWeight: 700, marginBottom: '1.5rem' }}>Next &rarr;</span>
                    <h4 style={{ fontSize: '2.4rem', margin: 0, color: '#111', fontWeight: 800, marginBottom: '0.8rem', letterSpacing: '-1px' }}>
                      {formatName(nextModel.name)}
                    </h4>
                    <p style={{ color: '#666', fontSize: '1.1rem', margin: 0, marginBottom: '2.5rem', lineHeight: 1.5 }}>{nextModel.shortBio}</p>
                    <span style={{ color: 'var(--accent-primary)', fontSize: '1.05rem', fontWeight: 700 }}>View Profile &rarr;</span>
                  </div>
                </Link>
              )}
              
            </div>

            {/* Mobile Only Navigation Card */}
            <div className="nav-mobile-only" style={{ justifyContent: 'space-between', alignItems: 'center', background: '#fff', padding: '1rem', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', border: '1px solid var(--border-color)', width: '100%' }}>
              
              <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-start', minWidth: 0 }}>
                {prevModel && (
                  <Link href={`/gallery/${prevModel.slug}`} style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', textDecoration: 'none', textAlign: 'left', minWidth: 0 }}>
                    <div style={{ width: '48px', height: '48px', borderRadius: '50%', overflow: 'hidden', position: 'relative', flexShrink: 0, boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}>
                      <Image src={prevModel.images[0]} alt={prevModel.name} fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
                    </div>
                    <div style={{ minWidth: 0 }}>
                      <span style={{ fontSize: '0.7rem', color: 'var(--accent-primary)', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 700, display: 'block', marginBottom: '0.2rem' }}>&larr; Prev</span>
                      <strong style={{ fontSize: '1rem', color: 'var(--text-primary)', display: 'block', whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>{formatName(prevModel.name)}</strong>
                    </div>
                  </Link>
                )}
              </div>

              {(prevModel && nextModel) && (
                <div style={{ width: '1px', height: '40px', background: 'var(--border-color)', margin: '0 0.5rem', flexShrink: 0 }} />
              )}

              <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end', minWidth: 0 }}>
                {nextModel && (
                  <Link href={`/gallery/${nextModel.slug}`} style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', textDecoration: 'none', textAlign: 'right', flexDirection: 'row-reverse', minWidth: 0 }}>
                    <div style={{ width: '48px', height: '48px', borderRadius: '50%', overflow: 'hidden', position: 'relative', flexShrink: 0, boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}>
                      <Image src={nextModel.images[0]} alt={nextModel.name} fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
                    </div>
                    <div style={{ minWidth: 0 }}>
                      <span style={{ fontSize: '0.7rem', color: 'var(--accent-primary)', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 700, display: 'block', marginBottom: '0.2rem' }}>Next &rarr;</span>
                      <strong style={{ fontSize: '1rem', color: 'var(--text-primary)', display: 'block', whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>{formatName(nextModel.name)}</strong>
                    </div>
                  </Link>
                )}
              </div>
              
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
