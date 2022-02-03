import './LandingPage.css';
import HeroSection from './Sections/HeroSection';
import Navbar from './Sections/Navbar';

function LandingPage() {
  return (
    <div className="LandingPage">
        <Navbar />
        <HeroSection />
    </div>
  );
}

export default LandingPage;
