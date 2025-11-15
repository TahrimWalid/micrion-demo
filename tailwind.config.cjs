// tailwind.config.cjs
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        micrionGreen: "#005a4b",
        micrionCream: "#fff1d2",
        micrionRed: "#ff4d5a",
        micrionYellow: "#ffe55f",
        micrionDark: "#05060b",
      },
      fontFamily: {
        sans: [
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Inter",
          "sans-serif",
        ],
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(4px)" },
          "50%": { transform: "translateY(-6px)" },
        },
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(16px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        float: "float 5s ease-in-out infinite",
        fadeUp: "fadeUp 0.6s ease-out forwards",
        marquee: "marquee 20s linear infinite",
      },
      borderRadius: {
        toast: "60px",
      },
      boxShadow: {
        soft: "0 18px 45px rgba(0,0,0,0.55)",
      },
    },
  },
  plugins: [],
};
