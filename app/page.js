import About from "@/components/About";
import AboutIntro from "@/components/AboutIntro";
import GetInTouch from "@/components/GetInTouch";
import ImagesSection from "@/components/ImagesSection";

import Projects from "@/components/Projects";
import Quotes from "@/components/Quotes";
import SaiseiStyleText from "@/components/SaiseiStyleText";
import ServiceIntro from "@/components/ServiceIntro";

const Home = () => {
  return (
    <div className="">
      {/* hero  */}
      <SaiseiStyleText />
      {/* about us section */}
      <About />
      {/* images showscase section */}
      <ImagesSection />
      {/* projects section */}
      <Projects />
      {/* about intro */}
      <AboutIntro />
      {/* service intro */}
      <ServiceIntro />
      {/* quotes */}
      <Quotes />
      {/* get in touch */}
      <GetInTouch />
    </div>
  );
};

export default Home;
