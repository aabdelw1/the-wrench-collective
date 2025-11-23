import React from 'react';
import MembershipHero from './components/MembershipHero/MembershipHero';
import MembershipTiers from './components/MembershipTiers/MembershipTiers';
import MembershipPerks from './components/MembershipPerks/MembershipPerks';
import MembershipSummary from './components/MembershipSummary/MembershipSummary';
import './MembershipPage.css';

const MembershipPage: React.FC = () => {
  return (
    <div className="membership-page">
      <MembershipHero />
      <MembershipTiers />
      <MembershipPerks />
      <MembershipSummary />
    </div>
  );
};

export default MembershipPage;