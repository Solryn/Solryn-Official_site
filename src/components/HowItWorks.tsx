import { Search, Wrench, Rocket } from 'lucide-react';
import { useEffect, useState } from 'react';

const HowItWorks = () => {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);

  const steps = [
    {
      icon: Search,
      title: "Understand & Identify",
      description: "We dive deep into your operations to pinpoint automation opportunities that will have the highest impact on efficiency and ROI.",
      number: "01",
      delay: "0s"
    },
    {
      icon: Wrench,
      title: "Design & Build",
      description: "Using cutting-edge tools like Voiceflow, Make, and OpenAI, we create tailored AI workflows that integrate seamlessly with your existing systems.",
      number: "02",
      delay: "0.2s"
    },
    {
      icon: Rocket,
      title: "Launch & Optimize",
      description: "We deploy your automation in as little as 72 hours, monitor performance in real time, and fine-tune for even better results as you grow.",
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
                    <div className="bg-gradient-to-r from-cyan-500 to-emerald-500 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto transition-all duration-300 shadow-2xl hover:shadow-cyan-500/50 hover:scale-105">
                      <Icon className="h-10 w-10 text-white transition-all duration-300 group-hover:text-cyan-300" />
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
                    <div className="bg-gradient-to-r from-cyan-500 to-emerald-500 w-16 h-16 rounded-2xl flex items-center justify-center shadow-2xl transition-all duration-300 hover:shadow-cyan-500/50 hover:scale-105">
                      <Icon className="h-8 w-8 text-white transition-all duration-300" />
                    </div>
                    <div className="absolute -top-2 -right-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">
                      {step.number}
                    </div>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-0.5 h-16 bg-gradient-to-b from-cyan-500 to-emerald-500 mx-auto mt-4 opacity-50"></div>
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

        {/* Workflow Section */}
        <div className="max-w-6xl mx-auto space-y-20 mt-10"><br></br>
           {/* Section Heading */}
           <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-black/20 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 text-sm text-slate-300 mb-6">
              <Rocket className="h-4 w-4 text-cyan-400" />
              <span>Live Workflows</span>
            </div>

            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6">
              See It in Action
            </h2>

            <p className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              These are the same automation workflows we use internally — from intelligent email outreach to chatbot-based lead capture.
            </p>
          </div>
          {/* Email Workflow */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="glass-morphism rounded-2xl p-1 border border-white/10 hover:border-cyan-500/30 transition-all duration-500">
              <img
                src="/Email-Workflow.png"
                alt="Email Workflow"
                className="rounded-xl shadow-2xl w-full opacity-95"
              />
            </div>
            <div className="text-left space-y-6">
              <h3 className="text-3xl font-bold text-white">End-to-End Email Automation</h3>
              <p className="text-slate-400 text-lg leading-relaxed">
                We use AI to generate highly personalized cold emails at scale — mapped into custom workflows using Make.com, OpenAI, and Google Sheets.
              </p>
              <p className="text-slate-400 text-lg leading-relaxed">
                It scrapes the lead’s site, social profiles, and detects pain points to generate personalized outreach. Every interaction is tracked, analyzed, and optimized for conversions.
              </p>
            </div>
          </div>

          {/* Voiceflow + Chatbot Demo */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="glass-morphism rounded-2xl p-1 border border-white/10 hover:border-cyan-500/30 transition-all duration-500">
                  <img
                    src="/Voiceflow-Workflow.png"
                    alt="Voiceflow Workflow"
                    className="rounded-xl shadow-2xl w-full opacity-30"
                  />
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-2 sm:px-4">
                    <img
                      src="/Chatbot Web-Demo1 (2).gif"
                      alt="Chat Demo"
                      className="w-52 sm:w-64 md:w-72 lg:w-80 rounded-xl shadow-2xl border-4 border-cyan-400/40 hover:shadow-cyan-500/50 transition-all duration-500"
                    />
                  </div>
                </div>
                {/* Extra spacing below GIF to prevent overlap */}
                <div className="mt-8 lg:mt-12"></div>
              </div>
              <div className="text-left space-y-6">
                <h3 className="text-3xl font-bold text-white">Conversational AI Assistants</h3>
                <p className="text-slate-400 text-lg leading-relaxed">
                  From lead qualification to appointment booking, our Voiceflow-powered AI agents engage visitors in natural, human-like conversations.
                </p>
                <p className="text-slate-400 text-lg leading-relaxed">
                  These aren’t just bots — they’re 24/7 sales and support assistants, built to convert and retain customers.
                </p>
              </div>
            </div>
          </div>

          {/* Trusted By Section */}
          <section className="py-12 px-6 sm:px-12 lg:px-24 bg-transparent">
            <div className="text-center mb-8">
              <p className="text-slate-400 text-sm uppercase tracking-widest">
                <br></br><br></br>Trusted by teams at
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-8 gap-5 items-center justify-items-center">
              {['/icons8-chatgpt-50.png', '/make.png', '/n8n.png', '/Bolt.png', '/Voiceflow.png', '/Google_Workspace_Logo.svg.png', '/Sheet.png'].map((logo, idx) => (
                <img
                  key={idx}
                  src={logo}
                  alt={`Logo ${idx + 1}`}
                  className="h-8 sm:h-10 opacity-90 hover:opacity-100 transition-all duration-300 "
                />
              ))}
            </div>
            
              </section>

        {/* Bottom Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-20">
          <div className="text-center glass-morphism rounded-2xl p-3 border border-white/10 hover:border-cyan-500/30 transition-all duration-300">
            <div className="text-3xl font-bold text-white mb-2">72hrs</div>
            <div className="text-slate-400">Average deployment time</div>
          </div>
          <div className="text-center glass-morphism rounded-2xl p-3 border border-white/10 hover:border-cyan-500/30 transition-all duration-300">
            <div className="text-3xl font-bold text-white mb-2">24/7</div>
            <div className="text-slate-400">Ongoing support</div>
          </div>
          <div className="text-center glass-morphism rounded-2xl p-3 border border-white/10 hover:border-cyan-500/30 transition-all duration-300">
            <div className="text-3xl font-bold text-white mb-2">100%</div>
            <div className="text-slate-400">Custom built</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
