import React from 'react';
import Link from 'next/link';

const categories = [
  { name: "Desi Bhabhis", slug: "agra-bhabhi-escorts", desc: "Mature, experienced, and highly seductive married women who know exactly how to please.", icon: "💋" },
  { name: "College Girls", slug: "agra-college-girl-escorts", desc: "Young, energetic, and innocent-looking beauties perfect for passionate GFE experiences.", icon: "🎓" },
  { name: "Russian Models", slug: "agra-russian-escorts", desc: "Stunning international escorts with flawless bodies and exotic features.", icon: "✈️" },
  { name: "VIP Models", slug: "agra-vip-escorts", desc: "High-profile fashion models and elite companions for high-society events.", icon: "💎" },
  { name: "Air Hostesses", slug: "agra-air-hostess-escorts", desc: "Sophisticated, beautiful, and extremely professional cabin crew girls.", icon: "🛫" },
  { name: "Housewives", slug: "agra-housewife-escorts", desc: "Discreet and lonely housewives seeking thrilling secret encounters.", icon: "🏠" },
  { name: "Corporate Girls", slug: "agra-corporate-escorts", desc: "Smart, articulate office executives perfect for dinner dates and intellectual connection.", icon: "💼" },
  { name: "Gym Girls", slug: "agra-gym-girl-escorts", desc: "Fit, flexible, and extremely stamina-driven fitness models.", icon: "🧘‍♀️" },
  { name: "Independent Escorts", slug: "agra-independent-escorts", desc: "Premium self-managed escorts offering more flexibility, longer dates, and highly personalized experiences.", icon: "🌟" }
];

export default function CategoriesSection() {
  return (
    <section id="categories" className="py-24 bg-[var(--bg-color)] border-t border-[var(--border-color)]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-[12px] md:text-[14px] font-semibold tracking-[2px] uppercase text-[var(--accent-primary)] block mb-2 md:mb-3">Find Your Perfect Match</span>
          <h2 className="text-[22px] md:text-[32px] font-semibold text-[var(--text-primary)] mb-3 md:mb-4 leading-[1.2]">
            Agra Escort Categories
          </h2>
          <p className="text-[16px] md:text-[18px] font-normal text-[var(--text-secondary)] max-w-[700px] mx-auto">
            We represent a diverse portfolio of independent companions. Choose the category that best fits your deepest desires.
          </p>
        </div>
        
        <div className="grid grid-cols-[repeat(auto-fill,minmax(min(100%,320px),1fr))] gap-3 md:gap-4">
          {categories.map((cat, index) => (
            <Link key={index} href={`/${cat.slug}`} className="p-4 md:p-5 relative bg-[var(--surface-color)] rounded-[20px] border border-[var(--border-color)] flex gap-[1.2rem] items-start shadow-[0_4px_20px_rgba(0,0,0,0.04)] text-left no-underline transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:border-[var(--accent-primary)]">
              <div className="w-[56px] h-[56px] shrink-0 rounded-[16px] bg-[#fdf2f8] flex items-center justify-center border border-[#fce7f3] text-[24px]">
                {cat.icon}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-[16px] md:text-[18px] font-semibold text-[var(--text-primary)] leading-snug mb-1 mt-0 pr-2">
                  {cat.name}
                </h3>
                <p className="text-[14px] md:text-[16px] font-normal text-[var(--text-secondary)] leading-relaxed m-0">
                  {cat.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
