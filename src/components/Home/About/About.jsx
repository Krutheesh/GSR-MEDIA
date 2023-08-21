import React from "react";
import about_main_img from "../../../images/about_main_img.jpg";
function About() {
  return (
    <section className="py-[5rem] px-[4rem] bg-red-600 text-white" id="about">
      <div className="p-[0.2rem]">
        <div className="flex flex-col md:flex-row justify-between space-y-5 md:space-y-0 md:space-x-10">
          <div className="md:w-[45%] w-[100%]">
            <img src={about_main_img} className="w-[100%] shadow-md shadow-red-400" alt="" />
          </div>
          <div className="md:w-[50%] w-[100%]">
            <div className="text-[2rem] font-bold text-black">
              <h3>About Us</h3>
            </div>
            <p className="space-y-3 py-[1rem]">
              GMR Group of companies is built around the group’s seven values
              and beliefs which is the embodiment the way it works. We welcome
              on board talent aligned to these values over and above an
              individual’s domain experience. The organization’s philosophy is
              to build and nurture home grown talent across levels based on
              meritocracy and potential. Supporting this initiative is our
              process of identifying employees who have the potential to grow
              with us. Identified high potential talent is developed through our
              flagship program. Our belief is in building holistic corporate
              professionals and thereby exposure to development would be
              incomplete without Corporate Social Responsibility, Spirituality,
              coaching and mentoring. 
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
