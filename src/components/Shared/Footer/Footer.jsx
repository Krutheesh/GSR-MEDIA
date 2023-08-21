import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="footer py-[3rem] text-base-content  footer-info text-center bg-red-600">
        <div className="md:pl-20 pl-4 mx-auto">
          <span className="text-black font-bold py-5 text-[3rem]">
            GSR
          </span>
          <p className="text-2xl uppercase font-semibold text-black">GSR MEDIA</p>
          <p>Your New Smile Starts Here</p>
        </div>
        <div className="mx-auto">
          <span className="uppercase text-2xl text-black font-semibold">
            Services
          </span>
          <p className="text-xl text-white">Branding</p>
          <p className="text-xl text-white">Design</p>
          <p className="text-xl text-white">Marketing</p>
          <p className="text-xl text-white">Advertisement</p>
        </div>
        <div className="mx-auto">
          <span className="uppercase text-2xl text-black font-semibold">
            Company
          </span>
          <p className="text-xl text-white">About us</p>
          <p className="text-xl text-white">Contact</p>
          <p className="text-xl text-white">Jobs</p>
          <p className=" text-xl text-white">Press kit</p>
        </div>
        <div className="mx-auto">
          <span className="uppercase  text-2xl text-black font-semibold">
            Legal
          </span>
          <p className="text-white text-xl">Terms of use</p>
          <p className="text-xl text-white">Privacy policy</p>
          <p className="text-xl text-white">Cookie policy</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
