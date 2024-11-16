"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import TextOne from "./TextOne";
import TextTwo from "./TextTwo";

const SaiseiStyleText = () => {
  // use gsap to animate the line from left to right
  useEffect(() => {
    gsap.to(".anima1", {
      opacity: 1,
      y: 0,
      duration: 1,
      delay: 1,
      stagger: 0.4,
    });

    gsap.to(".desAnime", {
      opacity: 1,

      duration: 1,
      delay: 0.8,
      stagger: 0.2,
      translateY: 0,
    });
  }, []);

  return (
    <div
      suppressHydrationWarning
      className="flex w-screen img overflow-x-hidden  flex-col md:justify-end justify-around pb-7  relative h-screen bg-center bg-cover"
    >
      <div className="flex flex-col  md:flex-row justify-center  w-screen relative z-30   ">
        <div className=" w-full md:w-[70vw] px-5   ">
          <TextOne />
          <TextTwo />
        </div>
        <div className="w-full  md:w-[30vw]  mx-auto  mt-20 md:mt-0   ">
          <div className="text-[#FBF0DA] w-screen md:w-52 flex flex-col  items-center md:items-start mx-auto my-auto space-y-4">
            <h1 className="font-medium text-4xl anima1 opacity-0 ">آرچ وِز</h1>
            <div className="  -space-y-1 md:ml-0   text-md font-light text-center md:text-start  md:w-full ">
              <div className="h-6 overflow-hidden  ">
                <p className="desAnime  translate-y-8 overflow-hidden">
                  {" "}
                  Lorem ipsum dolor sit amet
                </p>
              </div>
              <div className="h-6 overflow-hidden  ">
                <p className="desAnime translate-y-8 overflow-hidden">
                  consectetur adipisicing elit
                </p>
              </div>
              <div className="h-6  overflow-hidden ">
                <p className="desAnime translate-y-8 overflow-hidden">
                  doloribus incidunt vel? .
                </p>{" "}
              </div>
              <div className="h-6  overflow-hidden ">
                <p className="desAnime translate-y-8 overflow-hidden">
                  Eligendi repellat maiores enim
                </p>{" "}
              </div>
            </div>
            <div className="hidden md:block">
              <button className="pt-5 text-xl tracking-wider anima1 opacity-0">
                Scroll
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="h-full w-full absolute top-0 left-0 bg-[#0D0805]/80  "></div>
    </div>
  );
};

export default SaiseiStyleText;
