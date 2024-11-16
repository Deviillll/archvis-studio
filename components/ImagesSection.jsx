"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
// Vendors
import "locomotive-scroll/dist/locomotive-scroll.css";

import LocomotiveScroll from "locomotive-scroll";
import TextAnimaion from "./TextAnimaion";
import Projects from "./Projects";

const ImagesSection = () => {
  const textRef = useRef(null);

  const container = useRef(null);
  // const tl = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: container.current,
  //     start: "60% 26%",
  //     end: "80% 40%",
  //     scrub: 1,
  //     markers: true,
  //     pin: true,
  //   },
  // });

  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
    // tl.to(".wrapper", {
    //   translateY: "-90vh",
    // });
  }, []);
  return (
    <div
      ref={container}
      className="w-screen h-[300vh] overflow-hidden  "
      data-scroll-container
    >
      <div className="w-full h-full">
        {/* main image */}
        <div
          className="w-[70vw] h-72 md:w-[35vw] md:h-[80vh]  mx-auto mt-[50%] md:mt-0 md:translate-y-[60%] "
          data-scroll
          data-scroll-speed="0"
        >
          <div className="bg-black/80 w-full h-full rounded-sm"></div>
        </div>
        <div
          id="text"
          ref={textRef}
          className="mx-auto flex flex-col justify-center  "
        >
          <TextAnimaion />
        </div>

        {/* small imgs left and right */}
        <div className="w-full md:flex justify-between px-5">
          <div
            className="w-32 h-32 md:w-52 md:h-52 rounded-sm "
            data-scroll
            data-scroll-speed="0.4"
          >
            <div className="bg-black/80 w-full h-full mt-[70%] md:mt-0 md:translate-y-[60%]"></div>
          </div>
          <div
            className="w-32 h-32 md:w-52 md:h-52 rounded-sm ml-[60%] md:ml-0"
            data-scroll
            data-scroll-speed="0.9"
          >
            <div className="bg-black/80 w-full h-full mt-[70%] md:mt-0 md:translate-y-[60%]"></div>
          </div>
        </div>

        {/* last center img */}

        <div
          className="w-52 h-52 ml-[45%] md:mx-0 md:ml-[70vw] translate-y-[80%]  "
          data-scroll
          data-scroll-speed="0.6"
        >
          <div className="bg-black/80 w-full h-full rounded-sm "></div>
        </div>

        <div
          className="w-52 h-52 ml-[15vw] translate-y-[80%]  "
          data-scroll
          data-scroll-speed=".8"
        >
          <div className="bg-black/80 w-full h-full rounded-sm "></div>
        </div>

        {/* <Projects /> */}
      </div>
    </div>
  );
};

export default ImagesSection;
