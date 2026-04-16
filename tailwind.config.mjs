/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        ink: "#0B0F12",
        vellum: "#EFE7D6",
        bone: "#B8AD96",
        ash: "#6E695D",
        rule: "#21272D",
        ember: "#4BCAEA",
        emberDeep: "#2A96B8",
        leaf: "#7A9B5E",
        // legacy aliases kept so stray refs don't break
        primary: "#4BCAEA",
        background: "#0B0F12",
      },
      fontFamily: {
        display: ['"Fraunces"', "ui-serif", "Georgia", "serif"],
        sans: ['"Instrument Sans"', "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ['"IBM Plex Mono"', "ui-monospace", "SFMono-Regular", "monospace"],
      },
      letterSpacing: {
        masthead: "-0.04em",
        wider: "0.14em",
        widest: "0.28em",
      },
      animation: {
        marquee: "marquee 48s linear infinite",
        "marquee-slow": "marquee 90s linear infinite",
        "ticker-reverse": "ticker-reverse 60s linear infinite",
        flicker: "flicker 2.8s steps(8, end) infinite",
        rise: "rise 1200ms cubic-bezier(0.2, 0.7, 0.1, 1) both",
        "rise-slow": "rise 1600ms cubic-bezier(0.2, 0.7, 0.1, 1) both",
        blink: "blink 1.1s steps(2, end) infinite",
        dash: "dash 14s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "ticker-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
        flicker: {
          "0%, 100%": { opacity: "1" },
          "45%": { opacity: "0.92" },
          "55%": { opacity: "0.78" },
          "60%": { opacity: "1" },
        },
        rise: {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        dash: {
          "0%": { "stroke-dashoffset": "0" },
          "100%": { "stroke-dashoffset": "-240" },
        },
      },
      backgroundImage: {
        grain:
          "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='220' height='220'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.86' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.94 0 0 0 0 0.9 0 0 0 0 0.84 0 0 0 0.18 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
        paper:
          "radial-gradient(1100px 600px at 85% -10%, rgba(75,202,234,0.14), transparent 65%), radial-gradient(900px 700px at -10% 110%, rgba(122,155,94,0.06), transparent 60%), linear-gradient(180deg, #0B0F12 0%, #070A0D 100%)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
