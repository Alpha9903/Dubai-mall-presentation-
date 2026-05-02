import React, { useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import SlideWrapper from './SlideWrapper';

const AnimatedCounter = ({ target, suffix = '', prefix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
};

const StatsSlide = ({ direction }) => {
  const stats = [
    { value: 80, suffix: 'M+', label: 'Annual Visitors' },
    { value: 1300, suffix: '+', label: 'Retail Stores' },
    { value: 200, suffix: '+', label: 'Restaurants' },
    { value: 12000, suffix: '', label: 'Parking Spaces' },
    { value: 22, suffix: '', label: 'Million Sq Ft' },
    { value: 250, suffix: '+', label: 'Luxury Brands' },
  ];

  return (
    <SlideWrapper direction={direction} className="bg-[#0a0a0a] flex flex-col items-center justify-center">
      {/* Subtle gold particles background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-0.5 h-0.5 bg-[#CBA153] rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 0.6, 0],
              y: [0, -40],
              scale: [1, 2, 0.5],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 4,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <motion.div
        className="relative z-10 text-center mb-16"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <h2 className="font-serif text-3xl md:text-5xl tracking-[0.2em] uppercase text-[#CBA153] mb-4">
          BY THE NUMBERS
        </h2>
        <p className="font-sans text-xs tracking-[0.3em] uppercase text-white/40">
          A global destination unmatched in scale
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 max-w-5xl px-8 w-full relative z-10"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.5 } },
        }}
      >
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            className="flex flex-col items-center p-6 md:p-8 border border-[#CBA153]/10 hover:border-[#CBA153]/40 transition-colors duration-500 group bg-white/5 backdrop-blur-sm"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { type: 'spring', damping: 20 } },
            }}
          >
            <div className="font-serif text-4xl md:text-5xl lg:text-6xl text-white group-hover:text-[#CBA153] transition-colors duration-500 mb-3">
              <AnimatedCounter target={stat.value} suffix={stat.suffix} />
            </div>
            <div className="font-sans text-[10px] md:text-xs tracking-[0.25em] uppercase text-white/50">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </SlideWrapper>
  );
};

export default StatsSlide;
