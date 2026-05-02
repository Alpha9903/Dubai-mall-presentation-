import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 400);
          return 100;
        }
        return prev + 4;
      });
    }, 80);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {progress < 100 || progress === 100 ? (
        <motion.div
          className="fixed inset-0 z-[200] bg-[#0a0a0a] flex flex-col items-center justify-center"
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* Gold shimmer logo text */}
          <motion.div
            className="font-serif text-3xl md:text-5xl tracking-[0.3em] uppercase text-[#CBA153] mb-12"
            initial={{ opacity: 0, letterSpacing: '0.1em' }}
            animate={{ opacity: 1, letterSpacing: '0.3em' }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            THE DUBAI MALL
          </motion.div>

          {/* Progress bar */}
          <div className="w-64 h-[2px] bg-white/10 overflow-hidden">
            <motion.div
              className="h-full bg-[#CBA153]"
              style={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>

          {/* Percentage */}
          <motion.div
            className="mt-4 font-sans text-xs tracking-[0.2em] text-white/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {progress}%
          </motion.div>

          {/* Floating particles */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-[#CBA153] rounded-full"
              style={{
                left: `${15 + i * 14}%`,
                top: `${20 + (i % 3) * 25}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default LoadingScreen;
