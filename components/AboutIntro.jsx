"use client";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutIntro = () => {
  const imagesRef = useRef(null);
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: imagesRef.current,
        start: "top center",
        end: "50% center",
        scrub: false,
        // markers: true,
      },
    });

    tl.to(".introImage", {
      width: "100%",
      duration: 1,
      ease: "power3.inOut",
    });
  });

  return (
    <div
      ref={imagesRef}
      className="h-screen w-screen flex flex-col  justify-between md:flex-row md:justify-between pl-5 my-20 "
    >
      <div className="h-full w-full  md:w-[40%] pr-5  mt-5">
        <div className="w-[0%] h-52 md:h-[98%] rounded-sm origin-left introImage bg-black/80  "></div>
      </div>
      <div className="h-full w-full md:w-[30%]  flex flex-col  justify-between  ">
        <div className=" mt-2 tracking-tight h-28 space-y-1 w-[50%] text-center  md:w-full">
          <h1 className="font-medium text-4xl pl-7 ">آرچ وِز</h1>
          <h1 className="font-normal text-2xl pl-4 ">(KEN CHIKU) </h1>
          <h1 className="font-extralight text-lg uppercase pl-5 ">
            Architecture
          </h1>
        </div>
        <div className="little quotes md:h-40 md:mt-28 flex flex-col md:justify-end  w-[60%] md:w-full ">
          <h1 className="uppercase text-3xl lg:text-6xl font-medium  tracking-tighter leading-8 md:leading-normal md:ml-32">
            Designs That Sustain Life
          </h1>
        </div>
      </div>

      <div className="h-full w-full md:w-[30%]   ">
        <div className=" md:translate-x-32  md:w-[65%] w-full pr-5 md:pr-0 mt-8 md:mt-2">
          <div className="bg-black/80 rounded-sm w-[0%] origin-left introImage h-48 md:h-32 "></div>
        </div>
        <div className="md:mt-28 text-left h-[50%] w-[95%] md:w-[60%] md:translate-x-32 mt-8  ">
          <p className="leading-[22px] text-left tracking-tight font-medium font-sans text-sm md:text-[16px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim iusto
            veniam provident veritatis quidem culpa, commodi ad unde cumque hic
            quod atque laudantium similique inventore fugiat et repellendus
            incidunt nam! Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Repellendus laboriosam quod veritatis accusamus quae.
          </p>
        </div>
        <div className="mx-auto flex md:justify-center w-full   ">
          <button className="  uppercase text-white  bg-[#9C7443] px-6 py-2 rounded-3xl">
            about us
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutIntro;
