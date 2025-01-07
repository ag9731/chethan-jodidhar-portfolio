import React from "react";
import slide1 from "../../../assets/Home_Banner_Images/chetan_cinemas_banner1.webp";
import slide2 from "../../../assets/Home_Banner_Images/chetan_cinemas_benner2.webp";
import slide3 from "../../../assets/Home_Banner_Images/chetan_cinemas_benner3.webp";
import slide4 from "../../../assets/Home_Banner_Images/chetan_cinemas_banner4.webp";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Using react-icons for arrow icons

const Home_Banner_Section = () => {
  const slides = [
    {
      image: slide2,
      alt: "chetan_cinemas_banglore",
    },
    {
      image: slide3,
      alt: "chetan_cinemas_banglore",
    },
    {
      image: slide4,
      alt: "chetan_cinemas_banglore",
    },
    {
      image: slide1,
      alt: "chetan_cinemas_banglore",
    },
  ];

  // Custom Previous Arrow
  const PreviousArrow = ({ onClick }) => {
    return (
      <button
        className="absolute top-1/2 left-4 z-10 transform -translate-y-1/2  text-white rounded-full p-2 shadow-md hover:bg-gray-200"
        onClick={onClick}
      >
        <FaChevronLeft size={20} />
      </button>
    );
  };

  // Custom Next Arrow
  const NextArrow = ({ onClick }) => {
    return (
      <button
        className="absolute top-1/2 right-4 z-10 transform -translate-y-1/2 text-white rounded-full p-2 shadow-md hover:bg-gray-200"
        onClick={onClick}
      >
        <FaChevronRight size={20} />
      </button>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PreviousArrow />,
    nextArrow: <NextArrow />,
    pauseOnHover: false,
    autoplay: true,
    autoplaySpeed: 2500,
  };

  return (
    <section className="relative overflow-hidden">
      <Slider {...settings}>
        {slides.map((item, index) => (
          <div key={index} className="relative w-full h-[85vh] overflow-hidden">
            {/* Image */}
            <img
              className="w-full h-full object-cover"
              src={item.image}
              alt={item.alt}
            />
            {/* Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-10"></div>
          </div>
        ))}
      </Slider>

      <div className="absolute top-0 left-0 ">
        <h1 className="text-white font-bold tracking-wide font-signature text-5xl ml-10 mt-14">
          Chetan Jodidhar
        </h1>
        <p className="text-white ml-10 mt-3 font-normal bg-[#800080] bg-opacity-30 py-1 px-1">
          <span>Film Director </span>| Director of Photography | Film Producer |
          Screenwriter{" "}
        </p>
      </div>
    </section>
  );
};

export default Home_Banner_Section;
