import { 
  CheckCircle, Zap, Clock, Home, Calendar, 
  MessageSquare, Users, XCircle, ArrowRight, 
  Sparkles, AlertCircle, BarChart3, CreditCard, Rocket 
} from "lucide-react";
import { useModal } from "../contexts/ModalContext";
import React from "react";

export default function HighEndRealEstate() {
  const { openModal } = useModal();

  return (
    <div className="bg-[#0A0D10] text-white">
      {/* Hero */}
      <section className="relative w-full h-[95vh] flex items-center justify-center overflow-hidden">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover hidden md:block">
          <source src="/PagesAnimation.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 w-full h-full bg-cover bg-center md:hidden" style={{ backgroundImage: "url('/realestate-fallback.jpg')" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80"></div>

        <div className="relative z-10 text-center max-w-4xl px-6">
          <div className="inline-flex items-center bg-black/30 border border-white/10 rounded-full px-4 py-2 mb-6 text-slate-300 text-sm">
            <Sparkles className="h-4 w-4 text-cyan-400 mr-2" /> AI Automation for Real Estate
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
            Sell Luxury, Close Faster - <br />
            <span className="text-gradient-premium">AI-Powered Real Estate Automation</span>
          </h1>
          <p className="text-lg text-slate-300 mb-8">
            In luxury real estate, every second counts. Solryn helps elite realtors capture, qualify, 
            and nurture leads instantly — without losing the personal touch high-net-worth clients expect.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => openModal("Book Strategy Call", "High-End Real Estate")}
              className="bg-gradient-to-r from-cyan-500 to-emerald-500 text-white px-8 py-4 rounded-xl 
                         font-semibold shadow-lg  hover:shadow-cyan-500/25 transition transition-all duration-500 hover:scale-105"
            >
              Book My Free Strategy Call
            </button>
            <button
              onClick={() => openModal("Get Free Automation Blueprint", "Blueprint - High-End Real Estate")}
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
            <AlertCircle className="h-4 w-4 text-red-400 mr-2" /> Why Traditional Real Estate Workflows Fail
          </div>
          <h2 className="text-5xl font-bold mb-4">The Luxury Market Moves Fast — Are You Keeping Up?</h2>
          <p className="text-slate-400 max-w-4xl mx-auto">
            Every unanswered call, every delayed follow-up, every admin task steals time from what matters most: closing million-dollar deals.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Challenge */}
          <div className="p-8 rounded-3xl border border-white/10 bg-black/40 backdrop-blur-xl 
                          shadow-lg hover:border-cyan-500/40 hover:shadow-cyan-500/20 transition-all duration-500 hover:scale-105">
            <h3 className="text-xl font-semibold mb-4 text-white">The Challenge</h3>
            <ul className="space-y-4 text-slate-300">
              <li className="flex items-start"><XCircle className="h-6 w-6 text-red-400 mr-3 mt-1"/> Calls and texts arrive while you’re stuck in showings.</li>
              <li className="flex items-start"><XCircle className="h-6 w-6 text-red-400 mr-3 mt-1"/> High-value leads demand personal attention, but there aren’t enough hours in the day.</li>
              <li className="flex items-start"><XCircle className="h-6 w-6 text-red-400 mr-3 mt-1"/> Follow-ups pile up, and by the time you get back, the client has already signed with another agent.</li>
              <li className="flex items-start"><XCircle className="h-6 w-6 text-red-400 mr-3 mt-1"/> Every delay, every unanswered message can cost six or seven figures.</li>
            </ul>
          </div>
          {/* Solution */}
          <div className="p-8 rounded-3xl border border-white/10 bg-black/40 backdrop-blur-xl 
                          shadow-lg hover:border-cyan-500/40 hover:shadow-cyan-500/20 transition-all duration-500 hover:scale-105">
            <h3 className="text-xl font-semibold mb-4 text-white">Our Solution</h3>
            <ul className="space-y-4 text-slate-300">
              <li className="flex items-start"><CheckCircle className="h-6 w-6 text-cyan-400 mr-3 mt-1"/> Replies within 2 minutes, 24/7</li>
              <li className="flex items-start"><CheckCircle className="h-6 w-6 text-cyan-400 mr-3 mt-1"/> Smart, personalized follow-ups via SMS, WhatsApp, and email</li>
              <li className="flex items-start"><CheckCircle className="h-6 w-6 text-cyan-400 mr-3 mt-1"/> Seamless CRM & calendar sync</li>
              <li className="flex items-start"><CheckCircle className="h-6 w-6 text-cyan-400 mr-3 mt-1"/> Auto-scheduled showings & open houses</li>
              <li className="flex items-start"><CheckCircle className="h-6 w-6 text-cyan-400 mr-3 mt-1"/> Post-viewing nurture campaigns</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 sm:px-12 md:px-16 lg:px-24 py-24 bg-black">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-black/30 border border-white/10 rounded-full 
                          px-4 py-2 mb-6 text-slate-300 text-sm">
            <Zap className="h-4 w-4 text-cyan-400 mr-2" /> Built for Million-Dollar Listings
          </div>
          <h2 className="text-5xl font-bold mb-4">Automations Built for Million-Dollar Listings</h2>
          <p className="text-slate-400 max-w-4xl mx-auto">
            Every feature is designed for luxury agents who need speed, personalization, and seamless scaling.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { icon: Zap, title: "Instant Lead Response AI", desc: "Responds to inquiries within seconds — always first to respond." },
            { icon: MessageSquare, title: "Smart Nurture Campaigns", desc: "Follow-ups that feel human — not robotic — across SMS, WhatsApp, and email." },
            { icon: Users, title: "CRM Integration", desc: "Keeps your pipeline updated automatically so no lead slips through." },
            { icon: Calendar, title: "Open House Scheduling", desc: "Syncs with your calendar, eliminating endless back-and-forth." },
            { icon: Home, title: "VIP Client Sequences", desc: "Exclusive touchpoints that build trust and long-term relationships." },
            { icon: Clock, title: "Closing Accelerator", desc: "Automated reminders and deadline nudges that push deals over the line." },
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
          <BarChart3 className="h-4 w-4 text-cyan-400 mr-2" /> Proven Results for Top Realtors
        </div>
        <h2 className="text-5xl font-bold mb-6">The Results Speak for Themselves<br></br><br></br></h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto text-slate-300 mb-16">
          {[
            "Response time: 24 hrs → 2 mins",
            "3× more qualified leads in your funnel",
            "40% faster closings on luxury deals",
            "15+ hours saved weekly on admin work"
          ].map((stat, i) => (
            <div key={i} className="p-6 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl 
                                    shadow-lg hover:border-cyan-500/40 hover:shadow-cyan-500/20 transition-all duration-500 hover:scale-105">
              ✅ <span className="text-white font-bold">{stat}</span>
            </div>
          ))}
        </div>
        <blockquote className="italic text-slate-400 max-w-3xl mx-auto">
          “Before Solryn, I was constantly behind. I’d finish a showing and see a dozen missed calls. 
          Now, every inquiry is handled instantly, and my calendar fills itself. 
          I’ve closed 4 luxury deals in 2 months — and I didn’t add a single assistant.”  
          <br /> <span className="text-cyan-400">— Alexandra W., Luxury Realtor, Los Angeles</span>
        </blockquote>
      </section>

      {/* Pricing */}
      <section className="px-6 sm:px-12 md:px-16 lg:px-24 py-24 bg-black text-center">
        <div className="inline-flex items-center bg-black/30 border border-white/10 rounded-full 
                        px-4 py-2 mb-6 text-slate-300 text-sm">
          <CreditCard className="h-4 w-4 text-cyan-400 mr-2" /> Custom Systems, Delivered in 72 Hours
        </div>
        <h2 className="text-5xl font-bold mb-4">Pricing Snapshot</h2>
        <p className="text-1xl text-slate-400 mb-12">
          Custom automation systems for real estate — live in <span className="text-white font-semibold">72 hours or less</span>.
        </p>
        <div className="grid sm:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { name: "Starter Automation", price: "$1,800 + $800/mo", desc: "Lead response + basic follow-ups" },
            { name: "Advanced Automation", price: "$2,500 + $1,200/mo", desc: "Multi-channel nurture + scheduling" },
            { name: "VIP Concierge Systems", price: "$5,000 + $2,000/mo", desc: "End-to-end luxury automation + concierge flows" },
          ].map((p, i) => (
            <div key={i} className="p-8 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl 
                                    shadow-lg hover:border-cyan-500/40 hover:shadow-cyan-500/20 hover:scale-105 transition-all duration-500 hover:scale-105">
              <h3 className="font-semibold text-xl mb-2">{p.name}</h3>
              <p className="text-cyan-400 font-bold mb-4">{p.price}</p>
              <p className="text-slate-400 mb-6">{p.desc}</p>
              <button
                onClick={() => openModal("Book Strategy Call", "High-End Real Estate")}
                className="bg-gradient-to-r from-cyan-500 to-emerald-500 text-white px-8 py-4 
                           rounded-xl font-semibold shadow-lg hover:scale-105 hover:shadow-cyan-500/25 transition"
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
          <Rocket className="h-4 w-4 text-cyan-400 mr-2" /> Your Next Closing Awaits
        </div>
        <h2 className="text-5xl font-bold mb-6">Your Next Closing Is Just One Automation Away</h2>
        <p className="text-slate-400 mb-8 max-w-3xl mx-auto">
          In luxury real estate, speed wins. Every inquiry, every follow-up, every client touchpoint matters. 
          Solryn ensures you never miss a beat — and your clients feel like they’re your only priority.
        </p>
        <button
          onClick={() => openModal("Book Strategy Call", "High-End Real Estate")}
          className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-xl 
                     font-semibold shadow-lg hover:shadow-pink-500/25 transition flex items-center mx-auto transition-all duration-500 hover:scale-105"
        >
          Book Your Free Automation Blueprint <ArrowRight className="ml-2 h-5 w-5" />
        </button>
      </section>
    </div>
  );
}