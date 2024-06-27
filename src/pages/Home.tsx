import HeroSection from '../components/HeroSection';
import MissionAndVision from '../components/MissionAndVision';
import Stats from '../components/Stats';
import Services from '../components/Services';
import OurTeam from '../components/OurTeam';
import Testimonial from '../components/Testimonial';
import CallToAction from '../components/CallToAction';
const Home = () => {
  return (
    <>
      <HeroSection/>
      <MissionAndVision/>
      <Stats/>
      <Services/>
      <Testimonial/>
      <OurTeam/>
      <CallToAction/> 
    </>
  );
};

export default Home;
