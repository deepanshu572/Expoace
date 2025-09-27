import React from "react";
import heroBg from "../assets/img/homeBg.jpeg";
import { motion } from "motion/react";

const HeroSection = () => {
  return (
    <div className="container px-6 h-[150vh] sm:h-[250vh] relative ">
      <div className="w-full h-full overflow-hidden">
        <img
        data-scroll
        data-scroll-speed="-2"
          className="img_hero object-cover  absolute top-0 left-0 w-full h-full z-[-1] "
          src={heroBg}
          alt=""
        />
      </div>
      <div className="hero_wrap absolute top-0 text-white mt-[25rem] ">
        <div className="heroTxt sm:text-xl text-[18px] font3 sm:px-[70px] ">
          {[
            " Global digital design studio partnering with",
            " brands and businesses that create exceptional",
            " experiences where people live, work, and unwind.",
          ].map((item, index) => {
            return (
              <div key={index} className=" w-fit h-fit overflow-hidden ">
                <motion.h3
                  className="origin-top-left"
                  initial={{ y: 100, rotate: 90 ,  opacity: 0 }}
                  animate={{ y: 0, rotate: 0 , opacity: 1 }}
                  transition={{ ease: [0.22, 1, 0.36, 1], duration: 1.3 , delay: 1 + index * 0.3}}
                >
                  {item}
                </motion.h3>
              </div>
            );
          })}
        </div>
        <div className="main_txt text-6xl font2 py-4 sm:px-[70px] sm:text-[11rem]">
          {["Digital", "Design", "Experience"].map((item, index) => {
            return (
              <div key={index} className="txt_wrap w-fit h-fit overflow-hidden">
                <motion.h2
                  className="origin-top-left pb-1"
                  initial={{ y: 100 ,rotate: 90, opacity: 0}}
                  animate={{ y: 0 ,rotate: 0, opacity: 1}}
                  transition={{ ease: [0.22, 1, 0.36, 1], duration: 2 , delay: index * 0.4 }}
                >
                  {item}
                </motion.h2>
              </div>
            );
          })}
         
        </div>
        <div className="main_third_txt mt-[6rem] sm:text-sm  text-[18px] font3 sm:px-[70px] sm:w-[50%]">
          {/* <div className=" w-fit h-fit overflow-hidden ">
            <motion.h3
              className="origin-top-left"
              initial={{ y: 100, rotate: 15 }}
              animate={{ y: 0, rotate: 0 }}
              transition={{ ease: Power4.easeInOut, duration: 4 }}
            >
              {" "}
              We help experience-driven companies thrive by making their
              audience{" "}
            </motion.h3>
          </div>
          <div className=" w-fit h-fit overflow-hidden">
            <motion.h3
              className="origin-top-left"
              initial={{ y: 100, rotate: 15 }}
              animate={{ y: 0, rotate: 0 }}
              transition={{ ease: Power4.easeInOut, duration: 4 }}
            >
              {" "}
              feel the refined intricacies of their brand and product in the
              digital{" "}
            </motion.h3>
          </div>
          <div className=" w-fit h-fit overflow-hidden">
            <motion.h3
              className="origin-top-left"
              initial={{ y: 100, rotate: 15 }}
              animate={{ y: 0, rotate: 0 }}
              transition={{ ease: Power4.easeInOut, duration: 4 }}
            >
              {" "}
              space. Unforgettable journeys start with a click.{" "}
            </motion.h3>
          </div> */}
          <p>
          We help experience-driven companies thrive by making their audience
          feel the refined intricacies of their brand and product in the digital
          space. Unforgettable journeys start with a click.
        </p>
          <div className="last_txt pt-2">
            <svg
              viewBox="0 0 50 50"
              xmlns="http://www.w3.org/2000/svg"
              className="circle-outline w-2 h-2"
              data-v-5152decb=""
            >
              <circle cx="25" cy="25" r="23" data-v-5152decb=""></circle>
            </svg>
            <p>The Studio</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
