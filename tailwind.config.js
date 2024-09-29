module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ["var(--font-trap)", "var(--font-inter)", "sans-serif"],
        body: ["var(--font-dm-sans)", "var(--font-inter)", "sans-serif"],
      },
      colors: {
        background: "#DFEBF6",
        skyBlue: "#698caf",
        oceanBlue: "#4242FA",
      },
      transitionProperty: {
        width: "width",
      },
      keyframes: {
        bounceOutside: {
          "0%": { transform: "scaleX(1) scaleY(1)" },
          "50%": { transform: "scaleX(1.07) scaleY(1.2)" },
          "100%": { transform: "scaleX(1.05) scaleY(1.15)" },
        },
        bounceInside: {
          "0%": { transform: "scaleX(1.05) scaleY(1.15)" },
          "50%": { transform: "scaleX(0.95) scaleY(0.85)" },
          "100%": { transform: "scaleX(1) scaleY(1)" },
        },
      },
      animation: {
        bounceOutside: "bounceOutside 0.4s ease forwards",
        bounceInside: "bounceInside 0.4s ease forwards",
      },
    },
  },
  plugins: [],
};
