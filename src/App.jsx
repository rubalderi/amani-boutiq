import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Intro from './components/Intro';
import DressGallery from './components/DressGallery';
import DressModal from './components/DressModal';
import QuoteSection from './components/QuoteSection';
import WhyAura from './components/WhyAura';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import { LanguageProvider } from './context/LanguageContext';

export default function App() {
  const [selectedDress, setSelectedDress] = useState(null);
  const [selectedImgIndex, setSelectedImgIndex] = useState(0);

  const handleSelectDress = (dress, imgIndex = 0) => {
    setSelectedDress(dress);
    setSelectedImgIndex(imgIndex || 0);
  };

  return (
    <LanguageProvider>
    <div className="app-layout">
      {/* Top Navbar */}
      <Navbar />

      <main className="main-palace-sections">
        {/* Hero / Brand Headline */}
        <Hero />

        {/* Seamless Flow Container for subsequent sections */}
        <div className="remaining-sections-flow">
          {/* Intro / Brand Statement */}
          <Intro />

          {/* Dresses Collection Showcase */}
          <DressGallery onSelectDress={handleSelectDress} />

          {/* Editorial Quote Section */}
          <QuoteSection />

          {/* Why Aura Beauty / Features */}
          <WhyAura />

          {/* Frequently Asked Questions (FAQ) */}
          <FAQSection />
        </div>
      </main>

      {/* Footer (Incorporating Location & Social Media in matching Dusty Rose) */}
      <Footer />

      {/* Dress Details Modal */}
      {selectedDress && (
        <DressModal 
          dress={selectedDress}
          initialIndex={selectedImgIndex}
          onClose={() => setSelectedDress(null)} 
        />
      )}
    </div>
    </LanguageProvider>
  );
}
