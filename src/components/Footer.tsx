import { Mail, Twitter, Linkedin, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbwcfm71jN5fdiqh7_XelJqTou7PBKU8d1wGgFSs4zuaEms-a9ouTx7asjjpXvBWcTTx/exec",
        {
          method: "POST",
          body: new URLSearchParams({ email })
        }
      );

      setSubmitted(true);
      setEmail("");

      setTimeout(() => {
        setSubmitted(false);
      }, 4000);
    } catch (error) {
      console.error("Error submitting newsletter:", error);
    }
  };

  return (
    <footer
      id="footer"
      className="border-t border-white/10 py-20 px-6 sm:px-12 md:px-16 lg:px-24"
      style={{ backgroundColor: '#0A0D10' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <img
                  src="/Web-Icon-Logo.png"
                  alt="Solryn Logo"
                  className="w-16 h-16 object-contain"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full opacity-20 blur-xl"></div>
              </div>
              <span className="font-display text-2xl sm:text-3xl font-bold text-white">Solryn</span>
            </div>

            <p className="text-slate-400 font-light mb-8 max-w-md text-lg leading-relaxed">
              AI Automation for the Real World. Built for teams that want to scale smart, not work harder. We create intelligent automation that feels human and drives real results.
            </p>

            <div className="flex space-x-4">
              <a
                href="https://x.com/SolrynHQ"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-morphism p-4 rounded-2xl transition-all duration-300 border border-white/10 hover:border-cyan-500/50 hover:scale-110 group"
              >
                <Twitter className="h-5 w-5 text-slate-400 group-hover:text-cyan-400 transition-colors" />
              </a>
              <a
                href="https://linkedin.com/company/solryn"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-morphism p-4 rounded-2xl transition-all duration-300 border border-white/10 hover:border-cyan-500/50 hover:scale-110 group"
              >
                <Linkedin className="h-5 w-5 text-slate-400 group-hover:text-cyan-400 transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6 text-white">Quick Links</h4>
            <div className="space-y-4">
              {[
                { name: 'Features', href: '#features' },
                { name: 'How It Works', href: '#how-it-works' },
                { name: 'Pricing', href: '#pricing' },
                { name: 'Use Cases', href: '#use-cases' }
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-slate-400 hover:text-white transition-colors duration-300 group flex items-center space-x-2"
                >
                  <span>{link.name}</span>
                  <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6 text-white">Get in Touch</h4>
            <div className="space-y-6">
              <div className="flex items-center space-x-3 text-slate-400 group">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Mail className="h-5 w-5 text-cyan-400" />
                </div>
                <div>
                  <div className="text-white font-medium">Email us</div>
                  <a
                    href="mailto:atharv@solrynhq.com"
                    className="text-slate-400 hover:text-cyan-400 hover:underline transition-colors duration-300"
                  >
                    atharv@solrynhq.com
                  </a>
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="glass-morphism rounded-2xl p-6 border border-white/10 hover:border-cyan-500/30 transition-all duration-500">
                <h5 className="text-white font-semibold mb-3">Stay Updated</h5>
                <p className="text-slate-400 text-sm mb-4">Get the latest automation tips and updates.</p>
                <div className="flex space-x-2">
                  {submitted ? (
                    <p className="text-green-400 text-lg font-semibold animate-fade-in">
                      ✅ Thanks! You're subscribed.
                    </p>
                  ) : (
                    <form
                      onSubmit={handleNewsletterSubmit}
                      className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto"
                    >
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                        className="flex-1 glass-morphism border border-white/10 rounded-xl px-3 py-3 text-black placeholder-slate-400 focus:outline-none focus:border-cyan-500/50 transition-colors"
                      />
                      <button
                        type="submit"
                        className="bg-gradient-to-r from-cyan-500 to-emerald-500 text-white p-2 rounded-xl hover:scale-105 transition-transform duration-300 justify-center max-w-md mx-auto"
                      >
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Back to Top */}
        <div className="flex justify-center mb-6">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white px-4 py-2 rounded-full hover:scale-105 transition-all duration-300 shadow-lg"
          >
            <ArrowRight className="h-4 w-4 rotate-[-90deg]" />
            <span>Back to Top</span>
          </button>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-slate-500 font-light text-center md:text-left">
            © 2025 Solryn. All rights reserved.
          </div>

          <div className="flex items-center space-x-6 text-sm">
            <a href="#" className="text-slate-400 hover:text-white transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors duration-300">
              Terms of Service
            </a>
          </div>

          <div className="text-slate-400 font-medium text-center md:text-right">
            <span className="text-gradient-premium">
              AI Automation for the real world
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
