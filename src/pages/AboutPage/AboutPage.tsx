import React from "react";
import "./AboutPage.css";
import SEO from "../../components/SEO/SEO";
import yamanImage from "../../assets/images/yaman.JPG";

const AboutPage: React.FC = () => {
  return (
    <div className="page">
      <SEO
        title="About Us | Nashville's First DIY Community Garage | The Wrench Collective"
        description="Learn about The Wrench Collective - Nashville's premier community garage built by car lovers, for car lovers. Safe DIY automotive workspace with professional lifts and tools."
        keywords="nashville community garage, diy auto garage nashville, car enthusiast community nashville, automotive workspace nashville"
        ogTitle="About The Wrench Collective | Nashville DIY Auto Garage"
        ogDescription="Nashville's first community garage where car enthusiasts come together to work, learn, and connect."
        canonicalUrl="https://www.thewrenchcollective.com/about"
      />
      <main className="page-content">
        <section className="about-hero">
          <div className="about-image">
            <img
              src={yamanImage}
              alt="DIY car enthusiasts working under a lifted vehicle at The Wrench Collective Nashville auto garage"
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
