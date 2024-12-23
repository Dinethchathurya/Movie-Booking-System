import React, { useEffect, useState } from 'react';
import image1 from '../assets/slider_image1.jpg';
import image2 from '../assets/slider_image2.jpg';
import image3 from '../assets/slider_image3.jpg';

function Slider() {
  const images = [
    image1, 
    image2,
    image3,
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval); 
  }, [images.length]);

  return (
    <div className="relative w-full h-auto overflow-hidden">
      <img
        src={images[currentImageIndex]}
        alt="Movie Poster"
        className="w-full h-auto block"
      />
    </div>
  );
}

export default Slider;
