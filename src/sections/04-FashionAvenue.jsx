import React from 'react';
import SlideSection from '../components/SlideSection';
import { motion } from 'framer-motion';
import './Sections.css';

const LuxurySection = () => {
  return (
    <SlideSection 
      id="luxury" 
      backgroundImage="/luxury_bg_1776941038739.png"
      className="luxury-section"
    >
      <div className="luxury-content">
        <motion.div 
          className="luxury-card glass-panel"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="heading-md font-serif mb-4">Fashion Avenue</h2>
          <div className="divider mb-6"></div>
          <p className="body-text mb-6">
            The world's largest collection of luxury brands under one roof. Over 200 flagship stores offering personalized services, VIP valet, and an ambiance that rivals the finest shopping streets in Paris or Milan.
          </p>
          <ul className="luxury-list">
            <li>Bespoke VIP Lounges</li>
            <li>Personal Shopper Services</li>
            <li>Exclusive Product Launches</li>
          </ul>
        </motion.div>
      </div>
    </SlideSection>
  );
};

export default LuxurySection;
