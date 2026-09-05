'use client';
import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { categories } from '@/data/categories';

interface PopularSearchesProps {
  locationName?: string;
}

const categoryIntents: Record<string, {
  narrative: (loc: string) => string;
  byType: { label: string; href: string }[];
  byService: string[];
  byProfile: string[];
}> = {
  'escorts': {
    narrative: (loc) => `Looking for genuine escorts in ${loc}? Our agency connects you with 100% verified, high-profile independent companions available around the clock. Whether you seek a short meet, a dinner date, or a full night, our paid girls in ${loc} arrive at your hotel or private residence with complete discretion — and zero advance payment required.`,
    byType: [
      { label: 'Bhabhi escorts', href: '/agra-bhabhi-escorts' },
      { label: 'College girls', href: '/agra-college-girl-escorts' },
      { label: 'Russian models', href: '/agra-russian-escorts' },
      { label: 'VIP companions', href: '/agra-vip-escorts' },
      { label: 'Housewife escorts', href: '/agra-housewife-escorts' },
    ],
    byService: ['Hotel outcall', 'Full night booking', 'Girlfriend experience', 'Short meet', 'Cash on arrival'],
    byProfile: ['Independent', 'VIP verified', 'High profile', 'Budget friendly'],
  },
  'agra-bhabhi-escorts': {
    narrative: (loc) => `Craving the warmth and passion of a genuine desi bhabhi in ${loc}? Our mature, experienced Bhabhi escorts offer an authentic companionship experience. From local housewives to divorced women seeking discreet fun, every model is personally verified — available for incall or outcall directly to your location in ${loc}.`,
    byType: [
      { label: 'Desi aunty', href: '/agra-bhabhi-escorts' },
      { label: 'Divorced bhabhi', href: '/agra-bhabhi-escorts' },
      { label: 'Punjabi bhabhi', href: '/agra-bhabhi-escorts' },
      { label: 'Housewife escort', href: '/agra-housewife-escorts' },
      { label: 'Mature companion', href: '/agra-bhabhi-escorts' },
    ],
    byService: ['Hotel outcall', 'Full night', 'Discreet visit', 'Cash payment'],
    byProfile: ['Local bhabhi', 'Genuine profile', 'Mature & experienced', 'No advance'],
  },
  'agra-housewife-escorts': {
    narrative: (loc) => `Discover real, lonely housewife escorts in ${loc} seeking discreet, passionate encounters. Our verified housewives offer an intimate, authentic girlfriend experience — far more personal than a typical professional escort. Available for private apartment visits, hotel calls, and full-night bookings in ${loc}.`,
    byType: [
      { label: 'Lonely housewife', href: '/agra-housewife-escorts' },
      { label: 'Married women', href: '/agra-housewife-escorts' },
      { label: 'Bhabhi companion', href: '/agra-bhabhi-escorts' },
      { label: 'Mature escort', href: '/agra-housewife-escorts' },
      { label: 'GFE companion', href: '/agra-housewife-escorts' },
    ],
    byService: ['Private apartment visit', 'Full night', 'Girlfriend experience', 'Hotel call'],
    byProfile: ['Genuine housewife', 'Verified local', 'Discreet', 'No advance payment'],
  },
  'agra-college-girl-escorts': {
    narrative: (loc) => `Meet fresh, youthful college girl escorts in ${loc} who bring unmatched energy and enthusiasm to every date. From university students to young working women aged 18–22, our verified profiles offer an exciting Girlfriend Experience, party companionship, and romantic dinner dates — with full privacy and zero advance payment.`,
    byType: [
      { label: 'University student', href: '/agra-college-girl-escorts' },
      { label: 'Young working girl', href: '/agra-college-girl-escorts' },
      { label: 'Party companion', href: '/agra-college-girl-escorts' },
      { label: 'GFE escort', href: '/agra-college-girl-escorts' },
      { label: 'Budget friendly', href: '/agra-college-girl-escorts' },
    ],
    byService: ['Party date', 'Dinner date', 'Hotel outcall', 'Girlfriend experience'],
    byProfile: ['Age 18–22', 'Verified', 'Fresh profiles', 'High energy'],
  },
  'agra-russian-escorts': {
    narrative: (loc) => `Experience true luxury with stunning Russian and international model escorts in ${loc}. Our premium foreign companions are available exclusively for VIP clients at 5-star hotels and private residences. Fluent in English, deeply sophisticated, and completely discreet — the ultimate premium companionship experience.`,
    byType: [
      { label: 'Russian model', href: '/agra-russian-escorts' },
      { label: 'International companion', href: '/agra-russian-escorts' },
      { label: 'Foreign escort', href: '/agra-russian-escorts' },
      { label: 'VIP escort', href: '/agra-vip-escorts' },
      { label: 'Air hostess', href: '/agra-air-hostess-escorts' },
    ],
    byService: ['5-star hotel visit', 'Airport pickup', 'Full night', 'Travel companion'],
    byProfile: ['Genuine Russian', 'Speaks English', 'VIP only', 'Premium rate'],
  },
  'agra-vip-escorts': {
    narrative: (loc) => `Our VIP escort service in ${loc} is designed exclusively for discerning gentlemen who expect the very best. High-profile models and socialites with impeccable etiquette — available for elite dinner dates, luxury hotel stays, private events, and overnight bookings. Absolute confidentiality is guaranteed for every VIP client.`,
    byType: [
      { label: 'Celebrity companion', href: '/agra-vip-escorts' },
      { label: 'Corporate escort', href: '/agra-corporate-escorts' },
      { label: 'Russian model', href: '/agra-russian-escorts' },
      { label: 'Air hostess', href: '/agra-air-hostess-escorts' },
      { label: 'Gym model', href: '/agra-gym-girl-escorts' },
    ],
    byService: ['Luxury hotel', 'Private event', 'Business dinner', 'Overnight stay'],
    byProfile: ['Elite profile', 'Highly educated', 'Absolute privacy', 'Premium rate'],
  },
  'agra-corporate-escorts': {
    narrative: (loc) => `Perfect for business executives and corporate travelers visiting ${loc}, our office girl escorts offer refined, intelligent companionship. Think sophisticated dinner partners, sharp conversationalists, and elegant plus-ones for professional events — all with the warmth and intimacy of a genuine personal connection.`,
    byType: [
      { label: 'Office girl escort', href: '/agra-corporate-escorts' },
      { label: 'Professional companion', href: '/agra-corporate-escorts' },
      { label: 'VIP escort', href: '/agra-vip-escorts' },
      { label: 'Air hostess', href: '/agra-air-hostess-escorts' },
      { label: 'Dinner date', href: '/agra-corporate-escorts' },
    ],
    byService: ['Business dinner', 'Corporate event', 'Hotel stay', 'Travel partner'],
    byProfile: ['Well educated', 'Corporate groomed', 'Articulate', 'Discreet'],
  },
  'agra-gym-girl-escorts': {
    narrative: (loc) => `For those who appreciate a toned, athletic physique, our gym girl escorts in ${loc} are the perfect match. Fitness models, yoga enthusiasts, and sporty companions — all verified and available for incall and outcall. They combine stunning looks with a healthy, confident personality that makes every encounter unforgettable.`,
    byType: [
      { label: 'Fitness model', href: '/agra-gym-girl-escorts' },
      { label: 'Yoga instructor', href: '/agra-gym-girl-escorts' },
      { label: 'Athletic escort', href: '/agra-gym-girl-escorts' },
      { label: 'Independent model', href: '/agra-independent-escorts' },
      { label: 'College girl', href: '/agra-college-girl-escorts' },
    ],
    byService: ['Hotel visit', 'Full night', 'Short meet', 'GFE'],
    byProfile: ['Toned physique', 'High energy', 'Verified', 'No advance'],
  },
  'agra-independent-escorts': {
    narrative: (loc) => `Independent escorts in ${loc} offer a more genuine, personal, and unhurried experience compared to agency-managed profiles. Direct contact, real photos, transparent pricing — no middlemen. Our verified independent companions are available for hotel visits, home calls, and full-night bookings with complete privacy guaranteed.`,
    byType: [
      { label: 'Solo independent', href: '/agra-independent-escorts' },
      { label: 'Direct contact girl', href: '/agra-independent-escorts' },
      { label: 'Verified independent', href: '/agra-independent-escorts' },
      { label: 'College girl', href: '/agra-college-girl-escorts' },
      { label: 'Housewife escort', href: '/agra-housewife-escorts' },
    ],
    byService: ['Hotel outcall', 'Home visit', 'Full night', 'WhatsApp booking'],
    byProfile: ['No advance', 'Real photos', 'Direct contact', 'Flexible timing'],
  },
  'agra-air-hostess-escorts': {
    narrative: (loc) => `Elevate your experience with our premium air hostess escorts in ${loc}. Former and part-time cabin crew professionals who combine stunning beauty with exceptional poise and etiquette. Perfect for corporate dinners, luxury hotel stays, and high-society events — available exclusively for VIP clientele in ${loc}.`,
    byType: [
      { label: 'Cabin crew model', href: '/agra-air-hostess-escorts' },
      { label: 'Aviation professional', href: '/agra-air-hostess-escorts' },
      { label: 'VIP companion', href: '/agra-vip-escorts' },
      { label: 'Russian model', href: '/agra-russian-escorts' },
      { label: 'Corporate escort', href: '/agra-corporate-escorts' },
    ],
    byService: ['5-star hotel', 'Business dinner', 'Travel companion', 'Overnight'],
    byProfile: ['Premium profile', 'Speaks English', 'Highly groomed', 'VIP only'],
  },
};

export default function PopularSearches({ locationName = 'Agra' }: PopularSearchesProps) {
  const [activeTab, setActiveTab] = useState(categories[0].id);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const tabsRef = useRef<HTMLDivElement>(null);

  const scrollTabs = (direction: 'left' | 'right') => {
    const currentIndex = categories.findIndex(c => c.id === activeTab);
    let newIndex = currentIndex;
    if (direction === 'left' && currentIndex > 0) newIndex = currentIndex - 1;
    else if (direction === 'right' && currentIndex < categories.length - 1) newIndex = currentIndex + 1;
    if (newIndex !== currentIndex) {
      setActiveTab(categories[newIndex].id);
      setOpenFaq(null);
      if (tabsRef.current) {
        const button = tabsRef.current.children[newIndex] as HTMLButtonElement;
        if (button) button.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    } else {
      if (tabsRef.current) tabsRef.current.scrollBy({ left: direction === 'left' ? -200 : 200, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-[var(--surface-color)] border-t border-[var(--border-color)]">
      <div className="container mx-auto px-3 md:px-4">
        <div className="text-center mb-12">
          <h2 className="text-[22px] md:text-[32px] font-semibold text-[var(--text-primary)] mb-3 md:mb-4 tracking-[-0.5px]">
            Popular Escort Categories in {locationName}
          </h2>
          <p className="text-[var(--text-secondary)] text-[16px] md:text-[18px] max-w-[600px] mx-auto">
            Find the perfect companion — browse by type, service, or preference.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="relative flex items-center gap-2 mb-10">
          <button onClick={() => scrollTabs('left')} aria-label="Scroll left" className="flex items-center justify-center bg-white border border-[var(--border-color)] rounded-full w-[34px] h-[34px] md:w-10 md:h-10 cursor-pointer shrink-0 z-10 hover:bg-[var(--accent-primary)] hover:text-white hover:border-[var(--accent-primary)] transition-colors">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
          </button>
          <div ref={tabsRef} className="flex flex-nowrap gap-[0.8rem] overflow-x-auto scroll-smooth py-2 flex-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => { setActiveTab(cat.id); setOpenFaq(null); }}
                className={`px-4 py-2 text-[0.85rem] md:py-[0.8rem] md:px-[1.8rem] rounded-[50px] font-semibold md:text-[0.95rem] cursor-pointer transition-all duration-300 whitespace-nowrap shrink-0 ${activeTab === cat.id ? 'bg-[var(--accent-primary)] text-white border-none' : 'border border-[var(--border-color)] bg-white text-[var(--text-primary)]'}`}
              >
                {cat.name}
              </button>
            ))}
          </div>
          <button onClick={() => scrollTabs('right')} aria-label="Scroll right" className="flex items-center justify-center bg-white border border-[var(--border-color)] rounded-full w-[34px] h-[34px] md:w-10 md:h-10 cursor-pointer shrink-0 z-10 hover:bg-[var(--accent-primary)] hover:text-white hover:border-[var(--accent-primary)] transition-colors">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
          </button>
        </div>

        {/* Content Panels */}
        <div className="bg-white rounded-2xl md:rounded-[24px] border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)] grid">
          {categories.map((cat) => {
            const intent = categoryIntents[cat.id];
            return (
              <div
                key={cat.id}
                className={`[grid-area:1/1] transition-opacity duration-300 ${activeTab === cat.id ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none invisible'}`}
              >
                <div className="p-5 md:p-10 space-y-8">

                  {/* Strategy 2: Narrative paragraph */}
                  {intent && (
                    <p className="text-[14px] md:text-[15px] text-gray-600 leading-relaxed p-5 md:p-6 bg-[var(--surface-color)] rounded-2xl border border-gray-100">
                      {intent.narrative(locationName)}
                    </p>
                  )}

                  {/* Strategy 1: Intent-grouped browse chips */}
                  {intent && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-3">By companion type</p>
                        <div className="flex flex-wrap gap-2">
                          {intent.byType.map((item) => (
                            <Link key={item.label} href={item.href} className="px-3 py-1.5 border border-[var(--border-color)] rounded-full text-[13px] text-[var(--text-secondary)] no-underline hover:text-[var(--accent-primary)] hover:border-[var(--accent-primary)] transition-colors inline-block">
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-3">By service</p>
                        <div className="flex flex-wrap gap-2">
                          {intent.byService.map((label) => (
                            <Link key={label} href={cat.id === 'escorts' ? '/' : `/${cat.id}`} className="px-3 py-1.5 border border-[var(--border-color)] rounded-full text-[13px] text-[var(--text-secondary)] no-underline hover:text-[var(--accent-primary)] hover:border-[var(--accent-primary)] transition-colors inline-block">
                              {label}
                            </Link>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-3">By preference</p>
                        <div className="flex flex-wrap gap-2">
                          {intent.byProfile.map((label) => (
                            <Link key={label} href={cat.id === 'escorts' ? '/' : `/${cat.id}`} className="px-3 py-1.5 border border-[var(--border-color)] rounded-full text-[13px] text-[var(--text-secondary)] no-underline hover:text-[var(--accent-primary)] hover:border-[var(--accent-primary)] transition-colors inline-block">
                              {label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Strategy 3: FAQ Accordion */}
                  <div>
                    <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-4">Common questions</p>
                    <div className="divide-y divide-gray-100">
                      {cat.faqs.slice(0, 4).map((faq, idx) => (
                        <div key={idx}>
                          <button
                            className="w-full text-left flex justify-between items-center py-4 gap-4 cursor-pointer bg-transparent border-none"
                            onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                          >
                            <span className="text-[14px] md:text-[15px] font-semibold text-[var(--text-primary)]">{faq.question}</span>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                              className={`shrink-0 text-gray-400 transition-transform duration-200 ${openFaq === idx ? 'rotate-180' : ''}`}>
                              <polyline points="6 9 12 15 18 9"/>
                            </svg>
                          </button>
                          {openFaq === idx && (
                            <p className="text-[13px] md:text-[14px] text-gray-600 leading-relaxed pb-4" dangerouslySetInnerHTML={{ __html: faq.answer }} />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="text-center pt-2">
                    <Link
                      href={cat.id === 'escorts' ? '/' : `/${cat.id}`}
                      className="inline-flex items-center gap-2 py-[0.8rem] px-8 bg-[var(--accent-primary)] text-white rounded-[50px] font-semibold no-underline shadow-[0_4px_15px_rgba(233,30,99,0.3)] transition-all duration-300 hover:-translate-y-[2px] hover:shadow-[0_6px_20px_rgba(233,30,99,0.4)]"
                    >
                      Explore All {cat.name} Escorts ➔
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
