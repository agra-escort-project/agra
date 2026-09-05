import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | Agra Escorts',
  description: 'Privacy Policy and data protection guidelines for Agra Escort. We ensure 100% discretion and strict confidentiality for all our elite clients.',
  alternates: {
    canonical: 'https://agraescort.com/privacy-policy',
  },
};

export default function PrivacyPolicy() {
  return (
    <main className="py-20 pt-32 bg-[var(--surface-color)] min-h-screen">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-[4rem]">
          <h1 className="text-[3rem] text-[var(--text-primary)] mb-[1rem] tracking-[-1px]">Privacy Policy</h1>
          <p className="text-[var(--text-secondary)] text-[1.1rem]">Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
        </div>

        <article className="bg-white p-[4rem] rounded-[24px] shadow-[0_10px_40px_rgba(0,0,0,0.03)] text-[#444] leading-[1.8] w-full">
          
          <h2 className="text-[22px] md:text-[32px] text-[var(--text-primary)] mb-[1.5rem] mt-0">1. Introduction & Discretion Guarantee</h2>
          <p className="mb-[2rem]">
            At Agra Escort, we understand that our elite clients value privacy above all else. This Privacy Policy outlines our strict data handling practices. We operate with a 100% discretion guarantee, ensuring that your identity, contact information, and interactions with our premium independent escorts in Agra remain entirely confidential.
          </p>

          <h2 className="text-[22px] md:text-[32px] text-[var(--text-primary)] mb-[1.5rem]">2. Information We Do Not Collect</h2>
          <p className="mb-[2rem]">
            Unlike other platforms, we do not require you to create an account, register, or provide unnecessary personal details. We do not store permanent logs of your visits, nor do we track your physical location beyond what is necessary to dispatch a model to your requested hotel or residence in areas such as Tajganj, Kamla Nagar, or Sanjay Place.
          </p>

          <h2 className="text-[22px] md:text-[32px] text-[var(--text-primary)] mb-[1.5rem]">3. Temporary Data for Booking (WhatsApp)</h2>
          <p className="mb-[2rem]">
            All booking inquiries are handled exclusively via WhatsApp or direct phone calls to ensure end-to-end encryption and immediate service. The temporary data you provide (such as hotel room number, timing, and model preference) is used strictly for dispatch purposes. Once the session is successfully completed, chat histories and contact logs on our dispatch devices are regularly purged.
          </p>

          <h2 className="text-[22px] md:text-[32px] text-[var(--text-primary)] mb-[1.5rem]">4. Age Verification & Compliance</h2>
          <p className="mb-[2rem]">
            Our website is strictly for individuals who are 18 years of age or older. By accessing our platform and browsing our gallery of VIP escorts, you confirm that you meet the legal age requirements in your jurisdiction. We do not knowingly collect data from minors.
          </p>

          <h2 className="text-[22px] md:text-[32px] text-[var(--text-primary)] mb-[1.5rem]">5. Zero Third-Party Sharing</h2>
          <p className="mb-[2rem]">
            We have a strict zero-tolerance policy for data selling. We do not share, sell, rent, or trade any client information with third parties, marketing agencies, or external databases. Your association with Agra Escort is your private business.
          </p>

          <h2 className="text-[22px] md:text-[32px] text-[var(--text-primary)] mb-[1.5rem]">6. Contact Us</h2>
          <p className="mb-[2rem]">
            If you have any questions or concerns regarding our privacy practices, or if you need to request the immediate deletion of any temporary booking correspondence, please contact our management team directly at <a href="mailto:booking@agraescort.com" className="text-[var(--accent-primary)] no-underline font-semibold">booking@agraescort.com</a>.
          </p>
          
          <div className="mt-[4rem] pt-[2rem] border-t border-[var(--border-color)] text-center">
            <Link href="/" className="inline-block bg-[var(--surface-color)] text-[var(--text-primary)] px-6 py-3 rounded-md border border-[var(--border-color)] hover:bg-[var(--border-color)] transition-colors">Return to Homepage</Link>
          </div>
        </article>
      </div>
    </main>
  );
}
