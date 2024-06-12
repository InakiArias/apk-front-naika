import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'selector', // Makes dark mode based on having a .dark class at the top instead of system based
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "naika-blue": "#2f508f",
        "naika-green": "#009440",
      },
    },
  },
  plugins: [],
};
export default config;
