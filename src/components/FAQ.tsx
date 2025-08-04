import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What Do You mean by Automation Blueprint?",
      answer: "We analyze your business workflows and show you exactly how AI can handle repetitive tasks. It’s a free, customized plan for saving time and growing revenue."
    },
    {
      question: "What can you automate for my business?",
      answer: "We automate lead capture, FAQs, appointment flows, emails, reports, CRM syncs, and more — tailored to your workflow."
    },
    {
      question: "Do I need to know how to code?",
      answer: "Not at all. We build and integrate everything for you. Just tell us your pain points — we handle the rest."
    },
    {
      question: "How quickly can I get started?",
      answer: "We deliver your first automation or chatbot in under 72 hours."
    },
    {
      question: "What tools do you use?",
      answer: "OpenAI, Make, Voiceflow, Google Workspace, Vapi, Notion, Zapier, Bland and any tools your business already uses."
    }
     
  ];

  return (
    <section className="relative py-24 overflow-hidden" style={{ backgroundColor: '#0A0D10' }}>
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none z-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(34, 211, 238, 0.1) 1px, transparent 0)',
            backgroundSize: '60px 60px',
            animation: 'float 20s ease-in-out infinite'
          }}
        ></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-slate-400 font-light">
            Everything you need to know about Solryn AI chatbots.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-black/10 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden hover:border-cyan-500/50 transition-all duration-300"
            >
              <button
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-slate-800/20 transition-colors duration-300"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <h3 className="text-lg font-semibold text-white pr-4">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-cyan-400 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-slate-400 flex-shrink-0" />
                )}
              </button>

              {openIndex === index && (
                <div className="px-8 pb-6">
                  <p className="text-slate-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;