'use client';
import React, { useState, useRef } from 'react';
import Link from 'next/link';

import { categories } from '@/data/categories';

interface PopularSearchesProps {
  locationName?: string;
}

export default function PopularSearches({ locationName = "Agra" }: PopularSearchesProps) {
  const [activeTab, setActiveTab] = useState(categories[0].id);
  const tabsRef = useRef<HTMLDivElement>(null);

  const scrollTabs = (direction: 'left' | 'right') => {
    const currentIndex = categories.findIndex(c => c.id === activeTab);
    let newIndex = currentIndex;
    
    if (direction === 'left' && currentIndex > 0) {
      newIndex = currentIndex - 1;
    } else if (direction === 'right' && currentIndex < categories.length - 1) {
      newIndex = currentIndex + 1;
    }

    if (newIndex !== currentIndex) {
      const newTabId = categories[newIndex].id;
      setActiveTab(newTabId);
      
      // Scroll the newly active button into view
      if (tabsRef.current) {
        const button = tabsRef.current.children[newIndex] as HTMLButtonElement;
        if (button) {
          button.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        }
      }
    } else {
      // Fallback scroll bump if at edges
      if (tabsRef.current) {
        const scrollAmount = 200;
        tabsRef.current.scrollBy({
          left: direction === 'left' ? -scrollAmount : scrollAmount,
          behavior: 'smooth'
        });
      }
    }
  };

  const generateKeywords = (categoryId: string) => {
    const loc = locationName;
    switch(categoryId) {
      case "escorts":
        return [
          `Paid escorts in ${loc}`, `Escorts in ${loc}`, `Best escorts ${loc}`, `Cheap escorts ${loc}`, 
          `High profile escorts ${loc}`, `VIP escorts ${loc}`, `Independent escorts ${loc}`, 
          `Escort near me in ${loc}`, `Real escorts in ${loc}`, `Top escorts ${loc}`,
          `Escorts in ${loc}`, `${loc} escorts`, `Escort whatsapp number ${loc}`
        ];
      case "bhabhi":
        return [
          `Paid bhabhi in ${loc}`, `Bhabhi in ${loc}`, `Desi bhabhi ${loc}`, `Aunty escorts ${loc}`,
          `Married women in ${loc}`, `Mature bhabhi ${loc}`, `Local bhabhi in ${loc}`,
          `Bhabhi number ${loc}`, `Hot bhabhi ${loc}`, `Punjabi bhabhi in ${loc}`
        ];
      case "housewife":
        return [
          `Paid housewife in ${loc}`, `Housewife in ${loc}`, `Lonely housewife ${loc}`, `Housewife escort ${loc}`,
          `Real housewife ${loc}`, `Housewife contact number ${loc}`, `Local housewife ${loc}`,
          `Housewife escort ${loc}`, `Desi housewife ${loc}`
        ];
      case "college":
        return [
          `Paid college girls in ${loc}`, `College girls in ${loc}`, `Young girls ${loc}`, `College girl number ${loc}`,
          `Student escort ${loc}`, `Teen escorts ${loc}`, `College girl ${loc}`,
          `Fresh college girls in ${loc}`, `University girls ${loc}`
        ];
      case "russian":
        return [
          `Paid russian escorts in ${loc}`, `Russian escorts in ${loc}`, `Russian escorts ${loc}`, `Foreigner girls ${loc}`,
          `White girls ${loc}`, `Russian models ${loc}`, `International escorts ${loc}`,
          `Blonde girls ${loc}`, `Russian escort agency ${loc}`
        ];
      case "vip":
        return [
          `Paid VIP escorts in ${loc}`, `VIP escorts in ${loc}`, `High class escorts ${loc}`, `Premium models ${loc}`,
          `VIP escorts ${loc}`, `Luxury escorts ${loc}`, `Celebrity escorts ${loc}`,
          `Elite companions ${loc}`, `5 star hotel escorts ${loc}`
        ];
      case "corporate":
        return [
          `Paid corporate girls in ${loc}`, `Corporate escorts in ${loc}`, `Working girls ${loc}`, `Office girl escorts ${loc}`,
          `Professional escorts ${loc}`, `Corporate women ${loc}`, `Executive escorts ${loc}`
        ];
      case "gym":
        return [
          `Paid gym girls in ${loc}`, `Gym girls in ${loc}`, `Fitness models ${loc}`, `Sporty escorts ${loc}`,
          `Flexible girls ${loc}`, `Yoga teacher escorts ${loc}`, `Athletic escorts ${loc}`
        ];
      default:
        return [];
    }
  };

  return (
    <section className="py-20 bg-[var(--surface-color)] border-t border-[var(--border-color)]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-[22px] md:text-[32px] text-[var(--text-primary)] mb-3 md:mb-4 tracking-[-0.5px]">
            Popular Searches in {locationName}
          </h2>
          <p className="text-[var(--text-secondary)] text-[1.1rem] max-w-[600px] mx-auto">
            Explore the most trending and searched companion categories across {locationName}.
          </p>
        </div>

        {/* Category Tabs Wrapper */}
        <div className="relative flex items-center gap-2 max-w-full mx-auto mb-10">
          
          <button 
            onClick={() => scrollTabs('left')}
            className="flex items-center justify-center bg-white border border-[var(--border-color)] rounded-full w-[34px] h-[34px] md:w-10 md:h-10 cursor-pointer text-[var(--text-primary)] shadow-[0_4px_10px_rgba(0,0,0,0.05)] transition-all duration-200 ease shrink-0 z-10 hover:bg-[var(--accent-primary)] hover:text-white hover:border-[var(--accent-primary)] hover:scale-105 active:scale-95 [&_svg]:w-[18px] [&_svg]:h-[18px] md:[&_svg]:w-6 md:[&_svg]:h-6"
            aria-label="Scroll left"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
          </button>

          <div 
            ref={tabsRef}
            className="flex flex-nowrap gap-[0.8rem] overflow-x-auto scroll-smooth py-2 flex-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-4 py-2 text-[0.85rem] md:py-[0.8rem] md:px-[1.8rem] rounded-[50px] font-semibold md:text-[0.95rem] cursor-pointer transition-all duration-300 ease-in-out whitespace-nowrap shrink-0 ${activeTab === cat.id ? 'border-none bg-[var(--accent-primary)] text-white' : 'border border-[var(--border-color)] bg-white text-[var(--text-primary)]'}`}
                aria-label={`Show searches for ${cat.name}`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          <button 
            onClick={() => scrollTabs('right')}
            className="flex items-center justify-center bg-white border border-[var(--border-color)] rounded-full w-[34px] h-[34px] md:w-10 md:h-10 cursor-pointer text-[var(--text-primary)] shadow-[0_4px_10px_rgba(0,0,0,0.05)] transition-all duration-200 ease shrink-0 z-10 hover:bg-[var(--accent-primary)] hover:text-white hover:border-[var(--accent-primary)] hover:scale-105 active:scale-95 [&_svg]:w-[18px] [&_svg]:h-[18px] md:[&_svg]:w-6 md:[&_svg]:h-6"
            aria-label="Scroll right"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </button>
        </div>

        {/* SEO Keywords Grid */}
        <div className="bg-white rounded-2xl md:rounded-[24px] p-6 md:p-12 shadow-[0_15px_50px_rgba(0,0,0,0.04)] border border-black/5 grid">
          {categories.map((cat) => (
            <div 
              key={cat.id} 
              className={`[grid-area:1/1] flex max-md:flex-col flex-wrap max-md:max-h-[195px] max-md:overflow-x-auto gap-[0.8rem] md:gap-4 max-md:pb-2 max-md:content-start [scrollbar-width:none] [&::-webkit-scrollbar]:hidden transition-all duration-400 ease-out ${activeTab === cat.id ? 'opacity-100 visible pointer-events-auto animate-[fadeIn_0.4s_ease-out]' : 'opacity-0 invisible pointer-events-none'}`}
            >
              {generateKeywords(cat.id).map((keyword, index) => (
                <Link 
                  key={index} 
                  href={cat.id === 'escorts' ? '/' : `/category/${cat.id}`}
                  className="px-4 py-[0.6rem] md:py-[0.8rem] md:px-[1.5rem] bg-[var(--bg-color)] rounded-xl text-[var(--text-secondary)] no-underline text-[0.85rem] md:text-[0.95rem] font-medium transition-all duration-200 ease border border-[var(--border-color)] inline-flex items-center gap-[0.6rem] leading-[1.4] whitespace-nowrap max-md:w-max hover:text-[var(--accent-primary)] hover:border-[var(--accent-primary)] hover:bg-[rgba(233,30,99,0.05)] hover:-translate-y-[2px]"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 opacity-50">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  </svg>
                  <span>{keyword}</span>
                </Link>
              ))}
              
              <div className="w-full text-center mt-6 col-span-full">
                <Link 
                  href={cat.id === 'escorts' ? '/' : `/category/${cat.id}`}
                  className="inline-flex items-center gap-2 py-[0.8rem] px-8 bg-[var(--accent-primary)] text-white rounded-[50px] font-semibold no-underline shadow-[0_4px_15px_rgba(233,30,99,0.3)] transition-all duration-300 ease hover:-translate-y-[2px] hover:shadow-[0_6px_20px_rgba(233,30,99,0.4)]"
                >
                  Explore All {cat.name} ➔
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
