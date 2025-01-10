import React from "react";
import image from "../../../assets/Projects/chethan_jodidhar_projects_banner.webp";

const Projects_Section2 = () => {
  return (
    <section className="py-12 md:py-24 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          {/* Content Column */}
          <div className="flex flex-col items-center lg:items-start gap-4 md:gap-5 justify-center md:w-1/2">
            <h1 className="font-bold uppercase text-xl md:text-2xl text-center">
              Career Vision
            </h1>
            <div className="bg-[#eb2beb] h-[2px] w-16 md:w-20"></div>
            <p className="text-center lg:text-justify leading-6 md:leading-7">
              As Chethan continues to evolve as a filmmaker, he is excited about
              leading larger-scale projects that challenge his craft and broaden
              his creative horizons. He aspires to contribute to films and
              commercials that are visually striking, emotionally engaging, and
              culturally relevant. With a passion for exploring new technologies
              and techniques, Chethan is committed to creating ground breaking
              films that not only push the boundaries of Indian cinema but also
              resonate on a global stage.
            </p>
            <button className="border border-black px-8 md:px-12 py-2 md:py-3 text-lg md:text-xl hover:bg-[#800080] hover:text-white transition duration-300 ease-in-out mt-2 md:mt-4">
              More About Me
            </button>
          </div>

          {/* Image Column */}
          <div className="flex justify-center md:justify-end items-center md:w-1/2 mt-8 md:mt-0">
            <img
              className="w-full max-w-[550px] rounded-2xl shadow-2xl"
              src={image}
              alt="Chethan Jodidhar"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects_Section2;
