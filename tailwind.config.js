export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    screens: {
      sm: '400px',
      md: '750px',
      lg: '1000px',
      xl: '1400px',
    },
    extend: {
      colors: {
        'available': '#bbf7d0',
        'booked': '#fecaca',
        'blocked': '#f3f4f6',
      }
    },
  },
  plugins: [],
}