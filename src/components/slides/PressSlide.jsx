import React from 'react';
import { motion } from 'framer-motion';
import SlideWrapper from './SlideWrapper';

const PressSlide = ({ direction }) => {
  const quotes = [
    { text: "The Grove's 58 stores and restaurants welcomed 20 million visitors last year, more than the Great Wall of China or Disneyland.", source: "Forbes" },
    { text: "Caruso thinks analytically and is solution driven - a trait he reinforces at every rung of the company hierarchy.", source: "CSQ" },
    { text: "Rick Caruso has altered the way Southern Californians shop and play.", source: "VARIETY" },
    { text: "...a developer who defines not just his city but his time.", source: "Los Angeles Times" }
  ];

  return (
    <SlideWrapper direction={direction} className="bg-[#FAFAFA] flex flex-col items-center justify-center text-[#1A1A1A]">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full -z-10">
        <img 
          src="https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c?q=80&w=2000&auto=format&fit=crop" 
          alt="Background" 
          className="w-full h-full object-cover opacity-20 mix-blend-multiply filter grayscale hover:grayscale-0 transition-all duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAFAFA]/60 via-[#FAFAFA]/90 to-[#FAFAFA] mix-blend-normal"></div>
      </div>

      <motion.h2 
        className="font-serif text-3xl md:text-5xl tracking-[0.2em] uppercase mb-16 text-center text-[#2A3B4C] relative z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        IN THE PRESS
      </motion.h2>

      <div className="flex flex-col lg:flex-row gap-16 max-w-7xl w-full px-12 items-center justify-center">
        {/* Magazine Cover */}
        <motion.div 
          className="w-full lg:w-[400px] flex-shrink-0 flex flex-col group cursor-pointer"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <div className="overflow-hidden border border-gray-200 shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800&auto=format&fit=crop" 
              alt="Magazine Cover" 
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <button className="mt-4 py-3 border border-gray-300 text-xs tracking-widest font-bold uppercase hover:bg-[#2A3B4C] hover:text-white transition-colors duration-300">
            View More News Stories
          </button>
        </motion.div>

        {/* Quotes Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 w-full"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.8 } }
          }}
        >
          {quotes.map((quote, idx) => (
            <motion.div 
              key={idx} 
              className="flex flex-col items-center text-center px-4"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
              }}
            >
              <div className="font-serif text-4xl text-gray-300 mb-2 leading-none">“</div>
              <p className="font-serif italic text-lg leading-relaxed mb-6 text-[#1A1A1A]">
                {quote.text}
              </p>
              <div className="font-serif text-4xl text-gray-300 mb-4 leading-none rotate-180">“</div>
              <span className="font-sans font-extrabold text-sm tracking-widest uppercase">
                {quote.source}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SlideWrapper>
  );
};

export default PressSlide;
