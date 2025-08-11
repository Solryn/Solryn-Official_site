import { Play, ArrowRight, Sparkles } from 'lucide-react';
import { useModal } from '../contexts/ModalContext';
import { useEffect, useState } from 'react';

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
        className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 sm:px-12 md:px-16 lg:px-24"
        style={{ backgroundColor: '#0A0D10' }}
      >
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
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse z-0"
          style={{ animationDelay: '2s' }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-500/5 to-emerald-500/5 rounded-full blur-3xl animate-pulse z-0"
          style={{ animationDelay: '1s' }}
        ></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Column */}
            <div className="text-center lg:text-left space-y-8 pt-24 sm:pt-0">
              {/* Badge */}
              <div
                className={`inline-flex items-center space-x-2 bg-black/20 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 text-sm text-slate-300 transition-all duration-700 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
              >
                <Sparkles className="h-4 w-4 text-cyan-400" />
                <span>AI Automation That Actually Works</span>
              </div>

              {/* Main Heading */}
              <h1
                className={`font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-tight tracking-tight transition-all duration-700 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: '0.1s' }}
              >
                Turn Manual Work
                <span className="block text-gradient-premium mt-2">
                  into Automated Wins
                </span>
              </h1>

              {/* Subheading */}
              <p
                className={`text-base sm:text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed mx-auto lg:mx-0 transition-all duration-700 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: '0.2s' }}
              >
                Solryn builds AI-powered systems that replace repetitive tasks — from customer support to email outreach.
                Deploy automation that works 24/7, boosts productivity, and scales with your business.
              </p>

              {/* CTA Buttons */}
              <div
                className={`flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start transition-all duration-700 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: '0.3s' }}
              >
                <button
                  onClick={() => openModal('Get Custom Automation')}
                  className="bg-gradient-to-r from-cyan-500 to-emerald-500 text-white font-semibold px-6 py-3 rounded-xl hover:scale-105 transition-all duration-300 shadow-lg flex flex-col items-center justify-center group"
                >
                  <div className="flex items-center space-x-3">
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    <span>Get Custom Automation</span>
                  </div>
                  <span className="text-xs text-white/80 mt-1">Setup in 72hrs</span>
                </button>

                <button
                  onClick={() => openModal('Get Free Automation Blueprint')}
                  className="bg-white/10 border border-white/20 text-white font-semibold px-6 py-3 rounded-xl hover:scale-105 transition-all duration-300 shadow-md flex flex-col items-center justify-center group"
                >
                  <div className="flex items-center space-x-3">
                    <Play className="h-5 w-5 group-hover:scale-110 transition-transform" />
                    <span>Get Free Blueprint</span>
                  </div>
                  <span className="text-xs text-white/70 mt-1">No credit card required</span>
                </button>
              </div>
            </div>

            {/* Right Column */}
            <div
              className={`relative transition-all duration-1000 ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: '0.5s' }}
            >
              <div className="relative">
                {/* Main Card */}
                <div className="glass-morphism rounded-3xl p-6 sm:p-8 border border-white/10 hover:border-cyan-500/30 transition-all duration-500 float-slow max-w-xs sm:max-w-none mx-auto">
                  <div className="space-y-6">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                      <div className="text-xs text-slate-400">AI Dashboard</div>
                    </div>

                    {/* Bars */}
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-lg flex items-center justify-center">
                          <ArrowRight className="h-4 w-4 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="h-2 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full"></div>
                        </div>
                        <div className="text-xs text-slate-400">100%</div>
                      </div>

                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                          <Play className="h-4 w-4 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="h-2 bg-slate-700 rounded-full">
                            <div className="h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full w-3/4 animate-pulse"></div>
                          </div>
                        </div>
                        <div className="text-xs text-slate-400">75%</div>
                      </div>

                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center">
                          <Sparkles className="h-4 w-4 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="h-2 bg-slate-700 rounded-full">
                            <div
                              className="h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full w-1/2 animate-pulse"
                              style={{ animationDelay: '0.5s' }}
                            ></div>
                          </div>
                        </div>
                        <div className="text-xs text-slate-400">50%</div>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10">
                      <div className="text-center">
                        <div className="text-lg font-bold text-white">24/7</div>
                        <div className="text-xs text-slate-400">Uptime</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-white">2.5x</div>
                        <div className="text-xs text-slate-400">Faster</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-white">94%</div>
                        <div className="text-xs text-slate-400">Accuracy</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-2xl flex items-center justify-center animate-bounce-slow">
                  <Sparkles className="h-8 w-8 text-white" />
                </div>

                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center animate-pulse">
                  <ArrowRight className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 hidden lg:flex">
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
                <br></br><br></br>Trusted by teams at
              </p>
            </div>
          <div className="flex space-x-8 sm:space-x-12 animate-scroll hover:[animation-play-state:paused] px-6 sm:px-12 md:px-16 lg:px-24">
            <img src="/icons8-chatgpt-50.png" alt="OpenAI" className="h-6 sm:h-8 lg:h-6 object-contain" />
            <img src="/make.webp" alt="Make.com" className="h-5 sm:h-8 lg:h-5 object-contain" />
            <img src="/n8n.png" alt="n8n" className="h-6 sm:h-8 lg:h-6 object-contain" />
            <img src="/Google_Workspace_Logo.svg.png" alt="Google Workspace" className="h-6 sm:h-8 lg:h-5 object-contain" />
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
