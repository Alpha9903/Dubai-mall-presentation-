import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LuxuryHeader = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navMapping = {
    'PRESS': 1,
    'PROPERTIES': 2,
    'PLATFORMS': 3,
    'EXPERIENCES': 5
  };

  const handleNavClick = (e, item) => {
    e.preventDefault();
    setIsOpen(false);
    if (onNavigate && navMapping[item] !== undefined) {
      setTimeout(() => onNavigate(navMapping[item]), 400); // Wait for menu exit animation
    }
  };

  return (
    <>
      <header className={`fixed top-0 left-0 w-full p-8 z-[999] flex justify-between items-center text-white pointer-events-none ${isOpen ? '' : 'mix-blend-difference'}`}>
        <div className="font-serif text-2xl tracking-widest uppercase relative pointer-events-auto">
          The Dubai Mall
        </div>
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="p-4 -m-4 cursor-pointer transition-transform hover:scale-105 relative pointer-events-auto"
          aria-label="Menu"
        >
          {isOpen ? (
            <span className="font-sans text-xs tracking-[0.3em] uppercase font-bold">CLOSE</span>
          ) : (
            <svg width="32" height="12" viewBox="0 0 32 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="32" height="1" fill="currentColor"/>
              <rect y="11" width="24" height="1" fill="currentColor"/>
            </svg>
          )}
        </button>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="fixed inset-0 bg-[#1A1A1A] z-40 flex flex-col items-center justify-center"
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <nav className="flex flex-col gap-10 text-center">
              {['EXPERIENCES', 'PROPERTIES', 'PLATFORMS', 'PRESS'].map((item, idx) => (
                <motion.a 
                  key={item} 
                  href="#"
                  onClick={(e) => handleNavClick(e, item)}
                  className="font-serif text-4xl md:text-6xl text-[#FAFAFA] hover:text-[#CBA153] transition-colors tracking-widest uppercase"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + (idx * 0.1) }}
                >
                  {item}
                </motion.a>
              ))}
            </nav>
            <motion.div 
              className="absolute bottom-12 font-sans text-xs tracking-widest text-gray-500 uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              The Center of Now
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default LuxuryHeader;
