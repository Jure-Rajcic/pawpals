/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  prefix: "tw-",
  important: true,
  theme: {
    extend: {
      screens: {
        // Bootstrap breakpoints
        'xs': '0px',          // Bootstrap does not have a specific xs class
        'sm': '576px',        // Small screens
        'md': '768px',        // Medium screens
        'lg': '992px',        // Large screens
        'xl': '1200px',       // Extra large screens
        'xxl': '1400px',      // Extra extra large screens (Bootstrap 5)
      },
    },
  },
  plugins: [],
}