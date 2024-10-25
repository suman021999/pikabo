/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./main/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'primary': 'radial-gradient(at top, #1f3756, #141539)',
        'link': 'url("/public/bg-triangle.svg")',
        'lotus': 'url("/bg-star.png")',
        'cross': 'url("/bg-cross.png")',
      },
    },
  },
  plugins: [],
}
