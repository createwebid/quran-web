module.exports = {
  purge: ["./pages/**/*.js", "./component/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      quran: ["LPMQ Isep Misbah"],
    },
    extend: {
      colors: {
        "blue-line": "#6cc3d4",
        "blue-text": "#007794",
        "gray-line": "#c8d8d8",
        "brown-text": "#B7AAA1",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
