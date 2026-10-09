import React, { useRef, useState, useEffect } from 'react';
import { dressesData } from '../data/dresses';
import DressCard from './DressCard';
import { useLanguage } from '../context/LanguageContext';

export default function DressGallery({ onSelectDress }) {
  const { lang, t } = useLanguage();
  const trackRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const isRtl = lang === 'ar';

  const handleScroll = (direction) => {
    if (!trackRef.current) return;
    const cardEl = trackRef.current.querySelector('.look-card');
    const scrollAmount = cardEl ? cardEl.offsetWidth + 24 : 340;

    if (direction === 'next') {
      trackRef.current.scrollBy({ left: isRtl ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    } else {
      trackRef.current.scrollBy({ left: isRtl ? scrollAmount : -scrollAmount, behavior: 'smooth' });
    }
  };

  // Autoplay Effect (Living, moving gallery that pauses on hover/touch)
  useEffect(() => {
    let isPaused = false;
    const interval = setInterval(() => {
      if (isPaused || !trackRef.current) return;
      const track = trackRef.current;
      const cardEl = track.querySelector('.look-card');
      const scrollAmount = cardEl ? cardEl.offsetWidth + 24 : 340;
      
      const { scrollLeft, scrollWidth, clientWidth } = track;
      if (isRtl) {
        if (Math.abs(scrollLeft) + clientWidth >= scrollWidth - 15) {
          track.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          track.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        }
      } else {
        if (scrollLeft + clientWidth >= scrollWidth - 15) {
          track.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          track.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
      }
    }, 4200);

    const onEnter = () => { isPaused = true; };
    const onLeave = () => { isPaused = false; };

    const el = trackRef.current;
    if (el) {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
      el.addEventListener('touchstart', onEnter, { passive: true });
      el.addEventListener('touchend', onLeave, { passive: true });
    }

    return () => {
      clearInterval(interval);
      if (el) {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
        el.removeEventListener('touchstart', onEnter);
        el.removeEventListener('touchend', onLeave);
      }
    };
  }, [isRtl]);

  const handleScrollEvent = () => {
    if (!trackRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = trackRef.current;
    const maxScroll = scrollWidth - clientWidth;
    if (maxScroll > 0) {
      const current = Math.abs(scrollLeft);
      setScrollProgress(Math.min(1, Math.max(0, current / maxScroll)));
    }
  };

  const scrollToDress = (index) => {
    if (!trackRef.current) return;
    const cards = trackRef.current.querySelectorAll('.look-card');
    if (cards[index]) {
      cards[index].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  };

  return (
    <section className="lookbook-section" id="collection">
      <div className="container">
        
        <div className="lookbook-header">
          <h2 className="lookbook-title">
            {t.gallery.title}
          </h2>
          <p className="lookbook-subtitle">
            {t.gallery.subtitle}
          </p>
        </div>

        {/* Carousel Container with Left & Right Arrows */}
        <div className="gallery-carousel-wrapper">
          
          {/* Navigation Arrow Previous */}
          <button 
            type="button" 
            className="gallery-nav-btn gallery-nav-prev"
            onClick={() => handleScroll('prev')}
            aria-label={t.gallery.prevBtnAria}
            title={t.gallery.prevBtnTitle}
          >
            <span aria-hidden="true">{isRtl ? '›' : '‹'}</span>
          </button>

          {/* Horizontal Scrollable Cards Track */}
          <div 
            className="gallery-slider-track" 
            ref={trackRef}
            onScroll={handleScrollEvent}
          >
            {dressesData.map((dress, index) => (
              <div key={dress.id} className="gallery-slide-item">
                <DressCard 
                  dress={dress} 
                  index={index}
                  onSelect={onSelectDress} 
                />
              </div>
            ))}
          </div>

          {/* Navigation Arrow Next */}
          <button 
            type="button" 
            className="gallery-nav-btn gallery-nav-next"
            onClick={() => handleScroll('next')}
            aria-label={t.gallery.nextBtnAria}
            title={t.gallery.nextBtnTitle}
          >
            <span aria-hidden="true">{isRtl ? '‹' : '›'}</span>
          </button>

        </div>

        {/* Carousel Dots Indicator */}
        <div className="gallery-carousel-dots">
          {dressesData.map((dress, i) => (
            <button
              key={dress.id}
              type="button"
              className="gallery-carousel-dot"
              onClick={() => scrollToDress(i)}
              aria-label={`${dress.name} - ${isRtl ? dress.arabicName : dress.englishName}`}
              title={`${dress.name} - ${isRtl ? dress.arabicName : dress.englishName}`}
            >
              <span className="dot-label">{dress.name}</span>
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}
