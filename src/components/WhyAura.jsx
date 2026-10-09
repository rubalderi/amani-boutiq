import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function WhyAura() {
  const { t } = useLanguage();

  const articles = [
    {
      num: "01",
      title: t.whyAura.item1Title,
      body: t.whyAura.item1Desc
    },
    {
      num: "02",
      title: t.whyAura.item2Title,
      body: t.whyAura.item2Desc
    },
    {
      num: "03",
      title: t.whyAura.item3Title,
      body: t.whyAura.item3Desc
    }
  ];

  return (
    <section className="magazine-features-section" id="about">
      <div className="container">
        
        <div className="features-header">
          <h2 className="features-title">
            {t.whyAura.title}
          </h2>
          <p className="features-desc">
            {t.whyAura.desc}
          </p>
        </div>

        <div className="magazine-columns-grid">
          {articles.map((item, index) => (
            <article key={index} className="feature-card">
              <div className="card-top-num-row">
                <div className="card-num-wrap">
                  <span className="card-number">{item.num}</span>
                  <span className="card-num-line" aria-hidden="true"></span>
                </div>
              </div>
              <h3 className="feature-card-title">{item.title}</h3>
              <p className="feature-card-body">{item.body}</p>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
