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
        petzen: {
          "dark-blue": "#1a1a2e",
          "dark-blue-alt": "#2d3748",
          pink: "#FF69B4",
          "pink-dark": "#FF1493",
          "pink-light": "#FFB6C1",
          orange: "#FF6B35",
          "orange-light": "#FFA07A",
          yellow: "#FFD700",
          "yellow-light": "#FFF8DC",
          beige: "#F5F5DC",
          "beige-light": "#FFFEF0",
        },
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "system-ui", "sans-serif"],
        heading: ["var(--font-poppins)", "sans-serif"],
      },
      borderRadius: {
        petzen: "20px",
        "petzen-lg": "30px",
      },
      boxShadow: {
        petzen: "0 4px 20px rgba(0, 0, 0, 0.08)",
        "petzen-lg": "0 8px 30px rgba(0, 0, 0, 0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
