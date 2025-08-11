import { ArrowRight, Play, Sparkles } from 'lucide-react';
import { useModal } from '../contexts/ModalContext';
import { useEffect, useState } from 'react';

const CTA = () => {
  const { openModal } = useModal();
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
      <div className="glass-morphism rounded-3xl p-12 lg:p-16 border border-white/10 hover:border-cyan-500/30 transition-all duration-500">
           {/* Badge */}
           <div className={`inline-flex items-center space-x-2 bg-black/20 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 text-sm text-slate-300 mb-8 transition-all duration-700 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0'
          }`}>
            <Sparkles className="h-4 w-4 text-cyan-400" />
            <span>Ready to Transform Your Business?</span>
          </div>

          {/* Main Heading */}
          <h2 className={`font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight transition-all duration-700 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0'
          }`} style={{ animationDelay: '0.1s' }}>
            Ready to Automate
            <span className="block text-gradient-premium mt-2">Your Business?</span>
          </h2>
          
          {/* Subheading */}
          <p className={`text-xl sm:text-2xl text-slate-400 font-light mb-12 max-w-3xl mx-auto leading-relaxed transition-all duration-700 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0'
          }`} style={{ animationDelay: '0.2s' }}>
            Stop doing manual work. Start scaling with smart automation that works 24/7.
          </p>
          
          <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center transition-all duration-700 ${
            isVisible ? 'animate-in fade-in zoom-in' : 'opacity-0'
          }`} style={{ animationDelay: '0.4s' }}>
            <button 
              onClick={() => openModal('Book Strategy Call')}
              className="bg-gradient-to-r from-cyan-500 to-emerald-500 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-cyan-400 hover:to-emerald-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex flex-col items-center"
            >
              <div className="flex items-center space-x-3">
                <ArrowRight className="h-5 w-5" />
                <span>Book Strategy Call</span>
              </div>
              <span className="text-xs text-white/80 mt-1">Setup in 72hrs</span>
            </button>
            
            <button 
              onClick={() => openModal('Get Free Automation Blueprint')}
              className="bg-black/10 backdrop-blur-sm border border-white/10 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:border-cyan-500/50 hover:bg-black/20 transition-all duration-300 transform hover:scale-105 hover:shadow-cyan-500/25 flex flex-col items-center"
            >
              <div className="flex items-center space-x-3">
                <Play className="h-5 w-5" />
                <span>Get Free Automation Blueprint</span>
              </div>
              <span className="text-xs text-white/70 mt-1">No credit card required</span>
            </button>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default CTA;