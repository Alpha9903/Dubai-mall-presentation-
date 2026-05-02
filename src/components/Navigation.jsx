import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Compass, ShoppingBag, Diamond, Film, Calendar, ArrowUp } from 'lucide-react';
import './Navigation.css';

const navItems = [
  { id: 'intro', label: 'Intro', icon: Compass, path: '/' },
  { id: 'scale', label: 'The Scale', icon: ArrowUp, path: '/' },
  { id: 'retail', label: 'Retail', icon: ShoppingBag, path: '/' },
  { id: 'luxury', label: 'Luxury', icon: Diamond, path: '/' },
  { id: 'entertainment', label: 'Entertainment', icon: Film, path: '/' },
  { id: 'events', label: 'Events Module', icon: Calendar, path: '/events' },
];

const Navigation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('intro');

  useEffect(() => {
    if (location.pathname !== '/') {
      setActiveSection('events');
      return;
    }

    const handleScroll = () => {
      const sections = navItems.filter(i => i.path === '/').map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location]);

  const handleNavClick = (item) => {
    if (item.path !== location.pathname) {
      navigate(item.path);
      // Wait for page to load then scroll if needed
      if (item.path === '/' && item.id !== 'intro') {
        setTimeout(() => {
          const element = document.getElementById(item.id);
          if (element) window.scrollTo({ top: element.offsetTop, behavior: 'smooth' });
        }, 100);
      }
    } else {
      const element = document.getElementById(item.id);
      if (element) {
        window.scrollTo({ top: element.offsetTop, behavior: 'smooth' });
      }
    }
  };

  return (
    <motion.nav 
      className="main-navigation glass-panel"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.8 }}
      style={{ display: 'flex', flexDirection: 'column', width: '100px', height: '100vh', position: 'fixed', left: 0, top: 0, zIndex: 1000, padding: '20px 0' }}
    >
      <div className="nav-top-bar" style={{ textAlign: 'center', marginBottom: 'auto' }}>
        <Link to="/" className="logo-mark" style={{ textDecoration: 'none', color: 'inherit', writingMode: 'vertical-rl', transform: 'rotate(180deg)', letterSpacing: '4px' }}>
          DUBAI MALL
        </Link>
      </div>
      
      <div className="nav-middle-bar" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <ul className="nav-list" style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' }}>
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <li key={item.id} className="nav-item">
                <button 
                  className={`nav-btn ${isActive ? 'active' : ''}`}
                  onClick={() => handleNavClick(item)}
                  aria-label={`Go to ${item.label}`}
                  style={{ background: 'none', border: 'none', color: isActive ? 'var(--color-accent)' : '#fff', cursor: 'pointer', transition: 'color 0.3s' }}
                >
                  <div className="nav-icon-wrapper" style={{ padding: '10px' }}>
                    <Icon size={24} strokeWidth={isActive ? 2 : 1.5} />
                  </div>
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="nav-bottom-bar" style={{ marginTop: 'auto', display: 'flex', justifyContent: 'center', paddingBottom: '20px' }}>
        <button className="btn-primary" style={{ padding: '10px', fontSize: '10px', writingMode: 'vertical-rl', transform: 'rotate(180deg)', borderRadius: '4px' }}>
          BOOK TOUR
        </button>
      </div>
    </motion.nav>
  );
};

export default Navigation;
