import React from "react";
import image1 from "../../../assets/About_Us/AboutUsGallerySection/chethanjodidhar1.webp";
import image2 from "../../../assets/About_Us/AboutUsGallerySection/chethanjodidhar2.webp";
import image3 from "../../../assets/About_Us/AboutUsGallerySection/chethanjodidhar3.webp";

const About_Us_Section2 = () => {
  const imageArray = [
    {
      img1: image1,
      alt: "Chethan Jodidhar Films Banglore",
    },
    {
      img1: image2,
      alt: "Chethan Jodidhar Films Banglore",
    },
    {
      img1: image3,
      alt: "Chethan Jodidhar Films Banglore",
    },
  ];
  return (
    <section className="py-24 bg-[#000000]">
      {/* About Us Content Section */}
      <div className="flex flex-col gap-8 justify-center items-center container mx-auto">
        <h1 className="text-4xl font-light text-center text-[#ffff]">
          <span className="font-signature text-[#ffff] track text-5xl tracking-widest">
            Chethan Jodidhar{" "}
          </span>
        </h1>
        <div className="bg-[#800080] w-full h-[3px] flex items-center justify-center"></div>
        <p className="text-[#cecfd0] text-center">
          Chethan Jodidhar is a multifaceted filmmaker celebrated for his
          exceptional storytelling in Indian cinema. Known for his ability to
          weave compelling narratives that blend social commentary with mass
          entertainment, his films resonate on multiple levels—visually
          stunning, emotionally stirring, and intellectually stimulating.
          Whether it's a high-stakes action sequence or a poignant family
          moment, Chethan's films never fail to captivate and engage.
        </p>
        <p className="text-[#cecfd0] text-center">
          With an emphasis on complex storytelling and the seamless integration
          of VFX and modern technology, Chethan’s work showcases a sophisticated
          understanding of narrative structure. As both a director and DOP, his
          signature style combines stunning visuals with deeply emotional
          storylines. His unique ability to create films that are not only
          visually impactful but also resonate with audiences on a human level
          is a key factor in his rise as a distinguished filmmaker. His films
          explore a wide range of genres, from action-packed blockbusters to
          socially relevant thrillers, making him a versatile force in the
          industry.
        </p>
      </div>

      {/* About Us Gallery Section */}
      <div className="grid grid-cols-3 container mx-auto gap-10 mt-10">
        {imageArray.map((items, index) => {
          return (
            <>
              <div key={index} className={`${index === 1 ? "mt-10" : ""}`}>
                <img
                  className="border-8 border-white-500 animate-up-down"
                  src={items.img1}
                  alt={items.alt}
                />
              </div>
            </>
          );
        })}
      </div>
    </section>
  );
};

export default About_Us_Section2;