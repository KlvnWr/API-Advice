/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/components/advice-container/index.tsx",
    "./src/App.tsx",
    "main.tsx",
    "App.scss",
    "index.scss"],
  theme: {
    extend: {
      colors: {
        'LightCyan': '#cee3e9',
        'NeonGreen': '#52ffa8',
        'GrayishBlue': '#4e5d73',
        'DarkGrayishBlue': '#323a49',
        'DarkBlue': '#1f2632',
      },
    },
  },
  plugins: [],
}

