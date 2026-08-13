import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-poppins)", "Inter", "Arial", "sans-serif"],
        inter: ["var(--font-inter)", "Arial", "sans-serif"]
      },
      colors: {
        ink: "#1a1a1a",
        muted: "#505050",
        soft: "#f3f3f3",
        yellow: "#ffc726"
      },
      boxShadow: {
        soft: "0 12px 16px rgba(0,0,0,0.06)",
        header: "0 4px 30px rgba(0,0,0,0.03)"
      }
    }
  },
  plugins: []
};

export default config;
