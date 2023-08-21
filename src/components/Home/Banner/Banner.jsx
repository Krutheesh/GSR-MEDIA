import React from "react";
import "./Banner.css";
import digi from "./video/digital.mp4"
import { Link } from "react-scroll";
const Banner = () => {
  return (
    <div className="" id='home'>
      
        <video autoPlay muted loop className=" fixed top-0 left-0 z-[-1]    object-cover h-[100vh] w-[1300vw]  " >
          <source src={digi} type="video/mp4" className=""></source>
        </video>

      <div className="flex pt-[5rem] px-[3rem] bg-gradient-to-r from-black items-center h-[100vh] text-red-600 ">
        <div className="md:w-[60%] ">
          <h1 className=" text-[2rem] md:text-[3rem] font-bold">
            Let’s Grow Your Brand To The Next Level
        </h1>
          <p className="md:text-xl pl-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt,
            non.
          </p>
          <Link to="contact" activeClass="active" spy={true} smooth={true} offset={-35} duration={700}>
          <button className="mt-8 rounded px-[2rem] py-4 bg-red-600 text-white text-lg font-bold">
            Contact Us
          </button>
          
          </Link>
        </div>
      
      </div>
    </div>
  );
};

export default Banner;
