import React from 'react';

export default function TrustBar() {
  return (
    <div className="bg-[var(--surface-color)] p-4 md:py-6 border-y border-[var(--border-color)]">
      <div className="container mx-auto px-0 md:px-4">
        <div className="flex flex-col items-start md:flex-row md:flex-wrap md:items-center md:justify-center gap-4 md:gap-10 lg:gap-16">
          
          <div className="flex items-center gap-4 md:gap-3">
            <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-[#fce4ec] text-[var(--accent-primary)] flex items-center justify-center shrink-0">
              <svg width="14" height="14" className="md:w-4 md:h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
            </div>
            <span className="text-[14px] md:text-[16px] font-semibold text-[var(--text-primary)] whitespace-nowrap">100% Confidential</span>
          </div>

          <div className="hidden md:block w-px h-5 bg-[var(--border-color)]"></div>

          <div className="flex items-center gap-4 md:gap-3">
            <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-[#fce4ec] text-[var(--accent-primary)] flex items-center justify-center shrink-0">
              <svg width="14" height="14" className="md:w-4 md:h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
              </svg>
            </div>
            <span className="text-[14px] md:text-[16px] font-semibold text-[var(--text-primary)] whitespace-nowrap">No Advance Payment</span>
          </div>

          <div className="hidden md:block w-px h-5 bg-[var(--border-color)]"></div>

          <div className="flex items-center gap-4 md:gap-3">
            <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-[#fce4ec] text-[var(--accent-primary)] flex items-center justify-center shrink-0">
              <svg width="14" height="14" className="md:w-4 md:h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <span className="text-[14px] md:text-[16px] font-semibold text-[var(--text-primary)] whitespace-nowrap">100% Verified Profiles</span>
          </div>
          <div className="hidden md:block w-px h-5 bg-[var(--border-color)]"></div>

          <div className="flex items-center gap-4 md:gap-3">
            <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-[#fce4ec] text-[var(--accent-primary)] flex items-center justify-center shrink-0">
              <svg width="14" height="14" className="md:w-4 md:h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
              </svg>
            </div>
            <span className="text-[14px] md:text-[16px] font-semibold text-[var(--text-primary)] whitespace-nowrap">24/7 Available Models</span>
          </div>

        </div>
      </div>
    </div>
  );
}
