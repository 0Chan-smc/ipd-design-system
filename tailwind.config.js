/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,md,mdx}", "./docs/**/*.{md,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Noto Sans KR', 'sans-serif']
      }
    },
  },
  plugins: [
		require("tailwindcss-animate"),
	],
  darkMode: ["class", '[data-theme="dark"]'],
  corePlugins: {
    preflight: false,
  },
  blocklist: ["container"],
};