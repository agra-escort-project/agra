'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { models } from '@/data/models';

export default function ModelMarquee() {
  // Duplicate models to create a seamless infinite scrolling loop
  const marqueeModels = [...models, ...models, ...models, ...models];

  return (
    <div className="w-full overflow-hidden py-3 md:py-4">
      <div className="flex w-max animate-[scrollMarquee_60s_linear_infinite] hover:[animation-play-state:paused]">
        {marqueeModels.map((model, idx) => (
          <Link
            key={`${model.id}-${idx}`}
            href={`/gallery/${model.slug}`}
            className="flex flex-col items-center mx-[0.6rem] md:mx-[1.2rem] no-underline shrink-0 transition-transform duration-200 ease hover:scale-105"
          >
            {/* Avatar — 56px mobile, 75px desktop */}
            <div className="relative w-[60px] h-[60px] md:w-[75px] md:h-[75px] rounded-full p-[3px] bg-gradient-to-tr from-[var(--accent-primary)] to-[#ffb6c1] shadow-[0_4px_10px_rgba(233,30,99,0.2)]">
              <div className="relative w-full h-full rounded-full overflow-hidden border border-white">
                <Image
                  src={model.images[0]}
                  alt={`${model.name} VIP Escort`}
                  fill
                  sizes="(max-width: 768px) 60px, 75px"
                  className="object-cover"
                />
              </div>
              {/* Blinking Green Dot */}
              <div className="absolute bottom-[2px] right-[2px] w-3 h-3 md:w-4 md:h-4 bg-[#10B981] rounded-full border-2 border-white z-10 animate-pulse" />
            </div>
            <span className="mt-[0.4rem] md:mt-[0.6rem] text-[0.75rem] md:text-[0.85rem] font-semibold text-[var(--text-primary)]">
              {model.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
