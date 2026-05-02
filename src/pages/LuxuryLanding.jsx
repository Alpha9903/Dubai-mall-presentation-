import React, { useState, useEffect, useCallback } from 'react';
import LuxuryHeader from '../components/LuxuryHeader';
import LuxurySlide from '../components/LuxurySlide';
import PressSlide from '../components/slides/PressSlide';
import PropertiesSlide from '../components/slides/PropertiesSlide';
import PlatformsSlide from '../components/slides/PlatformsSlide';
import CapabilitiesSlide from '../components/slides/CapabilitiesSlide';
import StatsSlide from '../components/slides/StatsSlide';
import DiningSlide from '../components/slides/DiningSlide';
import TimelineSlide from '../components/slides/TimelineSlide';
import MiniMapNav from '../components/MiniMapNav';
import { AnimatePresence } from 'framer-motion';

const slidesData = [
  {
    id: "intro",
    image: "https://images.unsplash.com/photo-1574880560249-14a51e6ba681?q=80&w=2000&auto=format&fit=crop",
    title: "THE DUBAI MALL",
    subtitle: "The Center of Now"
  },
  {
    id: "press",
    component: PressSlide
  },
  {
    id: "properties",
    component: PropertiesSlide
  },
  {
    id: "platforms",
    component: PlatformsSlide
  },
  {
    id: "capabilities",
    component: CapabilitiesSlide
  },
  {
    id: "stats",
    component: StatsSlide
  },
  {
    id: "exp-1",
    number: "1",
    image: "https://images.unsplash.com/photo-1537832816519-689ad163238b?q=80&w=2000&auto=format&fit=crop",
    title: "Luxury Fashion Avenue",
    subtitle: "The finest global brands curated in an unmatched architectural masterpiece."
  },
  {
    id: "exp-2",
    number: "2",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2000&auto=format&fit=crop",
    title: "Dubai Aquarium",
    subtitle: "Immersive marine environments featuring thousands of aquatic animals."
  },
  {
    id: "dining",
    component: DiningSlide
  },
  {
    id: "timeline",
    component: TimelineSlide
  }
];

const LuxuryLanding = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);
  const [showMap, setShowMap] = useState(false);
  const [touchStart, setTouchStart] = useState(null);

  const nextSlide = useCallback(() => {
    if (currentSlide === slidesData.length - 1) return;
    setDirection(1);
    setCurrentSlide((prev) => prev + 1);
  }, [currentSlide]);

  const prevSlide = useCallback(() => {
    if (currentSlide === 0) return;
    setDirection(-1);
    setCurrentSlide((prev) => prev - 1);
  }, [currentSlide]);

  const goToSlide = useCallback((index) => {
    if (index === currentSlide) return;
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  }, [currentSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevSlide();
      } else if (e.key === 'm' || e.key === 'M') {
        setShowMap((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  // Touch / Swipe
  useEffect(() => {
    const handleTouchStart = (e) => {
      setTouchStart(e.touches[0].clientX);
    };
    const handleTouchEnd = (e) => {
      if (touchStart === null) return;
      const diff = touchStart - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 50) {
        if (diff > 0) nextSlide();
        else prevSlide();
      }
      setTouchStart(null);
    };
    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchend', handleTouchEnd);
    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [touchStart, nextSlide, prevSlide]);

  const slide = slidesData[currentSlide];

  return (
    <div className="w-full h-screen relative bg-[#FAFAFA] text-[#1A1A1A] overflow-hidden">
      <LuxuryHeader onNavigate={goToSlide} />

      <AnimatePresence initial={false} custom={direction} mode="wait">
        {slide.component ? (
          <slide.component key={slide.id} direction={direction} />
        ) : (
          <LuxurySlide
            key={slide.id}
            direction={direction}
            image={slide.image}
            title={slide.title}
            subtitle={slide.subtitle}
            number={slide.number}
          >
            {slide.content}
          </LuxurySlide>
        )}
      </AnimatePresence>

      {/* Navigation Arrows */}
      <div className="absolute top-1/2 -translate-y-1/2 left-4 md:left-8 z-50 mix-blend-difference text-white">
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="p-2 md:p-4 cursor-pointer disabled:opacity-30 transition-transform hover:scale-110"
          aria-label="Previous Slide"
        >
          <svg width="24" height="40" viewBox="0 0 24 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotate-180">
            <path d="M12 40L12 2M12 2L2 12M12 2L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="square"/>
          </svg>
        </button>
      </div>

      <div className="absolute top-1/2 -translate-y-1/2 right-4 md:right-8 z-50 mix-blend-difference text-white">
        <button
          onClick={nextSlide}
          disabled={currentSlide === slidesData.length - 1}
          className="p-2 md:p-4 cursor-pointer disabled:opacity-30 transition-transform hover:scale-110"
          aria-label="Next Slide"
        >
          <svg width="24" height="40" viewBox="0 0 24 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotate-90">
            <path d="M12 40L12 2M12 2L2 12M12 2L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="square"/>
          </svg>
        </button>
      </div>

      {/* Progress Indicator - clickable */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-50 flex gap-2 md:gap-4 max-w-[80vw] flex-wrap justify-center">
        {slidesData.map((s, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`h-[3px] transition-all duration-500 cursor-pointer ${idx === currentSlide ? 'bg-[#CBA153] scale-y-[2] w-10 md:w-14' : 'bg-[#1A1A1A]/20 hover:bg-[#1A1A1A]/40 w-6 md:w-10'}`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Mini Map Navigation */}
      <MiniMapNav
        isOpen={showMap}
        onToggle={() => setShowMap((p) => !p)}
        currentSlide={currentSlide}
        onNavigate={goToSlide}
        totalSlides={slidesData.length}
      />

      {/* Keyboard hint */}
      <div className="absolute bottom-8 right-20 z-40 hidden md:block">
        <p className="font-sans text-[9px] tracking-widest uppercase text-[#1A1A1A]/20">
          Arrow Keys / M for Map
        </p>
      </div>
    </div>
  );
};

export default LuxuryLanding;
