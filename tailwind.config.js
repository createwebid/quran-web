module.exports = {
  purge: ["./pages/**/*.js", "./components/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "blue-line": "#6cc3d4",
        "blue-text": "#007794",
        "gray-line": "#c8d8d8",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
