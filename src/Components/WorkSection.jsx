import React from "react";

const WorkSection = () => {
  return (
    <div className=" bg-white py-10 pt-20 sm:pt-40 sm:pl-15 px-8 text-black">
      <p className=" sm:hidden flex items-center gap-3 text-[16px] font1 mb-6 sm:text-3xl sm:mb-10 font3">
        <svg
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="icon w-4 h-4 "
          data-v-669b4a84=""
        >
          <path
            d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z"
            fill="currentColor"
            data-v-669b4a84=""
          ></path>
        </svg>{" "}
        Featured Projects
      </p>
      <h2 className="text-7xl font2 px-2 pb-6 sm:text-[14rem] sm:px-20">
        Work
      </h2>
      <p className=" sm:hidden text-[18px] font3 ">
        Highlights of cases that we passionately built with forward-thinking
        clients and friends over the years.
      </p>

      <div className="first_div sm:flex justify-evenly ">
        <div className="cards_wrap py-5">
          <div className="cards relative h-[27rem] sm:h-[40rem] ">
            <div className="card_img  hover:opacity-0 z-1 absolute hidden sm:block top-0 left-0 w-full h-full">
              <img
                className=" w-full h-full object-cover"
                src="https://a.storyblok.com/f/133769/2400x2990/729680ed7f/ottografie-2025-hero.jpg/m/1300x1620/filters:quality(90)"
                alt=""
              />
            </div>
            <div className="card_video w-full h-full">
              <video
              loop
              autoPlay
              muted
                className="w-full h-full object-cover"
                src="https://player.vimeo.com/progressive_redirect/playback/1047169994/rendition/720p/file.mp4?loc=external&log_user=0&signature=780c70237c241a1fe7a4b3837cad974ed7fb98f38cd2e6f912752ff9e44107ee"
              ></video>
            </div>
          </div>
          <p class="info sm:hidden">
            <span class="info-line flex flex-col pt-2  ">
              <strong className="font1 text-[18px]">Ottografie</strong>
              <small className="text-[15px] font2 text-gray-600">
                Seamless Photographic Journey
              </small>
            </span>
          </p>
        </div>
        <div className="right sm:w-[30%] ">
          <p className="sm:flex hidden  items-center gap-3 text-[16px] sm:text-[14px] font1 mb-6 sm:text-3xl sm:mb-10 font3">
            <svg
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="icon w-4 h-4 "
              data-v-669b4a84=""
            >
              <path
                d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z"
                fill="currentColor"
                data-v-669b4a84=""
              ></path>
            </svg>{" "}
            Featured Projects
          </p>
          <p className=" hidden sm:block text-[18px] sm:text-[18px] font2 ">
            Highlights of cases that we passionately built with forward-thinking
            clients and friends over the years.
          </p>
          <div className="cards_wrap py-5 sm:mt-35">
            <div className="cards relative h-[27rem]">
              <div className="card_img  hover:opacity-0 z-1 absolute hidden sm:block top-0 left-0 w-full h-full">
                <img
                  className=" w-full h-full "
                  src="https://a.storyblok.com/f/133769/2409x3000/c155d3e27e/amaterasu-hero.jpg/m/1300x1619/filters:quality(90)"
                  alt=""
                />
              </div>
              <div className="card_video w-full h-full">
                <video
                loop
                autoPlay
                muted
                  className="w-full h-full object-cover"
                  src="https://player.vimeo.com/progressive_redirect/playback/1020697798/rendition/720p/file.mp4?loc=external&log_user=0&signature=cd45f23683db91c40f08a3f4a31ba153f1e93eac3d4f98cb3ca4b651b8830d04"
                ></video>
              </div>
            </div>
            <p class="info sm:hidden">
              <span class="info-line flex flex-col pt-2  ">
                <strong className="font1 text-[18px]">Ottografie</strong>
                <small className="text-[15px] font2 text-gray-600">
                  Seamless Photographic Journey
                </small>
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="second_div sm:flex justify-center items-end sm:gap-10">
        <div className="cards_wrap py-5">
          <div className="cards relative h-[27rem] sm:h-[18rem]">
            <div className="card_img  hover:opacity-0 z-1 absolute hidden sm:block top-0 left-0 w-full h-full">
              <img
                className=" w-full h-full"
                src="https://a.storyblok.com/f/133769/2409x3000/cfd16e1a58/cambium-carbon-hero.jpg/m/1300x1619/filters:quality(90)"
                alt=""
              />
            </div>
            <div className="card_video w-full h-full">
              <video
              loop
              autoPlay
              muted
                className="w-full h-full object-cover"
                src="https://player.vimeo.com/progressive_redirect/playback/1001982172/rendition/720p/file.mp4?loc=external&log_user=0&signature=b92eb1ab8119f2ffaaa03f075ef271714f5ee63065ee8d29f4e188ce30202de0"
              ></video>
            </div>
          </div>
          <p class="info sm:hidden">
            <span class="info-line flex flex-col pt-2  ">
              <strong className="font1 text-[18px]">Ottografie</strong>
              <small className="text-[15px] font2 text-[#0d0e1399]">
                Seamless Photographic Journey
              </small>
            </span>
          </p>
        </div>
        <div className="cards_wrap py-5">
          <div className="cards relative h-[27rem] sm:h-[35rem]">
            <div className="card_img absolute hover:opacity-0 z-1 hidden sm:block top-0 left-0 w-full h-full">
              <img
                className=" w-full h-full"
                src="https://a.storyblok.com/f/133769/2400x2990/540fb12941/columbia-pictures-thumbnail.jpg/m/1300x1620/filters:quality(90)"
                alt=""
              />
            </div>
            <div className="card_video w-full h-full">
              <video
              loop
              autoPlay
              muted
                className="w-full h-full"
                src="https://player.vimeo.com/progressive_redirect/playback/927016456/rendition/720p/file.mp4?loc=external&log_user=0&signature=270ce5ba6bf44a717c74cf85de5f3de1d33a36ba5205b660e5e23b873199d71a"
              ></video>
            </div>
          </div>
          <p class="info sm:hidden">
            <span class="info-line flex flex-col pt-2  ">
              <strong className="font1 text-[18px]">Ottografie</strong>
              <small className="text-[15px] font2 text-[#0d0e1399]">
                Seamless Photographic Journey
              </small>
            </span>
          </p>
        </div>
      </div>

      <div className="card_txt flex items-center gap-2 justify-center py-20 text-[18px] font1">
        <svg
          viewBox="0 0 50 50"
          xmlns="http://www.w3.org/2000/svg"
          className="circle-outline w-2 h-2"
          data-v-5152decb=""
        >
          <circle cx="25" cy="25" r="23" data-v-5152decb=""></circle>
        </svg>
        <p>Browse all work</p>
      </div>
    </div>
  );
};

export default WorkSection;
