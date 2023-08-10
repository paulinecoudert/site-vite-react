import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { AiFillGithub } from "react-icons/ai";

const Main = () => {
  return (
    <div id="main" className="">
      <img
        className=" w-full opacity-50 h-screen object-cover object-left scale-x-[-1]"
        src="./src/assets/shape.jpg"
        alt="/"
      />
      <div className=" w-full h-screen absolute top-0 left-0 bg-white/50 md:px-20  p-8 py-16">
        <div className=" max-w-[700px] md:mx-8 lg:m-auto mt-2 h-full flex flex-col justify-evenly lg:items-start items-start">
          <div>
            <h1 className="  left-13 animate-pulse text-4xl font-bold text-left  text-indigo-500">
              Pauline
            </h1>
            <h1 className="z-10 left-15 mb-5  mx-16 pb-4 animate-pulse text-4xl font-bold text-left text-indigo-500 ">
              Coudert
            </h1>
          </div>

          <h1 className="sm:text-5xl text-4xl font-bold text-[#234665] ">
            I'm a Creative Front-End Developer with skills in UI/UX design.
          </h1>

          <h2 className="flex sm:text-3xl text-2xl  pt-12 text-indigo-500  ">
            <TypeAnimation
              sequence={[
                "I have a background in design which I use meaningfull experiences within the code. ", // Types 'One'
                2000, // Waits 2s
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: "1em", paddingLeft: "5px" }}
            />
          </h2>
          <div className="flex justify-end pt-6 max-w-[700px] w-full">
            <a
              href="https://www.linkedin.com/in/paulinecoudert-bxl/"
              target="_blank"
              className="buttonNav rounded-full shadow-lg bg-gray-100  shadow-gray-400 m-2 p-4 cursor-pointer bg-gray-100  hover:bg-indigo-500 active:bg-indigo-500 hover:scale-110 ease-in duration-300 "
            >
              <FaLinkedinIn size={20} />
            </a>

            <a
              href="https://github.com/paulinecoudert"
              target="_blank"
              className="buttonNav rounded-full shadow-lg bg-gray-100  shadow-gray-400 m-2 p-4 cursor-pointer bg-gray-100  hover:bg-indigo-500 active:bg-indigo-500 hover:scale-110 ease-in duration-300 "
            >
              <AiFillGithub size={20} />
            </a>

            <a
              href="#contact"
              className="buttonNav rounded-full shadow-lg bg-gray-100  shadow-gray-400 m-2 p-4 cursor-pointer bg-gray-100  hover:bg-indigo-500 active:bg-indigo-500 hover:scale-110 ease-in duration-300 "
            >
              <MdEmail size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
