"use client";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const GetInTouch = () => {
  const imageRef = useRef(null);
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: imageRef.current,
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
  }),
    [];

  return (
    <div
      ref={imageRef}
      className="h-screen w-screen flex flex-col  justify-between md:flex-row md:justify-between pl-5 my-20 "
    >
      <div className="h-full w-full md:w-[30%]  flex flex-col  justify-between  ">
        <div className=" mt-2 tracking-tight h-28 space-y-1 w-[50%]   md:w-full">
          <h1 className="font-medium text-4xl pl-6 ">آرچ وِز</h1>
          <h1 className="font-normal text-2xl pl-2 ">(KEN CHIKU) </h1>
          <h1 className="font-extralight text-lg uppercase pl-2 ">
            Architecture
          </h1>
        </div>

        <div className="  md:w-[65%] w-full pr-5 md:pr-0 mt-8 md:mt-0 pb-12">
          <div className="bg-black/80 rounded-sm w-[0%] origin-left introImage h-48  "></div>
        </div>
      </div>

      <div className="h-full w-full md:w-[27%] flex flex-col justify-center  ">
        <div className="little quotes md:h-40 md:mt-2 flex flex-col md:justify-between  w-[60%] md:w-full ">
          <h1 className="uppercase text-3xl lg:text-6xl font-medium  tracking-tighter leading-8 md:leading-normal md:ml-2">
            Craft Your Vision
          </h1>
        </div>
        <div className="md:mt-16 text-left h-[40%] w-[95%] md:w-[60%]    ">
          <p className="leading-[22px] text-left tracking-tight font-medium font-sans text-sm md:text-[16px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim iusto
            veniam provident veritatis quidem culpa, commodi ad unde cumque hic
            quod atque laudantium similmus quae.
          </p>
        </div>
        <div className=" flex md:justify-start w-full   ">
          <button className="  uppercase text-white  bg-[#9C7443] px-6 py-2 rounded-3xl">
            get in touch
          </button>
        </div>
      </div>
      <div className="h-full w-full  md:w-[40%] pr-5  mt-5">
        <div className="w-[0%] h-52 md:h-[98%] rounded-sm origin-left introImage bg-black/80  "></div>
      </div>
    </div>
  );
};

export default GetInTouch;
