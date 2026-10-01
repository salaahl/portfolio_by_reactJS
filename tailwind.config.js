/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "var(--paper)",
        ink: "var(--ink)",
        green: "var(--green)",
        red: "var(--red)",
        muted: "var(--muted)",
        "green-ink": "var(--green-ink)",
      },
    },
  },
  plugins: [],
};
