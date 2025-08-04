import React from 'react';
import { Mail, Linkedin, Twitter, ArrowRight } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
          Get Started
        </h2>
        
        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
          Ready to transform your customer support? Let's discuss how AI automation can work for your business.
        </p>

        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border border-gray-700 mb-12">
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-14 h-14 rounded-xl flex items-center justify-center">
              <Mail className="h-7 w-7 text-white" />
            </div>
            <div className="text-left">
              <div className="text-gray-400 text-sm">Contact us</div>
              <div className="text-2xl font-semibold text-white">atharv@solrynhq.com</div>
            </div>
          </div>

          <button className="group bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-10 py-4 rounded-full text-lg font-semibold hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center space-x-3 mx-auto">
            <span>Request Demo</span>
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="flex justify-center space-x-6">
          <a href="#" className="bg-gray-800 p-4 rounded-xl hover:bg-gray-700 transition-colors border border-gray-700 hover:border-cyan-500/50">
            <Linkedin className="h-6 w-6 text-gray-400 hover:text-cyan-400 transition-colors" />
          </a>
          <a href="#" className="bg-gray-800 p-4 rounded-xl hover:bg-gray-700 transition-colors border border-gray-700 hover:border-cyan-500/50">
            <Twitter className="h-6 w-6 text-gray-400 hover:text-cyan-400 transition-colors" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;