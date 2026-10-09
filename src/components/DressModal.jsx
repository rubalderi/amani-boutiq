import React, { useState, useEffect } from 'react';
import { getWhatsAppUrl } from '../data/siteConfig';
import { useLanguage } from '../context/LanguageContext';

export default function DressModal({ dress, initialIndex = 0, onClose }) {
  const { lang, t } = useLanguage();
  const isRtl = lang === 'ar';

  const imagesList = (dress?.images && dress.images.length > 0)
    ? dress.images
    : (dress?.image ? [dress.image] : []);

  const [activeIdx, setActiveIdx] = useState(initialIndex || 0);

  useEffect(() => {
    setActiveIdx(initialIndex || 0);
  }, [initialIndex, dress]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && imagesList.length > 1) {
        setActiveIdx((prev) => (prev + (isRtl ? 1 : -1) + imagesList.length) % imagesList.length);
      }
      if (e.key === 'ArrowRight' && imagesList.length > 1) {
        setActiveIdx((prev) => (prev + (isRtl ? -1 : 1) + imagesList.length) % imagesList.length);
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose, imagesList.length, isRtl]);

  if (!dress) return null;

  const displayName = dress.name;
  const subName = isRtl ? dress.arabicName : dress.englishName;
  const dressDesc = isRtl ? dress.description : (dress.englishDesc || dress.description);
  const dressDetails = isRtl ? dress.details : (dress.englishDetails || dress.details);
  const dressFaqs = isRtl ? dress.faqs : (dress.englishFaqs || dress.faqs);
  const availabilityBadge = isRtl ? dress.availability : (dress.englishAvailability || t.modal.saleAndRental);

  const handleWhatsAppInquiry = () => {
    const text = isRtl
      ? `مرحبًا AURA BEAUTY، أرغب بالاستفسار عن الفستان ${dress.name} (${dress.arabicName || dress.subtitle}) وحجز موعد للزيارة.`
      : `Hello AURA BEAUTY, I would like to inquire about the gown ${dress.name} (${dress.englishName || dress.subtitle}) and book an appointment to visit the boutique.`;
    window.open(getWhatsAppUrl(text), '_blank');
  };

  const handleBookingClick = () => {
    const text = isRtl
      ? `مرحبًا AURA BEAUTY، أود حجز موعد لتجربة الفستان ${dress.name} (${dress.arabicName || ''}) في البوتيك.`
      : `Hello AURA BEAUTY, I would like to book a fitting appointment for the gown ${dress.name} (${dress.englishName || ''}) at the boutique.`;
    window.open(getWhatsAppUrl(text), '_blank');
  };

  const counterText = t.modal.photoCounter
    .replace('{current}', String(activeIdx + 1))
    .replace('{total}', String(imagesList.length));

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label={`Details of ${dress.name}`}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button 
          className="modal-close-btn" 
          onClick={onClose}
          aria-label={t.modal.closeAria}
        >
          ✕
        </button>

        <div className="modal-body">
          {/* Dress Image Gallery or Placeholder */}
          <div className="modal-image-col">
            {imagesList.length > 0 ? (
              <div className="modal-gallery-container">
                {/* Main Large Image Display */}
                <div className="modal-main-img-wrap">
                  <img 
                    src={imagesList[activeIdx]} 
                    alt={`${displayName} - ${subName || dress.subtitle} - Photo ${activeIdx + 1} - AURA BEAUTY`} 
                    className="modal-active-img"
                  />

                  {imagesList.length > 1 && (
                    <>
                      {/* Counter Badge */}
                      <span className="modal-photo-counter">
                        {counterText}
                      </span>

                      {/* Navigation Arrows */}
                      <button
                        type="button"
                        className="modal-nav-arrow arrow-prev"
                        onClick={() => setActiveIdx((prev) => (prev - 1 + imagesList.length) % imagesList.length)}
                        aria-label={t.gallery.prevImg}
                        title={t.gallery.prevImg}
                      >
                        {isRtl ? '›' : '‹'}
                      </button>
                      <button
                        type="button"
                        className="modal-nav-arrow arrow-next"
                        onClick={() => setActiveIdx((prev) => (prev + 1) % imagesList.length)}
                        aria-label={t.gallery.nextImg}
                        title={t.gallery.nextImg}
                      >
                        {isRtl ? '‹' : '›'}
                      </button>
                    </>
                  )}
                </div>

                {/* Thumbnails Row (when multiple photos exist) */}
                {imagesList.length > 1 && (
                  <div className="modal-thumbs-row">
                    {imagesList.map((imgSrc, i) => (
                      <button
                        key={i}
                        type="button"
                        className={`modal-thumb-item ${i === activeIdx ? 'active' : ''}`}
                        onClick={() => setActiveIdx(i)}
                        aria-label={`${t.gallery.viewImgAria} ${i + 1}`}
                      >
                        <img src={imgSrc} alt={`Thumbnail ${i + 1} - ${dress.name}`} />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <div className="modal-placeholder-box">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                  <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7l7 4-1.5 2.5-4.5-2.5V22H8V11L3.5 13.5 2 11l7-4V5.73C8.4 5.39 8 4.74 8 4a2 2 0 0 1 4-2z" />
                </svg>
                <span className="modal-placeholder-text">{t.modal.placeholderText}</span>
              </div>
            )}

            {/* 3 Tailored FAQs placed in the Column */}
            {dressFaqs && dressFaqs.length > 0 && (
              <div className="modal-dress-faqs modal-faqs-right-col">
                <h4 className="modal-features-title modal-faqs-heading">
                  <span className="modal-faq-icon">✦</span>
                  {t.modal.faqsTitle}
                </h4>
                <div className="modal-faqs-list">
                  {dressFaqs.map((faq, fIdx) => (
                    <details key={fIdx} className="modal-faq-card" open={fIdx === 0}>
                      <summary className="modal-faq-question">
                        <span>{faq.q}</span>
                        <span className="modal-faq-toggle-arrow">▾</span>
                      </summary>
                      <p className="modal-faq-answer">{faq.a}</p>
                    </details>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Dress Info */}
          <div className="modal-info-col">
            <span className="modal-badge">{availabilityBadge}</span>
            <div className="modal-title-row">
              <h2 className="modal-title">{displayName}</h2>
              {subName && (
                <span className="modal-arabic-name-tag">{subName}</span>
              )}
            </div>
            <span className="modal-subtitle">{dress.subtitle}</span>

            <p className="modal-desc">{dressDesc}</p>

            {dressDetails && dressDetails.length > 0 && (
              <>
                <h4 className="modal-features-title">{t.modal.detailsTitle}</h4>
                <ul className="modal-features-list">
                  {dressDetails.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
              </>
            )}

            <div className="modal-cta-group">
              <button 
                onClick={handleWhatsAppInquiry} 
                className="btn-primary"
              >
                {t.modal.waInquire}
              </button>
              <button 
                onClick={handleBookingClick} 
                className="btn-secondary"
              >
                {t.modal.bookFitting}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
