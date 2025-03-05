/** @type {import('tailwindcss').Config} */
import { nextui } from "@nextui-org/react";

export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        default: "#008080", // ORANGE
        primary: "#4dd141", // GREEN
        secondary: "#008080", // CYAN
        success: "#FEFAF6",
        white: "fff",
        "white-200": "#f3f3f3",
        "white-400": "#e9f3ec",
      },
    },
    fontFamily: {
      custom: ["Roboto"],
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            primary: {
              DEFAULT: "#7cff61",
              foreground: "#000",
            },
            secondary: {
              DEFAULT: "#3100ff",
              foreground: "#fff",
            },
          },
        },
      },
    }),
  ],
};
