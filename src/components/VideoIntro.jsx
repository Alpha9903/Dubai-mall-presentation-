import React from 'react';
import { motion } from 'framer-motion';

const VideoIntro = ({ onStart }) => {
  return (
    <motion.div
      className="fixed inset-0 w-full h-full bg-black z-[100] overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover scale-105"
      >
        <source src="/intro.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/50" />

      {/* Floating Gold Particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-[#CBA153] rounded-full"
          style={{
            left: `${5 + Math.random() * 90}%`,
            top: `${5 + Math.random() * 90}%`,
          }}
          animate={{
            y: [0, -60, 0],
            x: [0, Math.random() * 30 - 15, 0],
            opacity: [0, 0.7, 0],
            scale: [0.5, 1.5, 0.5],
          }}
          transition={{
            duration: 5 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Shimmer Text at top */}
      <motion.div
        className="absolute top-12 left-0 right-0 z-10 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 1 }}
      >
        <h1 className="font-serif text-sm md:text-base tracking-[0.4em] uppercase text-white/50">
          Experience The Extraordinary
        </h1>
      </motion.div>

      {/* Start Here Button - bottom center */}
      <motion.div
        className="absolute bottom-20 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8, type: 'spring' }}
      >
        <motion.button
          onClick={onStart}
          className="relative px-12 py-4 border border-[#CBA153]/60 text-[#CBA153] text-lg tracking-[0.25em] uppercase font-light bg-black/20 backdrop-blur-sm overflow-hidden group cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Shimmer sweep */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-[#CBA153]/20 to-transparent"
            animate={{ x: ['-100%', '200%'] }}
            transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 3, ease: 'easeInOut' }}
          />
          <span className="relative z-10 group-hover:text-white transition-colors duration-300">
            Start Here
          </span>
        </motion.button>
      </motion.div>

      {/* Bottom hint text */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
      >
        <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-white/20">
          Press Enter or Click to Begin
        </p>
      </motion.div>
    </motion.div>
  );
};

export default VideoIntro;
