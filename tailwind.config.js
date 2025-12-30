/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
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
        marquee: "marquee var(--duration, 30s) linear infinite",
        "marquee-reverse":
          "marquee-reverse var(--duration, 30s) linear infinite",
      },
    },
  },
  plugins: [],
};
