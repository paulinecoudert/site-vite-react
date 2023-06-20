import { React } from "react";

const ProjectItem = ({ img, title, language, lien, email }) => {
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

        <a
          className="max-w-[240px] block text-sm text-center p-2 rounded-lg bg-white text-stone-500 font-bold cursor-pointer "
          href={lien}
          target="_blank"
        >
          More infos
        </a>
      </div>
    </div>
  );
};

export default ProjectItem;
