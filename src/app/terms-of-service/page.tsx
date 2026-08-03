import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service | Agra Call Girls',
  description: 'Terms of Service and legal agreements for using Agra Call Girly. Review our policies regarding bookings, cancellations, and user conduct.',
  alternates: {
    canonical: 'https://agracallgirly.com/terms-of-service',
  },
};

export default function TermsOfService() {
  return (
    <main style={{ padding: '8rem 0 5rem 0', background: 'var(--surface-color)', minHeight: '100vh' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h1 style={{ fontSize: '3rem', color: 'var(--text-primary)', marginBottom: '1rem', letterSpacing: '-1px' }}>Terms of Service</h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
        </div>

        <article style={{ background: '#fff', padding: '4rem', borderRadius: '24px', boxShadow: '0 10px 40px rgba(0,0,0,0.03)', color: '#444', lineHeight: 1.8, width: '100%' }}>
          
          <h2 style={{ fontSize: '1.8rem', color: 'var(--text-primary)', marginBottom: '1.5rem', marginTop: 0 }}>1. Agreement to Terms & Age Restriction</h2>
          <p style={{ marginBottom: '2rem' }}>
            By accessing or using Agra Call Girly, you agree to be bound by these Terms of Service. This website and its services are strictly restricted to individuals who are at least 18 years of age or the age of legal majority in your jurisdiction. If you do not meet this age requirement, you must exit this site immediately.
          </p>

          <h2 style={{ fontSize: '1.8rem', color: 'var(--text-primary)', marginBottom: '1.5rem' }}>2. Nature of Service (Companionship Only)</h2>
          <p style={{ marginBottom: '2rem' }}>
            Agra Call Girly operates as a premium directory and dispatch agency connecting clients with elite independent call girls and VIP models in Agra. We provide companionship services for social events, dinners, and private dates. Any negotiation of services beyond time and companionship is strictly between consenting adults and is outside the purview of this agency. We strictly condemn and prohibit any illegal activities.
          </p>

          <h2 style={{ fontSize: '1.8rem', color: 'var(--text-primary)', marginBottom: '1.5rem' }}>3. Booking & Payment Policies</h2>
          <p style={{ marginBottom: '2rem' }}>
            We pride ourselves on transparency. All bookings are subject to availability. We operate exclusively on a <strong>Cash-on-Arrival</strong> basis to protect our clients from scams. You are expected to make full payment directly to the companion upon her safe arrival at your specified location (e.g., your hotel room in Tajganj or Sanjay Place) before the session commences.
          </p>

          <h2 style={{ fontSize: '1.8rem', color: 'var(--text-primary)', marginBottom: '1.5rem' }}>4. Client Conduct & Refusal of Service</h2>
          <p style={{ marginBottom: '2rem' }}>
            Our elite escorts deserve the utmost respect. Any form of abuse, intoxication, coercion, or inappropriate behavior will result in the immediate termination of the session without a refund. Our models and our dispatch team reserve the right to refuse service to anyone at any time if they feel unsafe or uncomfortable.
          </p>

          <h2 style={{ fontSize: '1.8rem', color: 'var(--text-primary)', marginBottom: '1.5rem' }}>5. Cancellations & Modifications</h2>
          <p style={{ marginBottom: '2rem' }}>
            We understand that plans change. If you need to cancel or modify your booking, we request that you notify our WhatsApp dispatch team at least 2 hours in advance. Repeated cancellations or &quot;no-shows&quot; upon arrival may result in you being blacklisted from future bookings with our agency.
          </p>

          <h2 style={{ fontSize: '1.8rem', color: 'var(--text-primary)', marginBottom: '1.5rem' }}>6. Copyright & DMCA</h2>
          <p style={{ marginBottom: '2rem' }}>
            All content, text, and imagery on this website are the exclusive property of Agra Call Girly or its respective licensors. Unauthorized scraping, copying, or redistribution of our gallery images is strictly prohibited and will be met with immediate DMCA takedown notices and legal action.
          </p>

          <h2 style={{ fontSize: '1.8rem', color: 'var(--text-primary)', marginBottom: '1.5rem' }}>7. Amendments</h2>
          <p style={{ marginBottom: '2rem' }}>
            We reserve the right to modify these Terms of Service at any time. Any changes will be posted on this page with an updated revision date. Continued use of the site following any such changes constitutes your acceptance of the new Terms.
          </p>
          
          <div style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid var(--border-color)', textAlign: 'center' }}>
            <Link href="/" className="btn btn-secondary">Return to Homepage</Link>
          </div>
        </article>
      </div>
    </main>
  );
}
