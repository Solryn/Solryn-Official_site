import { Heart, Building2, ArrowRight } from 'lucide-react';

const ServiceSplit = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-show-animated-bg">
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none z-0">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(34, 211, 238, 0.2) 1px, transparent 0)`,
              backgroundSize: '60px 60px',
              animation: 'float 20s ease-in-out infinite'
            }}
          ></div>
        </div>

        {/* Floating Orbs */}
        
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Clinics Card */}
          <div className="group bg-gradient-to-br from-black-800 to-black-900 rounded-3xl p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10 hover:scale-105 border border-gray-700 hover:border-cyan-500/50">
            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
              <Heart className="h-8 w-8 text-white" />
            </div>
            
            <h3 className="text-3xl font-bold text-white mb-6">Clinics</h3>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center text-gray-300">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mr-4"></div>
                <span className="text-lg">Handle intake and appointment queries</span>
              </div>
              <div className="flex items-center text-gray-300">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mr-4"></div>
                <span className="text-lg">Automate FAQs and follow-ups</span>
              </div>
              <div className="flex items-center text-gray-300">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mr-4"></div>
                <span className="text-lg">Let staff focus on patient care</span>
              </div>
            </div>
            
            <button className="group/btn bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 flex items-center space-x-2">
              <span>See Clinic Chatbot Demo</span>
              <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Hotels Card */}
          <div className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10 hover:scale-105 border border-gray-700 hover:border-cyan-500/50">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
              <Building2 className="h-8 w-8 text-white" />
            </div>
            
            <h3 className="text-3xl font-bold text-white mb-6">Hospitality</h3>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center text-gray-300">
                <div className="w-2 h-2 bg-purple-400 rounded-full mr-4"></div>
                <span className="text-lg">Answer guest FAQs instantly — parking, Wi-Fi, check-in, amenities</span>
              </div>
              <div className="flex items-center text-gray-300">
                <div className="w-2 h-2 bg-purple-400 rounded-full mr-4"></div>
                <span className="text-lg">Handle after-hours inquiries</span>
              </div>
              <div className="flex items-center text-gray-300">
                <div className="w-2 h-2 bg-purple-400 rounded-full mr-4"></div>
                <span className="text-lg">Scale without expanding your team</span>
              </div>
            </div>
            <div className="absolute inset-0 opacity-5 pointer-events-none z-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, rgba(34, 211, 238, 0.2) 1px, transparent 0)",
            backgroundSize: '60px 60px',
            animation: 'float 20s ease-in-out infinite'
          }}
        ></div>
      </div>
            <button className="group/btn bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:from-purple-400 hover:to-pink-400 transition-all duration-300 shadow-lg hover:shadow-purple-500/25 flex items-center space-x-2">
              <span>View Hospitality Demo</span>
              <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSplit;