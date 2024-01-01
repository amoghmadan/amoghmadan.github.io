/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      screen: 'rgb(var(--color-screen) / <alpha-value>)',
      content: 'rgb(var(--color-content) / <alpha-value>)',
      action: 'rgb(var(--color-action) / <alpha-value>)',
    },
  },
  plugins: [],
}

