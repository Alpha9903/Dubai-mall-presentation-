import React from 'react';
import { motion } from 'framer-motion';

export const slideVariants = {
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

const SlideWrapper = ({ direction, children, className = "" }) => {
  return (
    <motion.div
      className={`absolute inset-0 w-full h-full overflow-hidden ${className}`}
      custom={direction}
      variants={slideVariants}
      initial="enter"
      animate="center"
      exit="exit"
    >
      {children}
    </motion.div>
  );
};

export default SlideWrapper;
