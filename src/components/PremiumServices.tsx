"use client";
import React from 'react';

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
  return (
    <section style={{ padding: '5rem 0', background: 'var(--surface-color)' }}>
      <div className="container">
        <h2 style={{ textAlign: 'center', fontSize: '2.8rem', color: 'var(--text-primary)', marginBottom: '3rem' }}>
          Our Premium Agra Escort Services
        </h2>
        
        <div className="premium-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 250px), 1fr))',
          gap: '1.5rem'
        }}>
          {premiumServices.map((service, index) => (
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
      </div>
    </section>
  );
}
