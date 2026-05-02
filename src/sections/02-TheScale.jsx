import React from 'react';
import SlideSection from '../components/SlideSection';
import { motion } from 'framer-motion';
import './Sections.css';

const ScaleSection = () => {
  const stats = [
    { value: '12M+', label: 'Square Feet Total Area' },
    { value: '1,200+', label: 'Retail Outlets' },
    { value: '200+', label: 'F&B Outlets' },
    { value: '#1', label: 'Most Visited Mall Globally' },
  ];

  return (
    <SlideSection id="scale" className="scale-section bg-gradient">
      <div className="grid-layout">
        <div className="text-column">
          <motion.h2 
            className="heading-lg"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            The Scale of Ambition
          </motion.h2>
          <motion.p 
            className="body-text"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            More than a shopping center. It is a city within a city. Located at the foot of the Burj Khalifa, this is where global brands launch, where the world gathers, and where commerce happens at an unprecedented scale.
          </motion.p>
        </div>
        <div className="stats-grid">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx} 
              className="stat-card glass-panel"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * idx }}
            >
              <h3 className="stat-value text-gold">{stat.value}</h3>
              <p className="stat-label">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideSection>
  );
};

export default ScaleSection;
