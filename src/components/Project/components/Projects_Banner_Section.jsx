import React, { useState } from "react";
import banner from "../../../assets/Projects/chethan_jodidhar_projects_banner.webp";
import project1 from "../../../assets/Projects/ChethanJodidharProjects/project1.webp";
import cameo from "../../../assets/Projects/ChethanJodidharProjects/chethanjodidharprojects.webp";

const Projects_Banner_Section = () => {
  const array = [
    {
      img: project1,
      project: "Timepass",
      year: "2025",
      alt: "chethan_jodidhar",
      // desc: "A landmark project in Chethan’s career, Timepass 2025 is a record-breaking film that completed production in just 25 days, despite a low budget and ambitious scope. The film is a testament to Chethan’s unique ability to blend mass entertainment with socially relevant narratives.",
    },
    {
      img: project1,
      project: "Vidhi",
      year: "2021",
      alt: "chethan_jodidhar",
      // desc: "Though Vidhi was eventually shelved, it marked a significant milestone for Chethan, particularly due to the technical challenges involving intricate VFX and CGI work. The project pushed his filmmaking and technological capabilities to new heights.",
    },
  ];

  const [text, setText] = useState(true);

  const hideText = () => {
    array.forEach((element) => {
      if (element.desc.length) {
        setText((prevState) => !prevState);
      }
    });
  };

  //   const displayText = () => {
  //       array.forEach((element) => console.log(element.desc.length));
  //   }

  return (
    <section className="bg-[#faf5fa] py-24">
      <section className="flex items-center flex-col gap-5">
        <h1 className="text-[#48A77E] text-center font-bold text-5xl">
          PROJECTS
        </h1>
        <div className="bg-[#800080] h-1 w-20 flex"></div>
      </section>

      {/* Projects Section */}
      <section className="container mx-auto grid grid-cols-4 mt-10">
        {array.map((projects, index) => {
          return (
            <div
              className="flex flex-col justify-center gap-3 items-start"
              key={index}
            >
              <div>
                <img className="w-60" src={projects.img} alt={projects.alt} />
              </div>
              <div>
                <h1 className="font-bold uppercase">{projects.project}</h1>
              </div>
              <div>
                <h1>{projects.year}</h1>
              </div>
            </div>
          );
        })}
      </section>

      {/* Future Projects */}
      <section className="container mx-auto flex flex-col items-start gap-5 justify-center m-14">
        <h1 className="font-bold uppercase text-2xl">Future Projects</h1>
        <div className="bg-[#eb2beb] h-[2px] w-20"></div>
        <p className="text-justify leading-6">
          Chethan’s future in filmmaking is filled with exciting possibilities.
          With several innovative projects in development, he is focused on
          exploring contemporary social issues through high-impact action and
          emotional storytelling. His commitment to pushing boundaries and
          creating films that resonate with a global audience ensures that his
          work will continue to shape the future of cinema.
        </p>
        <button className="border border-black px-12 py-3 text-xl hover:bg-[#800080] hover:text-white transition duration-300 ease-in-out">
          Let's Work Together
        </button>
      </section>
    </section>
  );
};

export default Projects_Banner_Section;
