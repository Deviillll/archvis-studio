"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

const data = [
  {
    title1: "shizuoka",
    title2: "gardens",
    bg: "https://cdn.prod.website-files.com/66de71cc2bd368e4376f06b0/66de987342ebf9febb7dc065_Sizhuka_Img_01.webp",
  },
  {
    title1: "hammad",
    title2: "Penthouse",
    bg: "https://cdn.prod.website-files.com/66de71cc2bd368e4376f06b0/66de9995ab37d10f78ca6527_kawa_loft_image_05.webp",
  },
  {
    title1: "tokyo",
    title2: "tower",
    bg: "https://cdn.prod.website-files.com/66de71cc2bd368e4376f06b0/66de9b4d4c97a9b2d89c0973_Kensei_img_01.webp",
  },
];

const Projects = () => {
  const projectsRef = useRef(null);

  useEffect(() => {
    const projects = projectsRef.current;
    const sections = gsap.utils.toArray(".project");

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: projects,
        pin: true,
        scrub: 0.5,
        snap: {
          snapTo: (value) =>
            Math.round(value / (1 / (sections.length - 1))) *
            (1 / (sections.length - 1)),
          duration: { min: 0.3, max: 0.6 },
          ease: "circ.inOut",
        },
        end: () => "+=" + projects.offsetWidth,
      },
    });
  }, []);

  return (
    <div className="w-screen overflow-x-hidden ">
      <div
        ref={projectsRef}
        className="w-[300vw] h-[100vh] bg-[#171717] flex overflow-hidden"
      >
        {data.map((item, index) => (
          <div key={item.title1} className="w-screen h-screen relative">
            <div
              className={`w-screen h-full bg-center bg-cover text-[#FBF0DA] flex flex-col md:flex-row justify-center md:justify-between items-center px-2 project relative`}
              style={{ backgroundImage: `url(${item.bg})` }}
            >
              <div className="bg-black/60 absolute top-0 left-0 w-full h-full -z-10"></div>
              <div className="w-full md:w-[70vw] flex flex-col justify-around h-[22%] md:h-[50%] px-4 md:px-0">
                <div>
                  <h1 className="capitalize font-thin">archvis studio</h1>
                </div>
                <div className="uppercase text-5xl md:text-[8vw] ml-2 md:ml-5 -space-y-1">
                  <h1>{item.title1}</h1>
                  <h1>{item.title2}</h1>
                </div>
              </div>
              <div className="w-full md:w-[30vw] mt-4 md:mt-0 flex flex-col justify-between px-4 md:px-0 md:items-center h-[20%] md:h-[60%]">
                <div>
                  <h1 className="text-2xl md:text-3xl">{`${index + 1} / 3`}</h1>
                </div>
                <div>
                  <Link
                    className="px-6 py-2 rounded-3xl border-2 border-white uppercase"
                    href="#"
                  >
                    see projects
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
