import { React } from "react";
import { AiFillGithub } from "react-icons/ai";
import { BiLinkAlt } from "react-icons/bi";

const ProjectItem = ({ img, title, language, lienGit, lienUrl }) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#5c6bc0]">
      <img
        src={img}
        alt="/"
        className="rounded-xl group-hover:opacity-5 h-full"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-lg font-bold text-white tracking-wider text-center">
          {title}
        </h3>
        <p className="text-center p-2 pb-4 text-white">{language}</p>

        <div className="flex justify-center">
          <a
            href={lienGit}
            target="_blank"
            className="buttonNav rounded-full shadow-lg bg-gray-100  shadow-gray-400 m-2 p-4 cursor-pointer bg-gray-100  hover:bg-indigo-500 active:bg-indigo-500 hover:scale-110 ease-in duration-300 "
          >
            <AiFillGithub size={20} />
          </a>

          <a
            href={lienUrl}
            className="buttonNav rounded-full shadow-lg bg-gray-100  shadow-gray-400 m-2 p-4 cursor-pointer bg-gray-100  hover:bg-indigo-500 active:bg-indigo-500 hover:scale-110 ease-in duration-300 "
          >
            <BiLinkAlt size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
