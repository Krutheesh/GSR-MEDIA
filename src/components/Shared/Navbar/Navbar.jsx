import React, {  useState } from "react";
import {RxHamburgerMenu} from 'react-icons/rx'
import { Link } from "react-scroll";
const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);
  const menuLinks = [
    { name: "HOME", link: "home" },
    { name: "ABOUT", link: "about" },
    { name: "SERVICES", link: "services" },
    { name: "TESTIMONIALS", link: "test" },
    { name: "CONTACT", link: "contact" },
  ];

  return (
    <nav
      className={`fixed w-full left-0 top-0 z-[100] bg-black p-2`}
    >
      <div className="flex items-center justify-between">
        <div className="mx-7">
          <h4 className="text-4xl uppercase font-bold">
            <span className="text-red-500">GSR</span>
            
          </h4>
        </div>
        <div
          className={` ${
            sticky ? "md:bg-black/0 bg-black" : "bg-black"
          } text-red-600 md:block hidden px-7 py-2 font-medium  `}
        >
          <ul className="flex items-center gap-1 py-2 text-lg">
            {menuLinks?.map((menu, i) => (
              <li key={i} className="px-6 hover:opacity-50">
                <Link to={menu?.link} activeClass="active" spy={true} smooth={true} offset={-35} duration={700} >{menu?.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className={`z-[999]  ${
            open ? "text-gray-800" : "text-gray-100"
          } text-3xl md:hidden m-5`}
        >
       
          <RxHamburgerMenu/>
        </div>
        <div
          className={`md:hidden  text-red-600 absolute w-2/3 h-screen
      px-7 py-2 font-medium bg-white top-0 duration-300 ${
        open ? "right-0" : "right-[-100%]"
      }`}
        >
          <ul className="flex flex-col justify-center h-full gap-10 py-2 text-lg">
            {menuLinks?.map((menu, i) => (
              <li
                
                key={i}
                className="px-6 hover:opacity-50 cursor-pointer"
              >
                <Link to={menu?.link} spy={true} smooth={true} offset={-20} duration={500} onClick={() => setOpen(false)} >{menu?.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
