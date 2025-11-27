import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  canonicalUrl?: string;
  structuredData?: object;
}

const SEO: React.FC<SEOProps> = ({
  title = 'Car Lift Rental Nashville | DIY Auto Garage | The Wrench Collective',
  description = 'Rent a car lift or garage bay in Nashville. Safe, clean, fully equipped DIY auto shop with free tools. Book online at The Wrench Collective.',
  keywords = 'car lift rental nashville, diy auto shop nashville, rent a car lift nashville, auto bay rental nashville, diy garage nashville, self service auto repair nashville, nashville car lift, mechanic garage rental nashville, work on my car nashville, ',
  ogTitle,
  ogDescription,
  ogImage = 'https://www.thewrenchcollective.com/twc_logo.png',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  canonicalUrl,
  structuredData,
}) => {
  const currentUrl = canonicalUrl || `https://www.thewrenchcollective.com${window.location.pathname}`;
  const finalOgTitle = ogTitle || title;
  const finalOgDescription = ogDescription || description;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Canonical URL */}
      <link rel="canonical" href={currentUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={finalOgTitle} />
      <meta property="og:description" content={finalOgDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="The Wrench Collective" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta property="twitter:card" content={twitterCard} />
      <meta property="twitter:url" content={currentUrl} />
      <meta property="twitter:title" content={finalOgTitle} />
      <meta property="twitter:description" content={finalOgDescription} />
      <meta property="twitter:image" content={ogImage} />

      {/* Additional SEO Meta Tags */}
      <meta name="author" content="The Wrench Collective" />
      <meta name="geo.region" content="US-TN" />
      <meta name="geo.placename" content="Nashville" />
      <meta name="geo.position" content="36.1627;-86.7816" />
      <meta name="ICBM" content="36.1627, -86.7816" />

      {/* Structured Data / JSON-LD */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
