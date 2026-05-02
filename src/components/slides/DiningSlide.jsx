import React from 'react';
import { motion } from 'framer-motion';
import SlideWrapper from './SlideWrapper';
import { Utensils, Wine, Coffee, Cake } from 'lucide-react';

const DiningSlide = ({ direction }) => {
  const categories = [
    { icon: Utensils, title: 'Fine Dining', count: '40+ Michelin Stars', image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=600&auto=format&fit=crop' },
    { icon: Wine, title: 'Rooftop Lounges', count: '12 Sky-High Venues', image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=600&auto=format&fit=crop' },
    { icon: Coffee, title: 'Cafés & Bakeries', count: '80+ Artisan Spots', image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=600&auto=format&fit=crop' },
    { icon: Cake, title: 'Dessert Destinations', count: 'World-famous Patisseries', image: 'https://images.unsplash.com/photo-1551024601-bec78aea137e?q=80&w=600&auto=format&fit=crop' },
  ];

  const restaurants = [
    { name: 'Social House', cuisine: 'International', location: 'Waterfront Promenade' },
    { name: 'Thiptara', cuisine: 'Thai', location: 'The Palace Downtown' },
    { name: 'At.mosphere', cuisine: 'European', location: 'Burj Khalifa' },
    { name: 'Ewaan', cuisine: 'Middle Eastern', location: 'The Palace Downtown' },
    { name: 'Armani Ristorante', cuisine: 'Italian', location: 'Armani Hotel' },
    { name: 'Katsuya', cuisine: 'Japanese', location: 'Downtown Dubai' },
  ];

  return (
    <SlideWrapper direction={direction} className="bg-[#FAFAFA] flex flex-col items-center justify-center pt-20 pb-12 overflow-y-auto">
      {/* Background */}
      <div className="absolute inset-0 w-full h-full -z-10">
        <img
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2000&auto=format&fit=crop"
          alt="Background"
          className="w-full h-full object-cover opacity-15 mix-blend-multiply filter grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAFAFA]/80 via-[#FAFAFA]/95 to-[#FAFAFA]" />
      </div>

      <motion.div
        className="relative z-10 text-center mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <h2 className="font-serif text-3xl md:text-5xl tracking-[0.2em] uppercase text-[#2A3B4C] mb-2">
          DINING EXPERIENCE
        </h2>
        <p className="font-serif italic text-sm text-gray-500">
          200+ restaurants across every cuisine
        </p>
      </motion.div>

      {/* Category Cards with 3D Tilt */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl px-8 w-full mb-12 relative z-10"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.5 } },
        }}
      >
        {categories.map((cat, idx) => {
          const Icon = cat.icon;
          return (
            <motion.div
              key={idx}
              className="relative group cursor-pointer overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-500"
              variants={{
                hidden: { opacity: 0, y: 30, rotateX: 15 },
                visible: { opacity: 1, y: 0, rotateX: 0, transition: { type: 'spring', damping: 20 } },
              }}
              whileHover={{ y: -8, scale: 1.02 }}
              style={{ perspective: 1000 }}
            >
              <div className="h-32 overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
                />
              </div>
              <div className="p-4 bg-white flex flex-col items-center text-center">
                <Icon size={24} strokeWidth={1} className="text-[#CBA153] mb-2" />
                <span className="font-sans text-xs font-bold tracking-[0.15em] uppercase text-[#2A3B4C]">
                  {cat.title}
                </span>
                <span className="font-sans text-[10px] tracking-wider text-gray-400 mt-1">
                  {cat.count}
                </span>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Restaurant List - Glassmorphism */}
      <motion.div
        className="max-w-4xl w-full mx-8 relative z-10 bg-white/60 backdrop-blur-md border border-white/50 p-6 md:p-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.8 }}
      >
        <h3 className="font-serif text-lg tracking-[0.15em] uppercase text-[#2A3B4C] mb-6 text-center">
          Featured Restaurants
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
          {restaurants.map((rest, idx) => (
            <motion.div
              key={idx}
              className="flex justify-between items-center py-2 border-b border-gray-200/50 group hover:border-[#CBA153]/50 transition-colors duration-300 cursor-pointer"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 + idx * 0.1 }}
              whileHover={{ x: 4 }}
            >
              <div>
                <span className="font-serif text-sm text-[#1A1A1A] group-hover:text-[#CBA153] transition-colors">
                  {rest.name}
                </span>
                <span className="block font-sans text-[10px] tracking-wider text-gray-400 uppercase">
                  {rest.cuisine}
                </span>
              </div>
              <span className="font-sans text-[10px] tracking-wider text-gray-400 uppercase text-right">
                {rest.location}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SlideWrapper>
  );
};

export default DiningSlide;
