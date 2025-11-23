import React from 'react';
import './HomePage.css';
import SEO from '../../components/SEO/SEO';
import HeroSection from '../../components/sections/HeroSection/HeroSection';
import FeaturesSection from '../../components/sections/FeaturesSection/FeaturesSection';
import AboutSection from '../../components/sections/AboutSection/AboutSection';
import PricingSection from '../../components/sections/PricingSection/PricingSection';
import FAQSection from '../../components/sections/FAQSection/FAQSection';
import LocationSection from '../../components/sections/LocationSection/LocationSection';
import { localBusinessSchema, organizationSchema, faqSchema } from '../../utils/structuredData';

const HomePage: React.FC = () => {
  // Combine multiple schemas into one structured data object
  const combinedSchema = {
    "@graph": [
      localBusinessSchema,
      organizationSchema,
      faqSchema
    ]
  };

  return (
    <div className="homepage">
      <SEO
        title="Car Lift Rental Nashville | DIY Auto Garage | The Wrench Collective"
        description="Rent a car lift or garage bay in Nashville. Safe, clean, fully equipped DIY auto shop with free tools. Book online at The Wrench Collective."
        keywords="car lift rental nashville, diy auto shop nashville, rent a car lift nashville, auto bay rental nashville, diy garage nashville, self service auto repair nashville, nashville car lift, mechanic garage rental nashville, rent a garage bay, vehicle lift rental, automotive workspace rental"
        ogTitle="Car Lift Rental Nashville | DIY Auto Garage | The Wrench Collective"
        ogDescription="Rent a car lift or garage bay in Nashville. Safe, clean, fully equipped DIY auto shop with free tools at The Wrench Collective."
        ogImage="https://www.thewrenchcollective.com/images/hero-wrench.jpg"
        canonicalUrl="https://www.thewrenchcollective.com/"
        structuredData={combinedSchema}
      />
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <PricingSection />
      <FAQSection />
      <LocationSection />
    </div>
  );
};

export default HomePage;