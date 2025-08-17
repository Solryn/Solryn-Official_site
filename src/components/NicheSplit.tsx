import { Heart, Building2, ArrowRight, Users, Briefcase } from 'lucide-react';
import React from 'react';
import { useEffect, useState } from 'react';

const NicheSplit = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);

  const niches = [
    {
      icon: Heart,
      title: "Healthcare & Clinics",
      description: "Automate Intake, Appointment Bookings, Reminders, and Automated Follow-Ups - Fully HIPAA ready.",
      gradient: "from-purple-500 to-pink-500",
      delay: "0s"
    },
    {
      icon: Building2,
      title: "Hotels & Hospitality",
      description: "Guest support, booking automation, concierge services, and 24/7 customer assistance without lifting a finger.",
      gradient: "from-cyan-500 to-blue-500",
      delay: "0.1s"
    },
    {
      icon: ArrowRight,
      title: "Agencies & Creators",
      description: "Lead qualification, client onboarding, content workflows, and automated outreach campaigns.",
      gradient: "from-emerald-500 to-green-500",
      delay: "0.2s"
    },
    {
      icon: Users,
      title: "SaaS & B2B",
      description: "Turn trials into conversations with Automated Onboarding, Support flows, and Churn-reduction Sequences - fully tailored to your product.",
      gradient: "from-orange-500 to-red-500",
      delay: "0.3s"
    },
    {
      icon: Briefcase,
      title: "Local Service Businesses",
      description: "Automate Bookings, Reschedules, and Reminders for Salons, Gyms, or Repair Services.",
      gradient: "from-green-500 to-cyan-500",
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
              setVisibleCards(prev => [...prev, index]);
            }, index * 150);
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = document.querySelectorAll('.niche-card');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="niches" className="relative py-20 overflow-hidden px-6 sm:px-12 md:px-16 lg:px-24" style={{ backgroundColor: '#0A0D10' }}>
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none z-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(34, 211, 238, 0.1) 1px, transparent 0)',
            backgroundSize: '60px 60px',
            animation: 'float 20s ease-in-out infinite',
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-black/20 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 text-sm text-slate-300 mb-6">
            <Building2 className="h-4 w-4 text-cyan-400" />
            <span>Industry Expertise</span>
          </div>
          
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6">
            Automation Built For
            <span className="block text-gradient-premium mt-2">Your Industry</span>
          </h2>
          
          <p className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            From Local Businesses to Global SaaS Brands, we Design AI Systems That fit your Team's Workflow - Not the Other Way Around.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {niches.slice(0, 5).map((niche, index) => {
            const Icon = niche.icon;
            
            return (
              <div
                key={index}
                className={`niche-card group glass-morphism rounded-3xl p-8 border border-white/10 hover:border-cyan-500/30 transition-all duration-500 hover:scale-105 animate-on-scroll ${
                  visibleCards.includes(index) ? 'animate-in' : ''
                }`}
                data-index={index}
                style={{ animationDelay: niche.delay }}
              >
                <div className={`bg-gradient-to-r ${niche.gradient} w-16 h-16 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-2xl`}>
                  <Icon className="h-8 w-8 text-white" />
                </div>

                <h3 className="font-display text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                  {niche.title}
                </h3>

                <p className="text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
                  {niche.description}
                </p>

                {/* Hover Effect */}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="glass-morphism rounded-2xl p-6 border border-white/10 inline-flex items-center space-x-4 hover:border-cyan-500/30 transition-all duration-300">
            <div className="text-left">
              <div className="text-white font-semibold">Don't see your industry?</div>
              <div className="text-slate-400 text-sm">We customize automation for any business type</div>
            </div>
            <ArrowRight className="h-6 w-6 text-cyan-400" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NicheSplit;