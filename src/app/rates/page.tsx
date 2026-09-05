import type { Metadata } from 'next';
import TrustBar from '@/components/TrustBar';
import TopLocalities from '@/components/TopLocalities';
import Link from 'next/link';
import FaqSection from '@/components/FaqSection';

export const metadata: Metadata = {
  title: 'Agra Escorts Rates | Starting from ₹2,500',
  description: 'View the transparent pricing for the best Agra escorts and VIP escorts. Rates starting from ₹2,500. No advance payment required. 100% genuine and safe.',
  keywords: ['Agra escort price', 'Agra escort rates', 'cheap escorts Agra', 'VIP escort price Agra', 'Agra escort contact number with price'],
  alternates: {
    canonical: 'https://agraescort.com/rates',
  },
};

export default function RatesPage() {
  return (
    <>
      <main>
                <section className="bg-gradient-to-br from-[var(--bg-color)] to-[#fff0f5] border-b border-[var(--border-color)]">
          <div className="max-w-7xl mx-auto px-3 pt-8 pb-12 md:py-16 md:px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-[28px] md:text-[36px] font-bold mb-4 text-[var(--text-primary)]">
              Transparent Escort Rates in Agra
            </h1>
            <p className="text-[16px] md:text-[18px] text-[var(--text-secondary)] max-w-3xl mx-auto">
              Premium companionship starting from just ₹2,500. We believe in absolute transparency with zero hidden fees.
            </p>
          </div>
        </section>
      <TrustBar />

        <section className="py-[3rem] bg-[var(--surface-color)]">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="bg-gradient-to-br from-[var(--accent-primary)] to-[#ff80ab] text-white p-[2rem] rounded-[12px] text-center mb-[2rem] shadow-md">
              <h2 className="text-[22px] md:text-[32px] mb-[1rem] text-white font-bold">NO ADVANCE PAYMENT REQUIRED</h2>
              <p className="text-[1.2rem] m-0 text-white">
                We operate on 100% trust. You only pay cash directly to the model when she arrives at your location.
              </p>
            </div>

            <h2 className="text-[22px] md:text-[32px] font-bold text-center text-[var(--text-primary)] mb-10">Agra Escort Rates & Packages</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem] mb-[4rem]">
              
              {/* Standard Tier */}
              <div className="bg-[var(--bg-color)] p-[2rem] rounded-[12px] border border-[var(--border-color)] text-center">
                <h3 className="text-[1.5rem] text-[var(--accent-primary)] mb-[1rem] font-semibold">Standard Companions</h3>
                <p className="text-[var(--text-secondary)] mb-[2rem]">Perfect for quick, passionate encounters.</p>
                <div className="text-[2.5rem] font-bold mb-[2rem] text-[var(--text-primary)]">₹2,500 <span className="text-[1rem] text-[var(--text-secondary)] font-normal">/ hour</span></div>
                <ul className="list-none p-0 m-0 mb-[2rem] text-left text-[var(--text-primary)]">
                  <li className="py-[0.5rem] border-b border-[var(--border-color)]">✓ 1 Hour: ₹2,500</li>
                  <li className="py-[0.5rem] border-b border-[var(--border-color)]">✓ 2 Hours: ₹4,500</li>
                  <li className="py-[0.5rem]">✓ Full Night: ₹8,000</li>
                </ul>
                <Link href="/#contact" className="inline-block w-full text-center bg-[var(--surface-color)] text-[var(--text-primary)] px-6 py-3 rounded-md border border-[var(--border-color)] hover:bg-[var(--border-color)] transition-colors font-medium">Book Now</Link>
              </div>

              {/* VIP Tier */}
              <div className="bg-[var(--bg-color)] p-[2rem] rounded-[12px] border-2 border-[var(--accent-primary)] text-center lg:scale-105 relative mt-8 lg:mt-0">
                <div className="absolute top-[-15px] left-1/2 -translate-x-1/2 bg-[var(--accent-primary)] text-white px-4 py-1 rounded-full text-[0.9rem] font-semibold whitespace-nowrap">MOST POPULAR</div>
                <h3 className="text-[1.5rem] text-[var(--accent-primary)] mb-[1rem] font-semibold">VIP Models</h3>
                <p className="text-[var(--text-secondary)] mb-[2rem]">Stunning, highly-rated escorts.</p>
                <div className="text-[2.5rem] font-bold mb-[2rem] text-[var(--text-primary)]">₹5,000 <span className="text-[1rem] text-[var(--text-secondary)] font-normal">/ hour</span></div>
                <ul className="list-none p-0 m-0 mb-[2rem] text-left text-[var(--text-primary)]">
                  <li className="py-[0.5rem] border-b border-[var(--border-color)]">✓ 1 Hour: ₹5,000</li>
                  <li className="py-[0.5rem] border-b border-[var(--border-color)]">✓ 2 Hours: ₹9,000</li>
                  <li className="py-[0.5rem]">✓ Full Night: ₹15,000</li>
                </ul>
                <Link href="/#contact" className="inline-block w-full text-center bg-[var(--accent-primary)] text-white px-6 py-3 rounded-md hover:opacity-90 transition-opacity font-medium">Book VIP</Link>
              </div>

              {/* Premium Tier */}
              <div className="bg-[var(--bg-color)] p-[2rem] rounded-[12px] border border-[var(--border-color)] text-center mt-8 lg:mt-0">
                <h3 className="text-[1.5rem] text-[var(--accent-primary)] mb-[1rem] font-semibold">Premium & Russian</h3>
                <p className="text-[var(--text-secondary)] mb-[2rem]">The absolute pinnacle of luxury.</p>
                <div className="text-[2.5rem] font-bold mb-[2rem] text-[var(--text-primary)]">₹10,000 <span className="text-[1rem] text-[var(--text-secondary)] font-normal">/ hour</span></div>
                <ul className="list-none p-0 m-0 mb-[2rem] text-left text-[var(--text-primary)]">
                  <li className="py-[0.5rem] border-b border-[var(--border-color)]">✓ 1 Hour: ₹10,000</li>
                  <li className="py-[0.5rem] border-b border-[var(--border-color)]">✓ 2 Hours: ₹18,000</li>
                  <li className="py-[0.5rem]">✓ Full Night: ₹25,000</li>
                </ul>
                <Link href="/#contact" className="inline-block w-full text-center bg-[var(--surface-color)] text-[var(--text-primary)] px-6 py-3 rounded-md border border-[var(--border-color)] hover:bg-[var(--border-color)] transition-colors font-medium">Book Premium</Link>
              </div>

            </div>

          </div>
        </section>

        
        {/* SEO Rich Text Section */}
        <section className="py-20 bg-white border-t border-[var(--border-color)]">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-[26px] md:text-[36px] font-bold text-[var(--text-primary)] mb-10 text-center tracking-tight">Comprehensive Guide to Agra Escort Prices</h2>
            
            <div className="space-y-10 text-gray-600 leading-relaxed text-[15px] md:text-[17px]">
              <div className="bg-rose-50/50 p-6 md:p-8 rounded-[24px]">
                <h3 className="text-[20px] md:text-[24px] font-bold text-gray-900 mb-4">Understanding "Per Shot" vs "Per Hour" Rates</h3>
                <p className="mb-4">
                  A frequent question we receive on our booking line is regarding the difference between a <strong>"per shot" price</strong> and an hourly rate. At our elite Agra escort agency, we strictly operate on time-based bookings rather than per-shot limitations. 
                </p>
                <p className="m-0">
                  When you book a companion for an hour (starting at ₹2,500), that time is entirely yours. We do not place arbitrary limits on "shots" or intimacy during your booked duration. This ensures a natural, unhurried, and highly romantic Girlfriend Experience (GFE) without the pressure of a ticking clock per session.
                </p>
              </div>

              <div>
                <h3 className="text-[20px] md:text-[24px] font-bold text-gray-900 mb-4">What is Included in Your Agra Escort Price?</h3>
                <p className="mb-4">
                  Transparency is one of our core pillars. The prices listed on this page are all-inclusive for standard in-room companionship. When you pay our <strong>Agra escort rates</strong>, you receive:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3"><span className="text-[var(--accent-primary)] mt-1">✓</span> <span><strong>Uninterrupted Time:</strong> Full devotion and attention from your chosen model.</span></li>
                  <li className="flex items-start gap-3"><span className="text-[var(--accent-primary)] mt-1">✓</span> <span><strong>Discreet Outcall Travel:</strong> Free travel to major 5-star hotels and premium residential areas in Agra (like Tajganj, Fatehabad Road, and Kamla Nagar).</span></li>
                  <li className="flex items-start gap-3"><span className="text-[var(--accent-primary)] mt-1">✓</span> <span><strong>The Complete GFE:</strong> Kissing, cuddling, deep conversations, and passionate intimacy.</span></li>
                </ul>
              </div>

              <div>
                <h3 className="text-[20px] md:text-[24px] font-bold text-gray-900 mb-4">Why Avoid "Cheap Escorts" in Agra?</h3>
                <p className="mb-4">
                  While it might be tempting to search for the absolute lowest <em>Agra call girl price</em>, drastically cheap rates almost always signal a scam. Ultra-low prices are typically bait-and-switch traps used by fake agencies to demand UPI advance payments. 
                </p>
                <p className="m-0">
                  We price our services competitively starting at ₹2,500 to ensure we can provide verified, stunning, and hygienic models who are punctual and professional. With our <strong>Zero Advance Payment</strong> policy, you can be 100% confident that you are getting premium value for your money.
                </p>
              </div>
              
              <div className="bg-[var(--surface-color)] p-6 md:p-8 rounded-[24px] border border-[var(--border-color)]">
                <h3 className="text-[20px] md:text-[24px] font-bold text-gray-900 mb-4">Custom Packages for Business Travelers</h3>
                <p className="m-0">
                  Visiting Agra for a corporate conference or a luxury tour of the Taj Mahal? We offer customized extended-day packages. Whether you need a sophisticated VIP model for a weekend getaway or a stunning Russian escort to accompany you to a high-profile dinner, our dispatch team can tailor a bespoke pricing package perfectly suited to your itinerary.
                </p>
              </div>

            </div>
          </div>
        </section>

        <FaqSection 
          title="Agra Escort Rates FAQs"
          subtitle="Find answers to all your doubts about Agra escort rates, payments, and hidden charges."
          faqs={[
            {
              question: "What is the average Agra escort price for a full night?",
              answer: "Our full night <strong>Agra escort rates</strong> start at ₹8,000 for standard companions, ₹15,000 for VIP models, and ₹25,000 for our elite Russian escorts. A full night booking offers the best value for an unforgettable extended experience."
            },
            {
              question: "Are there any hidden travel charges for outcall services?",
              answer: "For outcalls within central Agra and major areas like <a href='/best-escorts-tajganj-agra'>Tajganj</a> or <a href='/best-escorts-sanjay-place-agra'>Sanjay Place</a>, travel is completely free. A small cab fare may be added only for extremely remote suburbs."
            },
            {
              question: "Do you offer cheap escorts in Agra?",
              answer: "While we position ourselves as a premium agency, we believe luxury should be accessible. Our standard companionship tier starts at a highly affordable ₹2,500 per hour, making us a top choice for clients seeking high quality at the best <strong>Agra escort price</strong>."
            },
            {
              question: "Is cash on delivery available for VIP escorts?",
              answer: "Yes! We operate exclusively on a <strong>cash-on-arrival</strong> basis for all our tiers, including our most exclusive VIP models. You only hand over the payment once the companion is safely inside your room."
            },
            {
              question: "What is the exact price difference between standard and Russian escorts?",
              answer: "Our standard, beautiful Indian companions start at ₹2,500 per hour. Our highly sought-after, premium Russian and international escorts start at ₹10,000 per hour, reflecting their absolute exclusivity and elite status in Agra."
            },
            {
              question: "Can I negotiate the Agra escort rates?",
              answer: "Our rates are highly competitive and fixed. We do not negotiate on prices to ensure fair, respectful compensation for our premium models and to maintain our exceptionally high service standards."
            },
            {
              question: "How do I confirm my booking without an advance payment?",
              answer: "Simply contact our dispatch team via our <strong>Agra escort contact number</strong> on WhatsApp. Once you share your live location and room number, we will dispatch the model immediately. No deposit needed!"
            }
          ]}
        />
        <TopLocalities />
    </main>
    </>
  );
}
