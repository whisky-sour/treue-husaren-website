/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#f5f5f7",
          surface: "#ffffff",
          text: "#111111",
          muted: "#4b5563",
          red: "#b91c1c",
          redLight: "#fecaca",
        },
      },
    },
  },
  plugins: [],
};
