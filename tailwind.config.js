/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#14172B",
        "secondary-color": "#ECF0FF",
        "tertiary-color": "#737BAE",
        "green-color": "#00FFA3",
        "red-color": "#FF4D4D",
      },
    },
  },
  plugins: [],
};
