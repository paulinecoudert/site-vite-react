import React from "react";

const TimelineItem = ({ year, Building, Location, title, details }) => {
  return (
    <ol className="mx-8 flex flex-col md-flex-row relative border-l border-indigo-500 ">
      <li className="mb-10 ml-4">
        <div className="absolute w-3 h-3  border-2 border-indigo-500 bg-neutral-100 rounded-full mt-1.5 -left-1.5"></div>
        <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm">
          <span className="inline-block px-2 py-1 font-semibold text-white bg-indigo-500 rounded-md">
            {year}
          </span>
          <span className="text-lg font-regular text-indigo-500">
            {Building}
          </span>
          <span className="my-1 text-sm font-normal leading-none text-stone-400">
            {Location}
          </span>
        </p>
        <p>
          <span className="text-lg font-semibold text-indigo-500">{title}</span>
        </p>
        <p>
          <span className="my-2 text-base font-normal text-stone-500">
            {details}
          </span>
        </p>
      </li>
    </ol>
  );
};

export default TimelineItem;
