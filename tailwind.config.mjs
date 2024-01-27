/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#4BCAEA",
        background: "#031C40",
        "background-gradient":
          "linear-gradient(0deg, #000c09 0%, #031f49 100%)",
      },
      animation: {
        marquee: "marquee 30s linear infinite reverse",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
};
