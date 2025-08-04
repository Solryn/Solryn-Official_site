import React from 'react';
import { Bot, Mail, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="footer" className="border-t border-white/10 py-16" style={{ backgroundColor: '#0A0D10' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/Web-Logo-Solryn.png" 
                alt="Solryn Logo" 
                className="w-10 h-10 object-contain"
              />
              <span className="text-2xl font-bold text-white tracking-tight">Solryn</span>
            </div>
            <p className="text-slate-400 font-light mb-8 max-w-md text-lg leading-relaxed">
              AI Automation for the Real World. Built for teams that want to scale smart, not work harder. We create intelligent automation that feels human and drives real results.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://x.com/SolrynHQ" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="glass-morphism p-3 rounded-xl transition-all duration-300 border border-white/10 hover:border-cyan-500/50 hover:scale-105 hover:glow-cyan"
              >
                <Twitter className="h-5 w-5 text-slate-400 hover:text-white transition-colors" />
              </a>
              <a 
                href="https://linkedin.com/company/solryn" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="glass-morphism p-3 rounded-xl transition-all duration-300 border border-white/10 hover:border-cyan-500/50 hover:scale-105 hover:glow-cyan"
              >
                <Linkedin className="h-5 w-5 text-slate-400 hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Get in Touch</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-slate-400">
                <Mail className="h-5 w-5 text-cyan-400" />
                <span className="font-medium">atharv@solrynhq.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-slate-500 font-light mb-4 md:mb-0">
            © 2025 Solryn. All rights reserved.
          </div>
          <div className="text-slate-400 font-medium">
            Solryn — AI Automation for the real world. Built For teams that want to Scale Smart, not work Harder
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;