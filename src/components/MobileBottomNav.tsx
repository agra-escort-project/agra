"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function MobileBottomNav() {
  const pathname = usePathname();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const isActive = (path: string) => {
    return pathname === path ? 'var(--accent-primary)' : 'var(--text-secondary)';
  };

  return (
    <>
      <nav className="mobile-bottom-nav">
      <Link href="/" className="nav-item" style={{ color: isActive('/') }}>
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
        </svg>
        <span>Home</span>
      </Link>
      
      <Link href="/gallery" className="nav-item" style={{ color: isActive('/gallery') }}>
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M22 16V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2zm-11-4l2.03 2.71L16 11l4 5H8l3-4zM2 6v14c0 1.1.9 2 2 2h14v-2H4V6H2z"/>
        </svg>
        <span>Gallery</span>
      </Link>
      
      <div className="nav-item-center">
        <a href="https://wa.me/919876543210?text=Hello%20team,%20I%20am%20looking%20to%20book%20a%20high-end%20model%20in%20Agra.%20Could%20you%20please%20share%20the%20available%20profiles%20and%20rates?" target="_blank" rel="noopener noreferrer" className="center-fab">
          <svg viewBox="0 0 24 24" fill="none" style={{ width: '100%', height: '100%' }}>
            <path d="M12 2C6.48 2 2 6.48 2 12c0 1.76.45 3.42 1.24 4.88L2 22l5.35-1.39A9.95 9.95 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2z" fill="#25D366" stroke="#ffffff" strokeWidth="1.5" strokeLinejoin="round" />
            <path d="M16.96 14.12c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.42-1.34-1.66-.14-.24-.02-.38.1-.5.12-.1.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.48-.4-.42-.54-.42h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2 0 1.18.86 2.32.98 2.48.12.16 1.7 2.6 4.12 3.64.58.24 1.02.4 1.38.5.58.18 1.1.16 1.52.1.48-.06 1.42-.58 1.62-1.14.2-.56.2-.1.14-.16-.06-.06-.22-.1-.46-.22z" fill="#ffffff" />
          </svg>
        </a>
      </div>

      <Link href="/services" className="nav-item" style={{ color: isActive('/services') }}>
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 3l2.8 5.7 6.2.9-4.5 4.4 1.1 6.2L12 17.2 6.4 20.2l1.1-6.2-4.5-4.4 6.2-.9L12 3z"/>
        </svg>
        <span>Services</span>
      </Link>

      <div className="nav-item" onClick={() => setIsDrawerOpen(true)} style={{ color: isDrawerOpen ? 'var(--accent-primary)' : 'var(--text-secondary)', cursor: 'pointer' }}>
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
        </svg>
        <span>More</span>
      </div>
    </nav>

    {/* Mobile Drawer Overlay */}
    {isDrawerOpen && (
      <>
        <div 
          style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.6)', zIndex: 99999, backdropFilter: 'blur(3px)' }} 
          onClick={() => setIsDrawerOpen(false)} 
        />
        <div style={{ position: 'fixed', bottom: 0, left: 0, right: 0, background: '#fff', zIndex: 100000, borderTopLeftRadius: '24px', borderTopRightRadius: '24px', padding: '1.5rem 1.5rem 2.5rem', animation: 'slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1)', display: 'flex', flexDirection: 'column', boxShadow: '0 -10px 40px rgba(0,0,0,0.1)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', borderBottom: '1px solid #f0f0f0', paddingBottom: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <img src="/agra-logo.png" alt="Agra CallGirly Logo" style={{ height: '32px', width: 'auto' }} />
              <span style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.5px' }}>Agra CallGirly</span>
            </div>
            <button onClick={() => setIsDrawerOpen(false)} style={{ background: '#f5f5f5', border: 'none', borderRadius: '50%', width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#666' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2.5rem', padding: '0 0.5rem' }}>
            <Link href="/about" onClick={() => setIsDrawerOpen(false)} style={{ fontSize: '1.1rem', color: 'var(--text-primary)', textDecoration: 'none', fontWeight: 600 }}>About Us</Link>
            <Link href="/rates" onClick={() => setIsDrawerOpen(false)} style={{ fontSize: '1.1rem', color: 'var(--text-primary)', textDecoration: 'none', fontWeight: 600 }}>Rates</Link>
            <Link href="/gallery" onClick={() => setIsDrawerOpen(false)} style={{ fontSize: '1.1rem', color: 'var(--text-primary)', textDecoration: 'none', fontWeight: 600 }}>VIP Gallery</Link>
            <Link href="/locations" onClick={() => setIsDrawerOpen(false)} style={{ fontSize: '1.1rem', color: 'var(--text-primary)', textDecoration: 'none', fontWeight: 600 }}>Top Locations</Link>
            <Link href="/#faq" onClick={() => setIsDrawerOpen(false)} style={{ fontSize: '1.1rem', color: 'var(--text-primary)', textDecoration: 'none', fontWeight: 600 }}>FAQs</Link>
          </div>

          <a href="tel:+919876543210" className="btn btn-primary" style={{ textAlign: 'center', width: '100%', padding: '1.2rem', borderRadius: '12px', fontSize: '1.1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            Contact Us
          </a>
        </div>
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes slideUp {
            from { transform: translateY(100%); }
            to { transform: translateY(0); }
          }
        `}} />
      </>
    )}
    </>
  );
}
