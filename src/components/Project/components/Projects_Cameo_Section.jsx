import React from "react";
import cameo from "../../../assets/Projects/ChethanJodidharProjects/chethanjodidharprojects.webp";

const Projects_Cameo_Section = () => {
  return (
    <section className="py-24 bg-[#faf5fa]">
      <section className="container mx-auto grid grid-cols-2">
        {/* Image Column */}
        <div className="flex justify-start items-center">
          <img
            className="w-[100%] max-w-[550px] rounded-2xl shadow-2xl"
            src={cameo}
            alt="chethan_jodidhar_portfolio"
          />
        </div>

        {/* Content Column */}
        <div className="flex flex-col items-start gap-5 justify-center">
          <h1 className="font-bold uppercase text-2xl">
            Personal Cameos and Appearances
          </h1>
          <div className="bg-[#eb2beb] h-[2px] w-20"></div>
          <p className="text-justify leading-6">
            A filmmaker with a deep appreciation for cinematic tradition,
            Chethan often makes cameo appearances in his films as a nod to
            legendary filmmakers like Alfred Hitchcock. These brief appearances
            add an extra layer of intrigue for his audience and give them an
            additional connection to his work.
          </p>
        </div>
      </section>
    </section>
  );
};

export default Projects_Cameo_Section;
