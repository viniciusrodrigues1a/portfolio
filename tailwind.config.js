/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        mono: [
          "Roboto Mono",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "Liberation Mono",
          "Courier New",
          "monospace",
        ],
        poppins: ["Poppins", "sans-serif"],
      },
      screens: {
        desktop: "1440px",
        fhd: "1920px",
        qhd: "2560px",
        uhd: "3840px",
      },
      aspectRatio: {
        projectImageDesktop: "861 / 621", // image original res
        projectImageMobile: "621 / 308", // image original res
      },
    },
  },
  plugins: [],
};
