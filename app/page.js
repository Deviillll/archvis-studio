import About from "@/components/About";
import ImagesSection from "@/components/ImagesSection";
import SaiseiStyleText from "@/components/SaiseiStyleText";

const Home = () => {
  return (
    <div className="w-screen overflow-x-hidden">
      {/* heor  */}
      <SaiseiStyleText />
      {/* about us section */}
      <About />
      {/* images showscase section */}
      <ImagesSection />
    </div>
  );
};

export default Home;
