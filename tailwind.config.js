/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Wix: ["Wix Madefor Display", "sans-serif"],
      },
      padding: {
        custom: "calc((100% - 960px) / 2)",
        nav: "calc((100% - 1280px) / 2)",
      },
      colors: {
        buttonBg: "#161e29",
        textGrey: "#848795",
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [import("tailwind-scrollbar"), import("daisyui")],
};
