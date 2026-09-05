'use client';
import { getWhatsAppLink } from "@/utils/whatsapp";
import FaqAccordion from './FaqAccordion';
import { trackCtaClick } from '@/lib/analytics/tracker';

export default function FaqSection({ 
  faqs, 
  title = "Frequently Asked Questions", 
  subtitle = "Find answers to the most common questions about our premium escort services in Agra." 
}: { 
  faqs: any[], 
  title?: string, 
  subtitle?: string 
}) {
  return (
    <section id="faq" className="py-[60px] lg:py-[100px] bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <span className="text-[var(--accent-primary)] font-semibold tracking-[2px] uppercase text-[12px] md:text-[14px] block mb-2 md:mb-3">Got Questions?</span>
          <h2 className="text-[22px] md:text-[32px] font-semibold mb-3 md:mb-4 text-[var(--text-primary)] tracking-tight">{title}</h2>
          {subtitle && (
            <p className="text-[16px] md:text-[18px] font-normal text-[#666] max-w-[800px] mx-auto leading-relaxed">
              {subtitle || "We&apos;ve compiled a list of the most common questions our clients ask. If you don&apos;t find your answer here, feel free to contact us directly."}
            </p>
          )}
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: CTA Box */}
          <div className="order-2 lg:order-1 lg:col-span-4 sticky top-24">
            <div className="bg-white border border-[var(--border-color)] p-6 md:p-8 rounded-[24px]">
              <h3 className="text-[var(--text-primary)] text-[22px] md:text-2xl font-semibold mb-4">Have a question?</h3>
              <p className="text-gray-600 mb-8 leading-relaxed text-[16px]">
                Can&apos;t find the answer you&apos;re looking for? Our booking experts are here to help you 24/7.
              </p>
              <a
                href={getWhatsAppLink({ source: 'faq' })}
                className="inline-flex w-full items-center justify-center gap-2 h-12 lg:h-14 px-6 text-[14px] lg:text-[16px] font-semibold rounded-[50px] border border-[var(--accent-primary)] bg-transparent text-[var(--accent-primary)] hover:bg-[var(--accent-primary)] hover:text-white transition-colors no-underline"
                onClick={() => trackCtaClick({ cta_action: 'whatsapp_chat', cta_source: 'faq_sidebar_whatsapp' })}
              >
                Contact Us via WhatsApp
              </a>
            </div>
          </div>

          {/* Right Column: Accordion */}
          <div className="order-1 lg:order-2 lg:col-span-8">
            <FaqAccordion faqs={faqs} />
          </div>
        </div>
      </div>
    </section>
  );
}
