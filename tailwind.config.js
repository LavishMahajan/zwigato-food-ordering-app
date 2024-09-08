/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        typing: {
          from: { width: "0%" },
          to: { width: "100%" },
        },
        blinkCaret: {
          "50%": { borderColor: "transparent" },
        },
        fadeInOut: {
          "0%, 100%": { opacity: "0" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        typing: "typing 6s steps(30, end) forwards", // Control typing speed
        blinkCaret: "blinkCaret 0.75s step-end infinite", // Blinking caret animation
        fadeInOut: "fadeInOut 6s ease-in-out infinite", // Fade effect
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
