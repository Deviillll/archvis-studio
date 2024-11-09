"use client";
import React, { useEffect, useRef } from "react";
// Vendors
import "locomotive-scroll/dist/locomotive-scroll.css";

import LocomotiveScroll from "locomotive-scroll";
const LoadingText = () => {
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
  }, []);

  return (
    <div className="h-screen">
      <h2 data-scroll data-scroll-speed="0.2">
        What's up?
      </h2>
      <p data-scroll data-scroll-speed="0.8">
        😬
      </p>
    </div>
  );
};

export default LoadingText;
