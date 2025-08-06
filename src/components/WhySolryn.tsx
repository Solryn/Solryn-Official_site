import { Clock, CheckCircle, Zap } from 'lucide-react';
import { useEffect, useState } from 'react';

const WhySolryn = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  const benefits = [
    "Launch Fast - Built Fast, Deployed faster - most Systems live in under a 72 Hours",
    "Connect Instantly - Seamlessly Connects with your tools - CRMs, Calenders, Platforms", 
    "No-Code Tech - Powered by OpenAi, Voiceflow, Make, Zapier, Bland, and More - No Code Needed",
    "Custom Built - Custom-Fit Automation Sytems - No templets, no fluff",
    "Human Feel - Feels Human, Sounds Natural - Automation That Reflect your brand voice"
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setTimeout(() => {
              setVisibleItems(prev => [...prev, index]);
            }, index * 150);
          }
        });
      },
      { threshold: 0.3 }
    );

    const elements = document.querySelectorAll('.benefit-item');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="why-solryn" className="relative py-20 overflow-hidden px-6 sm:px-12 md:px-16 lg:px-24" style={{ backgroundColor: '#0A0D10' }}>
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
            <Zap className="h-4 w-4 text-cyan-400" />
            <span>Why Choose Us</span>
          </div>
          
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6">
            Why Teams Choose
            <span className="block text-gradient-premium mt-2">Solryn</span>
          </h2>
          
          <p className="text-lg sm:text-xl text-slate-400 max-w-4xl mx-auto leading-relaxed">
            We're not just another automation agency. We're specialists who understand that great automation feels invisible — it just works.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`benefit-item group glass-morphism rounded-2xl p-6 border border-white/10 hover:border-cyan-500/30 transition-all duration-500 hover:scale-105 animate-on-scroll ${
                visibleItems.includes(index) ? 'animate-in' : ''
              }`}
              data-index={index}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-br from-cyan-500 to-emerald-500 w-10 h-10 rounded-2xl flex items-center justify-center flex-shrink-0 mt-1 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle className="h-5 w-5 text-white" />
                </div>
                <p className="text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors duration-300">{benefit}</p>
              </div>

              {/* Hover Effect */}
            </div>
          ))}
        </div>

        {/* Bottom Feature Highlight */}
        <div className="text-center">
          <div className="glass-morphism rounded-3xl p-8 border border-white/10 max-w-4xl mx-auto hover:border-cyan-500/30 transition-all duration-500">
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-12">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 rounded-3xl flex items-center justify-center">
                  <Clock className="h-8 w-8 text-cyan-400" />
                </div>
                <div className="text-left">
                  <div className="font-display text-2xl font-bold text-white">24/7</div>
                  <div className="text-slate-400">Always Available</div>
                </div>
              </div>

              <div className="w-px h-16 bg-white/10 hidden sm:block"></div>

              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500/20 to-purple-500/20 rounded-3xl flex items-center justify-center">
                  <Zap className="h-8 w-8 text-emerald-400" />
                </div>
                <div className="text-left">
                  <div className="font-display text-2xl font-bold text-white">Instant</div>
                  <div className="text-slate-400">Response Time</div>
                </div>
              </div>

              <div className="w-px h-16 bg-white/10 hidden sm:block"></div>

              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl flex items-center justify-center">
                  <CheckCircle className="h-8 w-8 text-purple-400" />
                </div>
                <div className="text-left">
                  <div className="font-display text-2xl font-bold text-white">Never</div>
                  <div className="text-slate-400">Miss a Lead</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySolryn;