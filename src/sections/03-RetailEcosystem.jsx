import React from 'react';
import SlideSection from '../components/SlideSection';
import { motion } from 'framer-motion';
import './Sections.css';

const RetailSection = () => {
  return (
    <SlideSection id="retail" className="retail-section bg-dark">
      <div className="center-content text-center">
        <motion.h2 
          className="heading-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
        >
          The Retail Ecosystem
        </motion.h2>
        <motion.p 
          className="body-text max-w-lg mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Anchored by Galeries Lafayette and Bloomingdale's, the retail mix spans every major category. Foot traffic flows intelligently across multi-level avenues, ensuring visibility and maximum conversion for every tenant.
        </motion.p>
        
        <div className="retail-brands-grid mt-10">
          {/* Brand logos */}
          {[
            { name: "Bloomingdale's", type: 'text', style: { fontFamily: '"Times New Roman", Times, serif', fontSize: '1.8rem', letterSpacing: '1px', color: '#000000' } },
            { name: "Galeries Lafayette", type: 'text', style: { fontFamily: 'Arial, sans-serif', fontSize: '1.2rem', letterSpacing: '4px', textTransform: 'uppercase', color: '#D21034' } },
            { name: "Apple", type: 'image', src: "/apple.svg" },
            { name: "Nike", type: 'image', src: "/nike.svg" },
            { name: "SEPHORA", type: 'text', style: { fontFamily: 'Arial, sans-serif', fontSize: '1.5rem', letterSpacing: '5px', color: '#000000' } },
            { name: "Zara", type: 'image', src: "/zara.svg" }
          ].map((brand, i) => (
            <motion.div 
              key={i} 
              className="brand-placeholder"
              style={{ background: 'transparent', border: 'none' }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1 * i }}
            >
              {brand.type === 'image' ? (
                <img src={brand.src} alt={brand.name} style={{ height: '40px' }} />
              ) : (
                <span style={brand.style}>{brand.name}</span>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <button className="btn-secondary" style={{ marginTop: '40px' }} onClick={() => alert('Leasing Path Module opens.')}>
            VIEW LEASING PATHS
          </button>
        </motion.div>
      </div>
    </SlideSection>
  );
};

export default RetailSection;
