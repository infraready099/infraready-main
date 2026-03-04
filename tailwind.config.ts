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
        "ir-navy": "#04091A",
        "ir-surface": "rgba(255,255,255,0.03)",
        "ir-brand": "#0EA5E9",
        "ir-text": "#F0F9FF",
        "ir-muted": "#64748B",
        "ir-secondary": "#94A3B8",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-glow":
          "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(14,165,233,0.08) 0%, transparent 70%)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
        },
        "pulse-dot": {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.5", transform: "scale(0.85)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
      },
      animation: {
        float: "float 4s ease-in-out infinite",
        "pulse-dot": "pulse-dot 2s ease-in-out infinite",
        "fade-up": "fade-up 0.6s ease-out forwards",
        shimmer: "shimmer 3s linear infinite",
      },
      boxShadow: {
        "glow-sky": "0 0 40px rgba(14, 165, 233, 0.15)",
        "glow-sky-sm": "0 0 20px rgba(14, 165, 233, 0.12)",
        "card-hover": "0 8px 32px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(14, 165, 233, 0.2)",
      },
    },
  },
  plugins: [],
};

export default config;
