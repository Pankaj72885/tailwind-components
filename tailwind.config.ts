import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{css,ts,js}",
    "./examples/**/*.{html,js,ts,vue,svelte}",
    "./docs/**/*.{html,js,ts,md,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        component: ["Inter Variable", "Inter", "system-ui", "sans-serif"],
        mono: [
          "JetBrains Mono Variable",
          "JetBrains Mono",
          "ui-monospace",
          "monospace",
        ],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.3s ease-out",
        "slide-in": "slideIn 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        "bounce-in": "bounceIn 0.6s ease-out",
        "scale-in": "scaleIn 0.2s ease-out",
        shimmer: "shimmer 2s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;