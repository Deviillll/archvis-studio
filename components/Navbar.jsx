"use client";
import React, { useEffect, useRef, useState } from "react";
import LoadingBar from "./LoadingBar";
import gsap from "gsap";
import Info from "./Info";

const data = [
  { title: "home", link: "/", logo: "آ" },
  { title: "about", link: "/about", logo: "ر" },
  { title: "services", link: "/services", logo: "چ" },
  { title: "projects", link: "/projects", logo: "وِ" },
  { title: "contact", link: "/contact", logo: "ز" },
];

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [open, setOpen] = useState(false);
  const [displayMenu, setDisplayMenu] = useState(false);
  const lastScrollY = useRef(0);
  const linksRef = useRef([]);
  const containerRef = useRef([]);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    gsap.from(".line1", {
      delay: 1,
      duration: 1,
      width: 0,
      ease: "circ.inOut",
    });
    gsap.from(".line2", {
      delay: 1.1,
      duration: 1,
      width: 0,
      opacity: 0,
      ease: "circ.inOut",
    });

    const handleScroll = () => {
      if (window.scrollY > lastScrollY.current) {
        setShow(false);
      } else {
        setShow(true);
      }
      lastScrollY.current = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  

  useEffect(() => {
    const mm=gsap.matchMedia()

    mm.add("(min-width: 768px)",()=>{
        if (open) {
          setDisplayMenu(true);
          const tl = gsap.timeline();
      tl.fromTo(
        leftRef.current,
        { width: 0 },
        { width: "50%", duration: 2, ease: "expo.inOut" },
        "same"
      )
        .fromTo(
          rightRef.current,
          { width: 0 },
          { width: "50%", duration: 2, ease: "expo.inOut" },
          "same"
        )
        .from(
          linksRef.current,
          {
            delay: 1,
            y: 80,
            stagger: 0.1,
            duration: 1,
            ease: "sine.inOut",
          },
          "same"
        );
    } else {
      const tl = gsap.timeline({
        onComplete: () => {
          setTimeout(() => setDisplayMenu(false), 1500);
        },
      });
      tl.fromTo(
        leftRef.current,
        { width: "50%" },
        { width: 0, duration: 1.5, ease: "expo.inOut" },
        "same"
      ).fromTo(
        rightRef.current,
        { width: "50%" },
        { width: 0, duration: 1.5, ease: "expo.inOut" },
        "same"
      );
        

        }
      })
      mm.add("(max-width: 767px)",()=>{
        if (open) {
          setDisplayMenu(true);
          const tl = gsap.timeline();
      tl.fromTo(
        leftRef.current,
        { width: 0 },
        { width: "100%", duration: 2, ease: "expo.inOut" },
        "same"
      )
        .fromTo(
          rightRef.current,
          { width: 0 },
          { width: "100%", duration: 2, ease: "expo.inOut" },
          "same"
        )
        .from(
          linksRef.current,
          {
            delay: 1,
            y: 80,
            stagger: 0.1,
            duration: 1,
            ease: "sine.inOut",
          },
          "same"
        );
    } else {
      const tl = gsap.timeline({
        onComplete: () => {
          setDisplayMenu(false)
        },
      });
      tl.fromTo(
        leftRef.current,
        { width: "100%" },
        { width: 0, duration: 1.5, ease: "expo.inOut" },
        "same"
      ).fromTo(
        rightRef.current,
        { width: "100%" },
        { width: 0, duration: 1.5, ease: "expo.inOut" },
        "same"
      );
        

        }
      })
      
  }, [open]);

  return (
    <nav className="relative">
      <div>
        <div
          className={`flex w-screen text-[#FBF0DA] fixed z-50 mix-blend-difference px-5 items-center h-28 ease-in-out transition-transform duration-300 ${
            show ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="text-[#FBF0DA] w-[70vw] md:w-[80vw] text-lg">
            ARCHVIS
          </div>
          <div className="flex md:justify-center justify-between space-x-10 md:space-x-12 w-[50vw] h-full items-center md:w-[20vw]">
            <div className="font-medium text-xs">EST - 2021</div>
            <div
              className="space-y-2 cursor-pointer hamburger absolute top-[45px] right-10 flex flex-col h-24 justify-start items-center"
              onClick={() => setOpen((prev) => !prev)}
            >
              <div className="h-[1px] w-8 bg-[#FBF0DA] line1"></div>
              <div className="h-[1px] w-8 bg-[#FBF0DA] line2"></div>
            </div>
          </div>
          <LoadingBar />
        </div>
      </div>
      {/* left and right divs */}
      <div
        className={`w-screen h-screen overflow-hidden fixed top-0 left-0 z-50 flex flex-col md:flex-row  justify-between ${
          displayMenu ? "visible" : "invisible"
        }`}
      >
        <div
          ref={leftRef}
          className="bg-[#FBF0DA] h-1/2 md:h-full flex flex-col justify-between  md:justify-center origin-left"
        >
          <div>
            {data.map((item, index) => (
              <div
                ref={(el) => (containerRef.current[index] = el)}
                key={item.title}
                className={`md:h-24 nav-link group route overflow-hidden nav-link-after`}
              >
                <div
                  ref={(el) => (linksRef.current[index] = el)}
                  className={`w-full h-full flex cursor-pointer justify-between relative z-30 items-center px-5 border-b border-[#1E1005]`}
                >
                  <div className="flex gap-6 justify-start h-full w-full items-center">
                    <span>({index + 1})</span>
                    <div className="">
                      <h1
                        className={`text-[4vw] uppercase group-hover:translate-x-5 transition-transform duration-300 ease-in-out`}
                      >
                        {item.title}
                      </h1>
                    </div>
                  </div>
                  <div className="bg-[#9C7443] w-[55px] h-[50px] group-hover:bg-transparent transition-colors ease-in-out duration-300 rounded-[50%]">
                    <h1 className="text-center text-2xl font-medium flex items-center justify-center w-full h-full">
                      {item.logo}
                    </h1>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          ref={rightRef}
          className="bg-[#1E1005] text-[#FBF0DA]  h-full origin-right relative overflow-hidden "
        >
          <div className="translate-y-8 translate-x-[80%]">
            <button
              className=" text-sm text-center font-medium uppercase px-3 py-[2px] bg-[#9C7443] rounded-2xl"
              onClick={() => setOpen((prev) => !prev)}
            >
              Close
            </button>
          </div>
          <div className="w-full h-full ">
            <div className="w-full h-[40%] ">
              <div className="tracking-tighter h-full  w-full flex flex-col justify-center items-center">
                <h1 className="font-medium text-[20vw] md:text-[8vw] pl-7 route-link">
                  (آرچ وِز)
                </h1>
              </div>
            </div>
            <div className="w-full h-[60%]">
              <Info clas={"justify-center"} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
