import React from 'react';
import { siteConfig, getWhatsAppUrl } from '../data/siteConfig';

export default function SocialLinks() {
  const getSafeUrl = (url, fallback) => {
    if (!url || url.includes("[")) return fallback || "#";
    return url;
  };

  return (
    <section className="magazine-social-spread" id="social">
      <div className="container">
        
        {/* Header */}
        <div className="social-spread-header">
          <h2 className="social-spread-title">
            تواصلي معنا عبر منصاتنا
          </h2>
          <p className="social-spread-sub">
            اضغطي على الأيقونة للانتقال المباشر إلى المحادثة أو الحساب
          </p>
        </div>

        {/* Circular Social Icons Row */}
        <div className="social-circles-row">
          
          {/* WhatsApp Circular Icon */}
          <a 
            href={getWhatsAppUrl("مرحبًا AURA BEAUTY، أود الاستفسار عن فساتين الزفاف وحجز موعد للزيارة.")} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-circle-item"
            title="تواصل مباشر عبر واتساب"
          >
            <div className="social-circle-btn whatsapp-circle">
              <svg width="34" height="34" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.45 0-2.88-.38-4.14-1.11l-.3-.17-3.12.82.83-3.04-.19-.31a8.21 8.21 0 0 1-1.26-4.43c0-4.54 3.7-8.24 8.24-8.24zm4.52 11.53c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.03-1.25-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.44.53.6.19 1.15.16 1.59.1.48-.07 1.47-.6 1.68-1.18.21-.59.21-1.09.15-1.18-.06-.1-.22-.16-.47-.28z"/>
              </svg>
            </div>
            <span className="social-circle-label">واتساب</span>
          </a>

          {/* Instagram Circular Icon */}
          <a 
            href={getSafeUrl(siteConfig.instagram, "https://instagram.com")} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-circle-item"
            title="حساب البوتيك على انستقرام"
          >
            <div className="social-circle-btn instagram-circle">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </div>
            <span className="social-circle-label">انستقرام</span>
          </a>

          {/* TikTok Circular Icon */}
          <a 
            href={getSafeUrl(siteConfig.tiktok, "https://tiktok.com")} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-circle-item"
            title="حساب البوتيك على تيك توك"
          >
            <div className="social-circle-btn tiktok-circle">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.86.12V9.42a6.34 6.34 0 0 0-.86-.06 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V9.28a8.28 8.28 0 0 0 3.77.92V6.69z"/>
              </svg>
            </div>
            <span className="social-circle-label">تيك توك</span>
          </a>

        </div>

      </div>
    </section>
  );
}
