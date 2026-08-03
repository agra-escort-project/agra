'use client';
import React, { useState, useRef } from 'react';
import Link from 'next/link';

import { categories } from '@/data/categories';

interface PopularSearchesProps {
  locationName?: string;
}

export default function PopularSearches({ locationName = "Agra" }: PopularSearchesProps) {
  const [activeTab, setActiveTab] = useState(categories[0].id);
  const tabsRef = useRef<HTMLDivElement>(null);

  const scrollTabs = (direction: 'left' | 'right') => {
    const currentIndex = categories.findIndex(c => c.id === activeTab);
    let newIndex = currentIndex;
    
    if (direction === 'left' && currentIndex > 0) {
      newIndex = currentIndex - 1;
    } else if (direction === 'right' && currentIndex < categories.length - 1) {
      newIndex = currentIndex + 1;
    }

    if (newIndex !== currentIndex) {
      const newTabId = categories[newIndex].id;
      setActiveTab(newTabId);
      
      // Scroll the newly active button into view
      if (tabsRef.current) {
        const button = tabsRef.current.children[newIndex] as HTMLButtonElement;
        if (button) {
          button.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        }
      }
    } else {
      // Fallback scroll bump if at edges
      if (tabsRef.current) {
        const scrollAmount = 200;
        tabsRef.current.scrollBy({
          left: direction === 'left' ? -scrollAmount : scrollAmount,
          behavior: 'smooth'
        });
      }
    }
  };

  const generateKeywords = (categoryId: string) => {
    const loc = locationName;
    switch(categoryId) {
      case "callgirls":
        return [
          `Paid call girls in ${loc}`, `Call girls in ${loc}`, `Best call girls ${loc}`, `Cheap call girls ${loc}`, 
          `High profile call girls ${loc}`, `Independent call girls ${loc}`, `${loc} call girl number`,
          `Call girl near me in ${loc}`, `Real call girls in ${loc}`, `Top call girls ${loc}`,
          `Escorts in ${loc}`, `${loc} escorts`, `Call girl whatsapp number ${loc}`
        ];
      case "bhabhi":
        return [
          `Paid bhabhi in ${loc}`, `Bhabhi in ${loc}`, `Desi bhabhi ${loc}`, `Aunty call girls ${loc}`,
          `Married women in ${loc}`, `Mature bhabhi ${loc}`, `Local bhabhi in ${loc}`,
          `Bhabhi number ${loc}`, `Hot bhabhi ${loc}`, `Punjabi bhabhi in ${loc}`
        ];
      case "housewife":
        return [
          `Paid housewife in ${loc}`, `Housewife in ${loc}`, `Lonely housewife ${loc}`, `Housewife call girl ${loc}`,
          `Real housewife ${loc}`, `Housewife contact number ${loc}`, `Local housewife ${loc}`,
          `Housewife escort ${loc}`, `Desi housewife ${loc}`
        ];
      case "college":
        return [
          `Paid college girls in ${loc}`, `College girls in ${loc}`, `Young girls ${loc}`, `College girl number ${loc}`,
          `Student call girl ${loc}`, `Teen escorts ${loc}`, `College girl ${loc}`,
          `Fresh college girls in ${loc}`, `University girls ${loc}`
        ];
      case "russian":
        return [
          `Paid russian escorts in ${loc}`, `Russian call girls in ${loc}`, `Russian escorts ${loc}`, `Foreigner girls ${loc}`,
          `White girls ${loc}`, `Russian models ${loc}`, `International escorts ${loc}`,
          `Blonde girls ${loc}`, `Russian escort agency ${loc}`
        ];
      case "vip":
        return [
          `Paid VIP escorts in ${loc}`, `VIP escorts in ${loc}`, `High class escorts ${loc}`, `Premium models ${loc}`,
          `VIP call girls ${loc}`, `Luxury escorts ${loc}`, `Celebrity escorts ${loc}`,
          `Elite companions ${loc}`, `5 star hotel escorts ${loc}`
        ];
      case "corporate":
        return [
          `Paid corporate girls in ${loc}`, `Corporate call girls in ${loc}`, `Working girls ${loc}`, `Office girl escorts ${loc}`,
          `Professional escorts ${loc}`, `Corporate women ${loc}`, `Executive escorts ${loc}`
        ];
      case "gym":
        return [
          `Paid gym girls in ${loc}`, `Gym girls in ${loc}`, `Fitness models ${loc}`, `Sporty escorts ${loc}`,
          `Flexible girls ${loc}`, `Yoga teacher escorts ${loc}`, `Athletic escorts ${loc}`
        ];
      default:
        return [];
    }
  };

  return (
    <section style={{ padding: '5rem 0', background: 'var(--surface-color)', borderTop: '1px solid var(--border-color)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2.5rem', color: 'var(--text-primary)', marginBottom: '1rem', letterSpacing: '-0.5px' }}>
            Popular Searches in {locationName}
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
            Explore the most trending and searched companion categories across {locationName}.
          </p>
        </div>

        {/* Category Tabs Wrapper */}
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2.5rem', maxWidth: '100%', margin: '0 auto 2.5rem auto' }}>
          
          <button 
            onClick={() => scrollTabs('left')}
            className="scroll-btn left"
            aria-label="Scroll left"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
          </button>

          <div 
            ref={tabsRef}
            className="tabs-scroll-container"
            style={{ 
              display: 'flex', 
              flexWrap: 'nowrap', 
              gap: '0.8rem', 
              overflowX: 'auto',
              scrollBehavior: 'smooth',
              scrollbarWidth: 'none', // Firefox
              msOverflowStyle: 'none', // IE/Edge
              padding: '0.5rem 0', // Reduced padding to minimize gap between arrows and chips
              flex: 1,
            }}
          >
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className="category-chip"
                style={{
                  border: activeTab === cat.id ? 'none' : '1px solid var(--border-color)',
                  background: activeTab === cat.id ? 'var(--accent-primary)' : '#fff',
                  color: activeTab === cat.id ? '#fff' : 'var(--text-primary)',
                  boxShadow: activeTab === cat.id ? '0 10px 20px rgba(233, 30, 99, 0.2)' : '0 2px 5px rgba(0,0,0,0.02)',
                }}
                aria-label={`Show searches for ${cat.name}`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          <button 
            onClick={() => scrollTabs('right')}
            className="scroll-btn right"
            aria-label="Scroll right"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </button>
        </div>

        {/* SEO Keywords Grid */}
        <div className="seo-keyword-container">
          {categories.map((cat) => (
            <div 
              key={cat.id} 
              className={`seo-keyword-grid-inner ${activeTab === cat.id ? 'active' : ''}`}
              style={{ 
                animation: activeTab === cat.id ? 'fadeIn 0.4s ease-out' : 'none'
              }}
            >
              {generateKeywords(cat.id).map((keyword, index) => (
                <Link 
                  key={index} 
                  href={cat.id === 'callgirls' ? '/' : `/category/${cat.id}`}
                  className="seo-keyword-tag"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, opacity: 0.5 }}>
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  </svg>
                  <span>{keyword}</span>
                </Link>
              ))}
              
              <div style={{ width: '100%', textAlign: 'center', marginTop: '1.5rem', gridColumn: '1 / -1' }}>
                <Link 
                  href={cat.id === 'callgirls' ? '/' : `/category/${cat.id}`}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.8rem 2rem',
                    background: 'var(--accent-primary)',
                    color: '#fff',
                    borderRadius: '50px',
                    fontWeight: 600,
                    textDecoration: 'none',
                    boxShadow: '0 4px 15px rgba(233, 30, 99, 0.3)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(233, 30, 99, 0.4)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 15px rgba(233, 30, 99, 0.3)';
                  }}
                >
                  Explore All {cat.name} ➔
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .scroll-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          background: #fff;
          border: 1px solid var(--border-color);
          border-radius: 50%;
          width: 40px;
          height: 40px;
          cursor: pointer;
          color: var(--text-primary);
          box-shadow: 0 4px 10px rgba(0,0,0,0.05);
          transition: all 0.2s ease;
          flex-shrink: 0;
          z-index: 2;
        }
        
        .scroll-btn:hover {
          background: var(--accent-primary);
          color: #fff;
          border-color: var(--accent-primary);
          transform: scale(1.05);
        }

        .scroll-btn:active {
          transform: scale(0.95);
        }

        .category-chip {
          padding: 0.8rem 1.8rem;
          border-radius: 50px;
          font-weight: 600;
          font-size: 0.95rem;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          white-space: nowrap;
          flex-shrink: 0;
        }

        .tabs-scroll-container::-webkit-scrollbar {
          display: none;
        }
        
        .seo-keyword-container {
          background: #fff;
          border-radius: 24px;
          padding: 3rem;
          box-shadow: 0 15px 50px rgba(0,0,0,0.04);
          border: 1px solid rgba(0,0,0,0.03);
        }

        .seo-keyword-grid-inner {
          display: none;
        }

        .seo-keyword-grid-inner.active {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .seo-keyword-tag {
          padding: 0.8rem 1.5rem;
          background: var(--bg-color);
          border-radius: 12px;
          color: var(--text-secondary);
          text-decoration: none;
          font-size: 0.95rem;
          font-weight: 500;
          transition: all 0.2s ease;
          border: 1px solid var(--border-color);
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          line-height: 1.4;
          white-space: nowrap;
        }

        .seo-keyword-tag:hover {
          color: var(--accent-primary);
          border-color: var(--accent-primary);
          background: rgba(233, 30, 99, 0.05);
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .category-chip {
            padding: 0.5rem 1rem;
            font-size: 0.85rem;
          }
          .scroll-btn {
            width: 34px;
            height: 34px;
          }
          .scroll-btn svg {
            width: 18px;
            height: 18px;
          }
          .seo-keyword-container {
            padding: 1.5rem;
            border-radius: 16px;
          }
          
          /* Changed from CSS grid to flex-column wrap for a beautiful masonry-like adjustable layout */
          .seo-keyword-grid-inner.active {
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            max-height: 195px; /* Safely accommodates 3 to 4 rows of tags */
            overflow-x: auto;
            gap: 0.8rem;
            padding-bottom: 0.5rem;
            align-content: flex-start;
            scrollbar-width: none;
            -ms-overflow-style: none;
          }
          
          .seo-keyword-grid-inner::-webkit-scrollbar {
            display: none;
          }

          .seo-keyword-tag {
            padding: 0.6rem 1rem;
            font-size: 0.85rem;
            width: max-content;
          }
        }
      `}} />
    </section>
  );
}
