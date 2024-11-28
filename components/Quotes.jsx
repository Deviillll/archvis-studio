import React from "react";

const Quotes = () => {
  return (
    <div
      className="w-screen h-[80vh] md:h-screen  flex flex-col  md:flex-row justify-between  px-5 bg-top bg-cover text-[#FBF0DA] relative "
      style={{
        backgroundImage: `url('https://cdn.prod.website-files.com/66de2f1572bcf866302fd41c/66de31aed8836018263d0efe_home_img_quote-p-800.webp')`,
        backgroundSize: "105%",
      }}
    >
      <div className="absolute bg-black/60 top-0 left-0 w-full h-full "></div>

      <div className="w-full h-full flex flex-col items-start justify-center md:justify-start flex-1 relative z-10  ">
        <div className="md:pl-10 md:mt-32 tracking-tight h-32 space-y-4 w-full">
          <h1 className="font-medium text-5xl md:pl-12 pl-20 ">آرچ وِز</h1>
          <h1 className="font-normal text-3xl  uppercase">(Ichi-go ichi-e) </h1>
        </div>
      </div>
      <div className="w-full h-full flex flex-col items-end justify-end pb-16 flex-1 relative z-10  ">
        <p className="md:w-[30%] w-[70%] tracking-tight leading-tight font-sans font-medium text-[16px]">
          We embrace the spirit of 一期一会 (Ichi-go ichi-e) recognizing that
          each project presents a unique opportunity to create something
          exceptional. This philosophy guides our practice, instilling a sense
          of meticulous care and attention to detail in every design and
          interaction.
        </p>
      </div>
    </div>
  );
};

export default Quotes;
