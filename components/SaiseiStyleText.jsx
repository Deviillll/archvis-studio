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
      delay: 1,
      width: "100%",
      duration: 1,
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
  }, []);

  return (
    <div
      suppressHydrationWarning
      className="flex w-screen img overflow-x-hidden bg-[#0D0805]   flex-col justify-end pb-10 px-5 relative h-screen bg-center bg-cover"
    >
      <div
        className="h-[.5px] z-10 w-0 bg-[#FBF0DA] absolute top-[90px] left-0"
        ref={lineRef}
      ></div>

      <div className="flex w-screen relative z-30">
        <div className=" w-[70vw]">
          <TextOne />
          <TextTwo />
        </div>
        <div className=" w-[30vw] m-auto ">
          <div className="text-[#FBF0DA] w-52  mx-auto my-auto space-y-4">
            <h1 className="font-medium text-4xl anima1 ">آرچ وِز</h1>
            <p className="leading-5 anima1 text-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              doloribus incidunt vel? Eligendi repellat maiores enim{" "}
            </p>
            <button className="pt-5 text-xl tracking-wider anima1">
              Scroll
            </button>
          </div>
        </div>
      </div>
      <div className="h-full w-full absolute top-0 left-0 bg-[#0D0805]/80  "></div>
    </div>
  );
};

export default SaiseiStyleText;
