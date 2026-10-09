import React from 'react';
import { siteConfig } from '../data/siteConfig';

export default function Location() {
  return (
    <section className="magazine-location-section" id="location">
      <div className="container">
        <div className="location-editorial-grid">
          
          {/* Location Details */}
          <div className="loc-article-box">
            <h2 className="loc-article-title">زورينا في حي المروة</h2>
            <p className="loc-article-desc">
              يسعدنا استقبالكِ في مقر البوتيك بمدينة جدة للاطلاع على كامل التشكيلة وتجربة فستان أحلامكِ في أجواء خاصة وهادئة.
            </p>

            <div className="loc-meta-table">
              <div className="loc-meta-row">
                <strong>المدينة:</strong>
                <span>{siteConfig.city}</span>
              </div>
              <div className="loc-meta-row">
                <strong>العنوان:</strong>
                <span>{siteConfig.fullAddress}</span>
              </div>
              <div className="loc-meta-row">
                <strong>الزيارة:</strong>
                <span>بحجز موعد مسبق لضمان الخصوصية والراحة التامة للعروس.</span>
              </div>
              <div className="loc-meta-row">
                <strong>الخدمة:</strong>
                <span>بيع وتأجير، تجربة قياس، واستلام شخصي فوري (بدون شحن).</span>
              </div>
            </div>

            <a 
              href={siteConfig.mapUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-magazine-outline"
            >
              عرض الموقع على الخريطة ↗
            </a>
          </div>

          {/* Map Frame */}
          <div className="loc-map-frame">
            <iframe 
              title="موقع بوتيك AURA BEAUTY في جدة حي المروة"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14840.485123985444!2d39.1868351!3d21.6033785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3d258b68aef25%3A0x6b8f04df1a415a77!2z2K3ZiiDYp9mE2YXYsdmI2KnYjCDYrNiv2Kkg2KfZhNiz2LnZiNiv2YrYqQ!5e0!3m2!1sar!2ssa!4v1700000000000!5m2!1sar!2ssa" 
              width="100%" 
              height="100%" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
}
