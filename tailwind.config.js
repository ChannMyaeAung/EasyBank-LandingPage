/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBlue: "hsl(233, 26%, 24%)",
        limeGreen: "hsl(136, 65%, 51%)",
        brightCyan: " hsl(192, 70%, 51%)",
        grayishBlue: "hsl(233, 8%, 62%)",
        lightGrayBlue: "hsl(220, 16%, 96%)",
        veryLightGray: "hsl(0, 0%, 98%)",
        White: "hsl(0, 0%, 100%)",
      },
      backgroundSize: {
        auto: "auto",
        cover: "cover",
        contain: "contain",
        "100%": "200%",
        16: "4rem",
      },
    },
  },
  plugins: [],
};
