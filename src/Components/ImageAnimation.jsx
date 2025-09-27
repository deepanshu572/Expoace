import gsap from "gsap/all";
import { motion } from "motion/react";
import React, { useEffect, useRef } from "react";

const ImageAnimation = () => {
  const parent = useRef(null);
  const img1 = useRef(null);
  const img2 = useRef(null);
  const img3 = useRef(null);
  const img4 = useRef(null);

  useEffect(() => {
    gsap.to(img1.current, {
      scrollTrigger: {
        trigger: parent.current,
        start: "top 80%",

        scrub: 0.4,
      },
      x: -130,
      opacity: 1,
      duration: 1,
    });
    gsap.to(img2.current, {
      scrollTrigger: {
        trigger: parent.current,
        start: "top 80%",

        scrub: 0.4,
      },
      x: 130,
      opacity: 1,
      duration: 1,
    });
    gsap.to(img3.current, {
      scrollTrigger: {
        trigger: parent.current,
        start: "top 80%",
        end: "bottom 60%",

        scrub: 0.4,
      },
      x: -130,
      opacity: 1,
      duration: 1,
    });
    gsap.to(img4.current, {
      scrollTrigger: {
        trigger: parent.current,
        start: "top 80%",

        scrub: 0.4,
      },
      x: 130,
      opacity: 1,
      duration: 1,
    });
  }, [img1, img2, img3, img4]);
  return (
    <div className=" bg-white-500 pt-30 py-10 overflow-hidden">
      <div className="image_section flex-col mb-40 sm:mb-80 " ref={parent}>
        <div className="first flex relative justify-center items-center ">
          <div ref={img1} className="img absolute w-30 sm:w-80 left-[21%] ">
            <video
              loop
              autoPlay
              muted
              className="w-full h-full object-cover"
              src="https://a.storyblok.com/f/133769/x/9c433c7aac/home-news-diesel-be-a-follower.mp4"
              alt=""
            />
          </div>
          <div className="img h-65 sm:h-170 ">
            <img
              className="w-full h-full object-cover"
              src="https://a.storyblok.com/f/133769/748x1278/5784aa7150/home-news-1.jpg/m/1200x2050/filters:quality(90)"
              alt=""
            />
          </div>
          <div ref={img2} className="img absolute w-20 sm:w-50 right-[20%] ">
            <img
              className="w-full h-full object-cover"
              src="https://a.storyblok.com/f/133769/348x494/21becfd449/home-news-3.jpg/m/1200x1703/filters:quality(90)"
              alt=""
            />
          </div>
          <div
            ref={img3}
            className="img w-40 absolute top-[84%] sm:w-90  left-[20%] "
          >
            <img
              className="w-full h-full object-cover"
              src="https://a.storyblok.com/f/133769/758x508/8a1ff60d00/home-news-4.jpg/m/1200x804/filters:quality(90)"
              alt=""
            />
          </div>
          <div
            ref={img4}
            className="img w-34 absolute top-[84%] sm:w-90  right-[20%] "
          >
            <video
              loop
              autoPlay
              muted
              className="w-full h-full object-cover"
              src="https://a.storyblok.com/f/133769/x/88b4bf7989/news-rino-pelle.mp4"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="content_holder flex flex-col items-center text-center px-10">
        <div className="head flex justify-center items-center gap-2 p-4 sm:text-xs  font3 ">
          <svg
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="icon w-4 h-4 sm:w-2 sm:h-2"
          >
            <path
              d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z"
              fill="currentColor"
              data-v-669b4a84=""
            ></path>
          </svg>
          <p>In the media</p>
        </div>
        <div className="top text-6xl flex items-center flex-col sm:text-9xl py-10 pt-7 font2 overflow-hidden">
         
          {["Spread", "the News"].map((item, index) => {
            return (
              <div
                key={index}
                className="txt  txt_wrap w-fit h-fit overflow-hidden"
              >
              <motion.h3
                className="origin-top-left "
                initial={{ y: "40%", opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                
                transition={{
                  ease: [0.22, 1, 0.36, 1],
                  duration: 1.3,
                }}
              >
                {item}

              </motion.h3>
              </div>
            );
          })}
        </div>

        <p className="text-[19px] px-4 sm:text-2xl sm:w-[30rem] font1">
          Find out more about our work on these leading design and technology
          platforms.
        </p>
        <div className="card_txt flex items-center gap-2 justify-center py-5 text-[18px]  sm:text-sm font1">
          <svg
            viewBox="0 0 50 50"
            xmlns="http://www.w3.org/2000/svg"
            className="circle-outline w-2 h-2 text-white bg-white "
            color="#fff"
            data-v-5152decb=""
          >
            <circle cx="25" cy="25" r="23" data-v-5152decb=""></circle>
          </svg>
          <p className="underline">Browse all news</p>
        </div>
      </div>
    </div>
  );
};

export default ImageAnimation;
