import React from 'react';
import Link from 'next/link';
import { categories } from '@/data/categories';

interface PopularSearchesProps {
  locationName?: string;
}

export default function PopularSearches({ locationName = 'Agra' }: PopularSearchesProps) {
  return (
    <section className="py-[60px] lg:py-[100px] bg-[var(--surface-color)] border-t border-[var(--border-color)]">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-10">
          <h2 className="text-[22px] md:text-[32px] font-semibold text-[var(--text-primary)] mb-3 md:mb-4 tracking-[-0.5px]">
            Popular Escort Categories in {locationName}
          </h2>
          <p className="text-[var(--text-secondary)] text-[15px] md:text-[17px] max-w-[600px] mx-auto">
            Browse our most requested companion profiles and specialized services.
          </p>
        </div>

        <div className="grid grid-rows-4 grid-flow-col auto-cols-max gap-3 overflow-x-auto pb-4 md:flex md:flex-wrap md:justify-center md:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={cat.id === 'escorts' ? '/' : `/${cat.id}`}
              className="px-5 py-2.5 bg-white border border-[var(--border-color)] rounded-[50px] text-[14px] md:text-[15px] font-medium text-[var(--text-primary)] no-underline hover:text-[var(--accent-primary)] hover:border-[var(--accent-primary)] hover:shadow-md transition-all duration-300"
            >
              {cat.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
