/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-gradient":
          "linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.85))",
        "hero-gradient-dark":
          "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.95))",
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        primary: {
          DEFAULT: "#1E40AF", // Deep blue
          light: "#60A5FA", // Brighter blue
          dark: "#1E3A8A", // Darker blue
          darkMode: "#2563EB", // Vibrant blue for dark mode
          customDark: "#111827", // Deep black-blue for dark mode
        },
        secondary: {
          DEFAULT: "#F97316", // Vibrant orange
          light: "#FDBA74", // Light orange
          dark: "#C2410C", // Deep orange
          darkMode: "#FB923C", // Bright orange for dark mode
        },
        accent: {
          red: "#EF4444", // Vivid red
          orange: "#F97316", // Matching orange
          teal: "#2DD4BF", // Brighter teal
          charcoal: "#1F2937", // Dark charcoal
          charcoalDark: "#E5E7EB", // Light gray for dark mode
          cream: "#FFF7ED", // Warm cream
          creamDark: "#374151", // Dark mode cream
        },
        white: "#ffffff",
        dark: "#000000",
        formClr: "#1E3A8A", // Form blue
        formClrDark: "#2563EB", // Form blue dark mode
      },
      screens: {
        xs: "400px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        mod: { max: "639px" },
        expcard: { max: "1066px" },
        minilg: { min: "899px" },
        maxlg: { max: "900px" },
        mid: { max: "767px" },
        Nlg: { max: "1023px" },
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        "montserrat-subrayada": ["Montserrat Subrayada", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      keyframes: {
        "slide-in-right": {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        "fade-in": { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
        "scale-up": {
          "0%": { transform: "scale(0.95)" },
          "100%": { transform: "scale(1)" },
        },
        parallax: {
          "0%": { backgroundPosition: "center 0" },
          "100%": { backgroundPosition: "center 20%" },
        },
        "pulse-slow": {
          "0%": { opacity: 0.4 },
          "50%": { opacity: 0.7 },
          "100%": { opacity: 0.4 },
        },
      },
      animation: {
        "slide-in-right": "slide-in-right 0.3s ease-out",
        "fade-in": "fade-in 0.5s ease-out",
        "scale-up": "scale-up 0.2s ease-out",
        parallax: "parallax 2s ease-out",
        "pulse-slow": "pulse-slow 4s infinite",
      },
      backgroundPosition: {
        "parallax-top": "center 0",
        "parallax-bottom": "center 20%",
      },
    },
  },
};
