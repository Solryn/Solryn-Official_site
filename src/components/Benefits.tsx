import { Clock, PhoneOff, Zap, CheckCircle } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: Clock,
      title: "24/7 AI Support",
      description: "Never miss a patient call or guest inquiry, even outside business hours",
      color: "blue"
    },
    {
      icon: PhoneOff,
      title: "Reduce Phone Overload",
      description: "Free up your staff from repetitive calls and let them focus on what matters",
      color: "purple"
    },
    {
      icon: Zap,
      title: "Faster Response Times",
      description: "Instant replies to common questions improve satisfaction and reduce wait times",
      color: "green"
    },
    {
      icon: CheckCircle,
      title: "Streamline Repetitive Tasks",
      description: "Automate appointment booking, FAQs, and follow-ups with human-like precision",
      color: "orange"
    }
  ];


  return (
    <section id="benefits" className="relative py-24 overflow-hidden" style={{ backgroundColor: '#0A0D10' }}>
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
            Why Choose AI Automation?
          </h2>
          <p className="text-xl text-slate-400 font-light max-w-3xl mx-auto">
            Transform your customer service with intelligent automation that works around the clock.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            
            return (
              <div
                key={index}
                className="group glass-morphism rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:scale-105 border border-white/10 hover:border-cyan-500/50"
              >
                <div className="bg-gradient-to-br from-cyan-500 to-emerald-500 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">
                  {benefit.title}
                </h3>
                
                <p className="text-slate-300 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;