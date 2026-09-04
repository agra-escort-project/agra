import type { Metadata } from 'next';
import TopLocalities from '@/components/TopLocalities';
import Link from 'next/link';
import { locations } from '@/data/locations';
import PopularSearches from '@/components/PopularSearches';

export const metadata: Metadata = {
  title: 'All Locations | Agra Escorts & Premium Escorts',
  description: 'View all areas served by our premium escort agency in Agra. We provide VIP companions, independent escorts, and elite models across all top Agra neighborhoods.',
  alternates: {
    canonical: 'https://agraescort.com/locations',
  },
};

export default function LocationsHubPage() {
  // Group locations by category
  const groupedLocations = locations.reduce((acc, loc) => {
    if (!acc[loc.category]) {
      acc[loc.category] = [];
    }
    acc[loc.category].push(loc);
    return acc;
  }, {} as Record<string, typeof locations>);

  return (
    <>
      <main>
                <section className="bg-gradient-to-br from-[var(--bg-color)] to-[#fff0f5] border-b border-[var(--border-color)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16">
            <h1 className="text-[28px] md:text-[36px] font-bold mb-4 text-[var(--text-primary)]">
              Areas We Serve in Agra
            </h1>
            <p className="text-[16px] md:text-[18px] text-[var(--text-secondary)] max-w-3xl mx-auto">
              We provide 100% discreet, premium companionship across all major neighborhoods, corporate districts, and luxury hotels in Agra.
            </p>
          </div>
        </section>

        <section className="py-8 pb-20">
          <div className="container mx-auto px-4 max-w-[1000px]">
            {Object.entries(groupedLocations).map(([category, locs]) => (
              <div key={category} className="mb-16">
                <h2 className="text-[22px] md:text-[32px] text-[var(--accent-primary)] border-b-2 border-[var(--border-color)] pb-2 mb-8">
                  {category}
                </h2>
                <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-6">
                                    {locs.map(loc => {
                    const activeCount = (loc.name.length % 5) + 2;
                    const eta = 10 + (loc.name.length % 3) * 5; 
                    const desc = loc.uniqueDescription.length > 80 ? loc.uniqueDescription.substring(0, 80) + '...' : loc.uniqueDescription;
                    const tags = [loc.category.split(' ')[0].toUpperCase(), 'VERIFIED'];
                    
                    return (
                      <Link key={loc.id} href={`/${loc.slug}`} className="bg-white rounded-[24px] border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] p-5 md:p-6 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all flex flex-col no-underline group">
                        
                        <div className="flex justify-between items-center mb-4">
                          <span className="bg-emerald-50 text-emerald-600 px-2.5 py-1 rounded-md text-[10px] md:text-[12px] font-semibold flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                            {eta} Min ETA
                          </span>
                          <span className="bg-rose-50 text-rose-500 px-2.5 py-1 rounded-md text-[10px] md:text-[12px] font-semibold">
                            {activeCount} Active
                          </span>
                        </div>

                        <div className="mb-3">
                          <h3 className="text-[16px] md:text-[20px] font-semibold text-gray-900 m-0">{loc.name}</h3>
                        </div>

                        <p className="text-[14px] md:text-[16px] font-normal text-gray-500 leading-relaxed m-0 mb-5 md:min-h-[48px]">
                          {desc}
                        </p>

                        <div className="border-t border-gray-100 pt-4 mb-5 flex flex-wrap gap-2">
                          <span className="bg-gray-50 text-gray-500 px-2.5 py-1 rounded-md text-[12px] md:text-[14px] font-normal tracking-wide">{tags[0]}</span>
                          <span className="bg-orange-50 text-orange-600 px-2.5 py-1 rounded-md text-[12px] md:text-[14px] font-normal tracking-wide">{tags[1]}</span>
                        </div>

                        <div className="mt-auto w-full bg-gray-50/80 group-hover:bg-[var(--accent-primary)] group-hover:text-white transition-colors text-gray-700 text-[14px] md:text-[16px] font-semibold py-3 rounded-[12px] flex items-center justify-center gap-1">
                          Book {loc.name} <span aria-hidden="true">&rarr;</span>
                        </div>

                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Popular Searches */}
        <PopularSearches locationName="Agra" />
        <TopLocalities />
    </main>
    </>
  );
}
