import { Repeat, FileText, Mail, Phone, Link, Calendar } from 'lucide-react';

const ComingSoon = () => {
  const features = [
    {
      icon: Repeat,
      title: "AI-powered follow-ups",
      description: "Re-engage Cold Leads Automatically",
      gradient: "from-pink-500 to-purple-600"
    },
    {
      icon: FileText,
      title: "Smart intake forms",
      description: "Auto-fill Data, Validate Entries, and Routing Intelligently",
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      icon: Mail,
      title: "Drip Marketing Flows ",
      description: "Time-Based Reminders, Promos, and Nurture Campaigns",
      gradient: "from-orange-500 to-red-600"
    },
    {
      icon: Phone,
      title: "Voice AI support",
      description: "Automate Calls, Bookings, and Phone Support with Voice Bots",
      gradient: "from-cyan-500 to-green-600"
    },
    {
      icon: Link,
      title: "Deeper CRM Sync",
      description: "Connect to HubSpot, Notion, and Beyond",
      gradient: "from-black-500 to-grey-600"
    }
  ];

  return (
    <section className="relative py-24 overflow-hidden" style={{ backgroundColor: '#0A0D10' }}>
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
            🔮 What Next at Solryn — Coming Soon
          </h2>
          <p className="text-xl text-slate-400 font-light max-w-3xl mx-auto mb-8">
            When you're ready to scale, Solryn evolves with you.
          </p>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Solryn is evolving into more than just Chatbots. Our Next-gen Virtual Assistant Suite includes:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            
            return (
              <div
                key={index}
                className="group bg-black/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all duration-500 hover:scale-105"
              >
                <div className="bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="h-7 w-7 text-cyan-400" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-slate-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <div className="bg-black/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 max-w-2xl mx-auto">
            <Calendar className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">Join Early Access</h3>
            <p className="text-slate-400 mb-6">
              Get notified when we roll out advanced automation features.
            </p>
            <button className="btn-primary">
              Join Early Access List
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;
