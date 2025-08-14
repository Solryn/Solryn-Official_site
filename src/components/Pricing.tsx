import { Zap } from 'lucide-react';
import { useModal } from '../contexts/ModalContext';

const Pricing = () => {
  const { openModal } = useModal();

  const plans = [
    {
      title: "Starter Automation",
      badge: "72 HRS DELIVERY",
      price: "$1,000",
      monthly: "$500/mo",
      desc: "Perfect for small teams that need fast wins. Automates one core workflow (like lead follow-ups, form submissions, or appointment reminders) so you can focus on higher-value work. Delivered in 72 hours.",
      source: "Pricing - Starter Automation"
    },
    {
      title: "Advanced Automation",
      badge: "72 HRS DELIVERY",
      price: "$1,800",
      monthly: "$800/mo",
      desc: "Multi-channel, multi-step workflows tailored to your sales or service pipeline. From CRM updates to cross-channel nurturing, your process runs like clockwork. Delivered in 72 hours.",
      source: "Pricing - Advanced Automation"
    },
    {
      title: "Premium AI System",
      badge: "4–7 DAYS DELIVERY",
      price: "$3,000",
      monthly: "$1,500/mo",
      desc: "AI voice agents, intelligent chatbots, and CRM-integrated sales pipelines — all in one system. Handles customer conversations, schedules, and follow-ups 24/7. Delivery: 4–7 days.",
      source: "Pricing - Premium AI System"
    },
    {
      title: "Custom AI Generators",
      badge: "72 HRS DELIVERY",
      price: "$2,000",
      monthly: "$1,000/mo",
      desc: " Bespoke AI engines for your business — from proposal generators to content repurposing systems to hyper-personalized sales icebreakers. Delivered in 72 hours.",
      source: "Pricing - Custom AI Generators"
    },
    {
      title: "Performance-Driven Automation",
      badge: "4–7 DAYS DELIVERY",
      price: "$2,500 or 10–20% revenue share",
      desc: " Lead-gen engines, appointment setters, and AI sales assistants designed to generate direct revenue. We only win when you do. Delivery: 4–7 days.",
      source: "Pricing - Performance Automation"
    },
    {
      title: "Add-On Workflow",
      badge: "48 HRS DELIVERY",
      price: "$300–$500",
      desc: " Small but impactful improvements to existing automations — new triggers, integrations, or optimizations. Delivered in 48 hours.",
      source: "Pricing - Add-On Workflow"
    },
    {
      title: "Rush Delivery Upgrade",
      badge: "24–48 HRS DELIVERY",
      price: "+20–30% surcharge",
      desc: "Need it yesterday? Move to the front of the line with 24–48 hour delivery.",
      source: "Pricing - Rush Delivery"
    }
  ];

  return (
    <section id="pricing" className="py-20 px-6 sm:px-12 md:px-16 lg:px-24" style={{ backgroundColor: '#0A0D10' }}>
      <div className="max-w-7xl mx-auto text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-black/20 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 text-sm text-slate-300 mb-6">
                <Zap className="h-4 w-4 text-cyan-400" />
                <span>Pricing Plans Built For Real World</span>
          </div>
        <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-white mb-4">
          AI Automation, Built for the Real World -<br></br> Delivered in Days, Not Months.<br></br>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Get Scalable, Human-like Automations Custom-Built to your Workflows in as a little as 72 Hours<br></br><br></br>
        </p>
        <p className="text-2xl text-slate-400 max-w-7xl mx-auto">
          You don't need another Bloated SaaS Tool.<br></br> You need an Automation Partner that Understands your Business,<br></br> Moves fast, and delivers measurable Results - Without the endless trial and error.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {plans.map((plan, index) => (
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

      <div className="text-center mt-12 text-slate-500 text-sm">
      Don’t wait for “someday.” Every day you delay automating, you’re losing leads, time, and revenue. Book your free strategy call and get your first automation live this week.

      </div>
    </section>
  );
};

export default Pricing;
