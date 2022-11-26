const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        goldtwnd: "	#f9da87 ",
        black: "#151515",
        graytwnd: "#373737",
        yellowtwnd: "#635d5d",
      },
    },
  },
  plugins: [],
};
