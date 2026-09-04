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
              href={`https://wa.me/917409040180?text=Hello%20AgraEscort,%20I%20would%20like%20to%20book%20${model.name}%20from%20your%20website.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-[var(--accent-primary)] hover:opacity-90 text-white rounded-full flex items-center justify-center gap-[0.4rem] px-[0.4rem] text-[14px] font-semibold h-[44px] whitespace-nowrap tracking-[-0.3px] transition-opacity"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
              </svg>
              Book Now
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
