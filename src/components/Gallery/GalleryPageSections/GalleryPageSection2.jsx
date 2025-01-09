import React, { useCallback, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import img1 from "../../../assets/GalleryImages/1.webp";
import img2 from "../../../assets/GalleryImages/2.webp";
import img3 from "../../../assets/GalleryImages/3.webp";
import img4 from "../../../assets/GalleryImages/4.webp";
import img5 from "../../../assets/GalleryImages/5.webp";
import img6 from "../../../assets/GalleryImages/6.webp";
import img7 from "../../../assets/GalleryImages/7.webp";
import img8 from "../../../assets/GalleryImages/8.webp";
import img9 from "../../../assets/GalleryImages/9.webp";
import img10 from "../../../assets/GalleryImages/10.webp";
import img11 from "../../../assets/GalleryImages/11.webp";
import img12 from "../../../assets/GalleryImages/12.webp";
import img13 from "../../../assets/GalleryImages/13.webp";
import img14 from "../../../assets/GalleryImages/14.webp";
import img15 from "../../../assets/GalleryImages/15.webp";
import img16 from "../../../assets/GalleryImages/16.webp";
import img17 from "../../../assets/GalleryImages/17.webp";
import img18 from "../../../assets/GalleryImages/18.webp";
import img19 from "../../../assets/GalleryImages/19.webp";
import img20 from "../../../assets/GalleryImages/20.webp";


const GalleryPageSection2 = () => {

  const gallery = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
    img17,
    img18,
    img19,
    img20,
  ];
  const [currentIndex, setCurrentIndex] = useState(null);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleImageClick = (index) => setCurrentIndex(index);

  const handleCloseModal = () => setCurrentIndex(null);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : gallery.length - 1));
  }, [gallery.length]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev < gallery.length - 1 ? prev + 1 : 0));
  }, [gallery.length]);

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 150) {
      handleNext();
    }

    if (touchStart - touchEnd < -150) {
      handlePrev();
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (currentIndex === null) return;
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "Escape") handleCloseModal();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex, handleNext, handlePrev]);

  return (
    <section className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {gallery.map((image, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-lg cursor-pointer aspect-square"
          >
            <img
              src={image}
              alt={`Gallery image ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              onClick={() => handleImageClick(index)}
            />
          </div>
        ))}
      </div>
      {currentIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl w-full h-full flex items-center justify-center">
            <img
              src={gallery[currentIndex]}
              alt="Selected"
              className="max-w-full max-h-full object-contain"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            />
            <button
              className="absolute top-4 right-4 text-white bg-gray-700 bg-opacity-50 hover:bg-opacity-75 rounded-full w-10 h-10 flex items-center justify-center transition-colors duration-200"
              onClick={handleCloseModal}
            >
              <X size={24} />
            </button>
            <button
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-gray-700 bg-opacity-50 hover:bg-opacity-75 rounded-full w-10 h-10 flex items-center justify-center transition-colors duration-200"
              onClick={handlePrev}
            >
              <ChevronLeft size={24} />
            </button>
            <button
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-gray-700 bg-opacity-50 hover:bg-opacity-75 rounded-full w-10 h-10 flex items-center justify-center transition-colors duration-200"
              onClick={handleNext}
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default GalleryPageSection2;
