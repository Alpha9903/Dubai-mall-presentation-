import React from 'react';
import { useNavigate } from 'react-router-dom';
import SlideSection from '../components/SlideSection';
import { motion } from 'framer-motion';
import './Sections.css';

const EventsSection = () => {
  const navigate = useNavigate();
  return (
    <SlideSection 
      id="events" 
      backgroundImage="/event_bg_1776941061505.png"
      className="events-section"
    >
      <div className="grid-layout items-end pb-20">
        <div className="text-column glass-panel p-8">
          <motion.h2 
            className="heading-lg mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            The Global Stage
          </motion.h2>
          <motion.p 
            className="body-text mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            From high-fashion runways to global product launches and massive brand activations. Our event spaces are built for scale and impact, offering unprecedented access to a global audience.
          </motion.p>
          
          <motion.div 
            className="cta-group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <button className="btn-primary" onClick={() => navigate('/events')}>Explore Venue Capabilities</button>
            <button className="btn-secondary" onClick={() => alert('Sponsorship Module opens.')}>View Sponsorship Tiers</button>
          </motion.div>
        </div>
      </div>
    </SlideSection>
  );
};

export default EventsSection;
