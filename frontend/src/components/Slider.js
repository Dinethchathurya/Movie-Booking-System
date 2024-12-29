import React, { useEffect, useState } from "react";
import movies from "../constant/movies";

function Slider() {
  // Extract cover images from the movies list
  const images = movies.map((movie) => movie.cover);
  const mobileImages = movies.map((movieMobile) => movieMobile.image);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-auto overflow-hidden">
      <div className="relative">
        <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#020025] to-transparent z-10"></div>
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#020025] to-transparent z-10"></div>
        <img
          src={images[currentImageIndex]}
          alt={`Movie Poster ${currentImageIndex + 1}`}
          className="w-full h-auto block hidden sm:block"
        />
        <img
          src={mobileImages[currentImageIndex]}
          alt={`Movie Poster ${currentImageIndex + 1}`}
          className="w-full h-auto block block sm:hidden"
        />
      </div>
    </div>
  );
}

export default Slider;
