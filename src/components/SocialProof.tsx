import React from 'react';
import { Quote } from 'lucide-react';

const SocialProof = () => {
  return (
    <section className="py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl relative">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
              <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center">
                <Quote className="h-6 w-6 text-white" />
              </div>
            </div>
            
            <blockquote className="text-2xl md:text-3xl font-medium text-gray-900 mb-8 leading-relaxed">
              "It's like having a second support team — without hiring more staff. Our patients get instant responses, and our team can focus on providing better care."
            </blockquote>
            
            <div className="flex items-center justify-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">DS</span>
              </div>
              <div className="text-left">
                <div className="font-semibold text-gray-900">Dr. Sarah Mitchell</div>
                <div className="text-gray-600">Family Practice Clinic</div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">60%</div>
              <div className="text-gray-600">Reduction in phone calls</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
              <div className="text-gray-600">Availability for patients</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-green-500 mb-2">95%</div>
              <div className="text-gray-600">Customer satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;