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
        primary: {
          blue: {
            DEFAULT: "#3b82f6",
            dark: "#1e40af",
            light: "#60a5fa",
          },
        },
        accent: {
          red: "#ef4444",
          orange: "#f97316",
        },
        capitol: {
          white: "#f8fafc",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Poppins", "Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
