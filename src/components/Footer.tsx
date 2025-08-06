import { Mail, Twitter, Linkedin, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="footer" className="border-t border-white/10 py-20 px-6 sm:px-12 md:px-16 lg:px-24" style={{ backgroundColor: '#0A0D10' }}>
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
                  <div className="text-slate-400">atharv@solrynhq.com</div>
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="glass-morphism rounded-2xl p-6 border border-white/10">
                <h5 className="text-white font-semibold mb-3">Stay Updated</h5>
                <p className="text-slate-400 text-sm mb-4">Get the latest automation tips and updates.</p>
                <div className="flex space-x-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 bg-black/20 border border-white/10 rounded-xl px-4 py-2 text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500/50 transition-colors text-sm"
                  />
                  <button className="bg-gradient-to-r from-cyan-500 to-emerald-500 text-white p-2 rounded-xl hover:scale-105 transition-transform duration-300">
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-slate-500 font-light text-center md:text-left">
            © 2025 Solryn. All rights reserved.
          </div>
          
          <div className="flex items-center space-x-6 text-sm">
            <a href="#" className="text-slate-400 hover:text-white transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors duration-300">Terms of Service</a>
          </div>
          
          <div className="text-slate-400 font-medium text-center md:text-right">
            <span className="text-gradient-premium">AI Automation for the real world</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;