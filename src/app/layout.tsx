import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import DesktopNav from "@/components/DesktopNav";
import MobileBottomNav from "@/components/MobileBottomNav";
import ScrollToTop from "@/components/ScrollToTop";
import { siteConfig } from "@/config/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
  fallback: ["-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica", "Arial", "sans-serif"],
});

export const metadata: Metadata = {
  title: {
    default: "Best Escorts in Agra | VIP Call Girls & Models Near Me",
    template: "%s | Best Agra Escorts"
  },
  description: "Book genuine Russian models, housewives, and VIP escorts in Agra. 100% verified paid girls near you with zero advance payment. 24/7 Service.",
  keywords: ["Agra escorts", "Call girls near me in Agra", "Paid girls in Agra", "Housewife escorts Agra", "Russian escorts Agra", "Best VIP escorts in Agra", "Agra escort service", "Independent models Agra"],
  alternates: {
    canonical: siteConfig.url,
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Best Escorts in Agra | VIP Call Girls & Models Near Me",
    description: "Book premium independent models and elite VIP escorts in Agra with zero advance payment. Available 24/7.",
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}/og-image.jpg`,
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
    title: "Agra Escorts | Premium Companionship in Agra",
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
    <html lang="en" className={`${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AdultEntertainment",
              "name": siteConfig.name,
              "image": `${siteConfig.url}/og-image.jpg`,
              "description": siteConfig.description,
              "url": siteConfig.url,
              "telephone": "+919105293429",
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
        <header className="sticky top-0 bg-white/95 backdrop-blur-[10px] z-[100] border-b border-[var(--border-color)] shadow-[0_2px_10px_rgba(0,0,0,0.03)] h-[70px] md:h-[80px]">
          <div className="container flex justify-between items-center h-full">
            <Link href="/" className="flex items-center gap-[0.5rem] no-underline text-inherit group">
              <img src="/agra-logo.png" alt="" className="h-[32px] w-auto transition-transform duration-300 group-hover:scale-105" />
              <span className="text-[20px] md:text-[24px] font-bold tracking-[-0.5px] text-[var(--accent-primary)]">{siteConfig.name}</span>
            </Link>
            <DesktopNav />
            <a href="tel:+919105293429" className="mobile-call-expand" aria-label="Call Now">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ringing-phone-icon">
                <g transform="translate(1, 2)">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  <path className="wave wave-1" d="M13 8a5 5 0 0 1 5 5"></path>
                  <path className="wave wave-2" d="M13 4a9 9 0 0 1 9 9"></path>
                  <path className="wave wave-3" d="M13 0a13 13 0 0 1 13 13"></path>
                </g>
              </svg>
              <span className="call-text">Call Now</span>
            </a>
          </div>
        </header>

        <main>
          {children}
        </main>


        <footer className="bg-gradient-to-br from-[#0a0a0a] to-[#111] text-white pt-20 pb-28 md:pb-8 border-t border-white/5">
          <div className="container">
            <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-12 mb-16">
              
              <div className="flex flex-col">
                <Link href="/" className="inline-flex items-center gap-[0.8rem] mb-[1.5rem] no-underline">
                  <img src="/agra-logo.png" alt="" className="h-[36px] w-auto brightness-0 invert" />
                  <span className="text-[1.5rem] font-extrabold text-white tracking-[-0.05em]">{siteConfig.name}</span>
                </Link>
                <p className="text-white/70 leading-[1.6] mb-[2rem]">
                  The #1 best escorts provider in Agra for premium companionship. We provide elite, high-profile independent models, offering VIP escorts and hotel outcall services with 100% discretion and zero advance payment.
                </p>
                <div className="flex gap-[1rem]">
                  <span className="text-[1.5rem]" title="100% Secure">🔒</span>
                  <span className="text-[1.5rem]" title="Top Rated">⭐</span>
                  <span className="text-[1.5rem]" title="Discreet">🤫</span>
                </div>
              </div>

              <div className="flex flex-col">
                <h4 className="mb-[1.5rem] text-white text-[1.1rem] uppercase tracking-[1px]">Top Locations</h4>
                <ul className="list-none p-0 margin-0 flex flex-col gap-[1rem]">
                  <li><Link href="/best-escorts-tajganj-agra" className="text-white/60 no-underline transition-colors hover:text-white">Tajganj Escorts</Link></li>
                  <li><Link href="/best-escorts-kamla-nagar-agra" className="text-white/60 no-underline transition-colors hover:text-white">Kamla Nagar Escorts</Link></li>
                  <li><Link href="/best-escorts-sanjay-place-agra" className="text-white/60 no-underline transition-colors hover:text-white">Sanjay Place VIP Models</Link></li>
                  <li><Link href="/best-escorts-dayal-bagh-agra" className="text-white/60 no-underline transition-colors hover:text-white">Dayal Bagh Companions</Link></li>
                  <li><Link href="/locations" className="text-[var(--accent-primary)] no-underline transition-colors text-[0.9rem] font-semibold hover:opacity-80">View All Areas &rarr;</Link></li>
                </ul>
              </div>

              <div className="flex flex-col">
                <h4 className="mb-[1.5rem] text-white text-[1.1rem] uppercase tracking-[1px]">Premium Services</h4>
                <ul className="list-none p-0 margin-0 flex flex-col gap-[1rem]">
                  <li><Link href="/services" className="text-white/60 no-underline transition-colors hover:text-white">VIP Escorts Agra</Link></li>
                  <li><Link href="/services" className="text-white/60 no-underline transition-colors hover:text-white">Russian Escorts</Link></li>
                  <li><Link href="/services" className="text-white/60 no-underline transition-colors hover:text-white">Independent Models</Link></li>
                  <li><Link href="/services" className="text-white/60 no-underline transition-colors hover:text-white">5-Star Hotel Outcalls</Link></li>
                </ul>
              </div>

              <div className="flex flex-col">
                <h4 className="mb-[1.5rem] text-white text-[1.1rem] uppercase tracking-[1px]">Company</h4>
                <ul className="list-none p-0 margin-0 flex flex-col gap-[1rem]">
                  <li><Link href="/gallery" className="text-white/60 no-underline transition-colors hover:text-white">Model Gallery</Link></li>
                  <li><Link href="/rates" className="text-white/60 no-underline transition-colors hover:text-white">Rates</Link></li>
                  <li><Link href="/about" className="text-white/60 no-underline transition-colors hover:text-white">About Our Agency</Link></li>
                  <li><a href={`mailto:booking@${siteConfig.domain}`} className="text-white/60 no-underline transition-colors hover:text-white">Contact Us</a></li>
                </ul>
              </div>

            </div>
            
            <div className="border-t border-white/10 pt-8 flex justify-between items-center flex-wrap gap-4 text-white/40 text-[0.9rem]">
              <p className="m-0">&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved. Strictly 18+ only.</p>
              <div className="flex gap-[1.5rem]">
                <Link href="/privacy-policy" className="text-white/40 no-underline hover:text-white">Privacy Policy</Link>
                <Link href="/terms-of-service" className="text-white/40 no-underline hover:text-white">Terms of Service</Link>
              </div>
            </div>
          </div>
        </footer>

        <MobileBottomNav />
        <ScrollToTop />

        {/* Global WhatsApp Floating Action Button */}
        <a href="https://wa.me/919105293429?text=Hello%20team,%20I%20am%20looking%20to%20book%20a%20high-end%20model%20in%20Agra.%20Could%20you%20please%20share%20the%20available%20profiles%20and%20rates?" target="_blank" rel="noopener noreferrer" className="whatsapp-fab" aria-label="Chat on WhatsApp">
          <svg viewBox="0 0 24 24" fill="none" style={{ width: '100%', height: '100%' }}>
            <path d="M12 2C6.48 2 2 6.48 2 12c0 1.76.45 3.42 1.24 4.88L2 22l5.35-1.39A9.95 9.95 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2z" fill="#25D366" stroke="#ffffff" strokeWidth="1.5" strokeLinejoin="round" />
            <path d="M16.96 14.12c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.42-1.34-1.66-.14-.24-.02-.38.1-.5.12-.1.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.48-.4-.42-.54-.42h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2 0 1.18.86 2.32.98 2.48.12.16 1.7 2.6 4.12 3.64.58.24 1.02.4 1.38.5.58.18 1.1.16 1.52.1.48-.06 1.42-.58 1.62-1.14.2-.56.2-.1.14-.16-.06-.06-.22-.1-.46-.22z" fill="#ffffff" />
          </svg>
        </a>
      </body>
    </html>
  );
}
