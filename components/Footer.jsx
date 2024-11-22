"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Info from "./Info";

gsap.registerPlugin(ScrollTrigger);

const data = [
  { title: "home", link: "/" },
  { title: "about", link: "/about" },
  { title: "services", link: "/services" },
  { title: "projects", link: "/projects" },
  { title: "contact", link: "/contact" },
];

const Footer = () => {
  const linksRef = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".router",
        start: "top 60%",
        end: "bottom 40%",
        scrub: false,

        // markers: true,
      },
    });

    tl.from(linksRef.current, {
      opacity: 0,
      y: 20,
      stagger: 0.1,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  return (
    <div className="w-screen md:h-[150vh] bg-[#1E1005] text-[#FBF0DA]">
      <div className="w-full h-[40%] flex justify-between px-5 pt-16">
        <div className="w-full h-full">
          <div className="space-y-4">
            {data.map((item, index) => (
              <div
                key={item.title}
                className="flex gap-6 h-full items-center justify-start router"
                ref={(el) => (linksRef.current[index] = el)}
              >
                <span> ({index + 1})</span>
                <div className="relative group cursor-pointer">
                  <h1 className={`text-[2.5vw] uppercase route-link`}>
                    {item.title}
                  </h1>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full h-full">
          <div className="tracking-tighter h-full w-[50%] md:w-full flex flex-col justify-center items-center">
            <h1 className="font-medium text-[12vw] pl-7 route-link">
              (آرچ وِز)
            </h1>
          </div>
        </div>
      </div>

      <Info clas={"justify-end mt-6 "} />
      <hr className="bg-[#FBF0DA] w-screen mt-10" />
      <div className="w-full h-[15%] font-sans flex justify-between text-xs items-center px-10 text-[#FBF0DA]/90">
        <div className="text-[#FBF0DA]">
          ©24 ARCHVIS-STUDIO – All rights reserved{" "}
        </div>
        <div>Terms of Services </div>
        <div className="flex gap-x-8">
          <div>Privacy Policy</div>
          <div>Dev : Hammad</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
