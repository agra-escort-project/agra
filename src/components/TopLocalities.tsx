'use client';
import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { locations } from '@/data/locations';

export default function TopLocalities() {
  const [activeTab, setActiveTab] = useState(locations[0].id);
  const tabsRef = useRef<HTMLDivElement>(null);

  const scrollTabs = (direction: 'left' | 'right') => {
    const currentIndex = locations.findIndex(l => l.id === activeTab);
    let newIndex = currentIndex;
    
    if (direction === 'left' && currentIndex > 0) {
      newIndex = currentIndex - 1;
    } else if (direction === 'right' && currentIndex < locations.length - 1) {
      newIndex = currentIndex + 1;
    }

    if (newIndex !== currentIndex) {
      setActiveTab(locations[newIndex].id);
      if (tabsRef.current) {
        const button = tabsRef.current.children[newIndex] as HTMLButtonElement;
        if (button) {
          button.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        }
      }
    } else {
      if (tabsRef.current) {
        const scrollAmount = 200;
        tabsRef.current.scrollBy({
          left: direction === 'left' ? -scrollAmount : scrollAmount,
          behavior: 'smooth'
        });
      }
    }
  };

    const getTopKeywords = (locName: string, locSlug: string) => {
    const prefixes = [
      "Escorts in", "Paid escorts in", "Best escorts in", "Cheap escorts in",
      "High profile escorts in", "VIP escorts in", "Independent escorts in",
      "Escort near me in", "Real escorts in", "Top escorts in", "Local escorts in",
      "Luxury escorts in", "Paid girl in", "Sexy lady in", "Hot girls in",
      "Call girl in", "Best call girls in", "Independent call girls in",
      "Call girl near me in", "Real call girls in", "Local call girls in",
      "Cheap call girls in", "Sex girl in", "Paid sex women in", "Sexy women in",
      "Hot sex girl in", "Paid sex girl in", "Night sex girl in", "Cheap sex women in",
      "Housewife in", "Lonely housewife in", "Bhabhi in", "Desi bhabhi in",
      "Hot bhabhi in", "College girls in", "Young girls in", "Russian models in",
      "Russian escorts in", "Foreigner girls in", "Corporate girls in",
      "Office girl escorts in", "Girlfriend experience in", "GFE escorts in",
      "Full night escorts in", "Outcall escorts in", "Hotel outcall escorts in",
      "Cash payment escorts in", "Escort whatsapp number in",
      "Call girl whatsapp number in", "Direct contact escorts in"
    ];
    return prefixes.map(prefix => ({ keyword: `${prefix} ${locName}`, url: `/${locSlug}` }));
  };

  return (
    <section className="py-20 bg-[var(--surface-color)] border-t border-[var(--border-color)]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-[var(--text-primary)] mb-3 md:mb-4 tracking-[-0.5px] font-[family-name:var(--font-inter),sans-serif] text-[22px] md:text-[32px]">
            Top Escort Localities in Agra
          </h2>
          <p className="text-[var(--text-secondary)] text-[1.1rem] max-w-[600px] mx-auto font-[family-name:var(--font-inter),sans-serif]">
            Explore the most premium companions and top searched models across different localities in Agra.
          </p>
        </div>

        {/* Horizontal Tabs (Locations) */}
        <div className="flex items-center gap-4 mb-12 relative">
          <button onClick={() => scrollTabs('left')} className="flex items-center justify-center bg-white border border-[var(--border-color)] rounded-full w-10 h-10 cursor-pointer text-[var(--text-primary)] shadow-[0_4px_10px_rgba(0,0,0,0.05)] transition-all duration-200 ease shrink-0 z-10 hover:bg-[var(--accent-primary)] hover:text-white hover:border-[var(--accent-primary)] hover:scale-105" aria-label="Scroll left">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
          </button>
          
          <div ref={tabsRef} className="flex gap-4 overflow-x-auto p-2 scroll-smooth flex-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {locations.map((loc) => (
              <button
                key={loc.id}
                onClick={() => setActiveTab(loc.id)}
                className={`px-8 py-[0.8rem] rounded-[50px] font-semibold text-[0.9rem] cursor-pointer whitespace-nowrap transition-all duration-300 ease shrink-0 font-[family-name:var(--font-inter),sans-serif] ${activeTab === loc.id ? 'border-none bg-[var(--accent-primary)] text-white shadow-[0_4px_15px_rgba(233,30,99,0.3)]' : 'border border-[var(--border-color)] bg-white text-[var(--text-secondary)] shadow-none'}`}
              >
                {loc.name}
              </button>
            ))}
          </div>

          <button onClick={() => scrollTabs('right')} className="flex items-center justify-center bg-white border border-[var(--border-color)] rounded-full w-10 h-10 cursor-pointer text-[var(--text-primary)] shadow-[0_4px_10px_rgba(0,0,0,0.05)] transition-all duration-200 ease shrink-0 z-10 hover:bg-[var(--accent-primary)] hover:text-white hover:border-[var(--accent-primary)] hover:scale-105" aria-label="Scroll right">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </button>
        </div>

        {/* SEO Keywords Container */}
        <div className="relative min-h-[300px]">
          {locations.map((loc) => (
            <div 
              key={loc.id} 
              className={`bg-white p-6 md:p-12 rounded-[24px] border border-[var(--border-color)] shadow-[0_20px_40px_rgba(0,0,0,0.03)] grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-y-2 gap-x-6 content-start ${activeTab === loc.id ? 'grid' : 'hidden'}`}
            >
              {getTopKeywords(loc.name, loc.slug).map((item, index) => (
                <Link 
                  key={index} 
                  href={item.url}
                  className="text-[var(--text-secondary)] no-underline text-[0.95rem] font-[family-name:var(--font-inter),sans-serif] transition-colors duration-200 ease inline-block py-[0.3rem] hover:text-[var(--accent-primary)]"
                >
                  {item.keyword}
                </Link>
              ))}
              
              <div className="w-full text-center mt-6 col-span-full">
                <Link 
                  href={`/${loc.slug}`}
                  className="inline-flex items-center justify-center gap-2 h-12 lg:h-14 px-6 text-[14px] lg:text-[16px] font-semibold rounded-[50px] bg-[var(--accent-primary)] text-white hover:opacity-90 transition-opacity w-full lg:w-auto"
                >
                  View More {loc.name} Options ➔
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
