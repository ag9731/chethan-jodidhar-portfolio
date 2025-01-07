import React from "react";
import bannerImage from "../../../assets/About_Us/About_Us_Banner.webp";

const About_Us_Banner_Section = () => {
  return (
    <section>
      <div className="relative">
        <img src={bannerImage} alt="chetan_jodidhar_films" />
        <p className="absolute bottom-5 left-6 bg-black p-5 font-semibold text-4xl text-white">About Us</p>
      </div>
      <div className="py-5 bg-[#fefefe]">
        <h1 className="text-xl text-center text-[#3b444c] font-bold tracking-wider">
          Film Director | Director of Photography | Film Producer | Screenwriter
        </h1>
      </div>
    </section>
  );
};

export default About_Us_Banner_Section;
