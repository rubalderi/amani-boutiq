import React from 'react';
import { siteConfig } from '../data/siteConfig';
import { useLanguage } from '../context/LanguageContext';

export default function QuoteSection() {
  const { t } = useLanguage();

  const pillars = [
    {
      num: "01",
      title: t.quote.pillar1Title,
      desc: t.quote.pillar1Desc
    },
    {
      num: "02",
      title: t.quote.pillar2Title,
      desc: t.quote.pillar2Desc
    },
    {
      num: "03",
      title: t.quote.pillar3Title,
      desc: t.quote.pillar3Desc
    }
  ];

  return (
    <section className="editorial-quote-spread" id="bridal-essence">
      <div className="container">
        
        {/* Open, Unboxed Header */}
        <div className="quote-spread-header">
          <span className="quote-badge-tag">{t.quote.badge}</span>
          <h2 className="quote-spread-headline">
            {t.quote.headline}
          </h2>
          <p className="quote-spread-sub">
            {t.quote.sub}
          </p>
          <p className="quote-lead-paragraph">
            {t.quote.lead}
          </p>
        </div>

        {/* 3 Open Pillars Grid - Spread out and spacious */}
        <div className="quote-pillars-spread">
          {pillars.map((item, idx) => (
            <div key={idx} className="quote-pillar-spread-card">
              <div className="card-top-num-row">
                <div className="card-num-wrap">
                  <span className="card-number">{item.num}</span>
                  <span className="card-num-line" aria-hidden="true"></span>
                </div>
              </div>
              <h3 className="pillar-card-title">{item.title}</h3>
              <p className="pillar-card-desc">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
