import React from "react";
import { motion } from "motion/react";

const Footer = () => {

  return (
    <div className=" bg-[#090909]">
      
      <div
        data-scroll
        data-scroll-speed=".2"
        className="footer bg-[#090909]  text-[#e0cdbdcc] sm:px-30 py-2 px-5 overflow-x-hidden "
      >
        <div className="top flex relative ">
          {/*  */}
          <div className="top_footer pt-5 py-10 sm:py-5">
            <div className="head font2 relative z-2 ">
              <div className="  w-fit h-fit overflow-hidden ">
                <motion.h3
                  className="origin-top-left txt text-6xl sm:text-9xl"
                  initial={{ y: "40%", opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    ease: [0.22, 1, 0.36, 1],
                    duration: 1.3,
                  }}
                >
                  Our
                </motion.h3>
                <motion.h3
                  className="origin-top-left txt text-6xl sm:text-9xl"
                  initial={{ y: "40%", opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    ease: [0.22, 1, 0.36, 1],
                    duration: 1.3,
                  }}
                >
                  Story
                </motion.h3>
              </div>
              <div className="txt_btm pt-5 sm:text-2xl sm:w-[30rem]">
                <p>
                  The story behind Exo Ape is one of exploration, creativity and
                  curiosity.
                </p>
              </div>
              <div className="card_txt flex items-center gap-2  py-5 pb-1 text-[18px]  sm:text-sm font1">
                <svg
                  viewBox="0 0 50 50"
                  xmlns="http://www.w3.org/2000/svg"
                  className="circle-outline w-2 h-2 "
                  data-v-5152decb=""
                >
                  <circle cx="25" cy="25" r="23" data-v-5152decb=""></circle>
                </svg>
                <p>Our Story</p>
              </div>
            </div>
          </div>
          <video
            loop
            autoPlay
            muted
            className="absolute  w-240 sm:w-235 sm:right-[-20%] sm:top-[-12%] right-[-25%] top-[2%] z-[1] "
            src="https://www.exoape.com/video/video-6.mp4"
          ></video>
        </div>
        <hr className="relative z-[8] text-[#e0cdbdcc]" />
        <div className="foot_last flex gap-20 sm:gap-30 text-[17px] sm:text-[15px] font2 p-2 py-5">
          <div className="last_1 hidden sm:block ">
            <p>
              Willem II Singel 8 <br /> 6041 HS, Roermond <br /> The Netherlands
              <br /> hello@exoape.com
            </p>
          </div>
          <div className="last2 flex flex-col gap-2">
            <p> Work</p>
            <p>Studio</p>
            <p>News</p>
            <p>Contact</p>
          </div>
          <div className="last2 flex flex-col gap-2">
            <p>Behance</p>
            <p>Dribbble</p>
            <p>Linkedin</p>
            <p>Instagram</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
