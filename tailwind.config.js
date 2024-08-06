/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        herobg: "rgb(12, 9, 74)",
        btnbg: "rgb(54, 23, 186)",
        spantxt: "rgb(2, 196, 253)",
        h2clr: "rgb(49, 42, 80)",
        globalOverlay: "rgb(232, 244, 255)",
        "custom-gradient":
          "linear-gradient(30deg,#bebae9,#e0cfef 15%,#f6effa 50%,#e5cef9 85%,#e9e7ff)",
      },
    },
  },
  plugins: [require("flowbite/plugin"), require("@tailwindcss/forms")],
};
