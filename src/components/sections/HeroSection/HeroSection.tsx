import React from 'react';
import './HeroSection.css';
import warehouseImage from '../../../assets/images/warehouse.JPG';

const HeroSection: React.FC = () => {
  const handleBooking = () => {
    window.open('https://book.squareup.com/appointments/b4uvfmnrs13wm8/location/L7722XRFA5036/services?buttonTextColor=ffffff&color=1e1e1e&locale=en&referrer=so', '_blank');
  };

  return (
    <section className="hero-section">
      <img
        src={warehouseImage}
        alt="Professional car lift rental Nashville - DIY auto garage workspace at The Wrench Collective"
        className="hero-background-image"
      />
      <div className="hero-overlay">
        <h1 className="hero-title">Need to work on your car? Look no further.</h1>
        <button className="cta-button" onClick={handleBooking}>BOOK NOW</button>
      </div>
    </section>
  );
};

export default HeroSection;
