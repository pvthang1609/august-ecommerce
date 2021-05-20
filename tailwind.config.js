module.exports = {
  darkMode: "class",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {},
    fontFamily: {
      "Open Sans": ["Open Sans", "sans-serif"],
    },
  },
  variants: {
    extend: {
      filter: ["hover", "focus"],
      brightness: ["hover", "focus"],
      transform: ["active"],
      scale: ["active"],
      opacity: ["disabled"],
    },
  },
  plugins: [],
  important: true,
};
