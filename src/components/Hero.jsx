import React, { useState, useEffect } from "react";
import heroImageIan from "../assets/ianHeroImg.webp";

const Hero = () => {
  const words = ["ACTOR", "MUSICO", "MODELO", "INFLUENCER"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-black flex items-center" id="inicio">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center text-center md:text-left order-2 md:order-1">
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
             
              <span className="text-5xl md:text-6xl lg:text-7xl">IAN LUNA</span>
            </h1>
            <div className="flex flex-wrap justify-center md:justify-start gap-2">
              {words.map((word, index) => (
                <div
                  key={word}
                  className={`px-3 md:px-4 py-1 md:py-2 text-xs md:text-sm font-bold ${
                    currentWordIndex === index ? 'bg-accent text-white' : 'bg-gray-800 text-gray-400'
                  }`}
                >
                  {word}
                </div>
              ))}
            </div>
          </div>
          <div className="relative w-full max-w-md mx-auto md:max-w-none order-1 md:order-2">
            <div className="absolute top-0 left-0 w-full h-full opacity-20"></div>
            <img
              src={heroImageIan}
              alt="Imagen de perfil del actor Ian"
              title="Imagen de perfil del actor Ian"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
