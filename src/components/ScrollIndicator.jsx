import React from 'react';
import { motion } from 'framer-motion';

const ScrollIndicator = () => {
  return (
    <motion.div 
      className="fixed right-8 top-1/2 -translate-y-1/2 z-40 mix-blend-difference text-white"
      animate={{ x: [0, 10, 0] }}
      transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
    >
      <svg width="24" height="40" viewBox="0 0 24 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotate-90">
        <path d="M12 40L12 2M12 2L2 12M12 2L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="square"/>
      </svg>
    </motion.div>
  );
};

export default ScrollIndicator;
