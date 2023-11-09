/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        test: ["Canela", "ui-serif"],
      },
      boxShadow: {
        custom: "0px 0px 4px 1px rgba(255, 241, 115, 0.7)",
      },
      colors: {
        primary: {
          lighter: "#F7CE75",
          light: "#ECB848",
          normal: "#B98F34",
          opaco: "rgba(147, 134, 106, 1)",
        },
        graytext: "#93866A",
        gradient: {
          300: "rgba(236, 184, 72, 1)",
          400: "rgba(237, 201, 124, 1)",
          500: "rgba(236, 184, 73, 1)",
        },
      },
    },
  },
  plugins: [],
};
