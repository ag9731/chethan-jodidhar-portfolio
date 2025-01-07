import React from "react";
import bannerImage from "../../../assets/About_Us/About_Us_Banner.webp";

const About_Us_Banner_Section = () => {
  return (
    <section>
      <div>
        <img src={bannerImage} alt="chetan_jodidhar_films" />
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
