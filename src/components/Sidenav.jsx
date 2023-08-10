import React, { useState } from "react";

import {
  AiOutlineMenu,
  AiOutlineHome,
  AiOutlineProject,
  AiOutlineMail,
} from "react-icons/ai";
import { BsPerson, BsCodeSlash } from "react-icons/bs";

const Sidenav = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div>
      <AiOutlineMenu
        onClick={handleNav}
        id="OutlineMenu"
        className="h-6 w-6 fixed sm:absolute w-03/12 bg-gray/90 top-4 right-4  z-[99] "
      />
      {nav ? (
        <div className="fixed w-full md:w-[30%]  h-screen bg-white/90 flex flex-col flex justify-center items-center z-20 ">
          <a
            onClick={handleNav}
            href="#main"
            id="top"
            className="buttonNav w-[65%] flex justify-center items-center rounded-full shadow-lg bg-gray-100  shadow-gray-400 m-2 p-4 cursor-pointer  bg-gray-100  hover:bg-[#f7d4d4] active:bg-[#f7d4d4] hover:scale-110 ease-in duration-200"
          >
            <AiOutlineHome size={20} />
            <span className="pl-4">Home</span>
          </a>
          <a
            onClick={handleNav}
            href="#skills"
            className="buttonNav w-[65%] flex justify-center items-center rounded-full shadow-lg bg-gray-100  shadow-gray-400 m-2 p-4 cursor-pointer  bg-gray-100  hover:bg-[#D3C3E9] active:bg-[#D3C3E9] hover:scale-110 ease-in duration-200 "
          >
            <BsCodeSlash size={20} />
            <span className="pl-4">Skills</span>
          </a>
          <a
            onClick={handleNav}
            href="#projects"
            className="buttonNav w-[65%] flex justify-center items-center rounded-full shadow-lg bg-gray-100  shadow-gray-400 m-2 p-4 cursor-pointer  bg-gray-100  hover:bg-[#B5ACDE] active:bg-[#B5ACDE] hover:scale-110 ease-in duration-200 "
          >
            <AiOutlineProject size={20} />
            <span className="pl-4">Project</span>
          </a>
          <a
            onClick={handleNav}
            href="#main"
            id="top"
            className="buttonNav w-[65%] flex justify-center items-center rounded-full shadow-lg bg-gray-100  shadow-gray-400 m-2 p-4 cursor-pointer  bg-gray-100   hover:bg-[#9595D3] active:bg-[#9595D3]  hover:scale-110 ease-in duration-200"
          >
            <BsPerson size={20} />
            <span className="pl-4">Resume</span>
          </a>
          <a
            onClick={handleNav}
            href="#contact"
            className="buttonNav w-[65%] flex justify-center items-center rounded-full shadow-lg bg-gray-100  shadow-gray-400 m-2 p-4 cursor-pointer  bg-gray-100   hover:bg-[#6B76C4] active:bg-[#6B76C4] hover:scale-110 ease-in duration-200"
          >
            <AiOutlineMail size={20} />
            <span className="pl-4">Contact</span>
          </a>
        </div>
      ) : (
        ""
      )}

      <div className="p-1 w-34 md:block hidden fixed top-[20%] z-10">
        <div class="w-full py-4 px-2 text-gray-900  rounded-lg text-left capitalize font-medium ">
          <nav className=" flex flex-col items-center">
            <a
              href="#main"
              id="top"
              className="buttonNav rounded-full shadow-lg bg-gray-100  shadow-gray-400 m-3 p-4 cursor-pointer bg-gray-100  hover:bg-[#f7d4d4] active:bg-[#f7d4d4] hover:scale-110 ease-in duration-300 "
            >
              <AiOutlineHome size={20} />
            </a>
            <a
              href="#skills"
              className="buttonNav rounded-full shadow-lg bg-gray-100  shadow-gray-400 m-3 p-4 cursor-pointer  bg-gray-100  hover:bg-[#D3C3E9] active:bg-[#D3C3E9] hover:scale-110 ease-in duration-300  "
            >
              <BsCodeSlash size={20} />
            </a>
            <a
              href="#projects"
              className="buttonNav rounded-full shadow-lg bg-gray-100  shadow-gray-400 m-3 p-4 cursor-pointer bg-gray-100  hover:bg-[#B5ACDE] active:bg-[#B5ACDE] hover:scale-110 ease-in duration-300 "
            >
              <AiOutlineProject size={20} />
            </a>
            <a
              href="#work"
              id="top"
              className="buttonNav rounded-full shadow-lg bg-gray-100  shadow-gray-400 m-3 p-4 cursor-pointer hover: bg-gray-100  hover:bg-[#9595D3] active:bg-[#9595D3]  hover:scale-110 ease-in duration-300 "
            >
              <BsPerson size={20} />
            </a>
            <a
              href="#contact"
              className="buttonNav rounded-full shadow-lg bg-gray-100  shadow-gray-400 m-3 p-4 cursor-pointer hover: bg-gray-100  hover:bg-[#6B76C4] active:bg-[#6B76C4] hover:scale-110 ease-in duration-300 "
            >
              <AiOutlineMail size={20} />
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Sidenav;
