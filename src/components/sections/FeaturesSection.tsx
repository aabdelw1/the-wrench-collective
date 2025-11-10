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
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M16 8v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2z"></path>
              <path d="M9 22V12h6v10"></path>
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
