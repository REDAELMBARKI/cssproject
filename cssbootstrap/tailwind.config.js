/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",           // Ensure this points to your main HTML file
    "./src/**/*.{js,ts,jsx,tsx}",  // If your JS/TS files are in the src folder
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}
