import React from 'react';
import './HomePage.css';
import HeroSection from './sections/HeroSection';
import FeaturesSection from './sections/FeaturesSection';
import AboutSection from './sections/AboutSection';
import PricingSection from './sections/PricingSection';
import LocationSection from './sections/LocationSection';

const HomePage: React.FC = () => {
  return (
    <div className="homepage">
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <PricingSection />
      <LocationSection />
    </div>
  );
};

export default HomePage;