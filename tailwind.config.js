module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "blue-text": "#007794",
        "blue-line": "#6cc3d4",
        "gray-line": "#c8d8db",
        "gree-line": "#87aaa1",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
