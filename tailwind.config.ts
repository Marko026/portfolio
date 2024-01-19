import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundClip: {
        text: "text",
      },
      fontFamily: {
        figTree: ["FigTree", "sans-serif"],
      },
      colors: {
        white: {
          800: "#CBCBFF",
          900: "#FfFfFf",
        },
        black: {
          100: "#08080F",
          200: "#191939",
        },
      },
    },
  },
  variants: {},
  plugins: [require("tailwindcss-animate")],
};
export default config;
