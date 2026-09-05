import { getWhatsAppLink } from "@/utils/whatsapp";
import Head from 'next/head';
import TopLocalities from '@/components/TopLocalities';
import TrustBar from '@/components/TrustBar';
import FaqSection from '@/components/FaqSection';
import TrackedA from '@/components/tracking/TrackedA';

export const metadata = {
  title: 'Contact Agra Escorts | 24/7 Booking & Support',
  description: 'Get in touch with the top-rated Agra escort agency. 100% confidential, 24/7 availability for VIP hotel outcalls. Call or WhatsApp to book a premium companion.',
};

const contactFaqs = [
  {
    question: "How do I book an escort in Agra?",
    answer: "Booking is very simple! You can click the WhatsApp button or call us directly. Let us know your location (hotel name), preferred time, and any specific preferences, and we will arrange the perfect companion for you immediately."
  },
  {
    question: "Do I need to pay any advance amount?",
    answer: "Absolutely not. We operate on a strict Cash-on-Arrival policy. You only pay directly to the model once she arrives at your location. Beware of agencies asking for advance payments as they are often scams."
  },
  {
    question: "Is my privacy guaranteed?",
    answer: "100% Guaranteed. We do not store your personal details, and our models are trained to be highly discreet. They arrive in normal, elegant clothing like any regular guest."
  },
  {
    question: "Which areas in Agra do you serve?",
    answer: "We provide outcall services to all major 3, 4, and 5-star hotels across Agra, including Tajganj, Fatehabad Road, Sanjay Place, Sikandra, and Cantonment areas."
  }
];

export default function ContactPage() {

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://agraescort.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Contact Us",
        "item": "https://agraescort.com/contact"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <main className="min-h-screen bg-[var(--bg-color)]">
        {/* Contact Hero */}
                <section className="bg-gradient-to-br from-[var(--bg-color)] to-[#fff0f5] border-b border-[var(--border-color)]">
          <div className="max-w-7xl mx-auto px-3 py-12 md:py-16 md:px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-[28px] md:text-[36px] font-bold mb-4 text-[var(--text-primary)]">
              Contact <span className="text-[var(--accent-primary)]">Us</span>
            </h1>
            <p className="text-[16px] md:text-[18px] text-[var(--text-secondary)] max-w-3xl mx-auto">
              Our VIP customer support is available 24/7. Whether you want to book a model or have questions about our services, we are here to help with 100% confidentiality.
            </p>
          </div>
        </section>
      <TrustBar />

        {/* Map & Contact Info Section */}
        <section className="py-9 md:py-24">
          <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-start">
            
            {/* Map (Left) - Desktop Only */}
            <div className="hidden lg:block rounded-3xl overflow-hidden border border-[var(--border-color)] shadow-[var(--shadow-md)] h-full min-h-[500px] w-full">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113554.49397686616!2d77.92523281358045!3d27.176310243444062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39740d857c2f41d9%3A0x784aef38a9523b42!2sAgra%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                className='border-0 min-h-[500px]' 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Agra Escorts Service Area Map"
              ></iframe>
            </div>

            {/* Contact Details (Right) */}
            <div className="bg-transparent md:bg-[var(--surface-color)] p-0 md:p-12 rounded-3xl border-none md:border-solid md:border md:border-[var(--border-color)] shadow-none md:shadow-[0_20px_40px_rgba(233,30,99,0.05)]">
              <h2 className="text-[22px] md:text-[32px] mb-2 text-[var(--text-primary)] font-extrabold">VIP Contact</h2>
              <p className="text-[var(--text-secondary)] mb-6 md:mb-10 text-lg">Reach out to us anytime. We ensure 100% discretion and lightning-fast responses.</p>
              
              <div className="flex flex-col gap-4 md:gap-6">
                
                {/* Call Now Premium Block */}
                <TrackedA href="tel:+919105293429" className="flex items-center p-4 md:p-6 bg-white rounded-2xl border border-[rgba(233,30,99,0.2)] shadow-[0_10px_30px_rgba(233,30,99,0.08)] no-underline transition-transform duration-300 hover:scale-[1.02] cursor-pointer" trackingData={{ cta_action: 'phone_call', cta_source: 'contact_page_call' }}>
                  <div className="w-[40px] h-[40px] md:w-[60px] md:h-[60px] rounded-full bg-gradient-to-br from-[var(--accent-primary)] to-[#ff4081] flex items-center justify-center text-white mr-4 md:mr-6 shrink-0 shadow-[0_8px_20px_rgba(233,30,99,0.4)]">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 md:w-7 md:h-7">
                      <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[10px] md:text-[12px] text-[var(--accent-primary)] uppercase tracking-[1.5px] mb-1 font-semibold">24/7 Booking Line</h3>
                    <p className="text-[16px] md:text-[20px] font-semibold text-[var(--text-primary)] m-0">+91 91052 93429</p>
                  </div>
                  <div className="text-[var(--accent-primary)] opacity-60 ml-2">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5 md:w-6 md:h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
                  </div>
                  
                </TrackedA>

                {/* WhatsApp Premium Block */}
                <TrackedA href={getWhatsAppLink({ source: 'contact' })} target="_blank" rel="noopener noreferrer" className="flex items-center p-4 md:p-6 bg-white rounded-2xl border border-[rgba(37,211,102,0.3)] shadow-[0_10px_30px_rgba(37,211,102,0.1)] no-underline transition-transform duration-300 hover:scale-[1.02] cursor-pointer" trackingData={{ cta_action: 'whatsapp_chat', cta_source: 'contact_page_whatsapp' }}>
                  <div className="w-[40px] h-[40px] md:w-[60px] md:h-[60px] rounded-full bg-white flex items-center justify-center mr-4 md:mr-6 shrink-0 shadow-[0_8px_20px_rgba(37,211,102,0.2)]">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 md:w-10 md:h-10">
                      <path d="M20.52 3.449C18.24 1.17 15.24 0 12 0 5.383 0 0 5.383 0 12c0 2.115.553 4.184 1.6 6l-1.6 5.85 5.986-1.569c1.77.95 3.737 1.45 5.766 1.45h.005c6.617 0 12-5.383 12-12 0-3.208-1.248-6.223-3.52-8.497z" fill="#25D366"/>
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" fill="#FFF"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[10px] md:text-[12px] text-[#128C7E] uppercase tracking-[1.5px] mb-1 font-semibold">Book via WhatsApp</h3>
                    <p className="text-[16px] md:text-[20px] font-semibold text-[var(--text-primary)] m-0">+91 91052 93429</p>
                  </div>
                  <div className="text-[#128C7E] opacity-60 ml-2">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5 md:w-6 md:h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
                  </div>
                  
                </TrackedA>

                {/* Email Premium Block */}
                <TrackedA href="mailto:booking@agraescort.com" className="flex items-center p-4 md:p-6 bg-white rounded-2xl border border-[rgba(0,0,0,0.1)] shadow-[0_10px_30px_rgba(0,0,0,0.04)] no-underline transition-transform duration-300 hover:scale-[1.02] cursor-pointer" trackingData={{ cta_action: 'send_email', cta_source: 'contact_page_email' }}>
                  <div className="w-[40px] h-[40px] md:w-[60px] md:h-[60px] rounded-full bg-gradient-to-br from-[#666] to-[#333] flex items-center justify-center text-white mr-4 md:mr-6 shrink-0 shadow-[0_8px_20px_rgba(0,0,0,0.15)]">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 md:w-7 md:h-7">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[10px] md:text-[12px] text-[#555] uppercase tracking-[1.5px] mb-1 font-semibold">Book via Email</h3>
                    <p className="text-[16px] md:text-[20px] font-semibold text-[var(--text-primary)] m-0 break-all">booking@agraescort.com</p>
                  </div>
                  <div className="text-[#555] opacity-60 ml-2">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5 md:w-6 md:h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
                  </div>
                  
                </TrackedA>

              </div>
            </div>

          </div>
        </section>{/* FAQs */}
        <div className="pt-8 pb-16">
          <FaqSection faqs={contactFaqs} title="Booking FAQs" subtitle="Everything you need to know about booking an escort safely and discreetly in Agra." />
        </div>
        

        {/* Mobile Map Section (Placed before Top Localities) */}
        <section className="py-8 lg:hidden">
          <div className="container mx-auto px-4">
            <div className="rounded-3xl overflow-hidden border border-[var(--border-color)] shadow-[var(--shadow-md)] h-[400px] w-full">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113554.49397686616!2d77.92523281358045!3d27.176310243444062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39740d857c2f41d9%3A0x784aef38a9523b42!2sAgra%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                className='border-0 min-h-[400px]' 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Agra Escorts Service Area Map"
              ></iframe>
            </div>
          </div>
        </section>
        
        <TopLocalities />

    </main>
    </>
  );
}
