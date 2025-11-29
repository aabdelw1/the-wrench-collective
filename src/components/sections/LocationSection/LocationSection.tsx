import React from 'react';
import './LocationSection.css';

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

const LocationSection: React.FC = () => {
  return (
    <section className="location-section">
      <div className="location-container">
        <div className="location-map">
          {/* Embedded Google Maps */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3222.195!2d-86.7494568!3d36.1253609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8864659d81ff3e6d%3A0x56cb26d4018100c5!2sThe%20Wrench%20Collective!5e0!3m2!1sen!2sus!4v1234567890"
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
            <p>
              307 Glenrose Ave, Nashville, Tennessee 37210
            </p>
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
  );
};

export default LocationSection;
