'use client';
import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { locations } from '@/data/locations';

// ─── Static chip groups ───────────────────────────────────────────────────────

const BY_TYPE_CHIPS = [
  { label: 'Bhabhi',        href: '/agra-bhabhi-escorts' },
  { label: 'College Girl',  href: '/agra-college-girl-escorts' },
  { label: 'Russian Model', href: '/agra-russian-escorts' },
  { label: 'VIP',           href: '/agra-vip-escorts' },
  { label: 'Housewife',     href: '/agra-housewife-escorts' },
];

const BY_SERVICE_LABELS = ['Full Night', 'Hotel Outcall', 'Girlfriend Experience', 'Short Meet'];
const BY_PREF_LABELS    = ['Independent', 'Verified', 'High Profile', 'Budget Friendly'];

const CHIP_CLS =
  'px-3 py-1.5 border border-[var(--border-color)] rounded-full text-[13px] text-[var(--text-secondary)] no-underline hover:text-[var(--accent-primary)] hover:border-[var(--accent-primary)] transition-colors inline-block';

// ─── Sub-components ───────────────────────────────────────────────────────────

function ChipGroup({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="mb-4 last:mb-0">
      <p className="text-[11px] font-semibold uppercase tracking-widest text-[var(--text-secondary)] mb-2 opacity-60">
        {label}
      </p>
      <div className="flex flex-wrap gap-2">{children}</div>
    </div>
  );
}

function BrowseChips({ slug }: { slug: string }) {
  return (
    <div className="p-5 md:p-6 bg-white rounded-2xl border border-gray-100 mb-5">
      <ChipGroup label="By companion type">
        {BY_TYPE_CHIPS.map(({ label, href }) => (
          <Link key={label} href={href} className={CHIP_CLS}>
            {label}
          </Link>
        ))}
      </ChipGroup>

      <ChipGroup label="By service">
        {BY_SERVICE_LABELS.map((label) => (
          <Link key={label} href={`/${slug}`} className={CHIP_CLS}>
            {label}
          </Link>
        ))}
      </ChipGroup>

      <ChipGroup label="By preference">
        {BY_PREF_LABELS.map((label) => (
          <Link key={label} href={`/${slug}`} className={CHIP_CLS}>
            {label}
          </Link>
        ))}
      </ChipGroup>
    </div>
  );
}

function NarrativeParagraph({ name, uniqueDescription }: { name: string; uniqueDescription: string }) {
  return (
    <p className="text-[14px] md:text-[15px] text-gray-600 leading-relaxed p-5 md:p-6 bg-white rounded-2xl border border-gray-100 my-5">
      Looking for verified escorts in {name}? Whether you need a discreet independent call girl,
      a passionate housewife companion, a high-profile VIP escort, or an exotic Russian model, we
      deliver premium paid girls directly to any hotel or private residence in {name}. Zero advance
      payment. 100% confidential.{' '}
      {uniqueDescription}
    </p>
  );
}

interface FaqAccordionProps {
  faqs: { question: string; answer: string }[];
  openFaq: number | null;
  setOpenFaq: React.Dispatch<React.SetStateAction<number | null>>;
}

function FaqAccordion({ faqs, openFaq, setOpenFaq }: FaqAccordionProps) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden mb-5">
      {faqs.map((faq, idx) => {
        const isOpen = openFaq === idx;
        return (
          <div key={idx}>
            <button
              type="button"
              onClick={() => setOpenFaq(isOpen ? null : idx)}
              className="w-full text-left text-[14px] md:text-[15px] font-semibold text-[var(--text-primary)] cursor-pointer flex justify-between items-center py-4 px-5 border-b border-gray-100 focus:outline-none"
              aria-expanded={isOpen}
            >
              <span>{faq.question}</span>
              <svg
                className={`w-4 h-4 shrink-0 ml-3 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>

            {isOpen && (
              <div
                className="text-[13px] md:text-[14px] text-gray-600 leading-relaxed pb-4 pt-3 px-5 border-b border-gray-100"
                dangerouslySetInnerHTML={{ __html: faq.answer }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function TopLocalities() {
  const [activeTab, setActiveTab] = useState(locations[0].id);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const tabsRef = useRef<HTMLDivElement>(null);

  const handleTabChange = (id: string) => {
    setActiveTab(id);
    setOpenFaq(null);
  };

  const scrollTabs = (direction: 'left' | 'right') => {
    const currentIndex = locations.findIndex((l) => l.id === activeTab);
    let newIndex = currentIndex;
    if (direction === 'left' && currentIndex > 0) newIndex = currentIndex - 1;
    else if (direction === 'right' && currentIndex < locations.length - 1) newIndex = currentIndex + 1;

    if (newIndex !== currentIndex) {
      handleTabChange(locations[newIndex].id);
      if (tabsRef.current) {
        const button = tabsRef.current.children[newIndex] as HTMLButtonElement;
        if (button) button.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    } else {
      if (tabsRef.current)
        tabsRef.current.scrollBy({ left: direction === 'left' ? -200 : 200, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-[var(--surface-color)] border-t border-[var(--border-color)]">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-[var(--text-primary)] mb-3 md:mb-4 tracking-[-0.5px] font-[family-name:var(--font-inter),sans-serif] text-[22px] md:text-[32px]">
            Top Escort Localities in Agra
          </h2>
          <p className="text-[var(--text-secondary)] text-[1.1rem] max-w-[600px] mx-auto">
            Explore the most premium companions and top searched models across different localities in Agra.
          </p>
        </div>

        {/* Tab bar */}
        <div className="flex items-center gap-4 mb-12 relative">
          <button
            onClick={() => scrollTabs('left')}
            className="flex items-center justify-center bg-white border border-[var(--border-color)] rounded-full w-10 h-10 cursor-pointer text-[var(--text-primary)] shadow-[0_4px_10px_rgba(0,0,0,0.05)] transition-all duration-200 ease shrink-0 z-10 hover:bg-[var(--accent-primary)] hover:text-white hover:border-[var(--accent-primary)] hover:scale-105"
            aria-label="Scroll left"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <div
            ref={tabsRef}
            className="flex gap-4 overflow-x-auto p-2 scroll-smooth flex-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {locations.map((loc) => (
              <button
                key={loc.id}
                onClick={() => handleTabChange(loc.id)}
                className={`px-8 py-[0.8rem] rounded-[50px] font-semibold text-[0.9rem] cursor-pointer whitespace-nowrap transition-all duration-300 ease shrink-0 font-[family-name:var(--font-inter),sans-serif] ${
                  activeTab === loc.id
                    ? 'border-none bg-[var(--accent-primary)] text-white shadow-[0_4px_15px_rgba(233,30,99,0.3)]'
                    : 'border border-[var(--border-color)] bg-white text-[var(--text-secondary)] shadow-none'
                }`}
              >
                {loc.name}
              </button>
            ))}
          </div>

          <button
            onClick={() => scrollTabs('right')}
            className="flex items-center justify-center bg-white border border-[var(--border-color)] rounded-full w-10 h-10 cursor-pointer text-[var(--text-primary)] shadow-[0_4px_10px_rgba(0,0,0,0.05)] transition-all duration-200 ease shrink-0 z-10 hover:bg-[var(--accent-primary)] hover:text-white hover:border-[var(--accent-primary)] hover:scale-105"
            aria-label="Scroll right"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>

        {/* Tab panels */}
        <div className="relative min-h-[300px]">
          {locations.map((loc) => (
            <div
              key={loc.id}
              className={activeTab === loc.id ? 'block' : 'hidden'}
              role="tabpanel"
              aria-labelledby={`tab-${loc.id}`}
            >
              {/* 1 — Intent-Grouped Browse Chips */}
              <BrowseChips slug={loc.slug} />

              {/* 2 — Narrative Paragraph */}
              <NarrativeParagraph name={loc.name} uniqueDescription={loc.uniqueDescription} />

              {/* 3 — FAQ Accordion */}
              <FaqAccordion faqs={loc.localFaq} openFaq={openFaq} setOpenFaq={setOpenFaq} />

              {/* Bottom CTA — unchanged */}
              <div className="w-full text-center mt-6">
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
