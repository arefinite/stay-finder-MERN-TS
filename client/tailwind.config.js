/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['"Roboto"', 'sans-serif'],
    },
    extend: {
      colors: {
        darker: '#36453B',
        dark: '#515751',
        light: '#596869',
        lighter: '#C2C1A5',
        lightest: '#f5f9e9',
      },
    },
  },
  plugins: [],
}
