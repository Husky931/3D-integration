module.exports = {
  theme: {
    extend: {
      width: {
        101: "28rem",
      },
    },
  },
  important: true,
  mode: "jit",
  purge: {
    enabled: true,
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
