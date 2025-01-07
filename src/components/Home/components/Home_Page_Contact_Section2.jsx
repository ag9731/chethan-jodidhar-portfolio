import React from "react";
import img1 from "../../../assets/Home_Page_About_Us/chetan_cinemas_banglore_contact_us.webp";

const Home_Page_Contact_Section2 = () => {
  return (
    <section className="bg-[#800080]">
      <section className="container mx-auto py-5 flex gap-10 items-center">
        <div>
          {/* Add the animation class to the image */}
          <img
            className="w-96 rounded-full shadow-massive animate-up-down"
            src={img1}
            alt="Gallery"
          />
        </div>
        <div className="flex flex-col items-start gap-5">
          <p className="text-white">
            Step into our world of creativity and elegance. Explore our gallery
            to discover stunning moments and inspiring creations that define our
            vision.
          </p>
          <button className="border border-black px-12 py-3 text-xl bg-white hover:bg-[#fffff] hover:text-[#800080] transition duration-300 ease-in-out">
            Explore Our Gallery
          </button>
        </div>
      </section>
    </section>
  );
};

export default Home_Page_Contact_Section2;
