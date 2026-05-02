import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import './SlideComponent.css';

const SlideComponent = ({
  subtitle,
  title,
  description = [],
  highlights = [],
  backgroundImage,
  backgroundVideo,
  children
}) => {
  // Helper to highlight words in a string
  const renderHighlightedText = (text) => {
    if (!highlights || highlights.length === 0) return text;

    // Create a regex that matches any of the highlight words (case-insensitive)
    const escapedHighlights = highlights.map(h => h.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
    const regex = new RegExp(`(${escapedHighlights.join('|')})`, 'gi');
    
    const parts = text.split(regex);
    
    return parts.map((part, i) => {
      // Check if this part matches a highlight word
      const isHighlight = highlights.some(
        h => h.toLowerCase() === part.toLowerCase()
      );
      
      if (isHighlight) {
        return <span key={i} className="text-highlight">{part}</span>;
      }
      return part;
    });
  };

  // Ensure description is an array for staggering
  const descArray = Array.isArray(description) ? description : [description];

  // Framer Motion variants for staggering
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delay between each child element animating in
        delayChildren: 0.3    // Initial delay before starting
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } // smooth easing
    }
  };

  const hasMedia = backgroundImage || backgroundVideo;

  return (
    <div className={`presentation-slide ${hasMedia ? 'has-media' : ''}`}>
      {/* Background Media */}
      {hasMedia && (
        <div className="slide-bg">
          {backgroundVideo ? (
            <video 
              className="slide-bg-video" 
              autoPlay 
              muted 
              loop 
              playsInline
            >
              <source src={backgroundVideo} type="video/mp4" />
            </video>
          ) : (
            <div 
              className="slide-bg-image" 
              style={{ backgroundImage: `url(${backgroundImage})` }}
            />
          )}
          <div className="slide-overlay" />
        </div>
      )}

      {/* Content Container */}
      <motion.div 
        className="slide-content-wrapper"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {subtitle && (
          <motion.div variants={itemVariants} className="slide-subtitle">
            {subtitle}
          </motion.div>
        )}

        {title && (
          <motion.h1 variants={itemVariants} className="slide-title">
            {renderHighlightedText(title)}
          </motion.h1>
        )}

        {descArray.length > 0 && (
          <div className="slide-description">
            {descArray.map((line, idx) => (
              <motion.p key={idx} variants={itemVariants} className="slide-desc-line">
                {renderHighlightedText(line)}
              </motion.p>
            ))}
          </div>
        )}

        {/* Optional Custom Content (e.g., buttons, specific data vis) */}
        {children && (
          <motion.div variants={itemVariants} className="slide-custom-content">
            {children}
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default SlideComponent;
