import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const LuxurySlide = ({ image, title, subtitle, number, children, direction }) => {
  const containerRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 100 };
  const xSpring = useSpring(mouseX, springConfig);
  const ySpring = useSpring(mouseY, springConfig);

  const bgX = useTransform(xSpring, [-0.5, 0.5], [15, -15]);
  const bgY = useTransform(ySpring, [-0.5, 0.5], [15, -15]);

  const handleMouseMove = (e) => {
    if (!containerRef.current || !isHovering) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    mouseX.set(0);
    mouseY.set(0);
  };
  const variants = {
    enter: (dir) => ({
      x: dir > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 1.05
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.5 },
        scale: { duration: 1.5, ease: "easeOut" }
      }
    },
    exit: (dir) => ({
      x: dir < 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.95,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.5 }
      }
    })
  };

  return (
    <motion.div
      ref={containerRef}
      className="absolute inset-0 w-full h-full flex flex-col items-center justify-center text-center overflow-hidden"
      custom={direction}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background Image with Parallax */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{ x: bgX, y: bgY, scale: 1.1 }}
      >
        <img
          src={image}
          alt={title || "Background"}
          className="w-full h-full object-cover opacity-80 mix-blend-multiply filter grayscale hover:grayscale-0 transition-all duration-1000"
        />
        {/* Dark elegant gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAFAFA]/40 via-transparent to-[#FAFAFA]/90 mix-blend-normal"></div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-8 w-full flex flex-col items-center justify-center">
        {number && (
          <motion.div 
            className="font-serif text-[10rem] md:text-[15rem] leading-none text-[#1A1A1A]/10 font-light absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none -z-10"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 1.5 }}
          >
            {number}
          </motion.div>
        )}
        
        {title && (
          <motion.h2 
            className="font-serif text-4xl md:text-6xl tracking-[0.15em] uppercase text-[#1A1A1A] mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {title}
          </motion.h2>
        )}
        
        {subtitle && (
          <motion.p 
            className="font-sans text-sm md:text-base tracking-[0.3em] uppercase text-[#CBA153] max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            {subtitle}
          </motion.p>
        )}

        {children && (
          <motion.div
            className="mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            {children}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default LuxurySlide;
