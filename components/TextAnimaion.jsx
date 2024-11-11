"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const TextAnimaion = () => {
  const textRef = useRef(null);
  console.log(document.querySelectorAll(".anima"));

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: textRef.current,
        start: "10% 80%",
        end: "100% -80%",
        scrub: 1,
      },
    });
    tl.to(
      ".anima",
      {
        duration: 5,
        translateY: "300%",
        fontSize: "14vw",
      },
      "same"
    )
      .to(
        ".rrotate",
        {
          duration: 5,
          rotate: 720,
        },
        "same"
      )
      .to(
        ".lrotate",
        {
          duration: 5,
          rotate: -720,
        },
        "same"
      )
      .to(
        ".blur-effect",
        {
          filter: "blur(0px)",
          duration: 5,
        },
        "same"
      );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      gsap.killTweensOf(".anima");
    };
  });

  let heading = "the art of innovation";
  let singleChar = heading.split("");
  return (
    <div
      ref={textRef}
      className="uppercase text-[0px]   text-center leading-tight -space-y-12"
    >
      {/* create span tag for each character of my string the art of innovattion */}
      <div className="">
        <span className=" anima inline-block lrotate ">t</span>
        <span className=" anima inline-block rrotate">h</span>
        <span className=" anima inline-block blur-effect">e</span>
        <span className=" anima inline-block blur-effect">&nbsp;</span>
        <span className=" anima inline-block lrotate">a</span>
        <span className=" anima inline-block blur-effect">r</span>
        <span className=" anima inline-block rrotate">t</span>
        <span className=" anima inline-block blur-effect">&nbsp;</span>
        <span className=" anima inline-block lrotate">o</span>
        <span className=" anima inline-block rrotate">f</span>
      </div>

      <div className="">
        <span className=" anima inline-block blur-effect">i</span>
        <span className=" anima inline-block rrotate">n</span>
        <span className=" anima inline-block blur-effect">n</span>
        <span className=" anima inline-block lrotate">o</span>
        <span className=" anima inline-block blur-effect">v</span>
        <span className=" anima inline-block lrotate">a</span>
        <span className=" anima inline-block blur-effect">t</span>
        <span className=" anima inline-block rrotate">i</span>
        <span className=" anima inline-block lrotate">o</span>
        <span className=" anima inline-block blur-effect">n</span>
      </div>
    </div>
  );
};

export default TextAnimaion;
