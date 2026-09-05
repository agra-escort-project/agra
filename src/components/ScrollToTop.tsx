'use client';

import { useEffect, useState, useCallback } from 'react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    
    // Visibility: only show after scrolling first page (window.innerHeight)
    setIsVisible(scrollTop > window.innerHeight);
    
    // Scroll progress (0 to 100)
    if (scrollHeight > 0) {
      setScrollProgress(Math.min(100, Math.max(0, (scrollTop / scrollHeight) * 100)));
    } else {
      setScrollProgress(0);
    }
  }, []);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    
    // Initial check (async to avoid synchronous setState in effect)
    window.requestAnimationFrame(handleScroll);
    
    return () => window.removeEventListener('scroll', onScroll);
  }, [handleScroll]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // SVG Circle properties
  const size = 50;
  const strokeWidth = 3;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (scrollProgress / 100) * circumference;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`fixed right-[12px] md:right-[35px] bottom-[100px] md:bottom-[35px] z-[9998] w-[50px] h-[50px] flex items-center justify-center rounded-full bg-white shadow-lg cursor-pointer transition-all duration-300 ease-in-out border-none outline-none ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      {/* Background ring */}
      <svg
        width={size}
        height={size}
        className="absolute inset-0 -rotate-90 pointer-events-none"
      >
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#f0f0f0"
          strokeWidth={strokeWidth}
          fill="none"
        />
        {/* Progress ring */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="var(--accent-primary)"
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          style={{ transition: 'stroke-dashoffset 150ms ease-out' }}
        />
      </svg>
      {/* Arrow icon */}
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="var(--accent-primary)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="relative z-10"
      >
        <path d="M18 15l-6-6-6 6" />
      </svg>
    </button>
  );
}
