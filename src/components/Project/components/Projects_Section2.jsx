import React from 'react'
import image from "../../../assets/Projects/chethan_jodidhar_projects_banner.webp";

const Projects_Section2 = () => {
  return (
    <section className="py-24">
      <section className="grid grid-cols-2 container mx-auto">
        {/* Content Column */}
        <div className="flex flex-col items-start gap-5 justify-center">
          <h1 className="font-bold uppercase text-2xl">Career Vision</h1>
          <div className="bg-[#eb2beb] h-[2px] w-20"></div>
          <p className="text-justify leading-6">
            As Chethan continues to evolve as a filmmaker, he is excited about
            leading larger-scale projects that challenge his craft and broaden
            his creative horizons. He aspires to contribute to films and
            commercials that are visually striking, emotionally engaging, and
            culturally relevant. With a passion for exploring new technologies
            and techniques, Chethan is committed to creating ground breaking
            films that not only push the boundaries of Indian cinema but also
            resonate on a global stage.
          </p>
          <button className="border border-black px-12 py-3 text-xl hover:bg-[#800080] hover:text-white transition duration-300 ease-in-out">
            More About Me
          </button>
        </div>

        {/* Image Column */}
        <div className="flex justify-end items-center">
          <img
            className="w-[100%] max-w-[550px] rounded-2xl shadow-2xl"
            src={image}
            alt=""
          />
        </div>
      </section>
    </section>
  );
}

export default Projects_Section2
