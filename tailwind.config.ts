import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: { navy: "#0B1F3A", ink: "#16304F", cyan: "#16DCC5", mist: "#F3F7F9" },
      boxShadow: { soft: "0 20px 55px rgba(11, 31, 58, 0.08)" }
    }
  },
  plugins: []
} satisfies Config;
