import { React } from "react";

import ProjectItem from "./ProjectItem";
import DaftPunkImg from "../assets/daftPunk.jpg";
import MineShop from "../assets/DetailProduct.jpg";
import IDeco from "../assets/idecoNew.jpg";
import UiTelecom from "../assets/UiTelecom.jpg";
import Ui from "../assets/flexiAirNew.jpg";
import Dashboard from "../assets/HomeDashboard.jpg";

const data = [
  {
    title: "My Dashboard",
    img: Dashboard,
    language: "FIGMA",
    lienGit: "",
    lienUrl: ["https://github.com/paulinecoudert/SymfonyDeco"],
  },
  {
    title: "FLEXI AIR",
    img: Ui,
    language: "FIGMA  ",
    lienGit: "https://github.com/paulinecoudert/flexiAir",
    lienUrl:
      "https://www.figma.com/file/rAI0vtkW9p8UsPhGgETBJW?embed_host=share&kind=&node-id=26578%3A3219&t=3VGM2s4ZD96mONLm-1&type=design&viewer=1 ",
  },
  {
    title: "IDECO",
    img: IDeco,
    language: "PHP , Symphony, JS, Bootstrap ",
    lienGit: ["https://github.com/paulinecoudert/SymfonyDeco"],
    lienUrl: "https://www.youtube.com/watch?v=Qpn3-j9w9w8",
  },
  {
    title: "UI TELECOM",
    img: UiTelecom,
    language: "FIGMA, HTML, CSS",
    lienGit: "https://github.com/paulinecoudert/uiTelecom",
    lienUrl: "https://paulinecoudert.github.io/uiTelecom/",
  },
  {
    title: "MINE SHOP",
    img: MineShop,
    language: "Vue.JS , Bootstrap, TypeScript, HTML",
    lienGit: "https://github.com/paulinecoudert/vite-ms",
    lienUrl: "https://paulinecoudert.github.io/vite-ms/",
  },
  {
    title: "MUSIC CREATOR",
    img: DaftPunkImg,
    language: "React, Javascript, CSS, HTML ",
    lienGit: "https://github.com/paulinecoudert/daft_music",
    lienUrl: "https://paulinecoudert.github.io/daft_music/",
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
        "View of my background as a designer and more recently as a front-end
        developper, I'm the pilote for your projects involving UI/UX and
        front-end development such as: HTML CSS JS and frameworks such as VUE.js
        and React. Here's an overview of my work, my way is to continue to learn
        and put my experience to work for the benefit of users, combining design
        and technical skills.",
      </p>
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 p-4 px-8 gap-6">
        {data.map((item, i) => (
          <ProjectItem
            key={i}
            title={item.title}
            img={item.img}
            language={item.language}
            lienGit={item.lienGit}
            lienUrl={item.lienUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
