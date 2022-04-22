module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        shake: 'shake 0.3s ease-in-out',
      },
      keyframes: {
        shake: {
          '25%': { transform: 'translate(4px)' },
          '50%': { transform: 'translate(-4px)' },
          '75%': { transform: 'translate(4px)' },
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
