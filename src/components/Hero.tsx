import { Play, ArrowRight, Sparkles } from 'lucide-react';
import { useModal } from '../contexts/ModalContext';
import { useEffect, useState } from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  const { openModal } = useModal();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <section
        className="relative min-h-screen flex items-center overflow-visible"
        style={{ backgroundColor: '#0A0D10', overflowY: 'auto' }} // allow scrolling
      >
        {/* Text BEHIND spline */}
        <div
          className="absolute z-10 text-white select-none"
          style={{
            top: '84%', // adjust to move up/down relative to buttons
            left: '8%', // matches button alignment
            transform: 'translateY(-120%)', // moves text above buttons
          }}
        >
          <div
            className={`inline-flex items-center space-x-2 bg-black/20 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 text-sm text-slate-300 ${
              isVisible ? 'animate-fade-in-up' : 'opacity-0'
            }`}
          >
            <Sparkles className="h-4 w-4 text-cyan-400" />
            <span>AI Automation That Actually Works</span>
          </div><br></br>

          <h1
            className={`mt-7 font-display text-4xl sm:text-4xl lg:text-5xl xl:text-7xl font-extrabold leading-tight tracking-tight ${
              isVisible ? 'animate-fade-in-up' : 'opacity-0'
            }`}
          >
            Turn Manual <br></br>Work
            <span className="block text-gradient-premium mt-2 space-y-4">
              into Automated <br></br>Wins<br></br>
            </span>
          </h1>

          <p
            className={`mt-7 text-sm sm:text-base md:text-lg lg:text-xl text-slate-400 max-w-2xl leading-relaxed ${
              isVisible ? 'animate-fade-in-up' : 'opacity-0'
            }`}
          >
            Solryn builds AI-powered systems that replace repetitive tasks —
            from customer support to email outreach. Deploy automation that
            works 24/7, boosts productivity, and scales with your business.
          </p>
        </div>

    

        {/* Spline IN FRONT */}
        <div className="absolute inset-0 z-20 pointer-events-none">
        <div className="w-full h-full">
          <Spline
            scene="https://prod.spline.design/41OTHiR3KikDixJb/scene.splinecode"
            style={{
              width: '100%',
              height: '100%',
              background: 'transparent',
              pointerEvents: 'auto', // spline is still interactive
            }}
          />
        </div>
      </div>

        {/* Buttons in FRONT */}
        {/* Buttons - on top of spline */}
        <div
          className={`absolute z-30 flex flex-col sm:flex-row gap-3 sm:gap-4`}
          style={{
            top: '76%',   // adjust this to move up/down
            left: '8%',   // adjust this to move left/right
          }}
        >
          <button
            onClick={() => openModal('Get Custom Automation')}
            className="bg-gradient-to-r from-cyan-500 to-emerald-500 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:scale-105 transition-all duration-300 flex flex-col items-center justify-center group"
          >
            <div className="flex items-center space-x-3">
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              <span>Get Custom Automation</span>
            </div>
            <span className="text-xs text-white/80 mt-1">Setup in 72hrs</span>
          </button>

          <button
            onClick={() => openModal('Get Free Automation Blueprint')}
            className="bg-white/10 border border-white/20 text-white font-semibold px-6 py-3 rounded-xl shadow-md hover:scale-105 transition-all duration-300 flex flex-col items-center justify-center group"
          >
            <div className="flex items-center space-x-3">
              <Play className="h-5 w-5 group-hover:scale-110 transition-transform" />
              <span>Get Free Blueprint</span>
            </div>
            <span className="text-xs text-white/70 mt-1">
              No credit card required
            </span>
          </button>
        </div>



        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 hidden lg:flex">
          <div className="w-6 h-10 border-2 border-slate-600 rounded-full flex justify-center animate-pulse">
            <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* INTEGRATIONS CAROUSEL */}
      <section className="bg-[#0A0D10] py-6">
        <div className="overflow-hidden relative">
          <div className="text-center mb-8">
            <p className="text-slate-400 text-sm uppercase tracking-widest">
              <br />
              <br />
              Trusted by teams at
            </p>
          </div>
          <div
            className="flex space-x-8 sm:space-x-12 animate-scroll hover:[animation-play-state:paused] 
                 px-6 sm:px-12 md:px-16 lg:px-0 max-w-[75%] mx-auto"
          >
            <img src="/icons8-chatgpt-50.png" alt="OpenAI" className="h-6 sm:h-8 lg:h-6 object-contain" />
            <img src="/make.webp" alt="Make.com" className="h-5 sm:h-8 lg:h-5 object-contain" />
            <img src="/n8n.png" alt="n8n" className="h-6 sm:h-8 lg:h-6 object-contain" />
            <img src="/Apify.svg" alt="Apify" className="h-6 sm:h-8 lg:h-6 object-contain" />
            <img src="/Supabase.png" alt="Supabase" className="h-6 sm:h-8 lg:h-6 object-contain" />
            <img src="/Linkedin.png" alt="Linkedin" className="h-10 sm:h-8 lg:h-10 object-contain" />
            <img
              src="/Google_Workspace_Logo.svg.png"
              alt="Google Workspace"
              className="h-6 sm:h-8 lg:h-5 object-contain"
            />
            <img src="/Sheet.png" alt="Google Sheets" className="h-6 sm:h-8 lg:h-7 object-contain" />
            <img src="/Calendly.png" alt="Calendly" className="h-6 sm:h-8 lg:h-8 object-contain" />
          </div>
        </div>

        <style>{`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll {
            animation: scroll 20s linear infinite;
          }
        `}</style>
      </section>
    </>
  );
};

export default Hero;
