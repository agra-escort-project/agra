"use client";

import { useState } from 'react';

type FAQ = {
  question: string;
  answer: string;
};

export default function FaqAccordion({ faqs }: { faqs: FAQ[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col gap-4">
      {faqs.map((faq, index) => {
        const isActive = activeIndex === index;
        return (
          <div key={index} className="border border-[var(--border-color,#eee)] rounded-xl bg-[var(--surface-color,white)] overflow-hidden shadow-sm">
            <button 
              className="w-full flex items-center justify-between p-5 text-left text-[var(--text-primary)] font-semibold hover:bg-black/5 transition-colors" 
              onClick={() => toggleAccordion(index)}
              aria-expanded={isActive}
            >
              <span>{faq.question}</span>
              <span className="text-xl leading-none text-[var(--accent-primary)] font-light ml-4 flex-shrink-0">{isActive ? '−' : '+'}</span>
            </button>
            <div 
              className={`grid transition-[grid-template-rows] duration-300 ease-out ${isActive ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
            >
              <div className="overflow-hidden">
                <div 
                  className="p-5 pt-0 text-[var(--text-secondary,#666)] leading-relaxed prose prose-sm max-w-none"
                  dangerouslySetInnerHTML={{ __html: faq.answer }} 
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
