import React from "react";

const ImageAnimation = () => {
  return (
    <div className=" bg-white-500 pt-30 py-10">
      <div className="image_section flex-col mb-25 ">
        <div className="first flex relative justify-center items-center ">
          <div className="img absolute w-30 sm:w-80 left-[5%] ">
            <video
              loop
              autoPlay
              muted
              className="w-full h-full object-cover"
              src="https://a.storyblok.com/f/133769/x/9c433c7aac/home-news-diesel-be-a-follower.mp4"
              alt=""
            />
          </div>
          <div className="img h-65 sm:h-112 ">
            <img
              className="w-full h-full object-cover"
              src="https://a.storyblok.com/f/133769/748x1278/5784aa7150/home-news-1.jpg/m/1200x2050/filters:quality(90)"
              alt=""
            />
          </div>
          <div className="img absolute w-20 sm:w-50 right-[7%] ">
            <img
              className="w-full h-full object-cover"
              src="https://a.storyblok.com/f/133769/348x494/21becfd449/home-news-3.jpg/m/1200x1703/filters:quality(90)"
              alt=""
            />
          </div>
          <div className="img w-40 absolute top-[84%] sm:w-90  left-[7%] ">
            <img
              className="w-full h-full object-cover"
              src="https://a.storyblok.com/f/133769/758x508/8a1ff60d00/home-news-4.jpg/m/1200x804/filters:quality(90)"
              alt=""
            />
          </div>
          <div className="img w-34 absolute top-[84%] sm:w-90  right-[7%] ">
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
      <div className="top text-6xl sm:text-9xl py-10 pt-7 font2">
      <div className="txt">
      <h3>Spread</h3>
      </div>
      <div className="txt">
      <h3>the News</h3>
      </div>
      </div>
      <p className="text-[19px] px-4 sm:text-2xl sm:w-[30rem] font1" >Find out more about our work on these leading design and technology platforms.</p>
     <div className="card_txt flex items-center gap-2 justify-center py-5 text-[18px]  sm:text-sm font1">
        <svg
          viewBox="0 0 50 50"
          xmlns="http://www.w3.org/2000/svg"
          className="circle-outline w-2 h-2 "
          data-v-5152decb=""
        >
          <circle cx="25" cy="25" r="23" data-v-5152decb=""></circle>
        </svg>
        <p>Browse all news</p>
      </div>
      </div>

        
    </div>
  );
};

export default ImageAnimation;
