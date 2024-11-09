"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const TextOne = () => {
  const svgRef = useRef(null);
  let mm = gsap.matchMedia();

  useEffect(() => {
    const timeline = gsap.timeline();

    if (svgRef.current) {
      const paths = svgRef.current.querySelectorAll("path");

      timeline
        .set(paths, {
          strokeDasharray: 900,
          strokeDashoffset: 900,
          fill: "none",
        })
        .to(
          paths,
          {
            strokeDashoffset: 50,
            duration: 2,
            ease: "power3.inOut",

            stagger: 0.4,
          },
          "same"
        )
        .to(
          paths,
          {
            delay: 0.9,
            duration: 3,
            ease: "expo.out",
            fill: "#FBF0DA",
          },
          "same"
        );
    }
  }, []);
  return (
    <div>
      <svg
        className=" svg "
        ref={svgRef}
        width="1200"
        height="150.502"
        viewBox="0 0 842.701 73.502"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          className="text-center"
          id="svgGroup"
          strokeLinecap="round"
          fillRule="evenodd"
          fontSize="12pt"
          stroke="#FBF0DA"
          strokeWidth="0.20mm"
          fill="#FFFFFF00"
        >
          <path
            d="M 0 77.003 L 0 76.417 Q 4.785 75.489 7.666 73.121 A 11.039 11.039 0 0 0 9.53 71.103 Q 11.301 68.686 12.793 64.6 L 33.203 8.79 A 8.88 8.88 0 0 0 33.605 7.32 Q 34.11 4.495 32.368 2.204 A 8.701 8.701 0 0 0 31.592 1.319 L 44.287 1.319 L 68.115 64.893 Q 70.016 69.877 71.971 72.321 A 10.393 10.393 0 0 0 72.583 73.023 Q 74.854 75.391 79.199 76.319 L 79.199 77.003 L 47.51 77.003 L 47.51 76.417 Q 54.004 75.489 55.688 73.023 A 4.375 4.375 0 0 0 56.338 71.464 Q 56.856 69.073 55.469 65.089 L 50.391 50.196 L 20.605 50.196 L 15.381 64.796 A 39.62 39.62 0 0 0 14.767 66.667 Q 14.228 68.474 14.06 69.808 A 11.184 11.184 0 0 0 14.038 69.996 A 7.477 7.477 0 0 0 13.997 70.588 Q 13.975 71.368 14.134 72.031 A 4.034 4.034 0 0 0 14.697 73.341 A 5.057 5.057 0 0 0 16.367 74.894 A 6.698 6.698 0 0 0 17.285 75.343 Q 18.829 75.96 21.488 76.418 A 44.775 44.775 0 0 0 22.07 76.514 L 22.07 77.003 L 0 77.003 Z M 35.791 7.911 L 21.289 48.292 L 49.707 48.292 L 35.791 7.911 Z"
            id="0"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M 111.475 77.003 L 81.738 77.003 L 81.738 76.319 A 31.93 31.93 0 0 0 83.45 76.046 Q 85.202 75.715 86.377 75.245 Q 88.086 74.561 89.038 72.974 A 9.22 9.22 0 0 0 90.092 70.348 A 11.204 11.204 0 0 0 90.283 69.337 Q 90.576 67.286 90.576 63.624 L 90.576 14.698 A 94.969 94.969 0 0 0 90.559 12.858 Q 90.521 10.874 90.394 9.486 A 22.325 22.325 0 0 0 90.308 8.692 A 9.525 9.525 0 0 0 89.856 6.739 A 7.506 7.506 0 0 0 89.038 5.079 A 5.206 5.206 0 0 0 86.401 2.979 Q 84.924 2.45 82.311 2.08 A 46.961 46.961 0 0 0 81.738 2.003 L 81.738 1.319 L 112.061 1.319 A 98.851 98.851 0 0 1 116.788 1.427 A 77.141 77.141 0 0 1 120.166 1.661 A 55.974 55.974 0 0 1 127.344 2.784 A 28.696 28.696 0 0 1 130.597 3.712 A 21.633 21.633 0 0 1 133.423 4.932 Q 136.035 6.3 138.013 8.204 A 12.188 12.188 0 0 1 140.815 12.357 A 14.241 14.241 0 0 1 141.016 12.867 Q 142.041 15.626 142.041 19.093 A 19.621 19.621 0 0 1 141.606 23.317 A 15.273 15.273 0 0 1 140.186 27.222 A 14.617 14.617 0 0 1 134.937 32.838 A 27.569 27.569 0 0 1 128.89 35.645 A 31.775 31.775 0 0 1 127.344 36.109 A 41.654 41.654 0 0 1 122.579 37.101 A 55.787 55.787 0 0 1 117.871 37.598 L 148.242 76.417 L 148.242 77.003 L 134.57 77.003 L 108.35 38.087 L 101.758 38.087 L 101.758 63.624 A 71.276 71.276 0 0 0 101.778 65.354 Q 101.837 67.799 102.075 69.337 A 9.437 9.437 0 0 0 102.807 71.829 A 8.404 8.404 0 0 0 103.442 72.974 A 5.778 5.778 0 0 0 106.348 75.245 Q 108.118 75.897 111.179 76.283 A 45.998 45.998 0 0 0 111.475 76.319 L 111.475 77.003 Z M 101.758 3.126 L 101.758 36.28 L 107.666 36.28 A 48.615 48.615 0 0 0 112.112 36.085 A 39.742 39.742 0 0 0 114.673 35.767 A 26.672 26.672 0 0 0 120.923 33.985 A 19.467 19.467 0 0 0 124.16 32.258 A 16.108 16.108 0 0 0 126.05 30.787 A 12.828 12.828 0 0 0 128.649 27.459 A 15.929 15.929 0 0 0 129.419 25.855 A 16.024 16.024 0 0 0 130.459 21.988 A 20.982 20.982 0 0 0 130.664 18.995 A 19.252 19.252 0 0 0 130.342 15.383 A 13.976 13.976 0 0 0 128.979 11.427 A 12.227 12.227 0 0 0 124.292 6.495 A 22.808 22.808 0 0 0 117.924 3.983 A 25.47 25.47 0 0 0 117.7 3.931 A 32.505 32.505 0 0 0 113.423 3.28 A 41.841 41.841 0 0 0 109.766 3.126 L 101.758 3.126 Z"
            id="1"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M 223.584 26.905 L 212.842 26.905 A 45.517 45.517 0 0 0 211.16 20.502 A 38.379 38.379 0 0 0 209.766 17.017 A 32.096 32.096 0 0 0 206.347 11.204 A 28.334 28.334 0 0 0 204.712 9.205 A 20.764 20.764 0 0 0 197.559 4.029 Q 193.408 2.198 188.477 2.198 A 23.855 23.855 0 0 0 179.889 3.725 A 22.519 22.519 0 0 0 177.075 5.03 Q 171.924 7.862 168.555 12.696 A 36.331 36.331 0 0 0 164.494 20.414 A 43.609 43.609 0 0 0 163.33 23.853 A 46.809 46.809 0 0 0 161.486 36.113 A 52.673 52.673 0 0 0 161.475 37.208 A 54.101 54.101 0 0 0 162.12 45.724 A 44.619 44.619 0 0 0 163.306 51.075 A 35.847 35.847 0 0 0 166.373 58.557 A 30.977 30.977 0 0 0 168.726 62.183 A 24.359 24.359 0 0 0 177.672 69.46 A 28.436 28.436 0 0 0 178.027 69.63 A 28.039 28.039 0 0 0 186.219 71.998 A 35.847 35.847 0 0 0 191.064 72.315 A 35.633 35.633 0 0 0 200.771 71.056 A 27.256 27.256 0 0 0 212.183 64.649 A 32.26 32.26 0 0 0 220.274 52.305 A 45.32 45.32 0 0 0 222.559 43.604 L 224.17 43.604 A 53.928 53.928 0 0 1 222.121 52.704 A 45.597 45.597 0 0 1 220.215 57.642 A 38.08 38.08 0 0 1 214.137 67.114 A 35.537 35.537 0 0 1 212.744 68.604 A 30.873 30.873 0 0 1 203.198 75.114 A 36.088 36.088 0 0 1 201.587 75.782 A 37.865 37.865 0 0 1 191.546 78.109 A 46.385 46.385 0 0 1 187.061 78.321 A 44.072 44.072 0 0 1 177.232 77.262 A 37.18 37.18 0 0 1 171.143 75.318 A 35.326 35.326 0 0 1 163.301 70.842 A 30.614 30.614 0 0 1 159.229 67.115 A 36.269 36.269 0 0 1 152.258 55.755 A 41.475 41.475 0 0 1 151.929 54.884 A 43.055 43.055 0 0 1 149.405 41.794 A 49.477 49.477 0 0 1 149.365 39.796 A 45.477 45.477 0 0 1 150.798 28.179 A 38.214 38.214 0 0 1 154.443 19.141 A 35.109 35.109 0 0 1 168.384 5.25 A 39.68 39.68 0 0 1 184.284 0.562 A 48.293 48.293 0 0 1 188.379 0.391 A 42.223 42.223 0 0 1 199.842 1.884 A 34.043 34.043 0 0 1 210.962 7.301 A 32.541 32.541 0 0 1 222.004 21.986 A 42.828 42.828 0 0 1 223.584 26.905 Z"
            id="2"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M 258.057 77.003 L 229.248 77.003 L 229.248 76.319 A 31.93 31.93 0 0 0 230.96 76.046 Q 232.712 75.715 233.887 75.245 Q 235.596 74.561 236.548 72.974 A 9.22 9.22 0 0 0 237.602 70.348 A 11.204 11.204 0 0 0 237.793 69.337 Q 238.086 67.286 238.086 63.624 L 238.086 14.698 A 94.969 94.969 0 0 0 238.069 12.858 Q 238.031 10.874 237.903 9.486 A 22.325 22.325 0 0 0 237.817 8.692 A 9.525 9.525 0 0 0 237.366 6.739 A 7.506 7.506 0 0 0 236.548 5.079 A 5.206 5.206 0 0 0 233.911 2.979 Q 232.434 2.45 229.82 2.08 A 46.961 46.961 0 0 0 229.248 2.003 L 229.248 1.319 L 258.057 1.319 L 258.057 2.003 Q 256.609 2.179 255.519 2.407 A 16.833 16.833 0 0 0 254.736 2.589 Q 253.418 2.93 252.368 3.565 A 6.352 6.352 0 0 0 251.543 4.153 Q 251.103 4.527 250.798 4.947 A 3.901 3.901 0 0 0 250.757 5.006 A 4.598 4.598 0 0 0 250.367 5.694 Q 250.059 6.355 249.829 7.276 Q 249.463 8.741 249.365 10.401 Q 249.278 11.886 249.269 14.153 A 134.177 134.177 0 0 0 249.268 14.698 L 249.268 35.987 L 285.889 35.987 L 285.889 14.698 A 94.969 94.969 0 0 0 285.872 12.858 Q 285.833 10.874 285.706 9.486 A 22.325 22.325 0 0 0 285.62 8.692 A 9.525 9.525 0 0 0 285.168 6.739 A 7.506 7.506 0 0 0 284.351 5.079 A 5.206 5.206 0 0 0 281.714 2.979 Q 280.236 2.45 277.623 2.08 A 46.961 46.961 0 0 0 277.051 2.003 L 277.051 1.319 L 305.762 1.319 L 305.762 2.003 Q 304.314 2.179 303.224 2.407 A 16.833 16.833 0 0 0 302.441 2.589 Q 301.123 2.93 300.073 3.565 A 6.352 6.352 0 0 0 299.248 4.153 Q 298.808 4.527 298.503 4.947 A 3.901 3.901 0 0 0 298.462 5.006 A 4.598 4.598 0 0 0 298.072 5.694 Q 297.764 6.355 297.534 7.276 Q 297.168 8.741 297.07 10.401 Q 296.983 11.886 296.974 14.153 A 134.177 134.177 0 0 0 296.973 14.698 L 296.973 63.624 A 84.228 84.228 0 0 0 296.989 65.354 Q 297.028 67.226 297.155 68.566 A 21.813 21.813 0 0 0 297.241 69.337 A 10.051 10.051 0 0 0 297.801 71.608 A 8.55 8.55 0 0 0 298.462 72.974 Q 299.414 74.561 301.123 75.245 A 12.342 12.342 0 0 0 302.442 75.68 Q 303.141 75.871 303.971 76.031 A 31.616 31.616 0 0 0 305.762 76.319 L 305.762 77.003 L 277.051 77.003 L 277.051 76.319 A 31.93 31.93 0 0 0 278.763 76.046 Q 280.515 75.715 281.689 75.245 Q 283.398 74.561 284.351 72.974 A 9.22 9.22 0 0 0 285.404 70.348 A 11.204 11.204 0 0 0 285.596 69.337 Q 285.889 67.286 285.889 63.624 L 285.889 37.891 L 249.268 37.891 L 249.268 63.624 A 84.228 84.228 0 0 0 249.284 65.354 Q 249.323 67.226 249.45 68.566 A 21.813 21.813 0 0 0 249.536 69.337 A 10.051 10.051 0 0 0 250.096 71.608 A 8.55 8.55 0 0 0 250.757 72.974 Q 251.709 74.561 253.418 75.245 A 12.342 12.342 0 0 0 254.737 75.68 Q 255.436 75.871 256.265 76.031 A 31.616 31.616 0 0 0 258.057 76.319 L 258.057 77.003 Z"
            id="3"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M 340.137 77.003 L 316.553 13.721 A 77.598 77.598 0 0 0 315.413 10.783 Q 313.751 6.763 312.378 5.079 A 7.923 7.923 0 0 0 309.858 3.069 Q 308.546 2.385 306.836 2.003 L 306.836 1.319 L 335.938 1.319 L 335.938 2.003 A 30.288 30.288 0 0 0 334.39 2.184 Q 333.593 2.299 332.918 2.449 A 12.42 12.42 0 0 0 331.689 2.784 Q 330.461 3.194 329.643 3.759 A 4.859 4.859 0 0 0 329.175 4.127 Q 328.271 4.932 328.149 6.324 Q 328.027 7.716 328.32 9.303 Q 328.613 10.889 329.443 13.38 L 347.949 67.725 L 367.627 13.526 A 42.732 42.732 0 0 0 368.282 11.494 Q 369.625 6.914 368.827 5.003 A 2.711 2.711 0 0 0 368.75 4.835 A 3.397 3.397 0 0 0 367.535 3.539 Q 365.8 2.396 362.061 2.003 L 362.061 1.319 L 380.029 1.319 L 380.029 2.003 A 11.618 11.618 0 0 0 377.627 2.638 Q 376.055 3.254 374.965 4.319 A 7.029 7.029 0 0 0 374.487 4.835 A 11.271 11.271 0 0 0 373.512 6.232 Q 372.064 8.63 370.328 13.285 A 98.162 98.162 0 0 0 370.166 13.721 L 349.219 70.606 A 23.391 23.391 0 0 0 348.846 71.793 Q 348.497 73.028 348.413 73.951 Q 348.291 75.294 348.535 77.003 L 340.137 77.003 Z"
            id="4"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M 409.912 77.003 L 381.104 77.003 L 381.104 76.319 A 31.93 31.93 0 0 0 382.815 76.046 Q 384.567 75.715 385.742 75.245 Q 387.451 74.561 388.403 72.974 A 9.22 9.22 0 0 0 389.457 70.348 A 11.204 11.204 0 0 0 389.648 69.337 Q 389.941 67.286 389.941 63.624 L 389.941 14.698 A 94.969 94.969 0 0 0 389.925 12.858 Q 389.886 10.874 389.759 9.486 A 22.325 22.325 0 0 0 389.673 8.692 A 9.525 9.525 0 0 0 389.221 6.739 A 7.506 7.506 0 0 0 388.403 5.079 A 5.206 5.206 0 0 0 385.767 2.979 Q 384.289 2.45 381.676 2.08 A 46.961 46.961 0 0 0 381.104 2.003 L 381.104 1.319 L 409.912 1.319 L 409.912 2.003 Q 408.464 2.179 407.374 2.407 A 16.833 16.833 0 0 0 406.592 2.589 Q 405.273 2.93 404.224 3.565 A 6.352 6.352 0 0 0 403.399 4.153 Q 402.958 4.527 402.654 4.947 A 3.901 3.901 0 0 0 402.612 5.006 A 4.598 4.598 0 0 0 402.222 5.694 Q 401.915 6.355 401.685 7.276 Q 401.318 8.741 401.221 10.401 Q 401.133 11.886 401.124 14.153 A 134.177 134.177 0 0 0 401.123 14.698 L 401.123 63.624 A 84.228 84.228 0 0 0 401.14 65.354 Q 401.178 67.226 401.305 68.566 A 21.813 21.813 0 0 0 401.392 69.337 A 10.051 10.051 0 0 0 401.952 71.608 A 8.55 8.55 0 0 0 402.612 72.974 Q 403.564 74.561 405.273 75.245 A 12.342 12.342 0 0 0 406.593 75.68 Q 407.291 75.871 408.121 76.031 A 31.616 31.616 0 0 0 409.912 76.319 L 409.912 77.003 Z"
            id="5"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M 414.893 53.126 L 425.391 53.126 A 47.405 47.405 0 0 0 426.218 58.553 A 37.864 37.864 0 0 0 427.246 62.379 A 28.525 28.525 0 0 0 429.83 68.119 A 25.493 25.493 0 0 0 430.957 69.849 A 16.337 16.337 0 0 0 436.938 75.001 A 17.397 17.397 0 0 0 442.685 76.735 A 21.752 21.752 0 0 0 445.215 76.905 A 19.822 19.822 0 0 0 449.871 76.387 A 14.009 14.009 0 0 0 456.03 73.219 A 12.225 12.225 0 0 0 459.958 65.956 A 17.587 17.587 0 0 0 460.205 63.087 A 13.012 13.012 0 0 0 459.692 59.425 Q 459.18 57.667 458.521 56.324 A 7.828 7.828 0 0 0 457.896 55.283 Q 457.266 54.386 456.274 53.394 A 70.019 70.019 0 0 0 455.139 52.283 Q 454.239 51.423 453.491 50.782 A 17.773 17.773 0 0 0 452.708 50.153 Q 451.567 49.283 449.707 48.072 A 222.474 222.474 0 0 0 448.473 47.274 Q 446.958 46.302 445.839 45.625 A 66.69 66.69 0 0 0 445.483 45.411 A 657.43 657.43 0 0 0 444.551 44.855 Q 442.981 43.922 440.381 42.384 Q 435.791 39.698 433.545 38.306 A 49.257 49.257 0 0 1 431.871 37.217 Q 431.01 36.634 430.031 35.929 A 122.05 122.05 0 0 1 427.954 34.4 A 41.076 41.076 0 0 1 426.038 32.874 Q 424.187 31.3 423.121 29.932 A 11.934 11.934 0 0 1 423.047 29.835 Q 421.533 27.848 420.317 25.014 A 31.613 31.613 0 0 1 420.239 24.83 A 15.866 15.866 0 0 1 418.994 18.604 A 18.748 18.748 0 0 1 419.981 12.384 A 15.798 15.798 0 0 1 425.464 4.957 A 23.347 23.347 0 0 1 434.817 0.727 A 33.596 33.596 0 0 1 441.992 0.001 A 35.486 35.486 0 0 1 449.697 0.81 A 30.126 30.126 0 0 1 454.492 2.296 Q 460.156 4.591 464.185 9.4 A 24.805 24.805 0 0 1 468.974 18.521 A 30.253 30.253 0 0 1 469.58 20.997 L 459.277 20.997 A 33.056 33.056 0 0 0 457.951 14.728 Q 456.732 10.946 454.604 8.067 A 19.951 19.951 0 0 0 453.784 7.032 A 14.638 14.638 0 0 0 443.119 1.749 A 19.579 19.579 0 0 0 441.992 1.71 Q 435.986 1.663 432.302 4.705 A 11.857 11.857 0 0 0 432.007 4.957 A 11.127 11.127 0 0 0 428.283 12.217 A 15.481 15.481 0 0 0 428.174 13.819 A 12.031 12.031 0 0 0 428.603 17.056 A 11.293 11.293 0 0 0 428.662 17.261 A 17.036 17.036 0 0 0 429.339 19.137 A 13.991 13.991 0 0 0 429.858 20.216 Q 430.409 21.24 431.431 22.368 A 18.45 18.45 0 0 0 432.056 23.023 Q 433.335 24.303 434.435 25.24 A 27.305 27.305 0 0 0 434.79 25.538 A 22.672 22.672 0 0 0 435.678 26.229 Q 436.621 26.929 437.956 27.809 A 82.356 82.356 0 0 0 438.403 28.101 Q 440.771 29.639 442.432 30.616 A 370.979 370.979 0 0 0 443.353 31.156 Q 444.398 31.767 445.832 32.598 A 1513.755 1513.755 0 0 0 447.217 33.399 A 306.907 306.907 0 0 1 451.566 35.99 Q 457.479 39.585 460.194 41.702 A 29.062 29.062 0 0 1 460.254 41.749 A 31.001 31.001 0 0 1 464.597 45.848 Q 468.082 49.894 469.043 54.444 A 19.182 19.182 0 0 1 469.461 57.721 A 22.169 22.169 0 0 1 469.482 58.692 A 19.844 19.844 0 0 1 468.354 65.522 A 17.184 17.184 0 0 1 462.646 73.243 Q 455.984 78.478 445.472 78.611 A 43.527 43.527 0 0 1 444.922 78.614 A 38.721 38.721 0 0 1 436.537 77.74 A 31.941 31.941 0 0 1 430.64 75.831 A 25.617 25.617 0 0 1 420.02 67.188 A 27.078 27.078 0 0 1 415.653 57.555 A 34.366 34.366 0 0 1 414.893 53.126 Z"
            id="6"
            vectorEffect="non-scaling-stroke"
          />
        </g>
      </svg>
    </div>
  );
};

export default TextOne;
