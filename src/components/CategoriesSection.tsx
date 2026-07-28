import React from 'react';
import Link from 'next/link';

const categories = [
  { name: "Desi Bhabhis", slug: "bhabhi", desc: "Mature, experienced, and highly seductive married women who know exactly how to please.", icon: "💋" },
  { name: "College Girls", slug: "college-girl", desc: "Young, energetic, and innocent-looking beauties perfect for passionate GFE experiences.", icon: "🎓" },
  { name: "Russian Models", slug: "russian", desc: "Stunning international escorts with flawless bodies and exotic features.", icon: "✈️" },
  { name: "VIP Models", slug: "vip-model", desc: "High-profile fashion models and elite companions for high-society events.", icon: "💎" },
  { name: "Air Hostesses", slug: "air-hostess", desc: "Sophisticated, beautiful, and extremely professional cabin crew girls.", icon: "🛫" },
  { name: "Housewives", slug: "housewife", desc: "Discreet and lonely housewives seeking thrilling secret encounters.", icon: "🏠" },
  { name: "Corporate Girls", slug: "corporate", desc: "Smart, articulate office executives perfect for dinner dates and intellectual connection.", icon: "💼" },
  { name: "Gym Girls", slug: "fitness", desc: "Fit, flexible, and extremely stamina-driven fitness models.", icon: "🧘‍♀️" }
];

export default function CategoriesSection() {
  return (
    <section id="categories" style={{ padding: '6rem 0', background: 'var(--bg-color)', borderTop: '1px solid var(--border-color)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span style={{ color: 'var(--accent-primary)', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.9rem', display: 'block', marginBottom: '1rem' }}>Find Your Perfect Match</span>
          <h2 style={{ fontSize: '2.8rem', color: 'var(--text-primary)', marginBottom: '1.5rem', lineHeight: 1.2 }}>
            Agra Escort Categories
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
            We represent a diverse portfolio of independent companions. Choose the category that best fits your deepest desires.
          </p>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))', gap: '2rem' }}>
          {categories.map((cat, index) => (
            <Link key={index} href={`/category/${cat.slug}`} className="nav-card" style={{
              background: '#fff',
              borderRadius: '20px',
              padding: '2.5rem 2rem',
              textAlign: 'center',
              boxShadow: '0 10px 40px rgba(0,0,0,0.04)',
              border: '1px solid var(--border-color)',
              transition: 'all 0.3s ease',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textDecoration: 'none'
            }}>
              <div style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>{cat.icon}</div>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', marginBottom: '1rem' }}>{cat.name}</h3>
              <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.6 }}>{cat.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
