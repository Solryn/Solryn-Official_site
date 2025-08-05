import React, { useState, useEffect } from 'react';
import { Menu, X, Bot } from 'lucide-react';
import LeadModal from './LeadModal';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled ? 'bg-black/80 backdrop-blur-sm border-b border-white/10' : 'bg-transparent'
        }`}
      >
        <div className="max-w-10x3 mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div
            className="flex items-center gap-4 cursor-pointer"
            onClick={() => scrollToSection('hero')}
          >
            <img 
              src="/Web-Icon-Logo.png" 
              alt="Solryn Logo" 
              className="w-16 h-16 sm:h-16 sm:w-14 object-contain"
            />
            <span className="text-x1 sm:text-3xl font-bold text-white ">Solryn</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('features')} className="text-slate-300 hover:text-white hover:glow-cyan transition-all duration-300 font-medium">Features</button>
            <button onClick={() => scrollToSection('pricing')} className="text-slate-300 hover:text-white hover:glow-cyan transition-all duration-300 font-medium">Pricing</button>
            <button onClick={() => scrollToSection('footer')} className="text-slate-300 hover:text-white hover:glow-cyan transition-all duration-300 font-medium">Contact</button>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="btn-primary"
            >
              Get Custom Automation
            </button>
          </nav>

          {/* Mobile Menu Icon */}
          <button 
            className="md:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/80 backdrop-blur-sm border-t border-slate-700/30">
            <div className="px-6 py-4 space-y-3">
              <button onClick={() => scrollToSection('features')} className="block text-slate-300 hover:text-white py-2 transition-colors w-full text-left">Features</button>
              <button onClick={() => scrollToSection('pricing')} className="block text-slate-300 hover:text-white py-2 transition-colors w-full text-left">Pricing</button>
              <button onClick={() => scrollToSection('footer')} className="block text-slate-300 hover:text-white py-2 transition-colors w-full text-left">Contact</button>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="w-full btn-primary mt-4"
              >
                Get Custom Automation
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Modal for custom bot */}
      <LeadModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        title="Get Custom Automation"
      />
    </>
  );
};

export default Header;
