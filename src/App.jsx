import React from "react";
import NavBar from "./Components/NavBar";
import HeroSection from "./Components/HeroSection";
import LocomotiveScroll from 'locomotive-scroll';
import WorkSection from "./Components/WorkSection";
import PlayReel from "./Components/PlayReel";
import ImageAnimation from "./Components/ImageAnimation";
import Footer from "./Components/Footer";

const App = () => {

const locomotiveScroll = new LocomotiveScroll();
  return (
    <React.Fragment>
      {/* <div
        ref={crsRef}
        className="crs absolute bg-black text-white w-18 z-[999] h-18 rounded-full flex items-center justify-center "
      >
        Scroll
      </div> */}
      <div
        className="container_main "
        // onMouseMove={(dets) => coursourAnimation(dets)}
      >
        <NavBar />
        <HeroSection />
        <WorkSection />
        <PlayReel />
        <ImageAnimation />
        <Footer/>
      </div>
    </React.Fragment>
  );
};

export default App;
