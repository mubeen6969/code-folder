import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { CAROUSEL_IMAGES } from '../../Constants';

const HeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(1); // middle image focused

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % CAROUSEL_IMAGES.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + CAROUSEL_IMAGES.length) % CAROUSEL_IMAGES.length
    );
  };

  return (
    <div className="relative w-full py-16 flex flex-col items-center overflow-hidden">
      
      {/* Cards Container */}
      <div className="relative h-[450px] w-full max-w-6xl flex items-center justify-center perspective-1000">
        {CAROUSEL_IMAGES.map((item, index) => {
          const diff =
            (index - currentIndex + CAROUSEL_IMAGES.length) %
            CAROUSEL_IMAGES.length;

          let offset = diff;
          if (offset > CAROUSEL_IMAGES.length / 2) {
            offset -= CAROUSEL_IMAGES.length;
          }

          const absOffset = Math.abs(offset);
          const isActive = absOffset <= 2;

          if (!isActive) return null;

          return (
            <motion.div
              key={item.id}
              initial={false}
              animate={{
                x: offset * 220,
                scale: 1 - absOffset * 0.15,
                zIndex: 10 - absOffset,
                opacity: 1 - absOffset * 0.3,
                rotateY: offset * -15,
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="absolute w-[280px] h-[400px] rounded-[32px] overflow-hidden shadow-2xl cursor-pointer"
              onClick={() => setCurrentIndex(index)}
            >
              <img
                src={item.url}
                alt={item.alt}
                className="w-full h-full object-cover select-none pointer-events-none"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </motion.div>
          );
        })}
      </div>

      {/* Navigation Buttons */}
      <div className="flex gap-4 mt-8">
        <button
          onClick={handlePrev}
          className="p-2 rounded-full bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all text-gray-400 hover:text-gray-800"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={handleNext}
          className="p-2 rounded-full bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all text-gray-400 hover:text-gray-800"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default HeroCarousel;
