import React from 'react';
import { Heart, Zap, Users, Target } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Empathy-Driven Design",
      description: "Every interaction should feel human and caring"
    },
    {
      icon: Zap,
      title: "Smart, Simple Automation",
      description: "Powerful technology that's easy to use and understand"
    },
    {
      icon: Users,
      title: "Collaboration First",
      description: "We work with you, not for you, to build the perfect solution"
    },
    {
      icon: Target,
      title: "Outcome-Focused",
      description: "Results matter more than features or complexity"
    }
  ];

  return (
    <section id="about" className="relative py-24 overflow-hidden" style={{ backgroundColor: '#0A0D10' }}>
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
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
              About Solryn
            </h2>
          </div>

          <div className="bg-black/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10 mb-16">
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-xl text-slate-300 leading-relaxed mb-6">
                Solryn is a premium AI automation agency for fast-moving service businesses. We help hospitality, healthcare, and professional teams eliminate busywork with powerful AI agents, smart email flows, and tailored customer support bots.<br></br><br></br>

We don't just "add a chatbot" — we build full systems that save hours every week, improve team productivity, and convert more leads while you sleep.<br></br><br></br>

Using tools like OpenAI, Voiceflow, Make, and Vapi, we design, build, and integrate powerful AI systems into your existing tools — without any code or team training needed.
              </p>
            </div>
          </div>

          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-8">Our Values</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              
              return (
                <div
                  key={index}
                  className="group bg-black/10 backdrop-blur-sm rounded-2xl p-6 transition-all duration-300 hover:scale-105 border border-white/10 hover:border-cyan-500/50"
                >
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  
                  <h4 className="text-xl font-bold text-white mb-3">
                    {value.title}
                  </h4>
                  
                  <p className="text-slate-300 leading-relaxed">
                    {value.description}
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

export default About;