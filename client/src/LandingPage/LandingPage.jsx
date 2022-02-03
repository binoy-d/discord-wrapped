import './LandingPage.css';
import HeroSection from './Sections/HeroSection';
import Navbar from './Sections/Navbar';
import MissionSection from './Sections/MissionSection';
function LandingPage() {
  return (
    <div className="LandingPage">
        <Navbar />
        <HeroSection />
        <MissionSection />
    </div>
  );
}

export default LandingPage;
