import React from 'react';
import { siteConfig, getWhatsAppUrl, getPhoneUrl } from '../data/siteConfig';

export default function AppointmentCTA() {
  const handleWhatsAppBooking = () => {
    window.open(getWhatsAppUrl("مرحبًا AURA BEAUTY، أود حجز موعد لزيارة البوتيك واختيار فستان الزفاف."), '_blank');
  };

  return (
    <section className="magazine-cta-section" id="booking">
      <div className="container">
        <div className="mag-cta-card">
          <h2 className="mag-cta-title">
            {siteConfig.slogans.ctaTitle}
          </h2>
          <p className="mag-cta-text">
            احجزي موعدكِ وزورينا في AURA BEAUTY لاختيار الفستان الذي يليق بكِ وبليلتكِ الاستثنائية.
          </p>

          <div className="mag-cta-buttons">
            <button onClick={handleWhatsAppBooking} className="btn-magazine-primary">
              احجزي عبر واتساب
            </button>
            <a href={getPhoneUrl()} className="btn-magazine-outline">
              اتصلي بنا
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
