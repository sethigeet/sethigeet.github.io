/** @type {import("prettier").Config} */
export default {
  trailingComma: "all",
  tabWidth: 2,
  semi: true,
  singleQuote: false,
  // NOTE: Specifying these is not necessary but it is needed if using `pnpm`
  // due to a known bug
  plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
};
