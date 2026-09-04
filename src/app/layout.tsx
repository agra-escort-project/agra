import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import DesktopNav from "@/components/DesktopNav";
import MobileBottomNav from "@/components/MobileBottomNav";
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
              "telephone": "+917409040180",
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
              <span className="text-[1.5rem] md:text-[1.8rem] font-extrabold tracking-[-0.5px] bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700">{siteConfig.name}</span>
            </Link>
            <DesktopNav />
            <a href="tel:+917409040180" className="md:hidden flex items-center justify-center bg-[var(--accent-primary)] text-white w-[40px] h-[40px] rounded-full shadow-[0_4px_10px_rgba(233,30,99,0.3)] transition-transform active:scale-95" aria-label="Call Now">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-pulse">
                <g transform="translate(1, 2)">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </g>
              </svg>
            </a>
          </div>
        </header>

        <main>
          {children}
        </main>


        <footer className="bg-gradient-to-br from-[#0a0a0a] to-[#111] text-white pt-20 pb-8 border-t border-white/5">
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

        {/* Global WhatsApp Floating Action Button */}
        <a href="https://wa.me/917409040180?text=Hello%20team,%20I%20am%20looking%20to%20book%20a%20high-end%20model%20in%20Agra.%20Could%20you%20please%20share%20the%20available%20profiles%20and%20rates?" target="_blank" rel="noopener noreferrer" className="whatsapp-fab" aria-label="Chat on WhatsApp">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.52 3.449C18.24 1.17 15.24 0 12 0 5.383 0 0 5.383 0 12c0 2.115.553 4.184 1.6 6l-1.6 5.85 5.986-1.569c1.77.95 3.737 1.45 5.766 1.45h.005c6.617 0 12-5.383 12-12 0-3.208-1.248-6.223-3.52-8.497z" fill="#25D366"/>
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" fill="#FFF"/>
          </svg>
        </a>
      </body>
    </html>
  );
}
