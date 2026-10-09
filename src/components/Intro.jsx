import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Intro() {
  const { t } = useLanguage();

  const storyCards = [
    {
      num: t.intro.card1Num,
      title: t.intro.card1Title,
      text: t.intro.card1Text
    },
    {
      num: t.intro.card2Num,
      isFeatured: true,
      title: t.intro.card2Title,
      text: t.intro.card2Text
    },
    {
      num: t.intro.card3Num,
      title: t.intro.card3Title,
      text: t.intro.card3Text
    }
  ];

  return (
    <section className="story-cards-section" id="intro">
      <div className="container">
        
        {/* Compact, Crisp Header */}
        <div className="story-compact-header">
          <span className="story-badge-pill">{t.intro.badge}</span>
          <h2 className="story-compact-title">
            {t.intro.title}
          </h2>
        </div>

        {/* 3 Sleek Luxury Cards in 1 Row */}
        <div className="story-compact-grid">
          {storyCards.map((card, idx) => (
            <div 
              key={idx} 
              className={`story-compact-card ${card.isFeatured ? 'card-aura-featured' : ''}`}
            >
              <div className="story-card-top-row">
                <div className="story-card-num-wrap">
                  <span className="story-card-number">{card.num}</span>
                  <span className="story-card-num-line" aria-hidden="true"></span>
                </div>
              </div>
              <h3 className="story-card-title">{card.title}</h3>
              <p className="story-card-body">{card.text}</p>
            </div>
          ))}
        </div>

        {/* Delicate One-Line Closing Quote */}
        <div className="story-compact-footer-quote">
          <span className="quote-sparkle">✦</span>
          <p>
            "{t.intro.closingQuote}"
          </p>
          <span className="quote-sparkle">✦</span>
        </div>

      </div>
    </section>
  );
}
