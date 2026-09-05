import Head from 'next/head';
import TrustBar from '@/components/TrustBar';
import TopLocalities from '@/components/TopLocalities';
import Image from 'next/image';
import Link from 'next/link';
import ModelCard from '@/components/ModelCard';
import { getAllModels } from '@/data/models';

export const metadata = {
  title: 'Agra Escorts Photos & Images | Real VIP Call Girl Gallery',
  description: 'Browse our exclusive gallery of premium VIP escorts, Russian models, and call girls in Agra. View 100% genuine pictures, real unfiltered photos, and verified images.',
};

export default function GalleryPage() {
  const models = getAllModels();

  return (
    <>
      <main className="min-h-screen bg-[var(--bg-color)]">
        {/* Gallery Hero */}
                <section className="bg-gradient-to-br from-[var(--bg-color)] to-[#fff0f5] border-b border-[var(--border-color)]">
          <div className="max-w-7xl mx-auto px-3 pt-8 pb-12 md:py-16 md:px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-[28px] md:text-[36px] font-bold mb-4 text-[var(--text-primary)]">
              Real Escort Photos & <span className="text-[var(--accent-primary)]">Call Girl Images</span> in Agra
            </h1>
            <p className="text-[16px] md:text-[18px] text-[var(--text-secondary)] max-w-3xl mx-auto">
              We believe in 100% transparency. Browse our exclusive gallery to see real photos, unedited pictures, and verified images of stunning independent call girls and Russian models in Agra. The exact face in the photo is exactly who will arrive at your door.
            </p>
          </div>
        </section>
      <TrustBar />

        {/* Gallery Grid */}
        <section className="pt-12 pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {models.map((model) => (
                <div key={model.id}><ModelCard model={model} imageHeight="400px" showButtons={true} /></div>
              ))}
            </div>
          </div>
        </section>

        {/* SEO Content Block */}
        <section className="pt-16 pb-24 bg-[var(--bg-color)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[var(--surface-color)] p-8 md:p-12 rounded-3xl border border-[var(--border-color)]">
              <h2 className="text-[22px] md:text-[32px] font-bold mb-6 text-[var(--text-primary)] tracking-tight">
                100% Genuine Escort Pictures & Verified Call Girl Photos in Agra
              </h2>
              <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-6">
                Finding a genuine <strong>call girl in Agra</strong> can be challenging with so many fake profiles online. That is why our agency prioritizes absolute transparency. Every single image, picture, and photo you see in our gallery is 100% authentic, recently clicked, and strictly verified. Whether you are looking for a mature <strong>housewife escort</strong>, an exotic <strong>Russian model</strong>, or a high-profile VIP companion, the woman you choose from our gallery is the exact woman who will arrive at your location.
              </p>
              <h3 className="text-2xl font-bold mb-4 text-[var(--text-primary)] mt-10">
                Browse Real Images of VIP Models & Independent Escorts
              </h3>
              <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                Our photo gallery features a diverse selection of premium independent models and their original profile pictures. All models are available for both incall and outcall services across all major Agra localities (including Kamla Nagar, Tajganj, and Fatehabad Road). We guarantee absolute discretion and a true girlfriend experience (GFE) with zero advance payment required. 
              </p>
            </div>
          </div>
        </section>

        <TopLocalities />
    </main>
    </>
  );
}
