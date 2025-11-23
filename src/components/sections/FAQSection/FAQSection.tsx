import React, { useState } from 'react';
import './FAQSection.css';

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "How does renting a car lift work?",
    answer: "Renting a car lift at The Wrench Collective is simple. Book online or call us to reserve your time slot. We offer hourly and daily rentals of our professional 2-post lifts and Quick Jack systems. All necessary tools are included free with your rental."
  },
  {
    question: "Is it safe to use a car lift?",
    answer: "Yes! Our professional-grade car lifts are regularly inspected and maintained to the highest safety standards. We provide a safety orientation for first-time users and our staff is always available to assist. Our lifts are much safer than traditional jack stands for DIY repairs."
  },
  {
    question: "What tools are included with the rental?",
    answer: "All bay rentals include free access to our complete tool collection: torque wrenches, impact guns, oil drain pans, jack stands, specialty tools, and more. We have everything you need for most automotive repairs and maintenance."
  },
  {
    question: "Can beginners use the car lift?",
    answer: "Absolutely! The Wrench Collective welcomes DIYers of all skill levels. We provide safety training and guidance for first-time lift users. Our community-driven environment means experienced members are often around to offer advice and assistance."
  },
  {
    question: "What areas do you serve?",
    answer: "We're located in Nashville, TN and serve the greater Nashville area including Antioch, Brentwood, Franklin, Smyrna, and all of Davidson County. We're Middle Tennessee's premier DIY auto garage facility."
  },
  {
    question: "Do you offer memberships?",
    answer: "Yes! We offer Pit Crew memberships with exclusive perks including priority booking, discounted hourly rates, free ALLDATA access, and invitations to exclusive car care events. Visit our membership page for full details on all tiers."
  }
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="container">
        <h2 className="faq-title">Frequently Asked Questions</h2>
        <p className="faq-subtitle">
          Everything you need to know about renting a car lift in Nashville
        </p>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${openIndex === index ? 'active' : ''}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">
                <h3>{faq.question}</h3>
                <span className="faq-icon">{openIndex === index ? '−' : '+'}</span>
              </div>
              {openIndex === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
