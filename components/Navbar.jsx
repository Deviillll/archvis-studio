import React from "react";

const Navbar = () => {
  return (
    <div className="flex w-screen text-[#FBF0DA] fixed z-50  px-3 items-center h-28">
      <div className="text-[#FBF0DA] w-[70vw] md:w-[80vw] text-lg">ARCHVIS</div>
      <div className="flex md:justify-center justify-between space-x-10 md:space-x-24  w-[40vw]  h-full items-center  md:w-[20vw] ">
        <div className="font-medium text-xs md:text-md">EST - 2021</div>
        <div className=" space-y-2">
          <div className="h-[1px] w-8 bg-[#FBF0DA]"></div>
          <div className="h-[1px] w-8 bg-[#FBF0DA]"></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
