import React, { useState, useEffect } from 'react';
import { MessageCircle, User, Bot } from 'lucide-react';

const ChatbotPreview = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentMessage, setCurrentMessage] = useState(0);

  const messages = [
    { type: 'user', text: "Can I get a late checkout?", delay: 0 },
    { type: 'bot', text: "Absolutely! I've scheduled it for you. Anything else I can help with?", delay: 2000 },
    { type: 'user', text: "What time is breakfast served?", delay: 4000 },
    { type: 'bot', text: "Breakfast is served from 7:00 AM to 10:30 AM in our main dining room. Would you like me to make a reservation?", delay: 6000 }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('chatbot-preview');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        if (currentMessage < messages.length - 1) {
          setCurrentMessage(prev => prev + 1);
        }
      }, messages[currentMessage]?.delay || 2000);

      return () => clearTimeout(timer);
    }
  }, [isVisible, currentMessage, messages]);

  return (
    <section id="chatbot-preview" className="relative py-24 overflow-hidden" style={{ backgroundColor: '#0A0D10' }}>
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

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
            See Your AI Assistant in Action
          </h2>
          <p className="text-xl text-slate-400 font-light max-w-3xl mx-auto">
            Watch how our intelligent chatbots handle real guest and patient inquiries with human-like responses.
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <div className={`glass-morphism rounded-2xl border border-slate-700/30 overflow-hidden transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-cyan-500 to-emerald-500 p-4 flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <MessageCircle className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold">Solryn AI Assistant</h3>
                <p className="text-white/80 text-sm">Online • Responds instantly</p>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="p-6 space-y-4 h-80 overflow-y-auto">
              {messages.slice(0, currentMessage + 1).map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'} animate-in slide-in-from-bottom duration-500`}
                  style={{ animationDelay: `${index * 0.5}s` }}
                >
                  <div className={`flex items-start space-x-2 max-w-xs ${message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      message.type === 'user' 
                        ? 'bg-blue-600' 
                        : 'bg-gradient-to-r from-emerald-500 to-blue-500'
                    }`}>
                      {message.type === 'user' ? (
                        <User className="h-4 w-4 text-white" />
                      ) : (
                        <Bot className="h-4 w-4 text-white" />
                      )}
                    </div>
                    <div className={`px-4 py-2 rounded-2xl ${
                      message.type === 'user'
                        ? 'bg-blue-600 text-white'
                        : 'bg-black/10 backdrop-blur-sm text-slate-200 border border-white/10'
                    }`}>
                      <p className="text-sm">{message.text}</p>
                    </div>
                  </div>
                </div>
              ))}
              
              {currentMessage < messages.length - 1 && (
                <div className="flex justify-start">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full flex items-center justify-center">
                      <Bot className="h-4 w-4 text-white" />
                    </div>
                    <div className="bg-black/10 backdrop-blur-sm border border-white/10 rounded-2xl px-4 py-2">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Chat Input (Static) */}
            <div className="p-4 border-t border-white/10">
              <div className="flex space-x-2">
                <input
                  type="text"
                  placeholder="Type your message..."
                  className="flex-1 bg-black/10 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-2 text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500/50"
                  disabled
                />
                <button className="bg-gradient-to-r from-cyan-500 to-emerald-500 text-white p-2 rounded-xl">
                  <MessageCircle className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatbotPreview;