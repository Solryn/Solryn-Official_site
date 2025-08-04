import React from 'react';
import { Search, Wrench, Rocket } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Search,
      title: "We Understand Your Needs",
      description: "Deep dive into your current processes, pain points, and automation opportunities to design the perfect solution.",
      number: "01"
    },
    {
      icon: Wrench,
      title: "Build Your AI Agent",
      description: "Custom development using Voiceflow, Make, and OpenAI to create automation that fits your exact workflow.",
      number: "02"
    },
    {
      icon: Rocket,
      title: "Test, Deploy, Scale",
      description: "Thorough testing, seamless deployment, and ongoing optimization to ensure maximum ROI and performance.",
      number: "03"
    }
  ];

  return (
    <section id="how-it-works" className="relative py-24 overflow-hidden" style={{ backgroundColor: '#0A0D10' }}>
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            How It Works
          </h2>
          <p className="text-xl text-slate-400 font-light max-w-3xl mx-auto">
            From consultation to deployment — a streamlined process that gets you automated fast.
          </p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-24 left-1/2 transform -translate-x-1/2 w-full max-w-4xl">
            <div className="flex justify-between items-center">
              <div className="w-8 h-8 bg-purple-600 rounded-full"></div>
              <div className="flex-1 h-0.5 bg-purple-600 mx-4"></div>
              <div className="w-8 h-8 bg-purple-600 rounded-full"></div>
              <div className="flex-1 h-0.5 bg-purple-600 mx-4"></div>
              <div className="w-8 h-8 bg-purple-600 rounded-full"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              
              return (
                <div
                  key={index}
                  className="group text-center bg-black/10 backdrop-blur-sm rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:scale-105 border border-white/10 hover:border-purple-500/50"
                >
                  <div className="relative mb-6">
                    <div className="bg-purple-600 hover:bg-purple-700 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-all duration-300">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 bg-purple-600 text-white text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center shadow-lg">
                      {step.number}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4">
                    {step.title}
                  </h3>
                  
                  <p className="text-slate-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;