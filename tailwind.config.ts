/** @type {import('tailwindcss').Config} */
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      NeueMontreal: ["NeueMontreal-Light", "sans"],
    },
    extend: {},
  },
  plugins: [],
};

export default config;
