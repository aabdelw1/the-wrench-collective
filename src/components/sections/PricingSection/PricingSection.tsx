import React from 'react';
import './PricingSection.css';

const PricingSection: React.FC = () => {
  const handleTwoPostLiftBooking = () => {
    window.open('https://book.squareup.com/appointments/b4uvfmnrs13wm8/location/L7722XRFA5036/services/OODHNYDNQFPSTI5IYFQG2NOD', '_blank');
  };

  const handleQuickJackBooking = () => {
    window.open('https://book.squareup.com/appointments/b4uvfmnrs13wm8/location/L7722XRFA5036/services/UHJ4U4B6LY4NHVAY33AUGL3K', '_blank');
  };

  const handleOilChangeBooking = () => {
    window.open('https://book.squareup.com/appointments/b4uvfmnrs13wm8/location/L7722XRFA5036/services/4R6CT5QJ4ONGJAVFZQZLNLON', '_blank');
  };

  return (
    <section className="pricing-section">
      <h2 className="pricing-title">JOIN THE COLLECTIVE</h2>
      <div className="pricing-container">
        <div className="pricing-card">
          <h3 className="service-name">2 POST LIFT BAY RENTAL</h3>
          <p className="service-description">
            Brand new 10,000 lbs capacity lift. Perfect for all services requiring full under-car access.
          </p>
          <h4 className="pricing-rate">$35/HR</h4>
          <p className="pricing-minimum">(2 HOUR MINIMUM)</p>
          <button className="pricing-button" onClick={handleTwoPostLiftBooking}>BOOK NOW</button>
        </div>

        <div className="pricing-card">
          <h3 className="service-name">QUICK JACK BAY RENTAL</h3>
          <p className="service-description">
            Great for quick jobs, such as brakes and suspension, or just an open space to work.
          </p>
          <h4 className="pricing-rate">$25/HR</h4>
          <p className="pricing-minimum">(2 HOUR MINIMUM)</p>
          <button className="pricing-button" onClick={handleQuickJackBooking}>BOOK NOW</button>
        </div>

        <div className="pricing-card">
          <h3 className="service-name">OIL CHANGE SPECIAL</h3>
          <p className="service-description">
            1 hour time slot to raise your car and change your oil. Oil catch cans and oil disposal included.
          </p>
          <h4 className="pricing-rate">$45/VISIT</h4>
          <p className="pricing-minimum">(1 HOUR ONLY)</p>
          <button className="pricing-button" onClick={handleOilChangeBooking}>BOOK NOW</button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
