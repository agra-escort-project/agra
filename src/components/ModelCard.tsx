import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { EscortModel } from '@/data/models';

interface ModelCardProps {
  model: EscortModel;
  imageHeight?: string;
  showButtons?: boolean;
}

export default function ModelCard({ model, imageHeight = '350px', showButtons = false }: ModelCardProps) {
  // Map dynamic height to a tailwind class or use a default
  const heightClass = imageHeight === '350px' ? 'h-[350px]' : 'h-[350px]';

  return (
    <div className="bg-[var(--surface-color)] rounded-[16px] overflow-hidden shadow-[var(--shadow-sm)] transition-all duration-300 flex flex-col h-full border border-[var(--border-color)] relative">
      
      <Link href={`/gallery/${model.slug}`} className="no-underline text-inherit flex-1 flex flex-col">
        <div className={`relative w-full ${heightClass}`}>
          <Image 
            src={model.images[0]} 
            alt={`${model.name} - Premium Escort`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
          <div className="absolute top-[1rem] right-[1rem] bg-black/70 backdrop-blur-[4px] text-white px-[1rem] py-[0.4rem] rounded-full text-[0.85rem] font-semibold border border-white/20 z-[2]">
            📸 {model.images.length} Photos
          </div>
        </div>
        
        <div className="p-[1.5rem] flex-1 flex flex-col">
          <div className="flex items-center gap-[0.5rem] mb-[1.2rem]">
            <h3 className="text-[1.6rem] m-0 text-[var(--text-primary)] font-extrabold">{model.name}</h3>
            <span className="inline-flex items-center justify-center bg-[#10B981] text-white rounded-full w-[22px] h-[22px]" title="Verified Profile">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
            </span>
          </div>

          <div className="flex gap-[1.5rem] flex-wrap border-t border-[var(--border-color)] pt-[1.2rem] mt-auto">
            <div className="flex flex-col">
              <span className="text-[0.75rem] text-[var(--text-secondary)] uppercase tracking-[0.5px]">Age</span>
              <span className="text-[0.95rem] font-bold text-[var(--text-primary)]">{model.age}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[0.75rem] text-[var(--text-secondary)] uppercase tracking-[0.5px]">Height</span>
              <span className="text-[0.95rem] font-bold text-[var(--text-primary)]">{model.height}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[0.75rem] text-[var(--text-secondary)] uppercase tracking-[0.5px]">Figure</span>
              <span className="text-[0.95rem] font-bold text-[var(--text-primary)]">{model.measurements}</span>
            </div>
          </div>
          
        </div>
      </Link>

      {showButtons && (
        <div className="px-[1.5rem] pb-[1.5rem]">
          <div className="border-t border-[var(--border-color)] pt-[1.2rem] flex gap-[0.4rem]">
            <Link 
              href={`/gallery/${model.slug}`}
              className="flex-1 bg-transparent border border-[var(--border-color)] text-[var(--text-primary)] hover:border-[var(--text-primary)] rounded-full flex items-center justify-center px-[0.4rem] text-[14px] font-semibold h-[44px] whitespace-nowrap tracking-[-0.3px] transition-colors"
            >
              View Details
            </Link>
            <a 
              href={`https://wa.me/919105293429?text=Hello%20AgraEscort,%20I%20would%20like%20to%20book%20${model.name}%20from%20your%20website.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-[var(--accent-primary)] hover:opacity-90 text-white rounded-full flex items-center justify-center gap-[0.4rem] px-[0.4rem] text-[14px] font-semibold h-[44px] whitespace-nowrap tracking-[-0.3px] transition-opacity"
            >
              Book Now
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
