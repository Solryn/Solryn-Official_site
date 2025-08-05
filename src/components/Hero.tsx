import React from 'react';
import { Play, ArrowRight } from 'lucide-react';
import LeadModal from './LeadModal';

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [isDemoModalOpen, setIsDemoModalOpen] = React.useState(false);


  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ backgroundColor: '#0A0D10' }}>
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none z-0">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(34, 211, 238, 0.1) 1px, transparent 0)`,
              backgroundSize: '60px 60px',
              animation: 'float 20s ease-in-out infinite'
            }}
          ></div>
        </div>

        {/* Floating Orbs */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse z-0"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse z-0" style={{ animationDelay: '2s' }}></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight reveal-up revealed">
              Turn Manual Work
              <span className="block text-gradient-blue">
                into Automated Wins
              </span>
            </h1>

            <p className="text-xl text-slate-400 max-w-4xl mx-auto leading-relaxed font-light reveal-up revealed" style={{ animationDelay: '0.2s' }}>
              Solryn builds AI-powered systems that replace repetitive tasks — from customer support to email outreach. Deploy automation that works 24/7, boosts productivity, and scales with your business.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8 reveal-up revealed" style={{ animationDelay: '0.6s' }}>
              <button
                onClick={() => setIsModalOpen(true)}
                className="btn-primary text-lg flex items-center space-x-3"
              >
                <ArrowRight className="h-5 w-5" />
                <span>Get Custom Automation</span>
              </button>

              <button
                onClick={() => setIsModalOpen(true)}
                className="btn-secondary text-lg flex items-center space-x-3"
              >
                <Play className="h-5 w-5" />
                <span>Get Free Automation Blueprint</span>
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 z-10">
          <div className="w-6 h-10 border-2 border-slate-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* Modals */}
      <LeadModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Get Custom Automation"
      />

      <LeadModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
        title="Watch 60s Demo"
          />
    </>
  );
};

export default Hero;
