import React from "react";
import "./AboutPage.css";

const AboutPage: React.FC = () => {
  return (
    <div className="page">
      <main className="page-content">
        <section className="about-hero">
          <div className="about-image">
            {/* Replace with your real image path */}
            <img
              src="/images/about-garage.jpg"
              alt="Members working under a car at The Wrench Collective"
            />
          </div>

          <div className="about-copy">
            <h1>Building community through automotive passion</h1>

            <p>
              The Wrench Collective was born from a lifelong passion for cars
              and hands-on craftsmanship. What began as a personal search for a
              space to work on my own cars led to the discovery of a large,
              open warehouse — a blank canvas filled with potential. Rather than
              keeping it to myself, I envisioned something greater: a shared
              space where car enthusiasts, builders, and DIYers could come
              together to work, learn, and connect.
            </p>

            <p>
              Today, The Wrench Collective stands as Nashville's first community
              garage — a place built by car lovers, for car lovers. It's more
              than just a workspace; it's a community driven by passion,
              creativity, and the joy of turning wrenches.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AboutPage;
