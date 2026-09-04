import type { Metadata } from 'next';
import TopLocalities from '@/components/TopLocalities';
import Link from 'next/link';
import PremiumServices from '@/components/PremiumServices';

export const metadata: Metadata = {
  title: 'Premium Escort Services in Agra | VIP Companionship',
  description: 'Explore our premium escort services in Agra. From discreet outcalls to romantic dates, our independent models offer completely safe and unforgettable experiences.',
  keywords: ['Agra escort services', 'Incall escorts Agra', 'Outcall escorts Agra', 'VIP companionship Agra', 'Agra independent models'],
  alternates: {
    canonical: 'https://agraescort.com/services',
  },
};

export default function ServicesPage() {
  return (
    <>
      <main>
                <section className="bg-gradient-to-br from-[var(--bg-color)] to-[#fff0f5] border-b border-[var(--border-color)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16">
            <h1 className="text-[28px] md:text-[36px] font-bold mb-4 text-[var(--text-primary)]">
              Exclusive Agra Escort Services
            </h1>
            <p className="text-[16px] md:text-[18px] text-[var(--text-secondary)] max-w-3xl mx-auto">
              Explore our range of premium escort services in Agra. From discreet hotel outcalls to luxurious overnight stays, we cater to all your elite desires.
            </p>
          </div>
        </section>

        <section className="py-[4rem]">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-[22px] md:text-[32px] font-bold text-center text-[var(--text-primary)] mb-10">Premium Escort Services in Agra</h2>
            <div className="grid gap-[3rem]">
              
              {/* Outcall Service */}
              <article className="bg-white p-[2rem] rounded-[20px] shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-[var(--border-color)] transition-all duration-300 hover:shadow-lg">
                <h3 className="text-[var(--accent-primary)] text-[1.8rem] mb-[1rem] font-semibold">Outcall Agra Escorts</h3>
                <p className="text-[1.1rem] mb-[1.5rem] leading-[1.7] text-[var(--text-secondary)]">
                  Our most requested service. Enjoy the ultimate privacy and comfort by having one of our gorgeous models visit you directly. Whether you are staying at a luxury hotel near the Taj Mahal or relaxing at your private residence, our outcall escorts in Agra arrive quickly, discreetly, and ready to entertain.
                </p>
                <ul className="flex flex-col gap-[0.8rem] mb-[2rem] text-[var(--text-secondary)]">
                  <li>✓ Delivery to all major hotels and resorts in Agra</li>
                  <li>✓ Unmarked arrival for 100% discretion</li>
                  <li>✓ Fast arrival times (typically 30-45 mins)</li>
                </ul>
                <Link href="/locations" className="inline-block bg-[var(--surface-color)] text-[var(--text-primary)] px-6 py-3 rounded-md border border-[var(--border-color)] hover:bg-[var(--border-color)] transition-colors font-medium">View Service Areas</Link>
              </article>

              {/* Incall Service */}
              <article className="bg-white p-[2rem] rounded-[20px] shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-[var(--border-color)] transition-all duration-300 hover:shadow-lg">
                <h3 className="text-[var(--accent-primary)] text-[1.8rem] mb-[1rem] font-semibold">Incall Escorts in Agra</h3>
                <p className="text-[1.1rem] mb-[1.5rem] leading-[1.7] text-[var(--text-secondary)]">
                  If you prefer to escape your current environment, we offer highly secure, premium incall locations in central Agra. These safe spaces are designed for your comfort and absolute privacy, allowing you to fully relax and enjoy the company of our elite incall escorts without any interruptions.
                </p>
                <ul className="flex flex-col gap-[0.8rem] mb-[2rem] text-[var(--text-secondary)]">
                  <li>✓ Safe and secure premium apartments</li>
                  <li>✓ Completely private environments</li>
                  <li>✓ Clean, comfortable, and luxurious settings</li>
                </ul>
                <Link href="/rates" className="inline-block bg-[var(--surface-color)] text-[var(--text-primary)] px-6 py-3 rounded-md border border-[var(--border-color)] hover:bg-[var(--border-color)] transition-colors font-medium">View Rates</Link>
              </article>

              {/* Dinner Dates */}
              <article className="bg-white p-[2rem] rounded-[20px] shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-[var(--border-color)] transition-all duration-300 hover:shadow-lg">
                <h3 className="text-[var(--accent-primary)] text-[1.8rem] mb-[1rem] font-semibold">Dinner Dates & VIP Companionship</h3>
                <p className="text-[1.1rem] mb-[1.5rem] leading-[1.7] text-[var(--text-secondary)]">
                  Need a stunning companion for a corporate event, a private party, or a romantic dinner date? Our VIP Agra escorts are highly educated, articulate, and know how to carry themselves in high-society settings. Impress your colleagues or simply enjoy a beautiful conversation before heading back for private time.
                </p>
              </article>

              {/* Weekend Travel */}
              <article className="bg-white p-[2rem] rounded-[20px] shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-[var(--border-color)] transition-all duration-300 hover:shadow-lg">
                <h3 className="text-[var(--accent-primary)] text-[1.8rem] mb-[1rem] font-semibold">Overnight VIP Escorts in Agra</h3>
                <p className="text-[1.1rem] mb-[1.5rem] leading-[1.7] text-[var(--text-secondary)]">
                  For clients seeking deeper connections, we offer full-night and weekend travel bookings. Take one of our independent escorts in Agra on a weekend getaway or enjoy a long, uninterrupted night of passion. Our extended services offer the best value and the most intimate experiences.
                </p>
                <Link href="/#contact" className="inline-block bg-[var(--accent-primary)] text-white px-6 py-3 rounded-md hover:opacity-90 transition-opacity text-[1.05rem] whitespace-nowrap font-medium">Book an Extended Session</Link>
              </article>

            </div>

          </div>
        </section>
        
        {/* Premium Services Grid */}
        <PremiumServices />
        <TopLocalities />
    </main>
    </>
  );
}
