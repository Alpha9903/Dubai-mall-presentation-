import React from 'react';
import { motion } from 'framer-motion';

const RecognitionSection = () => {
  return (
    <section className="snap-section min-h-screen w-full flex flex-col justify-center py-24 px-8 md:px-24 relative z-10 bg-white/50">
      <motion.h2 
        className="font-serif text-3xl md:text-5xl tracking-[0.2em] uppercase mb-24 text-center w-full"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1 }}
      >
        Global Recognition
      </motion.h2>

      <div className="flex flex-col lg:flex-row gap-24 max-w-7xl mx-auto w-full items-center">
        {/* Left Column - Image & Button */}
        <motion.div 
          className="w-full lg:w-1/2 flex flex-col items-start"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="w-full aspect-[3/4] bg-neutral-200 relative overflow-hidden mb-12">
            <img 
              src="https://images.unsplash.com/photo-1582063289053-bc2a25df200a?q=80&w=1000&auto=format&fit=crop" 
              alt="Luxury Magazine Cover" 
              className="w-full h-full object-cover filter grayscale opacity-80 mix-blend-multiply transition-transform duration-1000 hover:scale-105 hover:grayscale-0 hover:opacity-100"
            />
          </div>
          <button className="font-sans text-xs tracking-[0.3em] uppercase border-b border-[#1A1A1A] pb-2 hover:text-[#CBA153] hover:border-[#CBA153] transition-colors">
            View More Features
          </button>
        </motion.div>

        {/* Right Column - Quotes */}
        <div className="w-full lg:w-1/2 flex flex-col gap-24">
          <motion.div 
            className="relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <span className="absolute -top-16 -left-8 font-serif text-[8rem] text-[#E5E5E5] leading-none select-none">"</span>
            <blockquote className="font-serif italic text-2xl md:text-3xl leading-relaxed text-[#1A1A1A] relative z-10">
              A masterclass in experiential retail. The Dubai Mall has redefined the intersection of luxury, commerce, and pure spectacle on a global scale.
            </blockquote>
            <div className="mt-8 font-sans font-bold text-sm tracking-widest text-[#1A1A1A]">
              FORBES
            </div>
          </motion.div>

          <motion.div 
            className="relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <span className="absolute -top-16 -left-8 font-serif text-[8rem] text-[#E5E5E5] leading-none select-none">"</span>
            <blockquote className="font-serif italic text-2xl md:text-3xl leading-relaxed text-[#1A1A1A] relative z-10">
              Not merely a destination for acquisition, but a meticulously curated exhibition of the world's most coveted brands and experiences.
            </blockquote>
            <span className="absolute -bottom-24 right-0 font-serif text-[8rem] text-[#E5E5E5] leading-none select-none">"</span>
            <div className="mt-8 font-sans font-bold text-sm tracking-widest text-[#1A1A1A]">
              VOGUE BUSINESS
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RecognitionSection;
