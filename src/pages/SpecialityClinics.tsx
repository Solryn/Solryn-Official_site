import { useModal } from "../contexts/ModalContext";
import {
  Sparkles, CheckCircle, XCircle, ArrowRight, ClipboardList,
  Calendar, HeartPulse, Lock, AlertCircle, BarChart3, CreditCard, Rocket
} from "lucide-react";

export default function SpecialityClinics() {
  const { openModal } = useModal();

  return (
    <div className="bg-[#0A0D10] text-white">
      {/* Hero */}
      <section className="relative w-full h-[95vh] flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover hidden md:block">
          <source src="/PagesAnimation.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 w-full h-full bg-cover bg-center md:hidden" style={{ backgroundImage: "url('/clinic-fallback.jpg')" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80"></div>

        {/* Content */}
        <div className="relative z-10 text-center max-w-4xl px-6">
          <div className="inline-flex items-center bg-black/30 border border-white/10 rounded-full px-4 py-2 mb-6 text-slate-300 text-sm">
            <Sparkles className="h-4 w-4 text-cyan-400 mr-2" /> AI Automation for Specialty Clinics
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
            Automate Patient Care <br />
            <span className="text-gradient-premium">Without Losing the Human Touch</span>
          </h1>
          <p className="text-lg text-slate-300 mb-8">
            Solryn helps specialty clinics streamline scheduling, reminders, and follow-ups — ensuring patients feel cared for while your staff reclaims hours every week. Delivered in <span className="text-white font-semibold">72 hours or less</span>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => openModal("Book Strategy Call", "Specialty Clinics")}
              className="bg-gradient-to-r from-cyan-500 to-emerald-500 text-white px-8 py-4 rounded-xl 
                         font-semibold shadow-lg hover:shadow-cyan-500/25 transition transition-all duration-500 hover:scale-105"
            >
              Book My Free Strategy Call
            </button>
            <button
              onClick={() => openModal("Get Free Automation Blueprint", "Blueprint - Specialty Clinics")}
              className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-xl 
                         font-semibold hover:bg-cyan-500/10 transition-all duration-500 hover:scale-105"
            >
              Get My Free Automation Blueprint
            </button>
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="px-6 sm:px-12 md:px-16 lg:px-24 py-24 bg-black">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-black/30 border border-white/10 rounded-full 
                          px-4 py-2 mb-6 text-slate-300 text-sm">
            <AlertCircle className="h-4 w-4 text-red-400 mr-2" /> Why Traditional Clinic Workflows Fail
          </div>
          <h2 className="text-3xl font-bold mb-4">Overbooked, Understaffed — Patients Feel It</h2>
          <p className="text-slate-400 max-w-3xl mx-auto">
            Every unanswered call, every missed reminder, every admin bottleneck means patients wait longer and staff burn out faster. Clinics lose revenue — patients lose trust.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Challenge */}
          <div className="p-8 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl 
                          shadow-lg hover:border-cyan-500/40 hover:shadow-cyan-500/20 transition-all duration-500 hover:scale-105">
            <h3 className="text-xl font-semibold mb-4 text-white">The Challenge</h3>
            <ul className="space-y-4 text-slate-300">
              <li className="flex items-start"><XCircle className="h-6 w-6 text-red-400 mr-3 mt-1"/> Staff buried in phone calls & manual paperwork</li>
              <li className="flex items-start"><XCircle className="h-6 w-6 text-red-400 mr-3 mt-1"/> Missed appointments cut deep into revenue</li>
              <li className="flex items-start"><XCircle className="h-6 w-6 text-red-400 mr-3 mt-1"/> Bottlenecks frustrate patients before they’re even seen</li>
              <li className="flex items-start"><XCircle className="h-6 w-6 text-red-400 mr-3 mt-1"/> Staff spend more time on admin than actual patient care</li>
            </ul>
          </div>
          {/* Solution */}
          <div className="p-8 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl 
                          shadow-lg hover:border-cyan-500/40 hover:shadow-cyan-500/20 transition-all duration-500 hover:scale-105">
            <h3 className="text-xl font-semibold mb-4 text-white">Our Solution</h3>
            <ul className="space-y-4 text-slate-300">
              <li className="flex items-start"><CheckCircle className="h-6 w-6 text-cyan-400 mr-3 mt-1"/> AI-powered intake & scheduling that saves hours daily</li>
              <li className="flex items-start"><CheckCircle className="h-6 w-6 text-cyan-400 mr-3 mt-1"/> Smart reminders that cut no-shows by up to 50%</li>
              <li className="flex items-start"><CheckCircle className="h-6 w-6 text-cyan-400 mr-3 mt-1"/> Automated post-care check-ins that boost adherence</li>
              <li className="flex items-start"><CheckCircle className="h-6 w-6 text-cyan-400 mr-3 mt-1"/> Seamless, HIPAA-secure integrations with your EHR</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 sm:px-12 md:px-16 lg:px-24 py-24 bg-black">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-black/30 border border-white/10 rounded-full 
                          px-4 py-2 mb-6 text-slate-300 text-sm">
            <ClipboardList className="h-4 w-4 text-cyan-400 mr-2" /> Built for Patient-Centered Care
          </div>
          <h2 className="text-3xl font-bold mb-4">Automations That Put Patients First</h2>
          <p className="text-slate-400 max-w-3xl mx-auto">
            From the first intake form to the last post-treatment follow-up, every feature ensures patients feel supported while your clinic runs smoother than ever.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { icon: ClipboardList, title: "AI Intake Forms", desc: "Capture complete patient info before they arrive." },
            { icon: Calendar, title: "Appointment Assurance", desc: "Reduce no-shows with automated reminders & confirmations." },
            { icon: HeartPulse, title: "Post-Treatment Care", desc: "Follow-up messages that improve adherence & recovery rates." },
            { icon: Lock, title: "Secure Integrations", desc: "Syncs with EHR & practice management — HIPAA-compliant." },
            { icon: CheckCircle, title: "Multi-Channel Communication", desc: "Engage patients across SMS, WhatsApp, and email seamlessly." },
            { icon: BarChart3, title: "Performance Insights", desc: "Track no-show rates, patient engagement, and staff time saved." },
          ].map((f, i) => {
            const Icon = f.icon;
            return (
              <div key={i} className="p-8 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl 
                                      shadow-lg hover:border-cyan-500/40 hover:shadow-cyan-500/20 transition-all duration-500 hover:scale-105">
                <Icon className="h-8 w-8 text-cyan-400 mb-4" />
                <h3 className="font-semibold mb-2">{f.title}</h3>
                <p className="text-slate-400 text-sm">{f.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ROI & Testimonials */}
      <section className="px-6 sm:px-12 md:px-16 lg:px-24 py-24 bg-black text-center">
        <div className="inline-flex items-center bg-black/30 border border-white/10 rounded-full 
                        px-4 py-2 mb-6 text-slate-300 text-sm">
          <BarChart3 className="h-4 w-4 text-cyan-400 mr-2" /> Proven Results for Specialty Clinics
        </div>
        <h2 className="text-3xl font-bold mb-6">The Results Speak for Themselves</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto text-slate-300 mb-16">
          {[
            "No-shows reduced by 42% in 6 weeks",
            "30+ staff hours saved every month",
            "Patients report 25% higher satisfaction",
            "Seamless EHR data flow — zero manual entry"
          ].map((stat, i) => (
            <div key={i} className="p-6 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl 
                                    shadow-lg hover:border-cyan-500/40 hover:shadow-cyan-500/20 transition-all duration-500 hover:scale-105">
              ✅ <span className="text-white font-bold">{stat}</span>
            </div>
          ))}
        </div>
        <blockquote className="italic text-slate-400 max-w-3xl mx-auto">
          “Our front desk was drowning in calls. Now patients schedule and confirm automatically. 
          No-shows dropped by almost half, and my staff finally has time for care instead of paperwork.”  
          <br /> <span className="text-cyan-400">— Dr. James R., Orthopedic Clinic</span>
        </blockquote>
      </section>

      {/* Pricing */}
      <section className="px-6 sm:px-12 md:px-16 lg:px-24 py-24 bg-black text-center">
        <div className="inline-flex items-center bg-black/30 border border-white/10 rounded-full 
                        px-4 py-2 mb-6 text-slate-300 text-sm">
          <CreditCard className="h-4 w-4 text-cyan-400 mr-2" /> Custom Systems, Delivered in 72 Hours
        </div>
        <h2 className="text-3xl font-bold mb-4">Pricing Snapshot</h2>
        <p className="text-slate-400 mb-12">
          Tailored automation systems for specialty clinics — live in <span className="text-white font-semibold">72 hours or less</span>.
        </p>
        <div className="grid sm:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { name: "Starter Automation", price: "$1,000 + $500/mo", desc: "AI intake + reminders" },
            { name: "Advanced Automation", price: "$1,800 + $800/mo", desc: "Multi-channel flows + post-care follow-ups" },
            { name: "Custom Clinic Systems", price: "$3,000 + $1,500/mo", desc: "EHR integration + end-to-end automation" },
          ].map((p, i) => (
            <div key={i} className="p-8 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl 
                                    shadow-lg hover:border-cyan-500/40 hover:shadow-cyan-500/20 transition-all duration-500 hover:scale-105">
              <h3 className="font-semibold text-xl mb-2">{p.name}</h3>
              <p className="text-cyan-400 font-bold mb-4">{p.price}</p>
              <p className="text-slate-400 mb-6">{p.desc}</p>
              <button
                onClick={() => openModal("Book Strategy Call", "Specialty Clinics")}
                className="bg-gradient-to-r from-cyan-500 to-emerald-500 text-white px-8 py-4 
                           rounded-xl font-semibold shadow-lg hover:scale-105 hover:shadow-cyan-500/25 transition transition-all duration-500 hover:scale-105"
              >
                Book Strategy Call
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 sm:px-12 md:px-16 lg:px-24 py-24 text-center bg-black">
        <div className="inline-flex items-center bg-black/30 border border-white/10 rounded-full 
                        px-4 py-2 mb-6 text-slate-300 text-sm">
          <Rocket className="h-4 w-4 text-cyan-400 mr-2" /> Free Up Your Staff, Elevate Patient Care
        </div>
        <h2 className="text-3xl font-bold mb-6">Your Clinic Can Do More With Less</h2>
        <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
          Patients deserve faster service and better follow-up. Staff deserve fewer admin headaches. Solryn makes both possible — in days, not months.
        </p>
        <button
          onClick={() => openModal("Book Strategy Call", "Specialty Clinics")}
          className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-xl 
                     font-semibold shadow-lg  hover:shadow-pink-500/25 transition flex items-center mx-auto transition-all duration-500 hover:scale-105"
        >
          Book My Free Strategy Call <ArrowRight className="ml-2 h-5 w-5" />
        </button>
      </section>
    </div>
  );
}