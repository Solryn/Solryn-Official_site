import { useModal } from "../contexts/ModalContext";
import { Sparkles, CheckCircle, XCircle, ArrowRight, ClipboardList, Calendar, HeartPulse, Lock } from "lucide-react";

export default function SpecialityClinics() {
  const { openModal } = useModal();

  return (
    <div className="bg-[#0A0D10] text-white">
      {/* Hero */}
      <section className="px-6 sm:px-12 md:px-16 lg:px-24 py-20 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <div className="text-center lg:text-left">
          <div className="inline-flex items-center bg-black/20 border border-white/10 rounded-full px-4 py-2 mb-6 text-slate-300 text-sm">
            <Sparkles className="h-4 w-4 text-cyan-400 mr-2" /> AI Automation for Specialty Clinics
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
            🏥 Automate Patient Care <br />
            <span className="text-gradient-premium">Without Losing the Human Touch.</span>
          </h1>
          <p className="text-lg text-slate-400 mb-8">
            Solryn helps specialty clinics streamline patient scheduling, follow-ups,
            and communication — while keeping care personal and compliant.
            Delivered in 72 hours or less.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button
              onClick={() => openModal("Strategy Call – Specialty Clinic")}
              className="bg-gradient-to-r from-cyan-500 to-emerald-500 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:scale-105 transition"
            >
              Get My Free Automation Blueprint
            </button>
            <button
              onClick={() => openModal("Solutions – Specialty Clinic")}
              className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-xl font-semibold hover:bg-cyan-500/10 transition"
            >
              View Clinic Solutions
            </button>
          </div>
        </div>
        {/* Right - image */}
        <div className="hidden lg:block">
          <img
            src="/images/clinic-modern.jpg"
            alt="Specialty Clinic"
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
            <li className="flex items-center"><XCircle className="h-6 w-6 text-red-400 mr-2"/> Staff drowning in manual calls & paperwork</li>
            <li className="flex items-center"><XCircle className="h-6 w-6 text-red-400 mr-2"/> Missed appointments hurting revenue</li>
            <li className="flex items-center"><XCircle className="h-6 w-6 text-red-400 mr-2"/> Bottlenecks in patient intake</li>
          </ul>
        </div>
        {/* Solutions */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Our Solution</h2>
          <ul className="space-y-4 text-slate-300">
            <li className="flex items-center"><CheckCircle className="h-6 w-6 text-cyan-400 mr-2"/> AI-powered intake forms</li>
            <li className="flex items-center"><CheckCircle className="h-6 w-6 text-cyan-400 mr-2"/> Smart reminders to reduce no-shows</li>
            <li className="flex items-center"><CheckCircle className="h-6 w-6 text-cyan-400 mr-2"/> Automated post-care follow-ups</li>
          </ul>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 sm:px-12 md:px-16 lg:px-24 py-20 bg-#0A0D10">
        <h2 className="text-3xl font-bold text-center mb-14">What We Automate</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            { icon: ClipboardList, title: "AI Intake Forms", desc: "Capture complete patient info before they arrive." },
            { icon: Calendar, title: "Appointment Assurance", desc: "Reduce no-shows by up to 50% with reminders." },
            { icon: HeartPulse, title: "Post-Treatment Care", desc: "Follow-up messages improve adherence & recovery." },
            { icon: Lock, title: "Secure Integrations", desc: "Works with EHR & practice management software." },
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
          “Our front desk was drowning in calls — now patients schedule and confirm automatically.
          No-shows dropped by 42% in six weeks.”
          <br/> <span className="text-slate-400">– Dr. James R., Orthopedic Clinic</span>
        </blockquote>
        <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto text-slate-300">
          <div>✅ -40% fewer no-shows</div>
          <div>✅ Faster intake & shorter wait times</div>
          <div>✅ More time for patient care</div>
        </div>
      </section>

      {/* Pricing Snapshot */}
      <section className="px-6 sm:px-12 md:px-16 lg:px-24 py-20 text-center bg-#0A0D10">
        <h2 className="text-3xl font-bold mb-4">Pricing Snapshot</h2>
        <p className="text-slate-400 mb-8">All solutions delivered within 72 hours</p>
        <div className="grid sm:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            { plan: "Starter Automation", price: "$1,000 + $500/mo", features: "Intake + Reminders" },
            { plan: "Advanced Automation", price: "$1,800 + $800/mo", features: "Multi-channel + Care Flows" },
            { plan: "Custom Clinic Systems", price: "$3,000 + $1,500/mo", features: "EHR Integration + Full Automation" },
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
        <h2 className="text-3xl font-bold mb-4">Free up your staff. Improve patient outcomes. Keep your schedule full.</h2>
        <button
          onClick={() => openModal("Strategy Call – Specialty Clinic")}
          className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-xl font-semibold hover:scale-105 transition flex items-center mx-auto shadow-lg"
        >
          Book My Free Strategy Call <ArrowRight className="ml-2 h-5 w-5" />
        </button>
      </section>
    </div>
  );
}