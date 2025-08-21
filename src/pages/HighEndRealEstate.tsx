import React from "react";
import {
  Sparkles,
  AlertTriangle,
  CheckCircle,
  Zap,
  MessageSquare,
  Users,
  Home,
  Calendar,
  Clock,
  XCircle,
  BarChart3,
  CreditCard,
  Rocket,
  ArrowRight,
} from "lucide-react";
import { useModal } from "../contexts/ModalContext";

const HighEndRealEstate: React.FC = () => {
  const { openModal } = useModal();

  const realEstatePlans = [
  {
    title: "Starter Automation",
    badge: "72 HRS DELIVERY",
    price: "$1,800",
    monthly: "$800/mo",
    desc: "Instant lead capture and automated follow-ups for every property inquiry. Never lose a hot lead and respond faster than the competition.",
    source: "Real Estate - Starter Automation"
  },
  {
    title: "Advanced Automation",
    badge: "72 HRS DELIVERY",
    price: "$2,500",
    monthly: "$1,000/mo",
    desc: "Multi-step workflows for high-value property sales. Automate showing schedules, client reminders, and pipeline updates, so your team can focus on closing deals.",
    source: "Real Estate - Advanced Automation"
  },
  {
    title: "Premium AI System",
    badge: "4–7 DAYS DELIVERY",
    price: "$4,000",
    monthly: "$1,800/mo",
    desc: "Complete AI-powered real estate assistant. Handles inquiries, schedules showings, follows up automatically, and manages your CRM 24/7.",
    source: "Real Estate - Premium AI System"
  }
];


  return (
    <div className="bg-[#0A0D10] text-white">
      {/* ========== HERO (with background video) ========== */}
      <section className="relative w-full md:h-[95vh] h-[150vh] flex items-center justify-center overflow-hidden">
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
          style={{ backgroundImage: "url('/realestate-fallback.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80" />

        {/* Content */}
        <div className="relative z-10 text-center max-w-4xl px-6">
          {/* Badge */}
          <div className="inline-flex items-center bg-black/30 border border-white/10 rounded-full px-4 py-2 mb-6 text-slate-300 text-sm">
            <Sparkles className="h-4 w-4 text-cyan-400 mr-2" />
            AI Automation for Real Estate
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
            Sell Luxury, Close Faster — <br />
            <span className="block">AI-Powered Automation for Elite Realtors</span>
          </h1>

          <p className="text-lg text-slate-300 mb-8">
            In high-end real estate, speed isn’t optional — it’s everything. Solryn equips luxury agents with
            AI-driven systems that respond instantly, nurture flawlessly, and book qualified appointments without
            lifting a finger.
            <br />
            <br />
            The luxury market doesn’t wait. High-net-worth buyers and sellers expect immediate, personalized
            attention. One missed call or delayed reply can mean losing a multi-million-dollar deal to a faster
            competitor. With Solryn, you’ll never miss another opportunity. Our AI automates first contact, manages
            scheduling, and follows up with human-like personalization — so you can focus on what you do best:
            building relationships and closing deals.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
              
              className="bg-gradient-to-r from-cyan-500 to-emerald-500 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-cyan-400 hover:to-emerald-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex flex-col items-center"
            >
              <div className="flex items-center space-x-3">
                <ArrowRight className="h-5 w-5" />
                <a href="https://calendly.com/atharv-solrynhq/30min" target="_blank" rel="noopener noreferrer">
                  <button>Book Strategy Call</button>
                </a>
              </div>              
            </button>


            <button
              onClick={() => openModal("Get My Free Automation Blueprint", "hero")}
              className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-xl 
                         font-semibold hover:bg-cyan-500/10 transition-all duration-700 ease-out hover:scale-105"
            >
              Get My Free Automation Blueprint
            </button>
          </div>
        </div>
      </section>

      {/* ========== CHALLENGE ========== */}
      <section className="px-6 sm:px-12 md:px-16 lg:px-24 py-24 bg-black text-center">
        {/* Badge */}
        <div className="inline-flex items-center bg-black/30 border border-white/10 rounded-full px-4 py-2 mb-6 text-slate-300 text-sm">
          <AlertTriangle className="h-4 w-4 text-cyan-400 mr-2" />
          Why Traditional Real Estate Workflows Fail
        </div>

        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          The Luxury Market Moves Fast — Are You Falling Behind?
        </h2>

        <p className="text-slate-300 max-w-3xl mx-auto mb-10">
          Every missed call, every late reply, every manual follow-up could cost you six or seven figures.
          Luxury real estate is unforgiving. You’re constantly juggling showings, client dinners, and negotiations —
          yet leads pour in at all hours. By the time you get back to them, they’ve already spoken to another agent.
          Admin tasks pile up. Messages slip through the cracks. That “hot lead” you were sure about? Gone.
          <br />
          <br />
          That’s where Solryn steps in. Our AI doesn’t just reply instantly — it nurtures relationships, books
          viewings, and keeps your pipeline flowing while you focus on high-value work. Every inquiry feels
          personal. Every follow-up is handled. Every opportunity is captured.
        </p>

        {/* Pain points as glow cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {[
            {
              icon: Clock,
              title: "Speed-to-Lead is Everything",
              text: "When a buyer inquires online, they expect a response within 5 minutes. Wait longer, and the lead is gone.",
            },
            {
              icon: XCircle,
              title: "Missed Calls = Missed Commissions",
              text: "Every unanswered phone call could be a lost million-dollar listing. Prospects don’t wait—they move on.",
            },
            {
              icon: MessageSquare,
              title: "Follow-Up Fatigue",
              text: "Most agents stop after 2-3 follow-ups. But data shows luxury clients often need 8+ touchpoints before they commit.",
            },
            {
              icon: Users,
              title: "Pipeline Chaos",
              text: "Without systemized nurturing, leads slip through the cracks, agents burn out, and predictable growth becomes impossible.",
            },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="relative group">
                <div className="pointer-events-none absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-0 transition-opacity duration-700 ease-out blur-lg bg-gradient-to-r from-cyan-500 to-emerald-500" />
                <div
                  className="relative p-6 rounded-2xl bg-black/40 border border-white/10 backdrop-blur-md
                              hover:border-cyan-500/40 transition-all duration-700 ease-out hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 text-left min-h-[160px]"
                >
                  <Icon className="h-6 w-6 text-cyan-400 mb-3" />
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-slate-300 text-sm">{item.text}</p>
                </div>
              </div>
            );
          })}
        </div>

        <p className="text-slate-300 max-w-3xl mx-auto mt-10">
          In this market, reputation and responsiveness are everything. Clients don’t care if you were in a showing;
          they care if you didn’t respond fast enough.
        </p>
      </section>

      {/* ========== FEATURES ========== */}
      <section className="px-6 sm:px-12 md:px-16 lg:px-24 py-24 bg-black text-center">
        {/* Badge */}
        <div className="inline-flex items-center bg-black/30 border border-white/10 rounded-full px-4 py-2 mb-6 text-slate-300 text-sm">
          <Zap className="h-4 w-4 text-cyan-400 mr-2" />
          Built for Million-Dollar Listings
        </div>

        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Automations Designed for Luxury Agents Who Play to Win
        </h2>

        <p className="text-slate-300 max-w-4xl mx-auto mb-10">
          Solryn was built from the ground up for high-end realtors who need speed, personalization, and scalability —
          without compromising client experience.
        </p>

        {/* Feature cards (glow) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              icon: Zap,
              title: "Instant Lead Response AI",
              desc: "Be the first to reply, every time. Within seconds, inquiries are acknowledged and engaged, positioning you as the most responsive agent in the market.",
            },
            {
              icon: MessageSquare,
              title: "Smart Nurture Campaigns",
              desc: "Personalized multi-channel follow-ups across SMS, WhatsApp, and email that feel authentic, not robotic.",
            },
            {
              icon: Users,
              title: "Seamless CRM Integration",
              desc: "Your pipeline updates in real time. No manual data entry, no missed opportunities.",
            },
            {
              icon: Calendar,
              title: "Open House Scheduling",
              desc: "Stop the endless back-and-forth. Solryn auto-schedules showings, syncs calendars, and keeps everyone aligned.",
            },
            {
              icon: Home,
              title: "VIP Client Sequences",
              desc: "Build trust and loyalty with luxury touchpoints that make clients feel like your only priority.",
            },
            {
              icon: CheckCircle,
              title: "Closing Accelerator",
              desc: "Automated reminders, deadline nudges, and deal-specific workflows that help you close faster, smoother, and with less stress.",
            },
          ].map((f, i) => {
            const Icon = f.icon;
            return (
              <div key={i} className="relative group">
                <div className="pointer-events-none absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-0 transition-opacity duration-700 ease-out blur-lg bg-gradient-to-r from-cyan-500 to-emerald-500" />
                <div
                  className="relative p-8 rounded-2xl bg-black/40 border border-white/10 backdrop-blur-md
                              hover:border-cyan-500/40 transition-all duration-700 ease-out hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 text-left min-h-[200px]"
                >
                  <Icon className="h-7 w-7 text-cyan-400 mb-4" />
                  <h3 className="font-semibold mb-2">{f.title}</h3>
                  <p className="text-slate-300 text-sm">{f.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ========== ROI & PROOF ========== */}
      <section className="px-6 sm:px-12 md:px-16 lg:px-24 py-24 bg-black text-center">
        {/* Badge */}
        <div className="inline-flex items-center bg-black/30 border border-white/10 rounded-full px-4 py-2 mb-6 text-slate-300 text-sm">
          <BarChart3 className="h-4 w-4 text-cyan-400 mr-2" />
          Proven Results for Top Realtors
        </div>

        <h2 className="text-3xl md:text-4xl font-bold mb-6">The Results Speak for Themselves</h2>

        <p className="text-slate-300 max-w-3xl mx-auto mb-10">
          Elite agents across the country are transforming their workflows with Solryn.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto text-slate-300 mb-16">
          {[
            "Response time cut from 24 hours → 2 minutes",
            "3× more qualified leads entering your funnel",
            "40% faster closings on luxury deals",
            "15+ hours saved weekly on admin work",
          ].map((stat, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md shadow-lg hover:border-cyan-500/40 hover:shadow-cyan-500/20 transition-all duration-500 hover:scale-105"
            >
              ✅ <span className="text-white font-bold ml-2">{stat}</span>
            </div>
          ))}
        </div>

        <blockquote className="italic text-slate-400 max-w-3xl mx-auto">
          “Before Solryn, I felt like I was always chasing. Showings, paperwork, calls, texts — I couldn’t keep up. By
          the time I returned missed calls, those clients had already moved on. Now, every inquiry is handled instantly,
          my calendar manages itself, and my follow-ups feel personal without me lifting a finger. In just 2 months,
          I’ve closed 4 luxury deals — without hiring another assistant.”
          <br /> <span className="text-cyan-400">— Alexandra W., Luxury Realtor, Los Angeles</span>
        </blockquote>
      </section>

      {/* ========== PRICING ========== */}
      <section className="px-6 sm:px-12 md:px-16 lg:px-24 py-24 bg-black text-center">
        {/* Badge */}
        <div className="inline-flex items-center bg-black/30 border border-white/10 rounded-full px-4 py-2 mb-6 text-slate-300 text-sm">
          <CreditCard className="h-4 w-4 text-cyan-400 mr-2" />
          Custom Systems, Delivered in 72 Hours
        </div>

        <h2 className="text-3xl md:text-4xl font-bold mb-6">Premium Automation Without the Premium Delay</h2>

        <p className="text-slate-300 mb-12 max-w-3xl mx-auto">
        Whether you’re just starting to scale or already managing dozens of listings, we’ll build a tailored system that launches in less than 72 hours.
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {realEstatePlans.map((plan, index) => (
              <div
                key={index}
                className="glass-morphism rounded-3xl p-8 border border-white/10 hover:border-cyan-500/30 transition-all duration-500 hover:scale-105 flex flex-col justify-between"
              >
                <div>
                  <div className="mb-4">
                    <span className="bg-gradient-to-r from-cyan-500 to-emerald-500 text-white text-xs px-3 py-1 rounded-full font-semibold">
                      {plan.badge}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white mb-4">{plan.title}</h3>
                  <p className="text-slate-400 mb-6">{plan.desc}</p>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-white">{plan.price}</span>
                    {plan.monthly && (
                      <span className="block text-slate-400 text-sm mt-1">{plan.monthly} (optional)</span>
                    )}
                  </div>
                </div>
                <button
                  onClick={() => openModal(plan.title, plan.source)} // ✅ passes correct source
                  className="w-full bg-gradient-to-r from-cyan-500 to-emerald-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-cyan-400 hover:to-emerald-400 transition-all duration-300 transform hover:scale-105 shadow-lg mt-4"
                >
                  Request Quote
                </button>
              </div>
            ))}
          </div>

        <p className="mt-12 text-slate-400">Most clients recoup their investment within 60 days.</p>
      </section>

      {/* ========== FINAL CTA ========== */}
      <section className="px-6 sm:px-12 md:px-16 lg:px-24 py-24 text-center bg-black">
        {/* Badge */}
        <div className="inline-flex items-center bg-black/30 border border-white/10 rounded-full px-4 py-2 mb-6 text-slate-300 text-sm">
          <Rocket className="h-4 w-4 text-cyan-400 mr-2" />
          Your Next Closing Awaits
        </div>

        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          One Automation Away From Your Next Million-Dollar Deal
        </h2>

        <p className="max-w-2xl mx-auto text-slate-300 mb-6">
          In luxury real estate, speed and personalization are the difference between winning and losing.
          Solryn ensures you never miss another opportunity — and your clients feel like your only priority.
        </p>

        <button
          className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 text-white font-semibold
                     hover:shadow-cyan-500/25 transition-all duration-700 ease-out hover:scale-105 border border-white/10"
        >
          <div className="flex items-center space-x-3">
            <ArrowRight className="h-5 w-5" />
            <a href="https://calendly.com/atharv-solrynhq/30min" target="_blank" rel="noopener noreferrer">
              <button>Book Strategy Call</button>
            </a>
              </div>              
        </button>
      </section>
    </div>
  );
};

export default HighEndRealEstate;
