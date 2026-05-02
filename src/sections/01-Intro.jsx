import React from 'react';
import SlideSection from '../components/SlideSection';
import { motion } from 'framer-motion';
import './Sections.css';

const IntroSection = () => {
  return (
    <SlideSection 
      id="intro" 
      backgroundVideo="https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-city-traffic-and-buildings-at-night-34825-large.mp4"
      className="intro-section"
    >
      <div className="intro-content light-text-overlay">
        <motion.p 
          className="text-white subtitle tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          THE CENTER OF NOW
        </motion.p>
        <motion.h1 
          className="heading-xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          111 Million Visitors.
          <br />
          <span className="text-subtle">One Destination.</span>
        </motion.h1>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          style={{ marginTop: '40px' }}
        >
          <button className="btn-primary" style={{ padding: '16px 32px', fontSize: '1rem', letterSpacing: '1px' }} onClick={() => alert('Lead generation form opens.')}>
            EXPLORE LEASING OPPORTUNITIES
          </button>
        </motion.div>
        <motion.div 
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ delay: 1.5, repeat: Infinity, duration: 2 }}
          style={{ marginTop: '80px' }}
        >
          Scroll to explore
        </motion.div>
      </div>
    </SlideSection>
  );
};

export default IntroSection;
