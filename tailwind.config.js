module.exports = {
  purge: {
    enabled: true,
    content: ["./public/**/*.html"],
  },
  darkMode: false, // or 'media' or 'class'

  theme: {
    extend: {
      colors: {
        primary: "#FF6363",
        secondry: {
          100: "#E2E2D5",
          200: "#888883",
        },
      },

      fontFamily: {
        body_Nunito: ["Nunito", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
