import React from 'react';
import { motion } from 'framer-motion';
import SlideWrapper from './SlideWrapper';

const TimelineSlide = ({ direction }) => {
  const milestones = [
    { year: '2008', title: 'Grand Opening', desc: 'Officially opened as the world\'s largest shopping mall with over 600 retailers.' },
    { year: '2010', title: 'Dubai Aquarium', desc: 'Unveiled one of the world\'s largest suspended aquariums, featuring 33,000 aquatic animals.' },
    { year: '2016', title: 'VR Park Launch', desc: 'Launched the Middle East\'s first immersive VR theme park spanning 7,000 sqm.' },
    { year: '2017', title: 'Digital Transformation', desc: 'Introduced smart wayfinding, app-based parking, and personalized visitor experiences.' },
    { year: '2022', title: 'Sustainability Drive', desc: 'Achieved LEED Gold certification and implemented comprehensive green energy initiatives.' },
    { year: '2024', title: 'Future Vision', desc: 'Announced expansion plans with new entertainment districts and 500+ additional retail spaces.' },
  ];

  return (
    <SlideWrapper direction={direction} className="bg-[#0f0f0f] flex flex-col items-center justify-center pt-20 pb-12 overflow-y-auto">
      {/* Background subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f0f0f] via-[#1a1205] to-[#0f0f0f] -z-10" />

      <motion.div
        className="relative z-10 text-center mb-14"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <h2 className="font-serif text-3xl md:text-5xl tracking-[0.2em] uppercase text-[#CBA153] mb-2">
          OUR JOURNEY
        </h2>
        <p className="font-sans text-xs tracking-[0.3em] uppercase text-white/40">
          Defining luxury retail since 2008
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="relative z-10 max-w-4xl w-full px-8">
        {/* Vertical line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-[#CBA153]/20 md:-translate-x-px" />

        {milestones.map((milestone, idx) => {
          const isLeft = idx % 2 === 0;
          return (
            <motion.div
              key={idx}
              className={`relative flex items-start mb-10 md:mb-12 ${
                isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + idx * 0.2, duration: 0.7, ease: 'easeOut' }}
            >
              {/* Dot on timeline */}
              <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-[#CBA153] rounded-full -translate-x-1.5 mt-1.5 shadow-[0_0_10px_rgba(203,161,83,0.5)] z-20" />

              {/* Content card */}
              <div className={`ml-10 md:ml-0 md:w-[45%] ${isLeft ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
                <motion.div
                  className="group cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <span className="font-serif text-3xl md:text-4xl text-[#CBA153]/60 group-hover:text-[#CBA153] transition-colors duration-300">
                    {milestone.year}
                  </span>
                  <h3 className="font-sans text-sm font-bold tracking-[0.2em] uppercase text-white/80 mt-1 mb-2 group-hover:text-white transition-colors">
                    {milestone.title}
                  </h3>
                  <p className="font-serif text-sm text-white/40 leading-relaxed group-hover:text-white/60 transition-colors">
                    {milestone.desc}
                  </p>
                </motion.div>
              </div>

              {/* Empty space for other side on desktop */}
              <div className="hidden md:block md:w-[45%]" />
            </motion.div>
          );
        })}
      </div>
    </SlideWrapper>
  );
};

export default TimelineSlide;
