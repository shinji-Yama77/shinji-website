module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        'body': '#17171F',
        'try': 'hsl(49 37% 94%)'
      },
      fontFamily: {
        Poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
