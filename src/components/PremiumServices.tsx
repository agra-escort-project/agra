"use client";
import React, { useState } from 'react';

const premiumServices = [
  { icon: "🍑", title: "Backdoor Exploration", desc: "For those with a taste for adventure. Dive into specialized, unrestricted backdoor action with our highly flexible VIP models." },
  { icon: "👅", title: "Passionate GFE Kissing", desc: "Deep, wet, and deeply emotional. Experience the intoxicating thrill of raw, tongue-tangling French kisses that feel like the real deal." },
  { icon: "🥵", title: "Nude Body-to-Body", desc: "Feel every curve pressed against you. Our seductive massage girls will cover you in oil and grind away every ounce of your tension." },
  { icon: "🍒", title: "Oral Climax (COM)", desc: "Surrender to the ultimate release. Our open-minded escorts are eager to drop to their knees and take care of your deepest cravings." },
  { icon: "😈", title: "Dominance & Submission", desc: "Take control or be controlled. Bring your darkest, most twisted fetishes to life with girls who love to play rough." },
  { icon: "💦", title: "Body Glaze (COB)", desc: "The ultimate visual finish. Our stunning independent girls love getting messy and satisfying your deepest visual desires." },
  { icon: "💋", title: "Dual Pleasure 69", desc: "Face-to-face ecstasy. Lose yourself in mutual, simultaneous pleasure that guarantees an explosive climax for both of you." },
  { icon: "👯‍♀️", title: "Double Fantasy (MFF)", desc: "Why settle for one? Sandwich yourself between two breathtaking Agra beauties for a wild, unforgettable night of double trouble." },
  { icon: "💎", title: "Limitless VIP Action", desc: "No holding back. The ultimate premium package offering unrestricted, wild action tailored for elite gentlemen." },
  { icon: "🌙", title: "All-Night Companionship", desc: "Lock the door and throw away the key. Enjoy marathon sessions, endless cuddles, and multiple rounds until the sun comes up." },
  { icon: "🚿", title: "Slippery Shower Fun", desc: "Things get hotter when wet. Lather up and enjoy a slippery, highly intimate wash with a naked, eager companion." },
  { icon: "🛎️", title: "Discreet Room Delivery", desc: "We bring the heat directly to your bed. Fast, unmarked outcall service to all major luxury hotels in Agra." },
  { icon: "💖", title: "Intimate GFE Connection", desc: "The perfect blend of romance and raw lust. Enjoy deep affection, cuddling, and passionate intimacy without any boundaries." },
  { icon: "👩‍🏫", title: "Kinky Roleplay Scenarios", desc: "Naughty schoolgirl? Strict nurse? Tell her what to wear and she will play the part perfectly for your private fantasy." },
  { icon: "📱", title: "Virtual Tease Sessions", desc: "Can't wait until you arrive? Get incredibly hot, one-on-one private video action with our local verified stunners." },
  { icon: "✈️", title: "Russian & Elite Models", desc: "Taste exotic flavors. Book our premium international and Russian escorts for a breathtakingly luxurious encounter." },
  { icon: "🥂", title: "High-Society Dates", desc: "Show her off. Articulate, stunningly beautiful arm candy perfect for making your colleagues envious before the real fun begins." },
  { icon: "👠", title: "Private Strip Show", desc: "Your own personal VIP room. Watch her slowly take it all off just for you, right in the comfort of your hotel room." },
  { icon: "🛁", title: "Steamy Bath Time", desc: "Submerge into pure bliss. Share a hot, sensual bubble bath filled with teasing touches and slippery exploration." },
  { icon: "💃", title: "Sensual Grind & Tease", desc: "Feel the friction. Sit back and enjoy a hardcore, private lap dance from Agra's sexiest, most rhythmic call girls." },
];

export default function PremiumServices() {
  const [showAll, setShowAll] = useState(false);
  const displayedServices = showAll ? premiumServices : premiumServices.slice(0, 8);

  return (
    <section style={{ padding: '5rem 0', background: 'var(--surface-color)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span style={{ color: 'var(--accent-primary)', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.85rem', display: 'block', marginBottom: '1rem' }}>Ultimate Pleasure</span>
          <h2 className="section-title" style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--text-primary)', letterSpacing: '-0.5px' }}>Our Premium Escort Services</h2>
          <p style={{ fontSize: '1.1rem', color: '#666', maxWidth: '800px', margin: '0 auto', lineHeight: 1.7 }}>
            Experience unrestricted VIP action, passionate GFE sessions, and wild double fantasies. Tell our elite call girls exactly what you desire.
          </p>
        </div>
        <div className="premium-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 250px), 1fr))',
          gap: '1.5rem'
        }}>
          {displayedServices.map((service, index) => (
            <div key={index} style={{
              background: '#fff',
              borderRadius: '16px',
              padding: '2rem 1.5rem',
              textAlign: 'center',
              boxShadow: 'var(--shadow-sm)',
              border: '1px solid var(--border-color)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '1rem'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = 'var(--shadow-md)';
              e.currentTarget.style.borderColor = 'var(--accent-primary)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
              e.currentTarget.style.borderColor = 'var(--border-color)';
            }}>
              <div style={{ fontSize: '3rem', lineHeight: 1 }}>{service.icon}</div>
              <h3 style={{ fontSize: '1.2rem', color: 'var(--text-primary)', margin: 0 }}>{service.title}</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', margin: 0 }}>{service.desc}</p>
            </div>
          ))}
        </div>
        
        <div style={{ textAlign: 'center', marginTop: '4rem' }}>
          <button 
            onClick={() => setShowAll(!showAll)}
            className="btn btn-secondary" 
            style={{ 
              padding: '1.2rem 1rem', 
              fontSize: '1.05rem',
              whiteSpace: 'nowrap',
              background: showAll ? 'var(--surface-color)' : '#fff',
              border: '2px solid var(--accent-primary)',
              color: 'var(--accent-primary)'
            }}
          >
            {showAll ? 'View Less' : `View All ${premiumServices.length}+ Premium Services`}
          </button>
        </div>
      </div>
    </section>
  );
}
