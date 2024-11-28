"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Projects from "./Projects";
gsap.registerPlugin(ScrollTrigger);

const TextAnimaion = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const mm = gsap.matchMedia();
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: textRef.current,
        start: "10% 80%",
        end: "100% -80%",
        scrub: 1,
       
      },
    });
    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: textRef.current,
        start: "40% 80%",
        end: "100% -130%",
        scrub: 1,
       
      },
    });
    mm.add("(min-width: 768px)", () => {
      tl.to(
        textRef.current,
        {
          duration: 5,
          translateY: "200%",
          fontSize: "14vw",
        },
        "same"
      )
        // Rotation animations (for .rrotate and .lrotate)
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
        // Delay blur effect to finish earlier (3s instead of 5s)
        .to(
          ".blur-effect",
          {
            filter: "blur(0px)",
            duration: 2, // Blur completes earlier
          },
          "same"
        )
        // Rotation for elements with .rotate-on-axis
        .to(
          ".rotate-on-axis",
          {
            duration: 5,
            rotationX: 720,
          },
          "same"
        )
        .to(
          ".rotate-on-axis-",
          {
            duration: 5,
            rotationX: -720,
          },
          "same"
        );
    });
    mm.add("(max-width: 767px)", () => {
      tl2
        .to(
          textRef.current,
          {
            duration: 8,
            translateY: "130vh",
            fontSize: "14vw",
          },
          "same"
        )
        // Rotation animations (for .rrotate and .lrotate)
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
        // Delay blur effect to finish earlier (3s instead of 5s)
        .to(
          ".blur-effect",
          {
            filter: "blur(0px)",
            duration: 2, // Blur completes earlier
          },
          "same"
        )
        // Rotation for elements with .rotate-on-axis
        .to(
          ".rotate-on-axis",
          {
            duration: 5,
            rotationX: 720,
          },
          "same"
        )
        .to(
          ".rotate-on-axis-",
          {
            duration: 5,
            rotationX: -720,
          },
          "same"
        );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      gsap.killTweensOf(".anima");
    };
  });

  return (
    <div className="  ">
      <div
        ref={textRef}
        className="uppercase text-[0px] text-center leading-tight md:-space-y-12 -space-y-2  "
      >
        <div className="">
          <span className="anima inline-block blur-effect lrotate rotate-on-axis">
            t
          </span>
          <span className="anima inline-block blur-effect rrotate rotate-on-axis-">
            h
          </span>
          <span className="anima inline-block blur-effect rotate-on-axis-">
            e
          </span>
          <span className="anima inline-block blur-effect rotate-on-axis-">
            &nbsp;
          </span>
          <span className="anima inline-block blur-effect lrotate rotate-on-axis">
            a
          </span>
          <span className="anima inline-block blur-effect rotate-on-axis">
            r
          </span>
          <span className="anima inline-block blur-effect rrotate">t</span>
          <span className="anima inline-block blur-effect rotate-on-axis-">
            &nbsp;
          </span>
          <br className="md:hidden" />
          <span className="anima inline-block blur-effect lrotate rotate-on-axis">
            o
          </span>
          <span className="anima inline-block blur-effect rrotate">f</span>
        </div>

        <div>
          <span className="anima inline-block blur-effect rotate-on-axis">
            i
          </span>
          <span className="anima inline-block blur-effect rrotate">n</span>
          <span className="anima inline-block blur-effect rotate-on-axis-">
            n
          </span>
          <span className="anima inline-block blur-effect lrotate rotate-on-axis-">
            o
          </span>
          <span className="anima inline-block blur-effect rotate-on-axis-">
            v
          </span>
          <span className="anima inline-block blur-effect lrotate">a</span>
          <span className="anima inline-block blur-effect rotate-on-axis- lrotate">
            t
          </span>
          <span className="anima inline-block blur-effect rrotate rotate-on-axis">
            i
          </span>
          <span className="anima inline-block blur-effect lrotate rotate-on-axis-">
            o
          </span>
          <span className="anima inline-block blur-effect rotate-on-axis rrotate">
            n
          </span>
        </div>
      </div>
    </div>
  );
};

export default TextAnimaion;
