"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const WA_URL =
  'https://wa.me/917409040180?text=Hello%20team,%20I%20am%20looking%20to%20book%20a%20high-end%20model%20in%20Agra.%20Could%20you%20please%20share%20the%20available%20profiles%20and%20rates?';

/* ── icons ─────────────────────────────────────────────────── */
const HomeIcon = ({ filled }: { filled: boolean }) =>
  filled ? (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
      <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
    </svg>
  ) : (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
    </svg>
  );

const GalleryIcon = ({ filled }: { filled: boolean }) =>
  filled ? (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path fillRule="evenodd" d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0 0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3 16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z" clipRule="evenodd" />
    </svg>
  ) : (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
    </svg>
  );

const ServicesIcon = ({ filled }: { filled: boolean }) =>
  filled ? (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path fillRule="evenodd" d="M11.622 1.602a.75.75 0 0 1 .756 0l2.25 1.313a.75.75 0 0 1-.756 1.295L12 3.118 10.128 4.21a.75.75 0 1 1-.756-1.295l2.25-1.313ZM5.898 5.81a.75.75 0 0 1-.27 1.025l-1.14.665 1.14.665a.75.75 0 1 1-.756 1.295L3.75 8.806v.944a.75.75 0 0 1-1.5 0V7.5a.75.75 0 0 1 .372-.648l2.25-1.312a.75.75 0 0 1 1.026.27Zm12.204 0a.75.75 0 0 1 1.026-.27l2.25 1.312a.75.75 0 0 1 .372.648v2.25a.75.75 0 0 1-1.5 0v-.944l-1.122.654a.75.75 0 1 1-.756-1.295l1.14-.665-1.14-.665a.75.75 0 0 1-.27-1.025Zm-9 5.25a.75.75 0 0 1 1.026-.27L12 11.882l2.872-1.672a.75.75 0 1 1 .756 1.295l-2.628 1.531v2.675a.75.75 0 0 1-1.5 0v-2.675L9.872 11.36a.75.75 0 0 1-.27-1.026v.001Z" clipRule="evenodd" />
      <path d="M9 6a.75.75 0 0 0-.75.75v6.75a.75.75 0 0 0 .75.75h6a.75.75 0 0 0 .75-.75V6.75A.75.75 0 0 0 15 6H9Z" />
    </svg>
  ) : (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
    </svg>
  );

const MoreIcon = ({ active }: { active: boolean }) => (
  <svg viewBox="0 0 24 24" fill={active ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>
);

/* ── drawer menu items ───────────────────────────────────────── */
const DRAWER_LINKS = [
  { href: '/locations', label: 'Top Locations'},
  { href: '/about',     label: 'About Us'},
  { href: '/rates',     label: 'Rates'},
];

export default function MobileBottomNav() {
  const pathname = usePathname();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const active = (path: string) => pathname === path;

  const tabCls = (path: string) =>
    `relative flex flex-col items-center justify-center gap-[3px] flex-1 py-1 text-[11px] font-semibold transition-colors no-underline select-none ${
      active(path) ? 'text-[var(--accent-primary)]' : 'text-[var(--text-secondary)]'
    }`;

  return (
    <>
      {/* ── Bar ───────────────────────────────────────────────── */}
      <nav
        className="fixed bottom-0 left-0 right-0 z-[1000] md:hidden flex items-center"
        style={{
          background: 'rgba(255,255,255,0.97)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderTop: '1px solid rgba(0,0,0,0.07)',
          boxShadow: '0 -4px 24px rgba(0,0,0,0.07)',
          height: 'calc(60px + env(safe-area-inset-bottom))',
          paddingBottom: 'env(safe-area-inset-bottom)',
        }}
      >
        {/* Home */}
        <Link href="/" className={tabCls('/')}>
          <HomeIcon filled={active('/')} />
          <span>Home</span>
          {active('/') && <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[var(--accent-primary)]" />}
        </Link>

        {/* Gallery */}
        <Link href="/gallery" className={tabCls('/gallery')}>
          <GalleryIcon filled={active('/gallery')} />
          <span>Gallery</span>
          {active('/gallery') && <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[var(--accent-primary)]" />}
        </Link>

        {/* Center WhatsApp CTA */}
        <div className="relative flex flex-col items-center justify-center flex-1">
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="absolute flex items-center justify-center w-[64px] h-[64px] z-[1001]"
            style={{
              top: '-60px',
              filter: 'drop-shadow(0 6px 12px rgba(37, 211, 102, 0.45))',
              WebkitTapHighlightColor: 'transparent',
              animation: 'mobilePulse 3s infinite',
            }}
          >
            <svg viewBox="0 0 24 24" fill="none" style={{ width: '100%', height: '100%' }}>
              <path d="M12 2C6.48 2 2 6.48 2 12c0 1.76.45 3.42 1.24 4.88L2 22l5.35-1.39A9.95 9.95 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2z" fill="#25D366" stroke="#ffffff" strokeWidth="1.5" strokeLinejoin="round" />
              <path d="M16.96 14.12c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.42-1.34-1.66-.14-.24-.02-.38.1-.5.12-.1.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.48-.4-.42-.54-.42h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2 0 1.18.86 2.32.98 2.48.12.16 1.7 2.6 4.12 3.64.58.24 1.02.4 1.38.5.58.18 1.1.16 1.52.1.48-.06 1.42-.58 1.62-1.14.2-.56.2-.1.14-.16-.06-.06-.22-.1-.46-.22z" fill="#ffffff" />
            </svg>
          </a>
        </div>

        {/* Services */}
        <Link href="/services" className={tabCls('/services')}>
          <ServicesIcon filled={active('/services')} />
          <span>Services</span>
          {active('/services') && <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[var(--accent-primary)]" />}
        </Link>

        {/* More */}
        <button
          onClick={() => setIsDrawerOpen(true)}
          className={`relative flex flex-col items-center justify-center gap-[3px] flex-1 py-1 text-[11px] font-semibold transition-colors select-none border-none bg-transparent cursor-pointer ${
            isDrawerOpen ? 'text-[var(--accent-primary)]' : 'text-[var(--text-secondary)]'
          }`}
        >
          <MoreIcon active={isDrawerOpen} />
          <span>More</span>
        </button>
      </nav>

      {/* ── Drawer ────────────────────────────────────────────── */}
      {isDrawerOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 z-[99998] backdrop-blur-[2px]"
            onClick={() => setIsDrawerOpen(false)}
          />

          {/* Sheet */}
          <div
            className="fixed bottom-0 left-0 right-0 z-[99999] bg-white rounded-t-[28px] flex flex-col overflow-hidden"
            style={{
              paddingBottom: 'calc(1.5rem + env(safe-area-inset-bottom))',
              boxShadow: '0 -12px 48px rgba(0,0,0,0.12)',
              animation: 'slideUp 0.28s cubic-bezier(0.16,1,0.3,1)',
            }}
          >
            {/* Handle */}
            <div className="flex justify-center pt-3 pb-1">
              <div className="w-10 h-[4px] rounded-full bg-gray-200" />
            </div>

            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
              <div className="flex items-center gap-2">
                <img src="/agra-logo.png" alt="" className="h-7 w-auto" />
                <span className="text-[1.1rem] font-extrabold text-[var(--text-primary)] tracking-tight">Agra Escort</span>
              </div>
              <button
                onClick={() => setIsDrawerOpen(false)}
                className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 border-none cursor-pointer"
                aria-label="Close menu"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            </div>

            {/* Links */}
            <div className="flex flex-col px-4 py-3 gap-1">
              {DRAWER_LINKS.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setIsDrawerOpen(false)}
                  className="flex items-center justify-between px-4 py-3.5 rounded-2xl no-underline hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[1rem] font-semibold text-[var(--text-primary)]">{label}</span>
                  </div>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#bbb" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"/>
                  </svg>
                </Link>
              ))}
            </div>

            {/* CTA */}
            <div className="px-5 pt-2">
              <a
                href="tel:+917409040180"
                className="flex items-center justify-center gap-2 w-full h-[52px] rounded-2xl bg-[var(--accent-primary)] text-white text-[1rem] font-bold no-underline transition-transform active:scale-95"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                Call Now — Free Consultation
              </a>
            </div>
          </div>
        </>
      )}
    </>
  );
}
