"use client";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".image",
        start: "top center",
        end: "60% center",
        scrub: false,
      },
    });

    tl.to(".image", {
      width: "100%",
      duration: 1,
      ease: "power3.inOut",
    });
  });

  return (
    <div className="h-screen w-screen flex flex-col  justify-between md:flex-row md:justify-between pl-5 my-10 ">
      <div className="h-full w-full md:w-[30%]  flex flex-col items-center  md:justify-around  ">
        <div className="md:pl-10 md:my-auto tracking-tight h-28 space-y-1 w-[50%]  md:w-full">
          <h1 className="font-medium text-4xl pl-5 ">آرچ وِز</h1>
          <h1 className="font-normal text-2xl  ">(DEN THO) </h1>
          <h1 className="font-extralight text-lg uppercase pl-3 ">Tradition</h1>
        </div>
        <div className="little quotes md:h-40 md:mt-28 flex flex-col md:justify-end w-[60%] md:w-full ">
          <h1 className="uppercase text-3xl lg:text-6xl font-medium  tracking-tighter leading-8 md:leading-normal md:ml-6">
            every line tells a story
          </h1>
        </div>
      </div>
      <div className="h-full w-full  md:w-[40%] pr-5 md:mt-10 mt-5">
        <div className="w-[0%] h-52 md:h-[90%] rounded-sm origin-left image bg-black/80  "></div>
      </div>
      <div className="h-full w-full md:w-[30%]   ">
        <div className="md:mt-10 text-left h-[50%] w-[95%] md:w-[60%] md:translate-x-32 mt-8  ">
          <p className="leading-[22px] text-left tracking-tight font-medium font-serif text-sm md:text-[16px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim iusto
            veniam provident veritatis quidem culpa, commodi ad unde cumque hic
            quod atque laudantium similique inventore fugiat et repellendus
            incidunt nam! Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Repellendus laboriosam quod veritatis accusamus quae.
          </p>
        </div>
        <div className="mx-auto flex md:justify-center w-full md:mt-4  ">
          <button className="  uppercase text-white  bg-[#9C7443] px-6 py-2 rounded-3xl">
            about us
          </button>
        </div>
        <div className=" md:translate-x-32 md:translate-y-20 md:w-[65%] w-full pr-5 md:pr-0 mt-8 md:mt-0">
          <div className="bg-black/80 rounded-sm w-[0%] origin-left image h-48 md:h-32 "></div>
        </div>
      </div>
    </div>
  );
};

export default About;
