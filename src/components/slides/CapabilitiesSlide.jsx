import React from 'react';
import { motion } from 'framer-motion';
import SlideWrapper from './SlideWrapper';
import { Calendar, PenTool, ClipboardList, Radio } from 'lucide-react';

const CapabilitiesSlide = ({ direction }) => {
  const capabilities = [
    { title: "EVENT MARKETING", icon: Calendar },
    { title: "CREATIVE SERVICES", icon: PenTool },
    { title: "PROJECT MANAGEMENT", icon: ClipboardList },
    { title: "MARKETING AMPLIFICATION", icon: Radio }
  ];

  return (
    <SlideWrapper direction={direction} className="bg-[#FAFAFA] flex flex-col items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full -z-10">
        <img 
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop" 
          alt="Background" 
          className="w-full h-full object-cover opacity-20 mix-blend-multiply filter grayscale hover:grayscale-0 transition-all duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAFAFA]/70 via-[#FAFAFA]/90 to-[#FAFAFA] mix-blend-normal"></div>
      </div>

      <motion.div 
        className="flex flex-col items-center mb-20 relative z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <h2 className="font-serif text-3xl md:text-5xl tracking-[0.2em] uppercase text-[#2A3B4C] mb-2 text-center">
          CAPABILITIES
        </h2>
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl px-12 w-full"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.7 } }
        }}
      >
        {capabilities.map((cap, idx) => {
          const Icon = cap.icon;
          return (
            <motion.div 
              key={idx}
              className="flex flex-col items-center justify-center bg-[#F4F7F9] border border-gray-200 py-16 px-8 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer group"
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1, transition: { type: "spring", damping: 20 } }
              }}
              whileHover={{ y: -10, borderColor: "#CBA153" }}
            >
              <div className="text-[#2A3B4C] group-hover:text-[#CBA153] transition-colors duration-300 mb-8">
                <Icon size={64} strokeWidth={1.5} />
              </div>
              <span className="font-sans text-xs md:text-sm font-bold tracking-[0.2em] text-[#2A3B4C] text-center max-w-[150px] leading-relaxed">
                {cap.title}
              </span>
            </motion.div>
          );
        })}
      </motion.div>
    </SlideWrapper>
  );
};

export default CapabilitiesSlide;
