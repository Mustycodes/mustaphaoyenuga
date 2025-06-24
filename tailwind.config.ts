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
        "primary-bg": "#1A0B2E",
        "secondary-bg": "#2D1B44",
        "primary-text": "#FFFFFF",
        "secondary-text": "#C4B5D9",
        "muted-text": "#8B7BA3",
        "primary-accent": "#FBBF24",
        "secondary-accent": "#F59E0B",
        border: "#3D2B52",
      },
    },
  },
  plugins: [],
};
export default config;
