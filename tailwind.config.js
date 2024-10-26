/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // fontFamily: {
        // customFont: ['"FixelVariable"', "sans-serif"],
        // Add more custom font families as needed
      // },
      backgroundImage: {
        'custom-radial': 'radial-gradient(63.95% 113.68% at 45% 110%, #8DAAF5 0%, #1A2133 100%)',
      },
      boxShadow: {
        'custom-opacity': '0 4px 6px rgba(255, 255, 255, 0.10)', // 25% opacity shadow
      },
    },
  },
  plugins: [],
}

