import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import LeadModal from './LeadModal';
import { useEffect, useState } from 'react';

const CTA = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('cta-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section id="cta-section" className="relative py-24 overflow-hidden" style={{ backgroundColor: '#0A0D10' }}>
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none z-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(34, 211, 238, 0.1) 1px, transparent 0)',
            backgroundSize: '60px 60px',
            animation: 'float 20s ease-in-out infinite'
          }}
        ></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <div className="glass-morphism rounded-3xl p-12 border border-white/10">
          <h2 className={`text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight transition-all duration-700 ${
            isVisible ? 'animate-in fade-in slide-in-from-bottom' : 'opacity-0'
          }`}>
            Ready to Automate Your Business?
          </h2>
          
          <p className={`text-xl text-slate-400 font-light mb-10 max-w-2xl mx-auto transition-all duration-700 ${
            isVisible ? 'animate-in fade-in slide-in-from-bottom' : 'opacity-0'
          }`} style={{ animationDelay: '0.2s' }}>
            Stop doing manual work. Start scaling with smart automation.
          </p>
          
          <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center transition-all duration-700 ${
            isVisible ? 'animate-in fade-in zoom-in' : 'opacity-0'
          }`} style={{ animationDelay: '0.4s' }}>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="btn-primary text-lg flex items-center space-x-3"
            >
              <ArrowRight className="h-5 w-5" />
              <span>Book Strategy Call</span>
            </button>
            
            <button 
              onClick={() => setIsDemoModalOpen(true)}
              className="btn-secondary text-lg flex items-center space-x-3"
            >
              <Play className="h-5 w-5" />
              <span>Get Free Automation Blueprint</span>
            </button>
          </div>
        </div>
      </div>
    </section>
    
    <LeadModal 
      isOpen={isModalOpen} 
      onClose={() => setIsModalOpen(false)} 
      title="Get Custom Bot"
    />
    
    <LeadModal 
      isOpen={isDemoModalOpen} 
      onClose={() => setIsDemoModalOpen(false)} 
      title="Book a Demo"
    />
  </>
  );
};

export default CTA;