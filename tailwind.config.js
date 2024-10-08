/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "custom-multi":
          "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        "text-color": "#111111",
        footerColor: "#133d4a",
        "light-gray": "#EAEAEA",
      },
      fontSize: {
        fontText: "10px",
      },
      backgroundImage: {
        "custom-image":
          "url('https://preview.cruip.com/job-board/images/hero-illustration.svg')",
      },
    },
  },
  plugins: [],
};
