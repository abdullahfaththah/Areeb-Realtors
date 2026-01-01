import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, TrendingUp, Users, Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      variants={container}
      initial="hidden"
      animate="show"
      exit={{ opacity: 0 }}
      className="pt-32 pb-20 px-6 max-w-7xl mx-auto"
    >
      {/* Header Section */}
      <motion.div variants={item} className="text-center mb-20">
        <h2 className="text-gold-400 text-sm font-bold tracking-[0.2em] uppercase mb-4">Who We Are</h2>
        <h1 className="font-serif text-4xl md:text-6xl text-white leading-tight">
          Redefining the Art of <br />
          <span className="italic text-slate-400">Real Estate in Sri Lanka</span>
        </h1>
      </motion.div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-24">
        
        {/* Left Column: The Manifesto (Large Block) */}
        <motion.div variants={item} className="lg:col-span-7 flex flex-col h-full">
          <div className="bg-slate-900/80 backdrop-blur-md border border-white/10 rounded-3xl p-10 flex-grow shadow-2xl relative overflow-hidden group">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/5 rounded-full blur-3xl -mr-32 -mt-32 transition-opacity duration-700 group-hover:opacity-100"></div>
            
            <h3 className="font-serif text-3xl text-white mb-6 relative z-10">The Areeb Standard</h3>
            <div className="w-16 h-0.5 bg-gold-500 mb-8 relative z-10"></div>
            
            <div className="space-y-6 text-slate-300 text-lg leading-relaxed relative z-10 font-light">
              <p>
                <strong className="text-white font-semibold">Areeb Realtors</strong> wasn't built to just list properties. We were established to navigate the complexities of the market on your behalf.
              </p>
              <p>
                In a landscape often clouded by uncertainty, we stand as your beacon of clarity. We bridge the gap between aspiration and ownership, curating a portfolio that represents not just shelter, but <span className="text-gold-400">legacy</span>.
              </p>
              <p>
                Whether you are a first-time investor or a seasoned seller, our approach is identical: absolute transparency, rigorous market analysis, and a commitment to your financial success.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right Column: The Value Props (Stacked Grid) */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          
          {/* Card 1: Trust */}
          <motion.div variants={item} className="bg-slate-800/40 border border-white/5 rounded-2xl p-8 hover:border-gold-500/30 transition-colors duration-300">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-slate-950 rounded-lg border border-white/10 text-gold-400">
                <ShieldCheck size={28} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-2">Unwavering Integrity</h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  We believe trust is the only currency that matters. Every transaction is conducted with complete legal transparency and ethical precision.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Expertise */}
          <motion.div variants={item} className="bg-slate-800/40 border border-white/5 rounded-2xl p-8 hover:border-gold-500/30 transition-colors duration-300">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-slate-950 rounded-lg border border-white/10 text-gold-400">
                <TrendingUp size={28} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-2">Market Mastery</h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Backed by data and decades of local insight, we don't just follow trends—we anticipate them to maximize your asset value.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Experience */}
          <motion.div variants={item} className="bg-slate-800/40 border border-white/5 rounded-2xl p-8 hover:border-gold-500/30 transition-colors duration-300">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-slate-950 rounded-lg border border-white/10 text-gold-400">
                <Users size={28} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-2">Client-Centric Focus</h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  You are not a lead; you are a partner. We tailor every strategy to fit your unique timeline, budget, and lifestyle goals.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Bottom CTA Section */}
      <motion.div variants={item} className="border-t border-white/10 pt-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-gradient-to-r from-slate-900 to-slate-900/50 p-10 rounded-3xl border border-gold-500/20">
          <div>
            <h3 className="font-serif text-3xl text-white mb-2">Ready to make your move?</h3>
            <p className="text-slate-400">Let's discuss how we can elevate your real estate portfolio.</p>
          </div>
          <Link 
            to="/contact" 
            className="group flex items-center gap-3 bg-gold-500 text-slate-950 px-8 py-4 rounded-full font-bold uppercase tracking-wider hover:bg-gold-400 transition-all shadow-lg shadow-gold-500/10"
          >
            Start the conversation
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </motion.div>

    </motion.div>
  );
};

export default About;