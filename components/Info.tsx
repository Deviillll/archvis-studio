import React from "react";

const Info = ({ clas }) => {
  return (
    <div>
      <div className={`w-full h-[45%] flex ${clas}`}>
        <div className="w-[80%] md:w-[60%] h-full flex justify-between md:justify-evenly">
          <div className="space-y-12">
            <div>
              <h1 className="uppercase">email</h1>
              <h1 className="text-xs ">abcd@pk.com</h1>
            </div>
            <div>
              <h1>Phone</h1>
              <h1 className="text-xs ">+92 123456789</h1>
            </div>
            <div className="uppercase space-y-2">
              <h1 className="uppercase">Social</h1>
              <h1 className="text-xs ">instagram</h1>
              <h1 className="text-xs ">twitter</h1>
              <h1 className="text-xs ">whatsapp</h1>
            </div>
          </div>

          <div className="space-y-12 capitalize">
            <div>
              <h1 className="uppercase ">office</h1>
              <h1 className="text-xs ">lahore dha</h1>
              <h1 className="text-xs ">buliding x block x</h1>
            </div>
            <div className="text-[#FBF0DA]/70 text-xs">
              <h1>Monday-Friday</h1>
              <h1 className="route-link">9:00 am-6:00 pm</h1>
            </div>
            <div className="text-[#FBF0DA]/70 text-xs">
              <h1>139.8107° E</h1>
              <h1>35.7100° N</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
