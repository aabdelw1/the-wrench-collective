import React from 'react';
import './HomePage.css';
import HeroSection from '../../components/sections/HeroSection/HeroSection';
import FeaturesSection from '../../components/sections/FeaturesSection/FeaturesSection';
import AboutSection from '../../components/sections/AboutSection/AboutSection';
import PricingSection from '../../components/sections/PricingSection/PricingSection';
import LocationSection from '../../components/sections/LocationSection/LocationSection';

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