import type { Config } from "tailwindcss";

const config: Config = {
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
        "blue-custom": "#003C5E",
        "yellow-custom": "#F39322",
        "light-blue-custom": "#1D4988",
      },
      screens: {
        "custom-xl": "1380px",
        "full-xl": "1650px",
      },
    },
  },
  plugins: [],
};
export default config;
