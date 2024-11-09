import React from "react";

const Navbar = () => {
  return (
    <div className="flex w-screen text-[#FBF0DA] fixed z-50 top-8 px-5 items-center">
      <div className="text-[#FBF0DA] w-[80vw] text-lg">ARCHVIS</div>
      <div className="flex justify-center space-x-24  h-full items-center  w-[20vw] ">
        <div className="font-medium text-md">EST - 2021</div>
        <div className=" space-y-2">
          <div className="h-[1px] w-8 bg-[#FBF0DA]"></div>
          <div className="h-[1px] w-8 bg-[#FBF0DA]"></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
