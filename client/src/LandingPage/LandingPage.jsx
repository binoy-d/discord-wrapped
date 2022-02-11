
import './LandingPage.css';
import React from 'react'

import HeroSection from './Sections/HeroSection';
import Navbar from './Sections/Navbar';
import MissionSection from './Sections/MissionSection';
import LaughWithFriendsSection from './Sections/LaughWithFriendsSection';
import AwardSection from './Sections/AwardsSection';

function LandingPage() {
  return (
    <div className="LandingPage">
        <Navbar />
        <HeroSection />
        <MissionSection />
        <LaughWithFriendsSection />
        <AwardSection />
    </div>
  );
}

export default LandingPage;
