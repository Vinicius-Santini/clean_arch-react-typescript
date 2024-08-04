/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cinder': '#151515',
        'dark-jungle-green': '#202020',
        'iridium': '#3D3C3A'
      },
      gridTemplateColumns: {
        // added new 4 column grid as new4
        'new3': 'repeat(3, 382.75px)'
      },
    },
  },
  plugins: [],
}

