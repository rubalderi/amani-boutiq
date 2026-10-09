import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function FAQSection() {
  const [showAll, setShowAll] = useState(false);
  const { t } = useLanguage();

  const faqs = t.faq.items;
  // Show only 2 questions initially, or all if showAll is true
  const displayedFaqs = showAll ? faqs : faqs.slice(0, 2);

  return (
    <section className="faq-section" id="faq">
      <div className="container">
        
        {/* Open, Spread Header */}
        <div className="faq-open-header">
          <h2 className="faq-main-title">{t.faq.title}</h2>
          <p className="faq-subtitle">
            {t.faq.subtitle}
          </p>
        </div>

        {/* Spread FAQ Cards with Answers Visible Directly */}
        <div className="faq-cards-spread">
          {displayedFaqs.map((item, idx) => {
            const numStr = String(idx + 1).padStart(2, '0');
            return (
              <div key={idx} className="faq-card-open-item">
                <div className="card-top-num-row">
                  <div className="card-num-wrap">
                    <span className="card-number">{numStr}</span>
                    <span className="card-num-line" aria-hidden="true"></span>
                  </div>
                </div>
                <div className="faq-q-row">
                  <h3 className="faq-q-heading">{item.q}</h3>
                </div>
                <div className="faq-a-content">
                  <p>{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Toggle Button to Show More / Fewer Questions */}
        <div className="faq-toggle-wrap">
          <button 
            type="button" 
            className="faq-toggle-btn" 
            onClick={() => setShowAll(!showAll)}
          >
            <span>{showAll ? t.faq.showLess : t.faq.showMore}</span>
            <span className="faq-toggle-arrow">{showAll ? '↑' : '↓'}</span>
          </button>
        </div>

      </div>
    </section>
  );
}
