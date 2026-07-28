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
    <div className="faq-accordion">
      {faqs.map((faq, index) => {
        const isActive = activeIndex === index;
        return (
          <div key={index} className={`faq-item ${isActive ? 'active' : ''}`}>
            <button 
              className="faq-question" 
              onClick={() => toggleAccordion(index)}
              aria-expanded={isActive}
            >
              <span>{faq.question}</span>
              <span className="faq-icon">{isActive ? '−' : '+'}</span>
            </button>
            <div 
              className="faq-answer-wrapper" 
              style={{
                display: 'grid',
                gridTemplateRows: isActive ? '1fr' : '0fr',
                transition: 'grid-template-rows 0.3s ease-out'
              }}
            >
              <div className="faq-answer-inner" style={{ overflow: 'hidden' }}>
                <div 
                  className="faq-answer"
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
