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
      fontSize: {
        h1Mobile: "var(--h1-mobile)",
        h1Desktop: "var(--h1-Desktop)",
        h2Mobile: "var(--h2-mobile)",
        h2Desktop: "var(--h2-Desktop)",
      },
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
