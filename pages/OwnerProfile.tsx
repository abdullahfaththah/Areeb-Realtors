import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const OwnerProfile: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-20 px-6 max-w-7xl mx-auto"
    >
      <div className="bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
        <div className="flex flex-col lg:flex-row">
          
          {/* Image Section */}
          <div className="lg:w-2/5 relative min-h-[400px] lg:min-h-full">
            <img 
              src="https://picsum.photos/800/1200?random=10" // Placeholder for Owner Headshot
              alt="Owner of Areeb Realtors" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent lg:bg-gradient-to-r"></div>
          </div>

          {/* Content Section */}
          <div className="lg:w-3/5 p-8 md:p-12 flex flex-col justify-center">
            <div className="mb-8">
              <h2 className="text-gold-400 font-bold tracking-widest uppercase mb-2">The Founder</h2>
              <h1 className="font-serif text-4xl md:text-5xl text-white mb-4">Mr. Areeb</h1>
              <div className="h-1 w-20 bg-gold-500 rounded-full"></div>
            </div>

            <div className="relative mb-10">
              <Quote className="absolute -top-4 -left-4 text-gold-500/20 w-16 h-16 transform -scale-x-100" />
              <p className="relative z-10 text-xl md:text-2xl text-slate-200 font-serif italic leading-relaxed">
                "Real estate is not just about transactions; it is about trust, legacy, and finding the place where your future unfolds. At Areeb Realtors, we treat every client's dream as our own responsibility."
              </p>
            </div>

            <div className="space-y-6 text-slate-400 leading-relaxed">
              <p>
                With over a decade of experience in the Sri Lankan property market, Mr. Areeb founded Areeb Realtors with a singular vision: to bring transparency and professionalism to an industry often clouded by complexity.
              </p>
              <p>
                His expertise spans from luxury residential villas in the southern coast to high-value commercial investments in Colombo. Known for his keen eye for value and unwavering ethical standards, Mr. Areeb has personally facilitated some of the most notable property deals in the region.
              </p>
              <p>
                Under his leadership, Areeb Realtors has grown from a boutique agency into a brand synonymous with reliability and class.
              </p>
            </div>

            <div className="mt-10 pt-8 border-t border-white/10 flex flex-col md:flex-row gap-8">
              <div>
                <span className="block text-2xl font-bold text-white">10+</span>
                <span className="text-sm text-gold-400 uppercase tracking-wider">Years Experience</span>
              </div>
              <div>
                <span className="block text-2xl font-bold text-white">500+</span>
                <span className="text-sm text-gold-400 uppercase tracking-wider">Happy Clients</span>
              </div>
              <div>
                <span className="block text-2xl font-bold text-white">Island-wide</span>
                <span className="text-sm text-gold-400 uppercase tracking-wider">Network</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default OwnerProfile;