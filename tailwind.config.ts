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
        "primary-light": "#D19AFF",
        primary: "#9966CC",
        "primary-dark": "#633595",
        "secondary": "#99CC66",
        "custom-gray": "#818181",
      },
    },
  },
  plugins: [],
};
export default config;
