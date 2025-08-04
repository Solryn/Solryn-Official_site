import React from 'react';
import { Check, ArrowRight, Star } from 'lucide-react';
import LeadModal from './LeadModal';
import { useEffect, useState } from 'react';

const Pricing = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [shouldPulse, setShouldPulse] = useState(false);

  const plans = [
    {
      name: "Starter",
      price: "$149",
      period: "/mo",
      description: "Basic chatbot + workflows",
      features: [
        "Custom chatbot development",
        "Basic workflow automation",
        "Website integration",
        "Email support",
        "Monthly optimization"
      ],
      cta: "Get Started With Automation",
      popular: false
    },
    {
      name: "Growth",
      price: "$399",
      period: "/mo",
      description: "Multi-channel + CRM",
      features: [
        "Everything in Starter",
        "Multi-channel deployment",
        "CRM integrations",
        "Advanced workflows",
        "Priority support"
      ],
      cta: "Get Started With Automation",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom Quote",
      period: "",
      description: "Full stack + white-label",
      features: [
        "Everything in Growth",
        "Dedicated account manager",
        "White-label solutions",
        "Custom integrations",
        "White-label options"
      ],
      cta: "Get Your Customized Automations",
      popular: false
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setShouldPulse(true), 3000);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('pricing');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const handleCTAClick = (title: string) => {
    setModalTitle(title);
    setIsModalOpen(true);
  };

  return (
    <>
      <section id="pricing" className="relative py-24 overflow-hidden" style={{ backgroundColor: '#0A0D10' }}>
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
            Flexible Plans for Every Stage
          </h2>
          <p className="text-xl text-slate-400 font-light max-w-3xl mx-auto">
            From simple chatbots to complex automation — choose the plan that fits your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-black/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 transition-all duration-500 hover:scale-105 ${
                plan.popular 
                  ? 'border-emerald-500/50 shadow-2xl shadow-emerald-500/10 hover:glow-emerald hover:scale-105' 
                  : 'hover:border-cyan-500/50 hover:glow-cyan hover:scale-105'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-2 shadow-lg">
                    <Star className="h-4 w-4" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center mb-2">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-slate-400 ml-1">{plan.period}</span>
                </div>
                <p className="text-slate-400">{plan.description}</p>
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <div className="bg-cyan-500/20 rounded-full p-1">
                      <Check className="h-4 w-4 text-cyan-400" />
                    </div>
                    <span className="text-slate-300">{feature}</span>
                  </div>
                ))}
              </div>

              <button 
                onClick={() => handleCTAClick(plan.cta)}
                className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${
                  plan.popular
                    ? `btn-primary ${shouldPulse && plan.name === 'Growth' ? 'animate-pulse' : ''}`
                    : 'btn-secondary'
                }`}
              >
                <span>{plan.cta}</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-slate-400 mb-6">All plans include:</p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-300">
            <div className="flex items-center space-x-2">
              <Check className="h-4 w-4 text-cyan-400" />
              <span>Custom development</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="h-4 w-4 text-cyan-400" />
              <span>Fast deployment</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="h-4 w-4 text-cyan-400" />
              <span>Integration support</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="h-4 w-4 text-cyan-400" />
              <span>Ongoing optimization</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="h-4 w-4 text-cyan-400" />
              <span>24/7 monitoring</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <LeadModal 
      isOpen={isModalOpen} 
      onClose={() => setIsModalOpen(false)} 
      title={modalTitle}
    />
  </>
  );
};

export default Pricing;