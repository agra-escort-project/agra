import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service | Agra Escorts',
  description: 'Terms of Service and legal agreements for using Agra Escort. Review our policies regarding bookings, cancellations, and user conduct.',
  alternates: {
    canonical: 'https://agraescort.com/terms-of-service',
  },
};

export default function TermsOfService() {
  return (
    <main className="py-20 pt-32 bg-[var(--surface-color)] min-h-screen">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-[4rem]">
          <h1 className="text-[3rem] text-[var(--text-primary)] mb-[1rem] tracking-[-1px]">Terms of Service</h1>
          <p className="text-[var(--text-secondary)] text-[1.1rem]">Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
        </div>

        <article className="bg-white p-[4rem] rounded-[24px] shadow-[0_10px_40px_rgba(0,0,0,0.03)] text-[#444] leading-[1.8] w-full">
          
          <h2 className="text-[22px] md:text-[32px] text-[var(--text-primary)] mb-[1.5rem] mt-0">1. Agreement to Terms & Age Restriction</h2>
          <p className="mb-[2rem]">
            By accessing or using Agra Escort, you agree to be bound by these Terms of Service. This website and its services are strictly restricted to individuals who are at least 18 years of age or the age of legal majority in your jurisdiction. If you do not meet this age requirement, you must exit this site immediately.
          </p>

          <h2 className="text-[22px] md:text-[32px] text-[var(--text-primary)] mb-[1.5rem]">2. Nature of Service (Companionship Only)</h2>
          <p className="mb-[2rem]">
            Agra Escort operates as a premium directory and dispatch agency connecting clients with elite independent escorts and VIP models in Agra. We provide companionship services for social events, dinners, and private dates. Any negotiation of services beyond time and companionship is strictly between consenting adults and is outside the purview of this agency. We strictly condemn and prohibit any illegal activities.
          </p>

          <h2 className="text-[22px] md:text-[32px] text-[var(--text-primary)] mb-[1.5rem]">3. Booking & Payment Policies</h2>
          <p className="mb-[2rem]">
            We pride ourselves on transparency. All bookings are subject to availability. We operate exclusively on a <strong>Cash-on-Arrival</strong> basis to protect our clients from scams. You are expected to make full payment directly to the companion upon her safe arrival at your specified location (e.g., your hotel room in Tajganj or Sanjay Place) before the session commences.
          </p>

          <h2 className="text-[22px] md:text-[32px] text-[var(--text-primary)] mb-[1.5rem]">4. Client Conduct & Refusal of Service</h2>
          <p className="mb-[2rem]">
            Our elite escorts deserve the utmost respect. Any form of abuse, intoxication, coercion, or inappropriate behavior will result in the immediate termination of the session without a refund. Our models and our dispatch team reserve the right to refuse service to anyone at any time if they feel unsafe or uncomfortable.
          </p>

          <h2 className="text-[22px] md:text-[32px] text-[var(--text-primary)] mb-[1.5rem]">5. Cancellations & Modifications</h2>
          <p className="mb-[2rem]">
            We understand that plans change. If you need to cancel or modify your booking, we request that you notify our WhatsApp dispatch team at least 2 hours in advance. Repeated cancellations or &quot;no-shows&quot; upon arrival may result in you being blacklisted from future bookings with our agency.
          </p>

          <h2 className="text-[22px] md:text-[32px] text-[var(--text-primary)] mb-[1.5rem]">6. Copyright & DMCA</h2>
          <p className="mb-[2rem]">
            All content, text, and imagery on this website are the exclusive property of Agra Escort or its respective licensors. Unauthorized scraping, copying, or redistribution of our gallery images is strictly prohibited and will be met with immediate DMCA takedown notices and legal action.
          </p>

          <h2 className="text-[22px] md:text-[32px] text-[var(--text-primary)] mb-[1.5rem]">7. Amendments</h2>
          <p className="mb-[2rem]">
            We reserve the right to modify these Terms of Service at any time. Any changes will be posted on this page with an updated revision date. Continued use of the site following any such changes constitutes your acceptance of the new Terms.
          </p>
          
          <div className="mt-[4rem] pt-[2rem] border-t border-[var(--border-color)] text-center">
            <Link href="/" className="inline-block bg-[var(--surface-color)] text-[var(--text-primary)] px-6 py-3 rounded-md border border-[var(--border-color)] hover:bg-[var(--border-color)] transition-colors">Return to Homepage</Link>
          </div>
        </article>
      </div>
    </main>
  );
}
