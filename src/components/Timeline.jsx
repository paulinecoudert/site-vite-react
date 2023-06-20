import React from "react";
import TimelineItem from "./TimelineItem";

const data = [
  {
    year: "2023 - 2021",
    Building: "Heytens",
    Location: "Wavre & Lille , Belgium & France",
    title: "Web Developer",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, dolores at consequatur beatae tenetur est velit adipisci, totam rerum earum blanditiis ducimus hic perferendis magni quas, ea explicabo sed? Minima!",
  },
  {
    year: "July 2021 - May 2021",
    Building: "LuckyCycle",
    Location: "Brussels, Belgium",
    title: "Developer (Internship)",
    details:
      " In charge of Projects gaming in order to increase customer sales through promotional games.Development of registration form  and game integration according to models (VueJS, NodeJS, Javascript, Canvas). Bug fixes on platforms. Development of new games in JavaScript, Canvas. ",
  },
  {
    year: "Nov. 3 days - 2020",
    Building: "Interface3",
    Location: "Brussels, Belgium",
    title: "Hackathon",
    details:
      " Web development of a site dedicated to the study of a code for women (quizz web, timeline, resources) developed in Javascript and Jquery. Team of 6 profiles frontend  & backend (100% online).",
  },
  {
    year: "2021 - 2020",
    Building: "Interface3",
    Location: "Brussels, Belgium",
    title: "Web Application Developer ",
    details:
      " 13 months of training & 2 internship months -1600h of training. Certification CECAF Web developer, Europass métier, preparation for Certification Certification « Programming in c#. » ",
  },
  {
    year: "2020 - 2014",
    Building: "Heytens",
    Location: "Brussels, Belgium",
    title: "Coaching deco & Sales assistant",
    details:
      "Drawing up decoration projects for window dressing. Taking measurements, working out estimates and giving advice in decoration. Organization of the team online agenda, follow up of mails, respect of annual sales target, communication strategy.",
  },
  {
    year: "2014 - 2011",
    Building: ".Rad Product",
    Location: "Brussels, Belgium",
    title: "Designer",
    details:
      "Creation and development of limited-edition products and arrangement of interior spaces, planning for bars, shops and flats.",
  },
  {
    year: "2011 - 2010",
    Building: "Patrick L.J. Stekke ",
    Location: "Brussels, Belgium",
    title: "Interior Designer",
    details:
      "Responsible for technical design plan and furniture drawings, Modeling in 3D of interior architecture project, in the sector of law firms in Brussels.",
  },
  {
    year: "2009 - 2010",
    Building: "Luc Vincent ",
    Location: "Brussels, Belgium",
    title: "Designer",
    details:
      "Charging of aesthetic and technical development of products and projects in interior design from modelling to achievement.",
  },
];

const Timeline = () => {
  return (
    <div id="work" className="max-w-[1040px] m-auto sm:pr-8 md:pl-20 p-0 pb-16">
      <h1 className=" border-t-2 border-dotted border-gray-400  left-13  animate-pulse mx-8 text-8xl font-bold text-left  text-indigo-500">
        Res
      </h1>
      <h1 className="z-10 left-15 mb-5 mx-24 pb-4 animate-pulse text-8xl font-bold text-left text-indigo-500 ">
        ume.
      </h1>
      {data.map((item, i) => (
        <TimelineItem
          key={i}
          year={item.year}
          Building={item.Building}
          Location={item.Location}
          title={item.title}
          details={item.details}
        />
      ))}
    </div>
  );
};

export default Timeline;
