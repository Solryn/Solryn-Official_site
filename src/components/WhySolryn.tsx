import { Clock, CheckCircle } from 'lucide-react';
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
            setVisibleItems(prev => [...prev, index]);
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
    <section id="why-solryn" className="relative py-24 overflow-hidden" style={{ backgroundColor: '#0A0D10' }}>
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
            Why Teams Choose Solryn
          </h2>
          <p className="text-xl text-slate-400 font-light max-w-4xl mx-auto leading-relaxed">
            We're not just another automation agency. We're specialists who understand that great automation feels invisible — it just works.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`benefit-item group bg-black/10 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-white/10 hover:border-cyan-500/50 transition-all duration-500 hover:scale-105 ${
                visibleItems.includes(index) ? 'animate-in slide-in-from-left duration-700' : 'opacity-0'
              }`}
              data-index={index}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-br from-cyan-500 to-emerald-500 w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-1 shadow-lg">
                  <CheckCircle className="h-5 w-5 text-white" />
                </div>
                <p className="text-slate-300 leading-relaxed text-sm md:text-base">{benefit}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-3 bg-black/10 backdrop-blur-sm rounded-2xl px-4 sm:px-8 py-3 sm:py-4 border border-white/10">
            <Clock className="h-6 w-6 text-cyan-400" />
            <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-3 text-center sm:text-left">
              <span className="text-base sm:text-lg font-semibold text-white">24/7 Availability</span>
              <span className="text-slate-400 hidden sm:inline">•</span>
              <span className="text-base sm:text-lg font-semibold text-white">Instant Response</span>
              <span className="text-slate-400 hidden sm:inline">•</span>
              <span className="text-base sm:text-lg font-semibold text-white">Never Miss a Lead</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySolryn;