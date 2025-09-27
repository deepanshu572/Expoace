import gsap, { ScrollTrigger } from "gsap/all";
import React, { useEffect, useRef } from "react";

const PlayReel = () => {
  const playReel = useRef(null);
  const video = useRef(null);
  const text1 = useRef(null);
  const text2 = useRef(null);
  const icon = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: playReel.current,
        top: "0 0",
        pin: true,
        scrub: 1,
      },
    });
    tl
    .to(video.current, {
      width: "100%",
      height: "100%",
      ease: "power4.out",
    },'a')
    .to(text1.current,{
      x: "-100%",
    },'a')
    .to(text2.current,{
      x: "100%",
    },'a')
    .to(icon.current,{
      scale: 2,
    },'a')
  }, [playReel]);

  return (
    <div
      ref={playReel}
      className="w-full relative h-[100vh] bg-black flex items-center justify-center text-white overflow-y-hidden "
    >
      <div className="wrap  " ref={video}>
        <video
          loop
          autoPlay
          muted
          className="w-full h-full object-cover"
          src="https://player.vimeo.com/progressive_redirect/playback/914803778/rendition/1080p/file.mp4?loc=external&log_user=0&signature=5344c0e4fea63ca54bb433621ca0be7b9470b475583fa68b26de2b6e380a390a"
        ></video>
      </div>
      <div className="text absolute top-0 left-0 bg-[#00000085] sm:pb-10 pb-25 w-full h-full flex  justify-between  items-center  flex-col">
        <div className="head flex justify-center items-center gap-2 p-4 sm:py-10 py-30 pb-0 font3 ">
          <svg
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="icon w-4 h-4"
            data-v-669b4a84=""
          >
            <path
              d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z"
              fill="currentColor"
              data-v-669b4a84=""
            ></path>
          </svg>
          <p>Work In motion</p>
        </div>
        <div className="play_reel flex items-center justify-center text-5xl sm:text-8xl font2 ">
          <h2 className="" ref={text1}>Play</h2>
          <svg
            viewBox="0 0 86 86"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="icon w-15 h-15"
            data-v-65273f07=""
            style={{ opacity: "0.2315" }}
            ref={icon}
          >
            <circle
              opacity="0.4"
              cx="43"
              cy="43"
              r="41"
              stroke="currentColor"
              data-v-65273f07=""
            ></circle>
            <path
              d="M41 38V48L49.1818 43L41 38Z"
              fill="currentColor"
              data-v-65273f07=""
            ></path>
          </svg>
          <h2 ref={text2} >Reel</h2>
        </div>{" "}
        <div className="desc sm:w-[30%] text-[15px] px-6 font3">
          <p className="text-center">
            Our work is best experienced in motion. Don’t forget to put on your
            headphones.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PlayReel;
