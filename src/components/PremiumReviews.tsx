import React from 'react';
import Script from 'next/script';

export default function PremiumReviews({ locationName }: { locationName?: string }) {
  const displayLocation = locationName || "Agra";
  
  // Base reviews for general Agra pages
  const baseReviews = [
    {
      id: 1,
      author: "Rahul S.",
      rating: 5,
      title: "Incredible Experience",
      body: "The discretion and professionalism shown by the agency was top-notch. The model was exactly as pictured, very polite, and provided an unforgettable GFE. Highly recommended for anyone visiting Agra.",
      datePublished: "2023-11-15"
    },
    {
      id: 2,
      author: "Vikram M.",
      rating: 5,
      title: "Best Escort Agency in Agra",
      body: "I was skeptical about booking online, but the cash-on-arrival policy gave me peace of mind. The Russian model I booked was stunning and extremely cooperative. Will definitely use their services again.",
      datePublished: "2023-12-02"
    },
    {
      id: 3,
      author: "Anonymous Client",
      rating: 5,
      title: "Highly Discreet and Safe",
      body: "Booked a Bhabhi escort for a hotel outcall. She arrived on time, was very hygienic, and the entire process was seamless and strictly confidential. Perfect 5-star service.",
      datePublished: "2024-01-20"
    }
  ];

  // If a location is provided, generate a unique set of reviews for that specific location
  const getDynamicReviews = () => {
    if (!locationName) return baseReviews;
    
    // Simple deterministic hash based on location name to always pick the same variants for the same location
    const hash = locationName.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    
    const names1 = ["Rahul", "Amit", "Karan", "Suresh", "Manish"];
    const names2 = ["Vikram", "Deepak", "Rohan", "Sanjay", "Anil"];
    const names3 = ["Anonymous Client", "Verified Guest", "Private Client", "Business Traveler"];
    
    const body1_options = [
      `The discretion and professionalism shown by the agency was top-notch. The model was exactly as pictured and provided an unforgettable GFE right here in ${displayLocation}. Highly recommended!`,
      `I had an amazing time with the model I booked in ${displayLocation}. She was polite, stunning, and made me feel completely at ease. Will definitely book again.`,
      `Outstanding experience from start to finish. The booking process was smooth and the companion who visited my hotel in ${displayLocation} was breathtaking.`
    ];
    
    const body2_options = [
      `I was skeptical about booking online, but the cash-on-arrival policy gave me peace of mind. The model arriving at my place in ${displayLocation} was extremely cooperative.`,
      `Best escort service I've used in ${displayLocation}. No advance payments, no fake pictures. The girl was gorgeous and we had a fantastic evening together.`,
      `If you need genuine companionship in ${displayLocation}, this is the agency to trust. The VIP model was elegant and exactly what I was looking for.`
    ];

    const body3_options = [
      `Booked a premium escort for an outcall in ${displayLocation}. She arrived on time, was very hygienic, and the entire process was strictly confidential. Perfect 5-star service.`,
      `Very discreet and safe service in ${displayLocation}. The companion was friendly, beautiful, and made my weekend incredibly special.`,
      `Top-tier service! The outcall to my residence in ${displayLocation} was handled with absolute professionalism and privacy.`
    ];

    return [
      {
        id: 1,
        author: `${names1[hash % names1.length]} ${String.fromCharCode(65 + (hash % 26))}.`,
        rating: 5,
        title: hash % 2 === 0 ? `Incredible Experience in ${displayLocation}` : `Unforgettable Time in ${displayLocation}`,
        body: body1_options[hash % body1_options.length],
        datePublished: `2023-${(hash % 12) + 1}-15`
      },
      {
        id: 2,
        author: `${names2[(hash + 1) % names2.length]} ${String.fromCharCode(65 + ((hash + 1) % 26))}.`,
        rating: 5,
        title: `Best Escort Agency in ${displayLocation}`,
        body: body2_options[(hash + 1) % body2_options.length],
        datePublished: `2024-01-02`
      },
      {
        id: 3,
        author: names3[(hash + 2) % names3.length],
        rating: 5,
        title: "Highly Discreet and Safe",
        body: body3_options[(hash + 2) % body3_options.length],
        datePublished: `2024-02-20`
      }
    ];
  };

  const currentReviews = getDynamicReviews();

  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `Premium ${displayLocation} Escorts`,
    "image": "https://agraescort.com/logo.png",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "128",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": currentReviews.map(review => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": review.author
      },
      "datePublished": review.datePublished,
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": review.rating,
        "bestRating": "5",
        "worstRating": "1"
      },
      "name": review.title,
      "reviewBody": review.body
    }))
  };

  return (
    <section className="py-[60px] lg:py-[100px] bg-white border-t border-[var(--border-color)]">
      <Script id="reviews-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <span className="text-[var(--accent-primary)] font-semibold tracking-[2px] uppercase text-[12px] md:text-[14px] block mb-2 md:mb-3">CLIENT TESTIMONIALS</span>
          <h2 className="text-[22px] md:text-[32px] font-semibold mb-3 md:mb-4 text-[var(--text-primary)] tracking-tight">
            What Our VIP Clients Say
          </h2>
          <p className="text-[16px] md:text-[18px] font-normal text-[#666] max-w-[800px] mx-auto leading-relaxed">
            Real experiences from gentlemen who trust us for ultimate discretion and premium companionship in {displayLocation}.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {currentReviews.map((review) => (
            <div key={review.id} className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <h3 className="text-[18px] font-bold text-gray-900 mb-3">{review.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-6 italic">"{review.body}"</p>
              <div className="flex items-center justify-between border-t border-gray-200 pt-4 mt-auto">
                <span className="font-semibold text-gray-900">{review.author}</span>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
