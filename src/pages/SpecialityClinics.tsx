import React from "react";
import {
  Sparkles,
  AlertTriangle,
  Zap,
  Shield,
  Star,
  PhoneMissed,
  FileText,
  ShieldAlert,
  Share2,
  Calendar,
  RefreshCcw,
  MessageSquare,
  BarChart3,
  ShieldCheck,
  FileCheck
} from "lucide-react";
import { useModal } from "../contexts/ModalContext";

const SpecialityClinics: React.FC = () => {
  const { openModal } = useModal();

  return (
    <div className="bg-[#0A0D10] text-white">
      
      {/* ========== HERO (with background video) ========== */}
      <section className="relative w-full h-[95vh] flex items-center justify-center overflow-hidden">
        {/* Background Video / Fallback */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover hidden md:block"
        >
          <source src="/PagesAnimation.mp4" type="video/mp4" />
        </video>
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center md:hidden"
          style={{ backgroundImage: "url('/clinic-fallback.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80" />

        {/* Content */}
        <div className="relative z-10 text-center max-w-4xl px-6">
          {/* Badge */}
          <div className="inline-flex items-center bg-black/30 border border-white/10 rounded-full px-4 py-2 mb-6 text-slate-300 text-sm">
            <Sparkles className="h-4 w-4 text-cyan-400 mr-2" />
            AI Automation for Specialty Clinics
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
          Turn One-Time Visitors Into Loyal Members. Deliver Luxury Without the Back-Office Chaos.
          </h1>

          <p className="text-lg text-slate-300 mb-8">
            In healthcare, trust isn’t optional — it’s everything. Patients don’t just judge you by the treatment they receive; they judge you by how fast you respond, how clear your communication is, and how seamless their experience feels.
            <br></br>
            But in most specialty clinics, overwhelmed staff miss calls, paperwork piles up, and referrals slip through the cracks. The result? Patients don’t come back, new patients go elsewhere, and your clinic’s reputation suffers.
            <br></br><br></br>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => openModal("Book a Demo", "hero")}
              className="bg-gradient-to-r from-cyan-500 to-emerald-500 text-white px-8 py-4 rounded-xl 
                         font-semibold shadow-lg hover:shadow-cyan-500/25 border border-white/10
                         transition-all duration-700 ease-out hover:scale-105"
            >
              Book a Demo
            </button>

            <button
              onClick={() => openModal("See How It Works", "hero")}
              className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-xl 
                         font-semibold hover:bg-cyan-500/10 transition-all duration-700 ease-out hover:scale-105"
            >
              See How It Works
            </button>
          </div>
        </div>
      </section>

      {/* ========== THE CHALLENGE ========== */}
      <section id="challenge" className="px-6 sm:px-12 md:px-16 lg:px-24 py-24 bg-black text-center">
        {/* Badge */}
        <div className="inline-flex items-center bg-black/30 border border-white/10 rounded-full px-4 py-2 mb-6 text-slate-300 text-sm">
          <AlertTriangle className="h-4 w-4 text-cyan-400 mr-2" />
          The Silent Revenue Leak in Healthcare
        </div>

        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          The Challenge: Why Clinics Bleed Patients Without Realizing It
        </h2>

        <p className="text-slate-300 max-w-4xl mx-auto mb-10">
        Missed calls, paperwork overload, and poor follow-ups cost clinics far more patients than bad medicine ever does. These silent leaks drain trust and revenue every single day.
          <br /><br />
          
          This story happens <strong>dozens of times every month</strong> inside clinics. The costs are staggering:
        </p>

        {/* Pain points as glow cards */}
        <div className="grid md:grid-cols-2 text-xl lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {[
            { icon: PhoneMissed, title: "Missed Calls = Missed Trust", text: "Patients expect healthcare to be responsive. One ignored call is often enough to choose a competitor." },
            { icon: FileText, title: "Paperwork Overload", text: "Highly-trained staff spend half their day chasing forms, verifying insurance, and juggling reminders — not delivering care." },
            { icon: ShieldAlert, title: "Compliance Risk Everywhere", text: "HIPAA mistakes aren’t just fines. They erode patient confidence permanently." },
            { icon: Share2, title: "Lost Referrals = Lost Growth", text: "Every referral that slips through cracks is not just lost revenue, but a lost lifetime of trust." },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="relative group">
                {/* Blurry gradient aura (cyan→emerald) */}
                <div className="pointer-events-none absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-0 transition-opacity duration-700 ease-out blur-lg bg-gradient-to-r from-cyan-500 to-emerald-500" />
                <div className="relative p-6 rounded-2xl bg-black/40 border border-white/10 backdrop-blur-md 
                                hover:border-cyan-500/40 transition-all duration-700 ease-out hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 text-left min-h-[160px] ">
                  <Icon className="h-6 w-6 text-cyan-400 mb-3" />
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-slate-300 text-lg">{item.text}</p>
                </div>
              </div>
            );
          })}
        </div>

        <p className="text-slate-300 max-w-3xl mx-auto mt-10">
          👉 Most clinics never measure these leaks. But when you add them up, the “invisible losses” easily exceed <strong>six to seven figures annually</strong>.
        </p>
      </section>

      {/* ========== SOLUTION ========== */}
      <section className="px-6 sm:px-12 md:px-16 lg:px-24 py-24 bg-black text-center">
        {/* Badge */}
        <div className="inline-flex items-center bg-black/30 border border-white/10 rounded-full px-4 py-2 mb-6 text-slate-300 text-sm">
          <Zap className="h-4 w-4 text-cyan-400 mr-2" />
          Protecting Care and Compliance, 24/7
        </div>

        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          The Solution: Intelligent Automation That Feels Human
        </h2>

        <p className="text-slate-300 max-w-4xl mx-auto mb-10">
          What if your front desk never missed a call?
          What if patients could schedule appointments instantly, no matter the hour?
          What if insurance forms, referral tracking, and reminders happened without anyone on your team lifting a finger?
          <br /><br />
          That’s exactly what Solryn builds for specialty clinics.
          <br />
          Our systems combine <strong>smart conversational AI</strong> with <strong>healthcare-grade automation</strong> so your clinic runs like a concierge service — always responsive, always compliant, and always on.
        </p>

        {/* Feature cards (glow) */}
        <div className="grid md:grid-cols-2 text-xl lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            { icon: Calendar, title: "Smart Intake & Scheduling", desc: "AI assistants handle phone, chat, text, or WhatsApp — scheduling patients instantly, with zero double-bookings." },
            { icon: Share2, title: "Referral Management", desc: "Every referral logged, tracked, and confirmed automatically. Patients never slip away silently." },
            { icon: ShieldCheck, title: "HIPAA-Ready Messaging", desc: "Secure, compliant communication ensures patients feel informed and protected." },
            { icon: RefreshCcw, title: "Follow-Up Campaigns That Run Themselves", desc: "Missed call callbacks, no-show reminders, post-treatment check-ins, and reactivation campaigns — all handled automatically." },
            { icon: FileCheck, title: "Insurance & Documentation Automation", desc: "No more paperwork bottlenecks. Insurance verified, forms pre-filled, compliance handled in the background." },
            { icon: Zap, title: "Feels Like Five Extra Staff Members", desc: "The result? A clinic that feels like it has five extra staff members — without the payroll." },
          ].map((f, i) => {
            const Icon = f.icon;
            return (
              <div key={i} className="relative group">
                <div className="pointer-events-none absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-0 transition-opacity duration-700 ease-out blur-lg bg-gradient-to-r from-cyan-500 to-emerald-500 " />
                <div className="relative p-8 rounded-2xl bg-black/40 border border-white/10 backdrop-blur-md 
                                hover:border-cyan-500/40 transition-all duration-700 ease-out hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 text-left min-h-[200px]">
                  <Icon className="h-7 w-7 text-cyan-400 mb-4" />
                  <h3 className="font-semibold mb-2">{f.title}</h3>
                  <p className="text-slate-300 text-lg">{f.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ========== WHAT WE AUTOMATE ========== */}
      <section className="px-6 sm:px-12 md:px-16 lg:px-24 py-24 bg-black text-center">
        {/* Badge */}
        <div className="inline-flex items-center bg-black/30 border border-white/10 rounded-full px-4 py-2 mb-6 text-slate-300 text-sm">
          <Zap className="h-4 w-4 text-cyan-400 mr-2" />
          From First Call to Lifetime Loyalty
        </div>

        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          What We Automate for Clinics
        </h2>

        <p className="text-slate-300 max-w-3xl mx-auto mb-10">
          Every patient journey has dozens of touchpoints. If even one breaks, trust is lost. We automate the entire journey so every patient feels cared for at every step.
        </p>

        {/* Outcome cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            { icon: MessageSquare, text: "24/7 Patient Communication — Calls, texts, emails, WhatsApp, all handled instantly." },
            { icon: Calendar, text: "Integrated Scheduling — Direct sync with your EHR and calendars." },
            { icon: RefreshCcw, text: "Patient Recall & Retention — Automated reminders and campaigns keep patients returning." },
            { icon: FileText, text: "Insurance & Billing Workflows — Reduce errors, delays, and compliance risks." },
            { icon: BarChart3, text: "Analytics Dashboards — See exactly where patients are coming from, and where you’re losing them." },
          ].map((f, i) => {
            const Icon = f.icon;
            return (
              <div key={i} className="relative group">
                <div className="pointer-events-none absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-0 transition-opacity duration-700 ease-out blur-lg bg-gradient-to-r from-cyan-500 to-emerald-500" />
                <div className="relative p-8 rounded-2xl bg-black/40 border border-white/10 backdrop-blur-md 
                                hover:border-cyan-500/40 transition-all duration-700 ease-out hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 text-left min-h-[160px]">
                  <Icon className="h-7 w-7 text-cyan-400 mb-4" />
                  <p className="text-slate-300 text-lg">{f.text}</p>
                </div>
              </div>
            );
          })}
        </div>

        <p className="text-slate-300 max-w-3xl mx-auto mt-10">
          👉 This isn’t just “convenience software.” It’s a <strong>growth engine for trust, compliance, and retention.</strong>
        </p>
      </section>

      {/* ========== WHY TRUST SOLRYN ========== */}
      <section className="px-6 sm:px-12 md:px-16 lg:px-24 py-24 bg-black text-center">
        {/* Badge */}
        <div className="inline-flex items-center bg-black/30 border border-white/10 rounded-full px-4 py-2 mb-6 text-slate-300 text-sm">
          <Shield className="h-4 w-4 text-cyan-400 mr-2" />
          Built for Healthcare, Not Just Tech
        </div>

        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Why Specialty Clinics Trust Solryn
        </h2>

        <div className="grid md:grid-cols-2  lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {[
            { title: "Healthcare-Grade Security", desc: "Every workflow we deploy is HIPAA-ready, with secure encryption by design." },
            { title: "Specialty-Specific Knowledge", desc: "We’ve studied the unique needs of orthopedics, cardiology, dermatology, and other specialties — so your system feels tailored, not generic." },
            { title: "Scalable Frameworks", desc: "Whether you’re one clinic or a multi-location network, our systems grow with you." },
            { title: "Done-With-You Partnership", desc: "We don’t just “install” automation. We co-create it with your staff, train them, and continuously optimize so adoption feels natural." },
          ].map((c, i) => (
            <div key={i} className="relative group">
              <div className="pointer-events-none absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-0 transition-opacity duration-700 ease-out blur-lg bg-gradient-to-r from-cyan-500 to-emerald-500" />
              <div className="relative p-8 rounded-2xl bg-black/40 border border-white/10 backdrop-blur-md 
                              hover:border-cyan-500/40 transition-all duration-700 ease-out hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 text-left ">
                <h3 className="text-xl font-semibold mb-2">{c.title}</h3>
                <p className="text-slate-300 text-lg">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-slate-300 max-w-3xl mx-auto mt-10">
          With Solryn, automation doesn’t replace human touch — it <strong>amplifies</strong> it.
        </p>
      </section>

      {/* ========== PRICING ========== */}
      <section className="px-6 sm:px-12 md:px-16 lg:px-24 py-24 bg-black text-center">
        {/* Badge */}
        <div className="inline-flex items-center bg-black/30 border border-white/10 rounded-full px-4 py-2 mb-6 text-slate-300 text-sm">
          <Star className="h-4 w-4 text-cyan-400 mr-2" />
          Flexible Packages for Every Clinic Stage
        </div>

        <h2 className="text-3xl md:text-4xl font-bold mb-6">
        Pricing: An Investment That Returns Every Month
        </h2>

        <p className="text-slate-300 mb-12">
        Every clinic is unique, but the ROI story is the same: automation pays for itself fast.<br></br><br></br>
        👉 Most clinics recoup their investment within <strong>60–90 days</strong>. After that, it’s pure return — in revenue, retention, and reputation.
        </p>
        

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              name: "Starter Automation",
              price: "$1,000 setup + $500/mo",
              desc:
                "Perfect for single-specialty practices looking to eliminate missed calls and automate scheduling.",
              source: "Starter Automation",
            },
            {
              name: "Advanced Automation",
              price: "$1,800 setup + $800/mo",
              desc:
                "For multi-provider clinics who need referral tracking, insurance workflows, and patient recall campaigns.",
              source: "Advanced Automation",
            },
            {
              name: "Custom VIP Flows",
              price: "$2,000 setup + $1,000/mo",
              desc:
                "For networks and high-volume clinics requiring end-to-end patient engagement, compliance automation, and advanced analytics.",
              source: "Custom VIP Flows",
            },
          ].map((plan, idx) => (
            <div key={idx} className="relative group">
              <div className="pointer-events-none absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-0 transition-opacity duration-700 ease-out blur-lg bg-gradient-to-r from-cyan-500 to-emerald-500" />
              <div className="relative p-8 rounded-2xl bg-black/40 border border-white/10 backdrop-blur-md 
                              hover:border-cyan-500/40 transition-all duration-700 ease-out hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20">
                <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                <p className="text-cyan-400 font-bold mb-4">{plan.price}</p>
                <p className="text-slate-300 mb-6">{plan.desc}</p>
                <button
                  className="w-full px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 text-white font-semibold
                             hover:shadow-cyan-500/25 transition-all duration-700 ease-out hover:scale-105 border border-white/10"
                  onClick={() => openModal(plan.source, "pricing")}
                >
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-12 text-slate-400">
          Each package is designed to deliver ROI in weeks, not months.
        </p>
      </section>

      {/* ========== FINAL CTA ========== */}
      <section className="px-6 sm:px-12 md:px-16 lg:px-24 py-24 text-center bg-black">
        {/* Badge */}
        <div className="inline-flex items-center bg-black/30 border border-white/10 rounded-full px-4 py-2 mb-6 text-slate-300 text-sm">
          <Sparkles className="h-4 w-4 text-cyan-400 mr-2" />
          Don’t Let Missed Calls Cost You Patients
        </div>

        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Every unanswered phone call could be a lifetime patient lost.
        </h2>

        <p className="max-w-2xl mx-auto text-slate-300 mb-8">
        With Solryn, your clinic never misses a patient, a referral, or a compliance detail. Book a strategy session today and see how automation transforms your practice into a high-trust, high-growth clinic.
        </p>

        <button
          className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 text-white font-semibold
                     hover:shadow-cyan-500/25 transition-all duration-700 ease-out hover:scale-105 border border-white/10"
          onClick={() => openModal("Book a strategy call", "Speciality-Clinic-CTA")}
        >
          Book a Strategy Call
        </button>
      </section>
    </div>
  );
};

export default SpecialityClinics;
