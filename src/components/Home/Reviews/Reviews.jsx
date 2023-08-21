import React from "react";
import person from '../../../images/customer-1.png'
import person1 from '../../../images/customer-2.png'
import person2 from '../../../images/customer-3.png'
const Reviews = () => {
  return (
    <div id='test' className=" py-[5rem] px-[4rem] bg-red-600 text-white">
      <h1 className="text-center text-4xl text-white font-bold">
       Testimonials
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-5 mt-20 ">
        <div class="card w-full text-white shadow-xl bg-black">
          <div class="card-body">
            <p className="text-justify">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex facilis itaque earum neque. Repellendus, incidunt.</p>
            <div class="card-actions justify-center md:justify-between mt-5 items-center">
              <img
                className="rounded-full w-28 ring ring-secondary ring-offset-base-100 ring-offset-2"
                src={person}
                alt=""
              />
              <div className="text-ce">
                <h2 class="card-title text-red-600">Nash Patrik</h2>
                <p>CEO, Manpol</p>
              </div>
            </div>
          </div>
        </div>
        <div class="card w-full bg-black shadow-xl">
          <div class="card-body">
            <p className="text-justify">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex facilis itaque earum neque. Repellendus, incidunt.</p>
            <div class="card-actions justify-center md:justify-between mt-5 items-center">
              <img
                className="rounded-full w-28 ring ring-secondary ring-offset-base-100 ring-offset-2"
                src={person1}
                alt=""
              />
              <div>
                <h2 class="card-title text-red-600">Miriam Barron</h2>
                <p>CEO, Manpol</p>
              </div>
            </div>
          </div>
        </div>
        <div class="card w-full bg-black shadow-xl">
          <div class="card-body">
            <p className="text-justify">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex facilis itaque earum neque. Repellendus, incidunt.</p>
            <div class="card-actions justify-center md:justify-between mt-5 items-center">
              <img
                className="rounded-full w-28 ring ring-secondary ring-offset-base-100 ring-offset-2"
                src={person2}
                alt=""
              />
              <div>
                <h2 class="card-title text-red-600">Bria Malone</h2>
                <p>CEO, Manpol</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
