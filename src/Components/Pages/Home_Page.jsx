import Footer from "../Footer";
import Carousel_Testimonies from "../HomePage/Carousel_Testimonies";
import Contact from "../HomePage/Contact";
import HeroSection from "../HomePage/HeroSection";
import Mobile_App from "../HomePage/Mobile_App";
import Services from "../HomePage/Services";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <Services />
      <Carousel_Testimonies />
      <Mobile_App />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;
