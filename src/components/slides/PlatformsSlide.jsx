import React from 'react';
import { motion } from 'framer-motion';
import SlideWrapper from './SlideWrapper';

const PlatformsSlide = ({ direction }) => {
  const platforms = [
    { title: "THE TROLLEY", image: "https://images.unsplash.com/photo-1537832816519-689ad163238b?q=80&w=600&auto=format&fit=crop" },
    { title: "THE DANCING FOUNTAINS", image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=600&auto=format&fit=crop" },
    { title: "DIGITAL REACH", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop" },
    { title: "OOH IMPACT", image: "https://images.unsplash.com/photo-1519999482648-25049ddd37b1?q=80&w=600&auto=format&fit=crop" },
    { title: "SIGNATURE EVENTS", image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=600&auto=format&fit=crop" },
    { title: "EXPERIENTIAL MARKETING", image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=600&auto=format&fit=crop" }
  ];

  return (
    <SlideWrapper direction={direction} className="bg-[#EEF1F4] flex flex-col items-center justify-center pt-24 pb-12 overflow-y-auto">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full -z-10 fixed">
        <img 
          src="https://images.unsplash.com/photo-1545622783-b3e0214ee4f3?q=80&w=2000&auto=format&fit=crop" 
          alt="Background" 
          className="w-full h-full object-cover opacity-20 mix-blend-multiply filter grayscale hover:grayscale-0 transition-all duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#EEF1F4]/70 via-[#EEF1F4]/90 to-[#EEF1F4] mix-blend-normal"></div>
      </div>

      <motion.div 
        className="flex flex-col items-center mb-12 relative z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <h2 className="font-serif text-3xl md:text-4xl tracking-[0.2em] uppercase text-[#2A3B4C] mb-2 text-center">
          UNIQUE PROMOTIONAL PLATFORMS
        </h2>
        <p className="font-serif italic text-sm text-gray-500">
          Click on options below to learn more
        </p>
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl px-12 w-full"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.7 } }
        }}
      >
        {platforms.map((platform, idx) => (
          <motion.div 
            key={idx}
            className="flex flex-col bg-white shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer group transform hover:-translate-y-2 border border-transparent hover:border-[#CBA153]"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { type: "spring", damping: 20 } }
            }}
          >
            <div className="h-48 overflow-hidden w-full relative">
              <img 
                src={platform.image} 
                alt={platform.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="py-4 px-6 text-center bg-white border-t border-gray-100 z-10">
              <span className="font-sans text-xs font-bold tracking-[0.2em] text-[#2A3B4C] group-hover:text-[#CBA153] transition-colors">
                {platform.title}
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </SlideWrapper>
  );
};

export default PlatformsSlide;
