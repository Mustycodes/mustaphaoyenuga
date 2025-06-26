import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2D1B2E",
        "primary-light": "#3F2A42",
        "primary-darker": "#1F1220",
        light: "#FFFFFF",
        muted: "#D1C4D6",
        subtle: "#9B8BA0",
        accent: "#FF6B6B",
        "accent-alt": "#FF5252",
        border: "#4A3550",
      },
    },
  },
  plugins: [],
};
export default config;
