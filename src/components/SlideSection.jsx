import React from 'react';
import { motion } from 'framer-motion';
import './SlideSection.css';

const SlideSection = ({ children, id, className = '', backgroundImage, backgroundVideo }) => {
  return (
    <motion.section 
      id={id}
      className={`slide-section ${className}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} // smooth cinematic easing
    >
      {/* Background Media */}
      {backgroundImage && (
        <div 
          className="slide-background-image" 
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}
      
      {backgroundVideo && (
        <video 
          className="slide-background-video" 
          autoPlay 
          muted 
          loop 
          playsInline
        >
          <source src={backgroundVideo} type="video/mp4" />
        </video>
      )}

      {/* Overlay to ensure text readability */}
      {(backgroundImage || backgroundVideo) && (
        <div className="slide-overlay" />
      )}

      {/* Content */}
      <div className="slide-content">
        {children}
      </div>
    </motion.section>
  );
};

export default SlideSection;
