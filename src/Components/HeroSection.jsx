import React from "react";
import heroBg from '../assets/img/homeBg.jpeg'


const HeroSection = () => {
  return (
    <div className="container px-6 h-[150vh] sm:h-[250vh] relative ">
      <div className=' w-full h-full'>
      <img className='img_hero object-cover  absolute top-0 left-0 w-full h-full z-[-1] ' src={heroBg} alt="" />
      </div>
    <div className="hero_wrap absolute top-0 text-white mt-[25rem] ">
      <div className="heroTxt text-xl font3 sm:px-[70px] ">
        <h3> Global digital design studio partnering </h3>
        <h3>with brands and businesses that create </h3>
        <h3>exceptional experiences where people </h3>
        <h3>live, work, and unwind. </h3>
      </div>
      <div className="main_txt text-6xl font2 py-4 sm:px-[70px] sm:text-[11rem]">
        <div className="txt_wrap">
          <h2>Digital</h2>
        </div>
        <div className="txt_wrap">
          <h2>Design</h2>
        </div>
        <div className="txt_wrap">
          <h2>Experience</h2>
        </div>
      </div>
      <div className="main_third_txt mt-[6rem] text-xl font3 sm:px-[70px] sm:w-[50%]">
        <p>
          We help experience-driven companies thrive by making their audience
          feel the refined intricacies of their brand and product in the digital
          space. Unforgettable journeys start with a click.
        </p>
        <div className="last_txt">
          {/* <svg
            viewBox="0 0 50 50"
            xmlns="http://www.w3.org/2000/svg"
            className="circle-outline"
            data-v-5152decb=""
          >
            <circle cx="25" cy="25" r="23" data-v-5152decb=""></circle>
          </svg> */}
          <p>The Studio</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default HeroSection;
