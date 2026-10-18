import React, { useState } from 'react';
import { siteConfig, getWhatsAppUrl } from '../data/siteConfig';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const [activeModal, setActiveModal] = useState(null); // 'terms' | 'privacy' | null
  const { lang, t } = useLanguage();
  const isRtl = lang === 'ar';

  const getSafeUrl = (url, fallback) => {
    if (!url || url.includes("[")) return fallback || "#";
    return url;
  };

  const waBookingMessage = isRtl
    ? "مرحبًا AURA BEAUTY، أود الاستفسار عن فساتين الزفاف وحجز موعد للزيارة."
    : "Hello AURA BEAUTY, I would like to inquire about wedding gowns and book an appointment to visit the boutique.";

  return (
    <>
      <footer className="magazine-footer" id="footer-section">
        <div className="container footer-container-inner">
          
          {/* 1. Location & Boutique Visiting */}
          <div className="footer-location-direct" id="location">
            <div className="footer-location-text-col">
              <h2 className="footer-loc-title">{t.footer.visitTitle}</h2>
              <p className="footer-loc-desc">
                {t.footer.visitDesc}
              </p>

              <div className="footer-loc-details">
                <div className="footer-detail-item">
                  <strong>{t.footer.cityLabel}</strong>
                  <span>{t.footer.cityValue}</span>
                </div>
                <div className="footer-detail-item">
                  <strong>{t.footer.visitPolicyLabel}</strong>
                  <span>{t.footer.visitPolicyValue}</span>
                </div>
                <div className="footer-detail-item">
                  <strong>{t.footer.emailLabel}</strong>
                  <span><a href={`mailto:${siteConfig.email}`} dir="ltr" style={{ color: '#552432', fontWeight: 600, display: 'inline-block' }}>{siteConfig.email}</a></span>
                </div>
                <div className="footer-detail-item footer-detail-services">
                  <strong>{t.footer.serviceNatureLabel}</strong>
                  <ul className="footer-service-checklist">
                    <li>
                      <span className="service-check-icon">✓</span>
                      <span>{t.footer.service1}</span>
                    </li>
                    <li>
                      <span className="service-check-icon">✓</span>
                      <span>{t.footer.service2}</span>
                    </li>
                    <li>
                      <span className="service-check-icon">✓</span>
                      <span>{t.footer.service3}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Left Column: Map Frame + Social Media Icons underneath */}
            <div className="footer-location-map-col">
              <a 
                href={siteConfig.mapUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-map-clickable-wrap"
                aria-label={t.footer.mapAria}
                title={t.footer.mapTitle}
              >
                <iframe 
                  title={t.footer.mapIframeTitle}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14840.485123985444!2d39.1868351!3d21.6033785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3d258b68aef25%3A0x6b8f04df1a415a77!2z2K3ZiiDYp9mE2YXYsdmI2KnYjCDYrNiv2Kkg2KfZhNiz2LnZiNiv2YrYqQ!5e0!3m2!1sar!2ssa!4v1700000000000!5m2!1sar!2ssa" 
                  width="100%" 
                  height="100%" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </a>

              {/* Social Media Icon Buttons directly under the Map */}
              <div className="footer-social-icons-row" id="social">
                {/* WhatsApp */}
                <a 
                  href={getWhatsAppUrl(waBookingMessage)} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-icon-circle btn-wa"
                  aria-label={t.footer.waAria}
                  title={t.footer.waTitle}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.45 0-2.88-.38-4.14-1.11l-.3-.17-3.12.82.83-3.04-.19-.31a8.21 8.21 0 0 1-1.26-4.43c0-4.54 3.7-8.24 8.24-8.24zm4.52 11.53c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.03-1.25-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.44.53.6.19 1.15.16 1.59.1.48-.07 1.47-.6 1.68-1.18.21-.59.21-1.09.15-1.18-.06-.1-.22-.16-.47-.28z"/>
                  </svg>
                </a>

                {/* Instagram */}
                <a 
                  href={getSafeUrl(siteConfig.instagram, "https://instagram.com")} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-icon-circle btn-ig"
                  aria-label={t.footer.igAria}
                  title={t.footer.igTitle}
                >
                  <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>

                {/* TikTok */}
                <a 
                  href={getSafeUrl(siteConfig.tiktok, "https://tiktok.com")} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-icon-circle btn-tt"
                  aria-label={t.footer.ttAria}
                  title={t.footer.ttTitle}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                  </svg>
                </a>

                {/* Email */}
                <a 
                  href={`mailto:${siteConfig.email}`} 
                  className="social-icon-circle btn-email"
                  aria-label={t.footer.emailAria}
                  title={t.footer.emailTitle}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* 2. Bottom Bar: Copyright, Legal Links, Address */}
          <div className="footer-bottom-credit">
            <p className="credit-copyright">© {new Date().getFullYear()} {siteConfig.brandName}. {t.footer.copyright}</p>
            
            <div className="footer-legal-links">
              <button 
                type="button" 
                className="footer-legal-btn" 
                onClick={() => setActiveModal('terms')}
              >
                {t.footer.terms}
              </button>
              <span className="footer-legal-sep">•</span>
              <button 
                type="button" 
                className="footer-legal-btn" 
                onClick={() => setActiveModal('privacy')}
              >
                {t.footer.privacy}
              </button>
            </div>

            <p className="credit-address">{t.footer.cityValue}</p>
          </div>

        </div>
      </footer>

      {/* Terms & Conditions Modal */}
      {activeModal === 'terms' && (
        <div className="modal-overlay" onClick={() => setActiveModal(null)} role="dialog" aria-modal="true">
          <div className="modal-container legal-modal-container" onClick={(e) => e.stopPropagation()}>
            <button 
              className="modal-close-btn" 
              onClick={() => setActiveModal(null)}
              aria-label={t.modal.closeAria}
            >
              ✕
            </button>
            <div className="legal-modal-content">
              <h2 className="legal-modal-title">{t.footer.termsTitle}</h2>
              <p className="legal-modal-lead">{t.footer.termsLead}</p>
              
              <div className="legal-modal-section">
                <h3>{t.footer.termsSec1Title}</h3>
                <p>{t.footer.termsSec1Body}</p>
              </div>

              <div className="legal-modal-section">
                <h3>{t.footer.termsSec2Title}</h3>
                <p>{t.footer.termsSec2Body}</p>
              </div>

              <div className="legal-modal-section">
                <h3>{t.footer.termsSec3Title}</h3>
                <p>{t.footer.termsSec3Body}</p>
              </div>

              <div className="legal-modal-section">
                <h3>{t.footer.termsSec4Title}</h3>
                <p>{t.footer.termsSec4Body}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Privacy Policy Modal */}
      {activeModal === 'privacy' && (
        <div className="modal-overlay" onClick={() => setActiveModal(null)} role="dialog" aria-modal="true">
          <div className="modal-container legal-modal-container" onClick={(e) => e.stopPropagation()}>
            <button 
              className="modal-close-btn" 
              onClick={() => setActiveModal(null)}
              aria-label={t.modal.closeAria}
            >
              ✕
            </button>
            <div className="legal-modal-content">
              <h2 className="legal-modal-title">{t.footer.privacyTitle}</h2>
              <p className="legal-modal-lead">{t.footer.privacyLead}</p>
              
              <div className="legal-modal-section">
                <h3>{t.footer.privSec1Title}</h3>
                <p>{t.footer.privSec1Body}</p>
              </div>

              <div className="legal-modal-section">
                <h3>{t.footer.privSec2Title}</h3>
                <p>{t.footer.privSec2Body}</p>
              </div>

              <div className="legal-modal-section">
                <h3>{t.footer.privSec3Title}</h3>
                <p>{t.footer.privSec3Body}</p>
              </div>

              <div className="legal-modal-section">
                <h3>{t.footer.privSec4Title}</h3>
                <p>{t.footer.privSec4Body}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
