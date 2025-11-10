import React from 'react';
import './HomePage.css';

type HoursRow = {
  day: string;
  open?: string;
  close?: string;
  closed?: boolean;
};

const weeklyHours: HoursRow[] = [
  { day: "Monday", open: "12:00 pm", close: "7:00 pm" },
  { day: "Tuesday", open: "12:00 pm", close: "7:00 pm" },
  { day: "Wednesday", open: "12:00 pm", close: "7:00 pm" },
  { day: "Thursday", open: "12:00 pm", close: "7:00 pm" },
  { day: "Friday", closed: true },
  { day: "Saturday", open: "10:00 am", close: "7:00 pm" },
  { day: "Sunday", open: "10:00 am", close: "7:00 pm" },
];

const HomePage: React.FC = () => {
  return (
    <div className="homepage">
      {/* Hero Section with Warehouse Image */}
      <section className="hero-section">
        <div className="hero-overlay">
          <h1 className="hero-title">Need to work on your car? Look no further.</h1>
          <button className="cta-button">BOOK NOW</button>
        </div>
      </section>

      {/* Three Feature Cards Section */}
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

      {/* About Section with Infiniti Image */}
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

      {/* Pricing Section */}
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
            <button className="pricing-button">BOOK NOW</button>
          </div>

          <div className="pricing-card">
            <h3 className="service-name">QUICK JACK BAY RENTAL</h3>
            <p className="service-description">
              Great for quick jobs, such as brakes and suspension, or just an open space to work.
            </p>
            <h4 className="pricing-rate">$25/HR</h4>
            <p className="pricing-minimum">(2 HOUR MINIMUM)</p>
            <button className="pricing-button">BOOK NOW</button>
          </div>

          <div className="pricing-card">
            <h3 className="service-name">OIL CHANGE SPECIAL</h3>
            <p className="service-description">
              1 hour time slot to raise your car and change your oil. Oil catch cans and oil disposal included.
            </p>
            <h4 className="pricing-rate">$45/VISIT</h4>
            <p className="pricing-minimum">(1 HOUR ONLY)</p>
            <button className="pricing-button">BOOK NOW</button>
          </div>
        </div>
      </section>

      {/* Location & Hours Section */}
      <section className="location-section">
        <div className="location-container">
          <div className="location-map">
            {/* Embedded Google Maps */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3222.2!2d-86.7!3d36.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDA2JzAwLjAiTiA4NsKwNDInMDAuMCJX!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="The Wrench Collective Location"
            ></iframe>
          </div>

          <div className="location-content">
            <div className="location-details">
              <h2>Location & Hours</h2>
              <p className="location-name">The Wrench Collective</p>
              <p>307 Glenrose Ave</p>
              <p>Nashville, Tennessee 37210</p>
              <a
                className="location-link"
                href="https://www.google.com/maps/search/?api=1&query=307+Glenrose+Ave,+Nashville,+TN+37210"
                target="_blank"
                rel="noreferrer"
              >
                Get directions →
              </a>
            </div>

            <dl className="hours-list">
              {weeklyHours.map((row) => (
                <div key={row.day} className="hours-row">
                  <dt>{row.day}</dt>
                  <dd>
                    {row.closed
                      ? "Closed"
                      : `${row.open ?? ""} - ${row.close ?? ""}`}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;