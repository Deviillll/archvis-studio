"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ServiceIntro = () => {
  const container = useRef(null);
  const image = useRef(null);
  const text3 = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "-20% center",
        end: "50% center",
        scrub: false,
        //markers: true,
        // Use markers to debug animation
      },
    });

    // Animation for the first big text
    tl.from(
      ".text1 h1",
      {
        y: 100,
        opacity: 0,
        duration: 1, // Slow down the animation
        ease: "power2.out",
      },
      "same"
    );

    // Animation for the second div image and texts
    tl.from(
      image.current,
      {
        width: 0,

        duration: 1, // Slow down the animation
        ease: "power3.out",
      },
      "same"
    ).from(
      ".text2 h1",
      {
        y: 100,
        opacity: 0,
        duration: 1, // Slow down the animation
        ease: "power2.out",
        stagger: 0.3,
      },
      "-=4.8" // Adjust the overlap for smoother transition
    );

    // Animation for the third big text
    tl.from(
      text3.current,
      {
        y: 100,
        opacity: 0,
        duration: 0.5, // Slow down the animation
        ease: "power2.out",
      },
      "same"
      // Adjust the overlap for smoother transition
    );
  }, []);

  return (
    <div
      className="w-screen h-screen flex flex-col  justify-center items-center  "
      ref={container}
    >
      <div className="w-full h-auto md:h-full flex flex-col md:flex-row justify-center md:justify-between items-center overflow-hidden ">
        <div className="md:pl-28 md:mb-8 tracking-tighter md:h-32  w-[23%] ">
          <h1 className="font-medium md:text-4xl md:pl-5 pl-7">آرچ وِز</h1>
          <h1 className="font-normal md:text-2xl uppercase">(Fu ku mu)</h1>
          <h1 className="font-extralight md:text-lg uppercase md:pl-3">Tradition</h1>
        </div>
        <div className="uppercase md:text-[12.5vw] text-[16vw] md:flex-1 text1 ">
          <h1 className="tracking-tight">Precision</h1>
        </div>
      </div>
      <div className="w-full  h-auto md:h-full uppercase flex items-center justify-center md:justify-center gap-x-4 md:gap-x-16 md:text-[12.5vw] text-[16vw] overflow-hidden ">
        <div className="text2 ">
          <h1 className="tracking-tighter">IN</h1>
        </div>
        <div className="md:w-72 md:h-[120px] w-24 h-12  mb-4 origin-left ">
          <div ref={image} className="w-full h-full image bg-black/80"></div>
        </div>
        <div className="text2  ">
          <h1 className="tracking-tighter">Every</h1>
        </div>
      </div>
      <div className="w-full h-auto md:h-full flex flex-col  md:flex-row justify-center gap-x-20 items-center overflow-hidden ">
        <div className="md:text-[12.5vw] text-[16vw] text3" ref={text3}>
          <h1 className="uppercase tracking-tighter">design</h1>
        </div>
        <div className="w-[75%] md:w-[25%] px-2 md:px-0 text-center md:text-left">
          <div>
            <p className="tracking-tight font-serif font-normal text-sm md:text-[18px]">
              Each Saisei project blends custom solutions with sustainable
              innovation, ensuring our designs meet your exact needs while
              respecting the planet.
            </p>
          </div>
          <div className="mx-auto w-full mt-10 md:mt-6">
            <button className="uppercase text-white bg-[#9C7443] md:px-6 px-4 md:py-2 py-1 rounded-3xl">
              our service
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceIntro;
