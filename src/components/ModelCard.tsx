import { getWhatsAppLink } from "@/utils/whatsapp";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { EscortModel } from '@/data/models';
import TrackedA from '@/components/tracking/TrackedA';

interface ModelCardProps {
  model: EscortModel;
  imageHeight?: string;
  showButtons?: boolean;
}

export default function ModelCard({ model, imageHeight = '350px', showButtons = false }: ModelCardProps) {
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
                    <div className="flex items-center mb-[1.2rem]">
            <h3 className="text-[1.6rem] m-0 text-[var(--text-primary)] font-extrabold flex items-center">
              {model.name}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="inline-block ml-1 -mt-0.5 w-[22px] h-[22px] text-[#10B981]" title="Verified Profile">
                <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
              </svg>
            </h3>
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
            <TrackedA 
              href={getWhatsAppLink({ modelName: model.name, source: 'model_card' })}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="flex-1 bg-[var(--accent-primary)] hover:opacity-90 text-white rounded-full flex items-center justify-center gap-[0.4rem] px-[0.4rem] text-[14px] font-semibold h-[44px] whitespace-nowrap tracking-[-0.3px] transition-opacity"
              trackingData={{
                cta_action: 'whatsapp_chat',
                cta_source: 'model_card_book_now',
                model_name: model.name,
              }}
            >
              Book Now
            </TrackedA>
          </div>
        </div>
      )}
    </div>
  );
}
