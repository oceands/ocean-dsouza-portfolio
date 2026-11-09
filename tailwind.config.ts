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
        canvas: {
          DEFAULT: "var(--bg-canvas)",
          surface: "var(--bg-surface)",
          elevated: "var(--bg-elevated)",
          card: "var(--bg-card)",
        },
        ink: {
          DEFAULT: "var(--ink)",
          muted: "var(--ink-muted)",
          subtle: "var(--ink-subtle)",
        },
        stage: {
          emerald: "#22C55E",
          blue: "#1D4ED8",
          orange: "#EA580C",
          yellow: "#FACC15",
          lime: "#A3E635",
          paper: "#F8FAFC",
          charcoal: "#141416",
        },
      },
      fontFamily: {
        sans: ["'Switzer'", "system-ui", "-apple-system", "sans-serif"],
        display: ["'Switzer'", "system-ui", "-apple-system", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
