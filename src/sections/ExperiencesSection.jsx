import React from 'react';
import { motion } from 'framer-motion';

const ExperiencesSection = () => {
  const experiences = [
    "Luxury Fashion Avenue",
    "Dubai Aquarium & Underwater Zoo",
    "The Dubai Fountain",
    "Burj Khalifa At The Top",
    "Dubai Ice Rink",
    "VR Park Dubai",
    "Souk Al Bahar",
    "Reel Cinemas"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section className="snap-section min-h-screen w-full flex flex-col items-center justify-center py-24 px-8 relative z-10">
      <motion.h2 
        className="font-serif text-3xl md:text-5xl tracking-[0.2em] uppercase mb-24 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1 }}
      >
        World-Class Experiences
      </motion.h2>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-24 max-w-7xl mx-auto w-full"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {experiences.map((exp, index) => (
          <motion.div key={index} variants={itemVariants} className="flex flex-col items-center text-center group">
            <span className="font-serif text-[8rem] leading-none text-[#E5E5E5] font-light mb-6 transition-colors duration-500 group-hover:text-[#CBA153]">
              {index + 1}
            </span>
            <p className="font-sans text-sm tracking-wider uppercase text-[#1A1A1A] max-w-[200px]">
              {exp}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ExperiencesSection;
