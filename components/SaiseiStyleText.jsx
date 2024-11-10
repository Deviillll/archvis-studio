"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import TextOne from "./TextOne";
import TextTwo from "./TextTwo";
import Navbar from "./Navbar";
const SaiseiStyleText = () => {
  const lineRef = useRef(null);
  // use gsap to animate the line from left to right
  useEffect(() => {
    gsap.to(lineRef.current, {
      delay: 0.7,
      width: "100%",
      duration: 0.8,
      ease: "power3.inOut",
    });
    gsap.set(".anima1", { opacity: 0, y: 40 });
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
      delay: 1,
      stagger: 0.2,
      translateY: 0,
    });
  }, []);

  return (
    <div
      suppressHydrationWarning
      className="flex w-screen img overflow-x-hidden  flex-col md:justify-end justify-around pb-7  relative h-screen bg-center bg-cover"
    >
      <div
        className="h-[.5px] z-10 w-0 bg-[#FBF0DA] absolute top-[90px] left-0"
        ref={lineRef}
      ></div>

      <div className="flex flex-col  md:flex-row justify-center  w-screen relative z-30   ">
        <div className=" w-full md:w-[70vw] px-5 ">
          <TextOne />
          <TextTwo />
        </div>
        <div className="w-full  md:w-[30vw]  mx-auto  mt-20 md:mt-0  ">
          <div className="text-[#FBF0DA] w-screen md:w-52 flex flex-col  items-center md:items-start mx-auto my-auto space-y-4">
            <h1 className="font-medium text-4xl anima1 ">آرچ وِز</h1>
            <div className="  leading-5 md:ml-0  text-md font-normal text-center md:text-start ">
              <div className="h-6 overflow-hidden ">
                <p className="desAnime  translate-y-6">
                  {" "}
                  Lorem ipsum dolor sit amet dolor{" "}
                </p>
              </div>
              <div className="h-6 overflow-hidden  ">
                <p className="desAnime translate-y-6">
                  consectetur adipisicing elit.ing elit.
                </p>
              </div>
              <div className="h-6  overflow-hidden ">
                <p className="desAnime translate-y-6">
                  doloribus incidunt vel? ing elit.
                </p>{" "}
              </div>
              <div className="h-6  overflow-hidden ">
                <p className="desAnime translate-y-6">
                  Eligendi repellat maiores enim
                </p>{" "}
              </div>
            </div>
            <div className="">
              <button className="pt-5 text-xl tracking-wider anima1 ">
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
