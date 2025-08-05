import { Heart, Building2, ArrowRight } from 'lucide-react';

const NicheSplit = () => {
  return (
    <section id="niches" className="relative py-24 overflow-hidden" style={{ backgroundColor: '#0A0D10' }}>
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

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
            Automation Built For Yor Industry
          </h2>
          <p className="text-xl text-slate-400 font-light max-w-3xl mx-auto">
           From Local Businesses to Global SaaS Brands, we Design AI Systems That fit your Team's Workflow - Not the Other Way Around.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Clinic Card */}
          <div className="group bg-black/10 backdrop-blur-sm rounded-2xl p-6 transition-all duration-300 hover:scale-105 border border-white/10 hover:border-cyan-500/50">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
              <Heart className="h-8 w-8 text-white" />
            </div>

            <h3 className="text-xl font-bold text-white mb-4">Healthcare & Clinics</h3>

            <p className="text-slate-300 leading-relaxed">
              Automate Intake, Appointment Bookings, Reminders, and Automated Follow-Ups - Fully HIPAA ready.
            </p>
          </div>

          {/* Hospitality Card */}
          <div className="group bg-black/10 backdrop-blur-sm rounded-2xl p-6 transition-all duration-300 hover:scale-105 border border-white/10 hover:border-cyan-500/50">
            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
              <Building2 className="h-8 w-8 text-white" />
            </div>

            <h3 className="text-xl font-bold text-white mb-4">Hotels & Hospitality</h3>

            <p className="text-slate-300 leading-relaxed">
              Guest support, booking automation, concierge services, and 24/7 customer assistance without lifting a finger.
            </p>
          </div>

          {/* Agencies Card */}
          <div className="group bg-black/10 backdrop-blur-sm rounded-2xl p-6 transition-all duration-300 hover:scale-105 border border-white/10 hover:border-cyan-500/50">
            <div className="bg-gradient-to-r from-emerald-500 to-green-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
              <ArrowRight className="h-8 w-8 text-white" />
            </div>

            <h3 className="text-xl font-bold text-white mb-4">Agencies & Creators</h3>

            <p className="text-slate-300 leading-relaxed">
              Lead qualification, client onboarding, content workflows, and automated outreach campaigns.
            </p>
          </div>

          {/* SaaS Card */}
          <div className="group bg-black/10 backdrop-blur-sm rounded-2xl p-6 transition-all duration-300 hover:scale-105 border border-white/10 hover:border-cyan-500/50">
            <div className="bg-gradient-to-r from-orange-500 to-red-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
              <Building2 className="h-8 w-8 text-white" />
            </div>

            <h3 className="text-xl font-bold text-white mb-4">SaaS & B2B</h3>

            <p className="text-slate-300 leading-relaxed">
              Turn trials into conversations with Automated Onboarding, Support flows, and Churn-reduction Sequences - fully tailored to your product.
            </p>
          </div>

          {/* Lacal Service Businesses Card */}
          <div className="group bg-black/10 backdrop-blur-sm rounded-2xl p-6 transition-all duration-300 hover:scale-105 border border-white/10 hover:border-cyan-500/50">
            <div className="bg-gradient-to-r from-green-500 to-cyan-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
              <Building2 className="h-8 w-8 text-white" />
            </div>

            <h3 className="text-xl font-bold text-white mb-4">Local Serivice Businesses</h3>

            <p className="text-slate-300 leading-relaxed">
              Automate Bookings, Reschedules, and Reminders for Salons, Gyms, or Repair Services.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NicheSplit;