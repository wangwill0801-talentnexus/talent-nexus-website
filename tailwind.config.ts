import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        navy: "rgb(var(--navy) / <alpha-value>)",
        ink: "rgb(var(--ink) / <alpha-value>)",
        cyan: "rgb(var(--cyan) / <alpha-value>)",
        mist: "rgb(var(--mist) / <alpha-value>)"
      },
      boxShadow: { soft: "0 20px 55px rgba(11, 31, 58, 0.08)" }
    }
  },
  plugins: []
} satisfies Config;
