import React from "react";
import "./BookingPage.css";
import LocationSection from "../../components/sections/LocationSection/LocationSection";

type SimpleService = {
  name: string;
  note: string;
  price: string;
  bookingUrl: string;
};

const simpleServices: SimpleService[] = [
  {
    name: "Oil Change Special - 1 HOUR ONLY",
    note: "CLICK HERE TO BOOK",
    price: "$45",
    bookingUrl: "https://book.squareup.com/appointments/b4uvfmnrs13wm8/location/L7722XRFA5036/services/4R6CT5QJ4ONGJAVFZQZLNLON",
  },
  {
    name: "2 Post Lift Rental",
    note: "CLICK HERE TO BOOK",
    price: "$70.00+",
    bookingUrl: "https://book.squareup.com/appointments/b4uvfmnrs13wm8/location/L7722XRFA5036/services/OODHNYDNQFPSTI5IYFQG2NOD",
  },
  {
    name: "Quick Jacks Rental",
    note: "CLICK HERE TO BOOK",
    price: "$50.00+",
    bookingUrl: "https://book.squareup.com/appointments/b4uvfmnrs13wm8/location/L7722XRFA5036/services/UHJ4U4B6LY4NHVAY33AUGL3K",
  },
];

type MenuItem = {
  title: string;
  rate: string;
  unit: string;
  description: string;
  bookingUrl: string;
};

const menuItems: MenuItem[] = [
  {
    title: "2-Post Lift — Hourly",
    rate: "$35",
    unit: "/hr",
    description: "Perfect for all services requiring full under-car access.",
    bookingUrl: "https://book.squareup.com/appointments/b4uvfmnrs13wm8/location/L7722XRFA5036/services/OODHNYDNQFPSTI5IYFQG2NOD",
  },
  {
    title: "Quick Jacks — Hourly",
    rate: "$25",
    unit: "/hr",
    description:
      "Great for quick jobs, such as brakes, suspension, and tire rotations.",
    bookingUrl: "https://book.squareup.com/appointments/b4uvfmnrs13wm8/location/L7722XRFA5036/services/UHJ4U4B6LY4NHVAY33AUGL3K",
  },
];

const BookingPage: React.FC = () => {
  return (
    <div className="page">
      <main className="page-content">

        {/* HERO IMAGE */}
        <section className="book-hero">
          {/* Replace with your real hero image path */}
          <img
            src="/images/hero-wrench.jpg"
            alt="The Wrench Collective banner"
          />
        </section>

        {/* BUFFER MESSAGE */}
        <section className="book-buffer">
          <p>*Add buffer time for clean-up or delays*</p>
        </section>

        {/* SIMPLE LIST OF OFFERINGS */}
        <section className="book-simple-list">
          <ul>
            {simpleServices.map((service) => (
              <li key={service.name} className="book-simple-row">
                <div className="book-simple-text">
                  <span className="book-simple-name">{service.name}</span>
                  <span
                    className="book-simple-note"
                    onClick={() => window.open(service.bookingUrl, '_blank')}
                  >
                    {service.note}
                  </span>
                </div>
                <span className="book-simple-price">{service.price}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* SERVICE MENU CARDS */}
        <section className="book-menu">
          <div className="book-menu-header">
            <h2>Service Menu</h2>
            <span className="book-menu-pill">Simple hourly rates</span>
          </div>

          <div className="book-menu-grid">
            {menuItems.map((item) => (
              <article
                key={item.title}
                className="book-menu-card"
                onClick={() => window.open(item.bookingUrl, '_blank')}
                style={{ cursor: 'pointer' }}
              >
                <h3>{item.title}</h3>
                <div className="book-menu-rate">
                  <span className="book-menu-rate-main">{item.rate}</span>
                  <span className="book-menu-rate-unit">{item.unit}</span>
                </div>
                <p>{item.description}</p>
              </article>
            ))}
          </div>

          <div className="book-menu-note">
            Heads up: 2-Hour Minimum on all Lift Rentals.
          </div>
        </section>

        {/* LOCATION & HOURS (reuse existing section) */}
        <LocationSection />
      </main>
    </div>
  );
};

export default BookingPage;
