"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { trackCtaClick } from '@/lib/analytics/tracker';

const premiumServices = [
  { icon: "🍑", title: "Backdoor Exploration", shortDesc: "For those with a taste for adventure", longDesc: "Dive into specialized, unrestricted backdoor action with our highly flexible VIP models." },
  { icon: "👅", title: "Passionate GFE Kissing", shortDesc: "Deep, wet, and deeply emotional", longDesc: "Experience the intoxicating thrill of raw, tongue-tangling French kisses that feel like the real deal." },
  { icon: "🥵", title: "Nude Body-to-Body", shortDesc: "Feel every curve pressed against you", longDesc: "Our seductive massage girls will cover you in oil and grind away every ounce of your tension." },
  { icon: "🍒", title: "Oral Climax (COM)", shortDesc: "Surrender to the ultimate release", longDesc: "Our open-minded escorts are eager to drop to their knees and take care of your deepest cravings." },
  { icon: "😈", title: "Dominance & Submission", shortDesc: "Take control or be controlled", longDesc: "Bring your darkest, most twisted fetishes to life with girls who love to play rough." },
  { icon: "💦", title: "Body Glaze (COB)", shortDesc: "The ultimate visual finish", longDesc: "Our stunning independent girls love getting messy and satisfying your deepest visual desires." },
  { icon: "💋", title: "Dual Pleasure 69", shortDesc: "Face-to-face ecstasy", longDesc: "Lose yourself in mutual, simultaneous pleasure that guarantees an explosive climax for both of you." },
  { icon: "👯‍♀️", title: "Double Fantasy (MFF)", shortDesc: "Why settle for one?", longDesc: "Sandwich yourself between two breathtaking Agra beauties for a wild, unforgettable night of double trouble." },
  { icon: "💎", title: "Limitless VIP Action", shortDesc: "No holding back", longDesc: "The ultimate premium package offering unrestricted, wild action tailored for elite gentlemen." },
  { icon: "🌙", title: "All-Night Companionship", shortDesc: "Lock the door and throw away the key", longDesc: "Enjoy marathon sessions, endless cuddles, and multiple rounds until the sun comes up." },
  { icon: "🚿", title: "Slippery Shower Fun", shortDesc: "Things get hotter when wet", longDesc: "Lather up and enjoy a slippery, highly intimate wash with a naked, eager companion." },
  { icon: "🛎️", title: "Discreet Room Delivery", shortDesc: "We bring the heat directly to your bed", longDesc: "Fast, unmarked outcall service to all major luxury hotels in Agra." },
  { icon: "💖", title: "Intimate GFE Connection", shortDesc: "The perfect blend of romance and raw lust", longDesc: "Enjoy deep affection, cuddling, and passionate intimacy without any boundaries." },
  { icon: "👩‍🏫", title: "Kinky Roleplay Scenarios", shortDesc: "Naughty schoolgirl or strict nurse?", longDesc: "Tell her what to wear and she will play the part perfectly for your private fantasy." },
  { icon: "📱", title: "Virtual Tease Sessions", shortDesc: "Can't wait until you arrive?", longDesc: "Get incredibly hot, one-on-one private video action with our local verified stunners." },
  { icon: "✈️", title: "Russian & Elite Models", shortDesc: "Taste exotic flavors", longDesc: "Book our premium international and Russian escorts for a breathtakingly luxurious encounter." },
  { icon: "🥂", title: "High-Society Dates", shortDesc: "Show her off", longDesc: "Articulate, stunningly beautiful arm candy perfect for making your colleagues envious before the real fun begins." },
  { icon: "👠", title: "Private Strip Show", shortDesc: "Your own personal VIP room", longDesc: "Watch her slowly take it all off just for you, right in the comfort of your hotel room." },
  { icon: "🛁", title: "Steamy Bath Time", shortDesc: "Submerge into pure bliss", longDesc: "Share a hot, sensual bubble bath filled with teasing touches and slippery exploration." },
  { icon: "💃", title: "Sensual Grind & Tease", shortDesc: "Feel the friction", longDesc: "Sit back and enjoy a hardcore, private lap dance from Agra's sexiest, most rhythmic escorts." }
];

export default function PremiumServices({ summaryMode = false }: { summaryMode?: boolean }) {
  const [showAll, setShowAll] = useState(false);
  const [openIndex, setOpenIndex] = useState(0);
  
  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-[60px] lg:py-[100px] bg-[var(--surface-color)]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-[var(--accent-primary)] font-semibold tracking-[2px] uppercase text-[12px] md:text-[14px] block mb-2 md:mb-3">Ultimate Pleasure</span>
          <h2 className="text-[22px] md:text-[32px] font-semibold mb-3 md:mb-4 text-[var(--text-primary)] tracking-tight">Our Premium Escort Services</h2>
          <p className="text-[16px] md:text-[18px] font-normal text-[#666] max-w-[800px] mx-auto leading-relaxed">
            Experience unrestricted VIP action, passionate GFE sessions, and wild double fantasies. Tell our elite escorts exactly what you desire.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {(summaryMode ? premiumServices.slice(0, 6) : premiumServices).map((service, index) => (
            <div key={index} className={`bg-white rounded-[16px] border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:border-[rgba(216,27,96,0.2)] transition-all overflow-hidden flex flex-col ${!summaryMode && !showAll && index >= 8 ? 'md:hidden' : ''}`}>
              
              <div 
                className="p-4 md:p-5 flex items-center gap-4 cursor-pointer md:cursor-default bg-white z-10"
                onClick={() => toggleAccordion(index)}
              >
                <div className="text-3xl flex-shrink-0 drop-shadow-sm">{service.icon}</div>
                <div className="flex-1 text-left min-w-0">
                  <h3 className="text-[16px] font-semibold text-gray-900 mb-1 leading-tight">{service.title}</h3>
                  <p className="text-[14px] font-normal text-gray-500 m-0 leading-snug pr-2">{service.shortDesc}</p>
                </div>
                <div className="md:hidden text-gray-400 flex-shrink-0">
                  <svg 
                    className={`w-5 h-5 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} 
                    fill="none" viewBox="0 0 24 24" stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
              
              <div 
                className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out md:grid-rows-[1fr] md:opacity-100 ${
                  openIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <div className="px-4 pb-4 md:px-5 md:pb-5 bg-white">
                    {!summaryMode && (
                      <p className="text-[14px] md:text-[16px] font-normal text-gray-600 leading-relaxed text-left m-0 mb-5 md:pt-2">
                        {service.longDesc}
                      </p>
                    )}
                    <div className="flex items-center justify-between">
                      {summaryMode ? (
                        <Link
                          href="/contact"
                          className="border border-[var(--accent-primary)] bg-transparent text-[var(--accent-primary)] hover:bg-[var(--accent-primary)] hover:text-white text-[12px] md:text-[14px] font-semibold px-4 py-2 rounded-full transition-colors no-underline whitespace-nowrap"
                          onClick={() => trackCtaClick({ cta_action: 'navigate_to_contact', cta_source: 'services_card_book_now' })}
                        >
                          Book Now
                        </Link>
                      ) : (
                        <span className="bg-[#fce4ec] text-[#d81b60] text-[12px] md:text-[14px] font-normal px-3 py-1.5 rounded-full whitespace-nowrap">
                          100% Boundary Safe
                        </span>
                      )}
                      {summaryMode ? (
                        <Link href="/services" className="text-[var(--accent-primary)] hover:opacity-80 text-[12px] md:text-[14px] font-semibold no-underline whitespace-nowrap">
                          View Details &rarr;
                        </Link>
                      ) : (
                        <Link
                          href="/contact"
                          className="border border-[var(--accent-primary)] bg-transparent text-[var(--accent-primary)] hover:bg-[var(--accent-primary)] hover:text-white text-[12px] md:text-[14px] font-semibold px-4 py-2 rounded-full transition-colors no-underline whitespace-nowrap"
                          onClick={() => trackCtaClick({ cta_action: 'navigate_to_contact', cta_source: 'services_card_book_model' })}
                        >
                          Book Model
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          {summaryMode ? (
            <Link 
              href="/services"
              className="inline-flex items-center justify-center gap-2 h-12 lg:h-14 px-6 text-[14px] lg:text-[16px] font-semibold rounded-[50px] border-2 border-[var(--accent-primary)] bg-transparent text-[var(--accent-primary)] hover:bg-[var(--accent-primary)] hover:text-white transition-colors w-full lg:w-auto no-underline"
            >
              Explore All {premiumServices.length}+ Premium Services
            </Link>
          ) : (
            <div className="hidden md:block">
              <button 
                onClick={() => setShowAll(!showAll)}
                className={`px-6 py-4 text-[1.05rem] whitespace-nowrap border-2 border-[var(--accent-primary)] text-[var(--accent-primary)] rounded-full font-bold transition-colors duration-300 ${showAll ? 'bg-[var(--surface-color)]' : 'bg-white hover:bg-[var(--accent-primary)] hover:text-white'}`}
              >
                {showAll ? 'View Less' : `View All ${premiumServices.length}+ Premium Services`}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
