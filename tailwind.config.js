/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#121212",
        surface: "#1A1A1A",
        panel: "#242424",
        cloud: "#F5F5F5",
        steel: "#9CA3AF",
        orange: "#FF5722",
        "deep-orange": "#D84315",
        lime: "#A3E635",
        red: "#EF4444",
      },
      fontFamily: {
        display: ["'Anton'", "sans-serif"],
        body: ["'Barlow'", "sans-serif"],
      },
      backgroundImage: {
        "orange-gradient": "linear-gradient(135deg, #FF5722 0%, #D84315 100%)",
        "lime-gradient": "linear-gradient(135deg, #A3E635 0%, #65A30D 100%)",
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(0, 0, 0, 0.35)",
        soft: "0 10px 40px -10px rgba(255, 87, 34, 0.45)",
      },
      screens: { xs: "320px" },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-16px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0 50%" },
        },
        pulseBar: {
          "0%, 100%": { transform: "scaleY(0.4)" },
          "50%": { transform: "scaleY(1)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 1.4s ease infinite",
        "pulse-bar": "pulseBar 1.2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
