import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import SlideSection from '../components/SlideSection';
import '../sections/Sections.css';

const EventsModule = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const venues = [
    { title: "Performing Arts Center", desc: "A 2,000-seat theater designed for Broadway-style shows, global premieres, and corporate keynotes." },
    { title: "Expo Hall", desc: "50,000 sq ft of modular exhibition space for fashion weeks, tech summits, and brand activations." },
    { title: "The Plaza", desc: "Outdoor staging area perfect for product launches, concerts, and seasonal festivals." }
  ];

  return (
    <div className="events-module">
      <SlideSection id="events-hero" className="bg-dark">
        <div className="center-content text-center">
          <motion.h1 
            className="heading-xl font-bold text-gold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            A Global Platform
          </motion.h1>
          <motion.p 
            className="body-text max-w-lg mx-auto mt-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            More than just a shopping destination, this property is designed as the ultimate stage for the world's most exclusive events. From intimate VIP gatherings to massive public concerts.
          </motion.p>
        </div>
      </SlideSection>

      <SlideSection id="venues" className="bg-gradient-dark">
        <div className="center-content">
          <motion.h2 
            className="heading-lg text-center mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            Purpose-Built Venues
          </motion.h2>
          <div className="cards-row">
            {venues.map((venue, idx) => (
              <motion.div 
                key={idx}
                className="feature-card glass-panel"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * idx }}
              >
                <div className="card-text p-8">
                  <h3 className="card-title text-gold mb-4">{venue.title}</h3>
                  <p className="card-desc text-subtle">{venue.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </SlideSection>

      <SlideSection id="booking" className="bg-dark text-center pb-20">
         <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           className="max-w-lg mx-auto"
         >
           <h2 className="heading-lg mb-6">Host Your Next Event</h2>
           <p className="body-text mb-10">Our dedicated events team is ready to help you craft an unforgettable experience.</p>
           <button className="btn-primary" onClick={() => alert('Booking form would open here.')}>
             Contact Events Team
           </button>
         </motion.div>
      </SlideSection>
    </div>
  );
};

export default EventsModule;
