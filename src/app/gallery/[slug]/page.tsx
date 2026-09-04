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
    title: `${model.name} - ${model.age} Yr Old VIP Call Girl in Agra | Real Photos`,
    description: `View the official profile and unedited photos of ${model.name}, a premium ${model.age}-year-old Call Girl independent escort in Agra. Book ${model.name} for outcalls today.`,
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
        "item": "https://agraescort.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Gallery",
        "item": "https://agraescort.com/gallery"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": model.name,
        "item": `https://agraescort.com/gallery/${slug}`
      }
    ]
  };

  const formatName = (name: string) => {
    if (name.includes('(VIP)')) {
      const parts = name.split('(VIP)');
      return <>{parts[0].trim()} <span className='text-[var(--accent-primary)]'>(VIP)</span></>;
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

      <main className="min-h-screen bg-[var(--bg-color)]">
        
        {/* Breadcrumb Navigation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
          <div className="flex gap-2 text-[var(--text-secondary)] text-sm items-center">
            <Link href="/" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)]">Home</Link>
            <span>›</span>
            <Link href="/gallery" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)]">Gallery</Link>
            <span>›</span>
            <span className="text-[var(--text-primary)] font-semibold">{model.name}</span>
          </div>
        </div>

        {/* Profile Layout section */}
        <section className="py-8 pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Title Header */}
            <div className="flex items-center gap-4 mb-8 flex-wrap">
              <h1 className="text-4xl md:text-5xl m-0 text-[var(--text-primary)]">Meet {model.name} <span className="block text-2xl text-[var(--accent-primary)] mt-2">Premium Call Girl Escort in {model.location}</span></h1>
              <span className="bg-green-500 text-white px-4 py-2 rounded-full text-base font-bold flex items-center gap-2">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                Verified
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              
              {/* LEFT COLUMN: Main Content */}
              <div className="lg:col-span-2 flex flex-col gap-16">
                
                {/* Primary Image */}
                <div className="relative w-full h-[500px] md:h-[700px] rounded-3xl overflow-hidden shadow-lg">
                  <Image src={model.images[0]} alt={`${model.name} primary photo - VIP Agra Escort`} fill sizes="100vw" className="object-cover" priority />
                </div>

                {/* About Section */}
                <div>
                  <h2 className="text-[22px] md:text-[32px] mb-6 text-[var(--text-primary)]">About {model.name}</h2>
                  <p className="text-lg text-[var(--text-secondary)] leading-relaxed m-0">
                    {model.fullBio}
                  </p>
                </div>

                {/* Services Grid */}
                <div>
                  <h2 className="text-[22px] md:text-[32px] mb-6 text-[var(--text-primary)]">Services Provided</h2>
                  <div className="flex flex-wrap gap-4">
                    {model.services.map((service, index) => (
                      <span key={index} className="bg-[rgba(233,30,99,0.1)] text-[var(--accent-primary)] px-6 py-3 rounded-full text-base font-semibold border border-[rgba(233,30,99,0.2)]">
                        ✓ {service}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Photo Gallery Grid */}
                {model.images.length > 1 && (
                  <div>
                    <h2 className="text-[22px] md:text-[32px] mb-6 text-[var(--text-primary)]">Photo Gallery</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {model.images.slice(1).map((imgUrl, index) => (
                        <div key={index} className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-md">
                          <Image src={imgUrl} alt={`${model.name} photo ${index + 2}`} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover" />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Reviews Section */}
                <div>
                  <h2 className="text-[22px] md:text-[32px] mb-6 text-[var(--text-primary)]">Client Reviews</h2>
                  <div className="flex flex-col gap-6">
                    {model.reviews.map((review, index) => (
                      <div key={index} className="bg-[var(--background-start)] p-8 rounded-2xl border border-[var(--border-color)]">
                        <div className="flex justify-between mb-4 items-center">
                          <span className="font-semibold text-white text-lg">{review.author}</span>
                          <div className="flex gap-1">
                            {[...Array(review.rating)].map((_, i) => (
                              <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="#FFD700" stroke="#FFD700" strokeWidth="1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                            ))}
                          </div>
                        </div>
                        <p className="text-[var(--text-secondary)] text-lg m-0 italic leading-relaxed">&quot;{review.text}&quot;</p>
                        <span className="block text-sm text-white/40 mt-4">Posted on {review.date}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* RIGHT COLUMN: Sticky Sidebar for Conversions */}
              <div className="sticky top-8 h-fit lg:col-span-1">
                <div className="bg-[var(--surface-color)] p-8 rounded-3xl border border-[var(--border-color)] shadow-xl">
                  
                  {/* Trust Signals */}
                  <div className="flex flex-col gap-4 mb-8 p-6 bg-white/5 rounded-xl">
                    <div className="flex items-center gap-3 text-[var(--text-secondary)]">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4CAF50" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                      <span className="text-[0.95rem]">100% Genuine Photos</span>
                    </div>
                    <div className="flex items-center gap-3 text-[var(--text-secondary)]">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4CAF50" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                      <span className="text-[0.95rem]">No Advance Payment</span>
                    </div>
                    <div className="flex items-center gap-3 text-[var(--text-secondary)]">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4CAF50" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                      <span className="text-[0.95rem]">Available 24/7</span>
                    </div>
                  </div>

                  <h3 className="text-xl mb-6 border-b border-[var(--border-color)] pb-3 text-[var(--text-primary)]">Model Stats</h3>

                  {/* Stats List */}
                  <ul className="list-none p-0 m-0 flex flex-col gap-4">
                    <li className="flex justify-between">
                      <span className="text-[var(--text-secondary)]">Age</span>
                      <span className="font-semibold text-[var(--text-primary)]">{model.age} Years</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-[var(--text-secondary)]">Height</span>
                      <span className="font-semibold text-[var(--text-primary)]">{model.height}</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-[var(--text-secondary)]">Figure</span>
                      <span className="font-semibold text-[var(--text-primary)]">{model.measurements}</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-[var(--text-secondary)]">Location</span>
                      <span className="font-semibold text-[var(--text-primary)]">{model.location}</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-[var(--text-secondary)]">Languages</span>
                      <span className="font-semibold text-[var(--text-primary)] text-right">{model.languages.join(', ')}</span>
                    </li>
                  </ul>

                  {/* CTA */}
                  <div className="mt-8 pt-8 border-t border-[var(--border-color)] text-center">
                    <h4 className="text-xl font-bold mb-4 text-[var(--text-primary)]">
                      Book <span className="text-[var(--accent-primary)]">{formatName(model.name)}</span> Now via
                    </h4>
                    <div className="flex gap-3">
                    {/* Call Now */}
                    <a href="tel:+917409040180" className="flex-1 flex flex-col items-center p-4 bg-gradient-to-br from-[var(--accent-primary)] to-[#ff4081] rounded-2xl text-white no-underline shadow-[0_8px_20px_rgba(233,30,99,0.3)] hover:scale-105 transition-transform duration-300">
                       <svg viewBox="0 0 24 24" fill="currentColor" className="w-[26px] h-[26px] mb-2">
                          <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                       </svg>
                       <span className="text-sm font-bold tracking-wide">Call</span>
                    </a>
                    
                    {/* WhatsApp */}
                    <a href={`https://wa.me/917409040180?text=Hello%20team,%20I%20am%20interested%20in%20booking%20${encodeURIComponent(model.name)}.%20Could%20you%20please%20share%20her%20current%20availability%20and%20rates?`} target="_blank" rel="noopener noreferrer" className="flex-1 flex flex-col items-center p-4 bg-white rounded-2xl border border-[rgba(37,211,102,0.3)] shadow-[0_8px_20px_rgba(37,211,102,0.15)] text-[#128C7E] no-underline hover:scale-105 transition-transform duration-300">
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[30px] h-[30px] mb-1">
                          <path d="M20.52 3.449C18.24 1.17 15.24 0 12 0 5.383 0 0 5.383 0 12c0 2.115.553 4.184 1.6 6l-1.6 5.85 5.986-1.569c1.77.95 3.737 1.45 5.766 1.45h.005c6.617 0 12-5.383 12-12 0-3.208-1.248-6.223-3.52-8.497z" fill="#25D366"/>
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" fill="#FFF"/>
                      </svg>
                      <span className="text-sm font-bold tracking-wide">WhatsApp</span>
                    </a>

                    {/* Email */}
                    <a href="mailto:booking@agraescort.com" className="flex-1 flex flex-col items-center p-4 bg-white rounded-2xl border border-black/10 shadow-[0_8px_20px_rgba(0,0,0,0.05)] text-[#555] no-underline hover:scale-105 transition-transform duration-300">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-[26px] h-[26px] mb-2">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                      </svg>
                      <span className="text-sm font-bold tracking-wide">Email</span>
                    </a>
                  </div>
                </div>

              {/* Internal SEO Links */}
              <div className="mt-12 pt-8 border-t border-[var(--border-color)]">
                <h3 className="text-xl mb-4 text-[var(--text-primary)]">Explore Similar Profiles</h3>
                <div className="flex flex-wrap gap-3">
                  <Link href={`/category/escorts`} className="inline-block px-5 py-2.5 bg-[var(--surface-color)] border border-[var(--border-color)] rounded-full text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--text-primary)] transition-colors text-sm">
                    View all Call Girl Escorts
                  </Link>
                  <Link href={`/best-escorts-${model.location.toLowerCase().replace(/\s+/g, '-')}-agra`} className="inline-block px-5 py-2.5 bg-[var(--surface-color)] border border-[var(--border-color)] rounded-full text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--text-primary)] transition-colors text-sm">
                    Call Girls in {model.location}
                  </Link>
                  <Link href="/" className="inline-block px-5 py-2.5 bg-[var(--surface-color)] border border-[var(--border-color)] rounded-full text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--text-primary)] transition-colors text-sm">
                    Top Escorts in Agra
                  </Link>
                </div>
              </div>
              </div>
            </div>
            </div>
          </div>
        </section>

        {/* Next/Previous Model Navigation - Premium UI */}
        <section className="py-24 bg-[var(--surface-color)] border-t border-[var(--border-color)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center mb-16">
              <span className="text-[var(--accent-primary)] font-bold tracking-widest uppercase text-sm">Keep Exploring</span>
              <h3 className="text-4xl text-[var(--text-primary)] mt-2">View More Profiles</h3>
            </div>

            <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-12">
              
              {prevModel && (
                <Link href={`/gallery/${prevModel.slug}`} className="flex no-underline bg-white rounded-3xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.04)] transition-all duration-400 ease-in-out hover:shadow-[0_30px_60px_rgba(0,0,0,0.08)] min-h-[280px]">
                  <div className="relative w-2/5 min-h-full shrink-0">
                    <Image src={prevModel.images[0]} alt={prevModel.name} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
                  </div>
                  <div className="p-10 grow flex flex-col justify-center items-start">
                    <span className="text-sm text-[#777] uppercase tracking-widest font-bold mb-6">&larr; Previous</span>
                    <h4 className="text-4xl m-0 text-[#111] font-extrabold mb-3 tracking-tight">
                      {formatName(prevModel.name)}
                    </h4>
                    <p className="text-[#666] text-lg m-0 mb-8 leading-relaxed line-clamp-2">{prevModel.shortBio}</p>
                    <span className="text-[var(--accent-primary)] text-lg font-bold">View Profile &rarr;</span>
                  </div>
                </Link>
              )}

              {nextModel && (
                <Link href={`/gallery/${nextModel.slug}`} className="flex flex-row-reverse no-underline bg-white rounded-3xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.04)] transition-all duration-400 ease-in-out hover:shadow-[0_30px_60px_rgba(0,0,0,0.08)] min-h-[280px]">
                  <div className="relative w-2/5 min-h-full shrink-0">
                    <Image src={nextModel.images[0]} alt={nextModel.name} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
                  </div>
                  <div className="p-10 grow flex flex-col justify-center items-start text-left">
                    <span className="text-sm text-[#777] uppercase tracking-widest font-bold mb-6">Next &rarr;</span>
                    <h4 className="text-4xl m-0 text-[#111] font-extrabold mb-3 tracking-tight">
                      {formatName(nextModel.name)}
                    </h4>
                    <p className="text-[#666] text-lg m-0 mb-8 leading-relaxed line-clamp-2">{nextModel.shortBio}</p>
                    <span className="text-[var(--accent-primary)] text-lg font-bold">View Profile &rarr;</span>
                  </div>
                </Link>
              )}
              
            </div>

            {/* Mobile Only Navigation Card */}
            <div className="flex md:hidden justify-between items-center bg-white p-4 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-[var(--border-color)] w-full">
              
              <div className="flex-1 flex justify-start min-w-0">
                {prevModel && (
                  <Link href={`/gallery/${prevModel.slug}`} className="flex items-center gap-3 no-underline text-left min-w-0">
                    <div className="w-12 h-12 rounded-full overflow-hidden relative shrink-0 shadow-[0_4px_10px_rgba(0,0,0,0.1)]">
                      <Image src={prevModel.images[0]} alt={prevModel.name} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-xs text-[var(--accent-primary)] uppercase tracking-wider font-bold block mb-1">&larr; Prev</span>
                      <strong className="text-base text-[var(--text-primary)] block truncate">{formatName(prevModel.name)}</strong>
                    </div>
                  </Link>
                )}
              </div>

              {(prevModel && nextModel) && (
                <div className="w-px h-10 bg-[var(--border-color)] mx-2 shrink-0" />
              )}

              <div className="flex-1 flex justify-end min-w-0">
                {nextModel && (
                  <Link href={`/gallery/${nextModel.slug}`} className="flex items-center gap-3 no-underline text-right flex-row-reverse min-w-0">
                    <div className="w-12 h-12 rounded-full overflow-hidden relative shrink-0 shadow-[0_4px_10px_rgba(0,0,0,0.1)]">
                      <Image src={nextModel.images[0]} alt={nextModel.name} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-xs text-[var(--accent-primary)] uppercase tracking-wider font-bold block mb-1">Next &rarr;</span>
                      <strong className="text-base text-[var(--text-primary)] block truncate">{formatName(nextModel.name)}</strong>
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
