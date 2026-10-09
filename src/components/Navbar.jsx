import React, { useState, useEffect, useRef } from 'react';
import { siteConfig, getWhatsAppUrl } from '../data/siteConfig';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t, lang, toggleLang } = useLanguage();
  const navRef = useRef(null);

  useEffect(() => {
    const updateNavHeight = () => {
      if (navRef.current) {
        const height = navRef.current.offsetHeight;
        document.documentElement.style.setProperty('--navbar-height', `${height}px`);
      }
    };

    updateNavHeight();
    window.addEventListener('resize', updateNavHeight);

    let ro;
    if (typeof ResizeObserver !== 'undefined' && navRef.current) {
      ro = new ResizeObserver(updateNavHeight);
      ro.observe(navRef.current);
    }

    return () => {
      window.removeEventListener('resize', updateNavHeight);
      if (ro) ro.disconnect();
    };
  }, []);

  const handleBookingClick = () => {
    window.open(
      getWhatsAppUrl(t.nav.bookMsg),
      '_blank'
    );
  };

  return (
    <>
      <nav className="magazine-navbar" ref={navRef}>
        <div className="container navbar-container-flex">
          
          {/* 1. RIGHT: Boutique Logo + Brand Title */}
          <a href="#hero" className="navbar-brand-group" aria-label="AURA BEAUTY الرئيسية">
            <img 
              src="/assets/logo/logo.png" 
              alt="AURA BEAUTY Logo" 
              className="navbar-brand-logo" 
            />
            <div className="navbar-brand-text-block">
              <span className="navbar-brand-title">{siteConfig.brandName}</span>
              <span className="navbar-brand-sub">BRIDAL BOUTIQUE</span>
            </div>
          </a>

          {/* 2. MIDDLE: Navigation Links */}
          <div className="navbar-links-group" aria-label="التنقل الرئيسي">
            <a href="#hero" className="mag-nav-link active">{t.nav.home}</a>
            <a href="#intro" className="mag-nav-link">{t.nav.about}</a>
            <a href="#collection" className="mag-nav-link">{t.nav.dresses}</a>
            <a href="#bridal-essence" className="mag-nav-link">{t.nav.experience}</a>
            <a href="#faq" className="mag-nav-link">{t.nav.faq}</a>
            <a href="#location" className="mag-nav-link">{t.nav.location}</a>
          </div>

          {/* 3. LEFT: Language Toggle + Booking Button + Mobile Trigger */}
          <div className="navbar-action-group">
            {/* Language Toggle Button */}
            <button
              onClick={toggleLang}
              className="nav-lang-toggle-btn"
              aria-label={lang === 'ar' ? 'Switch to English' : 'التبديل للعربية'}
              title={lang === 'ar' ? 'Switch to English' : 'التبديل للعربية'}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
              <span>{t.langToggle}</span>
            </button>

            <button onClick={handleBookingClick} className="nav-booking-pill-btn">
              <svg className="btn-calendar-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              <span>{t.nav.bookBtn}</span>
            </button>
            <button 
              className="mobile-menu-trigger" 
              onClick={() => setMobileOpen(true)}
              aria-label="فتح القائمة"
            >
              ☰
            </button>
          </div>

        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="mobile-nav-drawer" onClick={() => setMobileOpen(false)}>
          <div className="drawer-content" onClick={(e) => e.stopPropagation()}>
            <div className="drawer-header">
              <div className="drawer-brand-wrap">
                <img 
                  src="/assets/logo/logo.png" 
                  alt="AURA BEAUTY" 
                  className="drawer-logo-img" 
                />
                <span className="brand-name">{siteConfig.brandName}</span>
              </div>
              <button 
                className="drawer-close" 
                onClick={() => setMobileOpen(false)}
                aria-label="إغلاق القائمة"
              >
                ✕
              </button>
            </div>

            <div className="drawer-links">
              <a href="#hero" className="drawer-link" onClick={() => setMobileOpen(false)}>{t.nav.home}</a>
              <a href="#intro" className="drawer-link" onClick={() => setMobileOpen(false)}>{t.nav.about}</a>
              <a href="#collection" className="drawer-link" onClick={() => setMobileOpen(false)}>{t.nav.dresses}</a>
              <a href="#bridal-essence" className="drawer-link" onClick={() => setMobileOpen(false)}>{t.nav.experience}</a>
              <a href="#faq" className="drawer-link" onClick={() => setMobileOpen(false)}>{t.nav.faq}</a>
              <a href="#location" className="drawer-link" onClick={() => setMobileOpen(false)}>{t.nav.location}</a>
              {/* Language toggle in mobile drawer */}
              <button onClick={toggleLang} className="drawer-lang-btn">
                🌐 {t.langToggle}
              </button>
            </div>

            <div className="drawer-footer-cta">
              <button onClick={handleBookingClick} className="nav-booking-pill-btn" style={{ width: '100%', justifyContent: 'center' }}>
                <svg className="btn-calendar-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
                <span>{t.nav.bookBtn}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
