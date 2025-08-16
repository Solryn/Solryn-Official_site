import { CheckCircle, Zap, Clock, Home, Calendar, MessageSquare, Users, XCircle, ArrowRight } from "lucide-react";
import { useModal } from "../contexts/ModalContext";

export default function HighEndRealEstate() {
  const { openModal } = useModal();

  return (
    <div className="bg-[#0A0D10] text-white">
      {/* Hero */}
      <section className="px-6 sm:px-12 md:px-16 lg:px-24 py-20 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <div className="text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
            Sell Luxury, Close Faster — <br />
            <span className="text-gradient-premium">AI-Powered Real Estate Automation</span>
          </h1>
          <p className="text-lg text-slate-400 mb-8">
            From instant lead qualification to personalized follow-ups, we help high-end
            realtors close deals in days, not months.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button
              onClick={() => openModal("Book Strategy Call", "High-End Real Estate")}
              className="bg-gradient-to-r from-cyan-500 to-emerald-500 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:scale-105 transition"
            >
              Book Strategy Call
            </button>
            <button
              onClick={() => openModal("Get Free Automation Blueprint", "Blueprint - High-End Real Estate")}
              className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-xl font-semibold hover:bg-cyan-500/10 transition"
            >
              Get Free Automation Blueprint
            </button>
          </div>
        </div>
        {/* Right - image */}
        <div className="hidden lg:block">
          <img
            src="/images/luxury-realestate.jpg"
            alt="Luxury Real Estate"
            className="rounded-2xl shadow-xl border border-white/10"
          />
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="px-6 sm:px-12 md:px-16 lg:px-24 py-20 grid lg:grid-cols-2 gap-12">
        {/* Problems */}
        <div>
          <h2 className="text-3xl font-bold mb-6">The Luxury Market Moves Fast — Are You Keeping Up?</h2>
          <ul className="space-y-4 text-slate-300">
            <li className="flex items-center"><XCircle className="h-6 w-6 text-red-400 mr-2"/> Agents losing deals because follow-ups aren’t instant</li>
            <li className="flex items-center"><XCircle className="h-6 w-6 text-red-400 mr-2"/> Leads slipping away while juggling showings</li>
            <li className="flex items-center"><XCircle className="h-6 w-6 text-red-400 mr-2"/> Lack of personalized touch for ultra-wealthy clients</li>
            <li className="flex items-center"><XCircle className="h-6 w-6 text-red-400 mr-2"/> Too much admin work, not enough selling time</li>
          </ul>
        </div>
        {/* Solutions */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Our Solution</h2>
          <ul className="space-y-4 text-slate-300">
            <li className="flex items-center"><CheckCircle className="h-6 w-6 text-cyan-400 mr-2"/> Instant lead response with AI</li>
            <li className="flex items-center"><CheckCircle className="h-6 w-6 text-cyan-400 mr-2"/> Multi-channel smart follow-ups</li>
            <li className="flex items-center"><CheckCircle className="h-6 w-6 text-cyan-400 mr-2"/> CRM integrations for seamless tracking</li>
            <li className="flex items-center"><CheckCircle className="h-6 w-6 text-cyan-400 mr-2"/> Automated open house scheduling</li>
          </ul>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 sm:px-12 md:px-16 lg:px-24 py-20">
        <h2 className="text-3xl font-bold text-center mb-14">Automations Built for Million-Dollar Listings</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { icon: Zap, title: "Instant Lead Response AI", desc: "Answer inquiries in seconds — 24/7, with personalized property suggestions." },
            { icon: MessageSquare, title: "Smart Follow-Up Campaigns", desc: "Email, SMS, and WhatsApp follow-ups that feel personal, not automated." },
            { icon: Users, title: "CRM Integration", desc: "Seamlessly syncs with your CRM for instant updates on hot leads." },
            { icon: Calendar, title: "Virtual Open House Scheduling", desc: "Auto-book tours based on availability without back-and-forth emails." },
            { icon: Home, title: "Client Nurture Sequences", desc: "Stay top-of-mind with high-value prospects until they’re ready to buy." },
            { icon: Clock, title: "Fast-Track Closing Support", desc: "Automated document reminders and follow-up sequences to speed up deals." },
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

      {/* ROI */}
      <section className="px-6 sm:px-12 md:px-16 lg:px-24 py-20 bg-#0A0D10 text-center">
        <h2 className="text-3xl font-bold mb-6">Turn Leads into Closings — Faster than Ever</h2>
        <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto text-slate-300">
          <div>✅ Avg. response time cut from <span className="font-semibold text-white">24 hrs</span> to <span className="font-semibold text-white">under 2 mins</span></div>
          <div>✅ <span className="font-semibold text-white">3× more qualified leads</span> entering the sales funnel</div>
          <div>✅ Clients reporting up to <span className="font-semibold text-white">40% faster closings</span></div>
        </div>
      </section>

      {/* Pricing */}
      <section className="px-6 sm:px-12 md:px-16 lg:px-24 py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Pricing Snapshot</h2>
        <p className="text-slate-400 mb-8">Starting from $1,800 — custom-built for your sales process</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={() => openModal("Book Strategy Call", "High-End Real Estate")}
            className="bg-gradient-to-r from-cyan-500 to-emerald-500 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:scale-105 transition"
          >
            Book Strategy Call
          </button>
          <button
            onClick={() => openModal("Get Free Automation Blueprint", "Blueprint - High-End Real Estate")}
            className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-xl font-semibold hover:bg-cyan-500/10 transition"
          >
            Get Free Automation Blueprint
          </button>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 sm:px-12 md:px-16 lg:px-24 py-20 text-center bg-#0A0D10">
        <h2 className="text-3xl font-bold mb-4">Your next closing is just one automation away.</h2>
        <button
          onClick={() => openModal("Book Strategy Call", "High-End Real Estate")}
          className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-xl font-semibold hover:scale-105 transition flex items-center mx-auto shadow-lg"
        >
          Book My Free Strategy Call <ArrowRight className="ml-2 h-5 w-5" />
        </button>
      </section>
    </div>
  );
}