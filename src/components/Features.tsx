import { Bot, MessageSquare, Calendar, Shield, Zap, Globe } from 'lucide-react';
import { useEffect, useState } from 'react';

const Features = () => {
  const [visibleFeatures, setVisibleFeatures] = useState<number[]>([]);

  const features = [
    {
      icon: Bot,
      title: "Conversational Chatbots",
      description: "Smart conversational AI that captures leads, books appointments, and handles support 24/7",
      gradient: "from-blue-500 to-blue-600",
      delay: "0s"
    },
    {
      icon: MessageSquare,
      title: "Automated Email Campaigns",
      description: "Automated email sequences that nurture leads and convert prospects into customers",
      gradient: "from-emerald-500 to-emerald-600",
      delay: "0.1s"
    },
    {
      icon: Calendar,
      title: "CRM & Form Integrations",
      description: "Connect with your existing tools — CRMs, calendars, payment systems, and more",
      gradient: "from-purple-500 to-purple-600",
      delay: "0.2s"
    },
    {
      icon: Zap,
      title: "Smart Workflows",
      description: "Custom automation that handles complex business processes without human intervention",
      gradient: "from-orange-500 to-orange-600",
      delay: "0.3s"
    },
    {
      icon: Shield,
      title: "HIPAA-Ready",
      description: "Compliant automation for healthcare, with secure data handling and privacy protection",
      gradient: "from-cyan-500 to-cyan-600",
      delay: "0.4s"
    },
    {
      icon: Globe,
      title: "Omnichannel Ready",
      description: "Deploy across website, WhatsApp, SMS, email, and social media platforms",
      gradient: "from-pink-500 to-pink-600",
      delay: "0.5s"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setTimeout(() => {
              setVisibleFeatures((prev) => [...new Set([...prev, index])]);
            }, index * 150);
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = document.querySelectorAll('.feature-item');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="features" className="relative py-20 overflow-hidden px-6 sm:px-12 md:px-16 lg:px-24" style={{ backgroundColor: '#0A0D10' }}>
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none z-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, rgba(34, 211, 238, 0.1) 1px, transparent 0)",
            backgroundSize: '60px 60px',
            animation: 'float 20s ease-in-out infinite'
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-black/20 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 text-sm text-slate-300 mb-6">
            <Zap className="h-4 w-4 text-cyan-400" />
            <span>Powerful Features</span>
          </div>
          
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6">
            Custom AI Systems That Work
            <span className="block text-gradient-premium mt-2">While You Sleep</span>
          </h2>
          
          <p className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            From chatbots to complex workflows — we build automation that handles the work you don't want to do.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className={`feature-item group glass-morphism rounded-2xl p-8 border border-white/10 hover:border-cyan-500/30 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl animate-on-scroll ${
                  visibleFeatures.includes(index) ? 'animate-in' : ''
                }`}
                data-index={index}
                style={{ animationDelay: feature.delay }}
              >
                <div
                  className={`bg-gradient-to-br ${feature.gradient} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  <Icon className="h-8 w-8 text-white" />
                </div>

                <h3 className="font-display text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                  {feature.title}
                </h3>

                <p className="text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
                  {feature.description}
                </p>

                {/* Hover Effect Border */}
              </div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
};

export default Features;