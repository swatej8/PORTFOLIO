import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = ({ activeTab, setActiveTab }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Home', 'About', 'Skills', 'Services', 'Portfolio', 'Process', 'Contact'];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-4' : 'py-6'} bg-transparent`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          animate={{ y: [0, -2, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="font-heading font-black text-2xl tracking-tighter cursor-pointer"
          onClick={() => { setActiveTab('Home'); window.scrollTo(0,0); }}
        >
          SWATEJ<span className="text-primary">.</span>
        </motion.div>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <button 
              key={link} 
              onClick={() => setActiveTab(link)}
              className={`text-sm font-bold uppercase tracking-wide transition-colors ${activeTab === link ? 'text-primary' : 'text-dark hover:text-primary'}`}
            >
              {link}
            </button>
          ))}
          <button 
            onClick={() => setActiveTab('Contact')}
            className="px-6 py-2 bg-dark text-light rounded-full font-medium hover:bg-primary hover:text-dark transition-all duration-300"
          >
            Let's Talk
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-dark"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-lg shadow-lg border-t border-gray-100 py-6 px-6 flex flex-col gap-6 md:hidden"
          >
            {navLinks.map((link) => (
              <button 
                key={link} 
                onClick={() => {
                  setActiveTab(link);
                  setMobileMenuOpen(false);
                }}
                className={`text-xl font-heading font-bold text-left transition-colors ${activeTab === link ? 'text-primary' : 'text-dark hover:text-primary'}`}
              >
                {link}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
