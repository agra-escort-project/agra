import React from 'react';
import Link from 'next/link';
import { locations } from '@/data/locations';

export default function TopLocalities() {
  return (
    <section className="py-[60px] lg:py-[100px] bg-[var(--surface-color)] border-t border-[var(--border-color)]">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-10">
          <h2 className="text-[22px] md:text-[32px] font-semibold text-[var(--text-primary)] mb-3 md:mb-4 tracking-[-0.5px]">
            Top Escort Localities in Agra
          </h2>
          <p className="text-[var(--text-secondary)] text-[15px] md:text-[17px] max-w-[600px] mx-auto">
            Explore the most premium companions across different neighborhoods and VIP areas in Agra.
          </p>
        </div>

        <div className="grid grid-rows-4 grid-flow-col auto-cols-max gap-3 overflow-x-auto pb-4 md:flex md:flex-wrap md:justify-center md:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {locations.map((loc) => (
            <Link
              key={loc.id}
              href={`/${loc.slug}`}
              className="px-5 py-2.5 bg-white border border-[var(--border-color)] rounded-[50px] text-[14px] md:text-[15px] font-medium text-[var(--text-primary)] no-underline hover:text-[var(--accent-primary)] hover:border-[var(--accent-primary)] hover:shadow-md transition-all duration-300"
            >
              {loc.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
