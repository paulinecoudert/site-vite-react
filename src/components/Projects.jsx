import { React } from "react";

import ProjectItem from "./ProjectItem";
import DaftPunkImg from "../assets/daftPunk.jpg";
import MineShop from "../assets/MineShop.jpg";
import IDeco from "../assets/idecoNew.jpg";
import UiTelecom from "../assets/UiTelecom.jpg";
import Ui from "../assets/flexiAirNew.jpg";
import Dashboard from "../assets/HomeDashboard.jpg";

const data = [
  {
    title: "My Dashboard",
    img: Dashboard,
    language: "FIGMA",
    lien: ["https://github.com/paulinecoudert/SymfonyDeco"],
  },
  {
    title: "FLEXI AIR",
    img: Ui,
    language: "FIGMA  ",
    lien: "https://www.figma.com/file/rAI0vtkW9p8UsPhGgETBJW?embed_host=share&kind=&node-id=26578%3A3219&t=3VGM2s4ZD96mONLm-1&type=design&viewer=1 ",
  },
  {
    title: "IDECO",
    img: IDeco,
    language: "PHP , Symphony, JS, Bootstrap ",
    lien: ["https://github.com/paulinecoudert/SymfonyDeco"],
  },
  {
    title: "UI TELECOM",
    img: UiTelecom,
    language: "FIGMA, HTML, CSS",
    lien: "https://paulinecoudert.github.io/uiTelecom/",
  },
  {
    title: "MINE SHOP",
    img: MineShop,
    language: "Vue.JS , Bootstrap, TypeScript, HTML",
    lien: "https://github.com/paulinecoudert/mine-store",
  },
  {
    title: "MUSIC CREATOR",
    img: DaftPunkImg,
    language: "React, Javascript, CSS, HTML ",
    lien: "https://paulinecoudert.github.io/daft_music/",
  },
];

const Projects = () => {
  return (
    <div
      id="projects"
      className="max-w-[1040px] m-auto sm:pr-8 md:pl-20 p-0 pb-16"
    >
      <h1 className=" border-t-2 border-dotted border-gray-400  left-13  animate-pulse mx-8 text-8xl font-bold text-left  text-indigo-500">
        Pro
      </h1>
      <h1 className="z-10 left-15 mb-5  mx-24 pb-4 animate-pulse text-8xl font-bold text-left text-indigo-500 ">
        jects.
      </h1>
      <p className="text-center pb-8 mx-8 text-stone-500">
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
        dolores at consequatur beatae tenetur est velit adipisci, totam rerum
        earum blanditiis ducimus hic perferendis magni quas, ea explicabo sed?
        Minima!",
      </p>
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 p-4 px-8 gap-6">
        {data.map((item, i) => (
          <ProjectItem
            key={i}
            title={item.title}
            img={item.img}
            language={item.language}
            lien={item.lien}
            email={item.email}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
