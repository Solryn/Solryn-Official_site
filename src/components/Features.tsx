import React from 'react';
import { Bot, MessageSquare, Calendar, Shield, Zap, Globe } from 'lucide-react';
import { useEffect, useState } from 'react';

const Features = () => {
  const [visibleFeatures, setVisibleFeatures] = useState<number[]>([]);

  const features = [
    {
      icon: Bot,
      title: "Conversational Chatbots",
      description: "Smart conversational AI that captures leads, books appointments, and handles support 24/7",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: MessageSquare,
      title: "Automated Email Campaigns",
      description: "Automated email sequences that nurture leads and convert prospects into customers",
      gradient: "from-emerald-500 to-emerald-600"
    },
    {
      icon: Calendar,
      title: "CRM & Form Integrations",
      description: "Connect with your existing tools — CRMs, calendars, payment systems, and more",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      icon: Zap,
      title: "Smart Workflows",
      description: "Custom automation that handles complex business processes without human intervention",
      gradient: "from-orange-500 to-orange-600"
    },
    {
      icon: Shield,
      title: "HIPAA-Ready",
      description: "Compliant automation for healthcare, with secure data handling and privacy protection",
      gradient: "from-cyan-500 to-cyan-600"
    },
    {
      icon: Globe,
      title: "Omnichannel Ready",
      description: "Deploy across website, WhatsApp, SMS, email, and social media platforms",
      gradient: "from-pink-500 to-pink-600"
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
      { threshold: 0.3 }
    );

    const elements = document.querySelectorAll('.feature-item');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="features" className="relative py-24 overflow-hidden" style={{ backgroundColor: '#0A0D10' }}>
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
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
            Custom AI Systems That Work While You Sleep
          </h2>
          <p className="text-xl text-slate-400 font-light max-w-3xl mx-auto">
            From chatbots to complex workflows — we build automation that handles the work you don't want to do.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className={`feature-item group bg-black/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all duration-500 hover:transform hover:scale-105 ${
                  visibleFeatures.includes(index)
                    ? 'animate-fade-in-up animate-zoom-in'
                    : 'opacity-0'
                }`}
                data-index={index}
              >
                <div
                  className={`bg-gradient-to-br ${feature.gradient} w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="h-7 w-7 text-white" />
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>

                <p className="text-slate-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;