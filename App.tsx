import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import OwnerProfile from './pages/OwnerProfile';
import Contact from './pages/Contact';
import PropertyDetails from './pages/PropertyDetails';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="relative min-h-screen w-full font-sans text-slate-100 selection:bg-gold-500 selection:text-white">
        
        {/* Content Overlay */}
        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />
          
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/owner" element={<OwnerProfile />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/property/:id" element={<PropertyDetails />} />
            </Routes>
          </main>

          <footer className="bg-slate-950/80 backdrop-blur-xl border-t border-white/5 py-12 mt-24">
            <div className="container mx-auto px-6 text-center">
              <div className="flex flex-col items-center justify-center space-y-4">
                <p className="font-serif text-gold-500/80 text-xs tracking-[0.3em] uppercase mb-2">Areeb Realtors</p>
                
                <div className="text-xs text-slate-500 font-light tracking-wide space-y-2">
                  <p>&copy; 2026 Areeb Realtors. All rights reserved.</p>
                  <p>
                    Website created by{' '}
                    <a 
                      href="https://creatigence.com" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-slate-400 hover:text-gold-400 transition-colors duration-300 border-b border-transparent hover:border-gold-400 pb-0.5"
                    >
                      Creatigence
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </HashRouter>
  );
};

export default App;