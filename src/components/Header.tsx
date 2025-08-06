import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useModal } from '../contexts/ModalContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { openModal } = useModal();

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
          isScrolled 
            ? 'bg-black/80 backdrop-blur-xl border-b border-white/10 shadow-2xl' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-16 lg:px-24 py-4 flex items-center justify-between">
          {/* Logo */}
          <div
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => scrollToSection('hero')}
          >
            <div className="relative">
              <img 
                src="/Web-Icon-Logo.png" 
                alt="Solryn Logo" 
                className="w-10 h-10 sm:w-12 sm:h-12 object-contain transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl"></div>
            </div>
            <span className="font-display text-xl sm:text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-emerald-400 group-hover:bg-clip-text transition-all duration-300">
              Solryn
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('features')} 
              className="text-slate-300 hover:text-white font-medium transition-all duration-300 hover:scale-105 relative group"
            >
              Features
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-emerald-500 group-hover:w-full transition-all duration-300"></div>
            </button>
            <button 
              onClick={() => scrollToSection('pricing')} 
              className="text-slate-300 hover:text-white font-medium transition-all duration-300 hover:scale-105 relative group"
            >
              Pricing
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-emerald-500 group-hover:w-full transition-all duration-300"></div>
            </button>
            <button 
              onClick={() => scrollToSection('footer')} 
              className="text-slate-300 hover:text-white font-medium transition-all duration-300 hover:scale-105 relative group"
            >
              Contact
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-emerald-500 group-hover:w-full transition-all duration-300"></div>
            </button>
            <button 
                onClick={() => openModal('Get Custom Automation')}
                className="w-full bg-gradient-to-r from-cyan-500 to-emerald-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-cyan-400 hover:to-emerald-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 mt-4"
              >
                Get Custom Automation
              </button>
          </nav>

          {/* Mobile Menu Icon */}
          <button 
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/90 backdrop-blur-xl border-t border-white/10 animate-fade-in">
            <div className="px-6 py-6 space-y-4">
              <button 
                onClick={() => scrollToSection('features')} 
                className="block text-slate-300 hover:text-white py-3 transition-colors w-full text-left font-medium hover:bg-white/5 rounded-lg px-3"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('pricing')} 
                className="block text-slate-300 hover:text-white py-3 transition-colors w-full text-left font-medium hover:bg-white/5 rounded-lg px-3"
              >
                Pricing
              </button>
              <button 
                onClick={() => scrollToSection('footer')} 
                className="block text-slate-300 hover:text-white py-3 transition-colors w-full text-left font-medium hover:bg-white/5 rounded-lg px-3"
              >
                Contact
              </button>
              <button 
                onClick={() => openModal('Get Custom Automation')}
                className="w-full bg-gradient-to-r from-cyan-500 to-emerald-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-cyan-400 hover:to-emerald-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 mt-4"
              >
                Get Custom Automation
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
