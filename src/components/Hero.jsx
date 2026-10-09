import React from 'react';
import { getWhatsAppUrl } from '../data/siteConfig';
import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
  const { t, lang } = useLanguage();
  const isRtl = lang === 'ar';

  const handleBookingClick = () => {
    window.open(
      getWhatsAppUrl(t.nav.bookMsg),
      '_blank'
    );
  };

  return (
    <section className="hero-editorial-wrapper" id="hero">
      <div className="hero-editorial-container">
        
        {/* Main Hero Row: Left spacer for the dress in background, Right text column */}
        <div className="hero-main-row">
          
          {/* Left Spacer (mannequin with royal dress on background) */}
          <div className="hero-dress-spacer" aria-hidden="true"></div>

          {/* Right Text Column: Exact typography, buttons & alignment */}
          <div className="hero-story-column">
            
            {/* 1. Brand Kicker: ── AURA BEAUTY ── */}
            <div className="hero-brand-kicker">
              <span className="kicker-line"></span>
              <span className="kicker-text">AURA BEAUTY</span>
              <span className="kicker-line"></span>
            </div>

            {/* 2. Subheadline: لإنكِ تستاهلين تحوّين الأجملْ */}
            <p className="hero-luxury-subheadline">
              {t.hero.subheadline}
            </p>

            {/* 3. Main Headline: فستان ليلة العمر يبدأ من هنا */}
            <h1 className="hero-luxury-headline">
              {t.hero.headline}
            </h1>

            {/* 4. Description Paragraph */}
            <p className="hero-luxury-desc">
              {t.hero.desc}
            </p>

            {/* 5. Action Buttons (Gold Booking on Right in RTL, Cream Discover on Left) */}
            <div className="hero-luxury-actions">
              {/* Primary Gold Pill: احجزي موعدكِ الآن (Calendar on right) */}
              <button 
                type="button" 
                className="hero-btn-booking" 
                onClick={handleBookingClick}
              >
                <svg className="btn-calendar-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="3" y="4" width="18" height="18" rx="3" ry="3" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                <span>{t.hero.bookBtn}</span>
              </button>

              {/* Secondary Outlined Pill: تصفحي التشكيلة ← (Arrow on left) */}
              <a href="#collection" className="hero-btn-discover">
                <span>{t.hero.browseBtn}</span>
                <span className="btn-arrow-icon">{isRtl ? '←' : '→'}</span>
              </a>
            </div>

            {/* 6. Four Features Strip (Crown, Diamond, Person, Bag) placed in right column */}
            <div className="hero-trust-strip">
              
              {/* Feature 1 (Right): تصاميم حصرية وفاخرة (Crown) */}
              <div className="trust-strip-item">
                <svg className="trust-icon-svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#B48D4C" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M4 18h16M4 18l1.6-9.5 4.4 4 2-7.5 2 7.5 4.4-4L20 18" />
                  <circle cx="4" cy="8.5" r="1" fill="#B48D4C" />
                  <circle cx="10" cy="12.5" r="1" fill="#B48D4C" />
                  <circle cx="12" cy="5" r="1" fill="#B48D4C" />
                  <circle cx="14" cy="12.5" r="1" fill="#B48D4C" />
                  <circle cx="20" cy="8.5" r="1" fill="#B48D4C" />
                </svg>
                <div className="trust-item-text">
                  <span className="trust-main-txt">{t.hero.trust1Main}</span>
                  <span className="trust-sub-txt">{t.hero.trust1Sub}</span>
                </div>
              </div>

              <div className="trust-strip-divider" aria-hidden="true"></div>

              {/* Feature 2: أقمشة عالية الجودة ومريحة (Diamond) */}
              <div className="trust-strip-item">
                <svg className="trust-icon-svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#B48D4C" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M6 4h12l4 7-10 11L2 11l4-7z" />
                  <path d="M2 11h20" />
                  <path d="M9 4l-2 7 5 11 5-11-2-7" />
                </svg>
                <div className="trust-item-text">
                  <span className="trust-main-txt">{t.hero.trust2Main}</span>
                  <span className="trust-sub-txt">{t.hero.trust2Sub}</span>
                </div>
              </div>

              <div className="trust-strip-divider" aria-hidden="true"></div>

              {/* Feature 3: تجربة شخصية ومميزة (Person) */}
              <div className="trust-strip-item">
                <svg className="trust-icon-svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#B48D4C" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="7" r="4.5" />
                  <path d="M5 21a7 7 0 0 1 14 0" />
                </svg>
                <div className="trust-item-text">
                  <span className="trust-main-txt">{t.hero.trust3Main}</span>
                  <span className="trust-sub-txt">{t.hero.trust3Sub}</span>
                </div>
              </div>

              <div className="trust-strip-divider" aria-hidden="true"></div>

              {/* Feature 4 (Left): استلام فوري وبدون عناء (Shopping Bag) */}
              <div className="trust-strip-item">
                <svg className="trust-icon-svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#B48D4C" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M6 7h12l1.5 13a2 2 0 0 1-2 2H6.5a2 2 0 0 1-2-2L6 7z" />
                  <path d="M9 10a3 3 0 0 0 6 0" />
                </svg>
                <div className="trust-item-text">
                  <span className="trust-main-txt">{t.hero.trust4Main}</span>
                  <span className="trust-sub-txt">{t.hero.trust4Sub}</span>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* 7. Scroll Down Capsule Indicator */}
        <div className="hero-scroll-wrap">
          <a href="#collection" className="hero-scroll-indicator" aria-label="التمرير للأسفل">
            <svg width="12" height="16" viewBox="0 0 24 24" fill="none" stroke="#B48D4C" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="12" y1="4" x2="12" y2="18" />
              <polyline points="18 12 12 18 6 12" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}
