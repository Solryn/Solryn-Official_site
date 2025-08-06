import { Search, Wrench, Rocket } from 'lucide-react';
import { useEffect, useState } from 'react';

const HowItWorks = () => {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);

  const steps = [
    {
      icon: Search,
      title: "We Understand Your Needs",
      description: "Deep dive into your current processes, pain points, and automation opportunities to design the perfect solution.",
      number: "01",
      delay: "0s"
    },
    {
      icon: Wrench,
      title: "Build Your AI Agent",
      description: "Custom development using Voiceflow, Make, and OpenAI to create automation that fits your exact workflow.",
      number: "02",
      delay: "0.2s"
    },
    {
      icon: Rocket,
      title: "Test, Deploy, Scale",
      description: "Thorough testing, seamless deployment, and ongoing optimization to ensure maximum ROI and performance.",
      number: "03",
      delay: "0.4s"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setTimeout(() => {
              setVisibleSteps(prev => [...prev, index]);
            }, index * 200);
          }
        });
      },
      { threshold: 0.3 }
    );

    const elements = document.querySelectorAll('.step-item');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="how-it-works" className="relative py-20 overflow-hidden px-6 sm:px-12 md:px-16 lg:px-24" style={{ backgroundColor: '#0A0D10' }}>
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

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-black/20 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 text-sm text-slate-300 mb-6">
            <Rocket className="h-4 w-4 text-cyan-400" />
            <span>Simple Process</span>
          </div>
          
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6">
            How It Works
          </h2>
          
          <p className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            From consultation to deployment — a streamlined process that gets you automated fast.
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block relative mb-16">
          {/* Connection line */}
          <div className="absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 via-emerald-500 to-purple-500 opacity-30"></div>
          
          <div className="grid grid-cols-3 gap-8 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              
              return (
                <div
                  key={index}
                  className={`step-item text-center animate-on-scroll ${
                    visibleSteps.includes(index) ? 'animate-in' : ''
                  }`}
                  data-index={index}
                  style={{ animationDelay: step.delay }}
                >
                  <div className="relative mb-8">
                    <div className="bg-gradient-to-r from-cyan-500 to-emerald-500 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto group-hover:scale-110 transition-all duration-300 shadow-2xl">
                      <Icon className="h-10 w-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center shadow-lg">
                      {step.number}
                    </div>
                  </div>
                  
                  <h3 className="font-display text-2xl font-bold text-white mb-4">
                    {step.title}
                  </h3>
                  
                  <p className="text-slate-300 leading-relaxed text-lg">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden space-y-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            
            return (
              <div
                key={index}
                className={`step-item flex items-start space-x-6 animate-on-scroll ${
                  visibleSteps.includes(index) ? 'animate-in' : ''
                }`}
                data-index={index}
                style={{ animationDelay: step.delay }}
              >
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className="bg-gradient-to-r from-cyan-500 to-emerald-500 w-16 h-16 rounded-2xl flex items-center justify-center shadow-2xl">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">
                      {step.number}
                    </div>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-0.5 h-16 bg-gradient-to-b from-cyan-500 to-emerald-500 mx-auto mt-4 opacity-30"></div>
                  )}
                </div>
                
                <div className="flex-1 pt-2">
                  <h3 className="font-display text-xl font-bold text-white mb-3">
                    {step.title}
                  </h3>
                  
                  <p className="text-slate-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-20">
          <div className="text-center glass-morphism rounded-2xl p-6 border border-white/10 hover:border-cyan-500/30 transition-all duration-300">
            <div className="text-3xl font-bold text-white mb-2">72hrs</div>
            <div className="text-slate-400">Average deployment time</div>
          </div>
          <div className="text-center glass-morphism rounded-2xl p-6 border border-white/10 hover:border-cyan-500/30 transition-all duration-300">
            <div className="text-3xl font-bold text-white mb-2">24/7</div>
            <div className="text-slate-400">Ongoing support</div>
          </div>
          <div className="text-center glass-morphism rounded-2xl p-6 border border-white/10 hover:border-cyan-500/30 transition-all duration-300">
            <div className="text-3xl font-bold text-white mb-2">100%</div>
            <div className="text-slate-400">Custom built</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;