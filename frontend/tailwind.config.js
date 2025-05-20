/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      // Your theme extensions
    },
  },
  plugins: [require("tailwindcss-animate")],
};
