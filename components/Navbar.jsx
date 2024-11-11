"use client";
import React, { useEffect, useState } from "react";
import LoadingBar from "./LoadingBar";

const Navbar = () => {
  const [show, setShow] = useState(true);
  let lastScrollY = 0;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // Scrolling down
        setShow(false);
      } else {
        // Scrolling up
        setShow(true);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div
      className={`flex w-screen  text-[#FBF0DA] fixed z-50 mix-blend-difference px-5 items-center h-28  ease-in-out transition-transform duration-300 ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="text-[#FBF0DA] w-[70vw] md:w-[80vw] text-lg">ARCHVIS</div>
      <div className="flex md:justify-center justify-between space-x-10 md:space-x-24 w-[50vw] h-full items-center md:w-[20vw]">
        <div className="font-medium text-xs">EST - 2021</div>
        <div className="space-y-2">
          <div className="h-[1px] w-8 bg-[#FBF0DA]"></div>
          <div className="h-[1px] w-8 bg-[#FBF0DA]"></div>
        </div>
      </div>
      <LoadingBar />
    </div>
  );
};

export default Navbar;
