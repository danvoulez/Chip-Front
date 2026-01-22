import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-canvas": "var(--bg-canvas)",
        "bg-surface": "var(--bg-surface)",
        "bg-surface-hover": "var(--bg-surface-hover)",
        "border-proof": "var(--border-proof)",
        "text-primary": "var(--text-primary)",
        "text-secondary": "var(--text-secondary)",
        "text-tertiary": "var(--text-tertiary)",
        "accent-verify": "var(--accent-verify)",
        "accent-proof": "var(--accent-proof)",
        "accent-warn": "var(--accent-warn)",
        "accent-fail": "var(--accent-fail)"
      },
      fontFamily: {
        ui: ["Inter", "Geist Sans", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "SF Mono", "Roboto Mono", "monospace"]
      },
      borderRadius: {
        card: "14px",
        button: "12px",
        panel: "16px",
        pill: "999px"
      },
      spacing: {
        "grid-gap": "16px",
        "card-padding": "14px",
        "panel-padding": "16px",
        "sidebar-padding": "12px"
      },
      boxShadow: {
        surface: "0 8px 30px rgba(0,0,0,0.45)",
        hover: "0 10px 36px rgba(0,0,0,0.55)"
      }
    }
  },
  plugins: []
};

export default config;
