"use client";
import React, { useEffect } from "react";
import gsap from "gsap";
//import "./TextAnimation.css"; // External CSS for initial styles if needed

const TextAnimation = () => {
  useEffect(() => {
    const svgText = document.querySelector(".svg-heading text");

    // Step 1: Fade in from bottom with slight upward movement
    gsap.fromTo(
      svgText,
      { opacity: 0, y: 20 }, // Starts hidden and positioned lower
      {
        opacity: 1,
        y: 0, // Moves up to original position
        duration: 0.8,
        ease: "power3.out",
      }
    );

    // Step 2: Animate the outline (stroke-dashoffset) after fade-in
    gsap.fromTo(
      svgText,
      { strokeDashoffset: "100%" },
      {
        strokeDashoffset: "0%", // Reveals the outline
        delay: 0.8, // Delay until fade-in is done
        duration: 1,
        ease: "power3.out",
      }
    );

    // Step 3: Animate the fill color after outline is complete
    gsap.to(svgText, {
      fill: "#1E1005", // Final fill color
      stroke: "transparent", // Hide the stroke
      delay: 1.8, // Delay to match the outline animation end
      duration: 0.5,
      ease: "power3.inOut",
    });
  }, []);

  return (
    <svg
      width="500"
      height="100"
      viewBox="0 0 500 100"
      xmlns="http://www.w3.org/2000/svg"
      className="svg-heading"
    >
      <text
        x="10"
        y="50"
        fontSize="40"
        fontFamily="Arial, sans-serif"
        fill="transparent" // Initially transparent
        stroke="#ff69b4" // Outline color
        strokeWidth="1"
        strokeDasharray="100%"
        strokeDashoffset="100%"
      >
        Archvis Studio
      </text>
    </svg>
  );
};

export default TextAnimation;
