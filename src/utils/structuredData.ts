// Structured Data (Schema.org) for The Wrench Collective

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "AutomotiveBusiness",
  "name": "The Wrench Collective",
  "image": "https://www.thewrenchcollective.com/images/hero-wrench.jpg",
  "description": "Professional DIY automotive workspace rental in Nashville, TN. Rent car lifts, work bays, and tools by the hour. Safe, clean, fully equipped auto garage.",
  "url": "https://www.thewrenchcollective.com",
  "telephone": "+1-615-609-4787", 
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "307 Glenrose Ave",
    "addressLocality": "Nashville",
    "addressRegion": "TN",
    "postalCode": "37210",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 36.1627,
    "longitude": -86.7816
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Monday",
      "opens": "09:00",
      "closes": "21:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Tuesday",
      "opens": "09:00",
      "closes": "21:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Wednesday",
      "opens": "09:00",
      "closes": "21:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Thursday",
      "opens": "09:00",
      "closes": "21:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Friday",
      "opens": "09:00",
      "closes": "21:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "09:00",
      "closes": "21:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Sunday",
      "opens": "09:00",
      "closes": "18:00"
    }
  ],
  "priceRange": "$25 - $35 per hour",
  "areaServed": [
    {
      "@type": "City",
      "name": "Nashville"
    },
    {
      "@type": "City",
      "name": "Antioch"
    },
    {
      "@type": "City",
      "name": "Brentwood"
    },
    {
      "@type": "City",
      "name": "Franklin"
    },
    {
      "@type": "City",
      "name": "Smyrna"
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Car Lift and Garage Bay Rental Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "2 Post Lift Bay Rental",
          "description": "Professional-grade 2-post car lift rental with included tools"
        },
        "price": "35",
        "priceCurrency": "USD",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": "35",
          "priceCurrency": "USD",
          "unitText": "hour"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Quick Jack Bay Rental",
          "description": "Quick jack lift system rental for lighter work"
        },
        "price": "25",
        "priceCurrency": "USD",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": "25",
          "priceCurrency": "USD",
          "unitText": "hour"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Oil Change Special",
          "description": "Complete oil change service package"
        },
        "price": "45",
        "priceCurrency": "USD",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": "45",
          "priceCurrency": "USD",
          "unitText": "visit"
        }
      }
    ]
  },
  "amenityFeature": [
    {
      "@type": "LocationFeatureSpecification",
      "name": "Professional Car Lifts",
      "value": true
    },
    {
      "@type": "LocationFeatureSpecification",
      "name": "Free Tool Rentals",
      "value": true
    },
    {
      "@type": "LocationFeatureSpecification",
      "name": "Oil & Coolant Disposal",
      "value": true
    },
    {
      "@type": "LocationFeatureSpecification",
      "name": "Clean Workspace",
      "value": true
    }
  ]
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "The Wrench Collective",
  "alternateName": "TWC",
  "url": "https://www.thewrenchcollective.com",
  "logo": "https://www.thewrenchcollective.com/logo192.png",
  "description": "Nashville's premier DIY automotive workspace rental. Built by car lovers, for car lovers.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "307 Glenrose Ave",
    "addressLocality": "Nashville",
    "addressRegion": "TN",
    "postalCode": "37210",
    "addressCountry": "US"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "areaServed": "US",
    "availableLanguage": "English"
  },
  "sameAs": [
    "https://www.instagram.com/thewrenchcollective/",
    "https://www.facebook.com/thewrenchcollective/"
  ]
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How does renting a car lift work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Renting a car lift at The Wrench Collective is simple. Book online or call us to reserve your time slot. We offer hourly and daily rentals of our professional 2-post lifts and Quick Jack systems. All necessary tools are included free with your rental."
      }
    },
    {
      "@type": "Question",
      "name": "Is it safe to use a car lift?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Our professional-grade car lifts are regularly inspected and maintained to the highest safety standards. We provide a safety orientation for first-time users and our staff is always available to assist. Our lifts are much safer than traditional jack stands for DIY repairs."
      }
    },
    {
      "@type": "Question",
      "name": "What tools are included with the rental?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "All bay rentals include free access to our complete tool collection: torque wrenches, impact guns, oil drain pans, jack stands, specialty tools, and more. We have everything you need for most automotive repairs and maintenance."
      }
    },
    {
      "@type": "Question",
      "name": "Can beginners use the car lift?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely! The Wrench Collective welcomes DIYers of all skill levels. We provide safety training and guidance for first-time lift users. Our community-driven environment means experienced members are often around to offer advice and assistance."
      }
    },
    {
      "@type": "Question",
      "name": "What areas do you serve?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We're located in Nashville, TN and serve the greater Nashville area including Antioch, Brentwood, Franklin, Smyrna, and all of Davidson County. We're Middle Tennessee's premier DIY auto garage facility."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer memberships?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! We offer Pit Crew memberships with exclusive perks including priority booking, discounted hourly rates, free ALLDATA access, and invitations to exclusive car care events. Visit our membership page for full details on all tiers."
      }
    }
  ]
};

export const breadcrumbSchema = (path: string) => {
  const pathSegments = path.split('/').filter(Boolean);
  const itemListElement = [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.thewrenchcollective.com/"
    }
  ];

  pathSegments.forEach((segment, index) => {
    const name = segment.charAt(0).toUpperCase() + segment.slice(1);
    const url = `https://www.thewrenchcollective.com/${pathSegments.slice(0, index + 1).join('/')}`;
    itemListElement.push({
      "@type": "ListItem",
      "position": index + 2,
      "name": name,
      "item": url
    });
  });

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": itemListElement
  };
};
