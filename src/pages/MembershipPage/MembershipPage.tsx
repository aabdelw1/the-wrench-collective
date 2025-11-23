import React from 'react';
import SEO from '../../components/SEO/SEO';
import MembershipHero from './components/MembershipHero/MembershipHero';
import MembershipTiers from './components/MembershipTiers/MembershipTiers';
import MembershipPerks from './components/MembershipPerks/MembershipPerks';
import MembershipSummary from './components/MembershipSummary/MembershipSummary';
import './MembershipPage.css';

const MembershipPage: React.FC = () => {
  return (
    <div className="membership-page">
      <SEO
        title="Pit Crew Membership | DIY Auto Garage Memberships Nashville | The Wrench Collective"
        description="Join The Wrench Collective's Pit Crew membership for priority booking, discounted rates, free ALLDATA access, and exclusive car care events in Nashville."
        keywords="nashville auto garage membership, diy garage membership nashville, car lift membership, pit crew membership nashville, automotive workspace membership"
        ogTitle="Pit Crew Membership | The Wrench Collective Nashville"
        ogDescription="Exclusive memberships for DIY car enthusiasts. Priority booking, discounted rates, and ALLDATA access."
        canonicalUrl="https://www.thewrenchcollective.com/membership"
      />
      <MembershipHero />
      <MembershipTiers />
      <MembershipPerks />
      <MembershipSummary />
    </div>
  );
};

export default MembershipPage;