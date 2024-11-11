"use client";
import React, { useEffect, useRef } from "react";
// Vendors
import "locomotive-scroll/dist/locomotive-scroll.css";

import LocomotiveScroll from "locomotive-scroll";

const ImagesSection = () => {
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
  }, []);
  return (
    <div className="w-screen h-[300vh] my-32  px-5 overflow-x-hidden">
      <div className="w-full h-full">
        {/* main image */}
        <div
          className="w-[70vw] h-72 md:w-[35vw] md:h-[80vh]  mx-auto mt-[50%] md:mt-0 md:translate-y-[80%] "
          data-scroll
          data-scroll-speed="0.1"
        >
          <div className="bg-green-600 w-full h-full rounded-sm"></div>
        </div>
        {/* small imgs left and right */}
        <div className="w-full md:flex justify-between">
          <div
            className="w-32 h-32 md:w-52 md:h-52 rounded-sm "
            data-scroll
            data-scroll-speed="0.4"
          >
            <div className="bg-black/80 w-full h-full mt-[70%] md:mt-0 md:translate-y-[80%]"></div>
          </div>
          <div
            className="w-32 h-32 md:w-52 md:h-52 rounded-sm ml-[60%] md:ml-0"
            data-scroll
            data-scroll-speed="0.9"
          >
            <div className="bg-black/80 w-full h-full mt-[70%] md:mt-0 md:translate-y-[80%]"></div>
          </div>
        </div>
        {/* last center img */}
        <div
          className="w-52 h-52 mx-auto translate-y-[80%]  "
          data-scroll
          data-scroll-speed="0.6"
        >
          <div className="bg-black/80 w-full h-full rounded-sm "></div>
        </div>
        {/* text starts from here */}
      </div>
    </div>
  );
};

export default ImagesSection;
