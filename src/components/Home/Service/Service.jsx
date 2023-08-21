import React from "react";
import Grapic from "../../../images/icons/service1.png";
import web from "../../../images/icons/service3.png";
import Dev from "../../../images/icons/service4.png";
import special from './svideo/special.mp4'
const Service = () => {
  return (
    <div id='services' className="bg-black py-[5rem] px-[4rem] text-white">
      <h1 className="text-center text-4xl font-semibold text-white">
        Provide awesome <span className="text-red-600">services</span>
      </h1>
    <div className="flex flex-col md:flex-row justify-between py-[5rem] space-y-5 md:space-y-0 ">
      <div className="md:w-[45%]">
        <video autoPlay loop muted  className=" ">
          <source src={special}/>
        </video>
      </div>
      <div className="md:w-[50%]">
        <h2 className="text-[2rem] font-semibold">Specialized in <span className="text-red-600">Content Creation</span></h2>
        <p className="py-[2rem] leading-8">
        content creation is at the heart of what we do. We're not just a digital marketing agency; we're storytellers, designers, and strategists dedicated to crafting captivating content that resonates with your audience. Whether it's crafting engaging blog posts, producing attention-grabbing videos, or designing eye-catching visuals, our team excels in bringing your brand's narrative to life
        </p>

      </div>
    </div>

<div className="text-[2rem] pt-[2rem] pb-[4rem] text-center font-semibold">Other <span className="text-red-600"> Services</span> </div>

      <div className="flex flex-col md:flex-row justify-between space-y-10 md:space-y-0 md:space-x-[4rem] ">
        <div class="card  p-5 shadow-sm shadow-red-500  md:mt-0 mt-4">
          <figure>
            <img className="w-32" src={Grapic} alt="" />
          </figure>
          <div class="card-body">
            <h2 class="text-center text-xl font-semibold text-red-600">
              Web & Mobile design{" "}
            </h2>
            <p className="text-center text-base">
              We craft stunning and amazing web UI, using a well drrafted UX to
              fit your product.
            </p>
          </div>
        </div>

        <div class="card  p-5 shadow-sm shadow-red-500 md:mt-0 mt-4">
          <figure>
            <img className="w-32" src={web} alt="" />
          </figure>
          <div class="card-body">
            <h2 class="text-center text-xl font-semibold text-red-600">Graphic design</h2>
            <p className="text-center text-base">
              We craft stunning and amazing web UI, using a well drrafted UX to
              fit your product.
            </p>
          </div>
        </div>

        <div class="card p-3 shadow-sm shadow-red-500   md:mt-0 mt-4">
          <figure>
            <img className="w-32" src={Dev} alt="" />
          </figure>
          <div class="card-body">
            <h2 class="text-center text-xl font-semibold text-red-600">Web development</h2>
            <p className="text-center text-base">
              Amazing flyers, social media posts and brand representations that
              would make your brand stand out.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
