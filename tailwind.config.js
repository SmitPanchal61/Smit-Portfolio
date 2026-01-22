/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        earth: {
          bg: "#fcfbf7", // Lighter, brighter cream
          surface: "#ffffff",
          primary: "#2d6a4f", // Richer, more vibrant Forest Green
          secondary: "#d8f3dc", // Light minty green for subtle backgrounds
          text: "#1b4332", // Dark green-black text (instead of pure black)
          muted: "#52796f", // Medium green-gray
          accent: "#e07a5f", // Vibrant Terracotta/Orange for pop
        },
      },
      fontFamily: {
        heading: ['"Plus Jakarta Sans"', "sans-serif"],
        body: ['"Inter"', "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.6s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        bounceSlow: {
          "0%, 100%": { transform: "translateY(-5%)" },
          "50%": { transform: "translateY(5%)" },
        },
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.6s ease-out",
        "bounce-slow": "bounceSlow 3s infinite ease-in-out",
      },
    },
  },
  darkMode: "media",
  plugins: [],
};
