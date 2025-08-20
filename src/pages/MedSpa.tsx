import React from "react";
import {
  Sparkles,
  AlertTriangle,
  MessageSquare,
  Clock,
  CalendarX2,
  BarChart3,
  Zap,
  Bot,
  Gift,
  Link2,
  Shield,
  Star,
} from "lucide-react";
import { useModal } from "../contexts/ModalContext";

const MedSpa: React.FC = () => {
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
          style={{ backgroundImage: "url('/medspa-fallback.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80" />

        {/* Content */}
        <div className="relative z-10 text-center max-w-4xl px-6">
          {/* Badge */}
          <div className="inline-flex items-center bg-black/30 border border-white/10 rounded-full px-4 py-2 mb-6 text-slate-300 text-sm">
            <Sparkles className="h-4 w-4 text-cyan-400 mr-2" />
            AI Automation for Med Spas
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
            Transform How Your Med Spa Attracts, Serves, and Retains Clients<br></br><br></br>
          </h1>

          <p className="text-lg text-slate-300 mb-8">
            In today’s competitive med spa landscape, success isn’t just about
            offering great treatments—it’s about creating a flawless client
            journey. From the moment a prospect discovers you online to their
            repeat visits months later, every interaction shapes whether they
            choose you or your competitor.<br></br>
            <br />
            At Solryn, we bring <strong>enterprise-level AI automation</strong>{" "}
            to Med Spas, giving you the ability to capture every lead instantly,
            eliminate wasted admin time, reduce no-shows, and deliver the{" "}
            <em>luxurious experience your clients expect</em>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => openModal("Book Strategy Call", "hero")}
              className="bg-gradient-to-r from-cyan-500 to-emerald-500 text-white px-8 py-4 rounded-xl 
                         font-semibold shadow-lg hover:shadow-cyan-500/25 border border-white/10
                         transition-all duration-700 ease-out hover:scale-105"
            >
              Book Strategy Call
            </button>

            <button
              onClick={() => openModal("Pricing", "hero")}
              className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-xl 
                         font-semibold hover:bg-cyan-500/10 transition-all duration-700 ease-out hover:scale-105"
            >
              View Automation Packages
            </button>
          </div>
        </div>
      </section>

      {/* ========== CHALLENGE ========== */}
      <section className="px-6 sm:px-12 md:px-16 lg:px-24 py-24 bg-black text-center">
        {/* Badge */}
        <div className="inline-flex items-center bg-black/30 border border-white/10 rounded-full px-4 py-2 mb-6 text-slate-300 text-sm">
          <AlertTriangle className="h-4 w-4 text-cyan-400 mr-2" />
          The Challenge
        </div>

        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          The Challenge: The Hidden Costs of Growth
        </h2>

        <p className="text-slate-300 max-w-3xl mx-auto mb-10">
          Every Med Spa wants more clients, higher retention, and consistent
          revenue. But behind the beautiful interiors and glowing results,
          there’s a reality most owners know too well:
        </p>

        {/* Pain points as glow cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {[
            {
              icon: MessageSquare,
              text:
                "Leads slipping away – potential clients message you after hours, but by morning, they’ve already booked elsewhere.",
            },
            {
              icon: Clock,
              text:
                "Manual follow-ups draining staff – chasing confirmations, reschedules, and reminders eats up hours every week.",
            },
            {
              icon: CalendarX2,
              text:
                "Cancellations & no-shows – every empty chair is lost revenue and wasted staff time.",
            },
            {
              icon: BarChart3,
              text:
                "Scaling feels impossible – the more clients you gain, the harder it gets to maintain a truly VIP-level experience.",
            },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="relative group">
                {/* Blurry gradient aura */}
                <div className="pointer-events-none absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-0 transition-opacity duration-700 ease-out blur-lg bg-gradient-to-r from-cyan-500 to-emerald-500" />
                <div className="relative p-6 rounded-2xl bg-black/40 border border-white/10 backdrop-blur-md 
                                hover:border-cyan-500/40 transition-all duration-700 ease-out hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20">
                  <Icon className="h-6 w-6 text-cyan-400 mb-3" />
                  <p className="text-slate-300 text-left">{item.text}</p>
                </div>
              </div>
            );
          })}
        </div>

        <p className="text-slate-300 max-w-3xl mx-auto mt-10">
          You didn’t open a Med Spa to become a full-time receptionist,
          scheduler, or call center. Yet without solving these bottlenecks,
          growth always feels capped.
        </p>
      </section>

      {/* ========== SOLUTION ========== */}
      <section className="px-6 sm:px-12 md:px-16 lg:px-24 py-24 bg-black text-center">
        {/* Badge */}
        <div className="inline-flex items-center bg-black/30 border border-white/10 rounded-full px-4 py-2 mb-6 text-slate-300 text-sm">
          <Zap className="h-4 w-4 text-cyan-400 mr-2" />
          Our Solution
        </div>

        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Our Solution: Automation Designed for Luxury Med Spas
        </h2>

        <p className="text-slate-300 max-w-4xl mx-auto mb-10">
          Solryn isn’t about bots that feel robotic. It’s about{" "}
          <strong>intelligent systems</strong> that let your Med Spa run like
          the high-end brand it is—streamlined, responsive, and client-obsessed.
        </p>

        {/* Four feature cards (glow) */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {[
            {
              icon: Bot,
              title: "Instant Lead Capture & Response",
              desc:
                "Every inquiry gets an immediate, polished reply via SMS or email—whether it’s 2pm or 2am. No more lost leads.",
            },
            {
              icon: CalendarX2,
              title: "No-Show Prevention & Smart Scheduling",
              desc:
                "Automated confirmations, reschedule links, and reminders dramatically reduce empty-chair losses.",
            },
            {
              icon: Gift,
              title: "VIP Client Nurture Flows",
              desc:
                "Personalized post-visit check-ins, birthday offers, and loyalty incentives that make every client feel remembered and valued.",
            },
            {
              icon: Link2,
              title: "Seamless Integration with Your Booking System",
              desc:
                "No new tools to learn. We plug directly into your existing software to keep your team free for what matters most—client care.",
            },
          ].map((f, i) => {
            const Icon = f.icon;
            return (
              <div key={i} className="relative group">
                <div className="pointer-events-none absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-0 transition-opacity duration-700 ease-out blur-lg bg-gradient-to-r from-cyan-500 to-emerald-500" />
                <div className="relative p-8 rounded-2xl bg-black/40 border border-white/10 backdrop-blur-md 
                                hover:border-cyan-500/40 transition-all duration-700 ease-out hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 text-left">
                  <Icon className="h-7 w-7 text-cyan-400 mb-4" />
                  <h3 className="font-semibold mb-2">{f.title}</h3>
                  <p className="text-slate-300 text-sm">{f.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ========== FEATURES / OUTCOMES ========== */}
      <section className="px-6 sm:px-12 md:px-16 lg:px-24 py-24 bg-black text-center">
        {/* Badge */}
        <div className="inline-flex items-center bg-black/30 border border-white/10 rounded-full px-4 py-2 mb-6 text-slate-300 text-sm">
          <Zap className="h-4 w-4 text-cyan-400 mr-2" />
          What We Automate
        </div>

        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          What We Automate (Features as Outcomes)
        </h2>

        {/* Convert list to glow cards with icons */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {[
            {
              icon: MessageSquare,
              title: "Lead Nurturing That Converts",
              desc:
                "Every prospect gets an immediate, elegant response that builds trust and turns interest into booked appointments.",
            },
            {
              icon: CalendarX2,
              title: "No-Show Slayer",
              desc:
                "Automated confirmations and reminders protect your calendar and stabilize revenue.",
            },
            {
              icon: Gift,
              title: "Retention & Upsell Campaigns",
              desc:
                "Keep clients engaged long after their first visit, increasing lifetime value without extra effort.",
            },
            {
              icon: Link2,
              title: "Effortless CRM Sync",
              desc:
                "Integrations that don’t disrupt your workflow but make it smoother.",
            },
          ].map((f, i) => {
            const Icon = f.icon;
            return (
              <div key={i} className="relative group">
                <div className="pointer-events-none absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-0 transition-opacity duration-700 ease-out blur-lg bg-gradient-to-r from-cyan-500 to-emerald-500" />
                <div className="relative p-8 rounded-2xl bg-black/40 border border-white/10 backdrop-blur-md 
                                hover:border-cyan-500/40 transition-all duration-700 ease-out hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 text-left">
                  <Icon className="h-7 w-7 text-cyan-400 mb-4" />
                  <h3 className="font-semibold mb-2">{f.title}</h3>
                  <p className="text-slate-300 text-sm">{f.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ========== CREDIBILITY ========== */}
      <section className="px-6 sm:px-12 md:px-16 lg:px-24 py-24 bg-black text-center">
        {/* Badge */}
        <div className="inline-flex items-center bg-black/30 border border-white/10 rounded-full px-4 py-2 mb-6 text-slate-300 text-sm">
          <Shield className="h-4 w-4 text-cyan-400 mr-2" />
          Why Solryn
        </div>

        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Why Solryn: Credibility Without the Hype
        </h2>

        <p className="text-slate-300 max-w-4xl mx-auto mb-10">
          Most agencies promise the world with flashy numbers or case studies
          that don’t hold up. We’re different.
        </p>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "Exclusively Focused",
              desc:
                "Med Spas, Specialty Clinics, Luxury Real Estate. Purpose-built systems for businesses like yours.",
            },
            {
              title: "Proven Frameworks",
              desc:
                "Battle-tested automations that save hours weekly and directly protect your revenue.",
            },
            {
              title: "Premium Partner Approach",
              desc:
                "We design, deploy, and refine systems that align with your brand experience.",
            },
          ].map((c, i) => (
            <div key={i} className="relative group">
              <div className="pointer-events-none absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-0 transition-opacity duration-700 ease-out blur-lg bg-gradient-to-r from-cyan-500 to-emerald-500" />
              <div className="relative p-8 rounded-2xl bg-black/40 border border-white/10 backdrop-blur-md 
                              hover:border-cyan-500/40 transition-all duration-700 ease-out hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 text-left">
                <h3 className="font-semibold mb-2">{c.title}</h3>
                <p className="text-slate-300 text-sm">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-slate-300 max-w-3xl mx-auto mt-10">
          AI isn’t the future—it’s the present.{" "}
          <em>Will your Med Spa lead the shift, or risk falling behind?</em>
        </p>
      </section>

      {/* ========== PRICING ========== */}
      <section className="px-6 sm:px-12 md:px-16 lg:px-24 py-24 bg-black text-center">
        {/* Badge */}
        <div className="inline-flex items-center bg-black/30 border border-white/10 rounded-full px-4 py-2 mb-6 text-slate-300 text-sm">
          <Star className="h-4 w-4 text-cyan-400 mr-2" />
          Pricing Snapshot
        </div>

        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Pricing Snapshot: Tailored for Growth
        </h2>

        <p className="text-slate-300 mb-12">
          Your investment in automation pays itself back every month in saved
          hours, recovered no-shows, and new bookings.
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              name: "Starter Automation",
              price: "$1,000 setup + $500/mo",
              desc:
                "Perfect for Med Spas looking to eliminate no-shows and capture every lead instantly.",
              source: "Starter Automation",
            },
            {
              name: "Advanced Automation",
              price: "$1,800 setup + $800/mo",
              desc:
                "For growing Med Spas ready to add multi-channel nurture campaigns and client loyalty flows.",
              source: "Advanced Automation",
            },
            {
              name: "Custom VIP Flows",
              price: "$2,000 setup + $1,000/mo",
              desc:
                "A fully tailored system for Med Spas who want every part of the client journey automated and elevated.",
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
          Next Step
        </div>

        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Your next client could be messaging you right now.
        </h2>

        <p className="max-w-2xl mx-auto text-slate-300 mb-6">
          Will you capture them—or let them slip away? With Solryn’s AI
          automation, you’ll stop losing leads, eliminate preventable no-shows,
          and free your staff to focus on creating unforgettable client
          experiences.
        </p>
        <p className="max-w-2xl mx-auto text-slate-300 mb-8">
          Your Med Spa deserves to grow without chaos. Let’s design the system
          that makes it happen.
        </p>

        <button
          className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 text-white font-semibold
                     hover:shadow-cyan-500/25 transition-all duration-700 ease-out hover:scale-105 border border-white/10"
          onClick={() => openModal("Final CTA", "footer")}
        >
          Book My Free Strategy Call →
        </button>
      </section>
    </div>
  );
};

export default MedSpa;
