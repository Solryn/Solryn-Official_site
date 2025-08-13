import { Repeat, FileText, Mail, Phone, Link, Calendar, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';

const ComingSoon = () => {
  const [visibleFeatures, setVisibleFeatures] = useState<number[]>([]);

  const features = [
    {
      icon: Repeat,
      title: "AI-powered follow-ups",
      description: "Re-engage Cold Leads Automatically",
      gradient: "from-pink-500 to-purple-600",
      delay: "0s"
    },
    {
      icon: FileText,
      title: "Smart intake forms",
      description: "Auto-fill Data, Validate Entries, and Routing Intelligently",
      gradient: "from-blue-500 to-cyan-600",
      delay: "0.1s"
    },
    {
      icon: Mail,
      title: "Drip Marketing Flows",
      description: "Time-Based Reminders, Promos, and Nurture Campaigns",
      gradient: "from-orange-500 to-red-600",
      delay: "0.2s"
    },
    {
      icon: Phone,
      title: "Voice AI support",
      description: "Automate Calls, Bookings, and Phone Support with Voice Bots",
      gradient: "from-cyan-500 to-green-600",
      delay: "0.3s"
    },
    {
      icon: Link,
      title: "Deeper CRM Sync",
      description: "Connect to HubSpot, Notion, and Beyond",
      gradient: "from-slate-500 to-gray-600",
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
              setVisibleFeatures(prev => [...prev, index]);
            }, index * 150);
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = document.querySelectorAll('.coming-soon-item');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);


  return (
    <section className="relative py-20 overflow-hidden px-6 sm:px-12 md:px-16 lg:px-24" style={{ backgroundColor: '#0A0D10' }}>
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
            <Sparkles className="h-4 w-4 text-cyan-400" />
            <span>Coming Soon</span>
          </div>
          
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6">
            🔮 What's Next at Solryn
            <span className="block text-gradient-premium mt-2">Coming Soon</span>
          </h2>
          
          <p className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto mb-8 leading-relaxed">
            When you're ready to scale, Solryn evolves with you.
          </p>
          
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Solryn is evolving into more than just Chatbots. Our Next-gen Virtual Assistant Suite includes:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            
            return (
              <div
                key={index}
                className={`coming-soon-item group glass-morphism rounded-3xl p-8 border border-white/10 hover:border-cyan-500/30 transition-all duration-500 hover:scale-105 animate-on-scroll ${
                  visibleFeatures.includes(index) ? 'animate-in' : ''
                }`}
                data-index={index}
                style={{ animationDelay: feature.delay }}
              >
                <div className="bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 w-16 h-16 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="h-8 w-8 text-cyan-400" />
                </div>
                
                <h3 className="font-display text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                  {feature.description}
                </p>

                {/* Coming Soon Badge */}
                <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs px-3 py-1 rounded-full font-semibold">
                  Soon
                </div>

                {/* Hover Effect */}
              </div>
            );
          })}
        </div>

        {/* Early Access CTA */}
        <div className="text-center">
          <div className="glass-morphism rounded-3xl p-12 border border-white/10 max-w-3xl mx-auto hover:border-cyan-500/30 transition-all duration-500">
            <div className="w-20 h-20 bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 rounded-3xl flex items-center justify-center mx-auto mb-6">
              <Calendar className="h-10 w-10 text-cyan-400" />
            </div>
            
            <h3 className="font-display text-3xl font-bold text-white mb-4">Join Early Access</h3>
            
            <p className="text-slate-400 mb-8 text-lg leading-relaxed max-w-2xl mx-auto">
              Get notified when we roll out advanced automation features. Be among the first to access next-generation AI tools.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 glass-morphism border border-white/10 rounded-xl px-4 py-3 text-black placeholder-slate-400 focus:outline-none focus:border-cyan-500/50 transition-colors"
              />
              <form action="YOUR_GOOGLE_SCRIPT_URL" method="POST">
                <button 
                  className="w-full bg-gradient-to-r from-cyan-500 to-emerald-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-cyan-400 hover:to-emerald-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 mt-4">
                  Join Waitlist
                </button>
              </form>
            </div>

            <div className="flex items-center justify-center space-x-6 mt-8 text-sm text-slate-400">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                <span>No spam</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <span>Early access</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span>Exclusive updates</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;