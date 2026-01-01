import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Facebook, Instagram, ExternalLink, Globe, Play, MapPin, Bed, Bath, ArrowUpRight, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import ThreeDBackground from '../components/ThreeDBackground';
import { properties } from '../data/properties';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
};

const Home: React.FC = () => {
  const [bgOpacity, setBgOpacity] = useState(1);
  const channelsRef = useRef<HTMLElement>(null);

  const salesChannels = [
    { 
      name: 'WhatsApp', 
      icon: MessageCircle, 
      color: 'text-green-400', 
      bg: 'bg-green-500/10',
      borderColor: 'border-green-500/50',
      shadow: 'group-hover:shadow-green-500/20',
      stat: 'Instant',
      statLabel: 'Response',
      description: 'Chat instantly with our sales team. The fastest way to get answers.',
      link: 'https://wa.me/94771234567',
      isPrimary: true
    },
    { 
      name: 'LankaPropertyWeb', 
      icon: Globe, 
      color: 'text-emerald-400', 
      bg: 'bg-emerald-500/10',
      borderColor: 'group-hover:border-emerald-500/50',
      shadow: 'group-hover:shadow-emerald-500/20',
      stat: '500+',
      statLabel: 'Listings',
      description: 'The #1 property portal in Sri Lanka. Browse our verified premium catalog.',
      link: 'https://www.lankapropertyweb.com' 
    },
    { 
      name: 'Facebook', 
      icon: Facebook, 
      color: 'text-blue-400', 
      bg: 'bg-blue-500/10', 
      borderColor: 'group-hover:border-blue-500/50',
      shadow: 'group-hover:shadow-blue-500/20',
      stat: '12k+',
      statLabel: 'Followers',
      description: 'Daily market updates, community news, and new listing alerts.',
      link: 'https://facebook.com' 
    },
    { 
      name: 'Instagram', 
      icon: Instagram, 
      color: 'text-pink-400', 
      bg: 'bg-pink-500/10', 
      borderColor: 'group-hover:border-pink-500/50',
      shadow: 'group-hover:shadow-pink-500/20',
      stat: '8.5k+',
      statLabel: 'Followers',
      description: 'Immersive visual tours and aesthetic showcases of luxury homes.',
      link: 'https://instagram.com' 
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!channelsRef.current) return;
      
      const rect = channelsRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const startFade = windowHeight * 0.9;
      const endFade = windowHeight * 0.2;

      let newOpacity = 1;
      
      if (rect.top < endFade) {
        newOpacity = 0;
      } else if (rect.top < startFade) {
        newOpacity = (rect.top - endFade) / (startFade - endFade);
      } else {
        newOpacity = 1;
      }

      setBgOpacity(newOpacity);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative">
      {/* Local 3D Background for Home Page Only */}
      <div 
        className="fixed inset-0 z-0 pointer-events-none transition-opacity duration-100 ease-out"
        style={{ opacity: bgOpacity }}
      >
        <ThreeDBackground />
      </div>

      <motion.div 
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="pb-20 relative z-10"
      >
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
          <div className="max-w-5xl mx-auto text-center z-10">
            <motion.h2 
              variants={itemVariants}
              className="text-gold-400 tracking-[0.2em] uppercase text-sm md:text-base font-bold mb-4"
            >
              Welcome to Areeb Realtors
            </motion.h2>
            <motion.h1 
              variants={itemVariants}
              className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight"
            >
              Curating <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-amber-200">Luxury</span> <br />
              Living Spaces
            </motion.h1>
            <motion.p 
              variants={itemVariants}
              className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light"
            >
              Your trusted partner in the Sri Lankan real estate market. We don't just sell properties; we architect lifestyles.
            </motion.p>
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#channels" className="px-8 py-4 bg-gold-500 text-black font-bold uppercase tracking-wider rounded-full hover:bg-gold-400 transition-colors shadow-lg shadow-gold-500/20">
                View Our Channels
              </a>
              <Link to="/contact" className="px-8 py-4 border border-white/20 text-white font-bold uppercase tracking-wider rounded-full hover:bg-white/10 transition-all backdrop-blur-sm">
                Contact Us
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Sales Channels Section */}
        <section id="channels" ref={channelsRef} className="py-24 px-6 relative bg-slate-900/80 backdrop-blur-md">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h3 className="font-serif text-3xl md:text-5xl text-white mb-4">Our Sales Channels</h3>
              <div className="w-24 h-1 bg-gold-500 mx-auto rounded-full"></div>
              <p className="mt-8 text-xl text-slate-200 font-medium">
                Connect with us through our sales channels for the <span className="text-gold-400 font-bold">fastest response</span>.
              </p>
              <p className="mt-2 text-slate-400">
                Discover your next investment on your preferred platform.
              </p>
            </motion.div>

            {/* Use Flexbox for centering items gracefully */}
            <div className="flex flex-wrap justify-center gap-6">
              {salesChannels.map((channel, index) => {
                const Icon = channel.icon;
                return (
                  <motion.a
                    key={index}
                    href={channel.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -10 }}
                    className={`group relative flex flex-col items-center text-center p-8 rounded-[2.5rem] bg-slate-800/40 border border-white/10 overflow-hidden transition-all duration-500 hover:shadow-2xl ${channel.shadow} ${channel.borderColor} w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(25%-1.5rem)] min-w-[280px]`}
                  >
                    {/* Primary Highlight Badge */}
                    {channel.isPrimary && (
                      <div className="absolute top-0 inset-x-0 h-1.5 bg-green-500 shadow-[0_0_20px_rgba(34,197,94,0.6)] z-20"></div>
                    )}
                    {channel.isPrimary && (
                       <div className="absolute top-6 right-6 bg-green-500 text-black text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider z-20 animate-pulse">
                         Fastest
                       </div>
                    )}

                    {/* Large Watermark Icon */}
                    <div className={`absolute -right-8 -bottom-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500 rotate-12 ${channel.color}`}>
                      <Icon size={180} strokeWidth={1} />
                    </div>

                    {/* Content Layer */}
                    <div className="relative z-10 flex flex-col items-center w-full h-full">
                      
                      {/* Icon Bubble */}
                      <div className={`mb-6 p-5 rounded-2xl ${channel.bg} ${channel.color} ring-1 ring-inset ring-white/5 group-hover:ring-white/20 transition-transform duration-500 group-hover:scale-110 shadow-lg`}>
                        <Icon size={40} strokeWidth={1.5} />
                      </div>
                      
                      {/* Channel Name */}
                      <h4 className="text-xl font-bold text-white mb-6 group-hover:text-white transition-colors">
                        {channel.name}
                      </h4>
                      
                      {/* Big Stat */}
                      <div className="mb-6">
                         <span className={`block text-5xl font-sans font-extrabold tracking-tight ${channel.color} drop-shadow-sm`}>
                            {channel.stat}
                         </span>
                         <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 mt-2 block group-hover:text-slate-400 transition-colors">
                            {channel.statLabel}
                         </span>
                      </div>

                      {/* Description */}
                      <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow">
                        {channel.description}
                      </p>
                      
                      {/* Action Button */}
                      <div className={`flex items-center gap-2 px-6 py-2 rounded-full border border-white/10 bg-white/5 ${channel.color} text-xs font-bold uppercase tracking-widest group-hover:bg-white/10 transition-all group-hover:border-white/20`}>
                        {channel.name === 'WhatsApp' ? 'Chat Now' : 'Visit Page'} <ExternalLink size={14} />
                      </div>
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </div>
        </section>

        {/* Recently Sold Properties Section */}
        <section className="py-24 px-6 bg-slate-950 border-t border-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
              <div className="max-w-2xl">
                <h3 className="font-serif text-3xl md:text-5xl text-white">Recently Sold Properties</h3>
                <p className="text-slate-400 mt-4 text-lg">
                  A selection of our most recent successful transactions. These properties are <span className="text-white font-bold">SOLD</span> and serve as a testament to our service.
                </p>
              </div>
              <div className="flex flex-col items-end gap-3 shrink-0">
                <a 
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 px-8 py-4 rounded-full text-gold-400 font-bold uppercase tracking-wider text-sm transition-all group hover:border-gold-500/50 hover:shadow-lg hover:shadow-gold-500/10"
                >
                  Explore more of our properties <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {properties.map((property) => (
                <Link 
                  to={`/property/${property.id}`}
                  key={property.id}
                  className="group"
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -10 }}
                    className="bg-slate-900 border border-white/10 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:border-gold-500/30"
                  >
                    {/* Image Container */}
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <div className="absolute top-4 left-4 z-10 bg-black/60 backdrop-blur text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                        {property.location}
                      </div>
                      
                      {/* SOLD BADGE */}
                      <div className="absolute top-4 right-4 z-10 bg-red-600 text-white text-xs font-extrabold px-3 py-1 rounded shadow-lg uppercase tracking-widest border border-red-500/50">
                        Sold
                      </div>

                      <img 
                        src={property.coverImage} 
                        alt={property.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
                      />
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <div className="bg-white text-black px-6 py-3 rounded-full font-bold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform shadow-xl">
                          View Details <ArrowUpRight size={18} />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-xl font-serif text-white group-hover:text-gold-400 transition-colors line-clamp-1">{property.title}</h4>
                      </div>
                      <p className="text-gold-500 font-bold mb-4">{property.price} (Sold)</p>
                      
                      <div className="flex items-center gap-4 text-slate-400 text-sm border-t border-white/10 pt-4">
                        <div className="flex items-center gap-1">
                          <Bed size={16} />
                          <span>{property.specs.beds} Beds</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Bath size={16} />
                          <span>{property.specs.baths} Baths</span>
                        </div>
                        <div className="flex items-center gap-1 ml-auto">
                          <MapPin size={16} />
                          <span>{property.location.split(',')[0]}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
            
            <div className="mt-12 text-center md:hidden">
              <a 
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-white/5 border border-white/10 px-8 py-4 rounded-full text-gold-400 font-bold uppercase tracking-wider text-sm transition-colors"
              >
                Explore more of our properties <ArrowRight className="ml-2" size={18} />
              </a>
            </div>
          </div>
        </section>

        {/* New Conversion CTA Section */}
        <section className="py-24 px-6 bg-slate-900 border-y border-white/5 relative overflow-hidden">
           {/* Subtle background glow */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-full bg-gold-500/5 blur-[100px] rounded-full pointer-events-none"></div>

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-serif text-3xl md:text-6xl font-bold mb-6 leading-tight text-white"
            >
              Don’t miss your chance to find the perfect property
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-2xl font-medium mb-12 max-w-3xl mx-auto opacity-70 text-slate-300"
            >
              Our portfolio is constantly evolving. Connect with us through our sales channels to see exclusive listings before they hit the market.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
            >
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-10 py-5 bg-[#1877F2] text-white font-bold uppercase tracking-wider rounded-full hover:bg-blue-600 transition-all shadow-2xl shadow-blue-900/50 flex items-center justify-center gap-3 hover:scale-105 border border-white/10"
              >
                <Facebook size={24} /> Visit Facebook
              </a>
              <a 
                href="https://www.lankapropertyweb.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-10 py-5 bg-white text-slate-900 font-bold uppercase tracking-wider rounded-full hover:bg-slate-100 transition-all shadow-xl flex items-center justify-center gap-3 hover:scale-105"
              >
                <Globe size={24} /> Visit LankaPropertyWeb
              </a>
            </motion.div>
          </div>
        </section>

      </motion.div>
    </div>
  );
};

export default Home;