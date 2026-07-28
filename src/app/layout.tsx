import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import MobileBottomNav from "@/components/MobileBottomNav";

export const metadata: Metadata = {
  title: {
    default: "High Profile Call Girls in Agra | Best VIP Escorts | No Advance",
    template: "%s | High Profile Call Girls in Agra"
  },
  description: "Book high profile call girls in Agra with 100% genuine photos and zero advance payment. Discover elite VIP escorts, premium independent models, and female companions in Agra today.",
  keywords: ["High profile call girls in Agra", "Best VIP escorts in Agra", "Premium independent models Agra", "Elite female companions in Agra", "Agra call girls", "Agra escorts", "VIP escorts Agra", "Russian escorts Agra", "Agra escort service"],
  alternates: {
    canonical: 'https://agracallgirly.com',
  },
  openGraph: {
    title: "High Profile Call Girls in Agra | Best VIP Escorts",
    description: "Book premium independent models and elite VIP escorts in Agra with zero advance payment. Available 24/7.",
    url: 'https://agracallgirly.com',
    siteName: 'Agra VIP Models',
    images: [
      {
        url: 'https://agracallgirly.com/og-image.jpg',
        width: 1200,
        height: 630,
      }
    ],
    locale: 'en_IN',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: "Agra Call Girls | Premium Companionship in Agra",
    card: "summary_large_image",
  },
  other: {
    rating: "adult",
    RATING: "RTA-5042-1996-1400-1577-RTA"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AdultEntertainment",
              "name": "Agra Call Girly",
              "image": "https://agracallgirly.com/og-image.jpg",
              "@id": "",
              "url": "https://agracallgirly.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Agra",
                "addressRegion": "UP",
                "addressCountry": "IN"
              }
            })
          }}
        />
      </head>
      <body>
        <header className="header">
          <div className="container header-content">
            <Link href="/" className="logo">
              <span>Agra</span>CallGirls
            </Link>
            <nav className="nav-links">
              <Link href="/">Home</Link>
              <Link href="/gallery" className="nav-link">Gallery</Link>
              <Link href="/services" className="nav-link">Services</Link>
              <Link href="/rates">Rates</Link>
              <Link href="/locations">Locations</Link>
              <Link href="/about">About Us</Link>
              <Link href="/contact" className="nav-cta-btn">Contact Us</Link>
            </nav>
          </div>
        </header>

        <main>
          {children}
        </main>

        <footer className="footer" style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #111 100%)', color: '#fff', padding: '5rem 0 2rem 0', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="container">
            <div className="footer-content" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '3rem', marginBottom: '4rem' }}>
              
              <div className="footer-column">
                <h4 style={{ color: 'var(--accent-primary)', marginBottom: '1.5rem', fontSize: '1.4rem', fontWeight: 800 }}>Agra Call Girls</h4>
                <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, marginBottom: '2rem' }}>
                  The #1 best callgirls provider in Agra for premium companionship. We provide elite, high-profile independent models, offering VIP escorts and hotel outcall services with 100% discretion and zero advance payment.
                </p>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <span style={{ fontSize: '1.5rem' }} title="100% Secure">🔒</span>
                  <span style={{ fontSize: '1.5rem' }} title="Top Rated">⭐</span>
                  <span style={{ fontSize: '1.5rem' }} title="Discreet">🤫</span>
                </div>
              </div>

              <div className="footer-column">
                <h4 style={{ marginBottom: '1.5rem', color: '#fff', fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Top Locations</h4>
                <ul className="footer-links" style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <li><Link href="/best-callgirls-tajganj-agra" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', transition: 'color 0.2s' }}>Tajganj Escorts</Link></li>
                  <li><Link href="/best-callgirls-kamla-nagar-agra" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', transition: 'color 0.2s' }}>Kamla Nagar Call Girls</Link></li>
                  <li><Link href="/best-callgirls-sanjay-place-agra" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', transition: 'color 0.2s' }}>Sanjay Place VIP Models</Link></li>
                  <li><Link href="/best-callgirls-dayal-bagh-agra" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', transition: 'color 0.2s' }}>Dayal Bagh Companions</Link></li>
                  <li><Link href="/locations" style={{ color: 'var(--accent-primary)', textDecoration: 'none', transition: 'color 0.2s', fontSize: '0.9rem', fontWeight: 600 }}>View All Areas &rarr;</Link></li>
                </ul>
              </div>

              <div className="footer-column">
                <h4 style={{ marginBottom: '1.5rem', color: '#fff', fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Premium Services</h4>
                <ul className="footer-links" style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <li><Link href="/services" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', transition: 'color 0.2s' }}>VIP Escorts Agra</Link></li>
                  <li><Link href="/services" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', transition: 'color 0.2s' }}>Russian Call Girls</Link></li>
                  <li><Link href="/services" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', transition: 'color 0.2s' }}>Independent Models</Link></li>
                  <li><Link href="/services" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', transition: 'color 0.2s' }}>5-Star Hotel Outcalls</Link></li>
                </ul>
              </div>

              <div className="footer-column">
                <h4 style={{ marginBottom: '1.5rem', color: '#fff', fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Company</h4>
                <ul className="footer-links" style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <li><Link href="/gallery" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', transition: 'color 0.2s' }}>Model Gallery</Link></li>
                  <li><Link href="/rates" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', transition: 'color 0.2s' }}>Rates</Link></li>
                  <li><Link href="/about" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', transition: 'color 0.2s' }}>About Our Agency</Link></li>
                  <li><a href="mailto:booking@agracallgirly.com" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', transition: 'color 0.2s' }}>Contact Us</a></li>
                </ul>
              </div>

            </div>
            
            <div className="footer-bottom" style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', color: 'rgba(255,255,255,0.4)', fontSize: '0.9rem' }}>
              <p style={{ margin: 0 }}>&copy; {new Date().getFullYear()} Agra Call Girls. All rights reserved.</p>
              <div style={{ display: 'flex', gap: '1.5rem' }}>
                <Link href="/privacy-policy" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>Privacy Policy</Link>
                <Link href="/terms-of-service" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>Terms of Service</Link>
              </div>
            </div>
          </div>
        </footer>

        <MobileBottomNav />

        {/* Global WhatsApp Floating Action Button */}
        <a href="https://wa.me/919876543210?text=Hello%20team,%20I%20am%20looking%20to%20book%20a%20high-end%20model%20in%20Agra.%20Could%20you%20please%20share%20the%20available%20profiles%20and%20rates?" target="_blank" rel="noopener noreferrer" className="whatsapp-fab" aria-label="Chat on WhatsApp">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.52 3.449C18.24 1.17 15.24 0 12 0 5.383 0 0 5.383 0 12c0 2.115.553 4.184 1.6 6l-1.6 5.85 5.986-1.569c1.77.95 3.737 1.45 5.766 1.45h.005c6.617 0 12-5.383 12-12 0-3.208-1.248-6.223-3.52-8.497z" fill="#25D366"/>
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" fill="#FFF"/>
          </svg>
        </a>
      </body>
    </html>
  );
}
