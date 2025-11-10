import React from 'react';
import './HeroSection.css';

const HeroSection: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="hero-overlay">
        <h1 className="hero-title">Need to work on your car? Look no further.</h1>
        <button className="cta-button">BOOK NOW</button>
      </div>
    </section>
  );
};

export default HeroSection;
