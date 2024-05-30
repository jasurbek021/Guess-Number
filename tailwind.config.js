/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {},
  },
  theme: {
    extend: {
      keyframes: {
        spinOnce: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(180deg)" },
        },
      },
      animation: {
        spinOnce: "spinOnce .3s linear", // 1 sekundda bir martalik aylanish
      },
    },
  },
  plugins: [],
};
