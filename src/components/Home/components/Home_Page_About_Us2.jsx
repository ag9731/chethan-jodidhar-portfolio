import React from "react";
import AboutUs from "../../../assets/Home_Page_About_Us/chetan_cinemas_bengaluru.webp";

const Home_Page_About_Us2 = () => {
  return (
    <section className="py-24">
      <section className="container mx-auto grid grid-cols-2">
        {/* About Us Content Section */}
        <div className="flex flex-col gap-10 justify-start items-start">
          <h1 className="text-4xl font-bold text-[#363636]">
            About{" "}
            <span className="font-signature text-[#800080] text-4xl">
              Chethan Jodidhar{" "}
            </span>
            .
          </h1>
          <p className="text-justify leading-6">
            <span className="font-semibold">Chethan Jodidhar </span> is a
            multifaceted filmmaker celebrated for his exceptional storytelling
            in Indian cinema. Known for his ability to weave compelling
            narratives that blend social commentary with mass entertainment, his
            films resonate on multiple levels—visually stunning, emotionally
            stirring, and intellectually stimulating. Whether it's a high-stakes
            action sequence or a poignant family moment, Chethan's films never
            fail to captivate and engage.
          </p>
          <p className="text-justify leading-6">
            With an emphasis on complex storytelling and the seamless
            integration of VFX and modern technology, Chethan’s work showcases a
            sophisticated understanding of narrative structure. As both a
            director and DOP, his signature style combines stunning visuals with
            deeply emotional storylines. His unique ability to create films that
            are not only visually impactful but also resonate with audiences on
            a human level is a key factor in his rise as a distinguished
            filmmaker. His films explore a wide range of genres, from
            action-packed blockbusters to socially relevant thrillers, making
            him a versatile force in the industry.
          </p>
          <button className="border border-black px-12 py-3 text-xl hover:bg-[#800080] hover:text-white transition duration-300 ease-in-out">
            More About Me
          </button>
        </div>

        {/* About Us Image Section */}
        <div className="flex justify-end">
          <img
            className="w-[70%] rounded-2xl shadow-massive"
            src={AboutUs}
            alt="chetan_cinemas_bengaluru"
          />
        </div>
      </section>
    </section>
  );
};

export default Home_Page_About_Us2;
