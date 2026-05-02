import React from 'react';
import { motion } from 'framer-motion';
import SlideWrapper from './SlideWrapper';

const PropertiesSlide = ({ direction }) => {
  return (
    <SlideWrapper direction={direction} className="bg-[#FAFAFA] flex flex-col items-center">
      <motion.div 
        className="w-full pt-20 pb-8 flex flex-col items-center bg-white z-10 shadow-sm"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <h2 className="font-serif text-3xl md:text-4xl tracking-[0.2em] uppercase text-[#2A3B4C] mb-2">
          OUR PROPERTIES
        </h2>
        <p className="font-serif italic text-sm text-gray-500">
          Click on locations to learn more
        </p>
      </motion.div>

      <div className="relative w-full flex-grow overflow-hidden">
        {/* Map Background */}
        <motion.img 
          src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2000&auto=format&fit=crop" 
          alt="Map Background"
          className="absolute inset-0 w-full h-full object-cover opacity-30 grayscale"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.3 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />

        {/* Animated Map Dots */}
        {[
          { top: '30%', left: '40%' },
          { top: '50%', left: '30%' },
          { top: '60%', left: '55%' },
          { top: '45%', left: '70%' },
        ].map((pos, idx) => (
          <motion.div
            key={idx}
            className="absolute w-4 h-4 rounded-full border-2 border-[#CBA153] bg-white cursor-pointer"
            style={{ top: pos.top, left: pos.left }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1 + (idx * 0.2), type: "spring" }}
            whileHover={{ scale: 1.5, backgroundColor: "#CBA153" }}
          />
        ))}

        {/* Floating Stats Card */}
        <motion.div 
          className="absolute left-1/2 md:left-24 top-1/2 -translate-y-1/2 -translate-x-1/2 md:translate-x-0 w-[90%] md:w-[400px] bg-white/95 backdrop-blur-sm p-10 shadow-2xl flex flex-col items-center text-center border border-gray-100"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, type: "spring", damping: 25 }}
        >
          <div className="text-[#2A3B4C] mb-6">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="mx-auto mb-2">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            <h3 className="font-sans tracking-[0.3em] text-xs font-bold uppercase">THE GROVE</h3>
          </div>

          <p className="font-serif text-sm leading-relaxed mb-8">
            The Grove is a popular fashion and lifestyle destination offering the best mix of retail, restaurants and entertainment in Los Angeles.
            <br/><br/>
            Pulsing with style and energy, it's a gathering place where friends and families spend whole days shopping, dining, seeing movies and relaxing.
          </p>

          <div className="grid grid-cols-2 gap-y-8 gap-x-4 w-full">
            <div>
              <div className="font-serif text-3xl text-[#2A3B4C]">20M</div>
              <div className="font-sans text-[10px] uppercase font-bold tracking-widest text-gray-500">Annual Guests</div>
            </div>
            <div>
              <div className="font-serif text-3xl text-[#2A3B4C]">90K</div>
              <div className="font-sans text-[10px] uppercase font-bold tracking-widest text-gray-500">Visitors Per Day</div>
            </div>
            <div>
              <div className="font-serif text-3xl text-[#2A3B4C]">$123K</div>
              <div className="font-sans text-[10px] uppercase font-bold tracking-widest text-gray-500">Median HHI</div>
            </div>
            <div>
              <div className="font-serif text-3xl text-[#2A3B4C]">78</div>
              <div className="font-sans text-[10px] uppercase font-bold tracking-widest text-gray-500">Zip Codes</div>
            </div>
          </div>
        </motion.div>
      </div>
    </SlideWrapper>
  );
};

export default PropertiesSlide;
