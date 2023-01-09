const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,vue}"],
  darkMode: "class",
  plugins: [require("@tailwindcss/typography")],
  theme: {
    extend: {
      borderWidth: {
        2.5: "2.5px",
      },
      colors: {
        // Variables defined in src/assets/css/variables.css
        pale: "var(--pale)",
        dark: "var(--dark)",
        "pale-yellow": "var(--pale-yellow)",
        "middle-yellow": "var(--middle-yellow)",
        yellow: "var(--yellow)",
        "dark-yellow": "var(--dark-yellow)",
        "soft-gray": "var(--soft-gray)",
        "light-gray": "var(--light-gray)",
        gray: "var(--gray)",
        "dark-gray": "var(--dark-gray)",
        "darker-gray": "var(--darker-gray)",
        "pale-blue": "var(--pale-blue)",
        "light-blue": "var(--light-blue)",
        "middle-blue": "var(--middle-blue)",
        blue: "var(--blue)",
        "pale-green": "var(--pale-green)",
        "middle-green": "var(--middle-green)",
        green: "var(--green)",
        "pale-red": "var(--pale-red)",
        "middle-red": "var(--middle-red)",
        red: "var(--red)",
        cerulean: "var(--cerulean)",
        lilac: "var(--lilac)",
        rose: "var(--rose)",
        orange: "var(--orange)",
        "light-orange": "var(--light-orange)",
        primary: "var(--primary)",
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "ui-sans-serif",
          "system-ui",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          '"Noto Sans"',
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
        serif: [
          "ui-serif",
          "Georgia",
          "Cambria",
          '"Times New Roman"',
          "Times",
          "serif",
        ],
        mono: [
          "ui-monospace",
          "Menlo",
          "Consolas",
          "SFMono-Regular",
          "Monaco",
          '"Liberation Mono"',
          '"Courier New"',
          "monospace",
        ],
      },
      maxWidth: {
        "8xl": "90rem",
      },
      screens: {
        'print': { 'raw': 'print' }
      }
    },
  },
};
