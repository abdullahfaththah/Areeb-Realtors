import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, MapPin, BedDouble, Bath, Maximize, Ruler, Phone, Mail, CheckCircle, Facebook, ArrowUpRight } from 'lucide-react';
import { properties } from '../data/properties';

const PropertyDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const property = properties.find(p => p.id === id);

  if (!property) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
        <h2 className="text-3xl font-serif text-white mb-4">Property Not Found</h2>
        <button 
          onClick={() => navigate('/')}
          className="text-gold-400 hover:text-white underline underline-offset-4"
        >
          Return Home
        </button>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pb-20 bg-slate-950 min-h-screen"
    >
      {/* Navigation Back */}
      <div className="fixed top-24 left-6 z-[60]">
        <Link 
          to="/"
          className="flex items-center justify-center bg-slate-900/80 backdrop-blur-md border border-white/10 p-4 rounded-full text-white hover:bg-gold-500 hover:text-black transition-all group shadow-2xl"
          aria-label="Back to Home"
        >
          <ArrowLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Hero Image */}
      <div className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden">
        <img 
          src={property.coverImage} 
          alt={property.title} 
          className="w-full h-full object-cover grayscale-[20%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 max-w-7xl mx-auto">
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="bg-red-600 text-white text-xs font-bold px-4 py-2 rounded mb-4 inline-block uppercase tracking-wider shadow-lg shadow-red-900/50 border border-red-500/30">
              {property.status}
            </span>
            <h1 className="text-4xl md:text-6xl font-serif text-white mb-2">{property.title}</h1>
            <p className="text-xl text-slate-300 font-light flex items-center gap-2">
              <MapPin size={18} className="text-gold-400" /> {property.location}
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Main Content (Left) */}
        <div className="lg:col-span-8">
          
          {/* Specs Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-slate-900/50 p-6 rounded-2xl border border-white/5 mb-12">
            <div className="text-center p-2 border-r border-white/5 last:border-0">
              <BedDouble className="mx-auto text-gold-400 mb-2" size={24} />
              <p className="text-xl font-bold text-white">{property.specs.beds}</p>
              <p className="text-xs text-slate-500 uppercase">Bedrooms</p>
            </div>
            <div className="text-center p-2 border-r border-white/5 last:border-0">
              <Bath className="mx-auto text-gold-400 mb-2" size={24} />
              <p className="text-xl font-bold text-white">{property.specs.baths}</p>
              <p className="text-xs text-slate-500 uppercase">Bathrooms</p>
            </div>
            <div className="text-center p-2 border-r border-white/5 last:border-0">
              <Maximize className="mx-auto text-gold-400 mb-2" size={24} />
              <p className="text-xl font-bold text-white">{property.specs.sqft}</p>
              <p className="text-xs text-slate-500 uppercase">Sq. Ft.</p>
            </div>
            <div className="text-center p-2">
              <Ruler className="mx-auto text-gold-400 mb-2" size={24} />
              <p className="text-xl font-bold text-white">{property.specs.lotSize}</p>
              <p className="text-xs text-slate-500 uppercase">Lot Size</p>
            </div>
          </div>

          {/* Blog Description */}
          <div className="space-y-6 mb-12">
            <h2 className="text-2xl font-serif text-white border-l-4 border-gold-500 pl-4">About this Property</h2>
            <div className="text-slate-300 text-lg leading-relaxed font-light space-y-6">
              {property.description.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Features List */}
          <div className="mb-12">
            <h3 className="text-xl font-bold text-white mb-6">Key Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {property.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-slate-800/20 p-4 rounded-xl border border-white/5">
                  <CheckCircle className="text-emerald-500" size={20} />
                  <span className="text-slate-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image Gallery */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Gallery</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {property.images.map((img, idx) => (
                <div key={idx} className="aspect-[4/3] rounded-xl overflow-hidden group">
                  <img 
                    src={img} 
                    alt={`Gallery ${idx}`} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Sidebar (Right) */}
        <div className="lg:col-span-4">
          <div className="sticky top-24 space-y-6">
            
            {/* Price Card */}
            <div className="bg-slate-900 border border-white/10 p-8 rounded-3xl shadow-xl">
              <p className="text-slate-400 text-sm uppercase tracking-widest mb-1">Sold Price</p>
              <p className="text-4xl font-serif text-white mb-6">{property.price}</p>
              
              <div className="space-y-4">
                 <div className="bg-slate-800/50 p-4 rounded-xl border border-white/5 text-center">
                    <p className="text-white font-bold mb-2">Interested in similar properties?</p>
                    <p className="text-slate-400 text-sm mb-4">Connect with us on our sales channels for the latest inventory.</p>
                     <a 
                      href="https://facebook.com"
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white font-bold py-3 rounded-xl hover:bg-blue-500 transition-colors uppercase tracking-wider text-sm"
                    >
                      <Facebook size={18} /> Visit Facebook
                    </a>
                 </div>

                <a 
                  href="tel:+94771234567" 
                  className="w-full flex items-center justify-center gap-2 border border-white/20 text-white font-bold py-4 rounded-xl hover:bg-white/5 transition-colors"
                >
                  <Phone size={18} /> Call Agent
                </a>
              </div>
            </div>

            {/* Agent / Branding Card */}
            <div className="bg-slate-900/50 border border-white/10 p-6 rounded-3xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gold-500 flex items-center justify-center text-black font-bold font-serif text-xl">
                  AR
                </div>
                <div>
                  <p className="text-white font-bold">Areeb Realtors</p>
                  <p className="text-xs text-slate-400 uppercase">Premium Brokerage</p>
                </div>
              </div>
              <p className="text-slate-400 text-sm mb-4">
                This property has been <strong>SOLD</strong>. Contact us today to be the first to know about future listings that match your criteria.
              </p>
              <div className="flex items-center gap-2 text-slate-300 text-sm">
                <Mail size={14} /> info@areebrealtors.lk
              </div>
            </div>

          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PropertyDetails;