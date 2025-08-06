import { Heart, Zap, Users, Target } from 'lucide-react';
import { useEffect, useState } from 'react';

const About = () => {
  const [visibleValues, setVisibleValues] = useState<number[]>([]);

  const values = [
    {
      icon: Heart,
      title: "Empathy-Driven Design",
      description: "Every interaction should feel human and caring",
      gradient: "from-pink-500 to-red-500",
      delay: "0s"
    },
    {
      icon: Zap,
      title: "Smart, Simple Automation",
      description: "Powerful technology that's easy to use and understand",
      gradient: "from-cyan-500 to-blue-500",
      delay: "0.1s"
    },
    {
      icon: Users,
      title: "Collaboration First",
      description: "We work with you, not for you, to build the perfect solution",
      gradient: "from-emerald-500 to-green-500",
      delay: "0.2s"
    },
    {
      icon: Target,
      title: "Outcome-Focused",
      description: "Results matter more than features or complexity",
      gradient: "from-purple-500 to-indigo-500",
      delay: "0.3s"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setTimeout(() => {
              setVisibleValues(prev => [...prev, index]);
            }, index * 150);
          }
        });
      },
      { threshold: 0.3 }
    );

    const elements = document.querySelectorAll('.value-item');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="relative py-20 overflow-hidden px-6 sm:px-12 md:px-16 lg:px-24" style={{ backgroundColor: '#0A0D10' }}>
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
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-black/20 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 text-sm text-slate-300 mb-6">
              <Heart className="h-4 w-4 text-cyan-400" />
              <span>About Us</span>
            </div>
            
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6">
              About Solryn
            </h2>
          </div>

          {/* Main Content */}
          <div className="glass-morphism rounded-3xl p-12 border border-white/10 mb-20 hover:border-cyan-500/30 transition-all duration-500">
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-xl text-slate-300 leading-relaxed mb-8 text-center">
                Solryn is a premium AI automation agency for fast-moving service businesses. We help hospitality, healthcare, and professional teams eliminate busywork with powerful AI agents, smart email flows, and tailored customer support bots.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mt-12">
                <div className="space-y-6">
                  <h3 className="font-display text-2xl font-bold text-white">Our Mission</h3>
                  <p className="text-slate-300 leading-relaxed">
                    We don't just "add a chatbot" — we build full systems that save hours every week, improve team productivity, and convert more leads while you sleep.
                  </p>
                </div>
                
                <div className="space-y-6">
                  <h3 className="font-display text-2xl font-bold text-white">Our Approach</h3>
                  <p className="text-slate-300 leading-relaxed">
                    Using tools like OpenAI, Voiceflow, Make, and Vapi, we design, build, and integrate powerful AI systems into your existing tools — without any code or team training needed.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="text-center mb-16">
            <h3 className="font-display text-3xl font-bold text-white mb-8">Our Values</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              
              return (
                <div
                  key={index}
                  className={`value-item group glass-morphism rounded-3xl p-8 transition-all duration-500 hover:scale-105 border border-white/10 hover:border-cyan-500/30 animate-on-scroll ${
                    visibleValues.includes(index) ? 'animate-in' : ''
                  }`}
                  data-index={index}
                  style={{ animationDelay: value.delay }}
                >
                  <div className={`bg-gradient-to-r ${value.gradient} w-16 h-16 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-2xl`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h4 className="font-display text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                    {value.title}
                  </h4>
                  
                  <p className="text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
                    {value.description}
                  </p>

                  {/* Hover Effect */}
                  
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