import About from "@/components/About";
import ImagesSection from "@/components/ImagesSection";

import Projects from "@/components/Projects";
import SaiseiStyleText from "@/components/SaiseiStyleText";

const Home = () => {
  return (
    <div className="w-screen overflow-x-hidden">
      {/* hero  */}
      <SaiseiStyleText />
      {/* about us section */}
      <About />
      {/* images showscase section */}
      <ImagesSection />
      {/* projects section */}
      <Projects />
    </div>
  );
};

export default Home;
