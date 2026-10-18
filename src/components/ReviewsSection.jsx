import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function ReviewsSection() {
  const { lang, t } = useLanguage();
  const isRtl = lang === 'ar';
  
  const reviewsData = t.reviews?.items || [];
  const [activeModalIdx, setActiveModalIdx] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  const marqueeRef = useRef(null);

  // Duplicate items to ensure seamless infinite looping marquee
  const loopedReviews = [...reviewsData, ...reviewsData, ...reviewsData];

  // Keyboard navigation for the review screenshot modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (activeModalIdx === null) return;
      if (e.key === 'Escape') {
        setActiveModalIdx(null);
      } else if (e.key === 'ArrowRight') {
        setActiveModalIdx((prev) => (isRtl ? (prev - 1 + reviewsData.length) % reviewsData.length : (prev + 1) % reviewsData.length));
      } else if (e.key === 'ArrowLeft') {
        setActiveModalIdx((prev) => (isRtl ? (prev + 1) % reviewsData.length : (prev - 1 + reviewsData.length) % reviewsData.length));
      }
    };

    if (activeModalIdx !== null) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeModalIdx, isRtl, reviewsData.length]);

  const activeReview = activeModalIdx !== null ? reviewsData[activeModalIdx] : null;

  return (
    <section className="reviews-section" id="reviews">
      
      {/* Section Header */}
      <div className="container">
        <div className="reviews-header-block">
          <h2 className="reviews-main-title">{t.reviews.title}</h2>
          {t.reviews.subtitle ? <p className="reviews-subtitle">{t.reviews.subtitle}</p> : null}
        </div>
      </div>

      {/* Infinite Moving Marquee Ticker Container */}
      <div 
        className="reviews-marquee-wrapper"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        {/* Left & Right Edge Gradient Fades */}
        <div className="reviews-marquee-fade fade-left" aria-hidden="true"></div>
        <div className="reviews-marquee-fade fade-right" aria-hidden="true"></div>

        {/* The Animated Moving Track */}
        <div 
          ref={marqueeRef}
          className={`reviews-marquee-track ${isPaused ? 'is-paused' : ''} ${isRtl ? 'dir-rtl' : 'dir-ltr'}`}
        >
          {loopedReviews.map((review, i) => {
            const originalIndex = i % reviewsData.length;
            return (
              <article 
                key={`${review.id}-${i}`} 
                className="review-marquee-card"
                onClick={() => setActiveModalIdx(originalIndex)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter') setActiveModalIdx(originalIndex); }}
                aria-label={review.featureTag}
              >
                {/* Top Row: 5 Gold Stars Centered */}
                <div className="review-card-top-bar">
                  <div className="review-stars-group" aria-label="5 stars rating">
                    {'★★★★★'.split('').map((star, sIdx) => (
                      <span key={sIdx} className="review-star-gold">{star}</span>
                    ))}
                  </div>
                </div>

                {/* Pure Feature Focus: Title Only */}
                <div className="review-feature-box">
                  <h3 className="review-feature-title">
                    <span className="review-feature-sparkle" aria-hidden="true">✦</span>
                    <span>{review.featureTag}</span>
                  </h3>
                </div>

                {/* Luxury Royal Gold Button - Clean Text Only */}
                <button 
                  type="button"
                  className="review-gold-action-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveModalIdx(originalIndex);
                  }}
                >
                  {t.reviews.viewOriginal}
                </button>

              </article>
            );
          })}
        </div>
      </div>



      {/* Lightbox Screenshot Modal - Full Conversation View (No Header) */}
      {activeReview && (
        <div 
          className="review-modal-backdrop" 
          onClick={() => setActiveModalIdx(null)}
          role="dialog" 
          aria-modal="true" 
          aria-label={t.reviews.modalTitle}
        >
          <div className="review-modal-content clean-modal" onClick={(e) => e.stopPropagation()}>
            {/* Clean Floating Close Button */}
            <button 
              type="button" 
              className="review-modal-clean-close" 
              onClick={() => setActiveModalIdx(null)}
              aria-label={t.reviews.closeAria}
              title={t.reviews.closeAria}
            >
              ✕
            </button>

            {/* Modal Image Display - Full & Pure */}
            <div className="review-modal-img-wrap">
              <img 
                src={activeReview.image} 
                alt={activeReview.featureTag} 
                className="review-modal-full-img"
              />

              {/* Prev / Next Arrows */}
              <button 
                type="button" 
                className="review-modal-arrow arrow-prev" 
                onClick={() => setActiveModalIdx((prev) => (prev - 1 + reviewsData.length) % reviewsData.length)}
                aria-label={t.reviews.prevReview}
                title={t.reviews.prevReview}
              >
                {isRtl ? '›' : '‹'}
              </button>
              <button 
                type="button" 
                className="review-modal-arrow arrow-next" 
                onClick={() => setActiveModalIdx((prev) => (prev + 1) % reviewsData.length)}
                aria-label={t.reviews.nextReview}
                title={t.reviews.nextReview}
              >
                {isRtl ? '‹' : '›'}
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
