import React from 'react';
import { TrendingUp, Users, Star, Zap } from 'lucide-react';
import { useEffect, useState } from 'react';

const UseCases = () => {
  const [visibleCases, setVisibleCases] = useState<number[]>([]);

  const cases = [
    {
      icon: TrendingUp,
      title: "2× leads",
      metric: "+28%",
      description: "more qualified leads",
      result: "AI-powered lead qualification and nurturing doubled conversion rates for a B2B agency within 30 days.",
      gradient: "from-blue-500/20 to-blue-600/20",
      border: "border-blue-500/30",
      iconColor: "text-blue-400"
    },
    {
      icon: Users,
      title: "44% fewer no-shows",
      metric: "44%",
      description: "reduction in missed appointments",
      result: "Automated reminder system with smart rescheduling reduced no-shows by 44% for a dental practice.",
      gradient: "from-emerald-500/20 to-emerald-600/20",
      border: "border-emerald-500/30",
      iconColor: "text-emerald-400"
    },
    {
      icon: Star,
      title: "30+ hours saved",
      metric: "30+",
      description: "hours saved per week",
      result: "Custom workflow automation eliminated repetitive tasks, freeing up 30+ hours weekly for strategic work.",
      gradient: "from-purple-500/20 to-purple-600/20",
      border: "border-purple-500/30",
      iconColor: "text-purple-400"
    },
    {
      icon: Zap,
      title: "94% CSAT",
      metric: "94%",
      description: "customer satisfaction score",
      result: "24/7 AI support with human handoff achieved 94% satisfaction while reducing response times to under 30 seconds.",
      gradient: "from-orange-500/20 to-orange-600/20",
      border: "border-orange-500/30",
      iconColor: "text-orange-400"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setTimeout(() => {
              setVisibleCases(prev => [...prev, index]);
            }, index * 300);
          }
        });
      },
      { threshold: 0.3 }
    );

    const elements = document.querySelectorAll('.use-case-item');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="use-cases" className="relative py-24 overflow-hidden" style={{ backgroundColor: '#0A0D10' }}>
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

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
            Automation That Pays for Itself
          </h2>
          <p className="text-xl text-slate-400 font-light max-w-3xl mx-auto">
            From Business Agencies to SaaS Startups - Automation Transformed their operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cases.map((useCase, index) => {
            const Icon = useCase.icon;
            
            return (
              <div
                key={index}
                className={`use-case-item group bg-black/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-cyan-500/50 hover:scale-105 transition-all duration-500 cursor-pointer ${
                  visibleCases.includes(index) ? 'animate-slide-in-from-bottom' : 'opacity-0'
                }`}
                data-index={index}
              >
                <div className="flex items-center justify-between mb-6">
                  <Icon className={`h-8 w-8 ${useCase.iconColor}`} />
                  <div className="text-right">
                    <div className="text-3xl font-bold text-white">{useCase.metric}</div>
                    <div className="text-sm text-slate-400">{useCase.description}</div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4">
                  {useCase.title}
                </h3>
                
                <p className="text-slate-300 leading-relaxed">
                  {useCase.result}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default UseCases;