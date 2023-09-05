import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        reveal: "reveal 2s cubic-bezier(.215,.61,.355,1)  both  ",
        "spin-slow": "spin 3s linear infinite",
        "slide-in-right": "slide-in-right 1.0s ease-out .25s both",
        "slide-in-left": "slide-in-left 1.5s ease-out  both",
        "slide-in": "slide-in 3s ease-in-out forwards",
        "fade-in": "fadeIn 1s ease-in-out forwards",
      },
      animationDelay: {
        0: "0ms", // No delay
        500: "500ms", // 500ms delay
        1000: "1000ms",
      },
      keyframes: {
        "slide-in-right": {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        "slide-in-left": {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        "slide-in": {
          "0%": {
            transform: "translateX(100%) translateY(-100%) rotate(-45deg)",
            opacity: "0",
          },
          "100%": {
            transform: "translateX(0) translateY(0) rotate(0deg)",
            opacity: "1",
          },
        },
        reveal: {
          "0%": {
            opacity: "0",
            transform: "scale(0.8)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)",
          },
        },
        fadeIn: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
