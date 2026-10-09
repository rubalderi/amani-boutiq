import React, { useState } from 'react';
import { getWhatsAppUrl } from '../data/siteConfig';
import { useLanguage } from '../context/LanguageContext';

export default function DressCard({ dress, index, onSelect }) {
  const { lang, t } = useLanguage();
  const isRtl = lang === 'ar';

  const imagesList = (dress.images && dress.images.length > 0) 
    ? dress.images 
    : (dress.image ? [dress.image] : []);
  
  const [activeIdx, setActiveIdx] = useState(0);

  const handleDirectWhatsApp = (e) => {
    e.stopPropagation();
    const text = isRtl
      ? `مرحبًا AURA BEAUTY، أود الاستفسار عن الفستان ${dress.name} (${dress.arabicName || dress.subtitle}) وحجز موعد للزيارة.`
      : `Hello AURA BEAUTY, I would like to inquire about the gown ${dress.name} (${dress.englishName || dress.subtitle}) and book an appointment to visit the boutique.`;
    window.open(getWhatsAppUrl(text), '_blank');
  };

  const handlePrevImg = (e) => {
    e.stopPropagation();
    setActiveIdx((prev) => (prev - 1 + imagesList.length) % imagesList.length);
  };

  const handleNextImg = (e) => {
    e.stopPropagation();
    setActiveIdx((prev) => (prev + 1) % imagesList.length);
  };

  const handleDotClick = (e, i) => {
    e.stopPropagation();
    setActiveIdx(i);
  };

  const hasMultipleImages = imagesList.length > 1;
  const displayName = dress.name;
  const subName = isRtl ? dress.arabicName : dress.englishName;

  return (
    <article className="look-card look-card-square" onClick={() => onSelect(dress, activeIdx)}>
      {/* 1. Top Centered Title */}
      <div className="look-card-top-header">
        <h3 className="look-title-top">{displayName}</h3>
        {subName && (
          <span className="look-title-arabic-sub">{subName}</span>
        )}
      </div>

      {/* 2. Square Dress Image Container */}
      <div className="look-image-wrapper">
        {imagesList.length > 0 ? (
          <>
            <img 
              src={imagesList[activeIdx]} 
              alt={`${displayName} - ${subName || dress.subtitle} - AURA BEAUTY`} 
              loading="lazy" 
              className="card-main-dress-img"
            />

            {/* Flip Arrows (Visible when card has multiple photos) */}
            {hasMultipleImages && (
              <div className="card-slider-controls">
                <button 
                  type="button" 
                  className="card-nav-arrow arrow-prev"
                  onClick={handlePrevImg}
                  aria-label={t.gallery.prevImg}
                  title={t.gallery.prevImg}
                >
                  {isRtl ? '›' : '‹'}
                </button>
                <button 
                  type="button" 
                  className="card-nav-arrow arrow-next"
                  onClick={handleNextImg}
                  aria-label={t.gallery.nextImg}
                  title={t.gallery.nextImg}
                >
                  {isRtl ? '‹' : '›'}
                </button>
              </div>
            )}

            {/* Slider Dots */}
            {hasMultipleImages && (
              <div className="card-slider-dots">
                {imagesList.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    className={`card-slider-dot ${i === activeIdx ? 'active' : ''}`}
                    onClick={(e) => handleDotClick(e, i)}
                    aria-label={`${t.gallery.viewImgAria} ${i + 1}`}
                  />
                ))}
              </div>
            )}
          </>
        ) : (
          <div className="dress-placeholder-box">
            <div className="placeholder-icon-wrap">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7l7 4-1.5 2.5-4.5-2.5V22H8V11L3.5 13.5 2 11l7-4V5.73C8.4 5.39 8 4.74 8 4a2 2 0 0 1 4-2z" />
              </svg>
            </div>
            <span className="placeholder-main-text">{t.gallery.placeholderMain}</span>
            <span className="placeholder-sub-text">{t.gallery.placeholderSub}</span>
          </div>
        )}
      </div>

      {/* 3. Action Buttons Row: View Details & WhatsApp Inquire */}
      <div className="look-card-actions-row">
        <button 
          type="button" 
          className="btn-card-action btn-card-details"
          onClick={() => onSelect(dress, activeIdx)}
        >
          {t.gallery.viewDetails}
        </button>
        <button 
          type="button" 
          className="btn-card-action btn-card-inquire"
          onClick={handleDirectWhatsApp}
        >
          {t.gallery.inquire}
        </button>
      </div>
    </article>
  );
}
