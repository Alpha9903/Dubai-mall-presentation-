import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp, ChevronDown } from 'lucide-react';
import './PresentationEngine.css';

const PresentationEngine = ({ children }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);

  // Convert children to array to count slides and render only the active one
  const slides = React.Children.toArray(children);
  const totalSlides = slides.length;

  const nextSlide = useCallback(() => {
    if (isAnimating || currentSlide === totalSlides - 1) return;
    setDirection(1);
    setIsAnimating(true);
    setCurrentSlide((prev) => prev + 1);
  }, [currentSlide, totalSlides, isAnimating]);

  const prevSlide = useCallback(() => {
    if (isAnimating || currentSlide === 0) return;
    setDirection(-1);
    setIsAnimating(true);
    setCurrentSlide((prev) => prev - 1);
  }, [currentSlide, isAnimating]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        nextSlide();
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  // Wheel navigation with debounce
  useEffect(() => {
    let wheelTimeout;
    const handleWheel = (e) => {
      if (isAnimating) return;
      
      clearTimeout(wheelTimeout);
      wheelTimeout = setTimeout(() => {
        if (e.deltaY > 50) {
          nextSlide();
        } else if (e.deltaY < -50) {
          prevSlide();
        }
      }, 50); // Small debounce to prevent multiple triggers
    };

    window.addEventListener('wheel', handleWheel);
    return () => {
      window.removeEventListener('wheel', handleWheel);
      clearTimeout(wheelTimeout);
    };
  }, [nextSlide, prevSlide, isAnimating]);

  const variants = {
    enter: (direction) => ({
      y: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      zIndex: 1,
      y: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      y: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.95
    })
  };

  return (
    <div className="presentation-container">
      <AnimatePresence 
        initial={false} 
        custom={direction} 
        onExitComplete={() => setIsAnimating(false)}
      >
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            y: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
            scale: { duration: 0.4 }
          }}
          className="slide-wrapper"
        >
          {slides[currentSlide]}
        </motion.div>
      </AnimatePresence>

      {/* Progress Bar */}
      <div 
        className="presentation-progress" 
        style={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }}
      />

      {/* Navigation Controls */}
      <div className="presentation-nav">
        <button 
          className="nav-button" 
          onClick={prevSlide}
          disabled={currentSlide === 0 || isAnimating}
          aria-label="Previous Slide"
        >
          <ChevronUp size={24} />
        </button>
        <button 
          className="nav-button" 
          onClick={nextSlide}
          disabled={currentSlide === totalSlides - 1 || isAnimating}
          aria-label="Next Slide"
        >
          <ChevronDown size={24} />
        </button>
      </div>
    </div>
  );
};

export default PresentationEngine;
