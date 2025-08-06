import { TrendingUp, Users, Star, Zap } from 'lucide-react';
import { useEffect, useState } from 'react';

const UseCases = () => {
  const [visibleCases, setVisibleCases] = useState<number[]>([]);
  const [counters, setCounters] = useState([0, 0, 0, 0]);

  const cases = [
    {
      icon: TrendingUp,
      title: "2× leads",
      metric: 28,
      suffix: "%",
      description: "more qualified leads",
      result: "AI-powered lead qualification and nurturing doubled conversion rates for a B2B agency within 30 days.",
      gradient: "from-blue-500/20 to-blue-600/20",
      border: "border-blue-500/30",
      iconColor: "text-blue-400",
      delay: "0s"
    },
    {
      icon: Users,
      title: "44% fewer no-shows",
      metric: 44,
      suffix: "%",
      description: "reduction in missed appointments",
      result: "Automated reminder system with smart rescheduling reduced no-shows by 44% for a dental practice.",
      gradient: "from-emerald-500/20 to-emerald-600/20",
      border: "border-emerald-500/30",
      iconColor: "text-emerald-400",
      delay: "0.1s"
    },
    {
      icon: Star,
      title: "30+ hours saved",
      metric: 30,
      suffix: "+",
      description: "hours saved per week",
      result: "Custom workflow automation eliminated repetitive tasks, freeing up 30+ hours weekly for strategic work.",
      gradient: "from-purple-500/20 to-purple-600/20",
      border: "border-purple-500/30",
      iconColor: "text-purple-400",
      delay: "0.2s"
    },
    {
      icon: Zap,
      title: "94% CSAT",
      metric: 94,
      suffix: "%",
      description: "customer satisfaction score",
      result: "24/7 AI support with human handoff achieved 94% satisfaction while reducing response times to under 30 seconds.",
      gradient: "from-orange-500/20 to-orange-600/20",
      border: "border-orange-500/30",
      iconColor: "text-orange-400",
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
              setVisibleCases(prev => [...prev, index]);
              
              // Start counter animation
              const targetValue = cases[index].metric;
              let currentValue = 0;
              const increment = targetValue / 50;
              const timer = setInterval(() => {
                currentValue += increment;
                if (currentValue >= targetValue) {
                  currentValue = targetValue;
                  clearInterval(timer);
                }
                setCounters(prev => {
                  const newCounters = [...prev];
                  newCounters[index] = Math.floor(currentValue);
                  return newCounters;
                });
              }, 40);
            }, index * 200);
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
    <section id="use-cases" className="relative py-20 overflow-hidden px-6 sm:px-12 md:px-16 lg:px-24" style={{ backgroundColor: '#0A0D10' }}>
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
            <TrendingUp className="h-4 w-4 text-cyan-400" />
            <span>Proven Results</span>
          </div>
          
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6">
            Automation That Pays
            <span className="block text-gradient-premium mt-2">for Itself</span>
          </h2>
          
          <p className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            From Business Agencies to SaaS Startups - Automation transformed their operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cases.map((useCase, index) => {
            const Icon = useCase.icon;
            
            return (
              <div
                key={index}
                className={`use-case-item group glass-morphism rounded-3xl p-8 border border-white/10 hover:border-cyan-500/30 hover:scale-105 transition-all duration-500 cursor-pointer animate-on-scroll ${
                  visibleCases.includes(index) ? 'animate-in' : ''
                }`}
                data-index={index}
                style={{ animationDelay: useCase.delay }}
              >
                <div className="flex items-center justify-between mb-8">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-r ${useCase.gradient.replace('/20', '/10')} border ${useCase.border} group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`h-8 w-8 ${useCase.iconColor}`} />
                  </div>
                  <div className="text-right">
                    <div className="text-4xl font-bold text-white font-display">
                      {counters[index]}{useCase.suffix}
                    </div>
                    <div className="text-sm text-slate-400 mt-1">{useCase.description}</div>
                  </div>
                </div>
                
                <h3 className="font-display text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                  {useCase.title}
                </h3>
                
                <p className="text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
                  {useCase.result}
                </p>

                {/* Hover Effect */}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default UseCases;