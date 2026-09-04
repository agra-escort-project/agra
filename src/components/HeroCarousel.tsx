'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { models } from '@/data/models';

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Take exactly 5 images to optimize web vitals
  const heroImages = models.slice(0, 5).map(m => m.images[0]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 2000); // Change image every 2 seconds

    return () => clearInterval(timer);
  }, [heroImages.length]);

  return (
    <div className="relative w-full pb-[75%] rounded-3xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.1)]">
      {heroImages.map((src, index) => (
        <Image 
          key={src}
          src={src}
          alt={`Premium VIP Escort in Agra - Model ${index + 1}`}
          fill
          priority={index === 0} // Only prioritize the very first image for LCP Web Vitals
          sizes="(max-width: 768px) 100vw, 50vw"
          className={`object-cover transition-opacity duration-800 ease-in-out ${currentIndex === index ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
        />
      ))}
    </div>
  );
}
