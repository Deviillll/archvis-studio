"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const LoadingBar = () => {
  const lineRef = useRef(null);
  useEffect(() => {
    gsap.to(lineRef.current, {
      delay: 0.7,
      width: "100%",
      duration: 1,
      ease: "power3.inOut",
    });
  }, []);
  return (
    <div
      className="h-[.5px] z-10 w-0 bg-[#FBF0DA] mix-blend-difference absolute top-[90px] left-0"
      ref={lineRef}
    ></div>
  );
};

export default LoadingBar;
