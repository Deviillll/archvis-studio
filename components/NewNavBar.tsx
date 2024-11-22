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
  const [isAnimating, setIsAnimating] = useState(false); // For animation guard
  const lastScrollY = useRef(0);
  const linksRef = useRef([]);
  const containerParentRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    // Navbar scroll behavior
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
    const tl = gsap.timeline({
      onStart: () => setIsAnimating(true), // Disable interaction during animation
      onComplete: () => setIsAnimating(false),
    });

    if (open) {
      tl.fromTo(
        leftRef.current,
        { width: 0 },
        { width: "50%", duration: 1.5, ease: "expo.inOut" },
        "same"
      ).fromTo(
        rightRef.current,
        { width: 0 },
        { width: "50%", duration: 1.5, ease: "expo.inOut" },
        "same"
      );
      // .from(
      //   linksRef.current,
      //   {
      //     y: 80,
      //     stagger: 0.1,
      //     duration: 1,
      //     ease: "power4.out",
      //   },
      //   "same"
      // );
    } else {
      // tl.fromTo(
      //   linksRef.current,
      //   { y: 0 },
      //   {
      //     y: 80,
      //     stagger: 0.1,
      //     duration: 0.5,
      //     ease: "power4.in",
      //   },
      //   "close"
      // )
      tl.fromTo(
        leftRef.current,
        { width: "50%" },
        { width: 0, duration: 1.5, ease: "expo.inOut" },
        "close+=0.3"
      ).fromTo(
        rightRef.current,
        { width: "50%" },
        { width: 0, duration: 1.5, ease: "expo.inOut" },
        "close+=0.3"
      );
    }
  }, [open]);

  return (
    <div className="relative">
      {/* Navbar */}
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
              onClick={() => {
                if (!isAnimating) setOpen(true); // Prevent toggling during animation
              }}
            >
              <div className="h-[1px] w-8 bg-[#FBF0DA] line1"></div>
              <div className="h-[1px] w-8 bg-[#FBF0DA] line2"></div>
            </div>
          </div>
          <LoadingBar />
        </div>
      </div>

      {/* Parent Container */}
      <div
        ref={containerParentRef}
        className="w-screen h-screen fixed top-0 left-0 z-50 flex justify-between"
        style={{
          display: open || isAnimating ? "flex" : "none", // Keep visible during animations
          pointerEvents: open ? "auto" : "none", // Disable interaction when closed
        }}
      >
        {/* Left Div */}
        <div
          ref={leftRef}
          className="bg-[#FBF0DA] h-full flex flex-col justify-center origin-left"
        >
          <div>
            {data.map((item, index) => (
              <div
                key={item.title}
                className={`h-24 nav-link group route overflow-hidden nav-link-after`}
              >
                <div
                  ref={(el) => (linksRef.current[index] = el)}
                  className={`w-full h-full flex cursor-pointer justify-between relative z-30 items-center px-5 border-b border-[#1E1005]`}
                >
                  <div className="flex gap-6 justify-start h-full w-full items-center">
                    <span>({index + 1})</span>
                    <div>
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

        {/* Right Div */}
        <div
          ref={rightRef}
          className="bg-[#1E1005] text-[#FBF0DA] h-full origin-right relative"
        >
          <div>
            {open ? (
              <button
                className="absolute top-10 right-8 text-sm text-center font-medium uppercase px-3 py-[2px] bg-[#9C7443] rounded-2xl"
                onClick={() => setOpen(false)}
                disabled={isAnimating}
              >
                Close
              </button>
            ) : (
              <div
                className="space-y-2 cursor-pointer hamburger absolute top-[45px] right-10 flex flex-col h-24 justify-start items-center"
                onClick={() => {
                  if (!isAnimating) setOpen(true); // Prevent toggling during animation
                }}
              >
                <div className="h-[1px] w-8 bg-[#FBF0DA] line1"></div>
                <div className="h-[1px] w-8 bg-[#FBF0DA] line2"></div>
              </div>
            )}
          </div>
          <div className="w-full h-full">
            <div className="w-full h-[40%]">
              <div className="tracking-tighter h-full overflow-hidden w-full flex flex-col justify-center items-center">
                <h1 className="font-medium text-[8vw] pl-7 route-link">
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
    </div>
  );
};

export default Navbar;
