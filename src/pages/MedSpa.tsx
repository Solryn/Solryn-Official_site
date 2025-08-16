import { CheckCircle, XCircle, Sparkles, ArrowRight, Users, Calendar, Zap, Star } from "lucide-react";
import { useModal } from "../contexts/ModalContext";

export default function MedSpa() {
  const { openModal } = useModal();

  return (
    <div className="bg-[#0A0D10] text-white">
      {/* Hero */}
      <section className="px-6 sm:px-12 md:px-16 lg:px-24 py-20 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <div className="text-center lg:text-left">
          <div className="inline-flex items-center bg-black/20 border border-white/10 rounded-full px-4 py-2 mb-6 text-slate-300 text-sm">
            <Sparkles className="h-4 w-4 text-cyan-400 mr-2" /> AI Automation for Med Spas
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
            ✨ Book More Clients. Reduce No-Shows. <br />
            <span className="text-gradient-premium">Elevate Your Med Spa Experience.</span>
          </h1>
          <p className="text-lg text-slate-400 mb-8">
            Solryn delivers next-generation AI automation for luxury Med Spas —
            increasing bookings, maximizing repeat visits, and giving your clients
            a seamless VIP journey. All in 72 hours or less.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button
              onClick={() => openModal("Strategy Call – Med Spa")}
              className="bg-gradient-to-r from-cyan-500 to-emerald-500 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:scale-105 transition"
            >
              Book My Free Strategy Call
            </button>
            <button
              onClick={() => openModal("Packages – Med Spa")}
              className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-xl font-semibold hover:bg-cyan-500/10 transition"
            >
              View Automation Packages
            </button>
          </div>
        </div>
        {/* Right - image */}
        <div className="hidden lg:block">
          <img
            src="/images/medspa-luxury.jpg"
            alt="Luxury Med Spa"
            className="rounded-2xl shadow-xl border border-white/10"
          />
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="px-6 sm:px-12 md:px-16 lg:px-24 py-20 grid lg:grid-cols-2 gap-12">
        {/* Problems */}
        <div>
          <h2 className="text-3xl font-bold mb-6">The Challenge</h2>
          <ul className="space-y-4 text-slate-300">
            <li className="flex items-center"><XCircle className="h-6 w-6 text-red-400 mr-2"/> Missed calls & no-shows</li>
            <li className="flex items-center"><XCircle className="h-6 w-6 text-red-400 mr-2"/> Lost leads from slow follow-ups</li>
            <li className="flex items-center"><XCircle className="h-6 w-6 text-red-400 mr-2"/> Wasted admin hours</li>
          </ul>
        </div>
        {/* Solutions */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Our Solution</h2>
          <ul className="space-y-4 text-slate-300">
            <li className="flex items-center"><CheckCircle className="h-6 w-6 text-cyan-400 mr-2"/> Instant lead follow-up (SMS + Email)</li>
            <li className="flex items-center"><CheckCircle className="h-6 w-6 text-cyan-400 mr-2"/> Automated reminders + confirmations</li>
            <li className="flex items-center"><CheckCircle className="h-6 w-6 text-cyan-400 mr-2"/> Post-visit upsell & loyalty flows</li>
          </ul>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 sm:px-12 md:px-16 lg:px-24 py-20 bg-#0A0D10">
        <h2 className="text-3xl font-bold text-center mb-14">What We Automate</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            { icon: Users, title: "VIP Lead Nurturing", desc: "Turn inquiries into appointments in minutes." },
            { icon: Calendar, title: "No-Show Slayer", desc: "Boost show-up rates by 30–50% with reminders." },
            { icon: Star, title: "Upsell & Retain", desc: "Timely offers turn first-time visitors into loyal clients." },
            { icon: Zap, title: "CRM Sync", desc: "Seamlessly integrates with booking software." },
          ].map((f, i) => {
            const Icon = f.icon;
            return (
              <div key={i} className="glass-morphism p-6 rounded-2xl border border-white/10 hover:border-cyan-500/30 transition">
                <Icon className="h-8 w-8 text-cyan-400 mb-4" />
                <h3 className="font-semibold mb-2">{f.title}</h3>
                <p className="text-slate-400 text-sm">{f.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Results */}
      <section className="px-6 sm:px-12 md:px-16 lg:px-24 py-20 bg-#0A0D10 text-center">
        <h2 className="text-3xl font-bold mb-6">Real Results</h2>
        <blockquote className="text-xl italic text-slate-300 mb-6">
          “We went from chasing leads to watching our calendar fill itself.
          Bookings are up 40% in two months — without hiring more staff.”
          <br/> <span className="text-slate-400">– Alicia M., Med Spa Owner</span>
        </blockquote>
        <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto text-slate-300">
          <div>✅ +30–50% more confirmed bookings</div>
          <div>✅ +20% more repeat visits</div>
          <div>✅ Hours saved every week</div>
        </div>
      </section>

      {/* Pricing Snapshot */}
      <section className="px-6 sm:px-12 md:px-16 lg:px-24 py-20 text-center bg-#0A0D10">
        <h2 className="text-3xl font-bold mb-4">Pricing Snapshot</h2>
        <p className="text-slate-400 mb-8">Delivered in 72 hours</p>
        <div className="grid sm:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            { plan: "Starter Automation", price: "$1,000 + $500/mo", features: "Lead Nurture + Reminders" },
            { plan: "Advanced Automation", price: "$1,800 + $800/mo", features: "Multi-channel + Upsell Campaigns" },
            { plan: "Custom VIP Flows", price: "$2,000 + $1,000/mo", features: "End-to-End Client Journey" },
          ].map((p, i) => (
            <div key={i} className="glass-morphism p-6 rounded-2xl border border-white/10 hover:border-cyan-500/30 transition">
              <h3 className="text-xl font-semibold mb-2">{p.plan}</h3>
              <p className="text-slate-400">{p.price}</p>
              <p className="text-sm mt-2">{p.features}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 sm:px-12 md:px-16 lg:px-24 py-20 text-center bg-#0A0D10">
        <h2 className="text-3xl font-bold mb-4">Your next client is just one message away.</h2>
        <p className="text-slate-400 mb-8">Let’s automate your Med Spa for more bookings, less stress, and a flawless client experience.</p>
        <button
          onClick={() => openModal("Strategy Call – Med Spa")}
          className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-xl font-semibold hover:scale-105 transition flex items-center mx-auto shadow-lg"
        >
          Book My Free Strategy Call <ArrowRight className="ml-2 h-5 w-5" />
        </button>
      </section>
    </div>
  );
}