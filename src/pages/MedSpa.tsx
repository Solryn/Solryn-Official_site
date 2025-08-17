import { useModal } from "../contexts/ModalContext";
import {
  Sparkles, CheckCircle, XCircle, ArrowRight, Users, Calendar, Zap, Star,
  AlertCircle, BarChart3, CreditCard, Rocket, MessageSquare, Lock, TrendingUp, ClipboardList
} from "lucide-react";

export default function MedSpa() {
  const { openModal } = useModal();

  return (
    <div className="bg-[#0A0D10] text-white">
      {/* Hero */}
      <section className="relative w-full h-[95vh] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover hidden md:block">
          <source src="/PagesAnimation.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 w-full h-full bg-cover bg-center md:hidden" style={{ backgroundImage: "url('/medspa-fallback.jpg')" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80"></div>

        {/* Content */}
        <div className="relative z-10 text-center max-w-4xl px-6">
          <div className="inline-flex items-center bg-black/30 border border-white/10 rounded-full px-4 py-2 mb-6 text-slate-300 text-sm">
            <Sparkles className="h-4 w-4 text-cyan-400 mr-2" /> AI Automation for Med Spas
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
            Book More Clients. Reduce No‑Shows. <br />
            <span className="text-gradient-premium">Deliver a VIP Experience at Scale.</span>
          </h1>

          <p className="text-lg text-slate-300 mb-8">
            High-end clients don’t wait on hold. Solryn turns your med spa into a 24/7 concierge:
            instant replies, frictionless bookings, and thoughtful follow‑ups that drive repeat visits —
            <span className="text-white font-semibold"> live in 72 hours or less</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => openModal("Book Strategy Call", "Med Spa")}
              className="bg-gradient-to-r from-cyan-500 to-emerald-500 text-white px-8 py-4 rounded-xl 
                         font-semibold shadow-lg  hover:shadow-cyan-500/25 transition transition-all duration-500 hover:scale-105"
            >
              Book My Free Strategy Call
            </button>

            <button
              onClick={() => openModal("Get Free Automation Blueprint", "Blueprint - Med Spa")}
              className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-xl 
                         font-semibold hover:bg-cyan-500/10 transition-all duration-500 hover:scale-105"
            >
              Get My Free Automation Blueprint
            </button>
          </div>
        </div>
      </section>

      {/* Problem & Solution (Story) */}
      <section className="px-6 sm:px-12 md:px-16 lg:px-24 py-24 bg-black">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-black/30 border border-white/10 rounded-full 
                          px-4 py-2 mb-6 text-slate-300 text-sm">
            <AlertCircle className="h-4 w-4 text-red-400 mr-2" /> Why Traditional Med Spa Ops Leak Revenue
          </div>
          <h2 className="text-3xl font-bold mb-4">Every Missed Call is a Lost Treatment — and a Lost Relationship</h2>
          <p className="text-slate-400 max-w-3xl mx-auto">
            Your front desk is juggling phones, DMs, confirmations, reschedules, and post‑care questions.
            By the time someone calls back, the client has already booked elsewhere. No‑shows hit margins,
            staff burn out, and your premium brand takes the blame for a process problem.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Challenge */}
          <div className="p-8 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl 
                          shadow-lg hover:border-cyan-500/40 hover:shadow-cyan-500/20 transition-all duration-500 hover:scale-105">
            <h3 className="text-xl font-semibold mb-4 text-white">The Challenge</h3>
            <ul className="space-y-4 text-slate-300">
              <li className="flex items-start"><XCircle className="h-6 w-6 text-red-400 mr-3 mt-1"/> Missed calls & late replies = lost clients (especially high‑intent, high‑ticket services).</li>
              <li className="flex items-start"><XCircle className="h-6 w-6 text-red-400 mr-3 mt-1"/> No‑shows and last‑minute reschedules crush daily utilization and revenue.</li>
              <li className="flex items-start"><XCircle className="h-6 w-6 text-red-400 mr-3 mt-1"/> Admin overload steals hours from upselling, client care, and reviews.</li>
              <li className="flex items-start"><XCircle className="h-6 w-6 text-red-400 mr-3 mt-1"/> Inconsistent follow‑ups mean fewer repeat visits and lower lifetime value.</li>
            </ul>
          </div>

          {/* Solution */}
          <div className="p-8 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl 
                          shadow-lg hover:border-cyan-500/40 hover:shadow-cyan-500/20 transition-all duration-500 hover:scale-105">
            <h3 className="text-xl font-semibold mb-4 text-white">Our Solution</h3>
            <ul className="space-y-4 text-slate-300">
              <li className="flex items-start"><CheckCircle className="h-6 w-6 text-cyan-400 mr-3 mt-1"/> 24/7 concierge replies via SMS, WhatsApp, and email — always first to respond.</li>
              <li className="flex items-start"><CheckCircle className="h-6 w-6 text-cyan-400 mr-3 mt-1"/> Automated booking, confirmations, and smart reminders that slash no‑shows.</li>
              <li className="flex items-start"><CheckCircle className="h-6 w-6 text-cyan-400 mr-3 mt-1"/> Post‑visit nurture & upsell flows (e.g., facial → injectables, laser → maintenance).</li>
              <li className="flex items-start"><CheckCircle className="h-6 w-6 text-cyan-400 mr-3 mt-1"/> Seamless CRM/booking sync and secure data handling for a true VIP experience.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Visual Workflow */}
      <section className="px-6 sm:px-12 md:px-16 lg:px-24 py-24 bg-black">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-black/30 border border-white/10 rounded-full 
                          px-4 py-2 mb-6 text-slate-300 text-sm">
            <MessageSquare className="h-4 w-4 text-cyan-400 mr-2" /> The VIP Client Journey (Automated)
          </div>
          <h2 className="text-3xl font-bold mb-4">From First DM to Loyal Client — In One Seamless Flow</h2>
          <p className="text-slate-400 max-w-3xl mx-auto">
            We map your entire client journey: instant response → booking → reminders → treatment → follow‑up → review → upsell.
            The system runs quietly in the background, while your team focuses on experience.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10">
          {/* Diagram Card */}
          <div className="relative p-6 md:p-8 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl 
                          shadow-lg hover:border-cyan-500/40 hover:shadow-cyan-500/20 transition-all duration-500 hover:scale-105">
            <div className="grid grid-cols-1 gap-4 text-slate-300">
              {[
                { step: "Lead Inquiry", desc: "Client messages via Instagram, website form, or SMS." },
                { step: "Instant Reply (≤30s)", desc: "AI concierge answers questions and offers times." },
                { step: "Booking & Confirmation", desc: "Calendar sync with deposits if required." },
                { step: "Smart Reminders", desc: "No‑show slashed with SMS + WhatsApp nudges." },
                { step: "Post‑Care & Review", desc: "Personalized aftercare + review request at the right moment." },
                { step: "Upsell & Loyalty", desc: "Tailored offers (membership, packages, add‑ons) at ideal intervals." },
              ].map((row, i) => (
                <div key={i} className="flex items-start">
                  <span className="mr-3 mt-1">
                    <CheckCircle className="h-5 w-5 text-cyan-400" />
                  </span>
                  <div>
                    <p className="text-white font-semibold">{row.step}</p>
                    <p className="text-slate-400 text-sm">{row.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Card with overlay (use your GIF/image assets) */}
          <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-black/40 backdrop-blur-xl 
                          shadow-lg hover:border-cyan-500/40 hover:shadow-cyan-500/20 transition-all transition-all duration-500 hover:scale-105">
            <img
              src="/workflow-medspa.png"
              alt="Med Spa Automation Workflow"
              className="w-full h-[360px] object-cover opacity-90"
            />
            <img
              src="/chatbot-overlay.gif"
              alt="Chatbot Overlay"
              className="absolute bottom-4 right-4 w-40 h-28 object-contain rounded-xl border border-white/10 shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 pointer-events-none"></div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 sm:px-12 md:px-16 lg:px-24 py-24 bg-black">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-black/30 border border-white/10 rounded-full 
                          px-4 py-2 mb-6 text-slate-300 text-sm">
            <TrendingUp className="h-4 w-4 text-cyan-400 mr-2" /> Built for Luxury Med Spas
          </div>
          <h2 className="text-3xl font-bold mb-4">Automations That Drive Bookings and Loyalty</h2>
          <p className="text-slate-400 max-w-3xl mx-auto">
            Every feature is tuned for premium clientele: speed, personalization, and brand‑consistent messaging
            that turns first‑timers into regulars.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { icon: Users, title: "VIP Lead Nurturing", desc: "Instant, on‑brand replies 24/7 — even at 11pm — so you’re always first to respond." },
            { icon: Calendar, title: "No‑Show Slayer", desc: "Deposits + smart multi‑channel reminders reduce no‑shows by 30–50%." },
            { icon: Star, title: "Upsell & Retain", desc: "Post‑visit offers timed to treatment cycles boost repeat visits and package sales." },
            { icon: Zap, title: "Campaign Triggers", desc: "React to events: birthday promos, expiring packages, consult follow‑ups." },
            { icon: ClipboardList, title: "Smart Intake", desc: "Collect pre‑visit details & contraindications so providers start ready." },
            { icon: Lock, title: "Secure Integrations", desc: "Syncs with your booking/CRM stack; data handled with strict controls." },
          ].map((f, i) => {
            const Icon = f.icon as any;
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

      {/* Results & Case Study */}
      <section className="px-6 sm:px-12 md:px-16 lg:px-24 py-24 bg-black text-center">
        <div className="inline-flex items-center bg-black/30 border border-white/10 rounded-full 
                        px-4 py-2 mb-6 text-slate-300 text-sm">
          <BarChart3 className="h-4 w-4 text-cyan-400 mr-2" /> Proven Revenue & Retention Lift
        </div>
        <h2 className="text-3xl font-bold mb-6">What Happens When Your Spa Answers in Seconds</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto text-slate-300 mb-12">
          {[
            "Bookings up 30–50% in 60 days",
            "No‑shows down by up to 45%",
            "20–35 hours saved monthly per location",
            "Higher tips & reviews via timely post‑care"
          ].map((stat, i) => (
            <div key={i} className="p-6 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl 
                                    shadow-lg hover:border-cyan-500/40 hover:shadow-cyan-500/20 transition-all duration-500 hover:scale-105">
              ✅ <span className="text-white font-bold">{stat}</span>
            </div>
          ))}
        </div>

        <blockquote className="italic text-slate-400 max-w-3xl mx-auto">
          “We went from chasing leads to watching our calendar fill itself. Automation handles replies,
          reminders, and post‑care — my team finally focuses on clients. Bookings are up 40% in two months,
          without hiring.”  
          <br /> <span className="text-cyan-400">— Alicia M., Med Spa Owner</span>
        </blockquote>
      </section>

      {/* Comparison Grid */}
      <section className="px-6 sm:px-12 md:px-16 lg:px-24 py-24 bg-black">
        <h2 className="text-3xl font-bold text-center mb-10">Without Automation vs With Solryn</h2>
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Without */}
          <div className="p-8 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl 
                                      shadow-lg hover:border-cyan-500/40 hover:shadow-cyan-500/20 transition-all duration-500 hover:scale-105">
            <h3 className="font-semibold text-white mb-4">Without Automation</h3>
            <ul className="space-y-3 text-slate-300">
              <li className="flex"><XCircle className="h-5 w-5 text-red-400 mr-2 mt-1" /> Missed calls, slow DMs, lost high‑intent clients</li>
              <li className="flex"><XCircle className="h-5 w-5 text-red-400 mr-2 mt-1" /> No‑shows, double bookings, last‑minute chaos</li>
              <li className="flex"><XCircle className="h-5 w-5 text-red-400 mr-2 mt-1" /> Staff buried in admin instead of client care</li>
              <li className="flex"><XCircle className="h-5 w-5 text-red-400 mr-2 mt-1" /> Inconsistent follow‑ups and fewer repeat visits</li>
            </ul>
          </div>
          {/* With */}
          <div className="p-8 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl shadow-lg hover:border-cyan-500/40 hover:shadow-cyan-500/20 transition-all duration-500 hover:scale-105">
            <h3 className="font-semibold text-white mb-4">With Solryn</h3>
            <ul className="space-y-3 text-slate-300">
              <li className="flex"><CheckCircle className="h-5 w-5 text-cyan-400 mr-2 mt-1" /> Instant responses that capture more bookings</li>
              <li className="flex"><CheckCircle className="h-5 w-5 text-cyan-400 mr-2 mt-1" /> Smart reminders cut no‑shows dramatically</li>
              <li className="flex"><CheckCircle className="h-5 w-5 text-cyan-400 mr-2 mt-1" /> Team focuses on service, not spreadsheets</li>
              <li className="flex"><CheckCircle className="h-5 w-5 text-cyan-400 mr-2 mt-1" /> Timed upsells & loyalty flows increase LTV</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="px-6 sm:px-12 md:px-16 lg:px-24 py-24 bg-black text-center">
        <div className="inline-flex items-center bg-black/30 border border-white/10 rounded-full 
                        px-4 py-2 mb-6 text-slate-300 text-sm">
          <CreditCard className="h-4 w-4 text-cyan-400 mr-2" /> Custom Systems, Delivered in 72 Hours
        </div>
        <h2 className="text-3xl font-bold mb-4">Pricing Snapshot</h2>
        <p className="text-slate-400 mb-12">
          For less than a part‑time receptionist, get a 24/7 AI system that never misses a lead and never forgets a follow‑up.
        </p>

        <div className="grid sm:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { name: "Starter Automation", price: "$1,000 + $500/mo", desc: "Lead capture, instant replies, confirmations & reminders" },
            { name: "Advanced Automation", price: "$1,800 + $800/mo", desc: "Multi‑channel nurture, post‑care flows, timed upsells" },
            { name: "VIP Custom Systems", price: "$2,800 + $1,200/mo", desc: "End‑to‑end journey, deposits, campaigns, analytics" },
          ].map((p, i) => (
            <div key={i} className="p-8 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl 
                                    shadow-lg hover:border-cyan-500/40 hover:shadow-cyan-500/20 transition-all duration-500 hover:scale-105">
              <h3 className="font-semibold text-xl mb-2">{p.name}</h3>
              <p className="text-cyan-400 font-bold mb-4">{p.price}</p>
              <p className="text-slate-400 mb-6">{p.desc}</p>
              <button
                onClick={() => openModal("Book Strategy Call", "Med Spa")}
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
          <Rocket className="h-4 w-4 text-cyan-400 mr-2" /> Your Next 50 Bookings Are Waiting
        </div>
        <h2 className="text-3xl font-bold mb-6">Make Your Med Spa the Obvious Choice</h2>
        <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
          Give clients the experience they expect — fast, clear, and personal — while your team gets hours back.
          We’ll build your automation system and launch it in days, not months.
        </p>
        <button
          onClick={() => openModal("Book Strategy Call", "Med Spa")}
          className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-xl 
                     font-semibold shadow-lg hover:shadow-pink-500/25 transition flex items-center mx-auto transition-all duration-500 hover:scale-105"
        >
          Book My Free Strategy Call <ArrowRight className="ml-2 h-5 w-5" />
        </button>
      </section>
    </div>
  );
}
