import React from "react";
import Design from "../assets/design.png";
import Code from "../assets/code.png";
import Gears from "../assets/gears.png";

const Skills = () => {
  return (
    <div
      id="skills"
      className="max-w-screen-2xl m-auto sm:pr-8 md:pl-20 p-0 pb-16"
    >
      <h1 className=" border-t-2 border-dotted border-gray-400  left-13  animate-pulse mx-8 text-8xl font-bold text-left  text-indigo-500">
        Sk
      </h1>
      <h1 className="z-10   left-15 mb-5  mx-24 pb-4 animate-pulse text-8xl font-bold text-left text-indigo-500 ">
        ills.
      </h1>
      <div className="  mx-8 grid sm:grid-cols-3 gap-12">
        <div className="p-8 text-center relative items-center justify-center h-auto w-full bg-gray-100 shadow-xl shadow-gray-400 rounded-xl ">
          <h1 className="pb-8 flex flex-wrap gap-2 flex-row items-center justify-center text-xl font-bold text-center text-indigo-500">
            <img class="rounded w-6 h-6" src={Design} /> Designer
          </h1>
          <p className=" text-sm text-stone-600">
            I create clean and aesthetic design with a positive customer
            experience.<br></br>I enjoy working with UX, UI, Web, Apps, Logos.
          </p>

          <ul className=" pt-6 text-sm text-stone-600">
            <li className="py-1">Figma</li>
            <li className="py-1"> Photoshop </li>
            <li className="py-1">Illustrator </li>
            <li className="py-1">Font Awesome</li>
          </ul>
          <h3 className="text-sm pt-8 pb-4">Others options include: </h3>
          <ul className="text-sm text-stone-600">
            <li>Rhino 3D, Autocad, 3ds Max Keyshot.</li>
          </ul>
        </div>

        <div className="p-8 text-center relative items-center justify-center h-auto w-full bg-gray-100 shadow-xl shadow-gray-400 rounded-xl ">
          <h1 className="pb-8 flex flex-wrap gap-2 flex-row items-center justify-center text-xl font-bold text-center text-indigo-500">
            <img className="rounded w-6 h-6" src={Code} /> Front-End
          </h1>
          <p className=" text-sm text-stone-600">
            I develop applications and websites using the following tools:
          </p>

          <ul className=" py-6 text-sm text-stone-600">
            <li className="py-1"> Html, CSS, SASS </li>
            <li className="py-1">Bootstrap, Tailwind </li>
            <li className="py-1">VueJS, Vite JS</li>
            <li className="py-1"> React </li>
            <li className="py-1">Javascript / jQuery</li>
            <li className="py-1">web API , Plugins</li>
            <li className="py-1"> JSON & XML TypeScript </li>
          </ul>
        </div>

        <div className="p-8 text-center relative items-center justify-center h-auto w-full  bg-gray-100 shadow-xl shadow-gray-400 rounded-xl ">
          <h1 className="pb-8 flex flex-wrap gap-2 flex-row items-center justify-center text-xl font-bold text-center text-indigo-500">
            <img className="rounded w-6 h-6" src={Gears} /> More ...
          </h1>
          <p className=" text-sm text-stone-600">
            I can offer support for the development of application for different
            projects web & mobile.
          </p>

          <ul className=" py-6  text-sm text-stone-600">
            <li className="py-1">Language: PHP </li>
            <li className="py-1">Frameworks: Laravel</li>
            <li className="py-1"> Github, Gitkraken</li>
            <li className="py-1">Analyse & modelisation UML </li>
            <li className="py-1"> DB: SQL MySQL phpMyAdmin</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
