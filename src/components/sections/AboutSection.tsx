import React from 'react';
import './AboutSection.css';

const AboutSection: React.FC = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-image">
          <div className="image-placeholder">
            {/* Placeholder for Infiniti image - Add your image to /public/images/infiniti.jpg */}
            <div style={{color: '#666', fontSize: '1.2rem', textAlign: 'center'}}>
              Infiniti Image<br/>Placeholder
            </div>
          </div>
        </div>
        <div className="about-content">
          <h2 className="about-title">BUILT BY CAR LOVERS, FOR CAR LOVERS</h2>
          <p className="about-text">
            The Wrench Collective is a community garage designed to give car enthusiasts and DIYers
            a clean and safe place to repair/maintain/modify their vehicles.
          </p>
          <p className="about-text">
            The Wrench Collective welcomes everyone who lives and breathes cars. This is where gearheads,
            DIYers, and builders come together to learn, wrench, and level up their skills one project at a time.
          </p>
          <p className="about-text">
            <strong>We offer the following services:</strong>
          </p>
          <ul className="services-list">
            <li>Oil & Coolant Disposal</li>
            <li>Tool Rentals - COMING SOON</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
