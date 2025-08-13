import { useState } from 'react';
import { X, Send } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  source?: string;
}

const LeadModal: React.FC<LeadModalProps> = ({ isOpen, onClose, title = "Get Your Custom Bot", source = "unknown" }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    businessType: '',
    domain: '',
    description: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('Leads')
        .insert([
          {
            Name: formData.name,
            Email: formData.email,
            Business_type: formData.businessType,
            Domain: formData.domain,
            Description: formData.description,
            Source: source // NEW
          }
        ]);

      if (error) throw error;

      setIsSubmitted(true);
      setTimeout(() => {
        onClose();
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          businessType: '',
          domain: '',
          description: ''
        });
      }, 2000);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-black/10 backdrop-blur-sm rounded-2xl p-8 max-w-md w-full border border-white/10 animate-in fade-in zoom-in duration-300 shadow-2xl">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold text-white">{title}</h3>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white transition-colors p-2"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {isSubmitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Send className="h-8 w-8 text-white" />
            </div>
            <h4 className="text-xl font-semibold text-white mb-2">Thank you!</h4>
            <p className="text-slate-400">We'll be in touch within 24 hours.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-black/10 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500/50 transition-colors"
                placeholder="Your full name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Business Email *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-black/10 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500/50 transition-colors"
                placeholder="your@business.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Business Type *
              </label>
              <select
                name="businessType"
                value={formData.businessType}
                onChange={handleChange}
                required
                className="w-full bg-slate-800 text-white border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
                style={{
                  WebkitAppearance: 'none',
                  MozAppearance: 'none',
                  appearance: 'none',
                  backgroundColor: '#000000', // fallback for unsupported Tailwind classes
                }}
              >
                <option value="" disabled hidden>Select your business type</option>
                <option className="text-white" value="Hotel">Hotel</option>
                <option className="text-white" value="Clinic">Clinic</option>
                <option className="text-white" value="B2B">B2B</option>
                <option className="text-white" value="Agency">Agency</option>
                <option className="text-white" value="Other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Website Domain
              </label>
              <input
                type="text"
                name="domain"
                value={formData.domain}
                onChange={handleChange}
                className="w-full bg-black/10 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500/50 transition-colors"
                placeholder="yourbusiness.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Brief Description of Needs
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={3}
                className="w-full bg-black/10 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500/50 transition-colors resize-none"
                placeholder="Tell us about your automation needs..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-cyan-600 text-white text-sm font-semibold py-3 rounded-xl mt-4 hover:bg-cyan-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300"
              >
              {isSubmitting ? 'Submitting...' : 'Send Request'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default LeadModal;