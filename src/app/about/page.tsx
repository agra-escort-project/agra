import type { Metadata } from 'next';
import TrustBar from '@/components/TrustBar';
import TopLocalities from '@/components/TopLocalities';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About Us | Trusted Agra Escorts & VIP Escort Agency',
  description: 'Discover the premier escort agency in Agra. We offer highly vetted, independent VIP escorts, Russian models, and 100% genuine profiles with zero advance payment.',
  keywords: ['About Agra escorts', 'Trusted escort agency Agra', 'VIP escorts Agra', 'Genuine independent models', 'Agra companionship agency', 'Best escorts in Agra'],
  alternates: {
    canonical: 'https://agraescort.com/about',
  },
};

export default function AboutPage() {
  return (
    <main className="bg-white text-[var(--text-primary)]">
      
      {/* 1. Hero Section */}
              <section className="bg-gradient-to-br from-[var(--bg-color)] to-[#fff0f5] border-b border-[var(--border-color)]">
          <div className="max-w-7xl mx-auto px-3 py-12 md:py-16 md:px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-[28px] md:text-[36px] font-bold mb-4 text-[var(--text-primary)]">
              Agra&apos;s Most Elite Escort Agency
            </h1>
            <p className="text-[16px] md:text-[18px] text-[var(--text-secondary)] max-w-3xl mx-auto">
              Welcome to the most prestigious companionship service in the city. Our agency caters exclusively to gentlemen who demand nothing but the absolute best. Whether you are traveling for a high-stakes business meeting or seeking a luxurious weekend getaway near the Taj Mahal, we provide breathtaking independent models who redefine elegance and charm.
            </p>
          </div>
        </section>
      <TrustBar />

      {/* 3. Mission Section (Overlapping Images) */}
      <section className="py-10 md:py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap-reverse items-center justify-between gap-20">
            
            <div className="flex-[1_1_450px] relative">
              <div className="relative w-[85%] pb-[90%] rounded-[32px] overflow-hidden">
                 <Image 
                  src="/gallary/neha/hot-girl-pic-agra-neha-1.jpg" 
                  alt="Our Commitment to Excellence" 
                  fill
                  className='object-cover'
                />
              </div>
              <div className="absolute -bottom-8 right-0 w-[55%] pb-[55%] rounded-3xl overflow-hidden border-[10px] border-white shadow-[0_20px_40px_rgba(0,0,0,0.15)]">
                <Image 
                  src="/gallary/divya/callgirl-pic-agra-divya-1.jpg" 
                  alt="Premium Independent Models" 
                  fill
                  className='object-cover'
                />
              </div>
            </div>

            <div className="flex-[1_1_450px]">
              <h2 className="text-[22px] md:text-[32px] mb-6 text-[var(--text-primary)] font-bold">Our Commitment to Excellence</h2>
              <p className="text-[16px] text-[var(--text-secondary)] leading-relaxed mb-10 font-[var(--font-inter),sans-serif]">
                Our core philosophy revolves around delivering an unparalleled VIP experience free from the typical anxieties of the adult entertainment industry. We have completely eliminated upfront deposit scams, ensuring that our clients feel entirely secure from the moment they contact us to the moment their companion arrives.
              </p>
              
              <ul className="list-none p-0 m-0 flex flex-col gap-6">
                {[
                  "Providing elite Russian, Indian, and international models.",
                  "Strictly enforcing a cash-only, pay-on-arrival policy.",
                  "Protecting client identity with end-to-end privacy measures.",
                  "Offering premium outcall services to all 5-star hotels in Agra."
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="text-[#128C7E] mt-[0.1rem]">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                    </div>
                    <span className="text-[16px] text-[var(--text-primary)] font-medium font-[var(--font-inter),sans-serif]">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
            
          </div>
        </div>
      </section>

      {/* 4. Restored Features / Trust Pillars */}
      <section className="py-10 md:py-24 bg-[var(--surface-color)]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
             <h2 className="text-[22px] md:text-[32px] font-bold mb-4 text-[var(--text-primary)]">The Pillars of Our Agency</h2>
             <p className="text-[var(--text-secondary)] text-[16px] max-w-[700px] mx-auto">
               We have built our reputation by prioritizing transparency and client satisfaction above all else. Here is what separates us from the rest.
             </p>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-8">
            
            <div className="bg-white p-10 rounded-2xl border border-[var(--border-color)] shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-[24px] mb-4 text-[var(--text-primary)] font-bold">100% Genuine Profiles</h3>
              <p className="text-[var(--text-secondary)] leading-relaxed font-[var(--font-inter),sans-serif]">
                What you see is exactly who arrives at your door. We strictly verify every single model in our portfolio. No bait-and-switch tactics, no deceptive angles. Just breathtakingly beautiful women ready to entertain.
              </p>
            </div>

            <div className="bg-white p-10 rounded-2xl border border-[var(--border-color)] shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-[24px] mb-4 text-[var(--text-primary)] font-bold">Zero Advance Payment</h3>
              <p className="text-[var(--text-secondary)] leading-relaxed font-[var(--font-inter),sans-serif]">
                We do not ask for a single rupee upfront. Our entire business model is built on mutual trust. You only pay directly to the companion when she arrives at your location, guaranteeing you are never scammed.
              </p>
            </div>

            <div className="bg-white p-10 rounded-2xl border border-[var(--border-color)] shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
              <div className="text-4xl mb-4">🤫</div>
              <h3 className="text-[24px] mb-4 text-[var(--text-primary)] font-bold">Strict Privacy Policy</h3>
              <p className="text-[var(--text-secondary)] leading-relaxed font-[var(--font-inter),sans-serif]">
                Your privacy is sacred to us. We do not store your personal data, we do not require your real name, and our models are trained to be completely discreet upon arrival and departure from your hotel or residence.
              </p>
            </div>

            <div className="bg-white p-10 rounded-2xl border border-[var(--border-color)] shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
              <div className="text-4xl mb-4">🕰️</div>
              <h3 className="text-[24px] mb-4 text-[var(--text-primary)] font-bold">24/7 Availability</h3>
              <p className="text-[var(--text-secondary)] leading-relaxed font-[var(--font-inter),sans-serif]">
                Desire doesn&apos;t follow a schedule. Whether it&apos;s a late-night outcall to your hotel in Tajganj or a midday meeting, our booking agents and companions are available 24 hours a day, 7 days a week across all of Agra.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Vision Section (Overlapping Images) */}
      <section className="py-10 md:py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between gap-20">
            
            <div className="flex-[1_1_450px]">
              <h2 className="text-[22px] md:text-[32px] mb-6 text-[var(--text-primary)] font-bold">Redefining Luxury Companionship</h2>
              <p className="text-[16px] text-[var(--text-secondary)] leading-relaxed mb-10 font-[var(--font-inter),sans-serif]">
                We envision a standard of service where booking an escort is as seamless, professional, and refined as securing a reservation at a Michelin-star restaurant. By bridging the gap between high-society clients and elite companions, we are setting a completely new benchmark for the adult entertainment industry in Agra.
              </p>
              
              <ul className="list-none p-0 m-0 flex flex-col gap-6">
                {[
                  "Curating the most breathtaking portfolio in Uttar Pradesh.",
                  "Training our companions in high-society etiquette.",
                  "Expanding our exclusive VIP hotel outcall network.",
                  "Ensuring every interaction is draped in luxury and respect."
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="text-[#128C7E] mt-[0.1rem]">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                    </div>
                    <span className="text-[16px] text-[var(--text-primary)] font-medium font-[var(--font-inter),sans-serif]">{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex-[1_1_450px] relative">
              <div className="relative w-[90%] ml-auto pb-[90%] rounded-[32px] overflow-hidden">
                 <Image 
                  src="/gallary/divya/best-callgirl-in-agra-divya-1.jpg" 
                  alt="Our Vision - Agra Escorts" 
                  fill
                  className='object-cover'
                />
              </div>
              <div className="absolute bottom-8 left-0 w-[50%] pb-[50%] rounded-3xl overflow-hidden border-[10px] border-white shadow-[0_20px_40px_rgba(0,0,0,0.15)]">
                <Image 
                  src="/gallary/neha/sexy-girl-pic-agra-neha-1.jpg" 
                  alt="High Society Companions" 
                  fill
                  className='object-cover'
                />
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* 6. Comprehensive SEO Section */}
      <section className="py-10 md:py-24 bg-gradient-to-b from-transparent to-rose-50/30 border-t border-[var(--border-color)]">
        <div className="container mx-auto px-4">
          <div className="max-w-[1100px] mx-auto bg-white p-8 md:p-16 rounded-[32px] border border-rose-100 shadow-[0_20px_40px_rgba(216,27,96,0.04)]">
            <h2 className="text-[28px] md:text-[42px] font-extrabold text-[var(--text-primary)] mb-10 tracking-tight text-center max-w-3xl mx-auto leading-tight">
              Why We Rank as the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-primary)] to-rose-400">Best Escort Agency in Agra</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-10 md:gap-16">
              <div className="space-y-6 text-[15px] md:text-[17px] text-gray-600 leading-relaxed">
                <p>
                  When searching for the <strong>best escorts in Agra</strong>, tourists and locals alike seek a service that is highly dependable, utterly discreet, and visually spectacular. At Agra Escorts, we have meticulously built an agency that ticks every single box.
                </p>
                <div className="bg-rose-50 border-l-[6px] border-[var(--accent-primary)] p-6 rounded-r-2xl shadow-sm">
                  <h3 className="font-bold text-[var(--text-primary)] mb-2 text-[18px] md:text-[20px]">Unmatched Elite Portfolio</h3>
                  <p className="m-0 text-[14px] md:text-[15px] leading-relaxed text-gray-700">From independent call girls in Tajganj to high-end Russian escorts available for outcalls in Fatehabad Road&apos;s 5-star hotels, our portfolio is unmatched in the city of the Taj Mahal.</p>
                </div>
              </div>

              <div className="space-y-6 text-[15px] md:text-[17px] text-gray-600 leading-relaxed">
                <p>
                  Our strict verification process means that every VIP model, college girl, and housewife profile you see in our gallery is <strong>100% authentic</strong>. We understand the hesitation associated with booking an escort online.
                </p>
                <div className="bg-gray-50 border-l-[6px] border-gray-400 p-6 rounded-r-2xl shadow-sm">
                  <h3 className="font-bold text-[var(--text-primary)] mb-2 text-[18px] md:text-[20px]">Zero Advance Payment Policy</h3>
                  <p className="m-0 text-[14px] md:text-[15px] leading-relaxed text-gray-700">You never have to worry about UPI scams or fake booking fees—you simply choose your companion, share your location, and pay cash directly to her upon arrival.</p>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-10 border-t border-rose-100 text-center max-w-4xl mx-auto">
              <p className="text-[16px] md:text-[20px] text-gray-800 font-medium leading-relaxed">
                Whether you need a sophisticated date for a corporate dinner, a passionate companion for a romantic evening, or a wild <strong className="text-[var(--accent-primary)]">GFE (Girlfriend Experience)</strong> to spice up your weekend, our Agra escort agency provides an unparalleled level of service. 
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Restored Bottom CTA */}
      <section className="py-10 md:py-24 bg-[var(--bg-color)]">
        <div className="container mx-auto px-4">
          <div className="text-center py-16 px-8 bg-gradient-to-br from-[var(--surface-color)] to-white rounded-3xl border border-[var(--border-color)] shadow-[0_20px_40px_rgba(0,0,0,0.05)]">
            <h2 className="text-[22px] md:text-[32px] mb-4 text-[var(--text-primary)] font-bold">Ready to Experience the Best?</h2>
            <p className="text-[16px] mb-10 text-[var(--text-secondary)] max-w-[600px] mx-auto">
              Contact us now to book your VIP companion. We guarantee 100% satisfaction and absolute discretion.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 h-12 lg:h-14 px-6 text-[14px] lg:text-[16px] font-semibold rounded-[50px] bg-[var(--accent-primary)] text-white hover:opacity-90 transition-opacity w-full md:w-auto">Contact on WhatsApp</Link>
              <Link href="/gallery" className="inline-flex items-center justify-center gap-2 h-12 lg:h-14 px-6 text-[14px] lg:text-[16px] font-semibold rounded-[50px] border border-[var(--accent-primary)] bg-transparent text-[var(--accent-primary)] hover:bg-[var(--accent-primary)] hover:text-white transition-colors w-full md:w-auto">View Gallery</Link>
            </div>
          </div>
        </div>
      </section>

      <TopLocalities />
    </main>
  );
}
