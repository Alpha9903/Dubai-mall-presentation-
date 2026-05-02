import React from 'react';
import SlideSection from '../components/SlideSection';
import { motion } from 'framer-motion';
import './Sections.css';

const EntertainmentSection = () => {
  const attractions = [
    { title: "Dubai Aquarium", desc: "10-million liter tank, thousands of aquatic animals.", image: "/dubai_aquarium.png" },
    { title: "Play DXB", desc: "The largest indoor virtual reality park in the world.", image: "/play_dxb.png" },
    { title: "Dubai Ice Rink", desc: "Olympic-sized venue for events and public skating.", image: "/dubai_ice_rink.png" },
  ];

  return (
    <SlideSection id="entertainment" className="entertainment-section bg-gradient-dark">
      <div className="center-content">
        <motion.h2 
          className="heading-lg text-center mb-10"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Entertainment as an Anchor
        </motion.h2>
        
        <div className="cards-row">
          {attractions.map((attr, idx) => (
            <motion.div 
              key={idx}
              className="feature-card glass-panel"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * idx }}
            >
              <img src={attr.image} alt={attr.title} className="card-image" />
              <div className="card-text">
                <h3 className="card-title text-gold">{attr.title}</h3>
                <p className="card-desc text-subtle">{attr.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideSection>
  );
};

export default EntertainmentSection;
