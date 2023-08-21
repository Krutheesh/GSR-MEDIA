import React from "react";
import first from "../../../images/carousel-1.png";
import Second from "../../../images/carousel-2.png";
import Third from "../../../images/carousel-3.png";
const RecentWorks = () => {
  return (
    <div className=" bg-black px-[4rem]">
        <h1 className="text-center text-4xl text-white font-bold  py-20 ">Here are some <span className="text-red-600">of our works</span></h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-1 ">
        <img className="w-full h-4/5" src={first} alt="" />
        <img className="w-full h-4/5" src={Second} alt="" />
        <img className="w-full h-4/5" src={Third} alt="" />
      </div>
    </div>
  );
};

export default RecentWorks;
