"use client";
import React, { useState } from 'react';
import { siteConfig } from "@/config/site";

export default function ComparisonAccordion() {
  const [openIndex, setOpenIndex] = useState(0);
  
  const data = [
    { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>, feature: "Profile Verification", us: "100% verified independent profiles. We guarantee that the elite model in the photos is the exact same person who will arrive at your door.", them: "Fake, downloaded images used as bait. A completely different person shows up, ruining your experience." },
    { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M7 15h0M2 9.5h20"/></svg>, feature: "Booking & Payment", us: "Zero advance payment required. You only pay cash on arrival once the model is safely inside your room. Total peace of mind.", them: "Scammers demand upfront UPI deposits for \"registration\" or \"cab fare\" and block your number immediately after payment." },
    { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>, feature: "Privacy & Discretion", us: "Strict client confidentiality. Our models arrive in casual, elegant attire, blending in perfectly at 5-star hotels or residences.", them: "Unprofessional behavior and loud attire that draws unwanted attention from hotel staff and neighbors." },
    { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>, feature: "Availability & Support", us: "24/7 dedicated dispatch team. Instant WhatsApp replies and immediate booking confirmations at any hour of the day or night.", them: "Ignored messages, unreliable timings, and models who cancel at the last minute or show up hours late." }
  ];

  return (
    <div className="mobile-comparison">
      {data.map((row, i) => (
        <details 
          key={i} 
          className="accordion-item" 
          open={openIndex === i}
          onClick={(e) => {
            e.preventDefault();
            setOpenIndex(openIndex === i ? -1 : i);
          }}
        >
          <summary className="accordion-header">
            <div className="accordion-title">
              {row.icon}
              <span>{row.feature}</span>
            </div>
            <svg className="chevron-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: openIndex === i ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }}><polyline points="6 9 12 15 18 9"></polyline></svg>
          </summary>
          <div className="accordion-content">
            <div className="us-box">
              <div className="box-title">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>
                <span style={{ textTransform: 'uppercase' }}>{siteConfig.name}</span>
              </div>
              {row.us}
            </div>
            <div className="them-box">
              <div className="box-title">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
                OTHERS
              </div>
              {row.them}
            </div>
          </div>
        </details>
      ))}
    </div>
  );
}
