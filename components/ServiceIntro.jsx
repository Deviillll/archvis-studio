"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ServiceIntro = () => {
  const container = useRef(null);
  const image = useRef(null);

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
    tl.from(".text3 h1", {
      y: 100,
      opacity: 0,
      duration: 1, // Slow down the animation
      ease: "power2.out",
    });
  }, []);

  return (
    <div
      className="w-screen h-screen flex flex-col py-10 justify-center items-center"
      ref={container}
    >
      <div className="w-full h-full flex justify-between items-center overflow-hidden">
        <div className="md:pl-28 md:mb-8 tracking-tighter h-32 space-y-1 w-[23%]">
          <h1 className="font-medium text-4xl pl-5">آرچ وِز</h1>
          <h1 className="font-normal text-2xl uppercase">(Fu ku mu)</h1>
          <h1 className="font-extralight text-lg uppercase pl-3">Tradition</h1>
        </div>
        <div className="uppercase text-[12.5vw] flex-1 text1">
          <h1 className="tracking-tight">Precision</h1>
        </div>
      </div>
      <div className="w-full h-full uppercase flex items-center justify-center gap-x-16 text-[12.5vw] overflow-hidden">
        <div className="text2">
          <h1 className="tracking-tighter">IN</h1>
        </div>
        <div className="w-72 h-[120px]  mb-4 origin-left">
          <div ref={image} className="w-full h-full image bg-black/80"></div>
        </div>
        <div className="text2">
          <h1 className="tracking-tighter">Every</h1>
        </div>
      </div>
      <div className="w-full h-full flex justify-center gap-x-20 items-center overflow-hidden">
        <div className="text-[12.5vw] text3">
          <h1 className="uppercase tracking-tighter">design</h1>
        </div>
        <div className="w-[25%]">
          <div>
            <p className="tracking-tight font-serif font-normal text-sm md:text-[18px]">
              Each Saisei project blends custom solutions with sustainable
              innovation, ensuring our designs meet your exact needs while
              respecting the planet.
            </p>
          </div>
          <div className="mx-auto w-full md:mt-6">
            <button className="uppercase text-white bg-[#9C7443] px-6 py-2 rounded-3xl">
              our service
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceIntro;
