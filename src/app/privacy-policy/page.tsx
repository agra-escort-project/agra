import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy and data protection guidelines for Agra Call Girly. We ensure 100% discretion and strict confidentiality for all our elite clients.',
  alternates: {
    canonical: 'https://agracallgirly.com/privacy-policy',
  },
};

export default function PrivacyPolicy() {
  return (
    <main style={{ padding: '8rem 0 5rem 0', background: 'var(--surface-color)', minHeight: '100vh' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h1 style={{ fontSize: '3rem', color: 'var(--text-primary)', marginBottom: '1rem', letterSpacing: '-1px' }}>Privacy Policy</h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
        </div>

        <article style={{ background: '#fff', padding: '4rem', borderRadius: '24px', boxShadow: '0 10px 40px rgba(0,0,0,0.03)', color: '#444', lineHeight: 1.8, width: '100%' }}>
          
          <h2 style={{ fontSize: '1.8rem', color: 'var(--text-primary)', marginBottom: '1.5rem', marginTop: 0 }}>1. Introduction & Discretion Guarantee</h2>
          <p style={{ marginBottom: '2rem' }}>
            At Agra Call Girly, we understand that our elite clients value privacy above all else. This Privacy Policy outlines our strict data handling practices. We operate with a 100% discretion guarantee, ensuring that your identity, contact information, and interactions with our premium independent call girls in Agra remain entirely confidential.
          </p>

          <h2 style={{ fontSize: '1.8rem', color: 'var(--text-primary)', marginBottom: '1.5rem' }}>2. Information We Do Not Collect</h2>
          <p style={{ marginBottom: '2rem' }}>
            Unlike other platforms, we do not require you to create an account, register, or provide unnecessary personal details. We do not store permanent logs of your visits, nor do we track your physical location beyond what is necessary to dispatch a model to your requested hotel or residence in areas such as Tajganj, Kamla Nagar, or Sanjay Place.
          </p>

          <h2 style={{ fontSize: '1.8rem', color: 'var(--text-primary)', marginBottom: '1.5rem' }}>3. Temporary Data for Booking (WhatsApp)</h2>
          <p style={{ marginBottom: '2rem' }}>
            All booking inquiries are handled exclusively via WhatsApp or direct phone calls to ensure end-to-end encryption and immediate service. The temporary data you provide (such as hotel room number, timing, and model preference) is used strictly for dispatch purposes. Once the session is successfully completed, chat histories and contact logs on our dispatch devices are regularly purged.
          </p>

          <h2 style={{ fontSize: '1.8rem', color: 'var(--text-primary)', marginBottom: '1.5rem' }}>4. Age Verification & Compliance</h2>
          <p style={{ marginBottom: '2rem' }}>
            Our website is strictly for individuals who are 18 years of age or older. By accessing our platform and browsing our gallery of VIP escorts, you confirm that you meet the legal age requirements in your jurisdiction. We do not knowingly collect data from minors.
          </p>

          <h2 style={{ fontSize: '1.8rem', color: 'var(--text-primary)', marginBottom: '1.5rem' }}>5. Zero Third-Party Sharing</h2>
          <p style={{ marginBottom: '2rem' }}>
            We have a strict zero-tolerance policy for data selling. We do not share, sell, rent, or trade any client information with third parties, marketing agencies, or external databases. Your association with Agra Call Girly is your private business.
          </p>

          <h2 style={{ fontSize: '1.8rem', color: 'var(--text-primary)', marginBottom: '1.5rem' }}>6. Contact Us</h2>
          <p style={{ marginBottom: '2rem' }}>
            If you have any questions or concerns regarding our privacy practices, or if you need to request the immediate deletion of any temporary booking correspondence, please contact our management team directly at <a href="mailto:booking@agracallgirly.com" style={{ color: 'var(--accent-primary)', textDecoration: 'none', fontWeight: 600 }}>booking@agracallgirly.com</a>.
          </p>
          
          <div style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid var(--border-color)', textAlign: 'center' }}>
            <Link href="/" className="btn btn-secondary">Return to Homepage</Link>
          </div>
        </article>
      </div>
    </main>
  );
}
