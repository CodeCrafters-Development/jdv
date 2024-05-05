/** @type {import('tailwindcss').Config} */
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      NeueMontrealLight: ["NeueMontreal-Light", "sans"],
      NeueMontrealMedium: ["NeueMontreal-Medium", "sans"],
      NeueMontrealBold: ["NeueMontreal-Bold", "sans"],
      PlayfairDisplay: ["Playfair Display", "sans"],
    },
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
      },
      backgroundImage: {
        "hero-backdrop": "url('/assets/images/hero-backdrop.png')",
      },
    },
  },
  plugins: [],
};

export default config;
