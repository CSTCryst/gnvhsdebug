// tailwind.config.js
import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#CAEDFF",
          DEFAULT: "#93C6E7",
          dark: "#176B87",
        },
        secondary: {
          light: "#FEF9EF",
          DEFAULT: "#FFD28F",
          dark: "#F1A661",
        },
        background: "#F8FDFF",
        dark: "#053B50",
        text: {
          primary: "#053B50",
          secondary: "#176B87",
          light: "#64748b",
        }
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Plus Jakarta Sans", "sans-serif"],
      },
      boxShadow: {
        card: "0 4px 20px -2px rgba(0, 0, 0, 0.06)",
        soft: "0 8px 30px rgba(0, 0, 0, 0.05)",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
    },
  },
  plugins: [],
} satisfies Config;