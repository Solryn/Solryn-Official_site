/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
     extend: {
     boxShadow: {
       'glow-blue': '0 0 15px rgba(59, 130, 246, 0.25)',
       'glow-emerald': '0 0 15px rgba(52, 211, 153, 0.25)',
       'glow-cyan': '0 0 15px rgba(6, 182, 212, 0.25)',
       'glow-purple': '0 0 15px rgba(168, 85, 247, 0.25)',
     },
     animation: {
       'fade-in': 'fadeIn 0.5s ease-out',
       'zoom-in': 'zoomIn 0.5s ease-out',
       'slide-in-from-bottom': 'slideInFromBottom 0.5s ease-out'
     },
     keyframes: {
       fadeIn: {
         '0%': { opacity: 0 },
         '100%': { opacity: 1 },
       },
       zoomIn: {
         '0%': { transform: 'scale(0.95)', opacity: 0 },
         '100%': { transform: 'scale(1)', opacity: 1 },
       },
       slideInFromBottom: {
         '0%': { transform: 'translateY(20px)', opacity: 0 },
         '100%': { transform: 'translateY(0)', opacity: 1 },
       }
     }
   }
  },
  plugins: [],
};
