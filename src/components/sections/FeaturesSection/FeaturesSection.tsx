import React from 'react';
import './FeaturesSection.css';

const FeaturesSection: React.FC = () => {
  return (
    <section className="features-section">
      <div className="features-container">
        <div className="feature-card">
          <div className="feature-icon">
            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
            </svg>
          </div>
          <h3 className="feature-title">WORK BAY RENTAL</h3>
          <p className="feature-description">Professional lifts and workspace ready when you are.</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">
            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
          </div>
          <h3 className="feature-title">COMMUNITY DRIVEN</h3>
          <p className="feature-description">Learn, share, and connect with other enthusiasts.</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">
            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 11a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2"></path>
              <path d="M6 10h12l1.5-4.5A2 2 0 0 0 17.5 3h-11A2 2 0 0 0 4.5 5.5z"></path>
              <circle cx="7" cy="17" r="2"></circle>
              <circle cx="17" cy="17" r="2"></circle>
            </svg>
          </div>
          <h3 className="feature-title">AFFORDABLE ACCESS</h3>
          <p className="feature-description">All the benefits of a shop without the overhead.</p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
