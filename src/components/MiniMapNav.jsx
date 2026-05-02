import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Grid3X3, X } from 'lucide-react';

const slideLabels = [
  'Intro',
  'Press',
  'Properties',
  'Platforms',
  'Capabilities',
  'Stats',
  'Fashion',
  'Aquarium',
  'Dining',
  'Timeline',
];

const MiniMapNav = ({ isOpen, onToggle, currentSlide, onNavigate, totalSlides }) => {
  return (
    <>
      {/* Toggle Button */}
      <motion.button
        onClick={onToggle}
        className="fixed bottom-8 right-8 z-[60] w-12 h-12 bg-black/80 backdrop-blur-md border border-[#CBA153]/30 rounded-full flex items-center justify-center text-[#CBA153] hover:bg-[#CBA153] hover:text-black transition-colors duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isOpen ? <X size={18} /> : <Grid3X3 size={18} />}
      </motion.button>

      {/* Overlay Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[55] bg-black/60 backdrop-blur-sm flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onToggle}
          >
            <motion.div
              className="bg-[#111] border border-[#CBA153]/20 p-8 rounded-sm max-w-3xl w-full mx-4"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="font-serif text-xl tracking-[0.2em] uppercase text-[#CBA153] mb-6 text-center">
                Navigate
              </h3>

              <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                {Array.from({ length: totalSlides }).map((_, idx) => (
                  <motion.button
                    key={idx}
                    onClick={() => {
                      onNavigate(idx);
                      onToggle();
                    }}
                    className={`relative p-4 border text-xs tracking-widest uppercase font-sans transition-all duration-300 ${
                      idx === currentSlide
                        ? 'border-[#CBA153] bg-[#CBA153]/10 text-[#CBA153]'
                        : 'border-white/10 text-white/50 hover:border-white/30 hover:text-white/80'
                    }`}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <span className="block font-serif text-lg mb-1 opacity-30">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    {slideLabels[idx] || `Slide ${idx + 1}`}
                    {idx === currentSlide && (
                      <motion.div
                        className="absolute inset-0 border border-[#CBA153]"
                        layoutId="activeSlide"
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      />
                    )}
                  </motion.button>
                ))}
              </div>

              <div className="mt-6 text-center text-white/20 text-xs tracking-widest uppercase">
                {currentSlide + 1} / {totalSlides}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MiniMapNav;
