import { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, ArrowRight } from 'lucide-react';
import React from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [visibleFaqs, setVisibleFaqs] = useState<number[]>([]);

  const faqs = [
    {
      question: "What Do You mean by Automation Blueprint?",
      answer: "We analyze your business workflows and show you exactly how AI can handle repetitive tasks. It's a free, customized plan for saving time and growing revenue."
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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setTimeout(() => {
              setVisibleFaqs(prev => [...prev, index]);
            }, index * 100);
          }
        });
      },
      { threshold: 0.3 }
    );

    const elements = document.querySelectorAll('.faq-item');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative py-20 overflow-hidden px-6 sm:px-12 md:px-16 lg:px-24" style={{ backgroundColor: '#0A0D10' }}>
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

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-black/20 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 text-sm text-slate-300 mb-6">
            <HelpCircle className="h-4 w-4 text-cyan-400" />
            <span>Got Questions?</span>
          </div>
          
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6">
            Frequently Asked
            <span className="block text-gradient-premium mt-2">Questions</span>
          </h2>
          
          <p className="text-lg sm:text-xl text-slate-400 leading-relaxed">
            Everything you need to know about Solryn AI automation.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item glass-morphism rounded-2xl border border-white/10 overflow-hidden hover:border-cyan-500/30 transition-all duration-500 animate-on-scroll ${
                visibleFaqs.includes(index) ? 'animate-in' : ''
              }`}
              data-index={index}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <button
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-300 group"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <h3 className="font-display text-lg font-semibold text-white pr-4 group-hover:text-cyan-400 transition-colors duration-300">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-cyan-400 transition-transform duration-300" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-slate-400 group-hover:text-cyan-400 transition-colors duration-300" />
                  )}
                </div>
              </button>

              <div className={`transition-all duration-500 ease-in-out ${
                openIndex === index 
                  ? 'max-h-96 opacity-100' 
                  : 'max-h-0 opacity-0'
              } overflow-hidden`}>
                <div className="px-8 pb-6 border-t border-white/10">
                  <p className="text-slate-300 leading-relaxed pt-4 text-lg">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="glass-morphism rounded-2xl p-8 border border-white/10 hover:border-cyan-500/30 transition-all duration-300">
            <h3 className="font-display text-2xl font-bold text-white mb-4">Still have questions?</h3>
            <p className="text-slate-400 mb-6">Get in touch with our team for personalized answers.</p>
            <div className="w-full flex justify-center">
              <a
                href="mailto:hello@solrynhq.com"
                className="inline-flex items-center px-5 py-3 rounded-xl bg-white/10 border border-white/20 text-white"
              >
                Contact Our Team
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;