import React from 'react';
import PresentationEngine from '../components/Presentation/PresentationEngine';
import SlideComponent from '../components/Presentation/SlideComponent';
import { useNavigate } from 'react-router-dom';
import '../sections/Sections.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <PresentationEngine>
      {/* 01 - Intro */}
      <SlideComponent
        subtitle="THE CENTER OF NOW"
        title="111 Million Visitors. One Destination."
        highlights={['111 Million Visitors.', 'One Destination.']}
        backgroundVideo="https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-city-traffic-and-buildings-at-night-34825-large.mp4"
      >
        <button 
          className="btn-primary" 
          onClick={() => alert('Lead generation form opens.')} 
          style={{ padding: '16px 32px', fontSize: '1rem', letterSpacing: '1px', marginTop: '2rem' }}
        >
          EXPLORE LEASING OPPORTUNITIES
        </button>
      </SlideComponent>

      {/* 02 - Scale */}
      <SlideComponent
        subtitle="THE SCALE"
        title="The Scale of Ambition"
        highlights={['city within a city', 'unprecedented scale']}
        description={[
          "More than a shopping center. It is a city within a city.",
          "Located at the foot of the Burj Khalifa, this is where global brands launch, where the world gathers, and where commerce happens at an unprecedented scale."
        ]}
      >
        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', marginTop: '3rem' }}>
          {[
            { value: '12M+', label: 'Square Feet Total Area' },
            { value: '1,200+', label: 'Retail Outlets' },
            { value: '200+', label: 'F&B Outlets' },
            { value: '#1', label: 'Most Visited Mall Globally' },
          ].map((stat, idx) => (
            <div key={idx} className="glass-panel" style={{ padding: '2rem', flex: '1 1 200px', minWidth: '200px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
              <h3 className="text-gold" style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '0.5rem', lineHeight: 1 }}>{stat.value}</h3>
              <p style={{ opacity: 0.8, fontSize: '1.1rem' }}>{stat.label}</p>
            </div>
          ))}
        </div>
      </SlideComponent>

      {/* 03 - Retail */}
      <SlideComponent
        subtitle="THE RETAIL ECOSYSTEM"
        title="Anchored by the Best"
        highlights={['maximum conversion', 'multi-level avenues']}
        description={[
          "Anchored by Galeries Lafayette and Bloomingdale's, the retail mix spans every major category.",
          "Foot traffic flows intelligently across multi-level avenues, ensuring visibility and maximum conversion for every tenant."
        ]}
      >
        <div style={{ display: 'flex', gap: '3rem', alignItems: 'center', flexWrap: 'wrap', marginTop: '3rem', background: 'rgba(0,0,0,0.2)', padding: '2rem', borderRadius: '12px' }}>
          {[
            { name: "Bloomingdale's", type: 'text', style: { fontFamily: '"Times New Roman", Times, serif', fontSize: '1.8rem', letterSpacing: '1px', color: '#fff' } },
            { name: "Galeries Lafayette", type: 'text', style: { fontFamily: 'Arial, sans-serif', fontSize: '1.2rem', letterSpacing: '4px', textTransform: 'uppercase', color: '#D21034' } },
            { name: "Apple", type: 'image', src: "/apple.svg" },
            { name: "Nike", type: 'image', src: "/nike.svg" },
            { name: "SEPHORA", type: 'text', style: { fontFamily: 'Arial, sans-serif', fontSize: '1.5rem', letterSpacing: '5px', color: '#fff' } },
            { name: "Zara", type: 'image', src: "/zara.svg" }
          ].map((brand, i) => (
            <div key={i}>
              {brand.type === 'image' ? (
                <img src={brand.src} alt={brand.name} style={{ height: '40px', filter: 'brightness(0) invert(1)' }} />
              ) : (
                <span style={brand.style}>{brand.name}</span>
              )}
            </div>
          ))}
        </div>
        <button className="btn-secondary" style={{ marginTop: '3rem' }} onClick={() => alert('Leasing Path Module opens.')}>
          VIEW LEASING PATHS
        </button>
      </SlideComponent>

      {/* 04 - Luxury */}
      <SlideComponent
        subtitle="FASHION AVENUE"
        title="The Pinnacle of Luxury"
        highlights={['largest collection of luxury brands', 'finest shopping streets']}
        backgroundImage="/luxury_bg_1776941038739.png"
        description={[
          "The world's largest collection of luxury brands under one roof.",
          "Over 200 flagship stores offering personalized services, VIP valet, and an ambiance that rivals the finest shopping streets in Paris or Milan."
        ]}
      >
        <ul style={{ listStyle: 'none', padding: 0, fontSize: '1.2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '3rem' }}>
          <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}><span className="text-gold">✦</span> Bespoke VIP Lounges</li>
          <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}><span className="text-gold">✦</span> Personal Shopper Services</li>
          <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}><span className="text-gold">✦</span> Exclusive Product Launches</li>
        </ul>
      </SlideComponent>

      {/* 05 - Entertainment */}
      <SlideComponent
        subtitle="ATTRACTIONS"
        title="Entertainment as an Anchor"
        highlights={['experiences that capture the imagination']}
        description={[
          "More than shopping, we offer experiences that capture the imagination.",
        ]}
      >
        <div style={{ display: 'flex', gap: '2rem', overflowX: 'auto', paddingBottom: '1rem', marginTop: '3rem' }}>
          {[
            { title: "Dubai Aquarium", desc: "10-million liter tank, thousands of aquatic animals.", image: "/dubai_aquarium.png" },
            { title: "Play DXB", desc: "The largest indoor virtual reality park in the world.", image: "/play_dxb.png" },
            { title: "Dubai Ice Rink", desc: "Olympic-sized venue for events and public skating.", image: "/dubai_ice_rink.png" },
          ].map((attr, idx) => (
            <div key={idx} className="glass-panel" style={{ minWidth: '300px', flex: '1', borderRadius: '12px', overflow: 'hidden', background: 'rgba(255,255,255,0.05)' }}>
              <img src={attr.image} alt={attr.title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
              <div style={{ padding: '1.5rem' }}>
                <h3 className="text-gold" style={{ marginBottom: '0.5rem', fontSize: '1.5rem' }}>{attr.title}</h3>
                <p style={{ opacity: 0.8 }}>{attr.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </SlideComponent>

      {/* 06 - Events */}
      <SlideComponent
        subtitle="THE GLOBAL STAGE"
        title="Where the World Watches"
        highlights={['global audience', 'massive brand activations']}
        backgroundImage="/event_bg_1776941061505.png"
        description={[
          "From high-fashion runways to global product launches and massive brand activations.",
          "Our event spaces are built for scale and impact, offering unprecedented access to a global audience."
        ]}
      >
        <div style={{ display: 'flex', gap: '1.5rem', marginTop: '3rem' }}>
          <button className="btn-primary" onClick={() => navigate('/events')}>Explore Venue Capabilities</button>
          <button className="btn-secondary" onClick={() => alert('Sponsorship Module opens.')}>View Sponsorship Tiers</button>
        </div>
      </SlideComponent>
    </PresentationEngine>
  );
};

export default Home;
