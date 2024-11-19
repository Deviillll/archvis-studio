"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
        trigger: ".route",
        start: "top 60%",
        end: "bottom 40%",
        scrub: false,

        //markers: true,
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
                className="flex gap-6 h-full items-center justify-start route"
                ref={(el) => (linksRef.current[index] = el)}
              >
                <span> ({index + 1})</span>
                <div className="relative group cursor-pointer">
                  <h1 className={`text-[2.5vw] uppercase route-link`}>
                    {item.title}
                  </h1>
                  {/* <span className="group-hover:w-1/2 transition-all bg-red-300 duration-300 h-full  absolute  "></span> */}
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

      <div className="w-full h-[45%] flex justify-end">
        <div className="w-[60%] h-full flex justify-evenly">
          <div className="space-y-12">
            <div>
              <h1 className="uppercase">email</h1>
              <h1 className="text-xs ">abcd@pk.com</h1>
            </div>
            <div>
              <h1>Phone</h1>
              <h1 className="text-xs ">+92 123456789</h1>
            </div>
            <div className="uppercase space-y-2">
              <h1 className="uppercase">Social</h1>
              <h1 className="text-xs ">instagram</h1>
              <h1 className="text-xs ">twitter</h1>
              <h1 className="text-xs ">whatsapp</h1>
            </div>
          </div>

          <div className="space-y-12 capitalize">
            <div>
              <h1 className="uppercase ">office</h1>
              <h1 className="text-xs ">lahore dha</h1>
              <h1 className="text-xs ">buliding x block x</h1>
            </div>
            <div className="text-[#FBF0DA]/70 text-xs">
              <h1>Monday-Friday</h1>
              <h1 className="route-link">9:00 am-6:00 pm</h1>
            </div>
            <div className="text-[#FBF0DA]/70 text-xs">
              <h1>139.8107° E</h1>
              <h1>35.7100° N</h1>
            </div>
          </div>
        </div>
      </div>
      <hr className="bg-[#FBF0DA] w-screen" />
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
