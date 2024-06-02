import React from 'react';
import Image from 'next/image';

interface ImageSliderProps {
  images: string[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  return (
    <div className="container mx-auto mt-8 relative w-4/5 h-0 pb-[40%]">
      {images.map((_, index) => (
        <input
          key={index}
          type="radio"
          id={`i${index + 1}`}
          name="images"
          defaultChecked={index === 0}
          className="hidden"
        />
      ))}

      <div className="absolute w-full h-full z-0">
        {images.map((image, index) => (
          <div key={index} className="absolute w-full h-full" id={`slide${index + 1}`}>
            <Image src={image} alt={`Slide ${index + 1}`} layout="fill" objectFit="cover" />
            <label
              className="prev absolute w-12 h-full top-0 left-0 bg-red-200 hover:bg-red-800 cursor-pointer flex items-center justify-center"
              htmlFor={`i${(index - 1 + images.length) % images.length + 1}`}
            >
              <span className="w-0 h-0 border-t-8 border-b-8 border-r-8 border-transparent border-r-white"></span>
            </label>
            <label
              className="next absolute w-12 h-full top-0 right-0 bg-red-200 hover:bg-red-800 cursor-pointer flex items-center justify-center"
              htmlFor={`i${(index + 1) % images.length + 1}`}
            >
              <span className="w-0 h-0 border-t-8 border-b-8 border-l-8 border-transparent border-l-white"></span>
            </label>
          </div>
        ))}
      </div>

      <div className="absolute w-full bottom-12 text-center z-10">
        {images.map((_, index) => (
          <label
            key={index}
            htmlFor={`i${index + 1}`}
            className="inline-block w-4 h-4 mx-1 bg-gray-600 rounded-full cursor-pointer hover:bg-gray-800"
          ></label>
        ))}
      </div>

      <div className="yt mx-auto mt-8 w-20 h-10 rounded bg-blue-500 flex items-center justify-center shadow-md opacity-40 hover:opacity-80 transition duration-300">
        <a href='https://www.youtube.com/watch?v=z74ExMz-cWU' target="_blank" rel="noopener noreferrer" className="text-white text-xl">See Video</a>
      </div>
    </div>
  );
};

export default ImageSlider;
