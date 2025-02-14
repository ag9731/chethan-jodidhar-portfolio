import React, { useState } from "react";
import banner from "../../../assets/Projects/chethan_jodidhar_projects_banner.webp";
import timepass2025 from "../../../assets/Projects/ChethanJodidharProjects/timepass2025.webp";
import project1 from "../../../assets/Projects/ChethanJodidharProjects/project1.webp";
import cameo from "../../../assets/Projects/ChethanJodidharProjects/chethanjodidharprojects.webp";

const Projects_Banner_Section = () => {
  const array = [
    {
      img: timepass2025,
      project: "Timepass",
      year: "2025",
      alt: "chethan_jodidhar",
    },
    {
      img: project1,
      project: "Vidhi",
      year: "2021",
      alt: "chethan_jodidhar",
    },
  ];

  const [text, setText] = useState(true);

  const hideText = () => {
    array.forEach((element) => {
      if (element.desc && element.desc.length) {
        setText((prevState) => !prevState);
      }
    });
  };

  return (
    <section className="bg-[#faf5fa] py-12 md:py-24">
      <section className="flex items-center flex-col gap-3 md:gap-5">
        <h1 className="text-[#48A77E] text-center font-bold text-3xl md:text-5xl">
          PROJECTS
        </h1>
        <div className="bg-[#800080] h-1 w-16 md:w-20 flex"></div>
      </section>

      {/* Projects Section */}
      <section className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8 md:mt-10 px-4">
        {array.map((projects, index) => {
          return (
            <div
              className="flex flex-col justify-center gap-3 items-center lg:items-start"
              key={index}
            >
              <div>
                <img
                  className="w-full max-w-xs mx-auto"
                  src={projects.img}
                  alt={projects.alt}
                />
              </div>
              <div>
                <h1 className="font-bold uppercase">{projects.project}</h1>
              </div>
              <div>
                <h1 className="text-center">{projects.year}</h1>
              </div>
            </div>
          );
        })}
      </section>

      {/* Future Projects */}
      <section className="container mx-auto flex flex-col items-center lg:items-start gap-4 md:gap-5 justify-center mt-10 md:mt-14 px-4">
        <h1 className="font-bold uppercase text-xl md:text-2xl">
          Future Projects
        </h1>
        <div className="bg-[#eb2beb] h-[2px] w-16 md:w-20"></div>
        <p className="text-center lg:text-justify leading-6 max-w-3xl">
          Chethan's future in filmmaking is filled with exciting possibilities.
          With several innovative projects in development, he is focused on
          exploring contemporary social issues through high-impact action and
          emotional storytelling. His commitment to pushing boundaries and
          creating films that resonate with a global audience ensures that his
          work will continue to shape the future of cinema.
        </p>
        <button className="border border-black px-8 md:px-12 py-2 md:py-3 text-lg md:text-xl hover:bg-[#800080] hover:text-white transition duration-300 ease-in-out mt-2 md:mt-4">
          Let's Work Together
        </button>
      </section>
    </section>
  );
};

export default Projects_Banner_Section;
