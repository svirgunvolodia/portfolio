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
    },
  },
  plugins: [],
};
