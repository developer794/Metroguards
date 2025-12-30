/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    // Navy gradient colors
    'from-navy-600', 'via-navy-600', 'to-navy-700', 'bg-navy-600', 'bg-navy-700',
    'text-navy-600', 'text-navy-700', 'border-navy-600',
    // Gold colors
    'bg-gold-400', 'bg-gold-500', 'text-gold-400', 'text-gold-500',
    'border-gold-400', 'from-gold-400', 'to-gold-500',
    // Gradient utilities
    'bg-gradient-to-r', 'bg-gradient-to-br',
    // Other brand utilities
    'hover:bg-navy-700', 'hover:bg-gold-500',
  ],
  theme: {
    extend: {
      colors: {
        // Metro Guards Brand Colors
        navy: {
          50: '#f0f1f5',
          100: '#d9dce6',
          200: '#b3b9cd',
          300: '#8d96b4',
          400: '#67739b',
          500: '#414f82',
          600: '#1e2247', // Primary brand color
          700: '#181b38',
          800: '#121429',
          900: '#0c0d1a',
          950: '#06070d',
        },
        gold: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fdc51a', // Primary accent color
          500: '#eab308',
          600: '#ca8a04',
          700: '#a16207',
          800: '#854d0e',
          900: '#713f12',
          950: '#422006',
        },
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-15px)" },
        },
        drift: {
          "0%": { transform: "translate(0, 0)" },
          "50%": { transform: "translate(12px, -12px)" },
          "100%": { transform: "translate(-12px, 12px)" },
        },
        fadein: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeup: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideIn: {
          "0%": { opacity: "0", transform: "translateX(-10px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-33.333333%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-33.333333%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      animation: {
        float: "float 4s ease-in-out infinite",
        drift: "drift 6s ease-in-out infinite",
        "spin-slow": "spin 12s linear infinite",
        "fade-in": "fadein 0.6s ease-out forwards",
        "fade-up": "fadeup 0.6s ease-out forwards",
        "slide-in": "slideIn 0.3s ease-out forwards",
        "slide-up": "slideUp 0.3s ease-out forwards",
        "scale-in": "scaleIn 0.2s ease-out forwards",
        shimmer: "shimmer 2s linear infinite",
        marquee: "marquee var(--duration, 30s) linear infinite",
        "marquee-reverse": "marquee-reverse var(--duration, 30s) linear infinite",
      },
      boxShadow: {
        'navy': '0 10px 40px rgba(30, 34, 71, 0.3)',
        'gold': '0 4px 12px rgba(253, 197, 26, 0.3)',
        'card': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'card-hover': '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
    },
  },
  plugins: [],
};
