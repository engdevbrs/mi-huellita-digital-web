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
        // Colores del sistema veterinario
        primary: {
          DEFAULT: "#059669", // Green 600
          dark: "#047857", // Green 700
        },
        secondary: {
          DEFAULT: "#2563eb", // Blue 600
          dark: "#1d4ed8", // Blue 700
        },
        accent: {
          DEFAULT: "#dc2626", // Red 600
        },
        warning: {
          DEFAULT: "#d97706", // Orange 600
        },
        gray: {
          50: "#f9fafb",
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#6b7280",
          600: "#4b5563",
          700: "#374151",
          800: "#1f2937",
          900: "#111827",
        },
        // Colores de estado
        success: "#059669",
        error: "#dc2626",
        info: "#2563eb",
        // Backgrounds y text
        background: "#f9fafb",
        surface: "#ffffff",
        text: {
          primary: "#111827",
          secondary: "#6b7280",
          light: "#9ca3af",
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
